---
status: 完成
---

# `<th>`

## 概要

HTML+ table modelのheader cellからRFC 1942を経て標準化された要素である。

## 現在の意味

WHATWG HTML Living Standardでは、tableのheader cellを表す。 [HTML Living Standard](../../raw/html-living-standard/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-th-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+ table modelは `TH` をheader cellとして定義した。RFC 1942は自身のtable modelがHTML+の初期作業とHTML 3 draftから発展したと明記し、HTML 3.2が広く実装されたsubsetを採録した。[HTML+ tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 3.2](https://www.w3.org/TR/REC-html32#table)

## HTML直前の祖先

HTML直前の祖先はHTML+ table modelである。RFC 1942でtable modelの一部として拡張された。 RFC 1942の明示的な発展関係により、同名要素の一致だけでなくtable modelとしての因果関係を確認できる。[HTML+ tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html) [HTML+ review](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

## さらに上流の由来

### 証拠

RFC 1942はHTML+の単純モデルに対する後続拡張の一部をCALSにならったと説明する。この記述だけから `TH` の名称をCALSから直接コピーしたとはいえない。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

### 解釈

HTML table modelは複数の既存table modelを研究したが、確認できる直接接続と一般的な設計影響を分ける。

## 系譜

HTML+ `TH` → RFC 1942 → HTML 3.2 `TH` → 現行HTML `<th>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §9](../../raw/html-plus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） | Internet-Draft | `TH`を含む単純table modelを定義する。 | 2026-08-09 |
| 1996-05 | [RFC 1942](../../raw/rfc1942-html-tables/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | table modelがHTML+とHTML 3 draftから発展したと明記する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/html-3.2/index.html)（[公開元](https://www.w3.org/TR/REC-html32#table)） | W3C Recommendation | 広く実装されたtable subsetとして`TH`を採録する。 | 2026-08-09 |

## 確度

**A**

RFC 1942がHTML+ table workからの発展を明記し、後続採録も確認できるため。

## 否定された仮説

`TH`をCALSから直接コピーしたという説明。RFC 1942がCALS由来と明記する拡張と、HTML+から継承した単純モデルを区別する。

## 未解決

- `TH`という個別名称のHTML+以前の祖先。
