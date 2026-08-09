# HTML+から現行HTML要素への系譜（1993–1999）

## 結論

1993年11月8日のDave RaggettによるHTML+ Discussion Documentには、現行要素の`form`, `input`, `select`, `option`, `textarea`, `table`, `caption`, `tr`, `th`, `td`, `q`, `s`, `sub`, `sup`, `pre`と、`abbr`の前身である`ABBREV`が存在する。ただし、HTML+は失効したInternet-Draftであり、それ自体を標準HTMLとは扱わない。[IETF Datatracker, *draft-raggett-www-html-00*, last updated 8 November 1993](https://datatracker.ietf.org/doc/draft-raggett-www-html/) [Dave Raggett, *HTML+ Discussion Document*, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_1.html)

後続仕様との因果関係が最も強いのはformsとtablesである。RFC 1866はDave Raggettがforms materialをHTML+から導出したと明記し、RFC 1942はtable modelがHTML+の初期作業とHTML 3 draftから発展したと明記する。したがって、forms 5要素とtable 5要素のHTML直前の系譜はAと評価できる。[RFC 1866, November 1995, §12](https://www.rfc-editor.org/rfc/rfc1866.html#section-12) [RFC 1942, May 1996](https://www.rfc-editor.org/rfc/rfc1942.html)

`q`, `sub`, `sup`はHTML+から、そのextended versionとW3Cが説明するHTML 3.0 draftを経て後続HTMLへ入った系譜が強い。`abbr`はHTML+とHTML 3.0で`ABBREV`、HTML 4で`ABBR`となるが、改名理由は今回の資料群では確認できない。`s`はHTML 3.2で一度欠落しHTML 4で再登場するため、HTML+から現行要素までの完全な採録経路には一段の未確認箇所がある。`pre`はHTML+初出ではなく、HTML+自身が既存HTMLでのcomputer outputとUnix manual pagesへの需要をその前史として説明している。

## 資料の位置づけと日付

| 日付 | 資料 | 位置づけ | この調査で使う内容 |
|---|---|---|---|
| 1993-11-08 | [HTML+ Discussion Document](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_1.html) | 失効した個人Internet-Draft | 対象要素の名称、意味、設計上の説明 |
| 1994 | [A Review of the HTML+ Document Format](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html) | WWW'1向けのHTML+概要。ページ自身には発行日の表示がない | HTML+で何が追加されたか、実装状況、1994年時点の改訂内容 |
| 1995-04-25 | [HTML 3.0 Internet-Draft](https://datatracker.ietf.org/doc/draft-ietf-html-specv3/) | 失効したIETF WG draft | HTML+語彙の後続提案。W3Cの歴史資料はこれをHTML+の“extended version”と説明する |
| 1995-11 | [RFC 1866, HTML 2.0](https://www.rfc-editor.org/rfc/rfc1866.html) | 当時のStandards Track RFC | forms 5要素と`pre`の標準化 |
| 1996-05 | [RFC 1942, HTML Tables](https://www.rfc-editor.org/rfc/rfc1942.html) | Experimental RFC | HTML+ table modelからの発展を明記 |
| 1997-01 | [RFC 2070, Internationalization of HTML](https://www.rfc-editor.org/rfc/rfc2070.html) | 当時のStandards Track RFC | `q`, `sub`, `sup`を国際化の要請からHTML 2.0へ追加 |
| 1997-01-14 | [HTML 3.2](https://www.w3.org/TR/REC-html32) | W3C Recommendation | tables、`sub`, `sup`を採録。`s`ではなく`STRIKE`を採録 |
| 1997-12-18 | [HTML 4.0](https://www.w3.org/TR/REC-html40-971218/) | W3C Recommendation | `ABBR`, `Q`, `S`を含む後続標準化 |
| 1999-12-24 | [HTML 4.01](https://www.w3.org/TR/html401/) | W3C Recommendation | HTML 4系での対象要素を確認し、変更付録の誤記訂正も参照 |

W3CのHTML史ページはHTML+を「1993年に最初にInternet-Draftとして公開された拡張提案」、HTML 3.0をその“extended version”と説明する。これはHTML+からHTML 3.0への関係を示すW3C自身の明示的な説明である。ただし、HTML 3.0も標準化されず、個々の要素が最終標準へ入った経路はRFC 1866、RFC 1942、RFC 2070、HTML 3.2、HTML 4で別々に確認する。[W3C, *Some early ideas for HTML*](https://www.w3.org/MarkUp/historical)

## Forms

### HTML+での設計

1993年HTML+では`FORM`がformの範囲を区切り、`ACTION`がHTTP serverまたはemail addressを指定する。`INPUT`は型を持つ入力fieldであり、`TEXT`, `INT`, `FLOAT`, `DATE`, `URL`, `CHECKBOX`, `RADIO`, `RANGE`, `IMAGE`, `SCRIBBLE`, `AUDIO`, `SUBMIT`, `RESET`が列挙される。[HTML+ §10, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

`TEXTAREA`はmulti-line text fieldで、要素内容が初期値、`ROWS`と`COLS`が可視寸法となる。HTML+はその設計変更も説明している。初期案ではmulti-line textを`INPUT TYPE=TEXT`で扱ったが、長い値を属性へ入れるとSGMLのattribute literal長制限に触れるため、内容を持つ`TEXTAREA`へ分離した。短い原文は“this causes problems for fields with long text values”である。[HTML+ §10, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

`SELECT`は、全候補を表示するradio button／checkboxに対するcompactな選択UIで、一般にはpull-down combo listとしてrenderすると説明される。各候補は`OPTION`で表される。短い原文は“Every alternative is represented by the OPTION element.”である。[HTML+ §10, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

HTML+は特定のGUI toolkitをformsの祖先としていない。ただし、Tab／Shift-Tabによるfocus移動やEnterによるsubmitを「existing conventions for forms」の例として挙げる。また1994年のreviewは、当時のsimple forms実装がNCSA X Mosaicの“pioneering work”に続いたと記す。これは実装史上の影響を示すが、個々の要素名をMosaicから借用した証拠ではない。[HTML+ §10, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [Raggett, *A Review of the HTML+ Document Format*, 1994](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)

### HTML 2.0への採録

RFC 1866は`FORM`, `INPUT`, `SELECT`, `OPTION`, `TEXTAREA`をHTML 2.0 formsとして定義する。さらに謝辞で、Raggettが“deriving the forms material from the HTML+ specification”に重要な役割を果たしたと明記する。単に同名要素が並ぶだけでなく、HTML+からHTML 2.0への因果関係を仕様自身が述べる直接史料である。[RFC 1866, November 1995, §8 and §12](https://www.rfc-editor.org/rfc/rfc1866.html)

| 現行要素 | 1993年HTML+での意味 | HTML 2.0での採録 | 推奨確度 |
|---|---|---|---|
| `form` | 入力field群を含むformを区切り、送信先を指定 | form data setとmethod/action URIのtemplate | A |
| `input` | `TYPE`で多様な入力fieldを表す | user input field。型ごとのinteractionを定義 | A |
| `select` | 候補集合をcompactに示すselection list | enumerated listへ値を制約 | A |
| `option` | `SELECT`内の各候補 | `SELECT`内のone choice | A |
| `textarea` | 内容を初期値とするmulti-line input | multi-line text field | A |

## Tables

### HTML+での設計と1994年までの変更

1993年HTML+の`TABLE`はcaptionを持て、header cellとdata cellを区別し、`ROWSPAN`／`COLSPAN`でcellを結合できる。`TH`はheader cell、`TD`はdata cellである。この版の`TR`は行コンテナではなくrow separatorとして説明され、例でも各行の末尾に置かれる。短い原文は“The TR element is used to separate table rows.”である。[HTML+ §9, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)

1994年のreviewでは構文が`<tr><th>...`へ変わり、“Each row is contained within a TR element”と説明される。したがって、現行`tr`の行コンテナという形は1993年版にそのまま存在したのではなく、HTML+作業中にseparatorからcontainerへ改訂された。[Raggett, *A Review of the HTML+ Document Format*, 1994, “Tables”](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)

`CAPTION`は1993年HTML+ DTDで“table or figure caption”とされ、`TABLE`と`FIG`の両方から使われた。現行`caption`のtable系譜はここから追えるが、HTML+のfigure captionを現行`figcaption`と無条件に同一視してはいけない。[HTML+ DTD, Appendix I, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)

### RFC 1942とHTML 3.2への採録

RFC 1942はtable modelが“grown out of early work on HTML+ and the initial draft of HTML3”と明記し、同RFCをHTML+のsimpler modelのsupersetとする。そのsimpler modelを、optional caption、rowのsequence、各row内のcell、header/data cellの区別、row/column spanとして要約している。これにより`TABLE`, `CAPTION`, `TR`, `TH`, `TD`のHTML+からの採録経路を一組として確認できる。[RFC 1942, May 1996, “Recent Changes” and “Design Rationale”](https://www.rfc-editor.org/rfc/rfc1942.html)

RFC 1942がCALSの影響として明示するのは、`THEAD`／`TBODY`／`TFOOT`によるrow groupingやlong table処理など、HTML+の単純モデルに対する後続拡張である。この記述だけから`TABLE`, `CAPTION`, `TR`, `TH`, `TD`の個々の名前をCALSから直接コピーしたとはいえない。[RFC 1942, May 1996](https://www.rfc-editor.org/rfc/rfc1942.html)

HTML 3.2はRFC 1942の“widely deployed subset”として`TABLE`, `CAPTION`, `TR`, `TH`, `TD`をRecommendationへ採録した。したがって安全な系譜は、HTML+ table work → HTML 3.0／RFC 1942 → HTML 3.2以降である。[HTML 3.2, 14 January 1997, “Tables”](https://www.w3.org/TR/REC-html32#table)

| 現行要素 | HTML+での意味 | 途中の重要な変更 | 推奨確度 |
|---|---|---|---|
| `table` | 表全体 | RFC 1942で大幅拡張 | A |
| `caption` | tableまたはfigureのcaption | 後続table modelではtable caption | A |
| `tr` | 1993年版ではrow separator | 1994年reviewまでにrow container化 | A |
| `th` | header cell | RFC 1942でaccessibility等を拡張 | A |
| `td` | data cell | RFC 1942でaccessibility等を拡張 | A |

## `abbr`（HTML+では`ABBREV`）

1993年HTML+の正確な要素名は`ABBR`ではなく`ABBREV`である。logical emphasis節は、standardなrole markupによってreference等を自動索引化できるという文脈で、`ABBREV`をabbreviationとして定義する。例は`<abbrev>v. aux</abbrev>`である。[HTML+ §5.6, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)

1995年HTML 3.0 draftも`ABBREV`を“used to markup abbreviations”とするが、HTML 3.2には採録されない。HTML 4では`ABBR`がHTML 3.2からのnew elementとして採録される。今回調べたHTML+、HTML 3.0、HTML 4の公式資料は`ABBREV`から`ABBR`への改名理由を説明していない。[HTML 3.0, 25 April 1995, “Information Type Elements”](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.01, “Changes between HTML 3.2 and HTML 4.0”](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

安全な系譜は`HTML+ ABBREV → HTML 3.0 ABBREV → HTML 4 ABBR`であり、語彙の継承は強いが改名の一段が未確認なので推奨確度はA−とする。

## `q`

1993年HTML+は`Q`をinlineに含めるshort quotationと定義し、double quote文字の代わりに`<q>`と`</q>`を使うと説明する。1994年reviewもinline quote `Q`をHTML+のinnovationとして列挙する。[HTML+ §5.6, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [Raggett, *A Review of the HTML+ Document Format*, 1994](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)

HTML 3.0 draftも`Q`をshort quotationとし、language contextに応じたquotation markで表示すると説明する。その後RFC 2070が、言語とplatform capabilityに応じたshort quotationのrenderingを可能にするphrase-level elementとして`Q`をHTML 2.0拡張へ正式に導入し、HTML 4が採録した。[HTML 3.0, 25 April 1995, “Information Type Elements”](https://www.w3.org/MarkUp/html3/logical.html) [RFC 2070, January 1997, §4.2.2](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.2) [HTML 4.01, “Quotations”](https://www.w3.org/TR/html401/struct/text.html#h-9.2.2)

初出時のinline quotationという目的と、RFC 2070で加わったlanguage-sensitive renderingという国際化上の標準化理由を同一視しない。推奨確度はAとする。

## `s`

1993年HTML+では`S`は“Presentation Only Tags”に属し、italic、bold、underlineと並ぶstrike-throughのrendering hintだった。1994年reviewは`S`をnew styleとし、“particularly useful for legal documents”と記す。一方、HTML+には文書変更用の`ADDED`／`REMOVED`が別に存在したため、`S`を当初からrevision semanticsの要素だったとは扱わない。[HTML+ §5.4, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html) [Raggett, *A Review of the HTML+ Document Format*, 1994](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html) [HTML+ §5.10, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)

HTML 3.0 draftには同じ`S`がstrike-throughとして存在する。HTML 3.2は`S`ではなく`STRIKE`を採録し、HTML 4でdeprecatedな`S`が再登場する。HTML 4.01の変更付録は`S`をHTML 4のnew elementとし、旧HTML 4 errataもHTML 3.2には`S`が実際には定義されていなかったと確認する。[HTML 3.0, 25 April 1995, “Font Style Elements”](https://www.w3.org/MarkUp/html3/emphasis.html) [HTML 3.2, 14 January 1997](https://www.w3.org/TR/REC-html32) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) [HTML 4.0 errata](https://www.w3.org/MarkUp/html40-updates/REC-html40-19971218-errata)

したがって`HTML+ S → HTML 3.0 S → [HTML 3.2では欠落] → HTML 4 S → 現行s`までは確認できるが、HTML 4での再採録判断をHTML+へ明示的に結ぶ史料は今回未発見である。さらに現行の「もはや正確または関連しない内容」は後世のsemantic reinterpretationであり、HTML+時代へ逆算しない。推奨確度はA−とする。

## `sub`と`sup`

1993年HTML+は数学式の中で`SUB`と`SUP`をsubscript／superscriptとして使用する。integral等では記号の上下へ、それ以外では右側へ配置すると説明する。数学提案全体は“inspired by the approach taken by LaTeX”と明記されるが、`SUB`／`SUP`という要素名自体をLaTeXから借りたとは書かれていない。[HTML+ §12, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)

HTML 3.0 draftは両要素を“New in 3.0”とし、数式外も含むfont-style elementとして定義する。RFC 2070は一般テキストでもsuperscript／subscriptを必要とする言語のため両要素を追加し、HTML 3.2も両方を採録した。つまり、HTML+での数学・科学表現を直接の導入文脈としつつ、後続標準化では一般組版と国際化へ用途が広がった。[HTML 3.0, 25 April 1995, “Font Style Elements”](https://www.w3.org/MarkUp/html3/emphasis.html) [RFC 2070, January 1997, §4.2](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2) [HTML 3.2, 14 January 1997](https://www.w3.org/TR/REC-html32)

安全な系譜は`HTML+ SUB/SUP（math） → HTML 3.0 → RFC 2070／HTML 3.2 → 後続HTML`である。推奨確度は両方A。ただし`LaTeX → SUB/SUPというタグ名`は未確認とする。

## `pre`

`PRE`はHTML+で初出した要素ではない。HTML+はその前史を、初期HTMLにおける空白と改行が意味を持つcomputer output表示から始まり、Unix manual pagesをhypertextとして提供したいという要求が再設計を“forced”し、character emphasisとembedded hypertext buttonsを扱えるようになった、と説明する。HTML+自身の追加はvariable-pitch fontsとtab stopsである。[HTML+ §11, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)

同じ節は`PRE`をcomputer outputまたはplain text files用のfixed-pitch要素とし、Unix `ls` manual pageを例示する。RFC 1866は`PRE`をmonospaced font向けのcharacter cell blockとして標準化し、anchorとphrase markupを許可する。[HTML+ §11, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html) [RFC 1866, November 1995, §5.5.2](https://www.rfc-editor.org/rfc/rfc1866.html#section-5.5.2)

安全な系譜は`preformatted computer output → 初期HTML PRE → Unix manual pagesのhypertext化に伴う拡張 → HTML+でtab等を追加 → HTML 2.0以降`である。computer output／Unix manual pagesという導入・拡張理由は直接史料で確認できるため推奨確度はA。ただし、`PRE`という名前をHTML以前の特定markup systemから借りたかは未解決である。

## 要素別評価

| 要素 | HTML+での正確な名前 | HTML+での位置づけ | 後続の採録経路 | 推奨確度 | 未確認点 |
|---|---|---|---|---|---|
| `form` | `FORM` | form container | RFC 1866がHTML+由来を明記 | A | 特定GUI toolkitとの直接関係 |
| `input` | `INPUT` | typed input field | RFC 1866がHTML+由来を明記 | A | 個々のwidgetの直接祖先 |
| `select` | `SELECT` | compact selection list | RFC 1866がHTML+由来を明記 | A | 特定GUI widgetの直接祖先 |
| `option` | `OPTION` | `SELECT`内の候補 | RFC 1866がHTML+由来を明記 | A | なし |
| `textarea` | `TEXTAREA` | multi-line input | `INPUT TYPE=TEXT`からの分離理由をHTML+が明記し、RFC 1866が採録 | A | なし |
| `table` | `TABLE` | table全体 | RFC 1942がHTML+からの発展を明記 | A | HTML+以前の個別markup祖先 |
| `caption` | `CAPTION` | table／figure caption | RFC 1942がHTML+ table modelからの発展を明記 | A | figure用途と`figcaption`の別系譜 |
| `tr` | `TR` | 1993年はrow separator | 1994年までにrow container化、RFC 1942へ | A | separatorからcontainerへの議論記録 |
| `th` | `TH` | header cell | RFC 1942がHTML+からの発展を明記 | A | 個別名称のさらに上流 |
| `td` | `TD` | data cell | RFC 1942がHTML+からの発展を明記 | A | 個別名称のさらに上流 |
| `abbr` | `ABBREV` | abbreviation role | HTML 3 `ABBREV` → HTML 4 `ABBR` | A− | 改名理由、HTML 4での具体的採録判断 |
| `q` | `Q` | inline short quotation | HTML 3 → RFC 2070 → HTML 4 | A | 初出理由とi18n強化を区別する |
| `s` | `S` | presentational strike-through | HTML 3 → 3.2で欠落 → HTML 4で再登場 | A− | HTML 4再採録とHTML+を結ぶ明示史料 |
| `sub` | `SUB` | 主にmathのsubscript | HTML 3 → RFC 2070／HTML 3.2 | A | タグ名自体のLaTeX由来は未証明 |
| `sup` | `SUP` | 主にmathのsuperscript | HTML 3 → RFC 2070／HTML 3.2 | A | タグ名自体のLaTeX由来は未証明 |
| `pre` | `PRE` | 既存HTML要素をHTML+で拡張 | 初期HTML → HTML+ → RFC 1866 | A | HTML以前のタグ名・markup祖先 |

## 否定された仮説と禁止する短絡

- `HTML+に存在する → HTML+が初出`とはしない。`pre`はHTML+自身が既存HTMLでの前史を説明する。
- formsを紙フォームまたは特定GUI toolkitから直接移植したとはしない。HTML+が明記するのはplatform上の操作慣習とNCSA X Mosaicの実装上の先駆性までである。
- `TABLE`等をCALSから直接コピーしたとはしない。RFC 1942がCALS由来と明記する部分と、HTML+から継承した単純モデルを分ける。
- `ABBREV`と`ABBR`の名前が似ていることだけで改名理由を補わない。
- `S`のlegal documentsでの有用性を、revision semanticsの直接起源としない。HTML+では`S`はpresentation onlyで、変更markupは別要素だった。
- HTML+ math全体がLaTeX approachに着想を得たことから、`SUB`／`SUP`という要素名自体もLaTeX由来だとは推論しない。
- `Q`のHTML+でのinline quotationという初出目的と、RFC 2070でのlanguage-sensitive quotation markという国際化理由を一文に圧縮しない。

## 未解決

- `ABBREV`から`ABBR`への改名理由。
- HTML 4が`S`を再採録した具体的な議論と、HTML+／HTML 3.0の`S`を参照した証拠。
- 1993年HTML+のseparator型`TR`が、1994年reviewのcontainer型へ変わった具体的な議論。
- HTML+ formsとNCSA X Mosaic formsの提案・実装の正確な時系列。現資料だけでは一方向の借用関係を確定できない。
- `PRE`というタグ名のHTML以前の直接祖先。
- HTML+の単純table modelより前に、`TABLE`, `CAPTION`, `TR`, `TH`, `TD`の個別名称へ影響したmarkup systemがあるか。
