# Scripting / embedding要素の起源

## 範囲と判定方針

このノートは`script`、`noscript`、`style`、`object`について、現行定義、HTML上の初出、導入主体と理由、HTML直前の祖先、さらに上流の背景を一次資料から検証する。確認できる最初期の公開仕様と、実装から仕様への因果関係を分け、同時代に存在した類似機構を因果資料なしに祖先へ置かない。閲覧日はすべて2026-08-09である。

| 要素 | HTML上の最初期の確認 | 直接祖先または導入要求 | 確度候補 | 主な制約 |
|---|---|---|---|---|
| `script` | Netscape Navigator 2.0 beta実装をformalizeしたHTML3 Scripting WD（1996-01-24） | Netscape定義の`SCRIPT`とNavigator 2.0 beta実装 | A | Netscape内で構文を考案した議論は未確認。 |
| `noscript` | Client-side Scripting WD（確認できた最初の収録版は1996-07-09） | script非対応・言語非対応時の代替内容という要求 | B | 具体的な先行要素または実装からの採用因果は未確認。 |
| `style` | HTML3 and Style Sheets WD（1996-01-15） | 文書内のstyle rulesを`HEAD`へまとめるHTML拡張 | A− | HTML 4への基礎となった関係はdraft集合単位で、途中の個別採録記録が欠ける。 |
| `object` | `INSERT`から`OBJECT`への改名を記録したWD（1996-03-08、改名決定は1996-02-13） | HTML3 `INSERT`（1995-12-20） | A | `DYNSRC`、`EMBED`、`APP`、`APPLET`は要求を先行して扱った案だが、個別の派生元とは断定しない。 |

## `script`

### 現在の意味

Living Standardの`script`は、動的script、user agentへのinstructions、data blocksを文書へ含める要素であり、利用者向けcontent自体は表さない。`type`によりclassic script、module script、import map、speculation rules、またはdata blockを区別し、`src`により外部scriptを参照できる。[WHATWG HTML Living Standard, “The `script` element”](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)

### HTMLへの導入

