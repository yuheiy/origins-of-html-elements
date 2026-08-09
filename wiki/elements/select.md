---
status: 完成
---

# `<select>`

## 概要

HTML+ formsからHTML 2.0へ導出されたcompact selection listである。

## 現在の意味

WHATWG HTML Living Standardでは、選択肢の集合から選ぶためのcontrolを表す。 [一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+は `SELECT` を候補集合をcompactに示すselection listとして定義した。RFC 1866はHTML+由来のforms materialとして`SELECT`を標準化した。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)

## HTML直前の祖先

HTML直前の祖先はHTML+ `SELECT`である。HTML+はradio button／checkboxをすべて表示する方式に対するcompact UIとして説明する。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

## さらに上流の由来

### 証拠

HTML+は一般的なrenderingをpull-down combo listと説明するが、特定GUI widgetを直接祖先とはしていない。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

### 解釈

comboboxとの機能的対応は設計文脈だが、特定toolkitからの借用とは断定しない。

## 系譜

HTML+ `SELECT` → HTML 2.0 `SELECT` → 現行HTML `<select>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §10 | Internet-Draft | `SELECT`のHTML+ forms上の設計を確認できる。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) | 2026-08-09 |
| 1995-11 | RFC 1866 | Standards Track RFC | HTML 2.0 formsを定義し、forms materialのHTML+由来を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1866.html) | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+ formsからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

特定GUI toolkitのcomboboxから直接移植されたという説明。対応する一次史料がない。

## 未解決

- 特定GUI widgetとの設計史上の直接関係。
