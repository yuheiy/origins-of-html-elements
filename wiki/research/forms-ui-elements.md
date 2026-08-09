# Forms/UI要素の導入

## 調査範囲

`button`, `datalist`, `meter`, `output`, `progress`について、HTML 4以前のform提案、XForms、Web Forms 2.0、WHATWG Web Applications 1.0の公式Git履歴、W3C HTML 5草案、現行Living Standardを照合した。対象は「確認可能な初出」「導入主体と理由」「HTML直前の具体的祖先」を分離して評価する。閲覧日はすべて2026-08-09である。

## 結論

| 要素 | 確認可能な導入経路 | HTML直前の祖先 | 推奨確度 | 制約 |
|---|---|---|---|---|
| `button` | W3C HTML Working Groupの1997-04-02 *Enhancing HTML Forms*で新要素として提案され、1997-07-08 HTML 4.0草案、1997-12-18 Recommendationへ入った | HTMLの`input type=submit`, `input type=reset`, `input type=button` | A | `BUTTON`という要素名や内容モデルを特定のGUI toolkitから採用した史料は未確認 |
| `datalist` | 2004-12-10のWeb Forms 2.0 Call for Commentsで、`input list`を補完する新要素として定義され、後にHTML5へ統合された | 未確認。2003-12-04案の`select editable`は同じ要求を扱う先行候補 | B | `select editable`から`input list` + `datalist`へ変更した決定記録を今回確認できなかった |
| `meter` | 2006-03-02のWHATWG初回Git収録時の`gauge`を、Ian Hicksonが2006-03-29に同じ節で`meter`へ改名し仕様化した | WHATWG Web Applications 1.0の`gauge`要素 | A | `gauge`の最初の追加日と、さらに上流の特定UI widgetから採用した因果は未確認 |
| `output` | 2003-12-04のIan Hicksonによる *Proposed XHTML Module: XForms Basic*でHTML form controlとして追加され、Web Forms 2.0を経てHTML5へ統合された | XFormsの`output`を含む機能集合 | A− | 同案はXForms機能をHTML formsへ加える方針を明記するが、`output`単独の採用決定記録は未確認 |
| `progress` | 2006-03-02のWHATWG初回Git収録時にWIP要素として存在し、Ian Hicksonが2006-03-29にdeterminate／indeterminate task progressを仕様化した | 未確認 | B | Git収録以前のplaceholder初出と、特定の先行markupまたはUI widgetからの採用因果は未確認 |

## `button`

### 証拠

