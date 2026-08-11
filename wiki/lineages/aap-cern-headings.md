---
status: 完成
---

# AAP／CERNからHTML見出し群へ

## 共有された採用

CERNのHTML資料は、`H1`〜`H6`をCERN SGMLガイドから定義どおり保持し、その見出し定義をAAPタグセット由来と明記する。AAP Book DTDの保存版には5識別子の見出し集合が実在するため、AAPからCERNを経て初期HTMLへ至る集合単位の因果を確認できる。ただし、AAP側の5識別子とHTML側の6段階は一致せず、番号ごとの対応は確定しない。[AAP Book DTD](../../raw/ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)（[公開元](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)） [CERN, *Tags used in HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)）

```text
AAPの見出し集合
  → CERN SGMLガイド H1〜H6
  → 初期HTML H1〜H6
  → 現行HTML h1〜h6
```

対象: [`h1`〜`h6`](../elements/h1-h6.md)

## 接続しない境界

Waterloo SCRIPT GMLにも`H1`〜`H6`が存在するが、CERNまたはHTMLがそこから採用した記録は確認できない。[Waterloo SCRIPT GML User’s Guide](../../raw/web.archive.org/web/20020504095301/http%3A/www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)）
