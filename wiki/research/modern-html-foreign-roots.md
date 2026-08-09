# Modern HTML要素とforeign rootの導入経路

## 調査範囲

`picture`, `template`, `slot`, `data`, `selectedcontent`, `ruby`, `rt`, `rp`, `math`, `svg`について、Responsive Images、Web Components、HTML WG、Open UI、W3C Internationalization、MathML、SVGという別々の標準化経路を一次資料で調べた。確認可能な最初期の提案または仕様、HTMLへの導入主体と理由、直接祖先、未確認の上流接続を分離した。現行仕様は対象要素の同定にのみ使い、現在の機能的一致を採用因果の証拠にはしていない。閲覧日はすべて2026-08-09である。

## 結論

| 要素 | 確認可能な導入経路 | HTML直前の祖先 | 確度候補 | 主な制約 |
|---|---|---|---|---|
| `picture` | 2012年RICG提案・Picturefillから2013年HTML WG extension draftを経て、2014-06-17にWHATWGへupstream統合 | Responsive Images Community Groupの`picture`提案 | A | 最初のmarkup提案commitは未確認 |
| `template` | 2012-01-09のWeb Components仕様bug、2013-02-14のHTML Templates FPWD | standalone HTML Templates提案 | B | WHATWG HTMLへ統合したcommitを未確認 |
| `slot` | Shadow DOM v0の`content` insertion pointを再設計し、2016-04-20にHTMLへ追加 | WHATWG DOMのslot概念とShadow DOM slots proposal | A | `content`からの単純改名ではなく配布モデルの変更を含む |
| `data` | 2011年のHTML WG議論、2012年change proposalと合意を経て導入 | HTML WGの`data` change proposal | A | editor draftへ最初に追加したcommitは未確認 |
| `selectedcontent` | Open UIの`selectedoption`案を2024年に改名し、2025-07-21にcustomizable `select`の一部としてHTMLへ追加 | Open UI／WHATWGの`selectedoption`提案 | A | 最初のprototypeとOpen UI提案commitは未確認 |
| `ruby` | 1998年W3C I18N語彙と既存Web利用を背景に、2008-05-26に`rt`, `rp`と同時追加 | W3C Ruby語彙、IE実装、既存Web上のruby markupという集合 | A− | HTML5 commitはどの一つから採用したかを特定しない |
| `rt` | `ruby`と同じcommitで追加 | 同上の`rt`語彙と既存利用 | A− | 集合レベルの採用説明のみ |
| `rp` | `ruby`と同じcommitでlegacy UA向け括弧機構として追加 | 同上の`rp`語彙と既存利用 | A− | 集合レベルの採用説明のみ |
| `math` | MathML 1.0のrootを2008-04-05に`text/html` parserのforeign contentへ統合 | MathML名前空間の`math` root | A | 統合を求めたissue／mailing-list議論は未確認 |
| `svg` | SVG 1.0のrootを2008-04-05に統合、一度削除後、2009-03-25に再導入 | SVG名前空間の`svg` root | A | 削除要請と再導入時のfeedback本文は未確認 |

## Responsive Images: `picture`

### 証拠

2012-02-21にScott Jehlは、提案中の`picture` markupを試すPicturefillをResponsive Images Community Group上で公開した。`source`のmedia queryに一致した画像をfallbackの`img`へ反映し、native実装なら不要になる制約も明記している。これは後代の同名機能からの推測ではなく、標準化中のmarkupを実行可能にした同時代実装である。[Responsive Images Community Group, “A sample picture implementation”, 21 February 2012](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)

2013-02-26のHTML Working Group First Public Working Draftは、RICGとの共同開発であることを明記し、`picture`をCSS media queryによってsource contentが決まるimage containerとして定義した。導入理由は、複数画像sourceを宣言し、閲覧環境に応じて選択しつつ、`img` fallbackでlegacy user agentへ対応することだった。[W3C HTML Working Group, *The picture element*, First Public Working Draft, 26 February 2013](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)

