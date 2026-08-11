---
status: 完成
---

# CALSからHTML表の行グループへ

CALS表モデルは`TGROUP`内に`TBODY`と任意の`THEAD`、`TFOOT`を持つ。1995年のRaggett案は三要素をCALSから借用したと明記し、IETF表草案とRFC 1942が継承した。HTML側は`TGROUP`や局所`COLSPEC`を持たない簡略化であり、CALS DTD全体の移植ではない。[OASIS TRP 9501:1995](../../raw/www.oasis-open.org/specs/a501.htm)（[公開元](https://www.oasis-open.org/specs/a501.htm)） [Raggett／Bingham mail](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） [IETF 表草案-00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

```text
CALS THEAD / TBODY / TFOOT
  → HTML向け簡略化
  → IETF表草案
  → RFC 1942
  → HTML 4
```

対象: [`thead`](../elements/thead.md)、[`tbody`](../elements/tbody.md)、[`tfoot`](../elements/tfoot.md)

## 境界

HTML 3.2はRFC 1942の部分集合を採用したが三要素を含まない。HTML 4への採録は集合単位で確認でき、要素ごとの編集判断は未確認である。
