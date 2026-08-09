# `<button>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTMLの`input` button群から内容を持てる`BUTTON`への拡張を検証済み（特定GUI toolkitからの上流は未確認）

## 概要

`button`は1997年、既存の`input`によるsubmit／reset／script用buttonと同じ動作を保ちながら、HTML内容を持つ豊かなbuttonを作るためW3CのHTML 4へ導入された。

## 現在の意味

WHATWG HTML Living Standardでは、内容によってlabel付けされたbuttonを表す。`type`によりsubmit、reset、通常のbutton等の動作を持つ。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)（2026-08-09確認）

## HTMLへの導入

W3C HTML Working Groupは1997年4月2日の*Enhancing HTML Forms*で新しい`BUTTON`を提案し、既存`INPUT`より多様で豊かなbuttonを作るため内容にHTML fragmentを許した。7月8日のHTML 4.0初回公開草案がsubmit、reset、script用buttonとして収録し、HTML 4.0 Recommendationへ入った。[提案](https://www.w3.org/TR/WD-forms-970402) [HTML 4.0草案](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)

## HTML直前の祖先

HTMLの`input type=submit`、`input type=reset`、`input type=button`。提案とHTML 4草案は、同じ基本動作を持ちながら`BUTTON`が内容を持てるため表現力を増すと直接比較している。

## さらに上流の由来

### 証拠

1997年提案が直接示す背景は、`INPUT`のsubmit／reset controlではbutton labelが属性値に限られるという制約と、HTML fragmentを使った豊かなbuttonへの要求である。

### 解釈

既存form controlの動作を新しく発明したのではなく、内容modelを拡張して画像や整形済みtextをbutton内へ置ける要素にしたと解釈できる。

## 系譜

`input type=submit`／`input type=reset`／`input type=button` → 1997年*Enhancing HTML Forms*の`BUTTON` → HTML 4 `BUTTON` → 現行HTML `button`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-04-02 | *Enhancing HTML Forms* | W3C Working Draft・提案 | `INPUT`のsubmit／resetより豊かで、HTML内容を持つ新`BUTTON` | https://www.w3.org/TR/WD-forms-970402 | 2026-08-09 |
| 1997-07-08 | *HTML 4.0 Working Draft: Forms* | W3C Working Draft | `BUTTON`の三種類、`INPUT`相当の動作、内容による豊かなpresentation | https://www.w3.org/TR/WD-html40-970708/interact/forms.html | 2026-08-09 |
| 1999-12-24 | *HTML 4 Changes* | W3C Recommendation付録 | `BUTTON`がHTML 3.2からHTML 4.0で加わった新要素であること | https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1 | 2026-08-09 |
| 2026-08-09 | *HTML Living Standard: The button element* | 現行仕様 | `button`の現行定義とtype別の動作 | https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element | 2026-08-09 |

## 確度

**A**

要素単位の提案が既存`INPUT` controlとの関係、解決する制約、新`BUTTON`を直接結び、HTML 4への収録も確認できる。

## 否定された仮説

一般的なGUI push buttonは背景候補だが、特定のGUI toolkitやOSからHTML `button`を採用した史料は確認できないため系譜へ結ばない。

## 未解決

- 1997年4月案より前に内容modelを決めた議事録またはvendor提案はあるか。
- 特定のGUI toolkit、browser独自要素、またはclient-side scripting実装を参照した記録はあるか。

## 調査記録

1997年のW3C forms提案、HTML 4.0初回公開草案、HTML 4.01変更一覧、現行Living Standardを確認した。特定GUIからの採用記録は確認できなかった。横断比較は[Forms/UI要素の調査ノート](../research/forms-ui-elements.md)を参照する。

2026-08-09の敵対的レビューでは、1997年forms提案とHTML 4.0草案、HTML 4.01変更付録を再読し、`INPUT`のbutton群から内容を持つ`BUTTON`へ拡張した目的、日付、要素名を確認した。GUI push button、XForms、既存browser extensionを競合祖先として再検討したが、直接史料の因果を覆す資料はなく、確度Aを維持した。
