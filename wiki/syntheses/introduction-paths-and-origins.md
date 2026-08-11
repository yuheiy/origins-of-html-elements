---
status: 完成
---

# HTML要素の導入経路と由来

## 読み方

このページは、現行要素を現在の機能ではなく、HTMLへの導入経路と、HTML内部の変遷を通して遡れる由来から読むための地図である。個別要素の結論と証拠は[要素索引](../README.md#要素)、複数要素の確認済み経路は[共有系譜](../lineages/README.md)を正本とする。

分類軸は二つある。第一はHTML+やIETF／W3C草案も別段階として数える「HTMLへの導入経路」、第二は初期HTMLからWHATWGまでの内部変遷を一続きの経路として扱い、確認できる文書体系、実務、UI、設計要求、実装上の制約まで遡る「HTML内部の変遷を通して遡る由来」である。両表では現行115要素を主経路へ一度ずつ置く。

「直接採用」は語彙、構造、実装、仕様からHTMLへの採用因果を確認できる場合に限る。第二表では、直接採用、設計時の参照、HTML内部での派生、新規設計を分類行にせず、確認できる由来までの経路として記す。名称や用途の類似だけでは系譜を結ばない。

## 1. HTMLへの導入経路

この節ではHTMLの標準化経路を追うため、HTML+、IETF／W3C草案、WHATWG内部変更も独立した導入元として扱い、現行115要素を最も説明力の高い主経路へ一度ずつ置く。

| 導入元 | 現行HTMLまでの経路 | 現行要素 |
|---|---|---|
| AAP／CERN-SGML | AAPのheading語彙がCERN SGML guideを経て初期HTMLへ入り、CERN-SGMLのlist集合が初期HTMLへ採録された | `h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`ul`、`ol`、`li`、`dl`、`dt`、`dd` |
| GNU Texinfo | 1993年HTML draftの文字強調集合がTexinfoのマクロ名から名前を得た | `b`、`i`、`em`、`strong`、`code`、`samp`、`kbd`、`var`、`dfn`、`cite`、集合単位のみ確認できる`u` |
| CALS table model | CALSのrow group構造をIETF table草案がHTMLへ取り込んだ | `thead`、`tbody`、`tfoot` |
| 既成のXML vocabulary | MathML／SVGの既存rootをHTML parserが外来要素の内容として統合した | `math`、`svg` |
| CERN WorldWideWeb／初期HTML設計 | 最初期実装、設計mail、DTD、初期draftでHTML自身の基礎語彙として成立した | `a`、`address`、`base`、`blockquote`、`body`、`head`、`html`、`link`、`menu`、`meta`、`p`、`pre`、`title`。metaは少し後の個別提案、menuは現行意味までの再定義経路に欠落がある |
| HTML+ | HTML向けの実験仕様でforms、tables、amendments、figures、クライアント側イメージマップを先に組み立て、HTML 2〜4またはHTML5へ引き継がれた | `form`、`input`、`select`、`option`、`textarea`、`table`、`caption`、`tr`、`th`、`td`、`del`、`ins`、`figure`、`map`、`area` |
| IETF／W3Cの機能別HTML草案 | HTML 3、国際化、forms、tables、frames、style、scripting、compound document等の草案が要素を設計し、後続HTMLへ統合した | `abbr`、`button`、`col`、`colgroup`、`datalist`、`div`、`fieldset`、`iframe`、`label`、`legend`、`noscript`、`object`、`optgroup`、`q`、`span`、`style`、`sub`、`sup`。一部はより古い候補やvendor枝との個別接続に欠落がある |
| browser vendorの実装・提案 | 製品で先に実装した機能または拡張案を標準化へ戻した | 接続が明瞭な`img`、`embed`、`script`、`canvas`、`video`と、現行標準までの接続に欠落がある`br`、`hr`、`wbr` |
| 既存Web markup／ARIA／community実装 | 実サイトのmarkup、ARIA role、JavaScript UI、community proposal、polyfillを標準要素へ引き上げた | `article`、`aside`、`dialog`、`footer`、`header`、`main`、`nav`、`picture`、`ruby`、`rt`、`rp`、`search`、`section` |
| 外部・隣接仕様の提案 | 国際化、XForms、timed text、Web Components、Open UI等の作業からHTMLへ機構または要素を統合した | `bdi`、`bdo`、`output`、`selectedcontent`、`slot`、`template`、`track` |
| HTML／WHATWG内部の既存機構 | 既存要素、API、プレースホルダー、旧語彙を分解、改名、専用化、再定義した | `audio`、`data`、`figcaption`、`hgroup`、`mark`、`meter`、`progress`、`s`、`small`、`source`、`summary`、`time` |
| GUIの具体的慣習 | 特定の既成markup語彙ではなく、GUI部品の挙動を参照してWHATWGが要素を設計した | `details` |

## 2. HTML内部の変遷を通して遡る由来

この節ではHTML+、IETF／W3C草案、WHATWG内部変更を独立した由来とせず、確認できる具体的な由来まで遡る。現行115要素のうち、HTML以前の由来を確認できる114要素を、各要素の導入を最も直接説明する具体的な由来に基づく八つの大分類へ一度ずつ置き、`blockquote`だけを例外として分ける。大分類は一覧性のための親カテゴリであり、具体的な文書体系、実務、UI、設計要求、実装上の制約とHTML内部の経路は中央列と以下の下位節に残す。複数の背景を持つ要素も主経路を一つだけ選ぶ。

下位節では表に示した具体的な由来と、HTML内部の派生をそこまで遡った根拠を詳述する。矢印は個別ページで確認できる範囲だけを要約し、外部材料から要素への採用が未確認な箇所を直接祖先として扱わない。

| 由来の大分類 | 確認できる具体的な由来とHTMLまでの主経路 | 現行要素 |
|---|---|---|
| 構造化文書・出版 | AAP／CERN-SGMLの見出し・list語彙、CALS row group、SGMLによる文書形式化、表・出版tool、WorldWideWeb editorのAddress style、class付き文書区分、streaming中のheader境界、画像とcaptionのauthoringに由来する | `address`、`body`、`caption`、`col`、`colgroup`、`dd`、`div`、`dl`、`dt`、`figcaption`、`figure`、`h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`head`、`html`、`li`、`ol`、`p`、`table`、`tbody`、`td`、`tfoot`、`th`、`thead`、`title`、`tr`、`ul` |
| 技術文書・編集・組版 | GNU Texinfoのマクロ名、terminal／Unix manual、法律・編集実務、LaTeXと数式組版、略語markupと発音要件、contextual highlightに由来する | `abbr`、`b`、`cite`、`code`、`del`、`dfn`、`em`、`i`、`ins`、`kbd`、`mark`、`pre`、`s`、`samp`、`small`、`strong`、`sub`、`sup`、`u`、`var` |
| hypertext・navigation・metadata | WWWのhypertext model、image map運用、HTTP metadata、node-level relation、compactな選択肢listに由来する | `a`、`area`、`base`、`link`、`map`、`menu`、`meta` |
| form・data entry・GUI | desktop form UI、formのaccessibilityと階層UI、SGML属性値の上限、disclosure UI、progress bar、scalar measurement、XForms／Open UI、既存Webのdialog実装に由来する | `button`、`datalist`、`details`、`dialog`、`fieldset`、`form`、`input`、`label`、`legend`、`meter`、`optgroup`、`option`、`output`、`progress`、`select`、`selectedcontent`、`summary`、`textarea` |
| browser実装・compound document・multimedia | browser vendorの画像・埋め込み・frame・media実装、既成のMathML／SVG vocabulary、vendor別embedded content、WHATWG `Audio` API、timed text、responsive image実装に由来する | `audio`、`canvas`、`embed`、`iframe`、`img`、`math`、`object`、`picture`、`source`、`svg`、`track`、`video` |
| scripting・style・Web application・component | browser vendorのclient-side scripting、非対応時のfallback、スタイルシート、機械可読データ、Web Componentsのtemplate／slotに由来する | `data`、`noscript`、`script`、`slot`、`style`、`template`、`time` |
| 国際化・文字方向・東アジア組版 | Unicode国際化、bidi関連仕様、rubyの既存Web実装、言語依存の引用符に由来する | `bdi`、`bdo`、`q`、`rp`、`rt`、`ruby`、`span` |
| 既存Web authoring・community・互換性 | 実サイトのsectioning markup、ARIA role、community proposal、polyfill、browser互換markupに由来する | `article`、`aside`、`br`、`footer`、`header`、`hgroup`、`hr`、`main`、`nav`、`search`、`section`、`wbr` |
| HTML以前の由来は未確認 | 1992年のHTML上の導入までは確認できるが、それ以前の具体的な設計入力は特定できない | [`blockquote`](../elements/blockquote.md) |

以下の2.1〜2.3は八つの大分類の下位分類ではない。第二表への割り当て根拠を、由来の確認経路ごとに整理する。

### 2.1 HTML外に確認できる具体的な由来

AAP／CERN-SGMLから見出し・list群、Texinfoのマクロ名からphrase要素群、CALSからtable row group群へ至る関係は共有系譜で確認している。Texinfoは構造や意味の移植ではなく命名借用であるため、構造語彙の採用とは分ける。[共有系譜](../lineages/README.md)、[AAP Book DTD](../../raw/ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)（[公開元](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)）、[1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）、[IETF table draft](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)）、[GNU Texinfo 2.16](../../raw/ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)）

HTML+はforms、単純table、figure、document amendments、クライアント側イメージマップを後続HTMLへ渡した。ほかに、browser実装から`img`、`embed`、`canvas`、`video`、既存Web／ARIA／community実装から`main`、`ruby`群、`picture`、GUI慣習から`details`、外部仕様から`bdo`、`output`等へ至る枝を確認している。[HTML+の共有系譜](../lineages/html-plus.md)、[Andreessenの`IMG`提案](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)）、[WebKit `CANVAS`実装](../../raw/github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)（[公開元](https://github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)）、[`main`提案](../../raw/lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)）、[Picturefill](../../raw/www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/index.html)（[公開元](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)）、[Apple HIGのdisclosure triangle](../../raw/web.archive.org/web/20060701000000id_/http%3A/developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)）、[RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）、[XForms UI](../../raw/www.w3.org/TR/2000/WD-xforms-20001219/ui.html)（[公開元](https://www.w3.org/TR/2000/WD-xforms-20001219/ui.html)）

直接採用まで確認できないHTML外の設計入力は、次の15群に分かれる。

次表の37要素の根拠は、hypertextについては[Raggettらの回顧](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)）、image mapについては[Seidmanのproposal](../../raw/archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)（[公開元](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)）、SGML形式化については[ConnollyのDTD議論](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)）、表については[RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）と[Raggettの回顧](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)）に置く。

formsとSGML制約は[HTML+ Forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）と[W3C forms草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)）、編集・技術文書・数式は[HTML+ Amendments](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)）、[HTML+ Preformatted Text](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)）、[HTML+ Mathematics](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)）が直接説明する。HTTP、object、Unicode、style、progressの由来はそれぞれ[`META`提案](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)）、[`INSERT`草案](../../raw/www.w3.org/TR/WD-insert-951220.html)（[公開元](https://www.w3.org/TR/WD-insert-951220.html)）、[RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）、[HTML 3.0 document head](../../raw/www.w3.org/MarkUp/html3/dochead.html)（[公開元](https://www.w3.org/MarkUp/html3/dochead.html)）、[`progress`の目的に関する説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)）で確認できる。

| 由来のまとまり | 確認できる内容 | 現行要素 |
|---|---|---|
| WWWのhypertext model | node間linkを文中へ置くBerners-Lee独自のanchor／`HREF`設計と、取得URLを失った文書のrelative URL基準 | `a`、`base` |
| image map運用 | サーバー側イメージマップとHTML+ shaped linkの制約を、client-sideの領域とdestinationへ分離 | `area`、`map` |
| SGMLによるHTML文書の形式化 | SGML parser用の文書要素、mixed contentを避けるbody、SGML由来と回顧されるparagraph、SGML tag-pair構文を用いたtitle。個別の元DTDは不明 | `html`、`body`、`p`、`title` |
| 表・出版・authoring tool | SGML table models、word processor、紙媒体の表を研究したWeb向けの単純table model。CALSの縮小移植ではなく、複雑なCALSに対する別案 | `table`、`caption`、`tr`、`th`、`td`、`col`、`colgroup` |
| desktop form UI | platform上のfocus移動、text field、checkbox、radio、pull-down combo list、候補item | `form`、`input`、`select`、`option` |
| formのaccessibilityと階層UI | speech interface、labelled group、windowing systemのnested list、bookmark sublist、自由入力と候補提示 | `label`、`fieldset`、`legend`、`optgroup`、`datalist` |
| SGML属性値の上限 | multiline値を`INPUT`属性へ置く方式を、内容を持つ専用要素へ分離 | `textarea` |
| 法律・編集・細則 | 法案修正の追加・削除、legal documentのstrike-through、実在Webのlegal description／copyright notice | `del`、`ins`、`s`、`small` |
| HTTP metadata | 専用要素を増やさないname/value metadataとHTTP response headerへの写像 | `meta` |
| vendor別embedded content | `IMG`、`DYNSRC`、`EMBED`、`APP`、`APPLET`の分断を汎用挿入機構へ統合 | `object` |
| terminal・Unix manual | computer output用preformatted textを、Unix manual pagesのhypertext化に合わせて拡張 | `pre` |
| Web上のprogress bar | 画像等による非accessibleな表示を、platform-nativeで意味を持つtask progressへ置換 | `progress` |
| Unicode国際化 | inline範囲へlanguage／directionを付け、Unicode mechanismへ変換できるcontainer | `span` |
| スタイルシート | presentationをHTML構造から分離し、authorとreaderのstyleを調停する仕組み | `style` |
| LaTeXと数式組版 | LaTeXのapproachに着想を得たHTML+ mathを一般textでも使える上下付きへ拡張 | `sub`、`sup` |

### 2.2 確認できる由来まで遡ったHTML内部派生12要素

第二表では、`audio`をWHATWG `Audio` APIとgame sound、`button`をdesktop form UI、`data`と`time`を機械可読データ、`figcaption`を画像とcaptionのauthoring、`hgroup`を既存Web markup、`iframe`と`source`をbrowser vendorの実装・提案、`mark`をcontextual highlight、`meter`をscalar measurement、`noscript`をclient-side scriptingのfallback、`summary`をdisclosure UIにそれぞれ由来するものとして配置した。次表は、その配置までに確認できるHTML内部の前身と変更を示す。

内部派生の根拠は、[`audio`統合前後](../../raw/platform.html5.org/history/webapps/r699.html)（[公開元](https://platform.html5.org/history/webapps/r699.html)）、[rich `button`草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)）、[`data`提案](../../raw/www.w3.org/wiki/User%3ATantekelik/data_element)（[公開元](https://www.w3.org/wiki/User:Tantekelik/data_element)）、[`figcaption`導入commit](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)）、[`hgroup`改名commit](../../raw/github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)（[公開元](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)）に置く。

残る枝は、[`iframe`草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)）、[`m`から`mark`への変更](../../raw/github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)）、[`gauge`から`meter`への履歴](../../raw/platform.html5.org/history/webapps/r15.html)（[公開元](https://platform.html5.org/history/webapps/r15.html)）、[`NOSCRIPT`草案](../../raw/www.w3.org/TR/WD-script-960709.html)（[公開元](https://www.w3.org/TR/WD-script-960709.html)）、[`source`導入commit](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)）、[`summary`導入commit](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)）、[`t`初稿commit](../../raw/github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)（[公開元](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)）で確認できる。

| 要素 | HTML内で確認できる前身と変更 |
|---|---|
| `audio` | script-onlyの`Audio` objectを、document内にも置ける`video`共通media APIへ統合 |
| `button` | `input`のsubmit／reset／script buttonを、HTML内容を持てる要素へ拡張 |
| `data` | 表示内容とmachine-readable valueを結ぶ欠落を、`time`等と比較して汎用要素化 |
| `figcaption` | HTML+以来のfigure captionを、`legend`、`dt`／`dd`流用から専用要素へ変更 |
| `hgroup` | section heading用だった旧`header`を改名し、主見出しと副見出しのgroupへ限定 |
| `iframe` | `FRAME`のnavigation modelと`IMG`型のdocument-flow内配置を組み合わせたfloating frame |
| `mark` | 検索結果等のcontextual highlight用`m`を改名 |
| `meter` | Web Applications草案の`gauge`を、既知範囲のscalar measurementへ改名・具体化 |
| `noscript` | client-side `script`を実行できないUA向けのalternate content |
| `source` | `video`の単一`src`を、codec等が異なる複数候補からの選択へ分離 |
| `summary` | `details`のcaptionに`legend`や`dt`を流用する方式を専用要素へ置換 |
| `time` | machine-readableなdate/time用の単文字`<t>`を改名 |

### 2.3 個別の設計要求・実装に由来する8要素

次の8要素は、[HTML+ logical roles](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)）、[WorldWideWeb style file](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)）、[HTML 3.0 divisions](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)）、[HTML+ Figures](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)）、[header wrapper計画](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)）、[Link Types](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)）、[Line Mode Browser履歴](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)）、[IETF国際化草案](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)）でHTML内の要求まで確認できるが、外部の個別語彙またはsystemからの採用は確認できない。次表に、要素ごとに確認できる設計要求または実装上の由来を示す。

| 要素 | 確認できる設計要求または実装上の由来 |
|---|---|
| `abbr` | standard roleを索引化する`ABBREV`系と、発音方式に依存しない一般的な略語markupの要求 |
| `address` | NeXT WorldWideWeb editorの`Address`段落スタイルとHTML serializationの対応 |
| `div` | `class`でchapter、section、abstract等を区別するgeneric division container |
| `figure` | HTML+のcaption付き`FIG`と、既存Webで画像とcaptionを結び主たる流れから分離する利用例 |
| `head` | 既存のheader partを包み、stream受信中でもheader終端を判定するwrapper要求 |
| `link` | テキスト範囲へ局所化されないauthorship、part／whole、index等のnode-level relation |
| `menu` | 検索結果の選択肢や短いitemをcompactに並べる初期list variant |
| `q` | quotation markを言語依存でrenderingするinline quotation |
