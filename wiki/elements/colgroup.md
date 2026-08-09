# `<colgroup>`

> 状態: RFC 1942での導入理由とHTML 4への採録を検証済み（具体的な先行要素は未確認）

## 概要

tableの一つ以上のcolumnsをgroupingする要素である。RFC 1942が異なるwidthとalignment propertiesをcolumn集合へ指定する新要素として導入し、HTML 4.0が標準化した。具体的な先行markup要素は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`内の一つ以上のcolumnsからなるgroupを表す。`span`属性がある場合はその数のcolumnsを表し、ない場合は子`col`要素によってcolumnsを指定する。[一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element)（2026-08-09確認）

## HTMLへの導入

1996年5月のRFC 1942は`COLGROUP`を「new element」と明記し、異なるwidthとalignment propertiesを持つcolumn集合を一つ以上の`COL`によってgroupingするため導入した。group間のrule描画と、groupからcellsへのproperty defaultsもmodelに含めた。RFC 1942はExperimental RFCであり、RecommendationとしてはHTML 4.0が1997年12月18日に初めて採録した。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

未確認。RFC 1942は`COLGROUP`を新要素と呼ぶが、特定のSGML table elementまたはCALS要素から採用したとは記さない。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

## さらに上流の由来

### 証拠

RFC 1942はtable model全体が既存SGML table models、word processors、紙媒体のtable layout研究から発展し、CALS tableのimport簡略化を副目標としたと記す。しかし`COLGROUP`の個別祖先は特定しない。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

### 解釈

なし。

## 系譜

[具体的祖先は未確認] RFC 1942 `COLGROUP` → HTML 4.0 `COLGROUP` → 現行HTML `<colgroup>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-05 | RFC 1942, *HTML Tables* | Experimental RFC | `COLGROUP`を異なるwidthとalignment propertiesを持つcolumn集合のための新要素として導入し、DTDとproperty inheritanceを定義する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 | W3C Recommendation | `COLGROUP`をHTML 3.2以後の新要素として採録したことをHTML 4.01の差分付録が記録する。 | [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**B**

RFC 1942でHTMLへの導入理由と設計modelを確認できるが、`COLGROUP`を具体的な先行要素から採用した因果関係は確認できないため。

## 否定された仮説

`COLGROUP`要素をCALSから直接採用したという説明。RFC 1942はtable model全体のCALS importを目標に含めるが、`COLGROUP`をCALS要素から採用したとは明記しない。

## 未解決

- `COLGROUP`を最初に導入したRFC 1942以前のdraftと具体的な提案者。
- `COLGROUP`要素自体へ影響したSGML table modelがあるか。

## 調査記録

1995年HTML 3.0 table章、RFC 1942、HTML 3.2、HTML 4.01 DTD／table章／差分付録、Living Standardを比較した。RFC 1942が明記する導入理由と、個別祖先が未確認であることを分離した。横断比較は[CALS／高度なtable model調査ノート](../research/cals-table-elements.md)を参照する。
