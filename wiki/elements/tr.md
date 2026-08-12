---
status: 完成
---

# `<tr>`

## 概要

HTML+作業中に行区切りから行コンテナーへ変化し、RFC 1942を経て標準化された要素である。

## 現在の意味

WHATWG HTML Living Standardでは、表内のセルの行を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+の表モデルは`TR`を1993年版では行区切りとして定義した。RFC 1942は自身の表モデルがHTML+の初期作業とHTML 3草案から発展したと明記し、HTML 3.2が広く実装された部分集合を採録した。[HTML+ tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)）

## HTML直前の祖先

HTML直前の祖先はHTML+の表モデルである。1994年レビューまでに行コンテナーへ変更された。 RFC 1942の明示的な発展関係により、同名要素の一致だけでなく表モデルとしての因果関係を確認できる。[HTML+ tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [HTML+のレビュー](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

## さらに上流の由来

### 証拠

1993年6月案は行要素を置かず、セルを順に並べて列数から行を決めた。11月のHTML+は空の`TR`を行区切りとして追加し、1994年までに行コンテナーへ変えた。1995年のCALS共同著者による比較は、後続HTMLモデルの`TR`がCALS `ROW`に対応すると明記する。[6月案](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） [CALS比較](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)）

### 解釈

`TR`はHTML+内で追加・再設計されたが、現行の行コンテナーという役割にはCALS `ROW`との要素単位の対応も確認できる。名称をCALSから借りたのではなく、外部の行モデルをHTML+由来の短いトークンへ写したものと説明できる。

## 系譜

HTML+ `TR`（区切り） → HTML+ `TR`（コンテナー） → RFC 1942 → HTML 3.2 → 現行HTML `<tr>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-06-18 | [Raggett, “Re: HTML+ and Tables”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） | www-talkメール | 行要素を置かずセル列から行を決める初期案を示す。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §9](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） | Internet-Draft | `TR`を含む単純表モデルを定義する。 | 2026-08-09 |
| 1995-04-29 | [Bingham, “Re: HTML/CALS/ICADD Table Prop”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） | HTML WGメール | CALS `ROW`からHTML `TR`への要素単位の対応を明記する。 | 2026-08-12 |
| 1996-05 | [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | 表モデルがHTML+とHTML 3草案から発展したと明記する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)） | W3C Recommendation | 広く実装された表部分集合として`TR`を採録する。 | 2026-08-09 |

## 確度

**A**

RFC 1942がHTML+の表に関する作業からの発展を明記し、後続採録も確認できるため。

## 否定された仮説

`TR`という名称をCALSから直接コピーしたという説明。CALS側の要素名は`ROW`であり、確認できるのは現行型の行コンテナーへの設計対応である。

## 未解決

- 区切りからコンテナーへ変更された具体的な議論記録。
