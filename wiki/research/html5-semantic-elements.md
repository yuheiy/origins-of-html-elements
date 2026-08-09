# HTML5 semantic elementsの導入と既存Web慣習

## 調査範囲

`article`, `aside`, `section`, `header`, `footer`, `nav`, `hgroup`, `figure`, `figcaption`, `details`, `summary`, `mark`, `dialog`について、WHATWGの保存草案、HTML Standardの仕様履歴、同時代のWeb usage調査、W3C HTML Working Groupの説明資料を照合した。対象は「確認可能な初出」「導入時の意味または要求」「具体的な先行物からの採用因果」を分離して評価する。閲覧日はすべて2026-08-09である。

## 結論

| 要素 | 確認可能な導入経路 | HTML直前の祖先 | 推奨確度 | 制約 |
|---|---|---|---|---|
| `article` | 2004-11-10までにWHATWGのsemantic element案、2005-09-01草案で定義 | 未確認。後発のusage調査は`content`, `main`, `body`, `post`との対応を示す | B | usage調査の公表が保存草案より後なので、個別classからの採用因果とはしない |
| `aside` | 2004-11-10の案では`sidebar`、2005-09-01草案では`aside` | 未確認 | B | `sidebar → aside`の正確な改名記録と理由は未確認 |
| `section` | 遅くとも2004-08-28にWA1で定義済み、2005-09-01草案で定義 | 未確認 | B | XHTML 2等の同名要素から採用したことを示す史料は未確認 |
| `header` | 2004–2005年の旧要素を2009-04-30に`hgroup`へ分離し、直後のr3040で現行系統を再導入 | `div id="header"`相当を専用要素で表せないという2009年の要求とWHATWGの再設計 | A | 2004年の旧要素の個別提案者と、さらに上流の祖先は未確認 |
| `footer` | 2004-11-10までにWHATWGのsemantic element案、2005-09-01草案で定義 | 未確認。後発usage調査は`footer`との対応を示す | B | usage調査を導入原因とは断定できない |
| `nav` | 2004-11-10の案では`navigation`、2005-09-01草案では`nav` | 未確認。後発usage調査は`nav`との対応を示す | B | `navigation → nav`の正確な改名記録と理由は未確認 |
| `hgroup` | 2009-04-30にWHATWG editor Ian Hicksonが旧`header`を改名し、subheading用へ限定 | HTML5草案の旧`header` | A | その後の意味変更はあるが、要素導入の直接経路はcommitが明記する |
| `figure` | 2006-11-27にIan HicksonがWHATWG sourceへ追加 | 未確認 | B | 初期captionには既存`legend`を再利用したが、HTML+ `FIG`からの採用因果は未確認 |
| `figcaption` | 2010-01-30に`figure`のcaption機構を`dt`/`dd`または`legend`から専用要素へ変更 | HTML5草案の`figure` caption機構 | A | `CAPTION`という語の類似だけではHTML+ `CAPTION`へ接続しない |
| `details` | 2006-07-06にIan Hicksonがdisclosure triangle widgetとして追加 | commitが直接参照するGUI disclosure widget慣習と、caption構造に再利用した`fieldset > legend` | A | Google Base参照先の当時の本文と、3例のどれを主たるモデルとしたかは未確認 |
| `summary` | 2010-01-30に`details`のcaption機構を`dt`/`dd`または`legend`から専用要素へ変更 | HTML5草案の`details` caption機構 | A | 専用要素名を選んだ議論は未確認 |
| `mark` | 2005-09-01草案の`m`を2008-02-17に`mark`へ改名し、relevance/highlightの意味を詳述 | HTML5草案の`m` | A | `m`自体の具体的なHTML外祖先は未確認 |
| `dialog` | 会話用旧`dialog`を2009-09-15に削除し、2012-04-11にapplication UI用として再導入 | 未確認 | B | 同じ名前の旧要素やGUI dialogとの類似だけでは系譜を結ばない |

## 2005年のsectioning要素群

### 証拠

