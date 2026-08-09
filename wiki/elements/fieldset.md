# `<fieldset>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML 4での導入理由を検証済み（具体的な先行技術は未確認）

## 概要

HTML 4が関連するform controlsをgroup化し、特にspeech-based user agentで目的を理解・移動しやすくするため導入した。特定の先行group boxとの因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardではform controlsまたは他の内容を一組にまとめ、任意でcaptionを持つgroupを表す。captionは子である最初の`legend`が与える。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element)（2026-08-09確認）

## HTMLへの導入

1997年7月8日のHTML 4.0 First Public Working Draftが`FIELDSET`を定義した。HTML 3.2にはspeech-based user agentが関連fieldsを効果的にgroupとして閲覧するmarkupがなかったため、thematically relatedなcontrolsとlabelsをまとめ、理解とtab／speech navigationを改善することが理由だった。[HTML 4.0 changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) [HTML 4.0 forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)

## HTML直前の祖先

未確認。HTML 4はgrouping要求を直接示すが、GUI group box、紙form、既存markupから採用したとは記録しない。

## さらに上流の由来

### 証拠

関連controlsのgroupingというUI／accessibility要求が背景だが、具体的な先行物は未確認である。

### 解釈

視覚的な囲みだけでなく、非視覚UAがform structureを説明・移動できるsemantic groupとして設計されたと解釈できる。

## 系譜

[具体的祖先は未確認] HTML 4.0 FPWD `FIELDSET`＋`LEGEND`（1997年7月） → HTML 4.0 Recommendation → 現行HTML `<fieldset>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-07-08 | HTML 4.0 First Public Working Draft | W3C Working Draft | related controlsのgroup化とtab／speech navigation、accessibilityという導入理由。 | [forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) / [changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | `FIELDSET`／`LEGEND`によるgroup化・命名とspeech／graphic browser上の改善。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9) | 2026-08-09 |

## 確度

**B**

導入理由とaccessibility modelは確認できるが、その一段上の具体的祖先を確認できないため。

## 否定された仮説

紙のfieldsetまたはGUI group boxから直接借用したという説明。名称や外形の類似だけでは採用因果を示せない。

## 未解決

- Cougar／HTML WGで`FIELDSET`を最初に提案した人物、日付、議論は何か。
- 具体的GUI toolkit、accessibility API、既存markupからの影響を示す資料はあるか。

## 調査記録

HTML 3.0 forms、HTML 3.2、Cougar史料、HTML 4.0 FPWD、HTML 4.01を比較した。特定のgroup box等からの採用記録は見つからなかった。横断比較は[国際化・アクセシビリティ調査ノート](../research/internationalization-accessibility-elements.md)を参照する。

2026-08-09の敵対的レビューでは、HTML 3.0／3.2、Cougar、HTML 4.0 FPWD、HTML 4.01を再読し、関連controlsのgrouping、tab／speech navigation、accessibilityの文脈と版順を照合した。紙formとGUI group boxを競合祖先として再探索したが採用因果はなく、系譜と確度Bを維持した。
