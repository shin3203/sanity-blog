# 📝 コンテンツ生成ガイド

## コンテンツ生成ツールの場所

### 1. タイトル・メタディスクリプション生成
**ファイル**: `index-gemini-v5-ultimate-free.html`
**URL**: file:///Users/omatashinichi/CascadeProjects/SEO対策タイトルgenerator/index-gemini-v5-ultimate-free.html

**使い方**:
1. Gemini APIキーを入力
2. トピックを入力（例：「AI活用術」）
3. ターゲット読者を選択
4. 「タイトルを生成」をクリック
5. 生成結果から「📤 Sanityに送る」をクリック

### 2. 記事本文生成
**ファイル**: `article-generator/index.html`
**URL**: file:///Users/omatashinichi/CascadeProjects/SEO対策タイトルgenerator/article-generator/index.html

**使い方**:
1. Gemini APIキーを入力
2. 記事のタイトルを入力
3. キーワードを入力（カンマ区切り）
4. 記事の長さを選択（1500〜3000字）
5. 「✨ 記事を生成する」をクリック
6. 生成完了後「📤 Sanityへ送る」をクリック

## 📍 重要な情報

### Gemini APIキーの取得
1. [Google AI Studio](https://makersuite.google.com/app/apikey)にアクセス
2. 「Create API Key」をクリック
3. APIキーをコピー

### 投稿までの全体フロー
```
1. コンテンツ生成
   ├── タイトル生成 → index-gemini-v5-ultimate-free.html
   └── 記事生成 → article-generator/index.html
   
2. Sanityへ送信
   └── 「📤 Sanityに送る」ボタンをクリック
   
3. 投稿
   └── sanity-publisher.html で内容確認 → 投稿
```

### よくある質問

**Q: どちらのツールを先に使うべき？**
A: タイトル生成を先に行い、そのタイトルを使って記事本文を生成するのがおすすめです。

**Q: 生成にかかる時間は？**
A: タイトル生成は数秒、記事生成は30秒〜1分程度です。

**Q: 無料で使える？**
A: Gemini APIの無料枠内で使用可能です（1日約1,500記事分）。