1997-04-02のW3C Working Draft *Enhancing HTML Forms*は、新しい`BUTTON`要素により、`INPUT`が提供していた基本的なsubmit／reset buttonより多様で豊かなbuttonを作れ、要素内容にHTML fragmentを入れられると説明した。[W3C HTML Working Group, *Enhancing HTML Forms*, 2 April 1997](https://www.w3.org/TR/WD-forms-970402)

1997-07-08のHTML 4.0 Working Draftは`BUTTON`を収録し、submit、reset、script用buttonを区別した。本文は`INPUT`版と同じ動作を持ちながら、`BUTTON`は内容を持てるため、より豊かなpresentationが可能だと説明した。[W3C HTML Working Group, *HTML 4.0 Working Draft: Forms*, 8 July 1997](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)

HTML 4.01の変更一覧は、`BUTTON`をHTML 3.2からHTML 4.0で追加された新要素として列挙する。[W3C, *HTML 4 Changes*, 24 December 1999, §A.3.1](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

### 解釈

確認できる系譜は`INPUTのsubmit／reset／button control → 内容を持てるBUTTON → HTML 4 button`である。提案文書が比較対象、解決する制約、新要素を要素単位で結び、後続HTML 4草案とRecommendationが同じ設計を収録するためAを推奨する。

### 否定された仮説

一般的なGUI push buttonは探索上の背景にはなるが、今回確認した史料は特定のGUI toolkitやOSのbuttonからHTML `button`を採用したとは述べない。外見と名称だけで上流の矢印を結ばない。

### 未解決

- 1997-04-02案より前のW3C HTML Working Group議事録またはvendor提案に、`BUTTON`の内容モデルを決めた記録があるか。
- 特定のGUI toolkit、client-side scripting実装、またはbrowser独自要素を参照した記録があるか。

## `datalist`

### 証拠

2003-12-04の *Proposed XHTML Module: XForms Basic*は、自由入力と候補選択を組み合わせるため`select`へ`editable`属性を加え、任意の値も入力できるcontrolを定義していた。[Ian Hickson, *Proposed XHTML Module: XForms Basic*, 4 December 2003, §2.2](https://www.hixie.ch/specs/html/forms/xforms-basic-1#the-select-element)

2004-12-10のWeb Forms 2.0 Call for Commentsは、text、email、URI、日時、数値系`input`へ、任意値を許したままUAが候補を提示する`list`属性を追加し、それを補完する新しい`datalist`要素を導入した。`datalist`は`option`による候補値と、非対応UA向けfallback contentの二つの役割を持った。[WHATWG, *Web Forms 2.0*, Call for Comments, 10 December 2004, §2.12](http://www.whatwg.org/specs/web-forms/2004-12-10-call-for-comments/#the-datalist)

2005-04-11のWeb Forms 2.0 Member Submissionも同じ`input list`と`datalist`の構造を収録した。[Mozilla Foundation and Opera Software, *Web Forms 2.0*, W3C Member Submission, 11 April 2005, §2.12](https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/#the-datalist)

2010-03-04のW3C *HTML5 differences from HTML4*は、独立仕様だったWeb Forms 2.0がHTML5へ完全統合されたと記録し、その後の変更として`select`と`datalist`の`data`属性による外部データ充填機能の削除を挙げる。[W3C HTML Working Group, *HTML5 differences from HTML4*, Working Draft, 4 March 2010](https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23)

### 解釈

Web Forms 2.0内での導入目的は、自由入力を維持しながらauthor-specified suggestionsを与え、非対応UAへfallbackも残すことである。2003年案の`select editable`は同じ要求を扱い、2005年案は`input list` + `datalist`へ構造を変えているが、今回確認した一次資料には両者を直接結ぶ変更理由がない。そのため具体的祖先とは確定せずBを推奨する。

### 否定された仮説

GUIのcombo boxや後代のautocomplete実装は機能的に似るが、類似だけから直接祖先とはしない。2007年のXForms Transitional比較資料も両構文の比較であり、2005年の`datalist`導入原因を単独で証明しない。

### 未解決

- `datalist`／`list`を追加した正確なrevisionまたは議論。
- `select editable`から`input list` + `datalist`へ変更した主体、理由、fallback設計の由来。
- HTML5統合時にWeb Forms 2.0のどの意味・処理modelが維持または変更されたかの要素単位の差分。

## `meter`

### 証拠

WHATWG公式Git履歴の初回収録である2006-03-02のWeb Applications 1.0 sourceにはWIPの`gauge`要素があり、既知範囲のscalar measurementとしてdisk usageとquery result relevanceを例示していた。同source内のコメントはfractional value、quota usage、vote share、good／bad rangeを検討していた。[WHATWG HTML commit `c3550d90`, 2 March 2006](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)

Ian Hicksonによる2006-03-29のrevision 15は、既存の`gauge`節を`meter`へ改名し、既知範囲のscalar measurementまたはfractional valueという意味を維持しつつ、`min`, `max`, `value`, `low`, `high`, `optimum`と`HTMLMeterElement`を具体化した。差分は`meter`を「gaugeとも呼ぶ」と説明し、task progressには別の`progress`を使うよう区別した。[WHATWG HTML commit `f8514de7`, 29 March 2006](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

同revisionの保存仕様は`meter`を既知範囲のscalar measurementまたはfractional valueと定義し、disk usage、query relevance、vote shareを例示した。[WHATWG, *Web Applications 1.0*, revision 15, 28 March 2006](https://platform.html5.org/history/webapps/r15.html#the-meter)

### 解釈

確認できる要素単位の系譜は`WHATWG gauge → WHATWG meter → HTML5 meter`である。Git差分が同じ節の改名と意味・属性の継承を直接示すためAを推奨する。`meter`と`progress`の分離は、状態のscalar measurementとtask completionを意味上区別する設計だった。

### 否定された仮説

HTML `meter`が特定OSのmeter widget、CSS progress bar、または計器一般から直接採用されたとは、今回確認した史料だけでは示せない。`gauge`という説明語とUI外観だけからさらに上流を結ばない。

### 未解決

- 2006-03-02の初回Git収録より前に`gauge`を追加した草案、提案者、議論。
- `gauge`から`meter`へ名称を変えた理由。2006-10-27の後代commit message `oops, s/gauge/meter/...`は残存語の修正であり、最初の改名理由を説明しない。
- `low`, `high`, `optimum`の三領域modelを提案した一次資料。

## `output`

### 証拠

W3C XForms 1.0の2001-02-16 Working Draftは`output`という要素名のform controlを定義し、data valueのviewを他のcontent中へ表示し、userは変更できないものとした。[W3C XForms Working Group, *XForms 1.0: XForms User Interface*, Working Draft, 16 February 2001, §7.3.2](https://www.w3.org/TR/2001/WD-xforms-20010216/ui.html#id2607759)

Ian Hicksonによる2003-12-04の *Proposed XHTML Module: XForms Basic*は、XFormsの一部機能を既存HTML forms modelへ最小の影響で加える方針を明記した。同案の`output`は`span`に似るがDOM上はform controlで、内容が値となり、userによる直接入力ではなくscriptで更新され、form submissionではsuccessful controlにならないと定義された。[Ian Hickson, *Proposed XHTML Module: XForms Basic*, 4 December 2003, §§1.2, 2.11](https://www.hixie.ch/specs/html/forms/xforms-basic-1)

2005-04-11のWeb Forms 2.0 Member Submissionはこの`output`を継続し、二つの数値入力の積を`onforminput`で表示する例を含めた。[Mozilla Foundation and Opera Software, *Web Forms 2.0*, W3C Member Submission, 11 April 2005, §2.13](https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/#the-output)

2010-03-04のW3C *HTML5 differences from HTML4*はWeb Forms 2.0のHTML5への統合を記録している。[W3C HTML Working Group, *HTML5 differences from HTML4*, Working Draft, 4 March 2010](https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23)

### 解釈

確認できる集合レベルの系譜は`XForms outputを含む機能集合 → Proposed XHTML ModuleのHTML output → Web Forms 2.0 output → HTML5 output`である。2003年案はXForms機能をHTML formsへ加える因果を直接述べ、同名で非editableな値表示という役割も対応するが、`output`単独の採用記録がないためA−を推奨する。HTML版はXFormsのinstance-data bindingをそのまま移植せず、既存HTML DOMとscript中心のform modelへ作り直した。

### 否定された仮説

HTML `samp`や一般的なprogram outputから`output`要素が生まれたとは確認できない。現在の名称や用途だけで`SAMP → OUTPUT`を結ばない。

### 未解決

- `output`単独についてXFormsからの採用を決めたmail、会議、または編集履歴。
- XFormsのbindingされたread-only valueから、HTMLのscript更新可能なform-associated elementへ設計を変えた詳細な理由。

## `progress`

### 証拠

WHATWG公式Git履歴の初回収録である2006-03-02のWeb Applications 1.0 sourceにはWIPの`progress`要素があり、task completion progressを表すと定義していた。コメントは`gauge`に似るがprogress barとしてrenderし、numeratorがなければindeterminate progress barにする設計を記録していた。[WHATWG HTML commit `c3550d90`, 2 March 2006](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)

Ian Hicksonによる2006-03-29のrevision 15は、`progress`へ`value`, `max`, `HTMLProgressElement`と処理modelを追加し、task progressを、残作業量が不明なindeterminate状態と、0からmaximumまでのdeterminate状態に分けた。同じ差分は、scriptが`value`を更新したときUAが表示を更新するWeb application例も追加した。[WHATWG HTML commit `f8514de7`, 29 March 2006](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

同revisionの保存仕様は、`progress`をtask completion専用とし、単なるgaugeには`meter`を使うよう区別した。[WHATWG, *Web Applications 1.0*, revision 15, 28 March 2006](https://platform.html5.org/history/webapps/r15.html#the-progress)

2008-06-10のW3C HTML 5 Working Draftも、task completionとdeterminate／indeterminateの区別を継承し、Web applicationがscriptで進捗表示を更新する例を収録した。[W3C HTML Working Group, *HTML 5: The progress element*, Working Draft, 10 June 2008](https://www.w3.org/TR/2008/WD-html5-20080610/text-level.html#the-progress)

### 解釈

2006-03-29に仕様化した主体、日付、task completionという導入時の設計、dynamic Web applicationで値を更新する要求は直接確認できる。一方、初回Git収録より前の追加記録と、特定の先行markupまたはUI widgetから採用した因果は確認できないためBを推奨する。

### 否定された仮説

2004-12のmailing listにあるfile upload progress要求は同じ問題領域の提案だが、2006年の`progress`要素がそのmailを採用した記録は確認できないため、直接祖先とはしない。[Christopher Cook, “Web Forms 2.0 - File Upload Progress?”, WHATWG mailing list, 14 December 2004](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/044982.html)

### 未解決

- 2006-03-02より前の`progress` placeholder初出、提案者、mailing-list thread。
- Native GUI progress bar、XUL、XAML、XFormsその他から構文または状態modelを採用した記録。
- File upload progress要求と汎用task progress要素の設計を結ぶ一次資料。

## 現行定義との対応

現行Living Standardでは、`button`はbutton、`datalist`は他のcontrolに対する定義済みoption集合、`output`は計算結果またはuser actionの結果、`progress`はtaskのcompletion progress、`meter`は既知範囲のscalar measurementまたはfractional valueを表す。[WHATWG, *HTML Living Standard: Form elements*](https://html.spec.whatwg.org/multipage/form-elements.html)（2026-08-09確認）

## 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-04-02 | *Enhancing HTML Forms* | W3C Working Draft・提案 | `INPUT`のsubmit／resetより豊かなbuttonとHTML内容を持つ新`BUTTON` | https://www.w3.org/TR/WD-forms-970402 | 2026-08-09 |
| 1997-07-08 | *HTML 4.0 Working Draft: Forms* | W3C Working Draft | `BUTTON`の三種類、`INPUT`相当動作、内容による豊かなpresentation | https://www.w3.org/TR/WD-html40-970708/interact/forms.html | 2026-08-09 |
| 1999-12-24 | *HTML 4 Changes* | W3C Recommendation付録 | HTML 3.2からHTML 4.0で`BUTTON`が新要素になったこと | https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1 | 2026-08-09 |
| 2001-02-16 | *XForms 1.0: XForms User Interface* | W3C Working Draft | 非editableなdata value表示用`output` form control | https://www.w3.org/TR/2001/WD-xforms-20010216/ui.html#id2607759 | 2026-08-09 |
| 2003-12-04 | *Proposed XHTML Module: XForms Basic* | Editor's Working Draft | XForms機能をHTML formsへ加える方針、HTML `output`、`select editable` | https://www.hixie.ch/specs/html/forms/xforms-basic-1 | 2026-08-09 |
| 2004-12-10 | *Web Forms 2.0* | WHATWG Call for Comments | `input list`を補完する`datalist`、候補値、fallback | http://www.whatwg.org/specs/web-forms/2004-12-10-call-for-comments/ | 2026-08-09 |
| 2005-04-11 | *Web Forms 2.0* | W3C Member Submission | `input list`を補完する`datalist`、fallback、scriptで更新する`output` | https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/ | 2026-08-09 |
| 2006-03-02 | WHATWG HTML commit `c3550d90` | 仕様source・初回Git収録 | WIPの`gauge`と`progress`、それぞれの初期意味と検討中の処理 | https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648 | 2026-08-09 |
| 2006-03-29 | WHATWG HTML commit `f8514de7`（revision 15） | 仕様commit | `gauge`から`meter`への改名と属性model、`progress`のdeterminate／indeterminate model | https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00 | 2026-08-09 |
| 2006-03-28 | *Web Applications 1.0*, revision 15 | WHATWG保存仕様 | `meter`と`progress`の同時代定義、両者の役割分離 | https://platform.html5.org/history/webapps/r15.html | 2026-08-09 |
| 2008-06-10 | *HTML 5: The progress element* | W3C Working Draft | HTML5で継承されたtask progress、二状態、script更新例 | https://www.w3.org/TR/2008/WD-html5-20080610/text-level.html#the-progress | 2026-08-09 |
| 2010-03-04 | *HTML5 differences from HTML4* | W3C Working Draft | 独立仕様Web Forms 2.0のHTML5への統合 | https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23 | 2026-08-09 |
| 2026-08-09 | *HTML Living Standard: Form elements* | 現行仕様 | 5要素の現行定義 | https://html.spec.whatwg.org/multipage/form-elements.html | 2026-08-09 |

## 調査記録

W3Cの1997年forms提案とHTML 4草案・変更一覧、2001年XForms草案、2003年Ian Hickson案、2004年Web Forms 2.0 Call for Comments、2005年Member Submission、WHATWG公式Gitの初回sourceとrevision 15、2006年保存仕様、2008年HTML 5 Working Draft、2010年HTML5差分、現行Living Standardを確認した。`button`は`INPUT` controlからの拡張、`meter`は`gauge`からの改名を要素単位で確認できた。`output`はXForms機能集合からHTML formsへ入った関係まで確認できたが、要素単独の採用記録は未確認である。`datalist`と`progress`は導入時の意味と要求を固定できた一方、特定の直前祖先との因果を確定できなかった。2006-03-02以前のWeb Applications source、`button`の特定GUI由来は未確認のまま残した。
