# `<legend>`

> 状態: 完成

## 概要

WAI HTML & CSS Review WGが開発しHTML 4 WGが取り込んだaccessibility改善の一つとして、`fieldset`のgroupを命名し、非視覚user agentで各controlの文脈を伝えるため導入された。要素単位の原提案は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、親が`fieldset`ならその残りの内容に対するcaptionを表し、親が`optgroup`ならそのgroupのlabelを表す。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element)（2026-08-09確認）

## HTMLへの導入

1997年7月8日のHTML 4.0 First Public Working Draftが`LEGEND`を`FIELDSET`のcaptionとして定義した。speech browserがform groupを説明できるようにし、非視覚UAが各controlのlabel情報を提示する際にgroupのlegendを繰り返せることが理由だった。[HTML 4.0 forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) [HTML 4.0 changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html)

## HTML直前の祖先

WAI HTML & CSS Review WGのrecommendationsである。WAI責任者Judy Brewerは、同WGが多くのrecommendationsを開発しHTML 4 WGが取り込み、その改善一覧に`FIELDSET`／`LEGEND`を挙げている。ただし要素単位の原提案と、具体的なGUI legendまたはmarkup要素との接続は未確認である。[WAI説明](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997OctDec/0220.html)

## さらに上流の由来

### 証拠

groupへcaptionを付けるUI／accessibility要求が背景だが、具体的先行物は未確認である。

### 解釈

`legend`は視覚的な枠の見出しだけでなく、非視覚UAがcontrolへgroup contextを伝えるcaptionとして設計されたと解釈できる。

## 系譜

［集合単位］WAI HTML & CSS Review WG recommendations →（HTML 4 WGが取り込み）HTML 4.0 `FIELDSET`＋`LEGEND` → 現行HTML `<legend>`

要素単位の提案者と、さらに上流の具体的UI／markupは未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-07-08 | HTML 4.0 First Public Working Draft | W3C Working Draft | `FIELDSET`のcaption、非視覚UAでgroup contextを伝える導入理由。 | [forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) / [changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) | 2026-08-09 |
| 1997-12-18 | Judy Brewer, “Accessibility in HTML 4.0” | WAI責任者による同時代説明 | WAI HTML & CSS Review WGがrecommendationsを開発しHTML 4 WGが取り込んだこと、および改善一覧中の`FIELDSET`／`LEGEND`。 | [一次資料](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997OctDec/0220.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | `FIELDSET`の命名とspeech／graphic browser上の改善を再確認。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9) | 2026-08-09 |

## 確度

**A−**

WAI recommendationsからHTML 4への因果関係を直接確認できるが、集合単位の説明に留まり、要素単位の原提案とさらに上流の具体的祖先が欠けるため。

## 否定された仮説

GUI group boxのlegendや紙formの見出しから直接借用したという説明。名称と外形の類似だけでは因果を示せない。

## 未解決

- WAI／Cougar／HTML WGで`LEGEND`を最初に提案した人物、日付、要素単位の議論は何か。
- 具体的GUI toolkit、accessibility API、既存markupからの影響を示す資料はあるか。
