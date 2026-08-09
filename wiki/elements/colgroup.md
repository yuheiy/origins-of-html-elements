# `<colgroup>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。旧`COL` grouping modelから1995年`COLGROUP`への設計因果を検証済み（HTML 4への個別採録経路は未確認）

## 概要

tableの一つ以上のcolumnsをgroupingする要素である。1995年10月27日のHTML Tables draft revision 03が、旧`COL` grouping modelではgroup内を異なるwidthにできない制約を解く新要素として導入し、RFC 1942を経てHTML 4.0が標準化した。HTML 4への個別採録経路は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`内の一つ以上のcolumnsからなるgroupを表す。`span`属性がある場合はその数のcolumnsを表し、ない場合は子`col`要素によってcolumnsを指定する。[一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element)（2026-08-09確認）

## HTMLへの導入

1995年10月27日の`draft-ietf-html-tables-03`は`COLGROUP`を「new element」と明記し、異なるwidthとalignment propertiesを持つcolumn集合を一つ以上の`COL`によってgroupingするため導入した。10月10日のrevision 02には`COLGROUP`がなく、revision 03はgroup間のrule描画と、groupからcellsへのproperty defaultsもmodelに含めた。RFC 1942はこのmodelをExperimental RFCとして標準化し、RecommendationとしてはHTML 4.0が1997年12月18日に採録した。[revision 02](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt) [revision 03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

HTML直前の設計上の祖先はrevision 02までの`COL`によるcolumn grouping modelである。旧modelでは`SPAN`の対象columnsを同じwidthにする必要があり、revision 03は各columnへ異なるwidthとalignment propertiesを与えられるcontainerとして新`COLGROUP`を導入した。[revision 02](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt) [revision 03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)

## さらに上流の由来

### 証拠

1995年draftとRFC 1942はtable model全体が既存SGML table models、word processors、紙媒体のtable layout研究から発展し、CALS tableのimport簡略化を副目標としたと記す。しかしHTML外の`COLGROUP`個別祖先は特定しない。[1995年draft](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

### 解釈

旧`COL` modelの同一幅制約を、各columnに異なるpropertiesを与えられる明示的なcontainerへ分離して解消したと説明できる。

## 系譜

`draft-ietf-html-tables-02`までの`COL` grouping model → `draft-ietf-html-tables-03` `COLGROUP`（1995-10-27）→ RFC 1942 `COLGROUP` → HTML 4.0 `COLGROUP` → 現行HTML `<colgroup>`

HTML 4への個別採録決定は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-10-27 | `draft-ietf-html-tables-03` | IETF Internet-Draft | revision 02までの`COL` groupではgroup内を異なるwidthにできない制約を示し、異なるwidthとalignment propertiesを与えられる新要素`COLGROUP`を導入する。 | [revision 02](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt)・[revision 03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) | 2026-08-09 |
| 1996-05 | RFC 1942, *HTML Tables* | Experimental RFC | `COLGROUP`を異なるwidthとalignment propertiesを持つcolumn集合のための新要素として導入し、DTDとproperty inheritanceを定義する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 | W3C Recommendation | `COLGROUP`をHTML 3.2以後の新要素として採録したことをHTML 4.01の差分付録が記録する。 | [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**B**

旧`COL` group modelの具体的制約から`COLGROUP`を導入した設計因果は確認できるが、HTML 4への要素単位の採録経路とHTML外の具体的祖先が確認できないため。

## 否定された仮説

`COLGROUP`要素をCALSから直接採用したという説明。RFC 1942はtable model全体のCALS importを目標に含めるが、`COLGROUP`をCALS要素から採用したとは明記しない。

## 未解決

- revision 03の本文外で`COLGROUP`を提案・合意した人物と議論。
- RFC 1942からHTML 4へ`COLGROUP`を個別採録した決定記録。
- `COLGROUP`要素自体へ影響したSGML table modelがあるか。

## 調査記録

1995年HTML 3.0 table章、RFC 1942、HTML 3.2、HTML 4.01 DTD／table章／差分付録、Living Standardを比較した。RFC 1942が明記する導入理由と、個別祖先が未確認であることを分離した。横断比較は[CALS／高度なtable model調査ノート](../research/cals-table-elements.md)を参照する。

2026-08-09の敵対的レビューでは、HTML Tables revisions 00–03、RFC 1942、HTML 3.2、HTML 4を比較した。revision 03での早期`COLGROUP`を発見してRFC初出説を訂正し、旧`COL` groupの同一幅制約から新containerへ移る設計因果を追加した。CALSと既存SGML table modelをHTML外の競合祖先として再点検し、HTML 4への個別採録経路が欠けるため確度Bを維持した。
