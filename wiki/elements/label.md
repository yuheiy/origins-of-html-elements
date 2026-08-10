---
status: 完成
---

# `<label>`

## 概要

1996年のW3C forms草案が、form controlとlabel textを構造的に関連付け、graphic／speech browserでの操作と説明を改善するため`LABEL`を提案した。Cougar form草案を経てHTML 4が採録した。RamanとRaggettによる1995年のspeech-form作業との接続も同時代mailで確認できる。

## 現在の意味

WHATWG HTML Living StandardではUI上のcaptionを表す。`for`属性で指定するかform controlを子に含めることにより、特定のlabelable controlと関連付けられる。[HTML Living Standard](../../raw/html-living-standard/forms.html)（[公開版](https://html.spec.whatwg.org/multipage/forms.html#the-label-element)、2026-08-09確認）

## HTMLへの導入

1996年3月8日のDavid Singer著、Dave Raggett編のforms Working Draftが`LABEL`を提案した。既存HTMLではradio buttonやcheckboxと隣接するlabel textの接続がmarkupになく、clickしてもcontrolへ作用せず、speech browserが`NAME`と`VALUE`に頼る問題を解くためだった。1997年2月・4月のCougar form草案はimplicit／explicit associationを継続し、Cougarの公開記録は同草案をHTML 4.0の基礎となったdraftsの一つに挙げる。7月8日のHTML 4.0 First Public Working Draftが`LABEL`を採録した。[1996年草案](../../raw/cougar-forms/wd-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） [1997年2月草案](../../raw/cougar-forms/wd-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [1997年4月草案](../../raw/cougar-forms/wd-forms-970402.html)（[公開元](https://www.w3.org/TR/WD-forms-970402)） [Cougar概要](../../raw/cougar-forms/project.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)）

## HTML直前の祖先

Cougar向けforms Working Draft系列の`LABEL`である。1997年2月・4月草案は`for`による明示的関連とcontrolを内容にする暗黙的関連を定義し、HTML 4 FPWDが継承した。[1997年2月草案](../../raw/cougar-forms/wd-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [1997年4月草案](../../raw/cougar-forms/wd-forms-970402.html)（[公開元](https://www.w3.org/TR/WD-forms-970402)）

## さらに上流の由来

### 証拠

T. V. Ramanは1997年6月のmailで、1995年秋にDave Raggettとspeech interface向けHTML forms拡張を作業し、当時のHTMLにはinput fieldとlabelの関連付けがなかったと説明した。Daniel DardaillerはRaggettから聞いた説明として、このform作業の多くがCougarへ入り、「Label → LABEL」と対応したと記録した。[Ramanのmail](https://www.w3.org/mid/199706102148.OAA08302@labrador;list=w3c-wai-wg) [Dardaillerのmail](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)

### 解釈

W3C forms草案は既存form controlsへ構造的なcaption関連を加え、pointer、keyboard、speechという複数のinteraction modeから利用可能にしたと解釈できる。

## 系譜

W3C forms草案 `LABEL`（1996年3月） → Cougar forms草案 `LABEL`（1997年2月・4月） → HTML 4.0 FPWD `LABEL`（1997年7月） → 現行HTML `<label>`

Raman／Raggettのspeech-form label作業（1995年、後年の同時代説明）からCougarへの接続はDardaillerがRaggettの説明を伝えるが、1996年草案との編集経路は未確認なので矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-03-08 | [*Design Issues for HTML Forms*](../../raw/cougar-forms/wd-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） | W3C Working Draft | David Singer著、Dave Raggett編の草案が、既存HTMLのlabel関連付け欠落を理由に`LABEL`とimplicit／explicit associationを提案した。 | 2026-08-10 |
| 1997-02-03 | [*Design Issues for HTML Forms*](../../raw/cougar-forms/wd-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） | W3C Working Draft | Scott Isaacs著、Dave Raggett編の草案が`LABEL`を継続し、controlとの二つの関連付け方法を定義する。 | 2026-08-10 |
| 1997-04-02 | [*Enhancing Interactive HTML documents*](../../raw/cougar-forms/wd-forms-970402.html)（[公開元](https://www.w3.org/TR/WD-forms-970402)） | W3C Working Draft | Scott Isaacsを著者とするCougar向けform案が、HTML 3.2のlabel操作上の欠落を理由に`LABEL`と二つのcontrol関連付け方法を提案した。 | 2026-08-10 |
| 1997-06-10 | [T. V. Raman, “forms that work with screen readers”](../../raw/items/www.w3.org/eb5b752e2a2a6fee-199706102148.OAA08302-labrador-list-w3c-w.html)（[公開元](https://www.w3.org/mid/199706102148.OAA08302@labrador;list=w3c-wai-wg)） | WAI Working Group mail | RamanとRaggettが1995年秋にspeech interface向けforms拡張を作業し、inputとlabelの関連付け欠落を扱ったという当事者説明。 | 2026-08-10 |
| 1997-06-12 | [Daniel Dardailler, “Re: forms that work with screen readers”](../../raw/items/www.w3.org/8cf1a19fec0c478d-199706120733.JAA07828-www47.inria.fr-list-w3c-w.html)（[公開元](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)） | WAI Working Group mail | Raggettから聞いた説明として、過去のform label作業がCougarの`LABEL`へ入ったと記録する。 | 2026-08-10 |
| 1997-07-08 | HTML 4.0 First Public Working Draft：[forms](../../raw/html-4-history/3398c72a13f7d7ac-forms.html)・[changes](../../raw/html-4-history/5567476b4aad7a0e-changes.html)（[公開元1](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)・[公開元2](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html)） | W3C Working Draft | `LABEL`の定義、HTML 3.2 formsのlabel操作上の欠落、graphic／speech UAでの導入理由。 | 2026-08-09 |
| 1997-08-22時点 | [Project: Cougar](../../raw/cougar-forms/project.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)） | W3C project page | Cougar用に開発された`WD-forms`をHTML 4.0の基礎となったdraftsの一つに挙げる。 | 2026-08-10 |
| 1999-12-24 | [HTML 4.01](../../raw/html-4-history/8956e5bf2cd33e94-changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9)） | W3C Recommendation | controlとの関連付けとform accessibility上の理由を再確認。 | 2026-08-09 |

## 確度

**A**

1996年の要素単位の提案、導入要求、Cougar草案での継続、HTML 4への採録を一次資料で確認できるため。

## 否定された仮説

特定GUI toolkitのlabel widgetから移植したという説明。各草案はplatform上のlabel behaviorとの整合を求めるが、採用元を特定していない。

## 未解決

- Raman／Raggettの1995年作業と1996年3月のforms Working Draftの編集上の関係を直接示す資料はあるか。
- 具体的GUI toolkit、accessibility API、既存markupからの影響を示す資料はあるか。
