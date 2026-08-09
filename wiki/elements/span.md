# `<span>`

> 状態: RFC 2070の国際化系譜を検証済み（名称の上流は未解決）

## 概要

RFC 2070が`LANG`／`DIR`を置く適切な要素がないinline textのために導入し、HTML 4が採録したgeneric containerである。

## 現在の意味

WHATWG HTML Living Standardでは、それ自体には意味を持たず子を表すinline containerであり、`class`、`lang`、`dir`などのglobal attributesと組み合わせる場合に有用である。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)（2026-08-09確認）

## HTMLへの導入

1997年1月のRFC 2070は、他に適切な要素がない箇所で`LANG`と`DIR`を保持するgeneric containerが必要だと述べ、その目的のため`SPAN`を導入した。HTML 4.01はRFC 2070の国際化勧告を統合し、`SPAN`をHTML 4.0のnew elementとして記録する。[RFC 2070 §4.2.2](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.2) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

Unicodeのdirectional embeddingをHTML markupへ移す設計と、`LANG`／`DIR`を保持するinline containerという具体的要求が直前の設計源である。RFC 2070はinline `DIR`をUnicode／ISO 10646のLRE／RLEとPDFに等価とする。[RFC 2070 §4.2.4](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)

## さらに上流の由来

### 証拠

RFC 2070はUnicodeのcharacter semanticsに従い、高水準HTML markupから低水準Unicode mechanismへ素直に変換できるよう設計したと明記する。[RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html)

### 解釈

`span`は後世のCSS styling専用要素として発明されたのではなく、当初は国際化属性をinline範囲へ付ける欠落を埋めた。その汎用性が後続用途を可能にしたと解釈できる。

## 系譜

Unicode directional embedding＋`LANG`／`DIR`用inline container要求 → RFC 2070 `SPAN` → HTML 4 `<span>` → 現行HTML `<span>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-01 | RFC 2070 | Standards Track RFC | `LANG`／`DIR`用generic containerとして`SPAN`を導入し、Unicode embeddingとの対応を定義。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | RFC 2070の国際化勧告を統合し、`SPAN`をHTML 4.0のnew elementとして記録。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13) | 2026-08-09 |

## 確度

**A**

RFC 2070が具体的な国際化上の欠落、Unicodeとの設計関係、`SPAN`の導入目的を明記し、HTML 4がその勧告を統合したため。

## 否定された仮説

CSS styling専用に発明されたという説明。RFC 2070が明記する導入目的は`LANG`と`DIR`を保持するgeneric inline containerである。

## 未解決

- `SPAN`という名称を選んだ具体的な議論はあるか。
- RFC 2070以前のInternet-Draftで最初に現れた版と変更理由は何か。

## 調査記録

RFC 2070、HTML 4.01のdirectionality節と変更付録を確認した。横断比較は[国際化・アクセシビリティ調査ノート](../research/internationalization-accessibility-elements.md)を参照する。
