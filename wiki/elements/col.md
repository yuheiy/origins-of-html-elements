---
status: 完成
---

# `<col>`

## 概要

tableの一つ以上のcolumnを表す空要素である。1995年9月25日のHTML3 Tables Working Draftはincremental displayに必要なcolumn widthとcolumn-based defaultsをdataより先に指定するため提案し、RFC 1942を経てHTML 4.0が標準化した。`COL`要素自体をCALSから採用した証拠は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、親`colgroup`が親`table`を持つとき、そのcolumn group内の一つ以上のcolumnsを表す。`span`属性でcolumn数を指定できる。[HTML Living Standard](../../raw/html-living-standard/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-col-element)、2026-08-09確認）

## HTMLへの導入

確認できる最初期の公開仕様はDave Raggettによる1995年9月25日のW3C Working Draft `WD-tables-950925`である。大きなtableを全dataの受信前に表示するにはcolumn数とwidthが必要だという設計課題に対し、table dataより前にwidthとalignment defaultsを指定する空要素`COL`を定義した。7月7日のIETF revision 00はwidthを`COLW`、水平・垂直alignmentを`HSPEC`／`VSPEC`で扱っており、`COL`はまだない。10月3日のrevision 01はW3C草案と同じ`COL` modelを採る。RFC 1942はこのdraft seriesをExperimental RFCとして標準化し、HTML 4.0は5要素を含むtable DTD blockをRFC 1942のIETF table standardへ明示的に帰属させて採録した。[revision 00](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) [W3C Working Draft](https://www.w3.org/TR/WD-tables-950925.html) [revision 01](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 DTD](../../raw/html-4.01/strict.dtd)（[公開元](https://www.w3.org/TR/html401/sgml/dtd.html)）

## HTML直前の祖先

未確認。HTML 3.0 draftの`COLSPEC`属性と1995年7月のtable draft revision 00の`COLW`要素はcolumn widthという同じ要求を扱うが、9月の`COL`へ変更・採用した因果を本文は明記しない。版間ではwidth専用の`COLW`とalignment用の`HSPEC`／`VSPEC`が消え、`COL`がwidth、span、alignment defaultsを担う機能再編を観察できる。CALSとの直接関係としてdraftとRFC 1942が明記するのも`WIDTH`値の`*`表記までであり、`COL`要素自体の由来ではない。[HTML 3.0 tables](https://www.w3.org/MarkUp/html3/tables.html) [revision 00](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) [W3C Working Draft](https://www.w3.org/TR/WD-tables-950925.html) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

## さらに上流の由来

### 証拠

RFC 1942はtable model全体が既存SGML table models、word processors、紙媒体のtable layout研究から発展し、CALS tableのimport簡略化を副目標としたと記す。また`COL`のrelative widthに使う`*` suffixはCALS representationからのimportを簡略化するためと明記する。これは`COL`要素そのものの祖先を特定する証拠ではない。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

### 解釈

`COL`はHTML 3.0の`COLSPEC`、revision 00の`COLW`が扱ったwidth指定、`HSPEC`／`VSPEC`が扱ったalignment指定を一要素へ統合したように見えるが、その設計変更を明示する記録がないため、系譜には接続しない。

## 系譜

[具体的祖先は未確認] W3C `WD-tables-950925` `COL`（1995-09-25）→ IETF table draft `COL` → RFC 1942 `COL` → HTML 4.0 `COL` → 現行HTML `<col>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-04-25 | [HTML 3.0 Internet-Draft, “Tables”](../../raw/html-3.0/2332ea66b0fd9bd3-tables.html)（[公開元](https://www.w3.org/MarkUp/html3/tables.html)） | 失効したIETF Working Draft | column widthを`TABLE`の`COLSPEC`属性で指定し、`COL`要素は定義しない。 | 2026-08-09 |
| 1995-09-25 | W3C Working Draft `WD-tables-950925`, *The HTML3 Table Model*：[W3C Working Draft](../../raw/rfc1942-html-tables/159ecce48597babf-WD-tables-950925.html)・[revision 00](../../raw/rfc1942-html-tables/21729a3a6f491e3d-draft-ietf-html-tables-00.txt)（[公開元1](https://www.w3.org/TR/WD-tables-950925.html)・[公開元2](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） | W3C Working Draft | 公開仕様上の`COL`初出を確認できる。revision 00の`COLW`、`HSPEC`、`VSPEC`に代わり、width、span、水平・垂直alignment defaultsを一要素で扱うが、変更理由は記さない。 | 2026-08-10 |
| 1996-05 | [RFC 1942, *HTML Tables*](../../raw/rfc1942-html-tables/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | `COL`のDTDと、incremental displayのためcolumn widthをdataより先に指定する導入理由を記す。`*` width表記だけはCALS importとの関係を明記する。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0](../../raw/html-4-history/8956e5bf2cd33e94-changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | W3C Recommendation | `COL`をHTML 3.2以後の新要素として採録し、5要素を含むtable DTD blockをRFC 1942のIETF table standardへ帰属させる。 | 2026-08-10 |

## 確度

**B**

1995年W3C draftでHTMLへの導入理由と設計modelを確認できるが、`COL`要素を具体的な先行要素、`COLSPEC`、`COLW`／`HSPEC`／`VSPEC`から採用した因果関係は確認できないため。

## 否定された仮説

`COL`要素をCALSから直接採用したという説明。RFC 1942が直接結ぶのはrelative widthの`*`表記とCALS representationであり、要素自体ではない。

## 未解決

- `COLSPEC`属性またはrevision 00の`COLW`／`HSPEC`／`VSPEC`から`COL`要素への機能統合と命名を決めた議論。
- `COL`要素自体へ影響したSGML table modelがあるか。
