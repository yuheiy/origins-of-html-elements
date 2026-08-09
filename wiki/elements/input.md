# `<input>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML+ forms系譜を検証済み（特定GUI toolkitからの上流は未確認）

## 概要

HTML+ formsからHTML 2.0へ導出されたtyped input fieldで、各widget typeの上流は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、型を持つdata fieldを表し、通常はユーザーがデータを編集するためのform controlを伴う。 [一次定義](https://html.spec.whatwg.org/multipage/input.html#the-input-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+は `INPUT` を`TYPE`で多様な入力fieldを表す要素として定義した。RFC 1866はHTML 2.0 formsへ`INPUT`を採録し、forms materialのHTML+由来を明記する。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)

## HTML直前の祖先

HTML直前の祖先はHTML+ `INPUT`である。RFC 1866の謝辞により、HTML+ formsからHTML 2.0への因果関係も確認できる。[RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)

## さらに上流の由来

### 証拠

HTML+の各typeはtext field、checkbox、radioなどのUI idiomを利用するが、個別widgetを特定GUI toolkitから借用したとは資料に書かれていない。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

### 解釈

既存UI idiomの利用と、特定widgetからの直接採用は区別する。

## 系譜

HTML+ `INPUT` → HTML 2.0 `INPUT` → 現行HTML `<input>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §10 | Internet-Draft | `INPUT`のHTML+ forms上の設計を確認できる。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) | 2026-08-09 |
| 1995-11 | RFC 1866 | Standards Track RFC | HTML 2.0 formsを定義し、forms materialのHTML+由来を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1866.html) | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+ formsからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

各input typeを特定OSまたはGUI toolkitの同名widgetから直接コピーしたという説明。直接史料がない。

## 未解決

- HTML+以前の各widget typeの具体的設計資料。
- NCSA X Mosaic formsとの正確な時系列。

## 調査記録

HTML+ forms、HTML+ review、RFC 1866を確認した。横断比較は[HTML+調査ノート](../research/html-plus-elements.md)を参照する。

2026-08-09の敵対的レビューでは、HTML+ `INPUT`のtype modelとRFC 1866のforms material導出謝辞を原文へ戻って照合した。特定GUI toolkitやNCSA formsを個別祖先とする記録は確認できず、その限定を保ったまま集合由来と個別要素の対応によるA判定を維持した。
