import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';

interface DiagnosticResult {
  step: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  details?: any;
}

export default function DiagnosePage() {
  const [results, setResults] = useState<DiagnosticResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runDiagnostics = async () => {
    setIsRunning(true);
    setResults([]);
    const newResults: DiagnosticResult[] = [];

    // 1. 環境変数チェック
    const envCheck: DiagnosticResult = {
      step: '環境変数',
      status: 'success',
      message: '',
      details: {
        projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
        dataset: import.meta.env.VITE_SANITY_DATASET
      }
    };

    if (!import.meta.env.VITE_SANITY_PROJECT_ID || import.meta.env.VITE_SANITY_PROJECT_ID === 'your-project-id') {
      envCheck.status = 'error';
      envCheck.message = 'プロジェクトIDが設定されていません';
    } else if (!import.meta.env.VITE_SANITY_DATASET) {
      envCheck.status = 'error';
      envCheck.message = 'データセットが設定されていません';
    } else {
      envCheck.message = '正しく設定されています';
    }
    newResults.push(envCheck);
    setResults([...newResults]);

    // 2. Sanity接続テスト
    const connectionCheck: DiagnosticResult = {
      step: 'Sanity API接続',
      status: 'success',
      message: '接続テスト中...'
    };
    
    try {
      const testQuery = '*[_type == "post"][0]';
      const result = await client.fetch(testQuery);
      connectionCheck.message = '接続成功';
      connectionCheck.details = { firstPost: result?.title || 'No posts found' };
    } catch (error: any) {
      connectionCheck.status = 'error';
      connectionCheck.message = error.message;
      
      // エラーの詳細分析
      if (error.message.includes('CORS')) {
        connectionCheck.details = {
          solution: `Sanity管理画面で "${window.location.origin}" をCORS Originsに追加してください`,
          projectUrl: `https://www.sanity.io/manage/personal/project/${import.meta.env.VITE_SANITY_PROJECT_ID}/api`
        };
      }
    }
    newResults.push(connectionCheck);
    setResults([...newResults]);

    // 3. ブラウザ環境チェック
    const browserCheck: DiagnosticResult = {
      step: 'ブラウザ環境',
      status: 'success',
      message: 'ブラウザ情報を収集しました',
      details: {
        origin: window.location.origin,
        protocol: window.location.protocol,
        userAgent: navigator.userAgent.substring(0, 50) + '...',
        online: navigator.onLine
      }
    };
    newResults.push(browserCheck);
    setResults([...newResults]);

    setIsRunning(false);
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-amber-900">Sanityブログ診断ツール</h1>
      
      <button
        onClick={runDiagnostics}
        disabled={isRunning}
        className="mb-6 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 disabled:opacity-50"
      >
        {isRunning ? '診断中...' : '診断を再実行'}
      </button>

      <div className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{result.step}</h3>
              <span className={`px-2 py-1 rounded text-sm ${
                result.status === 'success' ? 'bg-green-100 text-green-800' :
                result.status === 'error' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {result.status === 'success' ? '✓ 成功' :
                 result.status === 'error' ? '✗ エラー' : '⚠ 警告'}
              </span>
            </div>
            
            <p className="text-gray-700 mb-2">{result.message}</p>
            
            {result.details && (
              <div className="mt-3 p-3 bg-gray-50 rounded">
                <pre className="text-sm text-gray-600 overflow-x-auto">
                  {JSON.stringify(result.details, null, 2)}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-amber-50 rounded-lg">
        <h3 className="font-semibold mb-2">次のステップ:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>上記のエラーを確認してください</li>
          <li>CORS設定が必要な場合は、Sanity管理画面で設定してください</li>
          <li>環境変数が正しく設定されているか確認してください</li>
          <li>すべて緑色になったら、他の人もアクセスできるはずです</li>
        </ol>
      </div>
    </div>
  );
}