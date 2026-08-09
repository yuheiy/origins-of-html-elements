# `<legend>`

> 状態: HTML 4での導入理由を検証済み（具体的な先行技術は未確認）

## 概要

HTML 4が`fieldset`のgroupを命名し、特に非視覚user agentで各controlの文脈を伝えるため導入したcaption要素である。

## 現在の意味

WHATWG HTML Living Standardでは、親が`fieldset`ならその残りの内容に対するcaptionを表し、親が`optgroup`ならそのgroupのlabelを表す。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element)（2026-08-09確認）

## HTMLへの導入

1997年7月8日のHTML 4.0 First Public Working Draftが`LEGEND`を`FIELDSET`のcaptionとして定義した。speech browserがform groupを説明できるようにし、非視覚UAが各controlのlabel情報を提示する際にgroupのlegendを繰り返せることが理由だった。[HTML 4.0 forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) [HTML 4.0 changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html)

## HTML直前の祖先

未確認。`FIELDSET`を命名する設計理由は確認できるが、具体的なGUI legendまたはmarkup要素からの採用は確認できない。

## さらに上流の由来

### 証拠

groupへcaptionを付けるUI／accessibility要求が背景だが、具体的先行物は未確認である。

### 解釈

`legend`は視覚的な枠の見出しだけでなく、非視覚UAがcontrolへgroup contextを伝えるcaptionとして設計されたと解釈できる。

## 系譜

[具体的祖先は未確認] HTML 4.0 FPWD `FIELDSET`＋`LEGEND`（1997年7月） → HTML 4.0 Recommendation → 現行HTML `<legend>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-07-08 | HTML 4.0 First Public Working Draft | W3C Working Draft | `FIELDSET`のcaption、非視覚UAでgroup contextを伝える導入理由。 | [forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) / [changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | `FIELDSET`の命名とspeech／graphic browser上の改善を再確認。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9) | 2026-08-09 |

## 確度

**B**

導入理由と`FIELDSET`との設計関係は確認できるが、その一段上の具体的祖先を確認できないため。

## 否定された仮説

GUI group boxのlegendや紙formの見出しから直接借用したという説明。名称と外形の類似だけでは因果を示せない。

## 未解決

- Cougar／HTML WGで`LEGEND`を最初に提案した人物、日付、議論は何か。
- 具体的GUI toolkit、accessibility API、既存markupからの影響を示す資料はあるか。

## 調査記録

HTML 3.0 forms、HTML 3.2、Cougar史料、HTML 4.0 FPWD、HTML 4.01を比較した。specific predecessorは見つからなかった。横断比較は[国際化・アクセシビリティ調査ノート](../research/internationalization-accessibility-elements.md)を参照する。
