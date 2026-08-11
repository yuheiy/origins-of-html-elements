---
status: 完成
---

# `<button>`

## 概要

`button`は1997年、既存の`input`による送信／リセット／スクリプト用ボタンと同じ動作を保ちながら、HTML内容を持つ豊かなボタンを作るためW3CのHTML 4へ導入された。

## 現在の意味

WHATWG HTML Living Standardでは、内容によってラベル付けされたボタンを表す。`type`により送信、リセット、通常のボタン等の動作を持つ。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)、2026-08-09確認）

## HTMLへの導入

W3C HTML Working Groupは1997年4月2日の*Enhancing HTML Forms*で新しい`BUTTON`を提案し、既存`INPUT`より多様で豊かなボタンを作るため内容にHTML断片を許した。7月8日のHTML 4.0初回公開草案が送信、リセット、スクリプト用ボタンとして収録し、HTML 4.0 Recommendationへ入った。[提案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） [HTML 4.0草案](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)）

## HTML直前の祖先

HTMLの`input type=submit`、`input type=reset`、`input type=button`。提案とHTML 4草案は、同じ基本動作を持ちながら`BUTTON`が内容を持てるため表現力を増すと直接比較している。

## さらに上流の由来

### 証拠

1997年提案が直接示す背景は、`INPUT`の送信／リセットコントロールではボタンラベルが属性値に限られるという制約と、HTML断片を使った豊かなボタンへの要求である。

### 解釈

既存フォームコントロールの動作を新しく発明したのではなく、内容モデルを拡張して画像や整形済みテキストをボタン内へ置ける要素にしたと解釈できる。

## 系譜

`input type=submit`／`input type=reset`／`input type=button` → 1997年*Enhancing HTML Forms*の`BUTTON` → HTML 4 `BUTTON` → 現行HTML `button`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1997-04-02 | [*Enhancing HTML Forms*](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） | W3C Working Draft・提案 | `INPUT`の送信／リセットより豊かで、HTML内容を持つ新`BUTTON` | 2026-08-09 |
| 1997-07-08 | [*HTML 4.0 Working Draft: Forms*](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)） | W3C Working Draft | `BUTTON`の三種類、`INPUT`相当の動作、内容による豊かな表現 | 2026-08-09 |
| 1999-12-24 | [*HTML 4 Changes*](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | W3C Recommendation付録 | `BUTTON`がHTML 3.2からHTML 4.0で加わった新要素であること | 2026-08-09 |
| 2026-08-09 | [*HTML Living Standard: The button element*](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開元](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)） | 現行仕様 | `button`の現行定義と種別別の動作 | 2026-08-09 |

## 確度

**A**

要素単位の提案が既存`INPUT` コントロールとの関係、解決する制約、新`BUTTON`を直接結び、HTML 4への収録も確認できる。

## 否定された仮説

一般的なGUIの押しボタンは背景候補だが、特定のGUIツールキットやOSからHTML `button`を採用した史料は確認できないため系譜へ結ばない。

## 未解決

- 1997年4月案より前に内容モデルを決めた議事録またはベンダー提案はあるか。
- 特定のGUIツールキット、ブラウザー独自要素、またはクライアント側スクリプティング実装を参照した記録はあるか。
