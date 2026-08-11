---
status: 完成
---

# 現行HTML要素の共有系譜

共有系譜は、資料や年代ではなく、複数の現行要素を結ぶことが一次資料で確認できる採用、共通要求、分岐、置換、または共同変更を単位とする。個別要素の結論と証拠は各要素ページを正本とし、ここでは共有部分だけを案内する。

## 初期文書語彙

- [AAP／CERNからHTML見出し群へ](aap-cern-headings.md): AAPの見出し集合からCERN SGMLを経て`h1`〜`h6`へ至る採用。
- [CERN-SGMLから初期HTMLリスト群へ](cern-sgml-lists.md): CERN-SGMLタグ集合から`ul`、`ol`、`li`、`dl`、`dt`、`dd`を含む初期HTML集合への採用。
- [`head`と`body`への文書分割](document-structure.md): 文書情報と本文を分離する要求から`head`／`body`構造へ至る変更。
- [HTML句要素とTexinfo](texinfo.md): Texinfoのマクロ名からHTML句要素群への命名経路。

## HTML拡張と標準化

- [HTML+フォームからHTML 2.0へ](html-plus-forms.md): HTML+のフォーム五要素からHTML 2.0フォームへの集合単位の採用。
- [フォームのラベル付けとグループ化](form-labels-and-groups.md): ラベル関連付けと欄のグループ化要求から`label`、`fieldset`、`legend`へ至る経路。
- [HTML+から基本表モデルへ](html-plus-tables.md): HTML+と初期HTML 3草案から基本表五要素へ至る採用。
- [CALSからHTML表の行グループへ](table-row-groups.md): CALSの三つの行グループをHTML向けに簡略化して採用した経路。
- [HTML表の列と列グループ](table-columns.md): 列機能の統合と、旧`COL`の制約から`COLGROUP`を新設した経路。
- [文書の削除と挿入](document-edits.md): HTML+の法律文書向け追加・削除から`del`／`ins`へ至る集合単位の経路。
- [図とキャプション](figures-and-captions.md): HTML+の図構造とWHATWG提案から`figure`／`figcaption`へ至る経路。
- [クライアント側イメージマップ](image-maps.md): HTML+の形状付きリンク要求とサーバー側方式の制約から`map`／`area`へ至る経路。
- [双方向テキストの埋め込みと上書き](bidirectional-text.md): Unicodeの低水準機構に対応する`span`／`bdo`と、スタイル用途が`span`へ合流した経路。

## 既存Web、UI、外部語彙

- [既存Webから意味的セクショニング要素へ](semantic-sectioning.md): `div`の疑似意味的用途の調査から`article`、`aside`、`footer`、`nav`、`section`へ至る集合と個別枝。
- [旧`header`から`hgroup`と新`header`へ](header-and-hgroup.md): 旧見出しコンテナーの改名と、ページヘッダー用の新要素を同時に分離した変更。
- [ARIAランドマークからネイティブHTML要素へ](aria-landmarks.md): `main`と`search`のARIA役割を専用要素へ置換した二つの経路。
- [ルビ注釈語彙の共有系譜](ruby.md): W3C／XHTMLのルビ語彙と既存Web利用から`ruby`、`rt`、`rp`へ至る枝。
- [MathMLとSVGのHTMLパーサー統合](foreign-content.md): 既存XML語彙の`math`／`svg`ルートを`text/html`へ統合した経路。
- [`details`と`summary`の開閉UI系譜](details-summary.md): GUI開閉慣習から`details`へ、流用キャプションから`summary`へ至る経路。
- [WHATWGメディア要素の共有モデル](media-elements.md): 別々の入力を持つ`video`、`audio`、`source`が共通メディアモデルへ統合された経路。
- [レスポンシブ画像と`picture`／`source`](responsive-images.md): コミュニティ提案、実装、`srcset`、既存`source`を画像選択モデルへ統合した経路。
- [`time`の一般化と`data`との併存](data-and-time.md): `time`から`data`への一時的な置換と、再導入後の機能分担。
- [カスタマイズ可能な`select`](customizable-select.md): `select`、`option`、`button`、`selectedcontent`を一体で変更した現行標準化経路。

## 収録しない関係

同じ仕様や作業期に共存するだけの要素、単一要素だけで完結する由来、現在の機能上の対比、名称や外見の類似は共有系譜にしない。このため、IETF国際化草案の`q`／`sub`／`sup`、`track`固有の`itext`由来、HTML+の`abbr`／`s`候補などは個別要素ページだけで扱う。
