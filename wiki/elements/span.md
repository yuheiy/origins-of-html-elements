# `<span>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。1995年IETF国際化草案での導入とstyle用途との合流を検証済み

## 概要

1995年9月のIETF HTML国際化草案が`LANG`／`DIR`を置く適切な要素がないinline textのために導入したgeneric containerである。同年12月にはstyle草案の新`C`要素を廃して既存`SPAN`をstyle用途にも再利用する提案があり、国際化とstyleの要求を合流させてRFC 2070とHTML 4へ至った。

## 現在の意味

WHATWG HTML Living Standardでは、それ自体には意味を持たず子を表すinline containerであり、`class`、`lang`、`dir`などのglobal attributesと組み合わせる場合に有用である。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)（2026-08-09確認）

## HTMLへの導入

確認できた最初期の公開仕様は1995年9月25日のIETF Internet-Draft `draft-ietf-html-i18n-01`である。同草案は、他に適切な要素がない箇所で`LANG`とbidirectional attributesを保持するgeneric containerが必要だと述べ、その目的のため`SPAN`を導入した。Michael J Hannahは同年12月5日、style草案の新`C`要素を廃し、国際化提案ですでに定義された`SPAN`へ`STYLE`属性を加えて使うことを提案した。1996年1月のW3C style草案はparagraph内のstyle用にも`SPAN`を定義する。1997年1月のRFC 2070が国際化上の要素を標準化し、HTML 4.01はRFC 2070の統合と`SPAN`のnew element採録を記録する。[1995年国際化草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt) [style提案mail](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html) [W3C style草案](https://www.w3.org/TR/WD-style-960115) [RFC 2070 §4.2.2](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.2) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

Unicodeのdirectional embeddingをHTML markupへ移す設計と、`LANG`／`DIR`を保持するinline containerという具体的要求が直前の設計源である。1995年草案は`SPAN DIR=LTR`／`RTL`と終了tagをLRE／RLE／PDFのmarkup表現として例示し、RFC 2070もこの対応を継承する。[1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt) [RFC 2070 §4.2.4](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)

## さらに上流の由来

### 証拠

1995年草案とRFC 2070はUnicodeのcharacter semanticsに従い、高水準HTML markupから低水準Unicode mechanismへ変換できるよう設計した。[1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt) [RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html)

### 解釈

`span`はCSS styling専用に発明されたのではなく、まず国際化属性をinline範囲へ付ける欠落を埋めた。その直後にstyle提案が別の新要素を避けて既存`SPAN`を再利用したため、現行のgeneric containerには国際化とstyleの二つの要求が合流したと解釈できる。

## 系譜

Unicode directional embedding＋`LANG`／`DIR`用inline container要求 → IETF国際化草案 `SPAN`（1995年） → RFC 2070 `SPAN`

style草案の`C`を廃して既存`SPAN`を再利用する提案（1995年）→ W3C style草案 `SPAN`（1996年）

二つの確認済み枝 → HTML 4 `<span>` → 現行HTML `<span>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-09-25 | *Internationalization of the Hypertext Markup Language* `draft-ietf-html-i18n-01` | IETF Internet-Draft | `LANG`／bidi属性用generic containerの必要から`SPAN`を新規導入し、Unicode embeddingとの対応とDTDを記す。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt) | 2026-08-09 |
| 1995-12-05 | Michael J Hannah, “draft-ietf-html-style-00.txt” | W3C www-style投稿 | style草案の新`C`要素を廃し、既存の国際化`SPAN`へ`STYLE`属性を加えて再利用することを提案。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html) | 2026-08-09 |
| 1996-01-15 | *HTML3 and Style Sheets* | W3C Working Draft | paragraph内で既存要素が適切でない範囲へstyleを適用する`SPAN`を定義。 | [W3C](https://www.w3.org/TR/WD-style-960115) | 2026-08-09 |
| 1997-01 | RFC 2070 | Standards Track RFC | `LANG`／`DIR`用generic containerとして`SPAN`を導入し、Unicode embeddingとの対応を定義。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | RFC 2070の国際化勧告を統合し、`SPAN`をHTML 4.0のnew elementとして記録。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.13) | 2026-08-09 |

## 確度

**A**

1995年IETF草案が具体的な国際化上の欠落、Unicodeとの設計関係、`SPAN`の導入目的を明記し、RFC 2070とHTML 4への接続も確認できるため。

## 否定された仮説

CSS styling専用に発明されたという説明。最初に確認できる導入目的は国際化属性を保持するgeneric inline containerである。ただし後続style提案が既存`SPAN`を明示的に再利用したため、style系統と無関係だったという説明も採らない。

## 未解決

- `SPAN`という名称を選んだ具体的な議論はあるか。
- `draft-ietf-html-i18n-00`から`-01`の間に`SPAN`を追加した具体的な議論はあるか。

## 調査記録

RFC 2070、HTML 4.01のdirectionality節と変更付録を確認した。横断比較は[国際化・アクセシビリティ調査ノート](../research/internationalization-accessibility-elements.md)を参照する。

敵対的レビュー中の反証探索（2026-08-09）で、RFC 2070より早い`draft-ietf-html-i18n-01`の`SPAN`導入文とDTDを確認した。RFC 2070初出とした記述を訂正し、同草案からRFC、HTML 4への経路へ改めた。

訂正後の別レビュー（2026-08-09）では、`-00`に両要素がないこと、`-01`の導入要求、style proposalによる既存`SPAN`再利用、RFC 2070、HTML 4を再照合した。国際化とstyleの枝を分離し、名称の上流と個別議論を未解決に残した状態でA判定と系譜が証拠表に整合することを確認した。
