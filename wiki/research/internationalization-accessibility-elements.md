# 国際化・アクセシビリティに関係する現行HTML要素

## 調査範囲と判定方法

このノートは`bdo`, `bdi`, `span`, `label`, `fieldset`, `legend`, `optgroup`, `main`, `search`について、HTMLへの初出、導入主体、導入理由、HTML直前の祖先、さらに上流を一次資料から検証する。現在の用途、同名の概念、ARIA roleとの意味の一致だけでは系譜を認定せず、採用資料が先行物との関係を述べる場合だけ矢印で結ぶ。仕様案への初出とLiving Standardへの統合は分離する。閲覧日はすべて2026-08-09である。

## 結論

| 要素 | 確認できたHTML上の入口 | HTML直前の祖先 | 確度候補 | 主な制約 |
|---|---|---|---|---|
| `span` | RFC 2070（1997-01） | Unicodeのdirectional embeddingと、`LANG`／`DIR`を保持するgeneric inline containerという要求 | A | `SPAN`という名称をさらに古いmarkupから採用した証拠は未確認。 |
| `bdo` | RFC 2070（1997-01） | Unicode／ISO 10646のLRO、RLO、PDF | A | `BDO`という名称自体の発案過程は未確認。 |
| `bdi` | W3C Bug 10807を受けたWHATWG revision r5669（2010-11-05） | `ubi`属性案とCSS `unicode-bidi:isolate` | A | r5669のdiff保存先は現在500を返すため、同時代Bugzillaのcheck-in記録で確認した。 |
| `label` | HTML 4.0 First Public Working Draft（1997-07-08） | 未確認 | B | sensitiveなcontrol labelというUI要求は確認できるが、特定GUI toolkit等からの採用は未確認。 |
| `fieldset` | HTML 4.0 First Public Working Draft（1997-07-08） | 未確認 | B | speech-based user agent向けgrouping要求は確認できるが、特定の先行group boxとの因果は未確認。 |
| `legend` | HTML 4.0 First Public Working Draft（1997-07-08） | 未確認 | B | `FIELDSET`を命名する設計理由は確認できるが、先行する具体的要素との因果は未確認。 |
| `optgroup` | HTML 4.0 Proposed Recommendation（1997-11-07） | 未確認 | B | 非視覚UAで長いflat listを階層化する理由は確認できるが、特定menu widget等からの採用は未確認。 |
| `main` | W3C HTML Main Element First Public Working Draft（2012-12-17）、HTML5 editor's draftへの統合（2013-01-11告知） | WAI-ARIA `main` landmark roleと`<div role="main">` | A | WHATWG側の正確な最初の統合commitは未確認。 |
| `search` | WHATWG issue #5811（2020-08-12）、PR #7320（2021-11-08）、Living Standardへのmerge（2023-03-24） | WAI-ARIA `search` landmark roleと`<div role="search">` | A | 2006年XHTML role以前の個別発案者と要求起源は未確認。 |

## `span`と`bdo`

### 証拠

RFC 2070は1997年1月、HTMLを国際化するStandards Track RFCとして、他に適切な要素がない箇所で`LANG`と`DIR`を保持するgeneric containerが必要だと述べ、その目的のため`SPAN`を導入した。したがって`span`の初出理由は後世のCSS用汎用containerから逆算したものではなく、言語と方向属性をinline textへ付ける要求として資料に明記されている。[RFC 2070 §4.2.1–4.2.2](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.2)

同RFCは、inline要素の`DIR`をISO 10646のLEFT-TO-RIGHT EMBEDDING（U+202A）またはRIGHT-TO-LEFT EMBEDDING（U+202B）と、その終了をPOP DIRECTIONAL FORMATTING（U+202C）に等価とする。さらに、文脈から方向を一意に解けない短い文字列のため`BDO`を導入し、内容全体を固有のdirectional propertyにかかわらず強制する効果をLEFT-TO-RIGHT OVERRIDE（U+202D）またはRIGHT-TO-LEFT OVERRIDE（U+202E）とPDFに等価とする。[RFC 2070 §4.2.4](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)

RFC 2070は、このHTML側の高水準markupをUnicodeの低水準mechanismへ素直に変換できるよう設計したと明記する。またUnicode Standard 1.1とUnicode Technical Report #4（1993）のBidi algorithmを参照する。したがって、Unicodeとの関係は単なる機能的一致ではなく、RFC自身が示す設計上の採用関係である。[RFC 2070 §4.2.1およびReferences](https://www.rfc-editor.org/rfc/rfc2070.html)

