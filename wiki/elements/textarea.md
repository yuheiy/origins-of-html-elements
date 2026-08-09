# `<textarea>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML+ forms系譜を検証済み（初期案のより古い版は未確認）

## 概要

長いmulti-line値を`INPUT`属性へ置くSGML上の問題からHTML+で分離され、HTML 2.0へ採録された要素である。

## 現在の意味

WHATWG HTML Living Standardでは、raw valueを編集するmultiline plain-text controlを表し、要素内容はcontrolのdefault valueを表す。 [一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element)（2026-08-09確認）

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

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §10 | Internet-Draft | `TEXTAREA`のHTML+ forms上の設計を確認できる。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) | 2026-08-09 |
| 1995-11 | RFC 1866 | Standards Track RFC | HTML 2.0 formsを定義し、forms materialのHTML+由来を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1866.html) | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+ formsからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

特定GUI toolkitのmultiline text widgetをそのまま移植したという説明。直接史料がない。

## 未解決

- 初期`INPUT TYPE=TEXT`案のより古い版と変更時期。

## 調査記録

HTML+ forms、HTML+ review、RFC 1866を確認した。横断比較は[HTML+調査ノート](../research/html-plus-elements.md)を参照する。

敵対的レビュー（2026-08-09）では、HTML+内で`INPUT TYPE=TEXT`から`TEXTAREA`へ分離した記述と、RFC 1866のforms material由来文を再照合した。GUIのmultiline fieldとの類似を祖先とせず、Aを維持した。
