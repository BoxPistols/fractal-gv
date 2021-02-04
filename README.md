# fractal

## About

This is Design System

## first setting \(once\)

```
＄ yarn run install
```

## Development

```
$ yarn run dev
$ yarn run css
```

## Production 本番書きだし

### 軽量化の必要応じて、CSS を圧縮 css minify

- `yarn run css-build`
- sass のどこかを一度コンパイルさせる

### Fractal 静的書き出し

docs/ (fractal 全体、静的書きだし)

- `docs`フォルダが無ければ作成
- 権限エラーが出れば`$ chmod 777 docs`

```
$ yarn run build
```

### JSX/React コンパイル書きだし

* react/階下のsassファイルのimport元注意

```
$ yarn run react-build
```

- jsx/ compile to react/

---

### CSS 群の場所と用途

- sass to css
  - assets css
    - Main UI Modules
  - assets theme
    - fractal preview design
  - src
    - UI components 確認用


## Tree

最終更新
2020/10/20/21:12

```javascript
.
|-- README.md
|-- reaft // react元フォルダ
|-- dist // react書きだし先
|-- assets // 汎用コンポーネント
|   |-- css
|   |   |-- components // Atomic等UIパーツ
|   |   |   |-- _xxx.sass
|   |   |   |-- _mixin.sass
|   |   |-- style.css
|   |   |-- style.sass
|   |   -- utility // 余白やBlockなど、汎用ユーティリティ
|   |       |-- _xxx.sass
|   |       -- _mixin.sass
|   |-- js
|   |   -- app.js
|   -- theme // fractal自体のUIテーマ、オリジナル
|       |-- img
|       |   |-- xxx.png
|       |   |-- xxx.svg
|       |   |-- ...
|       |-- origin.css
|       -- origin.sass
|-- fractal.config.js // fractal設定
|-- package.json // yarn, package等
|-- src
|   -- components // fractal自体のデザインシステム表示
|       |-- Atomic // 構造別のフォルダ分け、サイドナビのメインタイトルとして表示される
|       |   |-- 01-typography　// ftractal サイドナビのタイトル表示（頭の数字は表示順設定用で表示はされない）
|       |   |   |-- README.md // Tab のNotes表示
|       |   |   |-- style.sass // TabのAssets表示用。このUIコンポーネントのメインSassをassetsからimportしてくる
|       |   |   |-- style.css // style.sassを展開したcss。
　　|   |   |-- typography.config.json // このUIコンポーネントの表示用テキスト設定。map/in のように繰り返し表示が可能。
|       |   |   -- typography.hbs // HTMLと同じ + jsonで設定された変数を{{ hoge }}で表示可能。
|       |   -- 02-...
|       |       |-- README.md
|       |       |-- xxx.config.json
|       |       |-- xxx.hbs
|       |       |-- xxx.css
|       |       -- xxx.sass
|       |-- Molecule
|       |   -- 01-...
|       |       |-- README.md
|       |       |-- ....config.json
|       |       |-- ....hbs
|       |       |-- style.css
|       |       -- style.sass
|       -- _preview.hbs
--
```