同日のuse cases文書は、2012年に実用されていたcustom techniqueの欠点を標準化の動機とし、resolution switching、art direction、design breakpoints、media features、画像形式、利用者によるsource制御を要求として列挙した。したがって`picture`の導入要求は単なる「現在responsive imagesに使われる」ことからではなく、提案時の要求文書から確認できる。[W3C HTML Working Group, *Use Cases and Requirements for Standardizing Responsive Images*, First Public Working Draft, 26 February 2013](https://www.w3.org/TR/2013/WD-respimg-usecases-20130226/)

2014-06-17のWHATWG commitは“integrate upstream `<picture>` updates”として`picture`、`picture`内の`source`、`img`選択規則をHTML Living Standardへ統合した。RICG repositoryも、自身がHTML Standardへ採用される前の提案履歴と、その後WHATWGへ移った履歴を保存するrepositoryだと説明している。[WHATWG HTML commit `a7716b7a`, 17 June 2014](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204) [ResponsiveImagesCG `picture-element` repository](https://github.com/ResponsiveImagesCG/picture-element)

### 解釈

確認できる系譜は`RICGのpicture提案とPicturefill → HTML WG picture extension → WHATWG HTML picture`である。proposal、同時代prototype、独立仕様、upstream統合commitが同じ要素を連続して示すためAを候補とする。既存`source`要素を再利用した事実は確認できるが、`video`／`audio`の`source`から`picture`自体が派生したとは記録されていないため、その矢印は結ばない。

### 未解決

- RICG以前または2012年初頭に`picture`という名称と最初のmarkupを提案した正確な議論・commit。
- 2014-06-17のupstream更新より前にWHATWG sourceへ要素本体を最初に置いたcommit。
- Picturefill以外のclient-side workaroundが最終構文へ個別に採用されたことを示す記録。

## Web Components: `template`

### 証拠

2011-11-17にRafael WeinsteinはWHATWG mailing listへ、dynamic pageが利用前のDOM fragmentをinertに保持する要求と`template`構文を提案した。JavaScript文字列、hidden textarea、非script MIME typeの`script`、comment、`display: none`など当時の回避策とその問題も列挙する。[Rafael Weinstein, “Declarative Inert DOM”, 17 November 2011](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)

2012-01-09にDimitri GlazkovがW3C WebAppsWGへ作成したbug 15476は、`template`要素と関連処理を仕様化するumbrella bugである。[W3C Bugzilla 15476, “[Templates]: Specify how templates work”, 9 January 2012](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476)

2013-02-14のHTML Templates First Public Working Draftは、dynamic pageが利用前のHTML fragmentを必要とするという要求を説明し、inert DOM subtreeを宣言して同一内容のDocumentFragmentをinstantiateする方法として`template`を定義した。[W3C Web Applications Working Group, *HTML Templates*, First Public Working Draft, 14 February 2013](https://www.w3.org/TR/2013/WD-html-templates-20130214/)

2013-06-28にIan HicksonはW3C Bug 17930で`template`をWHATWG仕様へmergeしたと明記し、統合時のeditorial／normative changesを列挙した。直後のcomment 22はWHATWG revision r8000のcheck-in commentを“Integrate &lt;template&gt; into HTML”と記録する。[W3C Bug 17930, comments 21–22](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21)

### 解釈

2011年WHATWG提案からW3C WebAppsWGのHTML Templates作業を経てWHATWG HTMLへmergeした要素単位の経路を直接確認できる。安全な系譜は`WHATWG template提案（2011年）→ W3C WebAppsWG仕様化作業／HTML Templates草案 → WHATWG HTML merge r8000（2013年）→ 現行template`であり、Aを候補とする。2011年提案が列挙するclient-side workaroundは解決対象であって、特定のserver-side template、XBL、JavaScript libraryからの採用因果は確認できない。

### 未解決

- WHATWG revision r8000に対応する現行Git履歴上のcommit hash。
- Glazkov、Rafael Weinsteinらの提案が、特定のbrowser prototypeまたは既存template mechanismから採用したことを示す資料。
- parser、clone、`innerHTML`規則を現在のHTML Standardへ移した正確な中間経路。

## Web Components: `slot`

### 証拠

2012-05-22のShadow DOM First Public Working Draftは`content` HTML elementをshadow DOM subtreeのinsertion pointとして定義した。2014年版でも`content`とdistribution algorithmがShadow DOM compositionの中心だった。[W3C Web Applications Working Group, *Shadow DOM*, First Public Working Draft, 22 May 2012](https://www.w3.org/TR/2012/WD-shadow-dom-20120522/) [W3C Web Applications Working Group, *Shadow DOM*, Working Draft, 17 June 2014](https://www.w3.org/TR/2014/WD-shadow-dom-20140617/)

2015-04-27に始まったWeb Components issueは、題名を“rename `<content>` to `<slot>`”とし、“content distributed into slots”という用語上の理由を議論した。後続議論は名称だけでなくdistribution modelの単純化を伴うため、`content`と`slot`を完全に同一の機構として扱うべきでないことも示す。[WICG Web Components issue 92, “rename `<content>` to `<slot>`”, opened 27 April 2015](https://github.com/WICG/webcomponents/issues/92)

2016-03-21のWHATWG DOM commitはslotとslotableの概念を定義し、2016-04-20のWHATWG HTML commitはそれを参照してshadow tree用の新しい`slot`要素、`name`、assigned nodes、fallback contentsをHTMLへ追加した。[WHATWG DOM commit `a2b04df5`, 21 March 2016](https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0) [WHATWG HTML commit `3c157377`, 20 April 2016](https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)

### 解釈

HTMLへの直接祖先はWHATWG DOMのslot概念とWeb Componentsのslots proposalであり、HTML commitがこの概念を直接参照して要素を定義するためAを候補とする。さらに上流には`content` insertion pointがあり、改名issueが接続を明示する。ただし安全な系譜は`Shadow DOM v0 content insertion point → 再設計されたslot model → HTML slot`であり、単純な一対一改名とは記述しない。

### 未解決

- `content`からslot modelへ移行する際に変更されたdistribution semanticsの最終決定記録。
- Shadow DOM v0 `content`とXBL `children`等の先行component modelとの採用因果。
- 最初のbrowser implementationとDOM／HTML仕様commitの時間的順序。

## Machine-readable values: `data`

### 証拠

W3C HTML WGのchange proposalは、2011-11-03の議論で`data`追加にrough consensusがあり、editorがすでに追加した定義をHTML5へ採用する提案だと記す。導入理由は、表示用のhuman-readable contentと異なるmachine-readable valueを`value`属性で結び、`meta`の隣接配置やglobal attributeより明示的にすることだった。[W3C HTML WG, “`<data>` element change proposal”](https://www.w3.org/wiki/User:Tantekelik/data_element)

2012-04-04のCall for Consensusは、二つのchange proposalが`data`要素と大半の詳細の追加で一致しており、争点を型systemへ限定した。2012-07-17のWorking Group Decisionは`data`要素自体の追加にはすでにconsensusがあったと確認し、型systemを付けない案を決定した。[W3C public-html, “CfC: Adopt ISSUE-184 data-element Change Proposal”, 4 April 2012](https://lists.w3.org/Archives/Public/public-html/2012Apr/0026.html) [W3C public-html, “Working Group Decision on ISSUE-184 Add a data element”, 17 July 2012](https://www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)

2013-05-28のHTML 5.1 Working Draftは`data`を、contentとそのmachine-readable formを`value`で結ぶ要素として定義し、値がdate/timeならよりspecificな`time`を使うよう区別した。[W3C HTML Working Group, *HTML 5.1*, Working Draft, 28 May 2013](https://www.w3.org/TR/2013/WD-html51-20130528/text-level-semantics.html#the-data-element)

### 解釈

`HTML WG data change proposal → HTML data`は、提案、CfC、決定が要素追加を明示するためAを候補とする。`meta`、global attribute、`time`はproposal内の比較対象であり、具体的祖先として採用されたとは記録されない。特に`time`との機能分担を、`time → data`という派生関係へ読み替えない。

### 未解決

- editor draftへ`data`を最初に追加したcommit、提案者、正確な日付。
- 2011-11-03の議論全文と、その時点の構文が最終案へどう変わったか。
- microformats、microdata、RDFaのどの具体的利用例が編集判断へ使われたか。

## Open UI: `selectedcontent`

### 証拠

2024-07-25のWHATWG issueは、当時`selectedoption`と呼ばれていた要素が、選択された`option`の内容をcloneする設計であることを前提に、その更新timingを議論した。2024-09-18の専用仕様PRも、customizable `select`のbutton内で選択中optionの内容を宣言的にcloneし、独立にstyleする目的を明記した。[WHATWG HTML issue 10520, “Timing of cloning for the `<selectedoption>` element”, 25 July 2024](https://github.com/whatwg/html/issues/10520) [WHATWG HTML pull request 10633, “Define the `<selectedcontent>` element”, opened 18 September 2024](https://github.com/whatwg/html/pull/10633)

Open UI issue 1112は、`selectedoption`という要素名と「selected `option`」が会話とcodeの双方で紛らわしい問題を挙げた。これを受けた2024-11-05のOpen UI PR 1124が`selectedoption`を`selectedcontent`へ改名した。[Open UI issue 1112, “Naming of `<selectedoption>`”](https://github.com/openui/open-ui/issues/1112) [Open UI pull request 1124, “Rename selectedoption to selectedcontent”, opened 5 November 2024](https://github.com/openui/open-ui/pull/1124)

2025-07-21のWHATWG commitは、parserとcontent modelの緩和、base appearance、interaction、UA stylesheetとともに`selectedcontent`をcustomizable `select`の一部としてHTML Standardへ追加し、旧PR群を統合した。[WHATWG HTML commit `172cccf4`, 21 July 2025](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)

### 解釈

確認済み系譜は`Open UI／WHATWG selectedoption proposal → selectedcontentへの改名 → customizable select統合commit`である。要素単位の旧名、改名理由、導入commit、要求が直接資料に揃うためAを候補とする。desktop GUIのselected-value表示やcustom select libraryは探索仮説にはなるが、今回の資料は特定のwidget／libraryからの採用を述べない。

### 未解決

- `selectedoption`を最初に提案したOpen UI issue、commit、またはChromium prototype。
- Open UI proposal、Chromium implementation、WHATWG PRのうち、最初にclone modelを実装・記述したもの。
- customizable `select`以前の特定UI toolkitまたはWeb libraryが設計へ採用されたか。

## Ruby internationalization: `ruby`, `rt`, `rp`

### 証拠

1998-12-21のW3C Internationalization Working Group draftは、East Asian typographyのrubyがHTMLの構造として表現できず、workaroundまたは画像を必要とする問題を挙げ、HTML 4を拡張する`ruby`, `rb`, `rt`, `rp`を定義した。将来HTML Working Groupへ提出して次版HTMLへ含める意図も明記する。[W3C Internationalization Working Group, *Ruby*, Working Draft, 21 December 1998](https://www.w3.org/TR/1998/WD-ruby-19981221/)

2001-05-31のRuby Annotation Recommendationは、ruby annotationをXHTML moduleとして定義し、`ruby`を全体、`rt`をruby text、`rp`をruby非対応user agent向けの括弧として規範化した。[W3C, *Ruby Annotation*, Recommendation, 31 May 2001](https://www.w3.org/TR/2001/REC-ruby-20010531/)

2008-05-26にIan HicksonはWHATWG HTMLへ`ruby`, `rt`, `rp`とparser規則を同時追加した。commit messageはIEとの完全互換ではなく、Web上のruby使用との互換性を採用判断として記し、差分は一般的な`ruby`／`rt`と、legacy UA用の`rp`括弧構文を具体的に定義する。[WHATWG HTML commit `f4efc736`, 26 May 2008](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)

### 解釈

三要素の名称と役割は1998年W3C draft、2001年Recommendation、2008年HTML5追加で連続する。HTML5 commitはIEとWeb上の既存利用を明示的に参照する一方、W3C Recommendationから直接採用したとは明記せず、参照したWeb corpusも提示しない。したがって、集合レベルでは`W3C Ruby語彙／IE実装／既存Web利用 → HTML5 ruby, rt, rp`を確認できるが個別の直前経路に欠落があるA−を三要素とも候補とする。

`ruby`はannotation全体、`rt`はannotation text、`rp`は非対応UA用parenthesisという個別対応を確認できる。ただしtypographic ruby、JIS X 4051、British printingの“ruby” font sizeはW3C draftが背景として述べる上流由来であり、それらからHTML要素への直接採用矢印を独立に追加しない。

### 未解決

- 2008年commitが参照したWeb上のruby usageの調査資料またはcorpus。
- IEの`ruby`, `rt`, `rp`実装仕様と、HTML5 parser設計へ採用・不採用とした差分。
- W3C Ruby RecommendationをHTML5編集時に直接参照したmailing-list、issue、またはcommit記録。
- JIS X 4051以前の組版慣習からW3C markup vocabularyへ至る命名・構造化の決定記録。

## Foreign roots: `math`と`svg`

### `math`の証拠

1998-04-07のMathML 1.0 Recommendationは、数学のnotation、structure、contentをWebで扱うXML applicationを定義し、`math`をMathML expressionのtop-level elementとした。[W3C, *Mathematical Markup Language (MathML) 1.0 Specification*, Recommendation, 7 April 1998](https://www.w3.org/TR/1998/REC-MathML-19980407/)

2008-04-05のWHATWG commitは“MathML and SVG support in text/html: the parsing infrastructure”としてforeign content insertion modeを追加し、`math` start tagからMathML namespaceのforeign elementを作る規則を導入した。したがって対象の`math`は新しいHTML namespace要素ではなく、既存MathML rootをHTML syntax／parserから生成可能にした統合点である。[WHATWG HTML commit `1ff9688a`, 5 April 2008](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)

### `math`の解釈と未解決

`MathML math root → HTML text/html parserで生成されるMathML math root`という要素単位の因果がcommit差分にあるためAを候補とする。未解決なのは、統合を要求したissue／mailing-list、採用時に想定したMathML版、XML／XHTML埋込みからHTML parser統合へ至る設計議論である。

### `svg`の証拠

2001-09-04のSVG 1.0 Recommendationは、2次元vectorおよびvector/raster混合graphicsを記述するXML languageを定義し、`svg`をSVG document fragmentのrootとして定義した。[W3C, *Scalable Vector Graphics (SVG) 1.0 Specification*, Recommendation, 4 September 2001](https://www.w3.org/TR/2001/REC-SVG-20010904/)

2008-04-05のWHATWG commitは`svg` start tagからSVG namespaceのforeign elementを作るparser infrastructureを追加したが、2008-04-15のcommitはSVG Working Groupの要請に基づきSVG parser supportを削除した。[WHATWG HTML commit `1ff9688a`, 5 April 2008](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7) [WHATWG HTML commit `7387156d`, 15 April 2008](https://github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2)

2009-03-25のWHATWG commitは“SVG in text/html: Second try, based on more recent feedback”としてSVG namespace、`svg` root、attribute case fixup、foreign content parsingを再導入した。この再導入が現行系統の確認可能な直接接続である。[WHATWG HTML commit `f6a4d7fe`, 25 March 2009](https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465)

### `svg`の解釈と未解決

安全な系譜は`SVG 1.0 svg root → 2008年HTML parser統合 → 削除 → 2009年再導入`であり、同じrootをforeign namespace elementとして作る因果がcommitにあるためAを候補とする。未解決なのは、SVG WGによる削除要請の本文、2009年commitがいう“more recent feedback”の出典、再導入案から現行foreign content algorithmまでの各改訂である。

## 証拠一覧

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1998-04-07 | MathML 1.0 | W3C Recommendation | MathML XML applicationとtop-level `math`の先行定義。 | https://www.w3.org/TR/1998/REC-MathML-19980407/ | 2026-08-09 |
| 1998-12-21 | Ruby | W3C Working Draft | `ruby`, `rt`, `rp`の先行HTML拡張案、国際化要求、次版HTMLへ提出する意図。 | https://www.w3.org/TR/1998/WD-ruby-19981221/ | 2026-08-09 |
| 2001-05-31 | Ruby Annotation | W3C Recommendation | XHTML moduleとしての`ruby`, `rt`, `rp`と個別の役割。 | https://www.w3.org/TR/2001/REC-ruby-20010531/ | 2026-08-09 |
| 2001-09-04 | SVG 1.0 | W3C Recommendation | SVG XML languageとroot `svg`の先行定義。 | https://www.w3.org/TR/2001/REC-SVG-20010904/ | 2026-08-09 |
| 2008-04-05 | WHATWG commit `1ff9688a` | 仕様commit | `math`と`svg`をforeign namespace rootとして`text/html` parserへ統合。 | https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7 | 2026-08-09 |
| 2008-04-15 | WHATWG commit `7387156d` | 仕様commit | SVG WG要請に基づくSVG parser supportの削除。 | https://github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2 | 2026-08-09 |
| 2008-05-26 | WHATWG commit `f4efc736` | 仕様commit | `ruby`, `rt`, `rp`の同時追加、既存Web利用とIE互換性を考慮したparser規則。 | https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9 | 2026-08-09 |
| 2009-03-25 | WHATWG commit `f6a4d7fe` | 仕様commit | feedbackに基づくSVG in `text/html`の再導入。 | https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465 | 2026-08-09 |
| 2012-01-09 | W3C Bugzilla 15476 | 仕様bug | `template`要素と関連処理を仕様化する作業の開始。 | https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476 | 2026-08-09 |
| 2012-02-21 | A sample picture implementation | Community Group実装資料 | 提案中の`picture` markupを実行するPicturefillとfallback／media query model。 | https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/ | 2026-08-09 |
| 2012-04-04 | ISSUE-184 CfC | HTML WG mailing list | `data`追加について二案が一致し、型systemだけを残る争点としたこと。 | https://lists.w3.org/Archives/Public/public-html/2012Apr/0026.html | 2026-08-09 |
| 2012-05-22 | Shadow DOM | W3C First Public Working Draft | `content`をshadow DOM insertion pointとして定義。 | https://www.w3.org/TR/2012/WD-shadow-dom-20120522/ | 2026-08-09 |
| 2012-07-17 | ISSUE-184 Working Group Decision | HTML WG decision | `data`要素自体の追加にconsensusがあったことと無型modelの決定。 | https://www.w3.org/mid/5005BC08.7040705%2540intertwingly.net | 2026-08-09 |
| 2012（更新日不詳） | `<data>` element change proposal | HTML WG change proposal | machine-readable value用要素の導入理由、代替案、2011年議論。 | https://www.w3.org/wiki/User:Tantekelik/data_element | 2026-08-09 |
| 2013-02-14 | HTML Templates | W3C First Public Working Draft | inert DOM subtreeとDocumentFragment instantiateのための`template`。 | https://www.w3.org/TR/2013/WD-html-templates-20130214/ | 2026-08-09 |
| 2013-02-26 | The picture Element | W3C First Public Working Draft | RICG共同開発、media query、`source`、`img` fallbackを持つ`picture`。 | https://www.w3.org/TR/2013/WD-html-picture-element-20130226/ | 2026-08-09 |
| 2013-02-26 | Responsive Images Use Cases | W3C First Public Working Draft | custom techniqueの欠点とresponsive images標準化要求。 | https://www.w3.org/TR/2013/WD-respimg-usecases-20130226/ | 2026-08-09 |
| 2013-05-28 | HTML 5.1 `data` | W3C Working Draft | `data`のmachine-readable valueと`time`との機能分担。 | https://www.w3.org/TR/2013/WD-html51-20130528/text-level-semantics.html#the-data-element | 2026-08-09 |
| 2014-06-17 | WHATWG commit `a7716b7a` | 仕様commit | upstream `picture`仕様のHTML Living Standardへの統合。 | https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204 | 2026-08-09 |
| 2015-04-27 | Web Components issue 92 | 標準化issue | `content`から`slot`への改名理由とmodel変更の議論。 | https://github.com/WICG/webcomponents/issues/92 | 2026-08-09 |
| 2016-03-21 | WHATWG DOM commit `a2b04df5` | 仕様commit | slotとslotableのDOM概念。 | https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0 | 2026-08-09 |
| 2016-04-20 | WHATWG HTML commit `3c157377` | 仕様commit | DOM slot概念を参照するHTML `slot`の追加。 | https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a | 2026-08-09 |
| 2024-07-25 | WHATWG issue 10520 | 標準化issue | 旧名`selectedoption`のclone modelと更新timing。 | https://github.com/whatwg/html/issues/10520 | 2026-08-09 |
| 2024-09-18 | WHATWG PR 10633 | 仕様PR | customizable `select`における選択option内容の宣言的clone。 | https://github.com/whatwg/html/pull/10633 | 2026-08-09 |
| 2024-11-05 | Open UI PR 1124 | 仕様PR | `selectedoption`から`selectedcontent`への改名。 | https://github.com/openui/open-ui/pull/1124 | 2026-08-09 |
| 2025-07-21 | WHATWG commit `172cccf4` | 仕様commit | customizable `select`と`selectedcontent`のHTML Standard統合。 | https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b | 2026-08-09 |

## 調査記録

WHATWG HTML／DOMのcommit history、W3C Technical Reports、W3C Bugzillaとmail archive、Responsive Images Community Group、WICG Web Components、Open UIのissue／PRを確認した。`picture`はcommunity proposalとprototypeからupstream統合まで、`slot`は旧`content`からDOM slot概念とHTML追加まで、`selectedcontent`は旧名提案から改名・統合まで、`ruby`群はW3C国際化語彙とHTML5追加まで、`math`／`svg`は独立XML語彙から`text/html` parser統合までを追跡した。

今回の探索で確定できなかったのは、`template`のWHATWG統合commit、`picture`の最初のmarkup提案commit、`data`のeditor draft追加commit、`ruby`追加時に参照した具体的Web corpus、`math`／`svg`統合を要求した議論、SVG削除要請と再導入feedbackの本文である。これらは意味・外見・現行機能の類似で補わず、未解決として残した。
