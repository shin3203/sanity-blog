# デプロイチェックリスト - Sanityブログ

## 🚀 デプロイ前の確認事項

### 1. ローカル環境での動作確認
- [ ] `npm run dev` で正常に動作する
- [ ] http://localhost:5173/diagnose で全項目が緑色
- [ ] ブログ記事が表示される

### 2. Sanity管理画面での設定
- [ ] プロジェクトID: `brfkv92l` を確認
- [ ] CORS Origins に以下を追加：
  - [ ] `http://localhost:5173`
  - [ ] `http://localhost:5174`
  - [ ] デプロイ先のURL

### 3. デプロイプラットフォームの設定

#### Vercel の場合
```bash
# CLIでの設定
npx vercel env add VITE_SANITY_PROJECT_ID
# 値: brfkv92l

npx vercel env add VITE_SANITY_DATASET
# 値: production
```

または管理画面で：
1. Settings → Environment Variables
2. 上記の環境変数を追加
3. 再デプロイ

#### Netlify の場合
1. Site settings → Environment variables
2. 上記の環境変数を追加
3. Trigger deploy → Deploy site

### 4. デプロイ後の確認
- [ ] デプロイされたURL/diagnose にアクセス
- [ ] 全項目が緑色になっているか確認
- [ ] 他の人がアクセスできるか確認

## 🔧 トラブルシューティング

### エラー: CORS
→ Sanity管理画面でデプロイURLを追加

### エラー: 環境変数
→ デプロイプラットフォームで環境変数を設定し再デプロイ

### エラー: 404
→ SPAの設定が必要（_redirects や vercel.json）

## 📞 サポート
問題が解決しない場合は、以下の情報と共に報告してください：
- 診断ページのスクリーンショット
- ブラウザコンソールのエラーメッセージ
- デプロイプラットフォーム（Vercel/Netlify等）