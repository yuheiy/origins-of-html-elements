# Text/structure/edits要素の導入

## 調査範囲

`div`, `small`, `del`, `ins`, `time`について、現行WHATWG HTML Living Standard、HTML 3.0 draft、HTML 3.2、HTML 4.0/4.01、WHATWG仕様sourceのcommit履歴を照合した。確認可能な初出、導入主体・目的、HTML直前の祖先、さらに上流の由来を分離し、名称や用途の類似だけでは系譜を接続しない。閲覧日はすべて2026-08-09である。

## 結論

| 要素 | 確認可能な導入経路 | HTML直前の祖先 | 確度候補 | 主な制約 |
|---|---|---|---|---|
| `div` | 1995年3月のHTML 3.0 draftで、`class`によりchapter、section、abstract、appendix等を表すcontainerとして確認できる。HTML 3.2はHTML 3.0 `DIV`へのbrowser supportを明記する | 未確認 | B | HTML外のdivision要素・文書慣習から採用したことを示す史料は未確認 |
| `small` | 1995年3月のHTML 3.0 draftでsmall printを小さいfontで表示する要素として確認でき、HTML 3.2へ継承された | 未確認 | C | HTML 3.0とNetscape資料の前後関係および採用方向を確定できない。現行のside-comment semanticsは後代の再定義 |
| `ins` | 1997-07-08のHTML 4.0 Working Draftで確認でき、HTML 4.0はHTML 3.2からの新要素として、文書の挿入箇所を記録する目的を明記する | 未確認 | B | draft legislationは用途例であり、立法編集慣習からの採用因果までは述べない |
| `del` | 1997-07-08のHTML 4.0 Working Draftで確認でき、HTML 4.0はHTML 3.2からの新要素として、文書の削除箇所を記録する目的を明記する | 未確認 | B | `s`/`strike`は表示上似るが、HTML 4は`del`を版間の削除、`s`/`strike`をpresentational elementとして分ける |
| `time` | 2006-03-29までにWHATWG sourceで前身`<t>`が作業対象となり、2006-10-26にdate/timeと`datetime`を持つ初稿、2006-11-23に`time`へ明示的に改名。2011年に一時`data`へ置換後、同年再導入 | WHATWG草案の`<t>`要素 | A | `<t>`のHTML外の具体的祖先と命名理由は未確認 |

## `div`

### 現在の意味

現行Living Standardでは、`div`自体に特別な意味はなく子を表す。連続する要素群に共通する意味を`class`, `lang`, `title`等で付与するときなどに使うlast resortのflow containerである。[WHATWG, HTML Living Standard, “The div element”](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element)

### 証拠

