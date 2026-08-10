---
status: 完成
---

# CALSとHTMLの表構造要素

## Row groups

OASIS TRP 9501:1995はCALS table modelのbaselineを1993年のMIL-M-28001Bとし、各`TGROUP`が`TBODY`と任意の`THEAD`、`TFOOT`を持つ構造を記す。1995年4月21日のRaggett proposalは三要素をCALSから借用したと明記し、4月29日に転載・批評したHarvey Binghamは、CALSの`TGROUP`を除去し、`THEAD`／`TFOOT`内の局所`COLSPEC`を持たないHTML向け簡略化だと対照した。7月のIETF table draftとRFC 1942がこのrow groupingを継承したため、CALSの各要素からHTMLの同名要素への個別対応を確認できるが、CALS DTD全体の移植とは扱わない。[OASIS TRP 9501:1995](../../raw/www.oasis-open.org/specs/a501.htm)（[公開元](https://www.oasis-open.org/specs/a501.htm)） [OASIS TM 9502:1995](../../raw/www.oasis-open.org/specs/a502.htm)（[公開元](https://www.oasis-open.org/specs/a502.htm)） [Raggett／Bingham mail](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） [IETF table draft-00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

対象: [`thead`](../elements/thead.md)、[`tbody`](../elements/tbody.md)、[`tfoot`](../elements/tfoot.md)

## Column model

1995年7月のIETF table draftはwidth専用の`COLW`とalignment用の`HSPEC`／`VSPEC`を別々に定義するが、9月25日のW3C Working Draftは三要素を持たず、width、span、alignment defaultsを担う`COL`を定義する。機能の置換・統合は版間で観察できるが、命名と設計変更の理由は確認できない。10月27日のIETF revision 03は、旧`COL`のgroupでは各columnを同じ幅にする制約を避けるため`COLGROUP`を新設した。[IETF table draft-00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)） [W3C Working Draft](../../raw/www.w3.org/TR/WD-tables-950925.html)（[公開元](https://www.w3.org/TR/WD-tables-950925.html)） [draft-03](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-03)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03)）

RFC 1942はCALS tableのimportを設計目標とし、`COL`／`COLGROUP`の相対幅記法がCALS representationからのimportを容易にすると述べる。この関係は変換要件と記法への影響に限定し、要素名または要素分割そのものをCALSから採用したとはしない。[RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

対象: [`col`](../elements/col.md)、[`colgroup`](../elements/colgroup.md)

## 共有系譜

```text
CALS THEAD/TBODY/TFOOT（1993 baseline）
  → Raggett HTML table proposal THEAD/TBODY/TFOOT
  → IETF table draft-00 THEAD/TBODY/TFOOT
  → RFC 1942 THEAD/TBODY/TFOOT

CALSからのimport要件
  → IETF table draft系列／RFC 1942 COL/COLGROUPの相対幅記法

draft-00 COLW + HSPEC/VSPEC [機能統合・命名の因果は未確認] W3C WD COL

draft-01 COLのgroup model上の制約
  → draft-03 COLGROUP
```

HTML 3.2はRFC 1942のsubsetを採用したと述べるが、DTDに対象五要素を含まない。HTML 4.01は五要素をHTML 3.2からの新要素として列挙し、その5要素を含むtable DTD blockをRFC 1942のIETF table standardへ帰属させる。これによりRFC 1942からHTML 4への集合単位の採録は確認できるが、要素単位の議論または編集履歴は未確認である。[HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） [HTML 4.01 DTD](../../raw/www.w3.org/TR/html401/html40.zip/strict.dtd)（[公開元](https://www.w3.org/TR/html401/sgml/dtd.html)） [HTML 4.01 changes](../../raw/www.w3.org/TR/html401/html40.zip/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html)）
