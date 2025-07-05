// Sanityブログ診断スクリプト
import { createClient } from '@sanity/client';

console.log('=== Sanity Blog 診断開始 ===\n');

// 1. 環境変数の確認
console.log('1. 環境変数チェック:');
console.log(`   VITE_SANITY_PROJECT_ID: ${import.meta.env.VITE_SANITY_PROJECT_ID || '❌ 未設定'}`);
console.log(`   VITE_SANITY_DATASET: ${import.meta.env.VITE_SANITY_DATASET || '❌ 未設定'}\n`);

// 2. Sanityクライアントのテスト
console.log('2. Sanity接続テスト:');
const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'brfkv92l',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

// 3. データ取得テスト
async function testConnection() {
  try {
    console.log('   接続中...');
    const result = await client.fetch('*[_type == "post"][0...1]');
    console.log(`   ✅ 接続成功！ ${result.length}件の投稿を取得`);
    
    // 4. CORS情報を表示
    console.log('\n3. 現在のアクセス元:');
    console.log(`   Origin: ${window.location.origin}`);
    console.log(`   Protocol: ${window.location.protocol}`);
    console.log(`   Host: ${window.location.host}`);
    
  } catch (error) {
    console.error('   ❌ エラー発生:', error.message);
    
    // エラーの詳細分析
    if (error.message.includes('CORS')) {
      console.error('\n   📋 CORS設定が必要です:');
      console.error(`   Sanity管理画面で "${window.location.origin}" を追加してください`);
    } else if (error.message.includes('project')) {
      console.error('\n   📋 プロジェクトIDが無効です');
    } else if (error.message.includes('dataset')) {
      console.error('\n   📋 データセット名が無効です');
    }
  }
}

// 5. ブラウザ情報
console.log('\n4. ブラウザ情報:');
console.log(`   User Agent: ${navigator.userAgent}`);
console.log(`   オンライン状態: ${navigator.onLine ? '✅' : '❌'}`);

testConnection();