# `<bdo>`

> 状態: RFC 2070とUnicode directional overrideの系譜を検証済み（名称の発案過程は未解決）

## 概要

RFC 2070が文脈だけでは方向を一意に解けないtextのため、Unicodeのdirectional overrideをHTML markupとして導入した要素である。

## 現在の意味

WHATWG HTML Living Standardでは、子のtext directionalityを明示的に制御し、`dir=ltr`または`dir=rtl`によってUnicode bidirectional algorithmの方向判定を上書きする。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element)（2026-08-09確認）

## HTMLへの導入

1997年1月のRFC 2070は新しいphrase-level element `BDO`（BIDI Override）を導入した。文脈から方向を一意に解けない短い文字列のdirectionalityを強制することが理由である。HTML 4がRFC 2070を統合した。[RFC 2070 §4.2.2, §4.2.4](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13)

## HTML直前の祖先

Unicode／ISO 10646のLEFT-TO-RIGHT OVERRIDE（U+202D）、RIGHT-TO-LEFT OVERRIDE（U+202E）、POP DIRECTIONAL FORMATTING（U+202C）が具体的祖先である。RFC 2070自身が`BDO`の開始・終了をこれらに等価とする。[RFC 2070 §4.2.4](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)

## さらに上流の由来

### 証拠

RFC 2070はUnicode Bidi Algorithmに従い、HTMLの高水準markupをUnicodeの低水準mechanismへ変換できるよう設計したと明記する。

### 解釈

`bdo`は一般的な左右反転ではなく、Unicodeの文字方向overrideをdocument structureを保てるHTML要素へ移したものと解釈できる。

## 系譜

Unicode LRO／RLO／PDF → RFC 2070 `BDO` → HTML 4 `<bdo>` → 現行HTML `<bdo>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-01 | RFC 2070 | Standards Track RFC | `BDO`の導入要求とUnicode LRO／RLO／PDFとの要素単位の対応。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | RFC 2070の国際化勧告を統合し、`BDO`をHTML 4.0のnew elementとして記録。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13) | 2026-08-09 |

## 確度

**A**

導入要求とUnicode directional override charactersからの直接対応をRFC 2070が明記し、HTML 4がその勧告を統合したため。

## 否定された仮説

印刷・組版上の左右反転から導入されたという説明。確認できる直接祖先はUnicode／ISO 10646のdirectional overrideである。

## 未解決

- `BDO`という名称を選んだ具体的な議論はあるか。
- RFC 2070以前のInternet-Draftで最初に現れた版は何か。

## 調査記録

RFC 2070、HTML 4.01のdirectionality節と変更付録を確認した。横断比較は[国際化・アクセシビティ調査ノート](../research/internationalization-accessibility-elements.md)を参照する。
