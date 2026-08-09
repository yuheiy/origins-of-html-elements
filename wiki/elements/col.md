# `<col>`

> 状態: 完成

## 概要

tableの一つ以上のcolumnを表す空要素である。1995年10月3日のHTML Tables draftはincremental displayに必要なcolumn widthとcolumn-based defaultsをdataより先に指定するため提案し、RFC 1942を経てHTML 4.0が標準化した。`COL`要素自体をCALSから採用した証拠は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、親`colgroup`が親`table`を持つとき、そのcolumn group内の一つ以上のcolumnsを表す。`span`属性でcolumn数を指定できる。[一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-col-element)（2026-08-09確認）

## HTMLへの導入

確認できる最初期の公開仕様はDave Raggettによる1995年10月3日の`draft-ietf-html-tables-01`である。大きなtableを全dataの受信前に表示するにはcolumn数とwidthが必要だという設計課題に対し、table dataより前にwidthとalignment defaultsを指定する空要素`COL`を定義した。7月7日のrevision 00は同じwidth要求を`COLW`で扱っており、`COL`はまだない。RFC 1942はこのdraft seriesをExperimental RFCとして標準化し、RecommendationとしてはHTML 4.0が1997年12月18日に採録した。[revision 00](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) [revision 01](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

未確認。HTML 3.0 draftの`COLSPEC`属性と1995年7月のtable draft revision 00の`COLW`要素はcolumn widthという同じ要求を扱うが、10月の`COL`へ変更・採用した因果を本文は明記しない。CALSとの直接関係としてdraftとRFC 1942が明記するのも`WIDTH`値の`*`表記までであり、`COL`要素自体の由来ではない。[HTML 3.0 tables](https://www.w3.org/MarkUp/html3/tables.html) [1995年draft](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

## さらに上流の由来

### 証拠

RFC 1942はtable model全体が既存SGML table models、word processors、紙媒体のtable layout研究から発展し、CALS tableのimport簡略化を副目標としたと記す。また`COL`のrelative widthに使う`*` suffixはCALS representationからのimportを簡略化するためと明記する。これは`COL`要素そのものの祖先を特定する証拠ではない。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

### 解釈

`COL`はHTML 3.0の`COLSPEC`やrevision 00の`COLW`が扱っていたcolumn width指定を拡張したように見えるが、その設計変更を明示する記録がないため、系譜には接続しない。

## 系譜

[具体的祖先は未確認] `draft-ietf-html-tables-01` `COL`（1995-10-03）→ RFC 1942 `COL` → HTML 4.0 `COL` → 現行HTML `<col>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-04-25 | HTML 3.0 Internet-Draft, “Tables” | 失効したIETF Working Draft | column widthを`TABLE`の`COLSPEC`属性で指定し、`COL`要素は定義しない。 | [一次資料](https://www.w3.org/MarkUp/html3/tables.html) | 2026-08-09 |
| 1995-10-03 | `draft-ietf-html-tables-01` | IETF Internet-Draft | `COL`を定義し、incremental displayのためdataより前にcolumn widthを指定する要求とcolumn-based defaultsを記す。7月のrevision 00は`COLW`で同じwidth要求を扱う。 | [revision 00](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)・[revision 01](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01.txt) | 2026-08-09 |
| 1996-05 | RFC 1942, *HTML Tables* | Experimental RFC | `COL`のDTDと、incremental displayのためcolumn widthをdataより先に指定する導入理由を記す。`*` width表記だけはCALS importとの関係を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 | W3C Recommendation | `COL`をHTML 3.2以後の新要素として採録したことをHTML 4.01の差分付録が記録する。 | [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**B**

1995年draftでHTMLへの導入理由と設計modelを確認できるが、`COL`要素を具体的な先行要素、`COLSPEC`、`COLW`から採用した因果関係は確認できないため。

## 否定された仮説

`COL`要素をCALSから直接採用したという説明。RFC 1942が直接結ぶのはrelative widthの`*`表記とCALS representationであり、要素自体ではない。

## 未解決

- `COLSPEC`属性またはrevision 00の`COLW`から`COL`要素への変更を決めた議論。
- `COL`要素自体へ影響したSGML table modelがあるか。
