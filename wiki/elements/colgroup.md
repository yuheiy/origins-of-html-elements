---
status: 完成
---

# `<colgroup>`

## 概要

tableの一つ以上のcolumnsをgroupingする要素である。1995年10月27日のHTML Tables draft revision 03が、旧`COL` grouping modelではgroup内を異なるwidthにできない制約を解く新要素として導入し、RFC 1942を経てHTML 4.0が標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`内の一つ以上のcolumnsからなるgroupを表す。`span`属性がある場合はその数のcolumnsを表し、ない場合は子`col`要素によってcolumnsを指定する。[HTML Living Standard](../../raw/html-living-standard/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element)、2026-08-09確認）

## HTMLへの導入

1995年10月27日の`draft-ietf-html-tables-03`は`COLGROUP`を「new element」と明記し、異なるwidthとalignment propertiesを持つcolumn集合を一つ以上の`COL`によってgroupingするため導入した。10月10日のrevision 02には`COLGROUP`がなく、revision 03はgroup間のrule描画と、groupからcellsへのproperty defaultsもmodelに含めた。RFC 1942はこのmodelをExperimental RFCとして標準化し、HTML 4.0の変更付録も同じ導入理由を記して採録した。[revision 02](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt) [revision 03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.7)

## HTML直前の祖先

HTML直前の設計上の祖先はrevision 02までの`COL`によるcolumn grouping modelである。旧modelでは`SPAN`の対象columnsを同じwidthにする必要があり、revision 03は各columnへ異なるwidthとalignment propertiesを与えられるcontainerとして新`COLGROUP`を導入した。[revision 02](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt) [revision 03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)

## さらに上流の由来

### 証拠

1995年draftとRFC 1942はtable model全体が既存SGML table models、word processors、紙媒体のtable layout研究から発展し、CALS tableのimport簡略化を副目標としたと記す。しかしHTML外の`COLGROUP`個別祖先は特定しない。[1995年draft](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

### 解釈

旧`COL` modelの同一幅制約を、各columnに異なるpropertiesを与えられる明示的なcontainerへ分離して解消したと説明できる。

## 系譜

`draft-ietf-html-tables-02`までの`COL` grouping model → `draft-ietf-html-tables-03` `COLGROUP`（1995-10-27）→ RFC 1942 `COLGROUP` → HTML 4.0 `COLGROUP` → 現行HTML `<colgroup>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-10-27 | `draft-ietf-html-tables-03`：[revision 02](../../raw/rfc1942-html-tables/16465c2ebb4f300b-draft-ietf-html-tables-02.txt)・[revision 03](../../raw/rfc1942-html-tables/6c52ec9b048511a7-draft-ietf-html-tables-03.txt)（[公開元1](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt)・[公開元2](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)） | IETF Internet-Draft | revision 02までの`COL` groupではgroup内を異なるwidthにできない制約を示し、異なるwidthとalignment propertiesを与えられる新要素`COLGROUP`を導入する。 | 2026-08-09 |
| 1996-05 | [RFC 1942, *HTML Tables*](../../raw/rfc1942-html-tables/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | `COLGROUP`を異なるwidthとalignment propertiesを持つcolumn集合のための新要素として導入し、DTDとproperty inheritanceを定義する。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0](../../raw/html-4-history/8956e5bf2cd33e94-changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.7)） | W3C Recommendation | `COLGROUP`をHTML 3.2以後の新要素として採録し、異なるwidthとalignment propertiesを一つ以上の`COL`で指定できるcolumn groupのため導入したと変更付録が記録する。5要素を含むtable DTD blockはRFC 1942のIETF table standardへ帰属する。 | 2026-08-10 |

## 確度

**A**

旧`COL` group modelの具体的制約から`COLGROUP`を導入した要素単位の設計因果を1995年草案で確認でき、HTML 4の変更付録も同じ導入理由を明記するため。

## 否定された仮説

`COLGROUP`要素をCALSから直接採用したという説明。RFC 1942はtable model全体のCALS importを目標に含めるが、`COLGROUP`をCALS要素から採用したとは明記しない。

## 未解決

- revision 03の本文外で`COLGROUP`を提案・合意した人物と議論。
- RFC 1942からHTML 4へ`COLGROUP`を移した要素単位の議論または編集履歴。
- `COLGROUP`要素自体へ影響したSGML table modelがあるか。
