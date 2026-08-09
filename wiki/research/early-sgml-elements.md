# 初期SGML/GML系統の調査

## 結論

第2回調査では、`body`と`head`について直前のDTD構造または提案からの改名・採用を当事者mailで確認できたが、公開DTD間の中間版または最終名への変更記録が欠けるためA−を推奨する。`html`、`title`、`p`、`ul`、`li`、`ol`、`dl`、`dt`、`dd`、`blockquote`は、HTML側の導入理由または集合単位の設計モデルを当時の一次資料で確認できたためBを推奨する。`address`は1991年の実装初出と意味を固定できたが、採用因果または導入理由がないためCを推奨する。

`h1`〜`h6`だけは別であり、1992年のCERN公式資料がCERN SGML guideから保持し、その定義がAAP tag setに由来すると明記するのでAである。追加調査では、1991年2月1日のRCS識別子を持つAAP Book DTD BK-1保存版がheading familyを`h|h1|h2|h3|h4`と宣言することも確認した。AAP側の5 identifiersとHTML側の6段階は一致しないため個別番号対応は補わず、集合単位の系譜として扱う。この直接証拠を、同名タグがWaterloo SCRIPT/GMLやCERN SGMLに存在するだけの13要素へ拡張しない。[AAP DTD追加調査](aap-heading-dtd.md) [Tim Berners-Lee, *HTML Tags*, 1992-11-03 snapshot](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（2026-08-09閲覧）

CERNのHTML test documentは、CERNで使われたSGML tagsetから“some tags”をHTMLへ含めたと述べ、同じ文書で`TITLE`、`P`、glossary、unordered listを実演する。しかし、どのtagがその“some tags”に当たるかを指定しないため、この集合レベルの文だけで13要素の個別矢印は結ばない。[CERN/W3C, *Test Dataset*, 1992 historical snapshot](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/Test/test.html)（2026-08-09閲覧）

| 要素 | 確認可能なHTML初出 | 当時の意味 | 導入主体と理由 | HTML直前の祖先 | 推奨確度 |
|---|---|---|---|---|---|
| `address` | 1991-02-01 NeXT WorldWideWeb v0.5 | address information、signature、authorshipを表す段落style | Berners-LeeのNeXT実装で追加したことまでは確認。要素固有の採用理由は未確認 | 未確認 | C |
| `body` | 1992-07-15公開DTD、前身の`DOCUMENT`はConnollyの1992-11-19回顧で確認 | document本文を収容する構造要素 | Connollyがmixed contentを避けるため作った`DOCUMENT`を`BODY`へ改名すると提案し、Berners-LeeがmailのHeader/Body用語に合うと支持 | HTML DTD draftの`DOCUMENT`。公開中間版が未回収 | A− |
| `head` | 1992-11-19 `HEADING`提案、1993-01-06 DTDで`HEAD`を確認 | titleなど文書全体の情報を本文から分離するwrapper | Connollyが`TITLE`等を包む省略可能wrapperを提案し、Berners-LeeがmailのHeader/Body用語に合うと支持。早期window初期化という理由も記録 | header part／`HEADING`提案。`HEAD`への改名記録が未回収 | A− |
| `title` | 1991-10-29 Tim Berners-Lee mail | nodeを文脈外で識別し、window banner/nameやhistory listに使う非本文情報 | Berners-Leeがこの用途のために設計したと明記 | 未確認 | B |
| `html` | 1992-06-02 Connolly DTD | title等と本文構造をまとめるdocument element | ConnollyがSGML parserによる推論にtop-level tagが必要なため自ら導入したと明記 | 未確認 | B |
| `p` | 1992-01-09にmailで保存されたHTML説明 | 新しいparagraphを示す空のseparator | browser/editor間でstyled paragraph列へ往復できるflat modelの一部。個別の先行祖先は未確認 | 未確認 | B |
| `ul` | 1991-10-29 Tim Berners-Lee mail | `LI`からなるunordered listのstyle | Berners-Leeがstyle tagsと説明し、HTML design constraintsが`LI` within `UL`をflat modelで許す限定的nestingの例にする | 未確認 | B |
| `li` | 1991-10-29 Tim Berners-Lee mail | `UL`または`OL`内のlist item | 同上 | 未確認 | B |
| `ol` | 1991-10-29 Tim Berners-Lee mail | 順序を有意とし、典型的にはitemを番号表示するlist | 1992年HTMLでは一時未使用だったが、Berners-Leeがunordered listと区別するため戻す案を記し、ConnollyがDTDへ再収録 | HTML以前の祖先は未確認 | B |
| `dl` | 1991-10-29 Tim Berners-Lee mail | termとdefinitionの組を並べるglossary／definition list | Berners-Leeが`DL`／`DT`／`DD`をstyle tagsと説明する集合単位の設計モデルを確認。個別の先行祖先は未確認 | 未確認 | B |
| `dt` | 1991-10-29 Tim Berners-Lee mail | definition listの短いterm | 同上 | 未確認 | B |
| `dd` | 1991-10-29 Tim Berners-Lee mail | termに対応し複数行になりうるdefinition | 同上 | 未確認 | B |
| `blockquote` | 1992-12-04 Dan Connolly mail、1993-01-06 DTD | 他のsourceからのblock quotationを独立paragraph styleとして表す | Connollyが新しいparagraph styleとして`html.dtd`へ追加すると明記 | 未確認。2017年のUsenet影響という回顧は不確実 | B |

## 時系列で確認できるHTML側の証拠

### 1991-02-01: `address`の実装記録

NeXT版WorldWideWebの公式change historyはversion 0.5で“Address style implemented in HTML "ADDRESS" tags”と記録する。これは`ADDRESS`の確認可能な最初期のHTML実装であり、後代の仕様だけから遡った初出ではない。[CERN/W3C, *Features and Bug Fixes*, 1991-02-01](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/NeXT/Implementation/Features.html)（2026-08-09閲覧）

同記録は実装と表示styleを示すが、名称または意味を先行文書体系から採ったとは述べないため、`address`はCに留める。

### 1991-10-29: 実装済み語彙

Tim Berners-LeeはX11 browserを実装中のDan Connollyに対し、当時HTML fileへ現れる語彙として`H1`〜`H6`、`UL`と`OL`、`LI`、`DL`、`DT`、`DD`を列挙し、これらをstyle tagsと説明した。`TITLE`はwindowのtop banner/nameまたはhistory listに使うために設計され、本文中の文脈依存な`H1`とは異なり、文脈外でも意味が通るべきだと説明した。[Tim Berners-Lee, “Re: status. Re: X11 BROWSER for WWW”, 1991-10-29](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)（2026-08-09閲覧）

このmailは13要素のうち`title`とlist familyの最初期の確実なHTML出現である。`TITLE`については“designed to be used”という要素固有の設計目的があるためBの根拠になる。list familyについては個別の採用元を述べないが、style tagsとしてflatなdocument modelを構成するという集合単位の設計モデルを直接説明するためBとする。

Berners-Leeの*Design Constraints*は、このmodelの要求を、HTMLをstyled textのparagraph列へ写像し、編集後にelementsへ一意に戻せることと説明する。そのため一般的なnestingを避け、`LI` within `UL`のような限定されたnestingだけを許した。[Tim Berners-Lee, *Design Constraints*, 1992 snapshot](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html)（2026-08-09閲覧）

この集合単位の直接資料は`P`、`UL`、`LI`、`DL`、`DT`、`DD`の具体的なHTML以前の祖先を示さない。そのためA−ではなくBとし、個別採用因果は未解決のまま残す。

### 1992-01-09: HTML説明の保存

Berners-Leeがwww-talkへ貼り付けたHTML説明は、`P`を新しいparagraphを示すtag、`DL`／`DT`／`DD`をtermとdefinitionの組、`UL`／`LI`をlist、`OL`をordered listとして記録する。ただし`OL`には“NOT CURRENTLY USED”という注記がある。[Tim Berners-Lee, “Re: Is there a paper which describes the www protocol?”, 1992-01-09](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)（2026-08-09閲覧）

この時点の`P`は現行のparagraph containerではなく空のparagraph markである。したがって、現在のcontent modelを初期HTMLへ逆算しない。

### 1992-06-02から07-15: ConnollyによるDTD化

Connollyが1992-06-06にwww-talkへ送ったDTDは1992-06-02生成と記録され、`html`、`TITLE`、`ADDRESS`、`P`、`UL`、`OL`、`LI`、`DL`、`DT`、`DD`を宣言する。Connollyは、公開WWW実装以外のSGML parserでHTMLを処理し、GNU Info、Andrew EZ、FrameMakerなど他authoring systemから変換した文書を検証するためDTDが必要だと説明した。[Dan Connolly, “MIME as a hypertext architecture”, 1992-06-06](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0020.html)（2026-08-09閲覧）

1992-11-19にConnollyは、DTD drafting時に`HTML` top-level tagを自分が導入し、start/end tagsを省略可能にしてSGML parserが推論できるようにしたと明記する。これは具体的祖先を示さないが、`html`要素固有の導入主体と理由を示すためBとする。[Dan Connolly, “HTML DTD issues”, 1992-11-19](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（2026-08-09閲覧）

Dan Connollyがwww-talkへ全文を送ったDTDは、`HTML`を`TITLE`等、`BODY`、任意の末尾`ADDRESS`からなるdocument elementとして宣言する。`P`はemptyなparagraph separator、`LI`、`DT`、`DD`にもend tagを持たないcontent modelを与える。`ADDRESS`は既存のTags説明を引用しつつ、このDTDでは文書末尾だけに制限した。[Dan Connolly, “HTML DTD enclosed”, 1992-07-15](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)（2026-08-09閲覧）

同DTDは`BODY`が必要な理由を、`HTML` elementのmixed contentとoptional elementsを同時に扱う問題を避けるためと明記する。さらにConnollyは1992-11-19、同じ理由で本文を包む`DOCUMENT`を導入し、これを`BODY`へ改名できると説明した。1992-06と07月の公開DTD間に`DOCUMENT`版は見つからず時系列に欠落があるが、当事者が改名関係を直接述べるためA−とする。[Dan Connolly, “HTML DTD issues”, 1992-11-19](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)

このDTDには`HEAD`がない。titleなどの情報は`BODY`の前に直接置かれるため、`HEAD`が初期から常に明示的または暗黙的に存在したとは扱わない。

### 1992-11から12月: Connolly仕様と構造wrapperの提案

Connollyは1992-11-30に`html_spec-0.3.tar.Z`を公開し、`html.dtd`、SGML解説、validation suite、parser codeを含むと告知した。同日更新のguideは、HTML documentをheader partと`BODY`からなるとし、header partは`TITLE`、`ISINDEX`、`NEXTID`であると説明するが、まだ`HEAD` elementとはしていない。[Dan Connolly, “An HTML specification and Implementors' Guide”, 1992-11-30](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0123.html) [Connolly, *Recommended HTML Usage*, last-modified 1992-11-30](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html) [Connolly, *A Complete Set of Constructs*, last-modified 1992-11-30](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/complete.html)（2026-08-09閲覧）

Berners-Leeの*Future plans for HTML*は、titleやdocument-wide linksなどを包むheader wrapperを提案し、その利点をheaderの終端が分かり、必要な属性でwindowを開けることと説明する。同じ観点から残りを包む`Body` tagも有用とする。この文書のHTTP `Last-Modified`は1992-12-02である。[Tim Berners-Lee, *Future plans for HTML*, last-modified 1992-12-02](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（2026-08-09閲覧）

1992-11-19にConnollyは`TITLE`、`NEXTID`、`ISINDEX`を包む省略可能な`HEADING` tagを提案し、Berners-LeeはHeaderとBodyがmail nomenclatureに合うと支持した。[Dan Connolly, “HTML DTD issues”, 1992-11-19](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [Tim Berners-Lee, “Re: HTML DTD issues”, 1992-11-19](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)（2026-08-09閲覧）

`HEAD`については、非要素header part、`HEADING`提案、Berners-LeeのHeader支持、1993-01-06 DTDの`HEAD`という系列が直接資料でつながる。ただし`HEADING`から`HEAD`への改名を記録した中間版がないためAではなくA−とする。`BODY`も`DOCUMENT`からの改名を当事者が明記する一方、その中間DTDを回収できていないためA−とする。

同じ文書は、ordered listとunordered listを区別するため`OL`を戻す案を記し、Connollyが実装していると述べる。Connolly自身も1992-11-30の公開告知でordered listsをDTDへ含めたと明記する。これは`OL`のHTML以前の祖先を示さないが、HTML内での再導入理由を直接示すためBとする。

### 1992-12-04から1993-01-06: `blockquote`と`head`

Connollyは1992-12-04、既存codeを大きく変えず`html.dtd`へ追加できる例として“a BLOCKQUOTE tag for a new paragraph style”を挙げた。これは`BLOCKQUOTE`を初期HTMLへ加える主体、時点、直接の設計意図を同時に示す。[Dan Connolly, “Re: The spec evolves...”, 1992-12-04](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)（2026-08-09閲覧）

1993年6月Internet-Draft内のDTDにはRCS id `93/01/06`があり、`HEAD`と`BLOCKQUOTE`の両方を宣言する。`HEAD`は`TITLE`、`ISINDEX`、`NEXTID`、`LINK`、`BASE`をまとめ、`BLOCKQUOTE`は“for quoting some other source”とcommentされる。本文も`HEAD`を文書全体の情報、`BODY`を読者へ提示する本文、`BLOCKQUOTE`を他sourceからの引用と定義する。[Berners-Lee and Connolly, *Hypertext Markup Language (HTML)*, version 1.1, June 1993](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)（[local snapshot](../../raw/draft-ietf-iiir-html-00/draft-ietf-iiir-html-00.txt)、2026-08-09閲覧）

安全に確認できる導入系列は、`HEAD`について「1992-11-19の`HEADING`／Header wrapper提案 → 1992-11-30時点の非要素header part → 1992-12-02までのheader wrapperの理由 → 1993-01-06 DTDの`HEAD`」、`BLOCKQUOTE`について「1992-12-04 Connollyの追加説明 → 1993-01-06 DTDの`BLOCKQUOTE`」である。`HEAD`は最終名への改名記録が欠けるためA−、`BLOCKQUOTE`はHTML以前の特定要素から採用した証拠がないためBとする。

## 要素別の否定された仮説と未解決

### `address`

1992-07-15 DTDはTags説明を引用してaddress informationとsignatureのためとし、DTD上は`BODY`後だけに置いた。1992-11-30 Connolly guideはauthorまたはsourceを示すとし、1993 draftはaddress、signature、authorship、文書statusへ意味を広げる。[1992-07-15 DTD](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) [1992-11-30 guide](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html) [1993 draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

Waterloo GMLにもfront matterのauthor organization addressを表す`ADDRESS`があるが、HTML `ADDRESS`は本文のauthor/source/signature styleとして使われ、位置と意味が一致しない。[University of Waterloo, *SCRIPT GML User's Guide*, 1988-10-18, pp. 5–6](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（2026-08-09閲覧）

否定する仮説は「同名なのでWaterlooまたはCERNの`ADDRESS`を採用した」である。未解決は、Berners-LeeがHTML `ADDRESS`を導入した当時の実装変更または設計記録と、文書末尾の署名styleを選んだ直接の理由である。

### `body`, `head`, `html`

Waterloo GMLは文書のfront matterとbodyを分離する`BODY`／`eBODY`を持つが、これだけではHTMLへの採用因果にならない。[University of Waterloo, *SCRIPT GML User's Guide*, 1988-10-18, abstract and p. 11](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（2026-08-09閲覧）

否定する仮説は「SGMLの通常のframing tagsがそのまま`HTML`／`HEAD`／`BODY`になった」である。1992年CERN Tags資料は通常のSGML framing tagsを送信せず、含めてもparserが無視すると明記し、1992-07 DTDには`HEAD`がない。[Tim Berners-Lee, *HTML Tags*, 1992-11-03 snapshot](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

未解決は、Connollyがtop-level tagの名前に`HTML`を選んだsource、`HEADING`／Header提案から1993-01-06 DTDの`HEAD`へ改名したchange record、`DOCUMENT`を含む中間DTD、Waterloo/CERNのdocument framingからの影響の有無である。

### `title`

Waterloo GMLにもtitle page用の`TITLE`があり、running titleにも利用できるが、HTML `TITLE`はnodeを文脈外で識別しwindowやhistory UIへ使うものとして設計された。用途の一部が似ても採用因果は確認できない。[University of Waterloo, *SCRIPT GML User's Guide*, 1988-10-18, p. 5](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) [Tim Berners-Lee, 1991-10-29 mail](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)

否定する仮説は「一般的なdocument title要素または同名GML tagがそのまま直前祖先である」。未解決は、Berners-Leeが要素名とcontent modelをどの文書体系から選んだかである。

### `p`

Waterloo GMLは`P`をparagraph text blockの開始に使うが、初期HTML `P`はempty separatorである。[University of Waterloo, *SCRIPT GML User's Guide*, 1988-10-18, p. 21](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) [Tim Berners-Lee, 1992-01-09 mail](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)

否定する仮説は「同名`P`なのでWaterloo GML paragraph containerをそのまま採用した」。未解決は、HTMLでcontainerでなくseparator modelを採った理由と、そのmodelの直前実装である。

確度BはWaterlooからの採用を意味しない。初期HTML全体をstyled paragraph列としてbrowser/editor間で往復させる同時代の設計モデルに`P`が属するためであり、要素固有の祖先が未確認という制約を残す。

### `ul`, `li`, `ol`, `dl`, `dt`, `dd`

Waterloo GMLは1988年時点で`OL`／`UL`／`LI`と`DL`／`DT`／`DD`を持つ。guideはordered listをpp. 27–29、unordered listをp. 29、definition listをpp. 31–32で説明する。[University of Waterloo, *SCRIPT GML User's Guide*, 1988-10-18](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（2026-08-09閲覧）

この完全な同名一致は探索仮説にはなるが、1991年mail、1992年HTML説明、1992年DTDのいずれもWaterlooから採用したとは述べない。`OL`について確認できた因果はHTML内で一時未使用となった後の再収録だけであり、HTML以前の祖先ではない。

`UL`／`LI`はDesign Constraintsが限定的nestingの具体例に挙げ、1991年mailはlist familyをlinear sequence of stylesの一部と説明する。`DL`／`DT`／`DD`も同じmailでstyle tagsとしてまとめられる。この集合単位の設計モデルを理由にBとするが、個別採用因果は主張しない。

否定する仮説は「Waterloo → CERN → HTMLを同名一致だけで結ぶ」。未解決は、Berners-Leeがlist familyを選んだ際のsource、CERN SGML guideまたは実文書との個別対応、HTML `LI`／`DT`／`DD`をempty separatorとして実装した理由である。

### `blockquote`

1992-12-04のmailは導入主体とparagraph styleという理由を示すが、名称または意味をどこから得たかは述べない。Dan Connollyは2017年の回顧でUsenet news style quotingの影響がよりありそうだと述べる一方、確実な記憶ではなく、同時代資料からはDocBook `BLOCKQUOTE`との接続も確認できない。[Dan Connolly, “Re: Provenance of the blockquote element”, 2017-09-11](https://lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)（2026-08-09閲覧）

否定する仮説は「DocBookまたはCERN SGMLの同名要素が直接祖先」「固定幅引用を求めたFuture plans節から`BLOCKQUOTE`が生まれた」である。どちらも採用を述べる同時代資料がない。未解決は、Connollyが名称を選んだsourceと、1992-12-04から1993-01-06 DTDへ至る具体的なchange recordである。

## 史料探索の範囲と成果がなかった探索

- W3C 1992-11-03 historical snapshotのTags、Future plans、Connolly guideと、www-talk 1991-10から1992-12の保存mailを確認した。
- 1992-06-02生成DTD、1992-07-15 DTD、1992-11-19のDTD設計mail、1992-11-30 spec 0.3公開告知、1993-06 Internet-Draft本文とRCS id `93/01/06`のDTDを比較した。
- NeXT WorldWideWeb change historyで1991-02-01の`ADDRESS`実装と、日付のない未release 0.14項目にあるDan Connolly由来のheader/body tag生成を確認した。後者は日付を固定できないため、導入時期の主証拠には使わなかった。
- HTML Design Constraintsと1991-10-29 mailで、`P`とlist familyを含むstyled paragraph列、限定的nesting、style tagsという集合単位の設計モデルを確認した。
- CERN HTML test documentで「CERN SGML tagsetからsome tagsをHTMLへ含めた」という集合レベルの記述を確認したが、個別tagの対応を指定しないため13要素の祖先判定には使わなかった。
- W3C public archiveで`BLOCKQUOTE`の1992年初出候補を探索し、1992-12-04のConnolly mailを固定した。これ以前にHTML文脈の`BLOCKQUOTE`を示す一次資料は確認できなかった。
- Waterloo SCRIPT/GML User's Guideで`TITLE`、`ADDRESS`、`BODY`、`P`、`OL`、`UL`、`LI`、`DL`、`DT`、`DD`の先行存在を確認したが、HTML採用を述べる箇所は確認できなかった。
- CERN CDS保存の1986年*CERN SGML User's Guide*も探索対象としたが、今回の取得環境ではanti-bot応答となり本文を再検証できなかった。この資料だけに依存する新規主張は置かず、到達可能なHTML当事者資料を結論の根拠にした。[CERN Document Server record](https://cds.cern.ch/record/997909/files/cer-002659963.pdf)
- `html_spec-0.3.tar.Z`の公開告知は確認できたが、告知されたarchiveとsnapshot内`html.dtd`の現行URLは404で、DTD本体は復元できなかった。保存されている同日guideと前後のDTDで境界を記録した。

## 推奨確度の集計

- A−: `body`, `head`（2要素）
- B: `html`, `title`, `p`, `ul`, `li`, `ol`, `dl`, `dt`, `dd`, `blockquote`（10要素）
- C: `address`（1要素）

この判定はHTMLへの導入と直前系譜についての証拠水準であり、同名先行例の古さや調査量ではない。`head`と`body`はHTML標準化内部の直前構造を確認できるが、全13要素でHTML以前の具体的な直接祖先は未確認のままである。
