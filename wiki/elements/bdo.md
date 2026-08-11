---
status: 完成
---

# `<bdo>`

## 概要

1995年8月のHTML国際化草案は、埋め込みと上書きを`BIDI`要素の属性で切り替えた。9月草案が埋め込みを`SPAN DIR`へ、上書きを専用の`BDO`（BIDI override）へ分割し、RFC 2070が標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、子のテキスト書字方向を明示的に制御し、`dir=ltr`または`dir=rtl`によってUnicode双方向アルゴリズムの方向判定を上書きする。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element)、2026-08-09確認）

## HTMLへの導入

1995年8月15日の`draft-ietf-html-i18n-00`は、埋め込みを`DIR`、上書きを`FORCE`で指定する一つの`BIDI`要素を定義した。9月25日のrevision 01はこれを廃し、埋め込みを汎用`SPAN`の`DIR`属性へ、上書きを必須`DIR`を持つ専用の`BDO`へ分割した。草案は`BDO`を「BIDI override」の略として導入し、部分的な数値、数式、電話番号等では数字、句読点、中立文字の方向を文脈から一意に決めにくいことを理由に挙げる。1997年1月のRFC 2070が発展版を標準化し、HTML 4が統合した。[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)） [revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)） [RFC 2070 §4.2.2, §4.2.4](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)） [HTML 4.01 changes](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13)）

## HTML直前の祖先

HTML要素としての直前祖先は、revision 00の`BIDI`要素である。`BIDI DIR`がUnicodeの埋め込み、`BIDI FORCE`が上書きに対応していたものを、revision 01が`SPAN DIR`と`BDO DIR`へ分離した。さらに上流では、Unicode／ISO 10646のLEFT-TO-RIGHT OVERRIDE（U+202D）／RIGHT-TO-LEFT OVERRIDE（U+202E）とPOP DIRECTIONAL FORMATTING（U+202C）が具体的祖先である。[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)） [revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)） [RFC 2070 §4.2.4](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)）

## さらに上流の由来

### 証拠

1995年8月草案はUnicodeの埋め込みと上書きを単一`BIDI`要素へ対応させ、9月草案とRFC 2070は埋め込みと上書きを別のHTML構造へ分けた。いずれもUnicode Bidi Algorithmを基礎とし、HTMLの高水準マークアップをUnicodeの低水準仕組みへ対応させる設計を記す。

### 解釈

`bdo`は一般的な左右反転ではなく、初稿では埋め込みと同居したUnicodeの文字方向上書きを、通常の方向埋め込みから分離して専用化したHTML要素と解釈できる。

## 系譜

Unicode書字方向の埋め込み／上書き → `draft-ietf-html-i18n-00` `BIDI DIR`／`BIDI FORCE`（1995-08-15）→（埋め込みと上書きを分離）`draft-ietf-html-i18n-01` `SPAN DIR`／`BDO DIR`（1995-09-25）→ RFC 2070 `BDO` → HTML 4 `<bdo>` → 現行HTML `<bdo>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-08-15／1995-09-25 | `draft-ietf-html-i18n`：[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)・[revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元1](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)・[公開元2](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)） | IETF Internet-Draft | revision 00の`BIDI DIR`／`BIDI FORCE`を、revision 01が`SPAN DIR`と`BDO DIR`へ分割する。`BDO`を「BIDI override」の略と明記し、専用化の用途を説明する。 | 2026-08-12 |
| 1997-01 | [RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)） | Standards Track RFC | `BDO`の導入要求とUnicode LRO／RLO／PDFとの要素単位の対応。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13)） | W3C Recommendation | RFC 2070の国際化勧告を統合し、`BDO`をHTML 4.0の新要素として記録。 | 2026-08-09 |

## 確度

**A**

1995年の連続する草案が`BIDI FORCE`から専用`BDO`への変更を示し、RFC 2070がLRO／RLO／PDFとの直接対応を明記し、HTML 4が統合したため。

## 否定された仮説

印刷・組版上の左右反転から導入されたという説明。確認できる直接祖先はUnicode／ISO 10646の書字方向の上書きである。

## 未解決

- revision 00の`BIDI FORCE`を`BDO`へ分離し、この略称を選んだ個人と具体的な議論は残っているか。
