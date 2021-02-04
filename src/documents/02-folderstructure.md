# files

* assets/css, js
  * Main UI Modules
* assets/theme
  * fractal preview design
* src
  * UI components create

```javascript
.
|-- README.md
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
