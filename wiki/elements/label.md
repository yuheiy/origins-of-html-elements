---
status: 完成
---

# `<label>`

## 概要

1996年のW3Cフォーム草案が、フォームコントロールとラベルテキストを構造的に関連付け、グラフィック／音声ブラウザーでの操作と説明を改善するため`LABEL`を提案した。Cougarフォーム草案を経てHTML 4が採録した。RamanとRaggettによる1995年の音声フォーム作業との接続も同時代メールで確認できる。

## 現在の意味

WHATWG HTML Living StandardではUI上のキャプションを表す。`for`属性で指定するかフォームコントロールを子に含めることにより、特定のラベル付け可能なコントロールと関連付けられる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/forms.html)（[公開版](https://html.spec.whatwg.org/multipage/forms.html#the-label-element)、2026-08-09確認）

## HTMLへの導入

1996年3月8日のDavid Singer著、Dave Raggett編のフォームWorking Draftが`LABEL`を提案した。既存HTMLではラジオボタンやチェックボックスと隣接するラベルテキストの接続がマークアップになく、クリックしてもコントロールへ作用せず、音声ブラウザーが`NAME`と`VALUE`に頼る問題を解くためだった。1997年2月・4月のCougarフォーム草案は暗黙的な／明示的な関連付けを継続し、Cougarの公開記録は同草案をHTML 4.0の基礎となった草案の一つに挙げる。7月8日のHTML 4.0 First Public Working Draftが`LABEL`を採録した。[1996年草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） [1997年2月草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [1997年4月草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） [Cougar概要](../../raw/www.w3.org/MarkUp/Cougar/index.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)）

## HTML直前の祖先

Cougar向けフォームWorking Draft系列の`LABEL`である。1997年2月・4月草案は`for`による明示的関連とコントロールを内容にする暗黙的関連を定義し、HTML 4 FPWDが継承した。[1997年2月草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [1997年4月草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)）

## さらに上流の由来

### 証拠

T. V. Ramanは1997年6月のメールで、1995年秋にDave Raggettと音声インターフェース向けHTMLフォーム拡張を作業し、当時のHTMLには入力欄とラベルの関連付けがなかったと説明した。Daniel DardaillerはRaggettから聞いた説明として、このフォーム作業の多くがCougarへ入り、「Label → LABEL」と対応したと記録した。[Ramanのメール](../../raw/www.w3.org/mid/199706102148.OAA08302@labrador;list=w3c-wai-wg)（[公開元](https://www.w3.org/mid/199706102148.OAA08302@labrador;list=w3c-wai-wg)） [Dardaillerのメール](../../raw/www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)（[公開元](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)）

### 解釈

W3Cフォーム草案は既存フォームコントロールへ構造的なキャプション関連を加え、ポインター、キーボード、音声という複数の操作方法から利用可能にしたと解釈できる。

## 系譜

W3Cフォーム草案`LABEL`（1996年3月） → Cougarフォーム草案`LABEL`（1997年2月・4月） → HTML 4.0 FPWD `LABEL`（1997年7月） → 現行HTML `<label>`

Raman／Raggettの音声フォームラベル作業（1995年、後年の同時代説明）からCougarへの接続はDardaillerがRaggettの説明を伝えるが、1996年草案との編集経路は未確認なので矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-03-08 | [*Design Issues for HTML Forms*](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） | W3C Working Draft | David Singer著、Dave Raggett編の草案が、既存HTMLのラベル関連付け欠落を理由に`LABEL`と暗黙的な／明示的な関連付けを提案した。 | 2026-08-10 |
| 1997-02-03 | [*Design Issues for HTML Forms*](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） | W3C Working Draft | Scott Isaacs著、Dave Raggett編の草案が`LABEL`を継続し、コントロールとの二つの関連付け方法を定義する。 | 2026-08-10 |
| 1997-04-02 | [*Enhancing Interactive HTML documents*](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） | W3C Working Draft | Scott Isaacsを著者とするCougar向けフォーム案が、HTML 3.2のラベル操作上の欠落を理由に`LABEL`と二つのコントロール関連付け方法を提案した。 | 2026-08-10 |
| 1997-06-10 | [T. V. Raman, “forms that work with screen readers”](../../raw/www.w3.org/mid/199706102148.OAA08302@labrador;list=w3c-wai-wg)（[公開元](https://www.w3.org/mid/199706102148.OAA08302@labrador;list=w3c-wai-wg)） | WAI Working Groupメール | RamanとRaggettが1995年秋に音声インターフェース向けフォーム拡張を作業し、入力とラベルの関連付け欠落を扱ったという当事者説明。 | 2026-08-10 |
| 1997-06-12 | [Daniel Dardailler, “Re: forms that work with screen readers”](../../raw/www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)（[公開元](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)） | WAI Working Groupメール | Raggettから聞いた説明として、過去のフォームラベル作業がCougarの`LABEL`へ入ったと記録する。 | 2026-08-10 |
| 1997-07-08 | HTML 4.0 First Public Working Draft：[forms](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)・[changes](../../raw/www.w3.org/TR/WD-html40-970708/appendix/changes.html)（[公開元1](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)・[公開元2](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html)） | W3C Working Draft | `LABEL`の定義、HTML 3.2フォームのラベル操作上の欠落、グラフィック／音声UAでの導入理由。 | 2026-08-09 |
| 1997-08-22時点 | [Project: Cougar](../../raw/www.w3.org/MarkUp/Cougar/index.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)） | W3Cプロジェクトページ | Cougar用に開発された`WD-forms`をHTML 4.0の基礎となった草案の一つに挙げる。 | 2026-08-10 |
| 1999-12-24 | [HTML 4.01](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9)） | W3C Recommendation | コントロールとの関連付けとフォームアクセシビリティ上の理由を再確認。 | 2026-08-09 |

## 確度

**A**

1996年の要素単位の提案、導入要求、Cougar草案での継続、HTML 4への採録を一次資料で確認できるため。

## 否定された仮説

特定GUIツールキットのラベルウィジェットから移植したという説明。各草案はプラットフォーム上のラベル動作との整合を求めるが、採用元を特定していない。

## 未解決

- Raman／Raggettの1995年作業と1996年3月のフォームWorking Draftの編集上の関係を直接示す資料はあるか。
- 具体的GUIツールキット、アクセシビリティAPI、既存のマークアップからの影響を示す資料はあるか。
