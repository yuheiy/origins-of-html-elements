---
status: 完成
---

# `<caption>`

## 概要

HTML+の表モデルのキャプションからRFC 1942を経て標準化された要素で、HTML+の図用途とは区別する。

## 現在の意味

WHATWG HTML Living Standardでは、親が`table`である場合、その表のタイトルを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-caption-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+の表モデルは`CAPTION`を表または図のキャプションとして定義した。RFC 1942は自身の表モデルがHTML+の初期作業とHTML 3草案から発展したと明記し、HTML 3.2が広く実装された部分集合を採録した。[HTML+ tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)）

## HTML直前の祖先

HTML直前の祖先はHTML+の表モデルである。後続表モデルでは表キャプションとなった。 RFC 1942の明示的な発展関係により、同名要素の一致だけでなく表モデルとしての因果関係を確認できる。[HTML+ tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [HTML+のレビュー](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

## さらに上流の由来

### 証拠

Raggettの1993年5月の設計質問は技術出版物の表を入力とし、6月案は表題用`TT`を置いた。11月のHTML+はこれを表と図に共通の`CAPTION`へ変更した。1995年のCALS比較はHTML側の`CAPTION`に対応するCALS要素を示さない。[設計質問](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)） [6月案](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） [CALS比較](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)）

### 解釈

表題という出版上の要求をHTML+内で`TT`から共通`CAPTION`へ一般化した内発設計と説明できる。特定の外部マークアップ語彙から`CAPTION`を採用した証拠はない。

## 系譜

HTML+ `CAPTION`（表用途） → RFC 1942 → HTML 3.2 `CAPTION` → 現行HTML `<caption>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-05-11〜06-18 | HTML+表案：[設計質問](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)・[初期案](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元1](http://1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)・[公開元2](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） | www-talkメール | 技術出版の表を検討対象とし、初期案では表題を`TT`としたことを示す。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §9](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） | Internet-Draft | `CAPTION`を含む単純表モデルを定義する。 | 2026-08-09 |
| 1996-05 | [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | 表モデルがHTML+とHTML 3草案から発展したと明記する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)） | W3C Recommendation | 広く実装された表部分集合として`CAPTION`を採録する。 | 2026-08-09 |

## 確度

**A**

RFC 1942がHTML+の表に関する作業からの発展を明記し、後続採録も確認できるため。

## 否定された仮説

`CAPTION`をCALSから直接コピーしたという説明。RFC 1942がCALS由来と明記する拡張と、HTML+から継承した単純モデルを区別する。

## 未解決

- 初期案の`TT`を表と図に共通する`CAPTION`へ変更した判断記録は残っているか。
