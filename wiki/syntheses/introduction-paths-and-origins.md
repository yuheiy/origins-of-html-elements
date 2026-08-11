---
status: 完成
---

# HTML要素の導入経路と由来

## 読み方

このページは、現行要素を現在の機能ではなく、HTMLへの導入経路と、HTML内部の変遷を通して確認できる設計背景から読むための地図である。個別要素の結論と証拠は[要素索引](../README.md#要素)、複数要素の確認済み経路は[共有系譜](../lineages/README.md)を正本とする。

分類軸は二つある。第一はHTML+やIETF／W3C草案も別段階として数える「HTMLへの導入経路」、第二は初期HTMLからWHATWGまでの内部変遷を一続きの経路として扱い、確認できる文書体系、実務、UI、設計要求、実装上の制約まで遡る「HTML内部の変遷を通して遡る設計背景」である。両表では現行115要素を主経路へ一度ずつ置く。

「直接採用」は語彙、構造、実装、仕様からHTMLへの採用因果を確認できる場合に限る。第二表は直接採用だけでなく、設計時の参照、HTML内部での派生、新規設計の背景も並べるため、それ自体を語彙の系譜または採用因果の証明として読んではならない。名称や用途の類似だけでは系譜を結ばない。

このWikiで「要素の語彙がどこから持ち込まれたか」を答えるには、少なくとも、識別子の最初期出現、命名理由、意味または構造の設計モデル、そのモデルからHTMLへの採用因果、現行要素までの継続という五つの問いを分ける必要がある。たとえばTexinfoからの命名借用、CALSからの構造採用、GUI慣習を参照した新規設計は、いずれも異なる種類の接続である。

## 1. HTMLへの導入経路

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

## 2. HTML内部の変遷を通して確認できる設計背景

この節ではHTML+、IETF／W3C草案、WHATWG内部変更を独立した起源とせず、確認できる設計背景を整理する。現行115要素のすべてに、HTML以前またはHTML内部の先行語彙、設計材料、要求、実装、慣習のいずれかに関する史料がある。ただし、史料が設計時の参照や採用因果を示さず、導入後の互換性経路または同名の先行語彙だけを示す場合も含むため、この数を起源判明数として使えない。従来唯一の例外としていた`blockquote`には、HTMLより早いファイル時刻を持つDocBook 1.0の同名要素と、導入者が直前にDocBook語彙を検討した記録が見つかったが、DocBookからの採用因果はUsenet説と競合して未確認のままである。八つの大分類は探索用の主題索引であり、複数の背景を持つ要素も便宜上一度だけ置く。

下位節では表に示した設計背景と、HTML内部の派生を確認した根拠を詳述する。矢印は個別ページで確認できる範囲だけを要約し、外部材料から要素への採用が未確認な箇所を直接祖先として扱わない。

| 設計背景の主題分類 | 関連が確認できる先行語彙・材料・要求・実装・慣習 | 現行要素 |
|---|---|---|
| 構造化文書・出版 | AAP／CERN-SGMLの見出し・リスト語彙、CALS行グループ、SGMLによる文書形式化、表・出版ツール、WorldWideWebエディターのAddressスタイル、クラス付き文書区分、逐次受信中のヘッダー境界、画像とキャプションの制作 | `address`、`body`、`caption`、`col`、`colgroup`、`dd`、`div`、`dl`、`dt`、`figcaption`、`figure`、`h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`head`、`html`、`li`、`ol`、`p`、`table`、`tbody`、`td`、`tfoot`、`th`、`thead`、`title`、`tr`、`ul` |
| 技術文書・編集・組版 | GNU Texinfoのマクロ名、DocBookの同名語彙候補、端末／Unixマニュアル、法律・編集実務、LaTeXと数式組版、略語マークアップと発音要件、文脈依存の強調 | `abbr`、`b`、`blockquote`、`cite`、`code`、`del`、`dfn`、`em`、`i`、`ins`、`kbd`、`mark`、`pre`、`s`、`samp`、`small`、`strong`、`sub`、`sup`、`u`、`var` |
| ハイパーテキスト・ナビゲーション・メタデータ | WWWのハイパーテキストモデル、イメージマップ運用、HTTPメタデータ、ノード単位の関係、簡潔な選択肢リスト | `a`、`area`、`base`、`link`、`map`、`menu`、`meta` |
| フォーム・データ入力・GUI | デスクトップのフォームUI、フォームのアクセシビリティと階層UI、SGML属性値の上限、開閉UI、進捗バー、スカラー量の測定、XForms／Open UI、既存Webのダイアログ実装 | `button`、`datalist`、`details`、`dialog`、`fieldset`、`form`、`input`、`label`、`legend`、`meter`、`optgroup`、`option`、`output`、`progress`、`select`、`selectedcontent`、`summary`、`textarea` |
| ブラウザー実装・複合文書・マルチメディア | ブラウザーベンダーの画像・埋め込み・フレーム・メディア実装、既成のMathML／SVG語彙、ベンダー別埋め込み内容、WHATWG `Audio`API、時間指定テキスト、レスポンシブ画像実装 | `audio`、`canvas`、`embed`、`iframe`、`img`、`math`、`object`、`picture`、`source`、`svg`、`track`、`video` |
| スクリプティング・スタイル・Webアプリケーション・コンポーネント | ブラウザーベンダーのクライアント側スクリプティング、非対応時の代替内容、スタイルシート、機械可読データ、Web Componentsのテンプレート／スロット | `data`、`noscript`、`script`、`slot`、`style`、`template`、`time` |
| 国際化・文字方向・東アジア組版 | Unicode国際化、双方向文字関連仕様、ルビの既存Web実装、言語依存の引用符 | `bdi`、`bdo`、`q`、`rp`、`rt`、`ruby`、`span` |
| 既存Web制作・コミュニティ・互換性 | 実サイトのセクショニングマークアップ、ARIA役割、コミュニティ提案、ポリフィル、初期Webの意味を持つ改行とハイフン列による区切り、ブラウザー互換マークアップ | `article`、`aside`、`br`、`footer`、`header`、`hgroup`、`hr`、`main`、`nav`、`search`、`section`、`wbr` |

以下の2.1〜2.3は八つの大分類の下位分類ではない。第二表への割り当て根拠を、背景の確認経路ごとに整理する。

### 2.1 HTML外に確認できる先行物と設計材料

AAP／CERN-SGMLから見出し・リスト群、Texinfoのマクロ名から句要素群、CALSから表行グループ群へ至る関係は共有系譜で確認している。Texinfoは構造や意味の移植ではなく命名借用であるため、構造語彙の採用とは分ける。[共有系譜](../lineages/README.md)、[AAP Book DTD](../../raw/ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)（[公開元](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)）、[1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）、[IETF 表草案](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)）、[GNU Texinfo 2.16](../../raw/ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)）

HTML+はフォーム、単純表、図、文書修正機能、クライアント側イメージマップを後続HTMLへ渡した。ほかに、ブラウザー実装から`img`、`embed`、`canvas`、`video`、既存Web／ARIA／コミュニティ実装から`main`、`ruby`群、GUI慣習から`details`、外部仕様から`bdo`、`output`等へ至る枝を確認している。`picture`は2007年の同名案と`video`型構造を合成したコミュニティ提案へ、独立した`srcset`と既存`img`の処理を統合した複合経路である。[HTML+の共有系譜](../lineages/html-plus.md)、[Andreessenの`IMG`提案](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)）、[WebKit `CANVAS`実装](../../raw/github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)（[公開元](https://github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)）、[`main`提案](../../raw/lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)）、[Lawsonの`picture`草案](../../raw/brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/index.html)（[公開元](https://brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/)）、[Apple HIGの開閉用の三角形](../../raw/web.archive.org/web/20060701000000id_/http%3A/developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)）、[RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）、[XForms UI](../../raw/www.w3.org/TR/2000/WD-xforms-20001219/ui.html)（[公開元](https://www.w3.org/TR/2000/WD-xforms-20001219/ui.html)）

直接採用まで確認できないHTML外の先行語彙または設計入力は、次の16群に分かれる。

次表の38要素の根拠は、ハイパーテキストについては[Raggettらの回顧](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)）、イメージマップについては[Seidmanの提案](../../raw/archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)（[公開元](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)）、SGML形式化については[ConnollyのDTD議論](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)）、表については[RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）と[Raggettの回顧](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)）に置く。DocBook候補については、[DocBook 1.0 DTD](../../raw/www.oasis-open.org/docbook/sgml/1.0/docbk10.zip/docbook.dtd)（[公開元](https://www.oasis-open.org/docbook/sgml/1.0/docbk10.zip)）、[導入直前のDocBook検討](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)）、[導入者を含む再探索](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)）を対応させる。

フォームとSGML制約は[HTML+ Forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）と[W3Cフォーム草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)）、編集・技術文書・数式は[HTML+ Amendments](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)）、[HTML+ Preformatted Text](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)）、[HTML+ Mathematics](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)）が直接説明する。HTTP、オブジェクト、Unicode、スタイル、進捗の背景はそれぞれ[`META`提案](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)）、[`INSERT`草案](../../raw/www.w3.org/TR/WD-insert-951220.html)（[公開元](https://www.w3.org/TR/WD-insert-951220.html)）、[RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）、[HTML 3.0 document head](../../raw/www.w3.org/MarkUp/html3/dochead.html)（[公開元](https://www.w3.org/MarkUp/html3/dochead.html)）、[`progress`の目的に関する説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)）で確認できる。

| 由来のまとまり | 確認できる内容 | 現行要素 |
|---|---|---|
| DocBookの同名語彙候補 | HTMLより早いファイル時刻を持つDocBook 1.0の`BlockQuote`と、導入者が直前にDocBook語彙をHTMLの候補として検討した事実。要素単位の採用記録はなく、後代のUsenet説と競合する | `blockquote` |
| WWWのハイパーテキストモデル | ノード間リンクを文中へ置くBerners-Lee独自のアンカー／`HREF`設計と、取得URLを失った文書の相対URL基準 | `a`、`base` |
| イメージマップ運用 | サーバー側イメージマップとHTML+の形状付きリンクの制約を、クライアント側の領域と行き先へ分離 | `area`、`map` |
| SGMLによるHTML文書の形式化 | SGMLパーサー用の文書要素、混在内容を避ける本文、SGML由来と回顧される段落、SGMLタグ対構文を用いたタイトル。個別の元DTDは不明 | `html`、`body`、`p`、`title` |
| 表・出版・制作ツール | SGML表モデル、ワードプロセッサー、紙媒体の表を研究したWeb向けの単純表モデル。CALSの縮小移植ではなく、複雑なCALSに対する別案 | `table`、`caption`、`tr`、`th`、`td`、`col`、`colgroup` |
| デスクトップのフォームUI | プラットフォーム上のフォーカス移動、テキスト欄、チェックボックス、ラジオボタン、プルダウンコンボリスト、候補項目 | `form`、`input`、`select`、`option` |
| フォームのアクセシビリティと階層UI | 音声インターフェース、ラベル付きグループ、ウィンドウシステムの入れ子のリスト、ブックマークの下位リスト、自由入力と候補提示 | `label`、`fieldset`、`legend`、`optgroup`、`datalist` |
| SGML属性値の上限 | 複数行値を`INPUT`属性へ置く方式を、内容を持つ専用要素へ分離 | `textarea` |
| 法律・編集・細則 | 法案修正の追加・削除、法律文書の取り消し線、実在Webの法的説明／著作権表示 | `del`、`ins`、`s`、`small` |
| HTTPメタデータ | 専用要素を増やさない名前/値メタデータとHTTP応答ヘッダーへの写像 | `meta` |
| ベンダー別埋め込み内容 | `IMG`、`DYNSRC`、`EMBED`、`APP`、`APPLET`の分断を汎用挿入機構へ統合 | `object` |
| 端末・Unixマニュアル | コンピューター出力用整形済みテキストを、Unixマニュアルページのハイパーテキスト化に合わせて拡張 | `pre` |
| Web上の進捗バー | 画像等による非アクセシブルな表示を、プラットフォーム固有で意味を持つタスクの進捗へ置換 | `progress` |
| Unicode国際化 | 行内範囲へ言語／方向を付け、Unicode機構へ変換できるコンテナー | `span` |
| スタイルシート | 表現をHTML構造から分離し、著者と読者のスタイルを調停する仕組み | `style` |
| LaTeXと数式組版 | LaTeXの手法に着想を得たHTML+の数式を一般テキストでも使える上下付きへ拡張 | `sub`、`sup` |

### 2.2 確認できる背景まで遡ったHTML内部派生12要素

第二表では、`audio`をWHATWG `Audio`APIとゲーム音声、`button`をデスクトップのフォームUI、`data`と`time`を機械可読データ、`figcaption`を画像とキャプションの制作、`hgroup`を既存Webマークアップ、`iframe`と`source`をブラウザーベンダーの実装・提案、`mark`を文脈依存の強調、`meter`をスカラー量の測定、`noscript`をクライアント側スクリプティングの代替内容、`summary`を開閉UIに関連するものとして配置した。次表は、その配置までに確認できるHTML内部の前身と変更を示す。

内部派生の根拠は、[`audio`統合前後](../../raw/platform.html5.org/history/webapps/r699.html)（[公開元](https://platform.html5.org/history/webapps/r699.html)）、[rich `button`草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)）、[`data`一般化提案](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)）と[初回追加コミット](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)）、[`figcaption`導入コミット](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)）、[`hgroup`改名コミット](../../raw/github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)（[公開元](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)）に置く。

残る枝は、[`iframe`草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)）、[`m`から`mark`への変更](../../raw/github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)）、[`gauge`から`meter`への履歴](../../raw/platform.html5.org/history/webapps/r15.html)（[公開元](https://platform.html5.org/history/webapps/r15.html)）、[`NOSCRIPT`草案](../../raw/www.w3.org/TR/WD-script-960709.html)（[公開元](https://www.w3.org/TR/WD-script-960709.html)）、[`source`導入コミット](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)）、[`summary`導入コミット](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)）、[`t`初稿コミット](../../raw/github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)（[公開元](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)）で確認できる。

| 要素 | HTML内で確認できる前身と変更 |
|---|---|
| `audio` | スクリプト専用の`Audio`オブジェクトを、文書内にも置ける`video`共通メディアAPIへ統合 |
| `button` | `input`の送信／リセット／スクリプトボタンを、HTML内容を持てる要素へ拡張 |
| `data` | `time`の表示内容と機械可読値を結ぶ用途を、日付・時刻以外へ汎用化 |
| `figcaption` | HTML+以来の図のキャプションを、`legend`、`dt`／`dd`流用から専用要素へ変更 |
| `hgroup` | セクション見出し用だった旧`header`を改名し、主見出しと副見出しのグループへ限定 |
| `iframe` | `FRAME`のナビゲーションモデルと`IMG`型の文書の流れ内配置を組み合わせた浮動フレーム |
| `mark` | 検索結果等の文脈依存の強調用`m`を改名 |
| `meter` | Web Applications草案の`gauge`を、既知範囲のスカラー量の測定へ改名・具体化 |
| `noscript` | クライアント側の`script`を実行できないUA向けの代替内容 |
| `source` | `video`の単一`src`を、コーデック等が異なる複数候補からの選択へ分離 |
| `summary` | `details`のキャプションに`legend`や`dt`を流用する方式を専用要素へ置換 |
| `time` | 機械可読な日付と時刻用の単文字`<t>`を改名 |

### 2.3 個別の設計要求・実装との関係を確認できる8要素

次の8要素は、[HTML+ logical roles](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)）、[WorldWideWeb style file](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)）、[HTML 3.0 divisions](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)）、[HTML+ Figures](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)）、[ヘッダーラッパー計画](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)）、[Link Types](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)）、[Line Mode Browser履歴](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)）、[IETF国際化草案](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)）でHTML内の要求まで確認できるが、外部の個別語彙またはシステムからの採用は確認できない。次表に、要素ごとに確認できる設計要求または実装上の背景を示す。

| 要素 | 確認できる設計要求または実装上の背景 |
|---|---|
| `abbr` | 標準役割を索引化する`ABBREV`系と、発音方式に依存しない一般的な略語マークアップの要求 |
| `address` | NeXT WorldWideWebエディターの`Address`段落スタイルとHTMLへの直列化の対応 |
| `div` | `class`で章、セクション、要約等を区別する汎用区分コンテナー |
| `figure` | HTML+のキャプション付き`FIG`と、既存Webで画像とキャプションを結び主たる流れから分離する利用例 |
| `head` | 既存のヘッダー部分を包み、ストリーム受信中でもヘッダー終端を判定するラッパー要求 |
| `link` | テキスト範囲へ局所化されない著者情報、部分／全体、索引等のノード単位の関係 |
| `menu` | 検索結果の選択肢や短い項目を簡潔に並べる初期リストの変種。2004年にWebアプリケーションのメニューと共有コマンド状態の要求へ再利用された |
| `q` | 引用符を言語依存で描画する行内引用 |

## 3. 敵対的監査で残った弱点

### 3.1 確度と未解決点

現行115要素の確度はAが85要素、A−が17要素、Bが12要素、Cが1要素で、未評価はない。ただしAはHTMLへの導入と直前の系譜だけを評価するため、Aであっても語の命名理由やさらに上流の由来が確定したとは限らない。

今回の再調査により、`br`ではNCSA Mosaicより前のHTML+提案、基礎HTMLへの追加決定、Lynx実装を確認し、導入理由を固定して確度Bとした。`hr`では、ハイフン列による区切りを置き換える要素として基礎HTMLへ追加した直接記録を確認し、確度Aとした。HTML+ `br`からの採用因果、Workshop決定から各実装・後続仕様への編集経路は未確認である。`menu`では、HTML 4.01での非推奨を経て、2004年にWebアプリケーションのメニューと共有コマンド状態のため再利用された経路を確認したが、1992年の初期導入理由と具体的祖先は未確認である。`base`では1993年1月14日の`SAVEDAS`標準化意向と、その後のrevision 1.4 DTDに基底アドレス要素がないことを確認し、`BASE HREF`を同年6月草案までに絞ったが、両者の間の具体化記録とHTML外の祖先は未解決である。`blockquote`のDocBook／Usenet競合も未解決のままである。

106ページ、111要素に一つ以上の未解決点が残る。未解決がないのは`data`、`figcaption`、`optgroup`、`picture`である。したがって、このページの主題分類は調査完了率として使えない。

集合単位の採用しか確認できない、または中間経路が欠けるA−は、`dd`、`del`、`dl`、`dt`、`footer`、`head`、`ins`、`legend`、`li`、`link`、`nav`、`ol`、`output`、`q`、`style`、`u`、`ul`の17要素である。個別対応を集合レベルの資料から推定してはならない。

HTMLへの採用因果または具体的祖先が弱いB／Cは、`a`、`address`、`base`、`blockquote`、`br`、`col`、`div`、`html`、`menu`、`noscript`、`p`、`small`、`title`の13要素である。`br`は導入理由を確認したがHTML+からの採用因果がなく、`menu`は2004年以降の再定義経路を確認した一方で1992年の導入理由と具体的祖先を確認できない。

`HTML直前の祖先`に未確認部分を明記するのは、`a`、`address`、`aside`、`audio`、`base`、`blockquote`、`br`、`canvas`、`col`、`del`、`div`、`html`、`ins`、`legend`、`menu`、`noscript`、`output`、`p`、`pre`、`progress`、`q`、`s`、`section`、`small`、`source`、`style`、`sub`、`sup`、`title`、`track`、`u`の31要素である。背景資料があるだけで、これらの欠落へ矢印を補ってはならない。

名称、命名、改名、略称、タグ名または語彙の選択理由が明示的な未解決点として残るのは、`a`、`abbr`、`article`、`aside`、`base`、`bdi`、`bdo`、`col`、`del`、`details`、`dialog`、`hgroup`、`ins`、`legend`、`main`、`mark`、`menu`、`meter`、`object`、`p`、`pre`、`script`、`search`、`section`、`span`、`sub`、`summary`、`sup`、`td`、`th`、`time`、`title`、`video`、`wbr`の34要素である。語彙起源という目的に対しては、この集合を「由来確認済み」に数えない。

### 3.2 追加調査の扱い

B／C、直前祖先の欠落、命名、A−の各一覧は問題の種類と重要性を示すが、互いに重複し、資料の現存可能性も異なるため、その件数順には調査しない。追加調査は、探索範囲を具体的な版、リポジトリ、論点、配布物へ限定できるかによって次の三段階で扱う。ここで保留しても個別ページの未解決点は削除せず、新しい一次資料が得られたときに再開する。

#### 優先して調査する問題

公開された変更履歴の中で初出または変更区間を限定できる問題は、提案、差分、レビュー、実装の前後関係を要素単位で確認できる可能性が高い。

| 調査群 | 対象 | 探索範囲 |
|---|---|---|
| 現代の公開履歴 | [`slot`](../elements/slot.md) | Chromium、WHATWG、HTML Working Groupのissue、PR、commitから、旧名または初稿、設計モデル、HTML統合の順序を確定する |
| 初期WHATWGの版履歴 | [`mark`](../elements/mark.md)、[`meter`](../elements/meter.md)、[`time`](../elements/time.md)、[`main`](../elements/main.md)、[`bdi`](../elements/bdi.md)、[`track`](../elements/track.md) | 既知の初回収録、改名、再導入コミットの親版と、対応するWHATWGメール、旧Subversion履歴、提案を照合する |
| W3C／IETF草案間の変更 | [`legend`](../elements/legend.md)、[`bdo`](../elements/bdo.md)、[`span`](../elements/span.md)、[`noscript`](../elements/noscript.md)、[`object`](../elements/object.md)、[`col`](../elements/col.md)、[`style`](../elements/style.md) | 連続する草案間に限定して、CVS／RCS差分、Working Group議事録、編集者メールから追加、改名、機能統合、後続仕様への採録を探す |

同名または同機能の先行物を新たに見つけるだけでは完了とせず、HTML側の採用判断または変更判断まで確認できた場合にだけ系譜を更新する。

#### 欠落資料を一度だけ探索する問題

次の問題は欠落区間または資料名が具体的だが、周辺史料をすでに反復して調査している。一般的なキーワード探索を繰り返さず、指定した配布物、RCS履歴、保存ソースだけを対象とし、回収できなければ現存する公開資料の限界として保留する。

- [`br`](../elements/br.md): 1993年6月1日版`htmlplus.dtd`と、HTML+、WWW Workshop、Lynx、NCSA Mosaic、HTML 2.0の間を結ぶ要素単位の記録。
- [`base`](../elements/base.md): 1993年のrevision 1.4から6月草案までに`SAVEDAS`を`BASE HREF`へ具体化したDTD／RCS差分またはメール。
- [`menu`](../elements/menu.md): Line Mode Browser 1.2から1.2aの配布物、RCS履歴、開発メールと、`test_source.txt`の保存日時を位置付ける記録。
- [`address`](../elements/address.md)、[`body`](../elements/body.md)、[`pre`](../elements/pre.md)、[`iframe`](../elements/iframe.md): 個別ページが特定する初期ソース、内部DTD、配布物、または同時代ベンダー資料。

#### 新しい一次資料が現れるまで保留する問題

- [`blockquote`](../elements/blockquote.md)のDocBook説とUsenet説は、同時代の採用記録がなく導入者の後代の説明も競合するため、新しいメール、DTDリビジョン、私信が得られるまで確定しない。
- [`a`](../elements/a.md)、[`html`](../elements/html.md)、[`p`](../elements/p.md)、[`title`](../elements/title.md)の具体的なHTML外祖先は、採用記録を置く候補資料または保存先を特定できるまで広範な類似探索を再開しない。
- フォーム群や表群等に残る「特定のGUI、文書体系、実装から影響を受けたか」という開放的な問いは、候補を名指す同時代資料が見つかった場合だけ調査対象へ戻す。
- 集合単位の資料しかないA−は、要素単位の対応表、編集者メモ、版差の所在を新たに特定できない限り、集合から個別の因果を推定せずA−を維持する。
- `b`／`i`等の現行意味への再解釈、資料の日付表記の不一致、確度Aの要素に残る一般的な命名補遺は、HTMLへの導入と直前系譜の調査とは別の補助課題として扱う。

すべての再開調査で、より早い版、競合案、廃止後の再採録、同名異義の語彙を反証候補として確認する。成果がなくても、確認可能な最初期出現と探索対象を個別ページの具体的な未解決問いとして維持する。