HTML 4.01の変更付録は`SPAN`と`BDO`をHTML 4.0のnew elementsとして列挙し、方向制御節はUnicode Bidirectional AlgorithmをHTMLで実現する要素として両者を継承した。RFC 2070でのHTML 2.0拡張提案と、W3C HTML 4系列への標準化を区別する。[HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) [HTML 4.01 §8.2](https://www.w3.org/TR/html401/struct/dirlang.html#h-8.2)

### 解釈

`span`は「generic container」という抽象的な分類だけでAとするのではない。RFC 2070が、Unicode directional embeddingをHTML markupへ移し、`LANG`／`DIR`を置く対象がないという具体的な欠落を`SPAN`で埋めたと明記するためA候補とする。`bdo`はUnicodeのoverride formatting charactersとの要素単位の対応と導入要求がさらに直接的なのでA候補とする。

```text
Unicode directional embeddings + LANG/DIRを保持するinline container要求
→ RFC 2070 SPAN
→ HTML 4 span
→ current HTML span

Unicode LRO/RLO/PDF
→ RFC 2070 BDO
→ HTML 4 bdo
→ current HTML bdo
```

### 否定された仮説

- `span`をCSS styling専用に発明したとはしない。RFC 2070が明記する導入目的は`LANG`と`DIR`の保持である。
- `bdo`を印刷・組版の左右反転から推定しない。確認できる直接祖先はUnicode／ISO 10646のdirectional overrideである。

### 未解決

- `SPAN`および`BDO`という名前を選んだ具体的な議論。
- RFC 2070以前のInternet-Draft各版で両要素が初めて現れた正確な版と変更理由。

## `bdi`

### 証拠

W3C Internationalization Core Working Groupのbidi requirementsは、inline entityの内容が前後のbidi orderingへ影響する問題、`span dir`だけでは隔離できない例、LRM／RLMを挿入する方法が検索やcopy-and-pasteを壊す問題を示し、CSSの`unicode-bidi:isolate`と、それをHTMLへ露出する`ubi`属性を提案した。2015年のWorking Group Noteは、この文書がHTML5とCSS Level 3開発時の勧告を記録した歴史資料であり、実際には`ubi`属性でなく`bdi`要素が採用されたと明記する。[Additional Requirements for Bidi in HTML & CSS §2.1](https://www.w3.org/TR/html-bidi/#bidi-isolation)

2010年9月29日にAharon Laninが登録したW3C Bug 10807は、CSS `isolate`をHTMLへ公開する`ubi`属性案とuse caseを示した。議論中にIan Hicksonは、`output`ではsemanticが狭すぎることを認め、2010年11月2日に一般解として`bdi`要素を選び、`bdo`との関係、phrasing contentに限られること、default `dir=auto`を理由とともに議論した。[W3C Bug 10807](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807)

同Bugは2010年11月5日のWHATWG revision r5669について、bidi上の影響を持ちうるuser-generated contentを安全に挿入するため`bdi`を追加したというcheck-in commentを記録する。後続revision r5677はsurrounding paragraphではU+FFFCとして扱い、内部をself-contained paragraphとして解決する要件へ文言を修正した。提案、要素選択、採録、意味修正が同じ公開議論で追跡できる。[W3C Bug 10807, comments 29–34](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807)

### 解釈

安全な直前祖先は、W3C i18n groupの`ubi`属性案とCSS `unicode-bidi:isolate`である。`bdi`は提案と名前が同じだったからではなく、同じ問題への解法を属性から新要素へ変更した過程が直接記録されているためA候補とする。

```text
Unicode Bidi Algorithmのhigher-level protocol isolation
→ CSS unicode-bidi:isolate + W3C i18n ubi attribute proposal
→ WHATWG bdi revision r5669/r5677 (2010)
→ current HTML bdi
```

### 否定された仮説

- `bdi`を`bdo`の単純な別名または反対機能として導出しない。Bug 10807はoverrideとisolationを別の問題・CSS値として扱う。
- user-generated contentだけを唯一の由来とはしない。議論は著者作成のband name、電話番号、検索結果等もuse caseに含め、`output`だけでは足りないと確認した。

### 未解決

- 失効したhtml5.org tracker以外でr5669とr5677の完全なdiffを恒久的に確認できる保存先。
- `ubi`案以前に、`bdi`という名称が約1年前に提案されたとするBug内回顧の元投稿。

## `label`, `fieldset`, `legend`, `optgroup`

### 証拠

1995年4月25日のHTML 3.0 formsには`LABEL`, `FIELDSET`, `LEGEND`, `OPTGROUP`がなく、1997年1月14日のHTML 3.2にも存在しない。W3CのCougar史料ページは、1995年から1997年の個別草案がHTML 4.0の基礎となり、HTML 4.0のfirst public draftを1997年7月8日に公開したと記録する。[HTML 3.0 Forms](https://www.w3.org/MarkUp/html3/forms.html) [HTML 3.2](https://www.w3.org/TR/REC-html32) [W3C Cougar history](https://www.w3.org/MarkUp/Cougar/)

1997年7月8日のHTML 4.0 First Public Working Draftは`LABEL`, `FIELDSET`, `LEGEND`を定義する。変更付録はHTML 3.2 formsの問題として、radio button／checkboxのlabel textをclickしてもstateへ影響しないこと、speech-based user agentで関連するfield groupを効果的に閲覧するmarkupがないことを挙げる。解決として、`LABEL`が特定controlへlabelを関連付け、`FIELDSET`が関連fieldsをgroup化し、`LEGEND`がgroupを命名すると説明する。speech browserがformをよりよく説明し、graphic browserがlabelをsensitiveにできることが導入理由である。[HTML 4.0 First Public WD, Changes to Forms](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html)

同草案の`LABEL`節はcontrolに情報を関連付け、labelがfocusを受けるとassociated controlへfocusを渡すと規定する。`FIELDSET`／`LEGEND`節は、authorsがthematically relatedなcontrolsとlabelsをgroup化し、`LEGEND`でcaptionを付け、非視覚UAが各controlのlabel情報を提示するときlegendを繰り返す等の支援が可能になると説明する。[HTML 4.0 First Public WD, Forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)

`OPTGROUP`は1997年7月8日版と9月17日版には存在せず、1997年11月7日のProposed Recommendationでnew elementとして現れる。同版はchoiceをhierarchyへgroup化し、多数のoptionsを持つ非視覚UAでは長いflat listが覚えにくく、detailを展開・折り畳みできる階層の方が理解しやすいと導入理由を述べる。[HTML 4.0 Proposed Recommendation, changes](https://www.w3.org/TR/PR-html40-971107/appendix/changes.html) [HTML 4.0 Proposed Recommendation, Forms](https://www.w3.org/TR/PR-html40-971107/interact/forms.html#edef-OPTGROUP)

HTML 4.01の変更付録は4要素をHTML 4.0のnew elementsに含め、`LABEL`のcontrol関連付け、`FIELDSET`と`LEGEND`によるgroup化と命名、speech／graphic browser上の改善を再確認する。また`OPTGROUP`によるmenu optionsのgroup化をform accessibilityへ特に重要と位置付ける。[HTML 4.01, Changes for forms](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9)

### 解釈

4要素はいずれもHTML 3.2 formsの具体的な欠落への解法として導入された。ただし、`label`とGUI label、`fieldset`／`legend`とGUI group box、`optgroup`とhierarchical menuの外形・用途の一致だけでは、特定toolkitまたはmarkupからの採用因果にならない。HTMLへの導入理由は確認できる一方、HTML直前の具体的先行物は確認できないため、4要素ともB候補とする。

```text
[specific predecessor unconfirmed]
HTML 4.0 FPWD LABEL / FIELDSET + LEGEND (1997-07-08)
→ HTML 4.0 Recommendation
→ current HTML label / fieldset / legend

[specific predecessor unconfirmed]
HTML 4.0 PR OPTGROUP (1997-11-07)
→ HTML 4.0 Recommendation
→ current HTML optgroup
```

### 否定された仮説

- `label`を特定GUI toolkitのlabel widgetから移植したとはしない。HTML 4はplatform label behaviorとの整合を求めるが、発案時に参照した具体的toolkitを示さない。
- `fieldset`／`legend`を紙のfieldsetやGUI group boxから直接借用したとはしない。名称と外形の類似だけでは因果を示せない。
- `optgroup`を特定OSのhierarchical menuから採用したとはしない。HTML 4が明記するのは非視覚UAでのchoice hierarchyの要求までである。
- 4要素を一律に1997年7月8日初出とはしない。`optgroup`は同版と9月版に不在で、11月7日版が確認できる最初の公開HTML 4仕様である。

### 未解決

- 1995年から1997年のCougar／HTML WG内部草案で`LABEL`, `FIELDSET`, `LEGEND`を最初に提案した人物、日付、議論。
- `OPTGROUP`が1997年9月17日版から11月7日版の間に追加された会議・mailing list・change request。
- WAI関係者またはbrowser実装者が各要素の設計へ与えた個別の提案。
- 4要素へ影響した具体的GUI toolkit、accessibility API、または既存markup system。

## `main`

### 証拠

2006年7月25日のXHTML Role Attribute Moduleは`main`をdocumentのmain contentとして定義し、2008年8月6日のWAI-ARIA draftはpageで一つだけのmain content areaを示すlandmark roleとして継承した。これにより、HTML要素より前に`role="main"`という具体的なWeb技術が存在した。[XHTML Role Attribute Module](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/) [WAI-ARIA 1.0 WD, `main`](https://www.w3.org/TR/2008/WD-wai-aria-20080806/#main)

Steve Faulknerは2012年9月9日、`maincontent`要素をHTMLへ加える提案をpublic-htmlへ投稿した。提案は、ARIA `main` roleにHTML要素のanalogueがないこと、authorsが`id="main"`や`id="content"`と`role="main"`を用いてmain contentを表していることを根拠とし、その慣習を明示的な要素へ形式化すると説明する。[Steve Faulkner, “Proposal: maincontent element”, 9 September 2012](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)

同年10月の8,900 pages調査は`main`, `content`, `main-content`等の`id`／`class`とARIA `role=main`の使用を計測した。これは単独で起源を証明する資料ではないが、提案者が既存Web markupのどの慣習を形式化しようとしたかを示す提案過程の直接資料である。[Steve Faulkner, main content identifiers research, 17 October 2012](https://lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)

2012年12月17日のW3C First Public Working Draftは要素名を`main`とし、HTMLへmain content areaのsemanticを与えること、accessibility technologyが文書のmain contentを認識してnavigateできるようにすること、ARIA `main` landmarkと既存`id`／`class`慣習を設計根拠として明記する。Robin Berjonは2013年1月11日、同仕様をHTML5 editor's draftへ統合したとpublic-htmlで告知した。[HTML Main Element FPWD](https://www.w3.org/TR/2012/WD-html-main-element-20121217/) [Robin Berjon, integration announcement, 11 January 2013](https://lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)

### 解釈

`main`はARIA roleとHTML elementの意味が似ているだけではない。提案者とFPWDが、`role="main"`のHTML analogueを作り、既存`id`／`class`慣習を形式化するという採用因果を明記するためA候補とする。直前祖先はWAI-ARIA `main` landmarkと`<div role="main">`であり、`id=main`／`id=content`慣習は提案を補強した別枝である。

```text
XHTML Role main (2006)
→ WAI-ARIA main landmark
→ div role="main" + id/class main-content conventions
→ W3C HTML main proposal/FPWD (2012)
→ HTML5 editor's draft integration (2013)
→ current HTML main
```

### 否定された仮説

- `<main>`を紙媒体の本文概念から直接採用したとはしない。文化的類似はあるが、確認できるHTML直前の採用経路はARIAと既存Web markupである。
- `id="main"`の頻度だけを起源の証明にしない。提案資料がその調査を要素化の根拠として使ったために限って系譜へ含める。
- 仕様案の最初の名称を`main`だったとはしない。2012年9月の提案名は`maincontent`で、12月FPWDは`main`である。

### 未解決

- `maincontent`から`main`への名称決定を行った正確な編集・合意記録。
- W3C editor's draftからWHATWG Living Standardへ入った正確な最初のcommit。2013年4月11日までにWHATWG sourceに存在したことは確認できるが、初回commitは固定できない。
- XHTML Role Moduleの`main` roleを個別に発案した人物と、それ以前の要求資料。

## `search`

### 証拠

2006年7月25日のXHTML Role Attribute Moduleは`search` roleをWeb documentのsearch section、通常はsiteまたはInternet search requestを送るformとして定義した。2008年2月4日のWAI-ARIA First Public Working DraftはXHTML Role由来のlandmarksを統合して`search`を継承し、2014年3月20日のWAI-ARIA 1.0 Recommendationはsearch facilityを作るitems／objectsのcollectionで、UAがnavigational landmarkとして扱うroleと定義した。[XHTML Role Attribute Module](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/) [WAI-ARIA 1.0 FPWD, `search`](https://www.w3.org/TR/2008/WD-wai-aria-20080204/#search) [WAI-ARIA 1.0 Recommendation, `search`](https://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#search)

Carolyn MacLeodは2020年8月12日にWHATWG issue #5811を作成し、ARIA landmark群のうち`search`だけ対応HTML要素がなく、`<div role="search">`と同じsemanticを持つnative `<search>`を設け、UAがARIA role markupだけに頼らずlandmark navigationへ含められるようにすることを提案した。issueはsearch input／searchboxではなくsearch機能全体を囲むcontainerだと明記する。[WHATWG issue #5811](https://github.com/whatwg/html/issues/5811)

Domenic Denicolaは2021年11月8日にPR #7320を作成し、Scott O'Haraが要素説明と例の大半を執筆したとcreditした。PRは、従来ARIA `role=search`でしか表せなかったsemanticを専用要素で表し、ARIAのfirst ruleとARIA／HTMLのco-evolutionを満たすこと、`<div role="search">`のstraightforward replacementでありform submission等の追加機能を持たないことを導入理由として明記する。[WHATWG PR #7320](https://github.com/whatwg/html/pull/7320) [initial commit, 8 November 2021](https://github.com/whatwg/html/commit/303b37ec277946798aef715ff3ade7944f2657c0)

PR #7320は2023年3月24日にmergeされ、Living Standardへ`search`が入った。提案issue、仕様PR、mergeを別の日付として扱う。[merge commit, 24 March 2023](https://github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec)

### 解釈

`search`の直前祖先は`<div role="search">`である。WHATWGのissueとPRが、対応するHTML要素の欠落とARIA markupの置換を採用理由として直接述べるためA候補とする。上流はXHTML Role ModuleからWAI-ARIAへ継承された`search` landmark roleである。

```text
XHTML Role search (2006)
→ WAI-ARIA search landmark
→ div role="search"
→ WHATWG search proposal/PR (2020–2021)
→ Living Standard merge (2023-03-24)
→ current HTML search
```

### 否定された仮説

- `<search>`を`<input type="search">`の子孫または代替とはしない。issueはinputでなくsearch controls／contentを囲むcontainerと明記する。
- `<search>`を`form`の後継またはform submission機能を持つ要素とはしない。採用PRは`<div role="search">`の置換で追加機能なしとし、form機能を加える別PR #7382はmergeされずcloseされた。[WHATWG PR #7382](https://github.com/whatwg/html/pull/7382)
- 既存design systemのsearch componentや名称pollを直接祖先とはしない。採用因果を示す資料ではない。

### 未解決

- 2006年XHTML Role Working Draftより前の`search` roleの個別発案者と要求起源。
- WHATWG issue作成からPR作成までの間に名称`search`への反対を解消した決定記録。issueにはinputとの混同懸念と実装者のgeneral agreementが記録されるが、単一の決定点は確認できない。

## 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-04-25 | HTML 3.0 Forms | IETF Internet-Draft相当のW3C保存仕様 | 後の4フォーム要素がまだ存在しない比較基準。 | https://www.w3.org/MarkUp/html3/forms.html | 2026-08-09 |
| 1997-01 | RFC 2070, *Internationalization of the Hypertext Markup Language* | Standards Track RFC | `SPAN`と`BDO`の導入要求、Unicode embedding／overrideとの直接対応。 | https://www.rfc-editor.org/rfc/rfc2070.html | 2026-08-09 |
| 1997-07-08 | HTML 4.0 First Public Working Draft | W3C Working Draft | `LABEL`, `FIELDSET`, `LEGEND`の定義とHTML 3.2 formsの具体的欠落への解決。 | https://www.w3.org/TR/WD-html40-970708/interact/forms.html / https://www.w3.org/TR/WD-html40-970708/appendix/changes.html | 2026-08-09 |
| 1997-11-07 | HTML 4.0 Proposed Recommendation | W3C Proposed Recommendation | `OPTGROUP`をnew elementとして収録し、非視覚UA向けchoice hierarchyという理由を説明。 | https://www.w3.org/TR/PR-html40-971107/interact/forms.html / https://www.w3.org/TR/PR-html40-971107/appendix/changes.html | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | 7要素をHTML 4系列で確認し、forms accessibility上の導入理由を再記録。 | https://www.w3.org/TR/html401/appendix/changes.html | 2026-08-09 |
| 2006-07-25 | XHTML Role Attribute Module | W3C Working Draft | HTML要素以前の`main`と`search` role。 | https://www.w3.org/TR/2006/WD-xhtml-role-20060725/ | 2026-08-09 |
| 2008-02-04 | WAI-ARIA 1.0 First Public Working Draft | W3C Working Draft | XHTML Role由来landmarkを統合した`search` role。 | https://www.w3.org/TR/2008/WD-wai-aria-20080204/#search | 2026-08-09 |
| 2008-08-06 | WAI-ARIA 1.0 Working Draft | W3C Working Draft | 一つのmain content areaを示す`main` landmark role。 | https://www.w3.org/TR/2008/WD-wai-aria-20080806/#main | 2026-08-09 |
| 2010-09-29〜2010-11-11 | W3C Bug 10807 | W3C HTML WG Bugzilla議論／WHATWG check-in記録 | `ubi`提案から`bdi`要素を選び、r5669／r5677へcheck-inした経路。 | https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807 | 2026-08-09 |
| 2012-09-09 | Steve Faulkner, `maincontent` proposal | W3C public-html投稿 | ARIA `main` analogueと既存`id`／`class`慣習をHTML要素へ形式化する提案。 | https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html | 2026-08-09 |
| 2012-12-17 | HTML Main Element | W3C First Public Working Draft | 名称を`main`として定義し、ARIA landmarkと既存Web慣習との採用因果を説明。 | https://www.w3.org/TR/2012/WD-html-main-element-20121217/ | 2026-08-09 |
| 2013-01-11 | Robin Berjon, integration announcement | W3C public-html投稿 | `main`仕様をHTML5 editor's draftへ統合した告知。 | https://lists.w3.org/Archives/Public/public-html/2013Jan/0033.html | 2026-08-09 |
| 2014-03-20 | WAI-ARIA 1.0 | W3C Recommendation | `search`をnavigational landmarkとして標準化。 | https://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#search | 2026-08-09 |
| 2015-07-21 | Additional Requirements for Bidi in HTML & CSS | W3C Working Group Note | bidi isolationの問題、`ubi`提案、実際の`bdi`採用を歴史記録として説明。 | https://www.w3.org/TR/html-bidi/#bidi-isolation | 2026-08-09 |
| 2020-08-12 | WHATWG issue #5811 | 標準化issue | ARIA `search`だけHTML analogueがないことと`div role=search`置換を提案。 | https://github.com/whatwg/html/issues/5811 | 2026-08-09 |
| 2021-11-08 | WHATWG PR #7320 / initial commit | 標準化PR／仕様commit | `search`の仕様案、導入理由、追加機能を持たないこと、主要執筆者。 | https://github.com/whatwg/html/pull/7320 / https://github.com/whatwg/html/commit/303b37ec277946798aef715ff3ade7944f2657c0 | 2026-08-09 |
| 2023-03-24 | WHATWG HTML merge commit | Living Standard仕様commit | PR #7320をmergeし`search`をLiving Standardへ導入。 | https://github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec | 2026-08-09 |

## 横断的な否定された仮説

- 現在のaccessibility mappingから過去の導入理由を逆算しない。ここでARIAを祖先とするのは、`main`と`search`の提案資料がその置換関係を明記するためである。
- GUI label、group box、hierarchical menu、紙のmain section、search formという概念的一致だけでHTMLへの因果を補わない。
- WAI-ARIA roleのRecommendation日をroleの初出日としない。XHTML Role Working Draftと初期WAI-ARIA Working Draftを別に記録する。
- 仕様案作成日をLiving Standardへの導入日としない。特に`search`は2021年PR作成と2023年mergeを分離する。

## 調査記録

既存の`wiki/README.md`、`wiki/research/current-html-elements.md`、対象9要素の個別ページを確認した。国際化はローカル保存したRFC 2070とHTML 4.01、W3C Bugzilla、W3C bidi requirementsを確認した。フォーム系はHTML 3.0、HTML 3.2、Cougar史料、HTML 4.0の1997年7月8日・9月17日・11月7日版、HTML 4.01を比較した。`OPTGROUP`は7月版と9月版に存在せず11月版に存在することを確認した。`main`と`search`はXHTML Role、初期WAI-ARIA、W3C mailing list／Working Draft、WHATWG issue／commitを確認した。

成果がなかった探索として、`LABEL`, `FIELDSET`, `LEGEND`, `OPTGROUP`の特定GUI toolkitからの採用、Cougar内部の初回提案、`main`のWHATWG初回統合commit、XHTML Role以前の`main`／`search`個別起源を探したが、因果を固定できる一次資料へ到達しなかった。これらを類似から補わず未解決として残す。
