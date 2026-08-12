---
status: 完成
---

# HTML+から基本表モデルへ

HTML+の単純表モデルは`TABLE`、`CAPTION`、`TR`、`TH`、`TD`を含む。RFC 1942は表モデルがHTML+と初期HTML 3草案から発展したと述べ、HTML 3.2はこの五要素を含む広く実装された部分集合を採録した。[HTML+ Tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 3.2 Tables](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)）

この基本モデルはCALSの縮小移植として始まったのではない。Raggettは1993年5月にO'Reillyの技術出版経験を求めながら必要な表構造を問い、6月には定義リストを流用しない専用`TBL`、`TT`、`TH`、`TD`案を提示した。1995年にはCALS部分集合への置換を複雑すぎるとして退ける一方、CALS共同著者との調整で`ROW`を`TR`、`ENTRY`を`TH`／`TD`へ対応させ、行グループや配置等を後続HTML表モデルへ取り込んだ。[設計質問](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)） [初期案](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） [CALS部分集合への回答](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0869.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0869.html)） [CALS比較](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)）

```text
技術出版の表要求 → HTML+の内発的な基本表＋初期HTML 3草案
  → RFC 1942
  → HTML 3.2 TABLE / CAPTION / TR / TH / TD
  → 後続HTML

CALS ROW / ENTRY
  → HTML 3／RFC 1942のTR / TH・TD対応
```

対象: [`table`](../elements/table.md)、[`caption`](../elements/caption.md)、[`tr`](../elements/tr.md)、[`th`](../elements/th.md)、[`td`](../elements/td.md)

## 境界

`tr`はHTML+作業中に行区切りから行コンテナーへ変化し、後続モデルではCALS `ROW`との対応が明記された。CALS由来の行グループと後発の列グループは別の共有系譜として扱う。
