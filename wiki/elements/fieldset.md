---
status: 完成
---

# `<fieldset>`

## 概要

1996年のW3Cフォーム草案が当時一般的だったUIのラベル付きグループ慣習と音声ナビゲーション要求を`LGROUP`／`IS`としてHTMLへ提案し、1997年のCougarフォーム草案が`FIELDSET`／`CAPTION`へ改めた。HTML 4 WGは`FIELDSET`／`LEGEND`として採録した。特定GUIツールキットからの採用は未確認である。

## 現在の意味

WHATWG HTML Living Standardではフォームコントロールまたは他の内容を一組にまとめ、任意でキャプションを持つグループを表す。キャプションは子である最初の`legend`が与える。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element)、2026-08-09確認）

## HTMLへの導入

1997年2月3日のScott Isaacs著、Dave Raggett編のフォームWorking Draftが`FIELDSET`／`CAPTION`を定義した。HTMLには音声を用いるユーザーエージェントが関連欄をグループとして閲覧するマークアップがなかったため、関連欄をまとめ、グループ間を移動できるようにすることが理由だった。4月2日版はこの構造をCougarへの採録候補として継続し、Cougarの公開記録は同草案をHTML 4.0の基礎となった草案の一つに挙げる。7月8日のHTML 4.0 First Public Working Draftが`FIELDSET`／`LEGEND`を採録した。[1997年2月草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [1997年4月草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） [Cougar概要](../../raw/www.w3.org/MarkUp/Cougar/__index)（[公開元](https://www.w3.org/MarkUp/Cougar/)） [HTML 4.0 forms](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)）

## HTML直前の祖先

Cougar向けフォームWorking Draft系列の`FIELDSET`／`CAPTION`である。1997年2月版は`FIELDSET`を`DIV`に似るが関連欄のグループ化に特化したコンテナーとして定義し、4月版とHTML 4 FPWDが要求と説明を継承した。Daniel Dardaillerは、RaggettからRamanとの過去のフォーム作業の多くがCougarへ入ったと聞いたとして、対応を「Grouping → FIELDSET」と記録した。[1997年2月草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [Dardaillerの同時代メール](../../raw/www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)（[公開元](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)）

## さらに上流の由来

### 証拠

1996年3月8日のDavid Singer著、Dave Raggett編のフォームWorking Draftは、関連欄をグループ化してラベルを与えることを当時一般的だったUIの慣習とし、行または3D溝の左上へラベルをはめ込む外観と、視覚障害者が関連欄の文脈を得て効率的に移動する要求を記録する。具体案は`LGROUP`／`IS`だった。[1996年草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)）

### 解釈

Cougarの`FIELDSET`は、先行草案のラベル付きグループを、視覚的な囲みだけでなく非視覚UAがフォーム構造を説明・移動できる意味的グループとして作り直したと解釈できる。`LGROUP`からの名称変更理由は未確認である。

## 系譜

当時一般的だったUIのラベル付きグループ慣習＋音声ナビゲーション要求 → W3Cフォーム草案`LGROUP`＋`IS`（1996年3月） → Cougarフォーム草案`FIELDSET`＋`CAPTION`（1997年2月・4月） → HTML 4.0 FPWD `FIELDSET`＋`LEGEND`（1997年7月） → 現行HTML `<fieldset>`

`LGROUP`から`FIELDSET`への名称変更理由と特定GUIツールキットは未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-03-08 | [*Design Issues for HTML Forms*](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） | W3C Working Draft | 当時一般的だったUIのラベル付きグループ慣習、音声ナビゲーション要求、`LGROUP`／`IS`案。 | 2026-08-10 |
| 1997-02-03 | [*Design Issues for HTML Forms*](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） | W3C Working Draft | Scott Isaacs著、Dave Raggett編の草案が、`FIELDSET`／`CAPTION`とアクセシビリティ上の理由を定義する。 | 2026-08-10 |
| 1997-04-02 | [*Enhancing Interactive HTML documents*](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） | W3C Working Draft | Scott Isaacsを著者とするCougar向けフォーム案が、HTML 3.2のグループ化欠落を理由に`FIELDSET`を提案した。 | 2026-08-10 |
| 1997-06-12 | [Daniel Dardailler, “Re: forms that work with screen readers”](../../raw/www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)（[公開元](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)） | WAI Working Groupメール | Raggettから聞いた説明として、Raman／Raggettのフォームグループ化作業がCougarの`FIELDSET`へ入ったと記録する。 | 2026-08-10 |
| 1997-07-08 | HTML 4.0 First Public Working Draft：[forms](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)・[changes](../../raw/www.w3.org/TR/WD-html40-970708/appendix/changes.html)（[公開元1](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)・[公開元2](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html)） | W3C Working Draft | 関連コントロールのグループ化とタブ移動／音声ナビゲーション、アクセシビリティという導入理由。 | 2026-08-09 |
| 1997-08-22時点 | [Project: Cougar](../../raw/www.w3.org/MarkUp/Cougar/__index)（[公開元](https://www.w3.org/MarkUp/Cougar/)） | W3Cプロジェクトページ | Cougar用に開発された`WD-forms`をHTML 4.0の基礎となった草案の一つに挙げる。 | 2026-08-10 |
| 1999-12-24 | [HTML 4.01](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9)） | W3C Recommendation | `FIELDSET`／`LEGEND`によるグループ化・命名と音声／グラフィックブラウザー上の改善。 | 2026-08-09 |

## 確度

**A**

先行する`LGROUP`案、同時代の採録説明、要素単位のCougarフォーム草案、導入要求、HTML 4への採録を一次資料で確認できるため。

## 否定された仮説

WAI HTML & CSS Review WGの勧告から`FIELDSET`がHTML 4へ入ったという説明。同WGはHTML 4 FPWD後の1997年9月に設置され、10月のレビュー報告にも`FIELDSET`導入要求はない。[設置メール](../../raw/lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0026.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0026.html)） [review report](../../raw/www.w3.org/WAI/PF/report.html)（[公開元](https://www.w3.org/WAI/PF/report.html)）

特定のGUIツールキットまたは紙フォームから直接借用したという説明。1996年草案は当時一般的だったUIの慣習を明記するが、特定の採用元は示さない。

## 未解決

- `LGROUP`／`IS`から`FIELDSET`／`CAPTION`へ変更した人物、日付、理由は何か。
- 特定GUIツールキットまたはアクセシビリティAPIからの影響を示す資料はあるか。