2004年8月のWHATWG thread “`<section>` and headings”では、Web Applications 1.0がすでに`section`を定義していることをIan Hicksonが述べ、James GrahamはHTML 4のheading使用だけではdocument structureとoutlineを確実に復元できない問題を説明した。同threadはXHTML 2の`section`/`h`とも比較するが、XHTML 2からの採用を明記しない。[WHATWG mailing list, “`<section>` and headings”, August 2004](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/date.html)

2004-11-10のthread “Semantic elements and spec complexity”では、批評対象のsemantic element集合として`section`, `navigation`, `header`, `footer`, `article`, `sidebar`が列挙され、Ian Hicksonは`section`とheadingの結び付きが汎用`div`との差になると説明した。これは6つの役割を区別する設計が2004年11月までに議論されていたことを示す一方、後の`nav`と`aside`への改名日・理由は示さない。[WHATWG mailing list, “Semantic elements and spec complexity”, 10 November 2004](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html)

WHATWGが保存する最初の公開スナップショットである2005-09-01版Web Applications 1.0は、`section`, `nav`, `article`, `aside`, `header`, `footer`をそれぞれ独立した要素として目次と本文へ収録する。`section`はgeneric document/application section、`nav`はnavigation linksのsection、`article`はblog postやforum post等のindependent section、`aside`は周囲とtangentially relatedなsection、`header`はsectionのheadingを表すcontainer、`footer`はsectionに関するauthor/copyright等を表すものとして定義される。[WHATWG, *Web Applications 1.0*, Early Working Draft, 1 September 2005](https://whatwg.org/specs/web-apps/2005-09-01/#sections)

2008年のHTML 5 Differencesは、HTML5の作業を2004年に始まったcontemporary implementationsとdeployed contentの調査として位置づけ、上記6要素をHTML 4にないdocument markupとして列挙する。ただし、各要素をどの具体的先行classまたは語彙から採用したかは述べない。[W3C HTML Working Group, *HTML 5 differences from HTML 4*, 22 January 2008](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements)

Googleの2005年12月Web Authoring Statisticsは、約10億文書のsampleを対象とした調査のclass名上位を`footer`, `menu`, `title`, `small`, `text`, `content`, `nav`等と報告し、`footer → footer`, `title/header/top → header`, `text/content/main/body`および`post → article`, `nav → nav`というHTML5要素との対応を明記する。[Google, *Web Authoring Statistics: Classes*, December 2005](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)

### 解釈

`section`は遅くとも2004-08-28、6役割の提案集合は遅くとも2004-11-10にWHATWGで議論され、2005-09-01には現行名のsectioning modelとして一体的に存在した。導入要求は、汎用`div`やheadingだけでは失われるoutlineと役割を機械可読に区別することだった。2008年文書はHTML5全体とdeployed content調査の関係を示し、2005年12月の統計は`article`, `header`, `footer`, `nav`と実在class慣習の具体的対応を示す。しかし統計の公表日は保存草案より後であり、その文言も「maps very well」であって「この調査結果から採用した」ではない。したがって個別の先行classからHTML要素への矢印は確定せず、`header`以外の5要素は導入理由または設計モデルを確認できるBを推奨する。`header`は後述する2009年の具体的な汎用markup、要求、現行系統再導入を要素単位で確認できるためAとする。

### 未解決

- 2004年から2005年9月までの編集履歴または提案で、6要素それぞれの提案者、正確な初出、採用理由を示すもの。
- 2005年12月に公開されたusage統計以前に、同じdatasetまたは予備調査が編集判断へ使われたことを示す記録。
- `section`とXHTML 2 `section`、`aside`と出版・Webのsidebar慣習の間に、名称や意味の類似を越えた採用記録があるか。

## 現行`header`の再導入

2009年4月7日のWHATWG mailは、当時の`header`では`nav`を子にできず、見出し、menu、検索formをまとめた`div id="header"`相当を表せないと指摘した。4月30日のcommit `7e9b2d1b`（r3039）は旧`header`をsubheading用の`hgroup`へ改名し、30分後のcommit `a729fd0c`（r3040）は見出し、目次、検索form、logo、introductory／navigational aidsを含められる新しい`header`を導入した。編集者の同日返信も、`nav`を`header`内で許可し、提示された構造を可能にし、旧要素を`hgroup`へ改名したと説明する。[問題提起](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-April/061491.html) [改名commit](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4) [再導入commit](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db) [編集者の返信](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)

この経路は旧`header`から現行`header`への単純な改名ではない。heading group用途を`hgroup`へ分離し、広いpage／section header用途へ同名の新要素を割り当てた二枝の再設計である。詳細は[追加調査ノート](header-reintroduction.md)を参照する。

## `hgroup`

### 証拠

2009-04-30のWHATWG仕様commitは、`header`を`hgroup`へ「Rename」し、用途をsubheadingsのsupportに限定したと明記する。編集者はIan Hicksonである。[WHATWG HTML commit `7e9b2d1b`, 30 April 2009](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)

### 解釈

要素単位の改名と設計変更が直接記録されているため、`HTML5 header → hgroup`を確認済み系譜としAを推奨する。これはsectionのheaderを表す現行`header`一般からの概念的派生という主張ではなく、2009年草案内の具体的改名である。

### 未解決

- `hgroup`という新名称の命名案を最初に提示した人物と議論。
- 2022年以降のoutline algorithm整理を経た現行の「heading and related content」までの意味変更を、個別ページでどこまで系譜注記するか。

## `figure`と`figcaption`

### 証拠

2006-11-27のIan Hicksonによるcommitは`figure`と関連規則を仕様sourceへ追加し、embedded contentとcaptionからなるparagraphとして定義した。captionには既存の`legend`要素を使っていた。[WHATWG HTML commit `32bff0ac`, 27 November 2006](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)

2008年のHTML 5 Differencesも、`figure`をembedded contentとcaptionを関連づける新要素として、`video`と`legend`を含む例で説明する。[W3C HTML Working Group, *HTML 5 differences from HTML 4*, 22 January 2008](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements)

captionの構文はその後`legend`から`dt`/`dd`へ変わった。2010-01-30のcommitは、`figure`と`details`が`dt`/`dd`または`legend`を使う方式をそれぞれ専用の`figcaption`と`summary`へ変更すると明記し、`figcaption`の定義と例を追加した。[WHATWG HTML commit `c3974951`, 30 January 2010](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)

HTML+は1993年に`FIG`とその子`CAPTION`を定義していたが、確認したWHATWGの導入commitはHTML+からの採用または派生を述べない。[Dave Raggett, HTML+ “Figures”, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)

### 解釈

`figure`は導入主体、日付、導入時のモデルを確認できるが、HTML直前の具体的祖先との採用因果がないためBを推奨する。`figcaption`はHTML5草案内の既存caption機構を置換したことがcommitに明記されるためAを推奨する。安全な系譜は`figure + legend（後にdt/dd） → figure + figcaption`であり、`HTML+ FIG/CAPTION → HTML5 figure/figcaption`は未確認の接続として矢印にしない。

### 未解決

- 2006年の`figure`案がHTML+ `FIG`、DocBook、XHTML 2、または別のmarkup vocabularyを参照していたか。
- `legend → dt/dd → figcaption`というcaption機構変更それぞれのissue、互換性問題、parser上の要求。

## `details`と`summary`

### 証拠

2006-07-06のIan HicksonによるWHATWG revision 77は、`details`を“disclosure triangle widget”として定義するcommitである。直前版のTBWだった“Disclosure widget”節へ要素名、`HTMLDetailsElement`、先頭`legend`をsummaryとするcontent model、on demandで得る追加情報、`open()`/`close()`を追加した。差分末尾の編集コメントはGNOME usability thread、Apple Human Interface GuidelinesのDisclosure Triangles節、Google Base settingsを直接参照する。[WHATWG HTML commit `f98736ae`, 6 July 2006](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)

導入commitが参照する2006-06-07のGNOME usability threadは、閉じたlabelを展開して追加情報を示すdisclosure widgetと、そのlabel設計を議論している。Apple Human Interface Guidelinesの同時代版はdisclosure triangleを、windowのprimary informationを補足する情報や機能を表示するcontrolと定義し、default closed、clickで下向きになり追加情報を表示する挙動を説明する。commitがこれらを直接参照するため、名称や外見の類似だけでなく、GUI disclosure widget慣習を`details`の設計モデルとして採用した因果を確認できる。ただし、Apple実装をそのまま複製した、または名称`details`をこれらから採ったとは述べない。[Matthew Paul Thomas, reply in GNOME usability thread “Using nouns or verbs for the disclosure widgets”, 7 June 2006](https://web.archive.org/web/20060701000000id_/http://mail.gnome.org/archives/usability/2006-June/msg00015.html) [Apple, *Apple Human Interface Guidelines*, “Disclosure Triangles”, 2005-12-06版](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)

2006-07-17の第二稿は、`open()`/`close()`をboolean `open` content/IDL attributeへ変更し、意味を追加情報またはcontrolsへ広げ、default closedとuserによるtoggleを定義した。想定renderingは閉状態の▶、開状態の▼、先頭`legend`を使うもので、上記3参照も維持された。[WHATWG HTML commit `d31535ee`, 17 July 2006](https://github.com/whatwg/html/commit/d31535eef7ec728bc34ce170fea624b77edf16d3)

同じ履歴サイトが保存するWHATWG Web Applications 1.0 revision 228は、表題上の版日が2006-10-31で、editorをIan Hicksonと記す。同版は`details`をinteractiveなblock-level elementとして定義し、on demandで得られる追加情報またはcontrolsを表すものとした。content modelは先頭の`legend`と後続contentであり、先頭`legend`をdetailsのsummary、`legend`がなければUAが“Details”等を用意するものとした。`open`属性と、userが表示・非表示を要求できることも規定した。[WHATWG, *Web Applications 1.0*, revision 228, 31 October 2006](https://platform.html5.org/history/webapps/r228.html#disclosure-widgets:-the-details-element)

2009-09-15のJeremy Keithによるmailは`details > dt + dd`を提案し、Ian Hicksonは“Ok, done.”と応じた。Ianは初期`legend`の主な利点を、`details`がformでも使われそうなため`fieldset`と一貫することだったと説明した。同日のcommitは`figure`と`details`を`legend`から`dt`/`dd`へ変更したと明記し、`details`では`dt`がsummary、`dd`が残りの内容を担った。[Ian Hickson, “Re: <details>”, W3C public-html, 15 September 2009](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html) [WHATWG HTML commit `9c490f21`, 15 September 2009](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)

2009-09-29にW3C HTML WG ISSUE-83は、`figure`と`details`内で`dt`/`dd`へdescription listとは異なるsemanticsを与える問題を正式課題として記録した。2010-01-12に最終編集されたWHATWG Wikiのchange proposalは、legacy parsing、既存CSSとdefault style、構造と意味の不一致を`dt`/`dd`方式の問題として列挙し、`dlabel`や`dsummary`等の専用要素案を比較した。ただし、最終名`summary`の選択理由は示さない。[W3C HTML WG ISSUE-83, opened 29 September 2009](https://www.w3.org/html/wg/tracker/issues/83) [WHATWG Wiki, “Change Proposal: figure and details”, last edited 12 January 2010](https://wiki.whatwg.org/wiki/Change_Proposal%3A_figure_and_details)

2010-01-30のIan HicksonによるWHATWG仕様commitは、`figure`と`details`で`dt`/`dd`または`legend`を使っていた方式を、それぞれ専用の`figcaption`と`summary`へ変更するとcommit messageで明記する。差分は`summary`を目次と要素定義へ追加し、`details`のcontent modelとcaption参照を`summary`へ置換した。[WHATWG HTML commit `c3974951`, 30 January 2010](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)

### 解釈

`details`は、GUIのdisclosure triangle widgetをHTMLのon-demand disclosureへ採用したことを導入commitのmessageと直接参照から確認できる。captionへ`legend`を選んだ理由も後の編集者説明が`fieldset`との一貫性に置くため、安全な系譜は`GUI disclosure widget慣習 + fieldset > legendの構造モデル → details > legend + contents`である。要素単位の具体的な先行UI慣習からHTMLへ入った因果が直接史料にあるためAを推奨する。

`summary`は新しいdisclosure概念の導入ではなく、既存`details`内で`legend`、のちに`dt`/`dd`が担ったcaption役を専用要素へ置き換えたものである。commitが要素単位の置換を直接明記するため、安全な系譜は`details + legend（後にdt/dd） → details + summary`であり、Aを推奨する。`summary`という名称がHTML 4の`table summary`属性や別の先行markupから採られたとは、確認した史料は述べない。

### 未解決

- 導入commitが参照するGoogle Base settingsの2006年当時の本文と、3参照のどれを主たるモデルとしたか。
- GNOMEとApple以外に、`details`の設計判断へ直接使われたbrowser UI、JavaScript library、または別のUI languageがあったか。
- 2010年に専用名`summary`を選んだ提案または議論と、HTML 4の`table summary`属性等との混同を検討した記録。

## `mark`

### 証拠

2005-09-01草案には`m`があり、marked or highlighted textを表す。検索語に一致する箇所をserverがhighlightする例も示す。[WHATWG, *Web Applications 1.0*, 1 September 2005](https://whatwg.org/specs/web-apps/2005-09-01/#the-m)

2008-02-17のIan Hicksonによるcommitは、`m`を`mark`へ改名し、意味と用例を大幅に詳述したと明記する。差分は、quoted textへのcommentのためのhighlightや、文脈上のrelevanceと`strong`のimportanceとの区別を追加する。[WHATWG HTML commit `a1b2ff77`, 17 February 2008](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)

### 解釈

現行`mark`の直接祖先が同じ意味を持つ草案`m`であり、改名が要素単位で明記されるためAを推奨する。ただし`m`の導入理由は検索結果highlight等の要求までしか分からず、HTML外の具体的markup祖先は確認できない。

### 未解決

- `m`の正確な初出、提案者、名称選択の記録。
- `m → mark`改名を促した具体的issueまたはmailing-list提案。

## `dialog`

### 証拠

2008年HTML 5 Differencesの`dialog`は、`dt`をspeaker、`dd`をspeechとしてconversationをmark upする新要素だった。[W3C HTML Working Group, *HTML 5 differences from HTML 4*, 22 January 2008](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements)

2009-09-15のWHATWG commitはこのconversation用`dialog`を明示的に削除し、conversationを通常のHTMLでmark upする節へ置き換えた。[WHATWG HTML commit `9c490f21`, 15 September 2009](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)

2012-04-11のIan Hicksonによるcommitは、`dialog`, `inert`, `form method=dialog`, anchor pointを「Dialogs in web apps」として一括追加した。新しい`dialog`は、taskを行うためにuserがinteractionするapplicationの一部であり、例としてdialog box、inspector、windowを挙げ、`open`, `show()`, `showModal()`, `close()`とmodal時のdocument blockingを定義した。[WHATWG HTML commit `2fb24fcf`, 11 April 2012](https://github.com/whatwg/html/commit/2fb24fcf3f916236e8767e2cb72b23e5c75b77e9)

### 解釈

現行要素の導入主体、日付、Web application UIという導入要求は確認できるためBを推奨する。会話用旧`dialog`は一度削除され、2012年に別のcontent modelとAPIを伴って再導入されたので、同名であることだけから直接祖先としない。またcommitがdialog box等を設計モデルとして挙げることは確認できるが、特定GUI toolkitのwidgetからHTMLへ採用した因果は確認できない。

### 未解決

- 2012年再導入案の提案者・実装要求を示す、commitより前のmailing-listまたはbug記録。
- `inert`, top layer, `form method=dialog`のうち、どの具体的先行browser UIまたはlibraryが設計へ採用されたか。
- 旧conversation要素と新application UI要素の間で、名称再利用を意図的に決めた議論があるか。

## 証拠一覧

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ “Figures” | 失効したInternet-Draft | `FIG`と子`CAPTION`の先行存在。WHATWGへの採用因果は示さない。 | https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html | 2026-08-09 |
| 2004-08 | WHATWG thread “`<section>` and headings” | mailing list | WA1で定義済みの`section`、headingだけからoutlineを復元する問題、XHTML 2との比較。 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/date.html | 2026-08-09 |
| 2004-11-10 | WHATWG thread “Semantic elements and spec complexity” | mailing list | `section`, `navigation`, `header`, `footer`, `article`, `sidebar`の提案集合と`div`との差。 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html | 2026-08-09 |
| 2005-09-01 | WHATWG Web Applications 1.0 | 保存Early Working Draft | `section`, `nav`, `article`, `aside`, `header`, `footer`, `m`の存在と導入時の意味。 | https://whatwg.org/specs/web-apps/2005-09-01/ | 2026-08-09 |
| 2005-12 | Google Web Authoring Statistics: Classes | 当時のusage調査（保存複製） | class名頻度と`article`, `header`, `footer`, `nav`への対応。公開時期は2005-09草案より後。 | https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html | 2026-08-09 |
| 2006-06-07 | GNOME usability thread “Using nouns or verbs for the disclosure widgets” | UI設計議論（保存複製） | 閉じたlabelから追加情報へ展開するdisclosure widget。`details`導入commitが参照する。 | https://web.archive.org/web/20060701000000id_/http://mail.gnome.org/archives/usability/2006-June/msg00015.html | 2026-08-09 |
| 2006-07-01以前 | Apple HIG “Disclosure Triangles” | platform UI guideline（保存複製） | disclosure triangleの状態、操作、追加情報を必要時に示す用途。`details`導入commitが参照する。 | https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html | 2026-08-09 |
| 2006-06/07 | A feature history of the modern Web Platform | WHATWG FAQ参照先の後代索引 | `details`導入を2006年6月・7月の区分に置く。正確な日付、commit、採用理由は示さない。 | https://platform.html5.org/history/ | 2026-08-09 |
| 2006-07-06 | WHATWG commit `f98736ae` | 仕様commit | disclosure triangle widgetとして`details`を追加し、先頭`legend`と追加情報を定義。 | https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd | 2026-08-09 |
| 2006-07-17 | WHATWG commit `d31535ee` | 仕様commit | `open`属性、default closed、user操作、初期renderingを追加。 | https://github.com/whatwg/html/commit/d31535eef7ec728bc34ce170fea624b77edf16d3 | 2026-08-09 |
| 2006-10-31 | WHATWG Web Applications 1.0 revision 228 | 保存Working Draft | `details`をon-demandの追加情報・controlsとして定義し、先頭`legend`、`open`、userによる開閉を規定。 | https://platform.html5.org/history/webapps/r228.html#disclosure-widgets:-the-details-element | 2026-08-09 |
| 2006-11-27 | WHATWG commit `32bff0ac` | 仕様commit | `figure`追加、embedded contentとcaptionのモデル、`legend`の再利用。 | https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059 | 2026-08-09 |
| 2008-01-22 | HTML 5 differences from HTML 4 | W3C Working Draft | 2004年開始のdeployed content調査という全体背景、新要素群の当時の説明。 | https://www.w3.org/TR/2008/WD-html5-diff-20080122/ | 2026-08-09 |
| 2008-02-17 | WHATWG commit `a1b2ff77` | 仕様commit | `m`から`mark`への改名とrelevance/highlight用例の拡張。 | https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635 | 2026-08-09 |
| 2008-06-10 | W3C HTML 5 | Working Draft | `details`、先頭`legend`によるsummary、`open`を収録。独立した`summary`要素はない。 | https://www.w3.org/TR/2008/WD-html5-20080610/interactive-elements.html#the-details | 2026-08-09 |
| 2009-04-23 | W3C HTML 5 | Working Draft | `details`のcaptionが引き続き先頭`legend`だったことを確認。 | https://www.w3.org/TR/2009/WD-html5-20090423/interactive-elements.html#the-details-element | 2026-08-09 |
| 2009-04-07 | WHATWG “About Descendent Tags” | mailing list | 当時の`header`ではpage header相当を表せず、`nav`を子にできないという要求。 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-April/061491.html | 2026-08-09 |
| 2009-04-30 | WHATWG commit `7e9b2d1b` | 仕様commit | `header`から`hgroup`への改名とsubheading用途への限定。 | https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4 | 2026-08-09 |
| 2009-04-30 | WHATWG commit `a729fd0c` | 仕様commit | 現行系統の新しい`header`を導入し、広いintroductory／navigational contentを定義。 | https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db | 2026-08-09 |
| 2009-04-30 | WHATWG “About Descendent Tags”への編集者返信 | mailing list | `nav`を`header`内で許可し、提示構造を可能にし、旧`header`を`hgroup`へ改名したという理由。 | https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html | 2026-08-09 |
| 2009-09-15 | WHATWG commit `9c490f21` | 仕様commit | conversation用`dialog`の削除。 | https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7 | 2026-08-09 |
| 2009-09-15 | public-html “Re: &lt;details&gt;”／WHATWG commit `9c490f21` | 標準化mail／仕様commit | `dt`／`dd`案の採用と、旧`legend`方式を`fieldset`と一貫させた理由。 | https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html / https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7 | 2026-08-09 |
| 2009-12-18 | “Validation Errors on Figures and Details” | WHATWG help mailing list | 当時の仕様が`details`の最初のchildとしてcaption用`dt`を許可していたことを引用。 | https://lists.whatwg.org/pipermail/help-whatwg.org/2009-December/002989.html | 2026-08-09 |
| 2010-01-19 | W3C Bug 8379 comment 13 | HTML5 editor回答 | Ian Hicksonが`details`の設計要求をcommon application widgetのaccessibleなHTML表現と説明。導入後の回顧。 | https://www.w3.org/Bugs/Public/show_bug.cgi?id=8379#c13 | 2026-08-09 |
| 2010-01-30 | WHATWG commit `c3974951` | 仕様commit | `figure`と`details`のcaptionを専用`figcaption`と`summary`へ変更。 | https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f | 2026-08-09 |
| 2012-04-11 | WHATWG commit `2fb24fcf` | 仕様commit | application UI用`dialog`、modal/non-modal API、関連機構の再導入。 | https://github.com/whatwg/html/commit/2fb24fcf3f916236e8767e2cb72b23e5c75b77e9 | 2026-08-09 |

## 調査記録

WHATWGの公式保存スナップショット、Git/SVN移行済み履歴、仕様commit、public-html mail、W3C tracker、導入commitが参照するApple HIGとGNOME usability threadを照合した。追加調査では2009年の`header`再導入commitと理由を確定した。2004年から2005年8月までの編集履歴、6 sectioning要素の個別提案、`figure`とHTML+の接続、`details`と`summary`の名称選択、2012年`dialog`の先行提案は今回の探索では確定できなかった。

確度は、後代の仕様説明やusage統計が意味の妥当性を補強しても、当時の採用行為を直接示さない場合にはAへ上げていない。`details`は導入commitが具体的UI資料を直接参照するため、GUI disclosure widgetとの接続を採用する。名称の類似だけによる`HTML+ FIG/CAPTION → figure/figcaption`、HTML 4 `table summary`属性等から`summary`への接続、外見・機能の類似だけによる`GUI dialog → dialog`、同名だけによる`conversation dialog → application dialog`は採用しない。