1995年3月に公開されたHTML 3.0 draftの“Divisions”は、`DIV`を`CLASS`属性とともに使い、chapter、section、abstract、appendix等の異なるcontainerを表すと定義し、`DIV CLASS=Abstract`の例を示す。確認した範囲でこれが最初期の仕様上の出現であり、draft authorはDave Raggettである。[Dave Raggett, HTML 3.0 draft, “Divisions”, March 1995](https://www.w3.org/MarkUp/html3/divisions.html) [W3C, “HTML 3.0 Draft Materials”](https://www.w3.org/MarkUp/html3/)

HTML 3.2は、`DIV`がHTML文書をdivisionのhierarchyとして構造化できると定義する。同時に、NetscapeがHTML 3.0 `DIV`をsupportする前に`CENTER`を導入し、HTML 3.2ではwidespread deploymentのため`CENTER`を残したと明記する。この注記は、HTML 3.0 `DIV`がHTML 3.2 `DIV`に先行しbrowser実装へ入った経路を支えるが、HTML外の祖先は示さない。[W3C, *HTML 3.2 Reference Specification*, 14 January 1997, “DIV and CENTER”](https://www.w3.org/TR/REC-html32#div)

### 解釈

確認できる安全な系譜は`HTML 3.0 DIV → HTML 3.2 DIV → 現行div`である。HTMLへの導入時点で、汎用containerに`class`を付けて文書divisionの種類を表す設計目的は直接確認できるためBを候補とする。一方、SGML vocabularyの`DIV`、出版物のdivision、または特定DTDからHTML 3.0へ採用したという因果史料は確認できず、それらへ矢印を伸ばさない。

### 否定された仮説

- `CENTER → DIV`: HTML 3.2は逆に、NetscapeがHTML 3.0 `DIV`をsupportする前に`CENTER`を導入したと述べる。`CENTER`は実装順では先でも、仕様上の`DIV`の祖先として採用されたとは示されない。
- 特定のSGML `DIV`要素からの直接採用: 名称と文書分割用途の類似だけでは因果を示せない。

### 未解決

- Dave RaggettがHTML 3.0 `DIV`を提案した正確な日付、議論、要求文書。
- HTML 3.0 `DIV`が特定のSGML DTDまたは文書処理systemから採られたか。
- HTML 3.0のdivision semanticsから、HTML 4以降のgeneric language/style container、現行の意味を持たないlast-resort containerへの意味変更過程。

## `small`

### 現在の意味

現行Living Standardでは、`small`はsmall printのような短いside commentを表し、典型例に免責、注意、法的制限、著作権、帰属、license要件を挙げる。文字を小さくするだけの要素、de-emphasis、複数段落に及ぶ本文にはしない。[WHATWG, HTML Living Standard, “The small element”](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element)

### 証拠

1995年3月のHTML 3.0 draft “Font Style Elements”は`SMALL (Small print)`を、囲んだtextを通常より小さいfontで可能なら表示する要素として定義する。[Dave Raggett, HTML 3.0 draft, “Font Style Elements”, March 1995](https://www.w3.org/MarkUp/html3/emphasis.html) [W3C, “HTML 3.0 Draft Materials”](https://www.w3.org/MarkUp/html3/)

HTML 3.2は`SMALL`をtext-level font style elementとして収録し、「places text in a small font」と定義する。HTML 3.2は1996年初頭のrecommended practiceとwidely deployed featuresを取り込む仕様だが、`SMALL`個別の提案者や採用元は明記しない。[W3C, *HTML 3.2 Reference Specification*, 14 January 1997, text-level elements](https://www.w3.org/TR/REC-html32#font-style)

Netscapeの“Extensions to HTML 3.0”保存版にも、`SMALL (small print)`と通常より小さいfontというHTML 3.0 draftとほぼ同じ定義がある。同資料はNavigator 2.0がHTML 3.0のstable proposalsを先行実装した部分と、HTML 3.0にない独自提案を一つの文書で説明しており、`SMALL`がどちらの区分に由来するか、またHTML 3.0とNetscapeのどちらが先かを保存版だけでは確定できない。[Netscape, “Extensions to HTML 3.0”, Internet Archive snapshot 13 June 1997](https://web.archive.org/web/19970613212205id_/http://home.netscape.com:80/assist/net_sites/html_extensions_3.html) [W3C, “HTML DTDs (and other public text)”](https://www.w3.org/MarkUp/html-pubtext/)

### 解釈

確認できる安全な系譜は`HTML 3.0 SMALL → HTML 3.2 SMALL → HTML 4 SMALL → 現行small`である。最初期の出現と当時のpresentational meaningは確認できるが、導入理由やHTML直前の具体的祖先は確定できないためCを候補とする。現行のside-comment semanticsは「small print」という当初語義と連続性があるものの、現在の意味から1995年の導入理由を逆算しない。

### 否定された仮説

- `Netscape SMALL → HTML 3.0 SMALL`: 両資料の文言は近いが、確認できるHTML 3.0 draftは1995年3月で、Netscape保存版は後代のsnapshotである。元文書の作成日と提案・実装順を確定できないため接続しない。
- small printという出版慣習からの直接採用: 語と表示慣習は一致するが、採用判断を示す史料がない。

### 未解決

- HTML 3.0 `SMALL`の最初の提案者、初出diffまたはmail、導入要求。
- Netscape資料の初版日、Navigatorでの初回実装版、HTML 3.0 draftとの編集関係。
- presentational font-style elementから現行side-comment elementへ意味を変更した正確なWHATWG commitと理由。

## `ins`と`del`

### 現在の意味

現行Living Standardでは、`ins`は文書へのaddition、`del`は文書からのremovalを表す。両者は`cite`で変更説明先、`datetime`で変更日時を持てる。[WHATWG, HTML Living Standard, “Edits”](https://html.spec.whatwg.org/multipage/edits.html#edits)

### 証拠

1997-07-08の最初期HTML 4.0 Working Draftは“Marking document changes”節に`INS`と`DEL`を収録する。両者を別版の文書に対して挿入・削除されたsectionのmarkupと定義し、draft legislationで議員が変更を見る例、inlineまたはblock-level contentを囲める構造、変更理由を指す`cite`、変更日時の`datetime`を規定する。[W3C, *HTML 4.0 Working Draft*, 8 July 1997, “Marking document changes”](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)

HTML 4.0 Recommendationは`INS`と`DEL`をHTML 3.2からのnew elementsに列挙し、変更をmarkupするための追加だったと明記する。したがってHTML標準内の初出区間はHTML 3.2後、遅くとも1997-07-08までと確認できる。[W3C, *HTML 4.0 Specification*, 18 December 1997, “Changes between HTML 3.2 and HTML 4.0”](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1) [W3C, *HTML 4.0 Specification*, “Marking document changes”](https://www.w3.org/TR/REC-html40-971218/struct/text.html#h-9.4)

HTML 4.01も、両要素を別版に対して挿入・削除された箇所に使い、法案の人数を3から5へ変更する例を示す。削除textの表示例にはstrike-throughも挙げるが、これはuser-agent renderingの一例であり、`STRIKE`または`S`から`DEL`を派生させたとは述べない。[W3C, *HTML 4.01 Specification*, 24 December 1999, “Marking document changes”](https://www.w3.org/TR/html401/struct/text.html#h-9.4)

### 解釈

`ins`と`del`はW3C HTML Working GroupがHTML 4.0で、版間の文書変更をmachine-readableにmarkupするため導入した対である。導入理由と設計modelは確認できるが、特定の先行markup vocabulary、word processor、法律編集体系から採用した因果は確認できないため、両者ともBを候補とする。安全な系譜はそれぞれ`HTML 4.0 INS → 現行ins`、`HTML 4.0 DEL → 現行del`までである。

### 否定された仮説

- `S`/`STRIKE → DEL`: strike-throughは削除の表示例の一つにすぎない。HTML 4は`S`/`STRIKE`をpresentational、`DEL`を版間の削除として分離するため、置換・派生の因果は確認できない。
- 法律のredlining慣習からの直接採用: draft legislationは仕様のuse caseだが、要素設計をその慣習から採用したとの記述はない。
- 特定SGML edit vocabularyからの直接採用: `INS`/`DEL`と同義の要素が存在しても、HTML Working Groupの採用記録なしには接続しない。

### 未解決

- 1997-07-08 Working Draft以前のHTML ERB/W3C HTML Working Group提案、提案者、採択議論。
- `cite`と`datetime`を含む設計が参照した版管理、法律編集、SGML vocabulary。
- inlineとblockの両方を囲める特殊なcontent modelを選んだ具体的要求。

## `time`

### 現在の意味

現行Living Standardでは、`time`は内容と、その内容のmachine-readable formを`datetime`属性で表す。対象は定められた形式の日付、時刻、time-zone offset、durationに限られる。[WHATWG, HTML Living Standard, “The time element”](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element)

### 証拠

2006-03-29のIan HicksonによるWHATWG source commitは作業timelineに`<t>`を置き、同時期のsourceは`<t>`がdate and/or timeを表すことを記す。ただしこのcommitの主題は`meter`と`progress`も含み、`<t>`の導入理由を説明しない。[WHATWG HTML commit `f8514de7`, 29 March 2006](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

2006-10-26のIan Hicksonによるcommitは`<t> element, draft the first`と明記し、date/timeを表す`<t>`、machine-readableな`datetime`、date/time/timezoneのDOM attributes、具体例を追加した。これにより現行要素の設計核となる前身を要素単位で確認できる。[WHATWG HTML commit `6bdcd9dc`, 26 October 2006](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)

2006-11-23のcommitは`<t> becomes <time>`と明記し、要素名、`datetime`、DOM interface、例を一括して`<t>`から`time`へ改名する一方、date and/or timeという意味を維持した。[WHATWG HTML commit `fdfe6548`, 23 November 2006](https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)

2011-10-29のcommitは`time`をdropして`data`へ置換し、publication date等をschema.org microdataで示す変更を行った。[WHATWG HTML commit `70b0ce45`, 29 October 2011](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)

2011-11-18のcommitは“the `<time>` element is dead, long live the `<time>` element”として`time`を再導入し、内容と`datetime`内のmachine-readable formを表す定義、month、date、yearless date、time、time-zone offset、duration等のsyntaxを追加した。現行定義の直接の再導入点である。[WHATWG HTML commit `92baa833`, 18 November 2011](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)

### 解釈

commitが改名を直接明記するため、安全な系譜は`WHATWG草案 <t> → time（2006） → 一時的にdataへ置換（2011-10） → time再導入（2011-11） → 現行time`である。前身`<t>`からの要素単位の因果が明確なのでAを候補とする。HTML外の具体的なmarkup vocabularyやmicroformatから`<t>`を採用したことは確認できない。

### 否定された仮説

- `data → time`が唯一の起源: 2011年再導入の直前は`data`だが、`time`自体は2006年の`<t>`からの改名として先に存在した。`data`は短期間の置換区間として注記する。
- hCalendar/Atomからの直接採用: 後代の仕様例や統合機能で利用されるが、2006年の`<t>`導入commitはそれらから採用したと述べない。
- HTML 4 `INS`/`DEL`の`datetime`属性からの要素派生: 2006年commitはdate/time microsyntaxの既存`attr-mod-datetime`定義を共通節へ移すTODOを含むが、`time`要素自体を`INS`/`DEL`から派生させたとは示さない。

### 未解決

- `<t>`の最初の提案mail、提案者、具体的use cases、単文字名を選んだ理由。
- `<t> → time`改名を促したissueまたは議論。
- 2006年設計がhCalendar、Atom、microformats、他のmarkup vocabularyを参照したか。
- 2011年の削除と約3週間後の再導入を決定した全議論とtrade-off。

## 証拠一覧

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-03 | HTML 3.0 draft “Divisions” | W3C保存仕様草案 | `DIV`を`CLASS`付きのchapter、section、abstract、appendix等のcontainerとして定義 | https://www.w3.org/MarkUp/html3/divisions.html | 2026-08-09 |
| 1995-03 | HTML 3.0 draft “Font Style Elements” | W3C保存仕様草案 | `SMALL`をsmall printを小さいfontで表示する要素として定義 | https://www.w3.org/MarkUp/html3/emphasis.html | 2026-08-09 |
| 1997-01-14 | HTML 3.2 Reference Specification | W3C Recommendation | `DIV`のdivision hierarchy、HTML 3.0 `DIV`へのbrowser support、`SMALL`のsmall-font意味 | https://www.w3.org/TR/REC-html32 | 2026-08-09 |
| 日付未確定（1997-06-13保存） | Netscape “Extensions to HTML 3.0” | vendor資料のarchive | Navigator 2.0文脈の`SMALL`定義と`DIV ALIGN` support。HTML 3.0との採用方向は確定不可 | https://web.archive.org/web/19970613212205id_/http://home.netscape.com:80/assist/net_sites/html_extensions_3.html | 2026-08-09 |
| 1997-07-08 | HTML 4.0 Working Draft | W3C仕様草案 | `INS`/`DEL`、`cite`、`datetime`、版間の挿入・削除、draft legislation例 | https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4 | 2026-08-09 |
| 1997-12-18 | HTML 4.0 Specification | W3C Recommendation | `INS`/`DEL`をHTML 3.2からのnew elementsとし、文書変更markupの目的を明記 | https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1 | 2026-08-09 |
| 1999-12-24 | HTML 4.01 Specification | W3C Recommendation | `INS`/`DEL`の定義、属性、法案例、rendering例 | https://www.w3.org/TR/html401/struct/text.html#h-9.4 | 2026-08-09 |
| 2006-03-29 | WHATWG commit `f8514de7` | 仕様source commit | `<t>`を作業対象としdate/time elementの初期記述を含む | https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00 | 2026-08-09 |
| 2006-10-26 | WHATWG commit `6bdcd9dc` | 仕様source commit | `<t>`初稿として意味、`datetime`、DOM、例を具体化 | https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583 | 2026-08-09 |
| 2006-11-23 | WHATWG commit `fdfe6548` | 仕様source commit | `<t>`から`time`への明示的改名 | https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123 | 2026-08-09 |
| 2011-10-29 | WHATWG commit `70b0ce45` | 仕様source commit | `time`を削除し`data`へ置換 | https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d | 2026-08-09 |
| 2011-11-18 | WHATWG commit `92baa833` | 仕様source commit | `time`をmachine-readable date/time/duration要素として再導入 | https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab | 2026-08-09 |
| 2026-08-09確認 | WHATWG HTML Living Standard | Living Standard | 5要素の現行定義 | https://html.spec.whatwg.org/multipage/ | 2026-08-09 |

## 調査上の制約

- HTML 3.0資料はW3Cが保存するexpired draftであり、公開月は確認できるが各分割HTML fileの個別改訂日は表示されない。
- Netscape資料は1997年のarchive snapshotを確認したが原公開日は確定できないため、HTML 3.0との前後関係を主張しない。
- HTML 4 Working Group内部資料まで遡る提案履歴は確認できず、`ins`/`del`の外部祖先は未確認のままとした。
- WHATWG `time`履歴は公式GitHub repositoryに移入されたgit-svn履歴のsource diffを確認した。
