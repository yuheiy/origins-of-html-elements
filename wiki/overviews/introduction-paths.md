---
status: 完成
---

# HTML要素の導入経路

現行115要素を、HTMLへの導入経路が直接確認できる粒度で分類する。分類は要素の現在の機能や外見ではなく、各要素ページに記録された導入主体、仕様系列、実装、共同変更に基づく。

## 分類

この節ではHTMLの標準化経路を追うため、HTML+、IETF／W3C草案、WHATWG内部変更も独立した導入段階として扱い、現行115要素を最も説明力の高い主経路または確認可能な最初期経路へ一度ずつ置く。現在までの因果が欠ける経路は導入元とみなさない。

| 導入段階・候補経路 | 現行HTMLまでに確認できる範囲 | 現行要素 |
|---|---|---|
| AAP／CERN-SGML | AAPの見出し語彙がCERN SGMLガイドを経て初期HTMLへ入り、CERN-SGMLのリスト集合が初期HTMLへ採録された | `h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`ul`、`ol`、`li`、`dl`、`dt`、`dd` |
| GNU Texinfo | 1993年HTML草案の文字強調集合がTexinfoのマクロ名から名前を得た | `b`、`i`、`em`、`strong`、`code`、`samp`、`kbd`、`var`、`dfn`、`cite`、集合単位のみ確認できる`u` |
| CALS表モデル | CALSの行グループ構造をIETF表草案がHTMLへ取り込んだ | `thead`、`tbody`、`tfoot` |
| 既成のXML語彙 | MathML／SVGの既存ルートをHTMLパーサーが外来要素の内容として統合した | `math`、`svg` |
| CERN WorldWideWeb／初期HTML設計 | 最初期実装、設計メール、DTD、初期草案でHTML自身の基礎語彙として成立した | `a`、`address`、`base`、`blockquote`、`body`、`head`、`html`、`link`、`menu`、`meta`、`p`、`pre`、`title`。メタは少し後の個別提案、メニューは初期導入の担当者と具体的祖先が未確認である |
| HTML+ | HTML向けの実験仕様でフォーム、表、修正機能、図、クライアント側イメージマップを先に組み立て、HTML 2〜4またはHTML5へ引き継がれた | `form`、`input`、`select`、`option`、`textarea`、`table`、`caption`、`tr`、`th`、`td`、`del`、`ins`、`figure`、`map`、`area` |
| 1993年WWW Workshop | RFC化前の基礎HTMLへ`br`と`hr`を追加する決定を記録し、`hr`はハイフン列による区切りの置換と明示した。先行HTML+ `br`からの採用因果と後続仕様への編集経路は未確認である | `br`、`hr` |
| IETF／W3Cの機能別HTML草案 | HTML 3、国際化、フォーム、表、フレーム、スタイル、スクリプティング、複合文書等の草案が要素を設計し、後続HTMLへ統合した | `abbr`、`button`、`col`、`colgroup`、`datalist`、`div`、`fieldset`、`iframe`、`label`、`legend`、`noscript`、`object`、`optgroup`、`q`、`span`、`style`、`sub`、`sup`。一部はより古い候補やベンダー枝との個別接続に欠落がある |
| ブラウザーベンダーの実装・提案 | `img`、`embed`、`script`、`canvas`、`video`は先行実装または提案から標準化への接続を確認できる。`wbr`はWHATWG内の適合化を確認できるがNetscapeからWHATWGへの接続がない | `img`、`embed`、`script`、`canvas`、`video`、`wbr` |
| 既存Webマークアップ／ARIA／コミュニティ実装 | 実サイトのマークアップ、ARIA役割、JavaScript UI、コミュニティ提案、ポリフィルを標準要素へ引き上げた | `article`、`aside`、`dialog`、`footer`、`header`、`main`、`nav`、`picture`、`ruby`、`rt`、`rp`、`search`、`section` |
| 外部・隣接仕様の提案 | 国際化、XForms、時間指定テキスト、Web Components、Open UI等の作業からHTMLへ機構または要素を統合した | `bdi`、`bdo`、`output`、`selectedcontent`、`slot`、`template`、`track` |
| HTML／WHATWG内部の既存機構 | 既存要素、API、プレースホルダー、旧語彙を分解、改名、専用化、再定義した | `audio`、`data`、`figcaption`、`hgroup`、`mark`、`meter`、`progress`、`s`、`small`、`source`、`summary`、`time` |
| GUIの具体的慣習 | 特定の既成マークアップ語彙ではなく、GUI部品の挙動を参照してWHATWGが要素を設計した | `details` |
