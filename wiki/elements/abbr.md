---
status: 完成
---

# `<abbr>`

## 概要

HTML+／HTML 3.0には`ABBREV`、HTML 4には`ABBR`という略語要素がある。役割の連続は確認できるが、HTML 4が`ABBREV`を改名して採用したと直接示す資料は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、略語または頭字語を表し、任意でその展開形を`title`属性に与える。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+と1995年HTML 3.0 draftは略語要素を`ABBREV`と呼んだ。HTML 3.2には採録されず、HTML 4で`ABBR`として標準化されたが、公式資料は改名理由を説明していない。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

未確認。HTML+／HTML 3.0の`ABBREV`は語彙上の先行候補であり役割も連続するが、HTML 4の`ABBR`への採用・改名を直接記録する史料は確認できない。

## さらに上流の由来

### 証拠

HTML+は`ABBREV`をstandardなrole markupの一つとして、reference等を自動索引化できる文脈で説明する。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)

### 解釈

`ABBREV`は`ABBR`の有力な先行候補であるが、名称と用途の類似を因果関係へ広げない。

## 系譜

HTML+ `ABBREV` → HTML 3.0 `ABBREV`

HTML 4 `ABBR` → 現行HTML `<abbr>`

`ABBREV`から`ABBR`への接続は未確認のため矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §5.6 | 一次仕様・提案 | `ABBREV`をabbreviation roleとして定義する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) | 2026-08-09 |
| 1995-04-25 | HTML 3.0 draft | 一次仕様・提案 | `ABBREV`を略語markupとして引き継ぐ。 | [一次資料](https://www.w3.org/MarkUp/html3/logical.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0／HTML 4.01 changes | 一次仕様・提案 | HTML 3.2からのnew elementとして`ABBR`を記録する。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**B**

HTML+／HTML 3.0とHTML 4における略語要素の設計modelは確認できるが、具体的な先行要素から`ABBR`を採用した因果関係は確認できないため。

## 否定された仮説

`ABBREV`と`ABBR`の名称・用途の類似だけから直接の改名・採用を断定すること。改名理由を単なる短縮や文字数制約と説明すること。

## 未解決

- `ABBREV`から`ABBR`への改名理由。
- HTML 4での具体的採用議論。
