# `<output>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。XForms機能集合からHTML formsへの導入を検証済み（`output`単独の採用判断は未確認）

## 概要

`output`はXFormsの非editableな値表示controlを含む機能集合を既存HTML forms modelへ適応する過程で、2003年にHTML form controlとして提案され、Web Forms 2.0を経てHTML5へ統合された。

## 現在の意味

WHATWG HTML Living Standardでは、計算結果またはuser actionの結果を表す。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element)（2026-08-09確認）

## HTMLへの導入

Ian Hicksonは2003年12月4日の*Proposed XHTML Module: XForms Basic*で、XFormsの一部機能を既存HTML formsへ最小の影響で加える方針のもと`output`を定義した。`span`に似るがDOM上はform controlで、内容が値となり、scriptで更新でき、form submissionではsuccessful controlにならない設計だった。[2003年案](https://www.hixie.ch/specs/html/forms/xforms-basic-1)

2004年Web Forms 2.0と2005年W3C Member Submissionが`output`を継続し、Web Forms 2.0全体は後にHTML5へ統合された。[Web Forms 2.0](https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/#the-output) [HTML5差分](https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23)

## HTML直前の祖先

XFormsの`output`を含む機能集合。2003年案はXForms機能をHTML formsへ加える方針を明記し、同名の非editableな値表示controlをHTML DOMとscript中心のmodelへ作り直した。ただし`output`単独の採用記録は未確認である。

## さらに上流の由来

### 証拠

2001年のXForms 1.0 Working Draftは、instance dataの値を他のcontent中へ表示し、userが変更できない`output` form controlを定義した。[XForms草案](https://www.w3.org/TR/2001/WD-xforms-20010216/ui.html#id2607759)

### 解釈

HTML版はXFormsのinstance-data bindingをそのまま移植せず、内容とDOM valueをscriptで更新する、既存HTML formsに近いcontrolへ簡素化した。

## 系譜

XForms `output`を含む機能集合 → 2003年HTML forms案 `output` → Web Forms 2.0 `output` → HTML5 `output` → 現行HTML `output`

最初の矢印は仕様全体の設計方針に基づく集合レベルの関係であり、`output`単独の採用判断は欠ける。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2001-02-16 | *XForms 1.0: XForms User Interface* | W3C Working Draft | 非editableなdata value表示用`output` form control | https://www.w3.org/TR/2001/WD-xforms-20010216/ui.html#id2607759 | 2026-08-09 |
| 2003-12-04 | *Proposed XHTML Module: XForms Basic* | Editor's Working Draft | XForms機能をHTML formsへ加える方針とHTML `output` | https://www.hixie.ch/specs/html/forms/xforms-basic-1 | 2026-08-09 |
| 2005-04-11 | *Web Forms 2.0* | W3C Member Submission | scriptで更新する`output`と計算例 | https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/#the-output | 2026-08-09 |
| 2010-03-04 | *HTML5 differences from HTML4* | W3C Working Draft | Web Forms 2.0のHTML5への統合 | https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23 | 2026-08-09 |
| 2026-08-09 | *HTML Living Standard: The output element* | 現行仕様 | `output`の現行定義 | https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element | 2026-08-09 |

## 確度

**A−**

XForms機能をHTML formsへ加える因果と同名controlの対応は直接確認できるが、集合単位の説明しかなく`output`単独の採用判断が欠ける。

## 否定された仮説

HTML `samp`や一般的なprogram outputから生まれたとは確認できないため、名称や現在の用途だけで`SAMP → OUTPUT`を結ばない。

## 未解決

- `output`単独についてXFormsからの採用を決めたmail、会議、または編集履歴はあるか。
- XFormsのbindingされたread-only valueからscript更新可能なHTML要素へ変えた詳細な理由は何か。

## 調査記録

2001年XForms草案、2003年Ian Hickson案、Web Forms 2.0、HTML5差分、現行Living Standardを確認した。要素単独の採用判断と設計変更の議論は確認できなかった。横断比較は[Forms/UI要素の調査ノート](../research/forms-ui-elements.md)を参照する。

2026-08-09の敵対的レビューでは、XForms `output`、2003年XForms Basic案、Web Forms 2.0、HTML5統合記録を再照合した。XForms機能集合をHTML formsへ加える因果は確認できるが、`output`単独の採用判断とscript更新modelへの変更理由は見つからずA−判定を維持した。
