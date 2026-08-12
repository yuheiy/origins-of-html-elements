---
status: 完成
---

# `<th>`

## 概要

HTML+の表モデルのヘッダーセルからRFC 1942を経て標準化された要素である。

## 現在の意味

WHATWG HTML Living Standardでは、表のヘッダーセルを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-th-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+の表モデルは`TH`をヘッダーセルとして定義した。RFC 1942は自身の表モデルがHTML+の初期作業とHTML 3草案から発展したと明記し、HTML 3.2が広く実装された部分集合を採録した。[HTML+ tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)）

## HTML直前の祖先

HTML直前の祖先はHTML+の表モデルである。RFC 1942で表モデルの一部として拡張された。 RFC 1942の明示的な発展関係により、同名要素の一致だけでなく表モデルとしての因果関係を確認できる。[HTML+ tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [HTML+のレビュー](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

## さらに上流の由来

### 証拠

1993年6月の初期案は`TH`を列見出しとして新しいHTML表語彙へ置いた。1995年のCALS共同著者による比較は、後続HTMLモデルがCALS `ENTRY`を見出しセル`TH`とデータセル`TD`へ分けたと明記する。[初期案](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） [CALS比較](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)）

### 解釈

`TH`のトークンと見出し／データの区別はHTML+の初期案にすでにある。後続モデルでは、同じ役割分離がCALSの単一`ENTRY`をHTMLの`TH`／`TD`へ写す方法として明示された。

## 系譜

HTML+ `TH` → RFC 1942 → HTML 3.2 `TH` → 現行HTML `<th>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-06-18 | [Raggett, “Re: HTML+ and Tables”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） | www-talkメール | `TH`を列見出しとする初期表案を提示する。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §9](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） | Internet-Draft | `TH`を含む単純表モデルを定義する。 | 2026-08-09 |
| 1995-04-29 | [Bingham, “Re: HTML/CALS/ICADD Table Prop”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） | HTML WGメール | CALS `ENTRY`をHTMLの`TH`／`TD`へ分ける対応を明記する。 | 2026-08-12 |
| 1996-05 | [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | 表モデルがHTML+とHTML 3草案から発展したと明記する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)） | W3C Recommendation | 広く実装された表部分集合として`TH`を採録する。 | 2026-08-09 |

## 確度

**A**

RFC 1942がHTML+の表に関する作業からの発展を明記し、後続採録も確認できるため。

## 否定された仮説

`TH`をCALSから直接コピーしたという説明。RFC 1942がCALS由来と明記する拡張と、HTML+から継承した単純モデルを区別する。

## 未解決

- `TH`という短縮名を選んだ記録と、6月案より前の草稿は残っているか。
