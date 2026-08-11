---
status: 完成
---

# `<select>`

## 概要

HTML+のフォームからHTML 2.0へ導出された簡潔選択リストである。

## 現在の意味

WHATWG HTML Living Standardでは、選択肢の集合から選ぶためのコントロールを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+は`SELECT`を候補集合を簡潔に示す選択リストとして定義した。RFC 1866はHTML+由来のフォーム資料として`SELECT`を標準化した。[HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)）

## HTML直前の祖先

HTML直前の祖先はHTML+ `SELECT`である。HTML+はラジオボタン／チェックボックスをすべて表示する方式に対する簡潔UIとして説明する。[HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）

## さらに上流の由来

### 証拠

HTML+は一般的な描画をプルダウンコンボリストと説明するが、特定GUIウィジェットを直接祖先とはしていない。[HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）

### 解釈

コンボボックスとの機能的対応は設計文脈だが、特定ツールキットからの借用とは断定しない。

## 系譜

HTML+ `SELECT` → HTML 2.0 `SELECT` → 現行HTML `<select>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §10](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） | Internet-Draft | `SELECT`のHTML+のフォーム上の設計を確認できる。 | 2026-08-09 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | Standards Track RFC | HTML 2.0フォームを定義し、フォーム資料のHTML+由来を明記する。 | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+のフォームからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

特定GUIツールキットのコンボボックスから直接移植されたという説明。対応する一次史料がない。

## 未解決

- 特定GUIウィジェットとの設計史上の直接関係。