1996年1月24日のW3C Working Draft *HTML3 Scripting*は、NetscapeとSunのJavaScriptを当時もっとも有力なHTML scripting例とし、JavaScript codeがNetscape定義の`SCRIPT` tagで埋め込まれると説明する。さらに、この仕様はNetscapeが定義しNavigator 2.0 betaへ実装した`SCRIPT`をformalizeして互換にするものだと明記する。editorはDave Raggettで、metadataはCharlie Kindelの初稿がNetscape JavaScript extensionsから派生したとも記す。[W3C, *HTML3 Scripting*, 24 January 1996](https://www.w3.org/TR/WD-script-960124.html)

同draftは、client-side scriptingによるform入力のpattern・整合性検査とderived valuesの計算、eventに応じたembedded objectの制御、active documentsのauthoring、複数scripting systemを差し替え可能にすることを要求として説明した。`SCRIPT`にはinline codeと外部sourceの双方を置け、`HEAD`または`BODY`に複数配置できた。[W3C, *HTML3 Scripting*, 24 January 1996](https://www.w3.org/TR/WD-script-960124.html)

NetscapeのNavigator 2.0 JavaScript handbookも、JavaScriptをHTMLへ埋め込む二方式の一つとして`SCRIPT`を示し、`LANGUAGE="JavaScript"`、inline statements、event handlerとの組合せを説明する。この保存版の取得は1997年であるため公開日の根拠には使わないが、W3C draftが名指す先行実装の構文を当事者資料で確認できる。[Netscape, *JavaScript Authoring Guide: Navigator Scripting*（Internet Archive保存版）](https://web.archive.org/web/19970617232458id_/http://home.netscape.com/eng/mozilla/2.0/handbook/javascript/script.html)

HTML 3.2 Recommendationは`SCRIPT`をCDATA containerとして収録し、client-side scriptsを将来版へ導入するためのplaceholder、かつ移行をsmoothにする要素と位置づけた。HTML 4ではinline／external script、form input処理、event response、dynamic document modificationを本格的に規定した。[HTML 3.2, 14 January 1997](https://www.w3.org/TR/REC-html32) [HTML 4.01 §18](https://www.w3.org/TR/html401/interact/scripts.html)

### HTML直前の祖先

Netscapeが定義しNavigator 2.0 betaへ実装した`SCRIPT`が、W3C HTML3 Scriptingの直接祖先である。W3C draftがformalizeと互換性を要素単位で明記するため、この接続は直接確認できる。

### さらに上流の由来

#### 証拠

W3C draftはNetscapeとSunのJavaScriptを先行する実装文脈として名指し、client-side forms、event-driven embedded objects、active documents、scripting engineのpluggabilityをHTML側の要求として列挙する。[W3C, *HTML3 Scripting*, 24 January 1996](https://www.w3.org/TR/WD-script-960124.html)

#### 解釈

確認できる系譜はJavaScript一般ではなく、NetscapeのHTML `SCRIPT`構文とNavigator実装からW3C `SCRIPT`への接続である。JavaScriptの言語設計上の祖先を、そのままHTML要素の祖先へは置かない。

```text
Netscape SCRIPT in Navigator 2.0 beta
→ W3C HTML3 Scripting SCRIPT (1996-01)
→ HTML 3.2 placeholder (1997-01)
→ HTML 4 SCRIPT
→ current HTML script
```

### 否定された仮説

- 「W3Cが実装とは独立に`SCRIPT`を新設した」: 1996年draftがNetscape定義とNavigator実装のformalizationを明記するため採らない。
- 「Javaまたは一般的なprogramming languageのscript概念が直接の要素祖先である」: 言語上の背景とHTML要素構文への採用因果は別であり、要素単位の直接史料がない。

### 未解決

- Netscape内で`SCRIPT`という名称、container構文、`LANGUAGE`属性を選んだ設計記録。
- Navigator 2.0 betaで`SCRIPT`が初めて利用可能になった正確なbuildと公開日。
- 1996年HTML3 Scripting draftからHTML 3.2 placeholderへ入る際の個別編集・合意記録。

### 確度候補

**A**。Netscape定義・Navigator 2.0 beta実装からW3Cがformalizeした因果関係を、同時代のW3C draftが要素単位で明記する。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-01-24 | *HTML3 Scripting* | W3C Working Draft | Netscape定義・Navigator 2.0 beta実装の`SCRIPT`をformalizeする因果、導入要求、inline／external script。 | https://www.w3.org/TR/WD-script-960124.html | 2026-08-09 |
| 1997年保存（Navigator 2.0向け文書） | Netscape *JavaScript Authoring Guide: Navigator Scripting* | vendor公式文書の保存版 | `SCRIPT`によるJavaScript埋込み、`LANGUAGE`、inline statements、event handlers。 | https://web.archive.org/web/19970617232458id_/http://home.netscape.com/eng/mozilla/2.0/handbook/javascript/script.html | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | `SCRIPT`を将来のclient-side scripts導入用placeholderとして収録したこと。 | https://www.w3.org/TR/REC-html32 | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §18 | W3C Recommendation | inline／external scriptと導入用途を本格的に規定。 | https://www.w3.org/TR/html401/interact/scripts.html | 2026-08-09 |

## `noscript`

### 現在の意味

Living Standardの`noscript`は、scriptingがenabledなら何も表さず、disabledならchildrenを表す。HTML syntaxでは`head`内と`body`内でcontent modelが異なり、XML syntaxでは使えない。[WHATWG HTML Living Standard, “The `noscript` element”](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element)

### HTMLへの導入

確認したW3C Client-side Scripting draft群では、1996年6月27日版に`NOSCRIPT`はなく、1996年7月9日版に`<!ELEMENT noscript - - (%body.content)>`と定義がある。したがって公開draft上の最初期の確認は7月9日版である。同版は、user agentがclient-side scriptingを支援しないか、先行`SCRIPT`が使う言語を支援しない場合だけ内容をrenderし、downlevel browsersでも動くupgrade invitationを著者が提供するための要素と説明する。authorはDave Raggettである。[W3C, *Client-side Scripting and HTML*, 9 July 1996](https://www.w3.org/TR/WD-script-960709.html) [W3C, 27 June 1996版](https://www.w3.org/TR/WD-script-960627.html)

1997年3月14日版は同じ基本設計を継承し、HTML 4.01はscript実行が設定で無効な場合、呼び出された言語を支援しない場合、またはclient-side script自体を支援しない場合のalternate content containerとして標準化した。[W3C, *Client-side Scripting and HTML*, 14 March 1997](https://www.w3.org/TR/WD-script-970314) [HTML 4.01 §18.3.1](https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT)

### HTML直前の祖先

具体的な先行要素、vendor実装、または別のmarkup vocabularyからW3C `NOSCRIPT`を採用した因果は未確認である。確認できるのは、W3C scripting draft内で`SCRIPT`非実行時のdownlevel fallbackを満たすため導入されたことまでである。

### さらに上流の由来

#### 証拠

1996年7月draftは、unsupported client-side scriptingまたはunsupported scripting languageを条件とし、旧browserへupgrade invitationを示せる設計を直接説明する。[W3C, *Client-side Scripting and HTML*, 9 July 1996](https://www.w3.org/TR/WD-script-960709.html)

#### 解釈

`noscript`は`script`の存在に対するfallback要求から設計されたが、`script → noscript`を「要素が要素から派生した」という系譜矢印にはしない。前者は機能上の前提、後者は別の新要素である。

```text
script非対応・言語非対応時のdownlevel fallback要求
→ W3C NOSCRIPT (遅くとも1996-07-09)
→ HTML 4 NOSCRIPT
→ current HTML noscript
```

### 否定された仮説

- 「Netscape Navigator 2.0の`NOSCRIPT`がW3C案の直接祖先である」: 後代のNetscape公式guideには`NOSCRIPT`があるが、Navigator 2.0時点の導入日とW3C案への採用を結ぶ同時代資料を確認できないため保留する。
- 「SGMLのconditional sectionが祖先である」: 条件付き内容という機能の類似だけで、採用因果を示す資料がない。

### 未解決

- 1996年6月27日版と7月9日版の間で`NOSCRIPT`を提案した人物、議論、編集記録。
- 同時期のbrowser実装に`NOSCRIPT`が先行していたか。
- upgrade invitationを主目的とした初期設計が、一般的なalternate contentへ整理された具体的経緯。

### 確度候補

**B**。W3C draftが導入要求と設計モデルを直接説明するが、具体的な先行物から要素への因果関係は確認できない。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-06-27 | *Client-side Scripting and HTML* | W3C Working Draft | この版には`NOSCRIPT`定義がないこと。 | https://www.w3.org/TR/WD-script-960627.html | 2026-08-09 |
| 1996-07-09 | *Client-side Scripting and HTML* | W3C Working Draft | `NOSCRIPT`の最初期の確認、非対応時だけrenderする条件、downlevel browserとupgrade invitationという要求。 | https://www.w3.org/TR/WD-script-960709.html | 2026-08-09 |
| 1997-03-14 | *Client-side Scripting and HTML* | W3C Working Draft | HTML 4へ統合される直前の`NOSCRIPT`定義とalternate content設計。 | https://www.w3.org/TR/WD-script-970314 | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §18.3.1 | W3C Recommendation | script無効・言語非対応・script非対応時のalternate content container。 | https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT | 2026-08-09 |

## `style`

### 現在の意味

Living Standardの`style`はCSS style sheetsを文書へ埋め込む要素である。`media`により適用mediaを制限でき、`blocking`によりrender-blockingの扱いを指定できる。[WHATWG HTML Living Standard, “The `style` element”](https://html.spec.whatwg.org/multipage/semantics.html#the-style-element)

### HTMLへの導入

1995年のHTML 3.0 introductionは、presentation機能をHTMLへさらに追加する誘惑を抑えるためHTML 3.0をstyle sheetsと併用する設計とし、user preferencesやresource limitationsを考慮したrich renderingを目標に挙げた。またDSSSL Liteと当時のstyle-sheet workを背景として参照した。[Dave Raggett, *HyperText Markup Language Specification Version 3.0: Introduction*, 1995](https://www.w3.org/MarkUp/html3/intro.html)

1996年1月15日のW3C Working Draft *HTML3 and Style Sheets*は、HTMLを新しい`STYLE` elementと同名attributeで拡張すると明記し、文書内style sheetを`HEAD`へ置く要素を正式に定義した。目的は、rendering instructionsを個別要素、document head内のgroup、または外部style sheetへ置き、新しいrendering formのたびにHTML自体を拡張せず、特定のstyle-sheet notationから独立させることだった。[W3C, *HTML3 and Style Sheets*, 15 January 1996](https://www.w3.org/TR/WD-style-960115)

1月19日版では`STYLE`をdocument内inline style sheetsのための新要素とし、`TYPE`でlanguageを指定する形へ整理した。HTML 3.2は`STYLE`を将来のstyle sheets導入用placeholderとして収録し、HTML 4へ移行をsmoothにする位置づけを示した。[W3C, *HTML3 and Style Sheets*, 19 January 1996](https://www.w3.org/TR/WD-style-960119) [HTML 3.2, 14 January 1997](https://www.w3.org/TR/REC-html32)

CSS1 RecommendationはHTMLとの結合例で、外部sheetの`LINK`、`HEAD`内の`STYLE`、CSS `@import`、要素の`STYLE` attributeという四方式を区別した。これはCSSが`STYLE`の代表的な内容言語になったことを示すが、CSS仕様自身もHTML側の定義をinformativeに参照しており、`STYLE`要素をCSSから派生させた証拠ではない。[CSS1 §1.1, 17 December 1996](https://www.w3.org/TR/REC-CSS1-961217#containment-in-html)

1997年3月の*HTML and Style Sheets*は同じモデルをHTML 4の前身Cougar向けに整理した。W3CのCougarページは、1995〜1997年のlisted draftsがHTML 4.0のbasisを形成したと集合単位で説明し、HTML 4は`STYLE`を`HEAD`内のstyle rulesとして本格的に規定した。[W3C, *HTML and Style Sheets*, 24 March 1997](https://www.w3.org/TR/WD-style-970324) [W3C, “Cougar — The next version of HTML”](https://www.w3.org/MarkUp/Cougar/) [HTML 4.01 §14.2.3](https://www.w3.org/TR/html401/present/styles.html#style-group)

### HTML直前の祖先

直接確認できる直前案は、W3C *HTML3 and Style Sheets*の`STYLE`である。document-local rulesを`HEAD`へgroupingし、style languageをHTMLから分離する設計が、HTML 3.2 placeholderとHTML 4の`STYLE`へ続く。ただしCougarからHTML 4への関係はdraft集合単位の記述で、個別の編集・採録記録は確認できない。

### さらに上流の由来

#### 証拠

HTML 3.0 introductionは、HTMLへのpresentation機能追加を抑え、user preferenceとresource limitationsを含むrendering制御をstyle sheetsへ分離する要求を示す。Håkon Wium Lieの1994年Cascading HTML Style Sheets proposalは、authorとreaderの双方が同じnotationでstyleを指定し、conflictをcascadeするモデルと、外部sheetを`LINK REL="style"`で結ぶ構文を提案した。[Dave Raggett, HTML 3.0 introduction](https://www.w3.org/MarkUp/html3/intro.html) [Håkon Wium Lie, “Cascading HTML style sheets — a proposal”, 1994](https://www.w3.org/People/howcome/p/cascade.html)

#### 解釈

style sheets一般とcascadeは`STYLE`の設計背景だが、1994年CSS proposalは外部`LINK`を示すだけで`STYLE`要素の起源を直接説明しない。確定系譜は1996年のHTML-side `STYLE` proposalから始める。

```text
HTMLからpresentationを分離し、document-local rulesをHEADへgroupingする要求
→ HTML3 and Style Sheets STYLE (1996-01)
→ HTML 3.2 placeholder (1997-01)
→ HTML 4 STYLE（個別採録記録は未確認）
→ current HTML style
```

### 否定された仮説

- 「CSSが`STYLE`要素を発明し、そのままHTMLへ移植した」: CSS1は`STYLE`をHTML仕様側の結合機構として参照し、1994年CSS proposalは`LINK`を示すが`STYLE`要素への採用因果を示さない。
- 「DSSSLの特定要素が直接祖先である」: HTML 3.0はDSSSL Liteを背景資料として挙げるだけで、要素単位の派生関係は示さない。

### 未解決

- 1996年1月15日draft以前に`STYLE`要素構文を提案した投稿または編集稿。
- 1996年draftの`STYLE`をHTML 3.2 placeholderへ収録した個別の編集・合意記録。
- Cougarのstyle draftからHTML 4 `STYLE`へ採録した際の要素単位の変更記録。

### 確度候補

**A−**。W3Cの具体的な先行`STYLE`提案と導入要求は直接確認でき、W3C自身がCougar draftsをHTML 4のbasisとするが、HTML 4への接続は集合単位で個別採録経路が欠ける。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995（HTML 3.0 draft） | HTML 3.0 introduction | 失効したInternet-Draftの仕様本文 | HTMLへのpresentation追加を抑え、style sheetsへ分離する要求、DSSSL Lite等の背景。 | https://www.w3.org/MarkUp/html3/intro.html | 2026-08-09 |
| 1996-01-15 | *HTML3 and Style Sheets* | W3C Working Draft | HTMLを新しい`STYLE` elementで拡張し、document headへrulesをgroupingする定義と理由。 | https://www.w3.org/TR/WD-style-960115 | 2026-08-09 |
| 1996-01-19 | *HTML3 and Style Sheets* | W3C Working Draft | inline style sheets、`TYPE`によるlanguage指定へ整理した`STYLE`。 | https://www.w3.org/TR/WD-style-960119 | 2026-08-09 |
| 1996-12-17 | CSS1 §1.1 | W3C Recommendation | HTMLとの四つの結合方式と`STYLE`の使用例。 | https://www.w3.org/TR/REC-CSS1-961217#containment-in-html | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | 将来のstyle sheets導入用placeholderとしての`STYLE`。 | https://www.w3.org/TR/REC-html32 | 2026-08-09 |
| 1997-03-24 | *HTML and Style Sheets* | W3C Working Draft | Cougar向けの`STYLE`定義、言語非依存、head内grouping、外部sheetとの区別。 | https://www.w3.org/TR/WD-style-970324 | 2026-08-09 |
| 1995〜1997 | “Cougar — The next version of HTML” | W3C標準化ページ | listed draftsがHTML 4.0のbasisを形成したという集合単位の関係。 | https://www.w3.org/MarkUp/Cougar/ | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §14.2.3 | W3C Recommendation | `STYLE`を`HEAD`内のstyle rulesとして本格的に規定。 | https://www.w3.org/TR/html401/present/styles.html#style-group | 2026-08-09 |

## `object`

### 現在の意味

Living Standardの`object`は外部resourceを表し、resource typeに応じてimage、child navigable、またはpluginで処理される外部resourceとして扱われる。resourceを利用できない場合は要素のchildrenがfallbackになる。[WHATWG HTML Living Standard, “The `object` element”](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)

### HTMLへの導入

1995年12月20日のW3C Working Draft *Inserting multimedia objects into HTML3*は、HTML 2.0の`IMG`がimageに限定され、Microsoft `DYNSRC`、Netscape `EMBED`、Sun `APP`／`APPLET`の各案もWeb全体の要求を個別には満たさないと説明した。その解決として、`IMG`の役割をsubsumesし、新mediaへ拡張可能で、既存browser向けfallbackを持つ汎用`INSERT`を提案した。`INSERT`はdata、implementation code、parameters、nested fallbackを扱った。[W3C, *Inserting multimedia objects into HTML3*, 20 December 1995](https://www.w3.org/TR/WD-insert-951220.html)

1996年3月8日の後続draftは、旧`INSERT` draftのelementsをauthorsがvarious partiesのinputを受けて1996年2月13日にrenameし、文書名もWD-objectへ変えたと明記する。新しい`OBJECT`は引き続き`IMG`をsubsumesし、Java applets、COM/OLE objects、plug-ins等を一つの一般機構で扱うものだった。[W3C, *Inserting objects into HTML*, 8 March 1996](https://www.w3.org/TR/WD-object-960308.html)

1996年4月22日版のeditorはDave Raggettで、authorsにはMicrosoftのCharlie Kindel、NetscapeのLou Montulli、SpyglassのEric Sink、SunのWayne Gramlich、PathfinderのJonathan Hirschman、W3CのTim Berners-LeeとDan Connollyが列挙される。これは複数vendorの既存機構を一般化する提案主体を示す。[W3C, *Inserting objects into HTML*, 22 April 1996](https://www.w3.org/TR/WD-object-960422)

W3CのCougarページはobject draftを含む1995〜1997年のdraft群がHTML 4.0のbasisを形成したと説明する。HTML 4は`OBJECT`をall-purpose solution for generic object inclusionとして導入し、`IMG`と`APPLET`をより限定的なancestor elementsと位置づけ、nested alternate renderingsを規定した。[W3C, “Cougar — The next version of HTML”](https://www.w3.org/MarkUp/Cougar/) [HTML 4.01 §13.1, §13.3](https://www.w3.org/TR/html401/struct/objects.html)

### HTML直前の祖先

`OBJECT`の直接祖先は1995年のHTML3 `INSERT`である。後続draftが要素群の改名日と文書名変更を明記し、目的、属性、fallback modelも連続するため、要素単位の直接接続を確認できる。

### さらに上流の由来

#### 証拠

`INSERT` draftはHTML 2.0 `IMG`のmedia restrictionを出発点とし、`DYNSRC`、`EMBED`、`APP`、`APPLET`をnew mediaへ対処した既存案として列挙する。その上で、各案が要求全体を満たさないため単一で将来拡張可能なextensionを提案し、`IMG`のroleをsubsumesすると述べる。[W3C, *Inserting multimedia objects into HTML3*, 20 December 1995](https://www.w3.org/TR/WD-insert-951220.html)

#### 解釈

`IMG`と各vendor案は`INSERT`／`OBJECT`が解決しようとした先行問題領域を具体化する証拠である。ただしdraftは、各要素のsyntaxまたは実装から`INSERT`を派生させたとは述べないため、個別の矢印で結ばない。確定系譜は`INSERT → OBJECT`から始める。

```text
HTML3 INSERT (1995-12)
→ rename決定 (1996-02-13)
→ W3C OBJECT draft (1996-03)
→ HTML 4 OBJECT
→ current HTML object
```

### 否定された仮説

- 「Netscape `EMBED`を改名して`OBJECT`にした」: `OBJECT` draftが改名前を`INSERT`と明記する。`EMBED`は統合対象となった既存案の一つである。
- 「HTML 2.0 `IMG`がそのまま`OBJECT`へ改名された」: `INSERT`／`OBJECT`は`IMG`のroleをsubsumesする一般化だが、`IMG`自体の改名ではない。
- 「1996年のcontainer `EMBED` proposalが`OBJECT`の直接祖先である」: 別案であり、確認できる改名元は`INSERT`である。

### 未解決

- 1996年2月13日に`INSERT`から`OBJECT`へ名称を変えた議論本文と、各参加者の提案内容。
- `INSERT`の個々のattributesやnested fallbackへ`IMG`、`DYNSRC`、`EMBED`、`APP`、`APPLET`のどの設計が採用されたか。
- object draftからHTML 4本文へ統合した際の要素単位の編集・合意記録。

### 確度候補

**A**。具体的な先行要素`INSERT`から`OBJECT`への改名と設計継承を、後続W3C draftが日付付きで直接記録する。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-12-20 | *Inserting multimedia objects into HTML3* | W3C Working Draft | `IMG`とvendor別案の限界、汎用`INSERT`、data／code／parameters／fallback model。 | https://www.w3.org/TR/WD-insert-951220.html | 2026-08-09 |
| 1996-02-13（決定）、1996-03-08（公開版） | *Inserting objects into HTML* | W3C Working Draft | `INSERT` elementsを`OBJECT`へrenameした直接記録と継続する設計。 | https://www.w3.org/TR/WD-object-960308.html | 2026-08-09 |
| 1996-04-22 | *Inserting objects into HTML* | W3C Working Draft | editor／authors、複数vendorのmedia mechanismを一般化する目的、fallback。 | https://www.w3.org/TR/WD-object-960422 | 2026-08-09 |
| 1995〜1997 | “Cougar — The next version of HTML” | W3C標準化ページ | object draftを含むlisted draftsがHTML 4.0のbasisを形成したという集合単位の関係。 | https://www.w3.org/MarkUp/Cougar/ | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §13 | W3C Recommendation | generic object inclusion、限定的ancestorとしての`IMG`／`APPLET`、nested fallback。 | https://www.w3.org/TR/html401/struct/objects.html | 2026-08-09 |

## 調査範囲と残った制約

確認した史料群は、HTML 3.0 introduction、1995〜1997年のW3C scripting／style／insert／object drafts、HTML 3.2、CSS1、HTML 4.01、Netscape Navigator 2.0向けJavaScript handbook、WHATWG Living Standard、W3C Cougar標準化ページである。`NOSCRIPT`については1996-06-27版と1996-07-09版を比較し、公開draft上の追加区間を絞った。

今回の探索では、Netscape内の`SCRIPT`設計議論、`NOSCRIPT`の提案者と先行実装、`STYLE` draftのHTML 3.2／HTML 4への個別採録記録、`INSERT`から`OBJECT`への改名議論本文は確認できなかった。これらは推測で補わず各要素の未解決点に残した。
