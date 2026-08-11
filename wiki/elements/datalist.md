---
status: 完成
---

# `<datalist>`

## 概要

`datalist`は2004年のWeb Forms 2.0で、任意入力を許す`input`へ著者が指定した候補と、非対応UA向けの代替内容を与えるため導入された。書き込み可能な`select`へ統合する案は後方互換性を理由に検討・棄却され、Web Forms 2.0からHTML5への要素単位の統合差分も確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、他のコントロールに対する定義済み選択肢の集合を表す。通常は`input`の`list`属性から参照される。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element)、2026-08-09確認）

## HTMLへの導入

2004年8月のWeb Forms 2.0意見で、`select`へ書き込み可能属性を加えてコンボボックスにする案に対し、Ian Hicksonは検討済みだが後方互換性がなく既存ページを壊すため採らないと回答した。同年12月10日のCall for Commentsは、任意値を許したままUAが候補を提示する`input list`を補完する新要素として`datalist`を定義し、候補を`option`で与える役割と非対応UA向け代替内容を持たせた。[設計議論](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/044441.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/044441.html)） [Web Forms 2.0](../../raw/www.whatwg.org/specs/web-forms/2004-12-10-call-for-comments/index.html)（[公開元](http://www.whatwg.org/specs/web-forms/2004-12-10-call-for-comments/#the-datalist)）

2008年10月7日のWHATWGリビジョン2295は、Web Forms 2.0由来であることをコミットメッセージに明記して、`input.list`、候補の取得元、`datalist`の意味、代替内容、`input`との接続をHTML5ソースへ実装した。[統合コミット](../../raw/github.com/whatwg/html/commit/1a0c484e8f2f500dc854107dbdffdaf0b8f8576b)（[公開元](https://github.com/whatwg/html/commit/1a0c484e8f2f500dc854107dbdffdaf0b8f8576b)）

## HTML直前の祖先

Web Forms 2.0で検討された書き込み可能 `select`案である。自由入力と候補選択を一要素へ統合する案を後方互換性のため棄却し、既存`input`から別置きの`datalist`を参照する構造を採ったことを編集者回答から確認できる。2003年の`select editable`草案そのものを指した回答かは明記されないため、草案からの連続性は確定しない。

## さらに上流の由来

### 証拠

2003年12月4日の*Proposed XHTML Module: XForms Basic*は`select`へ`editable`属性を加え、列挙した候補以外の値も入力できるコントロールを定義していた。2004年の意見では同じ構造の案が明示的に検討され、後方互換性を理由に棄却された。[2003年案](../../raw/www.hixie.ch/specs/html/forms/xforms-basic-1)（[公開元](https://www.hixie.ch/specs/html/forms/xforms-basic-1#the-select-element)） [設計議論](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/044441.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/044441.html)）

### 解釈

書き込み可能 `select`案を採らず`input`と候補集合を分離したことにより、既存ページを壊さず自由入力と候補提示を追加する構造になったと解釈できる。2003年草案と2004年に検討された案が同一文書系譜かは断定しない。

## 系譜

2003年`select editable`草案／2004年書き込み可能 `select`案

→（後方互換性を理由に一要素への統合を棄却）Web Forms 2.0 `input list`＋`datalist`（2004年）

→（WF2由来と明記した要素単位のコミット）HTML5 `datalist`（2008年） → 現行HTML `datalist`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2003-12-04 | [*Proposed XHTML Module: XForms Basic*](../../raw/www.hixie.ch/specs/html/forms/xforms-basic-1)（[公開元](https://www.hixie.ch/specs/html/forms/xforms-basic-1#the-select-element)） | Editor's Working Draft | 自由入力と候補選択を組み合わせる`select editable` | 2026-08-09 |
| 2004-08-29 | [“Web Forms 2.0 Feedback”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/044441.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/044441.html)） | WHATWGメーリングリスト・編集者回答 | 書き込み可能 `select`案を検討したが、後方互換性がなく既存ページを壊すため採らなかったこと。 | 2026-08-09 |
| 2004-12-10 | [*Web Forms 2.0*](../../raw/www.whatwg.org/specs/web-forms/2004-12-10-call-for-comments/index.html)（[公開元](http://www.whatwg.org/specs/web-forms/2004-12-10-call-for-comments/#the-datalist)） | WHATWG Call for Comments | `input list`を補完する`datalist`、候補値、代替内容 | 2026-08-09 |
| 2005-04-11 | [*Web Forms 2.0*](../../raw/www.w3.org/submissions/2005/SUBM-web-forms2-20050411/index.html)（[公開元](https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/#the-datalist)） | W3C Member Submission | 同じ`input list`と`datalist`の構造 | 2026-08-09 |
| 2008-10-07 | [WHATWG HTML commit `1a0c484e`（revision 2295）](../../raw/github.com/whatwg/html/commit/1a0c484e8f2f500dc854107dbdffdaf0b8f8576b)（[公開元](https://github.com/whatwg/html/commit/1a0c484e8f2f500dc854107dbdffdaf0b8f8576b)） | 仕様コミット | `WF2`由来と明記して`input.list`、候補の取得元、`datalist`の意味、代替内容、`input`との接続をHTML5へ統合。 | 2026-08-11 |
| 2010-03-04 | [*HTML5 differences from HTML4*](../../raw/www.w3.org/TR/2010/WD-html5-diff-20100304/index.html)（[公開元](https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23)） | W3C Working Draft | 独立仕様Web Forms 2.0がHTML5へ完全統合されたこと | 2026-08-09 |
| 2026-08-09 | [*HTML Living Standard: The datalist element*](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開元](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element)） | 現行仕様 | `datalist`の現行定義 | 2026-08-09 |

## 確度

**A**

書き込み可能な`select`という具体的な先行案を検討・棄却して後方互換な`input list`＋`datalist`構造を採った理由と、Web Forms 2.0からHTML5への要素単位の統合を直接史料で確認できるため。

## 否定された仮説

GUIコンボボックスまたは後代の自動補完実装を直接祖先とする説明は、採用記録がないため成立しない。2003年の`select editable`草案と2004年に検討された書き込み可能 `select`案を同一の編集経路とする説明も、回答が草案を名指ししないため保留する。

## 未解決

- 2003年`select editable`草案と2004年に検討された書き込み可能 `select`案が同じ編集経路であることを示す記録はあるか。
