---
status: 完成
---

# `<textarea>`

## 概要

長いmulti-line値を`INPUT`属性へ置くSGML上の問題からHTML+で分離され、HTML 2.0へ採録された要素である。

## 現在の意味

WHATWG HTML Living Standardでは、raw valueを編集するmultiline plain-text controlを表し、要素内容はcontrolのdefault valueを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+はmulti-line inputを`TEXTAREA`として定義した。RFC 1866はHTML+由来のforms materialとして`TEXTAREA`を標準化した。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)

## HTML直前の祖先

HTML+は初期案の`INPUT TYPE=TEXT`では長い値がSGMLのattribute literal長制限に触れるため、内容を持つ`TEXTAREA`へ分離したと説明する。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

## さらに上流の由来

### 証拠

直接の設計要求はGUI widgetの模倣ではなく、長い複数行値を属性へ格納することによるSGML上の制約だった。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

### 解釈

multiline text UIとの対応はあるが、要素を分離した直接理由は史料が述べるSGML属性長問題である。

## 系譜

HTML+初期案 `INPUT TYPE=TEXT` → HTML+ `TEXTAREA` → HTML 2.0 `TEXTAREA` → 現行HTML `<textarea>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §10](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） | Internet-Draft | `TEXTAREA`のHTML+ forms上の設計を確認できる。 | 2026-08-09 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | Standards Track RFC | HTML 2.0 formsを定義し、forms materialのHTML+由来を明記する。 | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+ formsからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

特定GUI toolkitのmultiline text widgetをそのまま移植したという説明。直接史料がない。

## 未解決

- 初期`INPUT TYPE=TEXT`案のより古い版と変更時期。
