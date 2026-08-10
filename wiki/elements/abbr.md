---
status: 完成
---

# `<abbr>`

## 概要

HTML+／HTML 3.0には`ABBREV`と`ACRONYM`が別要素としてあり、HTML 4初期草案は`ACRONYM`だけを採録した。1997年11月のHTML 4 Proposed Recommendationは、この要素を`ABBR`へ改名したと明記する。HTML 3.0の`ABBREV`がこの変更へ影響したかは未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、略語または頭字語を表し、任意でその展開形を`title`属性に与える。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)、2026-08-09確認）

## HTMLへの導入

HTML+とHTML 3.0は`ABBREV`を略語、`ACRONYM`を頭字語として別々に定義した。1997年9月17日のHTML 4 Working Draftは`ACRONYM`だけを定義したが、11月7日のProposed Recommendationはこれを`ABBR`へ改名し、略語全般を扱う要素へ広げた。最終HTML 4.0は`ABBR`と`ACRONYM`を別要素として収録した。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4 Working Draft](https://www.w3.org/TR/WD-html40-970917/struct/text.html) [HTML 4 Proposed Recommendation](https://www.w3.org/TR/PR-html40-971107/struct/text.html) [HTML 4.0](https://www.w3.org/TR/REC-html40/struct/text.html#h-9.2.1)

## HTML直前の祖先

HTML 4の1997年9月Working Draftにある`ACRONYM`。11月のProposed Recommendationは、同じ要素が以前のHTML版とHTML 4初期草案では`ACRONYM`と呼ばれていたと明記する。ただし最終HTML 4.0は`ACRONYM`も別要素として再び収録したため、これはHTML 4草案編集過程の直接改名であり、両概念の恒久的統合ではない。

## さらに上流の由来

### 証拠

HTML+は`ABBREV`をstandardなrole markupの一つとして、reference等を自動索引化できる文脈で説明する。1997年9月のpublic commentは、HTML 3.0の`ABBREV`とHTML 4草案の`ACRONYM`を対比し、発音で区別できない略語も含む一般要素を求めた。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [Holger Wahlenのcomment](https://lists.w3.org/Archives/Public/www-html/1997Sep/0385.html)

### 解釈

public commentは`ABBR`への一般化と整合する背景だが、editorが提案を採用したという記録はない。HTML+／HTML 3.0の`ABBREV`を直接祖先とはしない。

## 系譜

HTML+ `ABBREV` → HTML 3.0 `ABBREV`（後続接続は未確認）

HTML 4 Working Draft `ACRONYM` → HTML 4 Proposed Recommendation `ABBR` → HTML 4.0 `ABBR` → 現行HTML `<abbr>`

HTML 3.0 `ABBREV`からHTML 4草案の変更への接続は未確認のため矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §5.6](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)） | 一次仕様・提案 | `ABBREV`をabbreviation roleとして定義する。 | 2026-08-09 |
| 1995-04-25 | [HTML 3.0 draft](../../raw/www.w3.org/MarkUp/html3/logical.html)（[公開元](https://www.w3.org/MarkUp/html3/logical.html)） | 一次仕様・提案 | `ABBREV`と`ACRONYM`を別々のnew elementとして定義する。 | 2026-08-10 |
| 1997-09-17 | [HTML 4.0 Working Draft](../../raw/www.w3.org/TR/WD-html40-970917/struct/text.html)（[公開元](https://www.w3.org/TR/WD-html40-970917/struct/text.html)） | W3C Working Draft | `ACRONYM`だけを定義し、abbreviation専用markupは含まないと明記する。 | 2026-08-10 |
| 1997-09-29 | [Holger Wahlen, “Why is it still \"ACRONYM\"?”](../../raw/lists.w3.org/Archives/Public/www-html/1997Sep/0385.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1997Sep/0385.html)） | W3C public mailing list | HTML 3.0の`ABBREV`とHTML 4草案の`ACRONYM`を対比し、略語全般を扱う要素への一般化を提案する。editorの採択は確認できない。 | 2026-08-10 |
| 1997-11-07 | [HTML 4.0 Proposed Recommendation](../../raw/www.w3.org/TR/PR-html40-971107/struct/text.html)（[公開元](https://www.w3.org/TR/PR-html40-971107/struct/text.html)） | W3C Proposed Recommendation | `ABBR`を定義し、以前のHTML版とHTML 4初期草案ではこの要素を`ACRONYM`と呼んだと明記する。 | 2026-08-10 |
| 1997-12-18 | [HTML 4.0](../../raw/www.w3.org/TR/REC-html40/struct/text.html)（[公開元](https://www.w3.org/TR/REC-html40/struct/text.html#h-9.2.1)） | W3C Recommendation | `ABBR`と`ACRONYM`を別々のphrase elementとして標準化する。 | 2026-08-10 |

## 確度

**A**

HTML 4初期草案の`ACRONYM`からProposed Recommendationの`ABBR`への改名を仕様自身が要素単位で明記し、最終HTML 4.0から現行要素までを確認できるため。

## 否定された仮説

HTML 3.0の`ABBREV`を単純に短縮して`ABBR`へ改名したという説明。HTML 3.0は`ABBREV`と`ACRONYM`を別要素とし、HTML 4 Proposed Recommendationが旧名として直接挙げるのは`ACRONYM`である。改名理由を単なる文字数制約と説明すること。

## 未解決

- HTML 3.0 `ABBREV`や1997年9月の一般化提案が、HTML 4 Proposed Recommendationの変更へ影響したことを示すeditor記録はあるか。
- Proposed Recommendationで`ACRONYM`を`ABBR`へ改名した後、最終HTML 4.0で両要素を併存させた編集判断は何か。
