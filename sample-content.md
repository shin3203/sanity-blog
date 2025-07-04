# Sanity Studioで作成するサンプルコンテンツ

## 1. Author（著者）を作成

### Author 1
- **Name**: 田中太郎
- **Slug**: tanaka-taro
- **Bio**: テクノロジーとデザインに情熱を注ぐWebデベロッパー。最新のWeb技術やトレンドについて発信しています。
- **Image**: お好みのプロフィール画像をアップロード

### Author 2
- **Name**: 山田花子
- **Slug**: yamada-hanako
- **Bio**: UXデザイナーとして活動中。ユーザー体験を向上させるデザインのヒントを共有します。
- **Image**: お好みのプロフィール画像をアップロード

## 2. Category（カテゴリ）を作成

### Category 1
- **Title**: Web開発
- **Description**: Web開発に関する技術記事やチュートリアル

### Category 2
- **Title**: デザイン
- **Description**: UIデザイン、UXデザインに関する記事

### Category 3
- **Title**: プログラミング
- **Description**: プログラミング言語やフレームワークについて

## 3. Post（ブログ記事）を作成

### Post 1
- **Title**: React + TypeScriptで始めるモダンWeb開発
- **Slug**: react-typescript-modern-web
- **Author**: 田中太郎
- **Categories**: Web開発, プログラミング
- **Published at**: 2024-01-15
- **Excerpt**: ReactとTypeScriptを組み合わせることで、型安全で保守性の高いWebアプリケーションを構築する方法を解説します。
- **Main Image**: 適当なReact関連の画像
- **Body**:
```
# はじめに

ReactとTypeScriptの組み合わせは、現代のWeb開発において最も人気のある選択肢の一つです。

## なぜTypeScriptを使うのか

TypeScriptを使用することで、以下のメリットがあります：

- **型安全性**: コンパイル時にエラーを検出
- **優れた開発体験**: IDEの補完機能が充実
- **保守性の向上**: コードの意図が明確になる

## 基本的なコンポーネントの作成

以下は、TypeScriptを使用したReactコンポーネントの例です：

```typescript
interface Props {
  title: string;
  count: number;
}

const Counter: React.FC<Props> = ({ title, count }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
    </div>
  );
};
```

## まとめ

ReactとTypeScriptを組み合わせることで、より堅牢なアプリケーションを構築できます。
```

### Post 2
- **Title**: Tailwind CSSで実現する効率的なスタイリング
- **Slug**: tailwind-css-efficient-styling
- **Author**: 山田花子
- **Categories**: Web開発, デザイン
- **Published at**: 2024-01-20
- **Excerpt**: ユーティリティファーストのCSSフレームワーク、Tailwind CSSを使用して、効率的にスタイリングを行う方法を紹介します。
- **Main Image**: Tailwind CSS関連の画像
- **Body**:
```
# Tailwind CSSとは

Tailwind CSSは、ユーティリティファーストのCSSフレームワークです。

## メリット

1. **高速な開発**: クラス名を組み合わせるだけでスタイリング完了
2. **一貫性**: デザインシステムが組み込まれている
3. **カスタマイズ性**: 設定ファイルで細かく調整可能

## 基本的な使い方

```html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-2">カード見出し</h2>
  <p class="text-gray-100">カードの内容がここに入ります。</p>
</div>
```

## レスポンシブデザイン

Tailwindでは、簡単にレスポンシブデザインを実現できます：

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- グリッドアイテム -->
</div>
```
```

### Post 3
- **Title**: Sanity CMSでブログを構築する完全ガイド
- **Slug**: sanity-cms-blog-guide
- **Author**: 田中太郎
- **Categories**: Web開発
- **Published at**: 2024-01-25
- **Excerpt**: ヘッドレスCMSのSanityを使用して、柔軟でスケーラブルなブログシステムを構築する方法を詳しく解説します。
- **Main Image**: Sanity関連の画像
- **Body**:
```
# Sanity CMSとは

Sanityは、柔軟性とカスタマイズ性に優れたヘッドレスCMSです。

## 主な特徴

- **リアルタイムコラボレーション**: 複数人での同時編集が可能
- **強力なクエリ言語**: GROQによる柔軟なデータ取得
- **画像の自動最適化**: 組み込みの画像パイプライン

## セットアップ手順

1. Sanityプロジェクトの作成
2. スキーマの定義
3. コンテンツの作成
4. フロントエンドとの連携

## サンプルクエリ

```javascript
const posts = await client.fetch(`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    author->{name},
    mainImage
  }
`)
```

## まとめ

Sanityを使用することで、開発者にもコンテンツ編集者にも優しいCMSを構築できます。
```

## 手順

1. Sanity Studio (http://localhost:3333) を開く
2. 左メニューから「Author」をクリックし、上記の著者を作成
3. 次に「Category」を作成
4. 最後に「Post」を作成（AuthorとCategoryを選択）
5. 各記事で「Publish」ボタンをクリックして公開

これらのコンテンツを作成すると、Reactアプリ (http://localhost:5173) にブログ記事が表示されます！