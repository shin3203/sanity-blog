# Vercelトラブルシューティングガイド

## 現在の問題: CSSファイルサイズの不一致

### 期待される値
- CSS: 53.61 kB (Ultra AIテーマ)
- JS: 503.62 kB

### Vercelでの値（問題あり）
- CSS: 32.06 kB (古いテーマ)
- JS: 508.73 kB

## 解決策

### 1. Vercelダッシュボードでキャッシュをクリア
1. https://vercel.com/shinmomos-projects/sanity-blog-public にアクセス
2. Settings → Functions → Clear Cache
3. 最新のデプロイメントで "Redeploy" → "Use existing Build Cache" のチェックを外す

### 2. 環境変数の確認
Settings → Environment Variables で以下を確認:
- VITE_SANITY_PROJECT_ID = brfkv92l
- VITE_SANITY_DATASET = production

### 3. ビルドコマンドの確認
Settings → General → Build & Development Settings:
- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist

### 4. 強制的な再デプロイ
```bash
# ローカルで実行
git commit --allow-empty -m "Force rebuild" && git push
```

### 5. それでも解決しない場合
1. プロジェクトを一度削除して再作成
2. GitHubとの連携を解除して再連携
3. 新しいプロジェクトとしてインポート

## 確認方法
デプロイ後、以下を確認:
1. ビルドログでCSSファイルサイズが53.61 kBになっているか
2. ブラウザの開発者ツール → Network → CSSファイルのサイズ
3. コンソールでエラーが出ていないか