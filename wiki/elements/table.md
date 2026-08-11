---
status: 完成
---

# `<table>`

## 概要

HTML+の単純表モデルからRFC 1942を経て標準化された表コンテナーである。

## 現在の意味

WHATWG HTML Living Standardでは、複数の次元を持つデータを表形式で表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-table-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+の表モデルは`TABLE`を表全体として定義した。RFC 1942は自身の表モデルがHTML+の初期作業とHTML 3草案から発展したと明記し、HTML 3.2が広く実装された部分集合を採録した。[HTML+ tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 3.2](https://www.w3.org/TR/REC-html32#table)

## HTML直前の祖先

HTML直前の祖先はHTML+の表モデルである。RFC 1942で大幅に拡張された。 RFC 1942の明示的な発展関係により、同名要素の一致だけでなく表モデルとしての因果関係を確認できる。[HTML+ tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html) [HTML+のレビュー](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

## さらに上流の由来

### 証拠

RFC 1942はHTML+の単純モデルに対する後続拡張の一部をCALSにならったと説明する。この記述だけから`TABLE`の名称をCALSから直接コピーしたとはいえない。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) Raggettは2004年の回顧で、CALS表モデルはブラウザー開発者には複雑すぎ、www-talkのHTML+議論で提案された単純な方式が選ばれたと説明する。[Raggett, *My involvement with the early days of the Web*](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)）一方、Raggettらの1998年の回顧は、後のHTML 3表の草案がCALSモデルとの衝突を受けて変更されたと記録する。[Raggettほか, *A history of HTML*](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)）

### 解釈

HTML+の単純表モデルはCALSの縮小コピーではなく、複雑なCALSに対してWebブラウザー向けに選ばれた別案と説明できる。後続のHTML 3／RFC 1942段階ではCALS関係者との調整と取り込み要求から一部を拡張したため、「HTML表全体がCALS由来」と「CALSは無関係」の双方が過度な単純化になる。

## 系譜

HTML+ `TABLE` → HTML 3.0／RFC 1942 → HTML 3.2 `TABLE` → 現行HTML `<table>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §9](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） | Internet-Draft | `TABLE`を含む単純表モデルを定義する。 | 2026-08-09 |
| 1996-05 | [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | 表モデルがHTML+とHTML 3草案から発展したと明記する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)） | W3C Recommendation | 広く実装された表部分集合として`TABLE`を採録する。 | 2026-08-09 |
| 1998 | [Dave Raggettほか, *A history of HTML*](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)） | 初期Web当事者による回顧 | HTML 3表の草案がCALSモデルとの衝突を受け、交渉後にCALS側の要求へ合わせて変更されたと説明する。 | 2026-08-11 |
| 2004-12-01 | [Dave Raggett, *My involvement with the early days of the Web*](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)） | 設計者による回顧 | CALSはブラウザー開発者には複雑すぎ、HTML+議論の単純な表方式が選ばれたと説明する。 | 2026-08-11 |

## 確度

**A**

RFC 1942がHTML+の表に関する作業からの発展を明記し、後続採録も確認できるため。

## 否定された仮説

`TABLE`をCALSから直接コピーしたという説明。RFC 1942がCALS由来と明記する拡張と、HTML+から継承した単純モデルを区別する。

## 未解決

- HTML+以前の単純表モデルに影響した具体的マークアップシステム。
