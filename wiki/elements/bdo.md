# `<bdo>`

> 状態: 完成

## 概要

1995年9月のHTML internationalization draftが、文脈だけでは方向を一意に解けないtextのため、Unicodeのdirectional overrideをHTML markupとして導入し、RFC 2070が標準化した要素である。

## 現在の意味

WHATWG HTML Living Standardでは、子のtext directionalityを明示的に制御し、`dir=ltr`または`dir=rtl`によってUnicode bidirectional algorithmの方向判定を上書きする。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element)（2026-08-09確認）

## HTMLへの導入

1995年9月25日の`draft-ietf-html-i18n-01`は、新要素`BDO`（BIDI override）を導入した。part number、formula、telephone number等では数字、句読点、neutral characterの方向を文脈から一意に決めにくいため、必須の`DIR`属性でleft-to-rightまたはright-to-leftのoverrideを指定することが理由である。一つ前のrevision 00には`BDO`がなく、1997年1月のRFC 2070が発展版を標準化し、HTML 4が統合した。[revision 00](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt) [revision 01](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt) [RFC 2070 §4.2.2, §4.2.4](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13)

## HTML直前の祖先

Unicode／ISO 10646のdirectional overrideが具体的祖先である。1995年draftはUnicode Bidirectional Algorithmを基礎に`BDO`を導入し、RFC 2070は開始・終了をLEFT-TO-RIGHT OVERRIDE（U+202D）／RIGHT-TO-LEFT OVERRIDE（U+202E）とPOP DIRECTIONAL FORMATTING（U+202C）に等価とする。[1995年draft](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt) [RFC 2070 §4.2.4](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)

## さらに上流の由来

### 証拠

1995年draftとRFC 2070はUnicode Bidi Algorithmを基礎とし、HTMLの高水準markupをUnicodeの低水準mechanismへ対応させる設計を記す。

### 解釈

`bdo`は一般的な左右反転ではなく、Unicodeの文字方向overrideをdocument structureを保てるHTML要素へ移したものと解釈できる。

## 系譜

Unicode directional override → `draft-ietf-html-i18n-01` `BDO`（1995-09-25）→ RFC 2070 `BDO` → HTML 4 `<bdo>` → 現行HTML `<bdo>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-09-25 | `draft-ietf-html-i18n-01` | IETF Internet-Draft | 文脈だけで方向を決めにくい文字列のため、必須`DIR`を持つ新要素`BDO`を導入する。revision 00には`BDO`がない。 | [revision 00](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)・[revision 01](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt) | 2026-08-09 |
| 1997-01 | RFC 2070 | Standards Track RFC | `BDO`の導入要求とUnicode LRO／RLO／PDFとの要素単位の対応。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | RFC 2070の国際化勧告を統合し、`BDO`をHTML 4.0のnew elementとして記録。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13) | 2026-08-09 |

## 確度

**A**

1995年draftがUnicode directionalityの問題への解として`BDO`を新規導入し、RFC 2070がLRO／RLO／PDFとの直接対応を明記し、HTML 4が統合したため。

## 否定された仮説

印刷・組版上の左右反転から導入されたという説明。確認できる直接祖先はUnicode／ISO 10646のdirectional overrideである。

## 未解決

- `BDO`という名称を選んだ具体的な議論はあるか。
- revision 00から01へ`BDO`を追加した具体的な提案・議論は残っているか。
