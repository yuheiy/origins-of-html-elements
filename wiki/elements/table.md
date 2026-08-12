---
status: 完成
---

# `<table>`

## 概要

Dave Raggettが技術出版の要求を集めながらHTML+用に設計した単純表モデルのコンテナーである。後続モデルはCALSの直接移植ではなく、HTML+を基礎にCALSとの交換要求を部分的に取り込んだ。

## 現在の意味

WHATWG HTML Living Standardでは、複数の次元を持つデータを表形式で表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-table-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+の表モデルは`TABLE`を表全体として定義した。RFC 1942は自身の表モデルがHTML+の初期作業とHTML 3草案から発展したと明記し、HTML 3.2が広く実装された部分集合を採録した。[HTML+ tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)）

## HTML直前の祖先

HTML直前の祖先はHTML+の表モデルである。RFC 1942で大幅に拡張された。 RFC 1942の明示的な発展関係により、同名要素の一致だけでなく表モデルとしての因果関係を確認できる。[HTML+ tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [HTML+のレビュー](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

## さらに上流の由来

### 証拠

1993年5月、RaggettはO'Reillyの技術出版経験を求め、表を見出し、行、列、罫線、セル配置、入れ子で特徴づけつつ、HTMLを単純に保つため必要な詳細度を質問した。6月には定義リストを流用せず専用`TBL`、`TT`、`TH`、`TD`を置き、ブラウザーが内容から列幅を決める案を提示した。[Raggett, “Tables and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)） [Raggett, “Re: HTML+ and Tables”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)）

1995年3月、Raggettは単純なHTML 3表をCALS部分集合へ置換する提案を、手書きHTMLを複雑にしてCALS変換器をわずかに簡単にするだけだとして退けた。4月のCALS共同著者による比較は、HTML側がCALSの`TGROUP`をなくし、`ROW`を`TR`、`ENTRY`を`TH`／`TD`へ置き換えたことを記録する。[Raggett, “Re: HTML table model suggestion”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0869.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0869.html)） [Bingham, “Re: HTML/CALS/ICADD Table Prop”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)）

### 解釈

基本表モデルは、技術出版物の表をWebで単純に記述し、ブラウザーが可変な表示環境へ配置するためにHTML+内で組み立てた内発設計と確認できる。後続のHTML 3／RFC 1942段階ではCALSとの交換要求から行グループ、配置、相対幅等を取り込んだため、「HTML表全体がCALS由来」と「CALSは無関係」の双方が誤りである。

## 系譜

HTML+ `TABLE` → HTML 3.0／RFC 1942 → HTML 3.2 `TABLE` → 現行HTML `<table>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-05-11 | [Raggett, “Tables and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)） | www-talkメール | 技術出版の経験を求めながら、表の構成とHTMLで扱う詳細度を検討したことを示す。 | 2026-08-12 |
| 1993-06-18 | [Raggett, “Re: HTML+ and Tables”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） | www-talkメール | 定義リストを流用せず、専用`TBL`と表題・見出し・データセルからなる初期案を提示する。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §9](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） | Internet-Draft | `TABLE`を含む単純表モデルを定義する。 | 2026-08-09 |
| 1995-03-30〜04-29 | CALS比較：[Raggettの回答](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0869.html)・[Binghamの比較](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元1](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0869.html)・[公開元2](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） | HTML WGメール | CALS部分集合の直接採用を退け、両モデルの要素対応と差異を記録する。 | 2026-08-12 |
| 1996-05 | [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | 表モデルがHTML+とHTML 3草案から発展したと明記する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)） | W3C Recommendation | 広く実装された表部分集合として`TABLE`を採録する。 | 2026-08-09 |
| 1998 | [Dave Raggettほか, *A history of HTML*](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)） | 初期Web当事者による回顧 | HTML 3表の草案がCALSモデルとの衝突を受け、交渉後にCALS側の要求へ合わせて変更されたと説明する。 | 2026-08-11 |
| 2004-12-01 | [Dave Raggett, *My involvement with the early days of the Web*](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)） | 設計者による回顧 | CALSはブラウザー開発者には複雑すぎ、HTML+議論の単純な表方式が選ばれたと説明する。 | 2026-08-11 |

## 確度

**A**

RFC 1942がHTML+の表に関する作業からの発展を明記し、後続採録も確認できるため。

## 否定された仮説

`TABLE`をCALSから直接コピーしたという説明。1995年の同時代議論はCALS部分集合への置換を退け、CALS由来の後続拡張とHTML+の内発的な単純モデルを区別する。

## 未解決

- 1993年5月の問いかけに対し、O'Reillyまたは他の技術出版関係者が具体的な表語彙や制作システムを回答した記録は残っているか。
