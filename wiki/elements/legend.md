---
status: 完成
---

# `<legend>`

## 概要

1996年のW3Cフォーム草案がラベル付きグループを`LGROUP`／`IS`として提案し、1997年のCougarフォーム草案が`FIELDSET`用`CAPTION`へ改めた。HTML 4 First Public Working Draftは同じキャプションスロットを`LEGEND`へ置換したが、その判断と提案者は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、親が`fieldset`ならその残りの内容に対するキャプションを表し、親が`optgroup`ならそのグループのラベルを表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element)、2026-08-09確認）

## HTMLへの導入

1997年2月3日と4月2日のフォームWorking Draftは、`FIELDSET`の直後に置く`CAPTION`でグループを命名し、音声を用いるブラウザーがグループ間を移動できる設計を提案した。Cougarの公開記録は4月草案をHTML 4.0の基礎となった草案の一つに挙げる。7月8日のHTML 4.0 First Public Working Draftは同じ`FIELDSET`のキャプションスロットを`LEGEND`へ置換し、非視覚UAでグループ文脈を伝える役割を継承したが、置換理由は記録しない。[1997年2月草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [1997年4月草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） [Cougar概要](../../raw/www.w3.org/MarkUp/Cougar/index.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)） [HTML 4.0 forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)

## HTML直前の祖先

Cougar向けフォームWorking Draft系列で`FIELDSET`のグループ名を担った`CAPTION`である。構造、意味、説明、例がHTML 4の`LEGEND`へ継続するが、`CAPTION`を`LEGEND`へ置換した要素単位の記録は未確認である。[1997年2月草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [1997年4月草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)）

## さらに上流の由来

### 証拠

1996年3月のフォームWorking Draftはラベル付きグループを当時一般的だったUIの慣習とし、行または3D溝の左上へラベルをはめ込む外観を記録する。具体案は`LGROUP`／`IS`であり、1997年2月草案の`FIELDSET`／`CAPTION`へ要求と外観が継続した。[1996年草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） [1997年2月草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)）

### 解釈

`legend`は先行草案のキャプション付きグループを専用要素にしたもので、視覚的な枠の見出しだけでなく、非視覚UAがコントロールへグループ文脈を伝えるキャプションとして設計されたと解釈できる。

## 系譜

当時一般的だったUIのラベル付きグループ慣習 → W3Cフォーム草案`LGROUP`＋`IS`（1996年3月） → Cougarフォーム草案`FIELDSET`＋`CAPTION`（1997年2月・4月） →［置換判断は未確認］HTML 4.0 FPWD `FIELDSET`＋`LEGEND`（1997年7月） → 現行HTML `<legend>`

`LEGEND`の提案者、`CAPTION`からの置換理由、特定GUIツールキットは未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-03-08 | [*Design Issues for HTML Forms*](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） | W3C Working Draft | 当時一般的だったUIのラベル付きグループ慣習、音声ナビゲーション要求、`LGROUP`／`IS`案。 | 2026-08-10 |
| 1997-02-03 | [*Design Issues for HTML Forms*](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） | W3C Working Draft | `FIELDSET`のキャプションとして`CAPTION`を定義し、グループ文脈と推奨外観を記録する。 | 2026-08-10 |
| 1997-04-02 | [*Enhancing Interactive HTML documents*](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） | W3C Working Draft | Scott Isaacsを著者とするCougar向けフォーム案が、`FIELDSET`のグループ名を担う`CAPTION`と音声を用いるブラウザー向けの役割を提案した。 | 2026-08-10 |
| 1997-07-08 | HTML 4.0 First Public Working Draft：[forms](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)・[changes](../../raw/www.w3.org/TR/WD-html40-970708/appendix/changes.html)（[公開元1](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)・[公開元2](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html)） | W3C Working Draft | `FIELDSET`のキャプション、非視覚UAでグループ文脈を伝える導入理由。 | 2026-08-09 |
| 1997-08-22時点 | [Project: Cougar](../../raw/www.w3.org/MarkUp/Cougar/index.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)） | W3Cプロジェクトページ | Cougar用に開発された`WD-forms`をHTML 4.0の基礎となった草案の一つに挙げる。 | 2026-08-10 |
| 1999-12-24 | [HTML 4.01](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9)） | W3C Recommendation | `FIELDSET`の命名と音声／グラフィックブラウザー上の改善を再確認。 | 2026-08-09 |

## 確度

**A−**

Cougarフォーム草案からHTML 4への採録と、`CAPTION`から`LEGEND`へ続く要素単位の役割は確認できるが、改名判断を直接示す記録と`LEGEND`の提案者が欠けるため。

## 否定された仮説

WAI HTML & CSS Review WGの勧告から`LEGEND`がHTML 4へ入ったという説明。同WGはHTML 4 FPWD後の1997年9月に設置され、10月のレビュー報告にも`LEGEND`導入要求はない。[設置メール](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0026.html) [review report](https://www.w3.org/WAI/PF/report.html)

特定GUIツールキットの凡例や紙フォームの見出しから直接借用したという説明。1996年草案は当時一般的だったUIの慣習を明記するが、特定の採用元は示さない。

## 未解決

- 1997年4月2日の`CAPTION`を7月8日の`LEGEND`へ改名した人物、日付、理由は何か。
- 特定GUIツールキットまたはアクセシビリティAPIからの影響を示す資料はあるか。
