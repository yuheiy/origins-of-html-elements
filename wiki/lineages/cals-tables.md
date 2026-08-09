# CALSとHTMLの表構造要素

## 範囲

このページは、CALSの設計要求から複数のHTML table要素へ分岐する共有関係と、IETF table draft内の要素間変更だけを示す。個別の初出、現在の意味、確度、証拠表、未解決点は各要素ページを正本とする。

## Row groups

1995年7月のIETF table draftはCALS table modelのfeaturesを取り込み、表の行を`THEAD`、`TBODY`、`TFOOT`へ分けると明記し、RFC 1942もこのrow groupingを継承した。CALSから三要素を含むHTML proposalへの集合単位の因果は確認できるが、CALS側の具体的な要素名は確認できない。[IETF table draft-00](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00) [RFC 1942](../../raw/rfc1942-html-tables/rfc1942.txt)

対象: [`thead`](../elements/thead.md)、[`tbody`](../elements/tbody.md)、[`tfoot`](../elements/tfoot.md)

## Column model

IETF table draftは`-00`の`COLW`から`-01`の`COL`へmodelを変更し、`-03`は旧`COL`のgroupでは各columnを同じ幅にする制約を避けるため`COLGROUP`を新設した。`COLW`から`COL`への改名・採用理由は確認できない一方、旧`COL`の制約から`COLGROUP`を導入した因果は直接確認できる。[IETF table draft-00](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00) [draft-01](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01) [draft-03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03)

RFC 1942はCALS tableのimportを設計目標とし、`COL`／`COLGROUP`の相対幅記法がCALS representationからのimportを容易にすると述べる。この関係は変換要件と記法への影響に限定し、要素名または要素分割そのものをCALSから採用したとはしない。[RFC 1942](../../raw/rfc1942-html-tables/rfc1942.txt)

対象: [`col`](../elements/col.md)、[`colgroup`](../elements/colgroup.md)

## 共有系譜

```text
CALSのhead/body/foot row grouping
  → IETF table draft-00 THEAD/TBODY/TFOOT
  → RFC 1942 THEAD/TBODY/TFOOT

CALSからのimport要件
  → IETF table draft系列／RFC 1942 COL/COLGROUPの相対幅記法

draft-00 COLW [改名・採用因果は未確認] draft-01 COL

draft-01 COLのgroup model上の制約
  → draft-03 COLGROUP
```

HTML 3.2はRFC 1942のsubsetを採用したと述べるが、DTDに対象五要素を含まない。HTML 4.01は五要素をHTML 3.2からの新要素として列挙するため、RFC 1942での提案とHTML 3.2への採録を同一視せず、RFC 1942からHTML 4への個別採録因果も未確認のまま分離する。[HTML 3.2](../../raw/html-3.2/index.html) [HTML 4.01 changes](../../raw/html-4.01/appendix/changes.html)
