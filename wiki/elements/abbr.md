# `<abbr>`

> 状態: HTML+系譜を検証済み（改名理由は未確認）

## 概要

HTML+／HTML 3.0の`ABBREV`からHTML 4の`ABBR`へ継承された略語要素で、改名理由は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、略語または頭字語を表し、任意でその展開形を`title`属性に与える。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+と1995年HTML 3.0 draftは略語要素を`ABBREV`と呼んだ。HTML 3.2には採録されず、HTML 4で`ABBR`として標準化されたが、公式資料は改名理由を説明していない。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

HTML直前の語彙上の祖先はHTML+／HTML 3.0の`ABBREV`である。役割は連続するが、`ABBR`への改名判断を直接説明する史料は未確認である。

## さらに上流の由来

### 証拠

HTML+は`ABBREV`をstandardなrole markupの一つとして、reference等を自動索引化できる文脈で説明する。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)

### 解釈

語彙の継承は強いが、名称の短縮理由を推定しない。

## 系譜

HTML+ `ABBREV` → HTML 3.0 `ABBREV` → HTML 4 `ABBR`（改名理由不明） → 現行HTML `<abbr>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §5.6 | 一次仕様・提案 | `ABBREV`をabbreviation roleとして定義する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) | 2026-08-09 |
| 1995-04-25 | HTML 3.0 draft | 一次仕様・提案 | `ABBREV`を略語markupとして引き継ぐ。 | [一次資料](https://www.w3.org/MarkUp/html3/logical.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0／HTML 4.01 changes | 一次仕様・提案 | HTML 3.2からのnew elementとして`ABBR`を記録する。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**A−**

`ABBREV`から`ABBR`への語彙継承は強いが、改名理由とHTML 4での具体的採用判断が未確認であるため。

## 否定された仮説

`ABBREV`と`ABBR`の類似だけから、改名理由を単なる短縮や文字数制約と説明すること。

## 未解決

- `ABBREV`から`ABBR`への改名理由。
- HTML 4での具体的採用議論。

## 調査記録

HTML+、HTML 3.0、後続RFCおよびW3C Recommendationを確認した。横断比較は[HTML+調査ノート](../research/html-plus-elements.md)を参照する。
