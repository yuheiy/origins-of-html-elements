# `<option>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML+ forms系譜を検証済み（特定GUI toolkitからの上流は未確認）

## 概要

HTML+ formsからHTML 2.0へ導出されたselection candidate要素である。

## 現在の意味

WHATWG HTML Living Standardでは、`select`内の選択肢、または`datalist`内の候補一覧の一項目を表す。 [一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+は `SELECT`内の各候補を`OPTION`で表した。RFC 1866はHTML+由来のforms materialとして`OPTION`を標準化した。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)

## HTML直前の祖先

HTML直前の祖先はHTML+ `OPTION`である。HTML+は各alternativeを`OPTION`で表すと明記する。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)

## さらに上流の由来

### 証拠

HTML+以前の個別markup祖先は今回確認していない。

### 解釈

なし。

## 系譜

HTML+ `OPTION` → HTML 2.0 `OPTION` → 現行HTML `<option>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §10 | Internet-Draft | `OPTION`のHTML+ forms上の設計を確認できる。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) | 2026-08-09 |
| 1995-11 | RFC 1866 | Standards Track RFC | HTML 2.0 formsを定義し、forms materialのHTML+由来を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1866.html) | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+ formsからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

なし。

## 未解決

- HTML+以前の個別markup祖先。

## 調査記録

HTML+ forms、HTML+ review、RFC 1866を確認した。横断比較は[HTML+調査ノート](../research/html-plus-elements.md)を参照する。

2026-08-09の敵対的レビューでは、HTML+ `OPTION`の`SELECT`内choice modelとRFC 1866のforms material導出謝辞を原文へ戻って照合した。特定GUI menuやNCSA formsを個別祖先とする記録は確認できず、その限定を保ったままA判定を維持した。
