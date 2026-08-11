---
status: 完成
---

# HTML要素のHTML以前の供給源と上流文化

## 読み方

このページは、現行要素を現在の機能ではなく由来から読むための地図である。個別要素の結論と証拠は[要素索引](../README.md#要素)、複数要素の確認済み経路は[共有系譜](../lineages/README.md)を正本とする。

分類軸は三つある。第一はHTML+やIETF／W3C草案も別段階として数える「HTML内の直接供給段階」、第二は初期HTMLからWHATWGまでを一続きの内部史に畳み、外部からの直接採用、外部材料のHTML化、内部派生、固有要求を区別する「HTML外まで遡った由来」、第三は直接祖先とは限らない文書文化、authoring practice、UI慣習等の「上流文化」である。前二表では現行115要素を主経路へ一度ずつ置き、文化表では重複所属を許す。

「直接採用」は語彙、構造、実装、仕様からHTMLへの採用因果を確認できる場合に限る。設計時に参照した外部実務やUIをHTML独自の語彙へ変換した要素、HTML内部の既存機構から派生した要素、HTML固有の要求から設計した要素を別の由来として並べ、名称や用途の類似だけでは系譜を結ばない。

## 1. HTML内の直接供給段階

| 直接供給源 | HTMLへの渡り方 | 現行要素 |
|---|---|---|
| AAP／CERN-SGML | AAPのheading語彙がCERN SGML guideを経て初期HTMLへ入り、CERN-SGMLのlist集合が初期HTMLへ採録された | `h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`ul`、`ol`、`li`、`dl`、`dt`、`dd` |
| GNU Texinfo | 1993年HTML draftのcharacter highlighting集合がTexinfo macro namesから名前を得た | `b`、`i`、`em`、`strong`、`code`、`samp`、`kbd`、`var`、`dfn`、`cite`、集合単位のみ確認できる`u` |
| CALS table model | CALSのrow group構造をIETF table草案がHTMLへ取り込んだ | `thead`、`tbody`、`tfoot` |
| 既成のXML vocabulary | MathML／SVGの既存rootをHTML parserがforeign contentとして統合した | `math`、`svg` |
| CERN WorldWideWeb／初期HTML設計 | 最初期実装、設計mail、DTD、初期draftでHTML自身の基礎語彙として成立した | `a`、`address`、`base`、`blockquote`、`body`、`head`、`html`、`link`、`menu`、`meta`、`p`、`pre`、`title`。metaは少し後の個別提案、menuは現行意味までの再定義経路に欠落がある |
| HTML+ | HTML向けの実験仕様でforms、tables、amendments、figures、client-side image mapsを先に組み立て、HTML 2〜4またはHTML5へ供給した | `form`、`input`、`select`、`option`、`textarea`、`table`、`caption`、`tr`、`th`、`td`、`del`、`ins`、`figure`、`map`、`area` |
| IETF／W3Cの機能別HTML草案 | HTML 3、国際化、forms、tables、frames、style、scripting、compound document等の草案が要素を設計し、後続HTMLへ統合した | `abbr`、`button`、`col`、`colgroup`、`datalist`、`div`、`fieldset`、`iframe`、`label`、`legend`、`noscript`、`object`、`optgroup`、`q`、`span`、`style`、`sub`、`sup`。一部はより古い候補やvendor枝との個別接続に欠落がある |
| browser vendorの実装・提案 | 製品で先に実装した機能または拡張案を標準化へ戻した | 接続が明瞭な`img`、`embed`、`script`、`canvas`、`video`と、現行標準までの接続に欠落がある`br`、`hr`、`wbr` |
| 既存Web markup／ARIA／community実装 | 実サイトのmarkup、ARIA role、JavaScript UI、community proposal、polyfillを標準要素へ引き上げた | `article`、`aside`、`dialog`、`footer`、`header`、`main`、`nav`、`picture`、`ruby`、`rt`、`rp`、`search`、`section` |
| 外部・隣接仕様の提案 | 国際化、XForms、timed text、Web Components、Open UI等の作業からHTMLへ機構または要素を統合した | `bdi`、`bdo`、`output`、`selectedcontent`、`slot`、`template`、`track` |
| HTML／WHATWG内部の既存機構 | 既存要素、API、placeholder、旧語彙を分解、改名、専用化、再定義した | `audio`、`data`、`figcaption`、`hgroup`、`mark`、`meter`、`progress`、`s`、`small`、`source`、`summary`、`time` |
| GUIの具体的慣習 | 特定の既成markup語彙ではなく、GUI部品の挙動を参照してWHATWGが要素を設計した | `details` |

この表はHTMLの標準化経路を追うための地図であり、HTML+、IETF／W3C草案、WHATWG内部変更も独立した供給源として扱う。現行115要素を最も説明力の高い主経路へ一度ずつ置いた。

## 2. HTML外まで遡った由来

| 由来の型 | HTMLとの関係 | 現行要素 |
|---|---|---|
| AAP／CERN-SGML | AAPのheading語彙がCERN SGML guideを経て初期HTMLへ入り、CERN-SGMLのlist集合が初期HTMLへ採録された | `h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`ul`、`ol`、`li`、`dl`、`dt`、`dd` |
| GNU Texinfo | 1993年HTML draftのcharacter highlighting集合がTexinfo macro namesから名前を得た | `b`、`i`、`em`、`strong`、`code`、`samp`、`kbd`、`var`、`dfn`、`cite`、集合単位のみ確認できる`u` |
| CALS table model | CALSのrow group構造をIETF table草案がHTMLへ取り込んだ | `thead`、`tbody`、`tfoot` |
| 既成のXML vocabulary | MathML／SVGの既存rootをHTML parserがforeign contentとして統合した | `math`、`svg` |
| browser vendorの実装・提案 | HTML標準より先に製品で実装した機能または拡張案を標準化へ戻した | 接続が明瞭な`img`、`embed`、`script`、`canvas`、`video`と、現行標準までの接続に欠落がある`br`、`hr`、`wbr` |
| 既存Web markup／ARIA／community実装 | 実サイトのmarkup、ARIA role、JavaScript UI、community proposal、polyfillを標準要素へ引き上げた | `article`、`aside`、`dialog`、`footer`、`header`、`main`、`nav`、`picture`、`ruby`、`rt`、`rp`、`search`、`section` |
| 外部・隣接仕様の提案 | 国際化、XForms、timed text、Web Components、Open UI等の作業からHTMLへ機構または要素を統合した | `bdi`、`bdo`、`output`、`selectedcontent`、`slot`、`template`、`track` |
| GUIの具体的慣習 | disclosure triangleの挙動をHTML要素として設計した | `details` |
| 外部の設計材料をHTML独自の要素として具体化 | 外部の技術、実務、既存UI、文書文化を設計時に参照してHTML固有の語彙または構造へ変換した。外部語彙そのものからの採用因果は未確認 | `a`、`area`、`base`、`body`、`caption`、`col`、`colgroup`、`datalist`、`del`、`fieldset`、`form`、`html`、`input`、`ins`、`label`、`legend`、`map`、`meta`、`object`、`optgroup`、`option`、`p`、`pre`、`progress`、`s`、`select`、`small`、`span`、`style`、`sub`、`sup`、`table`、`td`、`textarea`、`th`、`title`、`tr` |
| 既存HTML／Web機構から内部派生 | 既存要素、API、placeholder、fallback、旧語彙の分解、拡張、改名、専用化として説明できる | `audio`、`button`、`data`、`figcaption`、`hgroup`、`iframe`、`mark`、`meter`、`noscript`、`source`、`summary`、`time` |
| HTML固有の要求から新規設計 | HTML内で解こうとした要求、用途、実装上の対応から設計した。要求を生んだ外部の具体物は特定できない | `abbr`、`address`、`div`、`figure`、`head`、`link`、`menu`、`q` |
| 上流未確認 | 最初期のHTML上の出現または導入主体までは確認できるが、HTML以前・外部の具体的な設計入力へ接続できない | `blockquote` |

この分類では現行115要素を、外部の語彙・構造・実装から直接採用した57要素、外部材料をHTML独自の要素へ具体化した37要素、既存HTML／Web機構から内部派生した12要素、HTML固有の要求から新規設計した8要素、上流未確認の1要素へ一度ずつ置いた。第一表にも現れる八つのHTML外供給源は、表間で名称、粒度、要素集合を揃えた。後四群の58要素を共通して「HTML内で成立」とは呼ばない。それは由来ではなく、外部の具体的な語彙、構造、実装からの直接採用を確認できないという証拠状態だからである。HTML+やIETF／W3C草案は内部経路として個別ページに残るが、HTML外の直接供給源とは数えない。

### 確認済み供給源の根拠

AAP／CERN-SGMLから見出し・list群、Texinfo macro namesからphrase要素群、CALSからtable row group群へ至る関係は共有系譜で確認している。Texinfoは構造や意味の移植ではなく命名借用であるため、構造語彙の採用とは分ける。[共有系譜](../lineages/README.md)、[AAP Book DTD](../../raw/ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)（[公開元](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)）、[1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）、[IETF table draft](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)）、[GNU Texinfo 2.16](../../raw/ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)）

HTML+はforms、単純table、figure、document amendments、client-side image mapを後続HTMLへ渡した。ほかに、browser実装から`img`、`embed`、`canvas`、`video`、既存Web／ARIA／community実装から`main`、`ruby`群、`picture`、GUI慣習から`details`、外部仕様から`bdo`、`output`等へ至る枝を確認している。[HTML+の共有系譜](../lineages/html-plus.md)、[Andreessenの`IMG`提案](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)）、[WebKit `CANVAS`実装](../../raw/github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)（[公開元](https://github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)）、[`main`提案](../../raw/lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)）、[Picturefill](../../raw/www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/index.html)（[公開元](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)）、[Apple HIGのdisclosure triangle](../../raw/web.archive.org/web/20060701000000id_/http%3A/developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)）、[RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）、[XForms UI](../../raw/www.w3.org/TR/2000/WD-xforms-20001219/ui.html)（[公開元](https://www.w3.org/TR/2000/WD-xforms-20001219/ui.html)）

## 3. 外部からの直接採用ではない58要素をさらに遡る

以下は58要素を省略せず、四分類の各行をさらに上流のまとまりへ分解した結果である。矢印は個別ページで確認できる範囲だけを要約し、外部材料から要素への採用が未確認な箇所を直接祖先として扱わない。

### 3.1 外部の設計材料をHTML独自の要素として具体化した37要素

| 上流のまとまり | 確認できる由来 | 現行要素 |
|---|---|---|
| WWWのhypertext model | node間linkを文中へ置くBerners-Lee独自のanchor／`HREF`設計と、取得URLを失った文書のrelative URL基準 | `a`、`base` |
| image map運用 | server-side image mapとHTML+ shaped linkの制約を、client-sideの領域とdestinationへ分離 | `area`、`map` |
| SGMLによるHTML文書の形式化 | SGML parser用のdocument element、mixed contentを避けるbody、SGML由来と回顧されるparagraph、SGML tag-pair構文を用いたtitle。個別の元DTDは不明 | `html`、`body`、`p`、`title` |
| 表・出版・authoring tool | SGML table models、word processor、紙媒体の表を研究したWeb向けの単純table model。CALSの縮小移植ではなく、複雑なCALSに対する別案 | `table`、`caption`、`tr`、`th`、`td`、`col`、`colgroup` |
| desktop form UI | platform上のfocus移動、text field、checkbox、radio、pull-down combo list、候補item | `form`、`input`、`select`、`option` |
| formのaccessibilityと階層UI | speech interface、labelled group、windowing systemのnested list、bookmark sublist、自由入力と候補提示 | `label`、`fieldset`、`legend`、`optgroup`、`datalist` |
| SGML属性値の上限 | multiline値を`INPUT`属性へ置く方式を、内容を持つ専用要素へ分離 | `textarea` |
| 法律・編集・small print | 法案修正の追加・削除、legal documentのstrike-through、実在Webのlegal description／copyright notice | `del`、`ins`、`s`、`small` |
| HTTP metadata | 専用要素を増やさないname/value metadataとHTTP response headerへの写像 | `meta` |
| vendor別embedded content | `IMG`、`DYNSRC`、`EMBED`、`APP`、`APPLET`の分断を汎用挿入機構へ統合 | `object` |
| terminal・Unix manual | computer output用preformatted textを、Unix manual pagesのhypertext化に合わせて拡張 | `pre` |
| Web上のprogress bar | 画像等による非accessibleな表示を、platform-nativeで意味を持つtask progressへ置換 | `progress` |
| Unicode国際化 | inline範囲へlanguage／directionを付け、Unicode mechanismへ変換できるcontainer | `span` |
| style sheet | presentationをHTML構造から分離し、authorとreaderのstyleを調停する仕組み | `style` |
| LaTeXと数式組版 | LaTeXのapproachに着想を得たHTML+ mathを一般textでも使える上下付きへ拡張 | `sub`、`sup` |

この37要素の根拠は、hypertextについては[Raggettらの回顧](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)）、image mapについては[Seidmanのproposal](../../raw/archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)（[公開元](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)）、SGML形式化については[ConnollyのDTD議論](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)）、表については[RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）と[Raggettの回顧](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)）に置く。

formsとSGML制約は[HTML+ Forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）と[W3C forms草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)）、編集・技術文書・数式は[HTML+ Amendments](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)）、[HTML+ Preformatted Text](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)）、[HTML+ Mathematics](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)）が直接説明する。HTTP、object、Unicode、style、progressの起点はそれぞれ[`META`提案](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)）、[`INSERT`草案](../../raw/www.w3.org/TR/WD-insert-951220.html)（[公開元](https://www.w3.org/TR/WD-insert-951220.html)）、[RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）、[HTML 3.0 document head](../../raw/www.w3.org/MarkUp/html3/dochead.html)（[公開元](https://www.w3.org/MarkUp/html3/dochead.html)）、[`progress`の目的に関する説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)）で確認できる。

### 3.2 既存HTML／Web機構から内部派生した12要素

| 要素 | HTML内で遡れる起点と変更 |
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

内部派生の根拠は、[`audio`統合前後](../../raw/platform.html5.org/history/webapps/r699.html)（[公開元](https://platform.html5.org/history/webapps/r699.html)）、[rich `button`草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)）、[`data`提案](../../raw/www.w3.org/wiki/User%3ATantekelik/data_element)（[公開元](https://www.w3.org/wiki/User:Tantekelik/data_element)）、[`figcaption`導入commit](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)）、[`hgroup`改名commit](../../raw/github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)（[公開元](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)）に置く。

残る枝は、[`iframe`草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)）、[`m`から`mark`への変更](../../raw/github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)）、[`gauge`から`meter`への履歴](../../raw/platform.html5.org/history/webapps/r15.html)（[公開元](https://platform.html5.org/history/webapps/r15.html)）、[`NOSCRIPT`草案](../../raw/www.w3.org/TR/WD-script-960709.html)（[公開元](https://www.w3.org/TR/WD-script-960709.html)）、[`source`導入commit](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)）、[`summary`導入commit](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)）、[`t`初稿commit](../../raw/github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)（[公開元](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)）で確認できる。

### 3.3 HTML固有の要求から新規設計した8要素

| 要素 | 遡れる要求または実装上の起点 |
|---|---|
| `abbr` | standard roleを索引化する`ABBREV`系と、発音方式に依存しない一般的な略語markupの要求 |
| `address` | NeXT WorldWideWeb editorの`Address` paragraph styleとHTML serializationの対応 |
| `div` | `class`でchapter、section、abstract等を区別するgeneric division container |
| `figure` | HTML+のcaption付き`FIG`と、既存Webで画像とcaptionを結びmain flowから分離するuse case |
| `head` | 既存のheader partを包み、stream受信中でもheader終端を判定するwrapper要求 |
| `link` | text spanへ局所化されないauthorship、part／whole、index等のnode-level relation |
| `menu` | 検索結果の選択肢や短いitemをcompactに並べる初期list variant |
| `q` | quotation markを言語依存でrenderingするinline quotation |

これらは[HTML+ logical roles](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)）、[WorldWideWeb style file](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)）、[HTML 3.0 divisions](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)）、[HTML+ Figures](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)）、[header wrapper計画](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)）、[Link Types](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)）、[Line Mode Browser履歴](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)）、[IETF国際化草案](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)）でHTML内の要求まで確認できるが、外部の個別語彙またはsystemからの採用は確認できない。

### 3.4 上流の具体物が未確認の1要素

`blockquote`は1992年12月4日にConnollyが新しいparagraph styleとしてDTDへ追加し、1993年1月6日版DTDで引用要素として確認できる。2017年のConnollyはUsenet news style quotingを有力候補に挙げたが、これは後代の不確かな回想であるため、「Usenet → BLOCKQUOTE」という系譜にはしない。同じ再探索ではDocBook 1.1 betaがHTML側より後発と判明し、Texinfo、LaTeX、FrameMaker MML、MidasWWWも祖先として確定しなかった。[1992年の導入mail](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)）、[2017年の探索log](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)）、[Connollyの回顧](../../raw/lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)（[公開元](https://lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)）

## 4. さらに上流の文化

この表の接続は、個別ページで確認済みの因果関係だけを並べた系譜ではなく、供給源が共有する要求とauthoring cultureをまとめる編集上の見取り図である。

| 上流の文化・要求 | HTMLへ持ち込まれたもの | 関係する現行要素 |
|---|---|---|
| SGML／構造化文書と出版 | 文書の外枠、見出し階層、段落、list、汎用区分、表、図とcaption | `html`、`head`、`body`、`title`、`address`、`h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`p`、`blockquote`、`ul`、`ol`、`li`、`dl`、`dt`、`dd`、`div`、`table`、`caption`、`col`、`colgroup`、`thead`、`tbody`、`tfoot`、`tr`、`th`、`td`、`figure`、`figcaption` |
| 技術文書・software manual・terminal | commandやprogram textの語彙、keyboard input、sample output、変数、定義語、整形済みcomputer output | `b`、`i`、`em`、`strong`、`code`、`samp`、`kbd`、`var`、`dfn`、`cite`、`u`、`pre` |
| 印刷・編集・法律文書 | 引用、略語、上下付き、修正履歴、small print、正確でなくなった記述、highlight、日時、図版caption | `abbr`、`blockquote`、`cite`、`q`、`sub`、`sup`、`del`、`ins`、`s`、`small`、`mark`、`time`、`figure`、`figcaption` |
| hypertext・Web navigation・文書metadata | node間link、文書全体の関係、relative URLの基準、履歴やwindowでの識別、HTTP metadata、image上のlink領域 | `a`、`area`、`base`、`link`、`map`、`meta`、`title` |
| form・data entry・desktop GUI | 入力、選択、labelled group、候補、計算結果、custom select、開示UI、dialog、進捗とmeter | `form`、`input`、`select`、`option`、`textarea`、`button`、`label`、`fieldset`、`legend`、`optgroup`、`datalist`、`output`、`selectedcontent`、`details`、`summary`、`dialog`、`progress`、`meter` |
| compound document・plugin・multimedia | inline画像、外部object、subwindow、bitmap drawing、音声・映像、代替resource、timed text、responsive image、数式・vector graphics | `img`、`object`、`embed`、`iframe`、`canvas`、`audio`、`video`、`source`、`track`、`picture`、`math`、`svg`、`map`、`area` |
| scripting・style・Web application・component | scriptとfallback、文書内style、machine-readable data、inert fragment、Shadow DOM insertion point、application UI | `script`、`noscript`、`style`、`canvas`、`data`、`output`、`dialog`、`template`、`slot`、`selectedcontent` |
| 国際化・文字方向・東アジア組版 | language-sensitive quotation、上下付き、Unicode bidi、generic language／direction container、ruby annotation | `q`、`sub`、`sup`、`span`、`bdo`、`bdi`、`ruby`、`rt`、`rp` |
| 実在するWeb authoringと後方互換性 | `div class`／`id`／ARIA role、既存browser互換markup、polyfill、改行・区切り・legacy presentationの再解釈 | `br`、`hr`、`wbr`、`menu`、`div`、`span`、`section`、`article`、`aside`、`header`、`footer`、`nav`、`main`、`search`、`hgroup`、`ruby`、`rt`、`rp`、`picture`、`s`、`small` |

## 分類間の関係

Texinfoは第一表と第二表の双方でHTML外の具体的な供給源であり、第三表では技術文書・software manual文化の一部になる。HTML+は第一表では直接供給源だが、第二表ではHTML内部史へ畳み込まれ、第三表ではforms、出版、法律文書など複数の文化的要求へ分かれる。

GUI文化も一つの供給源ではない。具体的なGUI慣習まで接続できる`details`がある一方、`form`や`input`はGUIと同じ文化圏に置けても特定toolkitからの採用は未確認である。三層を分けることで、「HTML内のどの段階が渡したか」「HTML外の何から来たか」「どの文化的要求に属するか」を切り替えて読める。
