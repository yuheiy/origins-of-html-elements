---
status: 完成
---

# `<option>`

## 概要

HTML+ formsからHTML 2.0へ導出されたselection candidate要素である。

## 現在の意味

WHATWG HTML Living Standardでは、`select`内の選択肢、または`datalist`内の候補一覧の一項目を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+は`SELECT`内の各候補を`OPTION`で表した。RFC 1866はHTML+由来のforms materialとして`OPTION`を標準化した。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)

## HTML直前の祖先

HTML直前の祖先はHTML+ `OPTION`である。HTML+は各alternativeを`OPTION`で表すと明記する。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

## さらに上流の由来

### 証拠

HTML+以前の個別markup祖先は確認できない。

### 解釈

なし。

## 系譜

HTML+ `OPTION` → HTML 2.0 `OPTION` → 現行HTML `<option>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §10](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） | Internet-Draft | `OPTION`のHTML+ forms上の設計を確認できる。 | 2026-08-09 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | Standards Track RFC | HTML 2.0 formsを定義し、forms materialのHTML+由来を明記する。 | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+ formsからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

なし。

## 未解決

- HTML+以前の個別markup祖先。
