# `<caption>`

> 状態: HTML+ table系譜を検証済み（追加の上流調査あり）

## 概要

HTML+ table modelのcaptionからRFC 1942を経て標準化された要素で、HTML+のfigure用途とは区別する。

## 現在の意味

WHATWG HTML Living Standardでは、親が`table`である場合、そのtableのtitleを表す。 [一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-caption-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+ table modelは `CAPTION` をtableまたはfigureのcaptionとして定義した。RFC 1942は自身のtable modelがHTML+の初期作業とHTML 3 draftから発展したと明記し、HTML 3.2が広く実装されたsubsetを採録した。[HTML+ tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 3.2](https://www.w3.org/TR/REC-html32#table)

## HTML直前の祖先

HTML直前の祖先はHTML+ table modelである。後続table modelではtable captionとなった。 RFC 1942の明示的な発展関係により、同名要素の一致だけでなくtable modelとしての因果関係を確認できる。[HTML+ tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html) [HTML+ review](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

## さらに上流の由来

### 証拠

RFC 1942はHTML+の単純モデルに対する後続拡張の一部をCALSにならったと説明する。この記述だけから `CAPTION` の名称をCALSから直接コピーしたとはいえない。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

### 解釈

HTML table modelは複数の既存table modelを研究したが、確認できる直接接続と一般的な設計影響を分ける。

## 系譜

HTML+ `CAPTION`（table用途） → RFC 1942 → HTML 3.2 `CAPTION` → 現行HTML `<caption>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §9 | Internet-Draft | `CAPTION`を含む単純table modelを定義する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html) | 2026-08-09 |
| 1996-05 | RFC 1942 | Experimental RFC | table modelがHTML+とHTML 3 draftから発展したと明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | 広く実装されたtable subsetとして`CAPTION`を採録する。 | [一次資料](https://www.w3.org/TR/REC-html32#table) | 2026-08-09 |

## 確度

**A**

RFC 1942がHTML+ table workからの発展を明記し、後続採録も確認できるため。

## 否定された仮説

`CAPTION`をCALSから直接コピーしたという説明。RFC 1942がCALS由来と明記する拡張と、HTML+から継承した単純モデルを区別する。

## 未解決

- HTML+のfigure captionを現行`figcaption`と同一視しない。figure用途との分岐を追加調査する。

## 調査記録

HTML+ tables、1994年review、RFC 1942、HTML 3.2を確認した。横断比較は[HTML+調査ノート](../research/html-plus-elements.md)を参照する。
