---
status: 完成
---

# `<span>`

## 概要

1995年8月のIETF HTML国際化草案は方向埋め込みを専用`BIDI`要素で表したが、9月草案はこの機能を`SPAN DIR`へ移し、`LANG`／`DIR`を置く適切な要素がない行内テキスト用の汎用コンテナーとした。同年12月にはスタイル草案の新`C`要素を廃して既存`SPAN`をスタイル用途にも再利用する提案があり、国際化とスタイルの要求を合流させてRFC 2070とHTML 4へ至った。

## 現在の意味

WHATWG HTML Living Standardでは、それ自体には意味を持たず子を表す行内コンテナーであり、`class`、`lang`、`dir`などのグローバル属性と組み合わせる場合に有用である。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)、2026-08-09確認）

## HTMLへの導入

1995年8月15日の`draft-ietf-html-i18n-00`は、方向埋め込みを`BIDI DIR`で表した。9月25日のrevision 01は`BIDI`を廃し、方向埋め込みを`SPAN DIR`へ移すとともに、他に適切な要素がない箇所で`LANG`と双方向属性を保持する汎用コンテナーとして`SPAN`を導入した。Michael J Hannahは同年12月5日、スタイル草案の新`C`要素を廃し、国際化提案ですでに定義された`SPAN`へ`STYLE`属性を加えて使うことを提案した。1996年1月のW3Cスタイル草案は段落内のスタイル用にも`SPAN`を定義する。1997年1月のRFC 2070が国際化上の要素を標準化し、HTML 4.01はRFC 2070の統合と`SPAN`の新要素採録を記録する。[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)） [revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)） [style提案メール](../../raw/lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)（[公開元](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)） [W3C スタイル草案](../../raw/www.w3.org/TR/WD-style-960115)（[公開元](https://www.w3.org/TR/WD-style-960115)） [RFC 2070 §4.2.2](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.2)） [HTML 4.01 changes](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)）

## HTML直前の祖先

HTML要素としての直前祖先は、revision 00の`BIDI`要素である。`BIDI DIR=LTR`／`RTL`が担ったUnicodeの方向埋め込みを、revision 01が汎用`SPAN`の`DIR`属性へ移した。同時に`LANG`／`DIR`を保持する行内コンテナーという要求を加え、RFC 2070も`SPAN DIR`とLRE／RLE／PDFの対応を継承した。[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)） [revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)） [RFC 2070 §4.2.4](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)）

## さらに上流の由来

### 証拠

1995年の連続する草案とRFC 2070はUnicodeの文字意味に従い、高水準HTMLマークアップから低水準Unicode機構へ変換できるよう設計した。[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)） [revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)） [RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）

### 解釈

`span`はCSSスタイル指定専用に発明されたのではなく、専用`BIDI`要素から方向埋め込みを引き継ぎつつ、国際化属性を任意の行内範囲へ付ける欠落を埋めた。その直後にスタイル提案が別の新要素を避けて既存`SPAN`を再利用したため、現行の汎用コンテナーには国際化とスタイルの二つの要求が合流したと解釈できる。

## 系譜

Unicode書字方向埋め込み → IETF国際化草案`BIDI DIR`（1995年8月）→（汎用化）`SPAN DIR`＋`LANG`／`DIR`用行内コンテナー要求（1995年9月）→ RFC 2070 `SPAN`

スタイル草案の`C`を廃して既存`SPAN`を再利用する提案（1995年）→ W3Cスタイル草案`SPAN`（1996年）

二つの確認済み枝 → HTML 4 `<span>` → 現行HTML `<span>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-08-15／1995-09-25 | `draft-ietf-html-i18n`：[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)・[revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元1](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00.txt)・[公開元2](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)） | IETF Internet-Draft | revision 00の`BIDI DIR`による方向埋め込みを、revision 01が`SPAN DIR`へ移し、`LANG`／双方向属性用の汎用コンテナーへ拡張する。 | 2026-08-12 |
| 1995-12-05 | [Michael J Hannah, “draft-ietf-html-style-00.txt”](../../raw/lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)（[公開元](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)） | W3C www-スタイル投稿 | スタイル草案の新`C`要素を廃し、既存の国際化`SPAN`へ`STYLE`属性を加えて再利用することを提案。 | 2026-08-09 |
| 1996-01-15 | [*HTML3 and Style Sheets*](../../raw/www.w3.org/TR/WD-style-960115)（[公開元](https://www.w3.org/TR/WD-style-960115)） | W3C Working Draft | 段落内で既存要素が適切でない範囲へスタイルを適用する`SPAN`を定義。 | 2026-08-09 |
| 1997-01 | [RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)） | Standards Track RFC | `LANG`／`DIR`用汎用コンテナーとして`SPAN`を導入し、Unicode埋め込みとの対応を定義。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13)） | W3C Recommendation | RFC 2070の国際化勧告を統合し、`SPAN`をHTML 4.0の新要素として記録。 | 2026-08-09 |

## 確度

**A**

1995年の連続するIETF草案が`BIDI DIR`から`SPAN DIR`への変更、具体的な国際化上の欠落、Unicodeとの設計関係を明記し、RFC 2070とHTML 4への接続も確認できるため。

## 否定された仮説

CSSスタイル指定専用に発明されたという説明。最初に確認できる導入目的は国際化属性を保持する汎用行内コンテナーである。ただし後続スタイル提案が既存`SPAN`を明示的に再利用したため、スタイル系統と無関係だったという説明も採らない。

## 未解決

- `BIDI DIR`を汎用`SPAN`へ変更し、`SPAN`という名称を選んだ個人と具体的な議論は残っているか。
