---
status: 完成
---

# HTML表の列と列グループ

1995年7月のIETF草案は幅専用の`COLW`と配置用の`HSPEC`／`VSPEC`を持つが、9月のW3C草案はそれらの機能を担う`COL`を定義した。機能の統合は版間で観察できるが、命名と設計変更の理由は確認できない。10月の草案は、旧`COL`グループの各列が同じ幅になる制約を避けるため`COLGROUP`を新設した。[IETF 表草案-00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)） [W3C Working Draft](../../raw/www.w3.org/TR/WD-tables-950925.html)（[公開元](https://www.w3.org/TR/WD-tables-950925.html)） [draft-03](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-03)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03)）

RFC 1942はCALS表の取り込みを設計目標にし、`COL`／`COLGROUP`の相対幅記法が変換を容易にすると述べる。この関係は変換要件と記法への影響に限定し、要素名や要素分割をCALSから採用したとはしない。[RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

```text
draft-00 COLW＋HSPEC / VSPEC
  → W3C WD COL［統合理由は未確認］
旧COLグループの同一幅制約
  → draft-03 COLGROUP
  → RFC 1942
  → HTML 4
```

対象: [`col`](../elements/col.md)、[`colgroup`](../elements/colgroup.md)
