---
status: 完成
---

# `<button>`

## 概要

`button`は遅くとも1996年3月、JavaScript互換の単純な`input type=button`を画像とテキストを内容に持てる押しボタンへ拡張するW3C案として現れ、1997年にHTML 4へ導入された。

## 現在の意味

WHATWG HTML Living Standardでは、内容によってラベル付けされたボタンを表す。`type`により送信、リセット、通常のボタン等の動作を持つ。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)、2026-08-09確認）

## HTMLへの導入

Dave Raggett編集、IBMのDavid Singer著による1996年3月8日の*Design Issues for HTML Forms*は、JavaScript互換の単純な`INPUT TYPE=Button`に対し、画像とテキストを内容に持てる新`BUTTON`を提案した。1997年4月案はHTML 3.2の二つのボタンを越えて豊かなフォームを作る要素として整理し、7月8日のHTML 4.0初回公開草案が送信、リセット、スクリプト用ボタンとして収録した。[1996年提案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） [1997年提案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） [HTML 4.0草案](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)）

## HTML直前の祖先

HTMLの`input type=submit`、`input type=reset`、`input type=button`。1996年提案とHTML 4草案は、同じ基本動作を持ちながら`BUTTON`が内容を持てるため表現力を増すと直接比較している。[Design Issues for HTML Forms](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） [HTML 4.0草案](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)）

## さらに上流の由来

### 証拠

1996年提案は、`INPUT TYPE=Button`をJavaScriptとの互換性のための単純なボタンとし、それに対して新`BUTTON`を画像とテキストを内容に持てる柔軟なコントロールとした。同草案はHTML 2.0のフォーム型が現代的なUIに比べて限定的だとも述べる。[Design Issues for HTML Forms](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)）

### 解釈

押しボタンの動作を新しく発明したのではなく、JavaScriptから操作する既存の単純ボタンとフォーム送信・リセットの動作を保ち、GUIの押しボタンに見られる画像と文字のラベルをHTML内容として記述できるようにした内発的拡張と解釈できる。特定OSやツールキットの要素を移植した証拠はない。

## 系譜

JavaScript互換の`input type=button`＋`input type=submit`／`input type=reset` → 1996年*Design Issues for HTML Forms*の`BUTTON` → 1997年HTML 4 `BUTTON` → 現行HTML `button`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-03-08 | [*Design Issues for HTML Forms*](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） | W3C Working Draft | JavaScript互換の`INPUT TYPE=Button`と対比して、画像とテキストを内容に持てる新`BUTTON`を提案する。 | 2026-08-12 |
| 1997-04-02 | [*Enhancing HTML Forms*](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） | W3C Working Draft・提案 | `INPUT`の送信／リセットより豊かで、HTML内容を持つ新`BUTTON` | 2026-08-09 |
| 1997-07-08 | [*HTML 4.0 Working Draft: Forms*](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)） | W3C Working Draft | `BUTTON`の三種類、`INPUT`相当の動作、内容による豊かな表現 | 2026-08-09 |
| 1999-12-24 | [*HTML 4 Changes*](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | W3C Recommendation付録 | `BUTTON`がHTML 3.2からHTML 4.0で加わった新要素であること | 2026-08-09 |
| 2026-08-09 | [*HTML Living Standard: The button element*](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開元](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)） | 現行仕様 | `button`の現行定義と種別別の動作 | 2026-08-09 |

## 確度

**A**

要素単位の提案が既存`INPUT`コントロールとの関係、解決する制約、新`BUTTON`を直接結び、HTML 4への収録も確認できる。

## 否定された仮説

特定のGUIツールキットやOSの押しボタンからHTML `button`を採用したという説明。1996年草案は現代的UIとの機能差とJavaScript互換を述べるが、特定製品との対応は示さない。

## 未解決

- 1996年3月案より前にDavid SingerまたはRaggettが内容モデルを決めた議事録、IBM提案、草稿はあるか。
- 草案が互換対象としたJavaScriptの`INPUT TYPE=Button`を、どのブラウザー実装または提案から採ったかを示す記録はあるか。
