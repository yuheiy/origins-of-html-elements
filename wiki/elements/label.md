# `<label>`

> 状態: 完成

## 概要

HTML 4がform controlとlabel textを明示的に関連付け、graphic／speech browserでの操作と説明を改善するため導入した。特定GUI toolkitからの採用は未確認である。

## 現在の意味

WHATWG HTML Living StandardではUI上のcaptionを表す。`for`属性で指定するかform controlを子に含めることにより、特定のlabelable controlと関連付けられる。[一次定義](https://html.spec.whatwg.org/multipage/forms.html#the-label-element)（2026-08-09確認）

## HTMLへの導入

1997年7月8日のHTML 4.0 First Public Working Draftが`LABEL`を定義した。HTML 3.2ではradio buttonやcheckboxのlabel textをclickしてもcontrolへ作用しない問題があり、labelと特定controlを関連付け、graphic browserでlabelをsensitiveにし、speech browserでformを説明しやすくすることが理由だった。[HTML 4.0 changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) [HTML 4.0 forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)

## HTML直前の祖先

未確認。HTML 4はHTML 3.2 formsの具体的な欠落とUI要求を示すが、`LABEL`を特定GUI widgetまたはmarkup systemから採用したとは記録しない。

## さらに上流の由来

### 証拠

controlに付随するlabelというUI慣習は設計背景だが、特定toolkitとの因果は未確認である。

### 解釈

HTML 4は既存form controlsへ構造的なcaption関連を加え、pointer、keyboard、speechという複数のinteraction modeから利用可能にしたと解釈できる。

## 系譜

[具体的祖先は未確認] HTML 4.0 FPWD `LABEL`（1997年7月） → HTML 4.0 Recommendation → 現行HTML `<label>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-07-08 | HTML 4.0 First Public Working Draft | W3C Working Draft | `LABEL`の定義、HTML 3.2 formsのlabel操作上の欠落、graphic／speech UAでの導入理由。 | [forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) / [changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | controlとの関連付けとform accessibility上の理由を再確認。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9) | 2026-08-09 |

## 確度

**B**

HTMLへの導入理由とinteraction modelは確認できるが、その一段上の具体的祖先を確認できないため。

## 否定された仮説

特定GUI toolkitのlabel widgetから移植したという説明。HTML 4はplatform label behaviorとの整合を求めるが、採用元を特定していない。

## 未解決

- Cougar／HTML WGで`LABEL`を最初に提案した人物、日付、議論は何か。
- 具体的GUI toolkit、accessibility API、既存markupからの影響を示す資料はあるか。
