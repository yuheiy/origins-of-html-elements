# `<datalist>`

> 状態: 完成

## 概要

`datalist`は2004年のWeb Forms 2.0で、任意入力を許す`input`へauthor-specified suggestionsと非対応UA向けfallbackを与えるため導入された。具体的な直前祖先は確定できない。

## 現在の意味

WHATWG HTML Living Standardでは、他のcontrolに対する定義済みoptionの集合を表す。通常は`input`の`list`属性から参照される。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element)（2026-08-09確認）

## HTMLへの導入

2004年12月10日のWHATWG Web Forms 2.0 Call for Commentsは、任意値を許したままUAが候補を提示する`input list`を補完する新要素として`datalist`を定義した。候補を`option`で与える役割と、非対応UA向けfallback contentを置く役割を持たせた。[Web Forms 2.0](http://www.whatwg.org/specs/web-forms/2004-12-10-call-for-comments/#the-datalist)

## HTML直前の祖先

未確認。2003年案の`select editable`は自由入力と候補選択を組み合わせる同じ要求を扱うが、`input list` + `datalist`へ変更した決定記録は確認できない。

## さらに上流の由来

### 証拠

2003年12月4日の*Proposed XHTML Module: XForms Basic*は`select`へ`editable`属性を加え、列挙した候補以外の値も入力できるcontrolを定義していた。[2003年案](https://www.hixie.ch/specs/html/forms/xforms-basic-1#the-select-element)

### 解釈

`select editable`と`datalist`は同じ要求への異なる構文と見られるが、採用因果を示す史料がないため、探索上の先行候補に留める。

## 系譜

2004年Web Forms 2.0 `datalist` → HTML5 `datalist` → 現行HTML `datalist`

Web Forms 2.0からHTML5への矢印は仕様全体の統合記録に基づく。要素単位の統合差分は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2003-12-04 | *Proposed XHTML Module: XForms Basic* | Editor's Working Draft | 自由入力と候補選択を組み合わせる`select editable` | https://www.hixie.ch/specs/html/forms/xforms-basic-1#the-select-element | 2026-08-09 |
| 2004-12-10 | *Web Forms 2.0* | WHATWG Call for Comments | `input list`を補完する`datalist`、候補値、fallback | http://www.whatwg.org/specs/web-forms/2004-12-10-call-for-comments/#the-datalist | 2026-08-09 |
| 2005-04-11 | *Web Forms 2.0* | W3C Member Submission | 同じ`input list`と`datalist`の構造 | https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/#the-datalist | 2026-08-09 |
| 2010-03-04 | *HTML5 differences from HTML4* | W3C Working Draft | 独立仕様Web Forms 2.0がHTML5へ完全統合されたこと | https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23 | 2026-08-09 |
| 2026-08-09 | *HTML Living Standard: The datalist element* | 現行仕様 | `datalist`の現行定義 | https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element | 2026-08-09 |

## 確度

**B**

導入時の目的と構文は確認できるが、具体的な先行物から`datalist`を採用した因果は確認できない。

## 否定された仮説

GUI combo box、後代のautocomplete実装、2003年の`select editable`は、機能の類似だけでは直接祖先としない。

## 未解決

- `datalist`／`list`を追加した正確なrevisionまたは議論は確認できるか。
- `select editable`から構造を変えた主体、理由、fallback設計の由来は何か。
- HTML5統合時の要素単位の差分は確認できるか。
