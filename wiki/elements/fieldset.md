---
status: 完成
---

# `<fieldset>`

## 概要

1996年のW3C forms草案がmodern UIのlabelled group慣習とspeech navigation要求を`LGROUP`／`IS`としてHTMLへ提案し、1997年のCougar form草案が`FIELDSET`／`CAPTION`へ改めた。HTML 4 WGは`FIELDSET`／`LEGEND`として採録した。特定GUI toolkitからの採用は未確認である。

## 現在の意味

WHATWG HTML Living Standardではform controlsまたは他の内容を一組にまとめ、任意でcaptionを持つgroupを表す。captionは子である最初の`legend`が与える。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element)（2026-08-09確認）

## HTMLへの導入

1997年2月3日のScott Isaacs著、Dave Raggett編のforms Working Draftが`FIELDSET`／`CAPTION`を定義した。HTMLにはspeech-based user agentが関連fieldsをgroupとして閲覧するmarkupがなかったため、関連fieldsをまとめ、group間を移動できるようにすることが理由だった。4月2日版はこの構造をCougarへの採録候補として継続し、Cougarの公開記録は同草案をHTML 4.0の基礎となったdraftsの一つに挙げる。7月8日のHTML 4.0 First Public Working Draftが`FIELDSET`／`LEGEND`を採録した。[1997年2月草案](../../raw/cougar-forms/wd-forms-970203.html) [1997年4月草案](../../raw/cougar-forms/wd-forms-970402.html) [Cougar概要](../../raw/cougar-forms/project.html) [HTML 4.0 forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)

## HTML直前の祖先

Cougar向けforms Working Draft系列の`FIELDSET`／`CAPTION`である。1997年2月版は`FIELDSET`を`DIV`に似るが関連fieldsのgroup化に特化したcontainerとして定義し、4月版とHTML 4 FPWDが要求と説明を継承した。Daniel Dardaillerは、RaggettからRamanとの過去のform作業の多くがCougarへ入ったと聞いたとして、対応を「Grouping → FIELDSET」と記録した。[1997年2月草案](../../raw/cougar-forms/wd-forms-970203.html) [Dardaillerの同時代mail](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)

## さらに上流の由来

### 証拠

1996年3月8日のDavid Singer著、Dave Raggett編のforms Working Draftは、related fieldsをgroup化してlabelを与えることをmodern UIの一般的慣習とし、lineまたは3D grooveの左上へlabelをはめ込む外観と、視覚障害者が関連fieldsのcontextを得て効率的に移動する要求を記録する。具体案は`LGROUP`／`IS`だった。[1996年草案](../../raw/cougar-forms/wd-forms-960308.html)

### 解釈

Cougarの`FIELDSET`は、先行草案のlabelled groupを、視覚的な囲みだけでなく非視覚UAがform structureを説明・移動できるsemantic groupとして作り直したと解釈できる。`LGROUP`からの名称変更理由は未確認である。

## 系譜

modern UIのlabelled group慣習＋speech navigation要求 → W3C forms草案 `LGROUP`＋`IS`（1996年3月） → Cougar forms草案 `FIELDSET`＋`CAPTION`（1997年2月・4月） → HTML 4.0 FPWD `FIELDSET`＋`LEGEND`（1997年7月） → 現行HTML `<fieldset>`

`LGROUP`から`FIELDSET`への名称変更理由と特定GUI toolkitは未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-03-08 | *Design Issues for HTML Forms* | W3C Working Draft | modern UIのlabelled group慣習、speech navigation要求、`LGROUP`／`IS`案。 | [保存資料](../../raw/cougar-forms/wd-forms-960308.html)・[正本](https://www.w3.org/TR/WD-forms-960308.html) | 2026-08-10 |
| 1997-02-03 | *Design Issues for HTML Forms* | W3C Working Draft | Scott Isaacs著、Dave Raggett編の草案が、`FIELDSET`／`CAPTION`とaccessibility上の理由を定義する。 | [保存資料](../../raw/cougar-forms/wd-forms-970203.html)・[正本](https://www.w3.org/TR/WD-forms-970203.html) | 2026-08-10 |
| 1997-04-02 | *Enhancing Interactive HTML documents* | W3C Working Draft | Scott Isaacsを著者とするCougar向けform案が、HTML 3.2のgrouping欠落を理由に`FIELDSET`を提案した。 | [保存資料](../../raw/cougar-forms/wd-forms-970402.html)・[正本](https://www.w3.org/TR/WD-forms-970402) | 2026-08-10 |
| 1997-06-12 | Daniel Dardailler, “Re: forms that work with screen readers” | WAI Working Group mail | Raggettから聞いた説明として、Raman／Raggettのform grouping作業がCougarの`FIELDSET`へ入ったと記録する。 | [W3C mail archive](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg) | 2026-08-10 |
| 1997-07-08 | HTML 4.0 First Public Working Draft | W3C Working Draft | related controlsのgroup化とtab／speech navigation、accessibilityという導入理由。 | [forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) / [changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) | 2026-08-09 |
| 1997-08-22時点 | Project: Cougar | W3C project page | Cougar用に開発された`WD-forms`をHTML 4.0の基礎となったdraftsの一つに挙げる。 | [保存資料](../../raw/cougar-forms/project.html)・[正本](https://www.w3.org/MarkUp/Cougar/) | 2026-08-10 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | `FIELDSET`／`LEGEND`によるgroup化・命名とspeech／graphic browser上の改善。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9) | 2026-08-09 |

## 確度

**A**

先行する`LGROUP`案、同時代の採録説明、要素単位のCougar form草案、導入要求、HTML 4への採録を一次資料で確認できるため。

## 否定された仮説

WAI HTML & CSS Review WGのrecommendationsから`FIELDSET`がHTML 4へ入ったという説明。同WGはHTML 4 FPWD後の1997年9月に設置され、10月のreview reportにも`FIELDSET`導入要求はない。[設置mail](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0026.html) [review report](https://www.w3.org/WAI/PF/report.html)

特定のGUI toolkitまたは紙formから直接借用したという説明。1996年草案はmodern UIの慣習を明記するが、特定の採用元は示さない。

## 未解決

- `LGROUP`／`IS`から`FIELDSET`／`CAPTION`へ変更した人物、日付、理由は何か。
- 特定GUI toolkitまたはaccessibility APIからの影響を示す資料はあるか。
