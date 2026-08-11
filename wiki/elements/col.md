---
status: 完成
---

# `<col>`

## 概要

表の一つ以上の列を表す空要素である。1995年9月25日のHTML3 Tables Working Draftは逐次表示に必要な列幅と列に基づく既定値をデータより先に指定するため提案し、RFC 1942を経てHTML 4.0が標準化した。`COL`要素自体をCALSから採用した証拠は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、親`colgroup`が親`table`を持つとき、その列グループ内の一つ以上の列を表す。`span`属性で列数を指定できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-col-element)、2026-08-09確認）

## HTMLへの導入

確認できる最初期の公開仕様はDave Raggettによる1995年9月25日のW3C Working Draft `WD-tables-950925`である。大きな表を全データの受信前に表示するには列数と幅が必要だという設計課題に対し、表データより前に幅と配置既定値を指定する空要素`COL`を定義した。7月7日のIETFリビジョン00は幅を`COLW`、水平・垂直配置を`HSPEC`／`VSPEC`で扱っており、`COL`はまだない。10月3日のリビジョン01はW3C草案と同じ`COL`モデルを採る。RFC 1942はこの草案系列をExperimental RFCとして標準化し、HTML 4.0は5要素を含む表DTDブロックをRFC 1942のIETF表標準へ明示的に帰属させて採録した。[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） [W3C Working Draft](../../raw/www.w3.org/TR/WD-tables-950925.html)（[公開元](https://www.w3.org/TR/WD-tables-950925.html)） [revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01.txt)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 4.01 DTD](../../raw/www.w3.org/TR/html401/html40.zip/strict.dtd)（[公開元](https://www.w3.org/TR/html401/sgml/dtd.html)）

## HTML直前の祖先

未確認。HTML 3.0草案の`COLSPEC`属性と1995年7月の表の草案リビジョン00の`COLW`要素は列幅という同じ要求を扱うが、9月の`COL`へ変更・採用した因果を本文は明記しない。版間では幅専用の`COLW`と配置用の`HSPEC`／`VSPEC`が消え、`COL`が幅、範囲、配置既定値を担う機能再編を観察できる。CALSとの直接関係として草案とRFC 1942が明記するのも`WIDTH`値の`*`表記までであり、`COL`要素自体の由来ではない。[HTML 3.0 tables](../../raw/www.w3.org/MarkUp/html3/tables.html)（[公開元](https://www.w3.org/MarkUp/html3/tables.html)） [revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） [W3C Working Draft](../../raw/www.w3.org/TR/WD-tables-950925.html)（[公開元](https://www.w3.org/TR/WD-tables-950925.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

## さらに上流の由来

### 証拠

RFC 1942は表モデル全体が既存SGML表モデル、ワード処理系、紙媒体の表配置研究から発展し、CALS表の取り込み簡略化を副目標としたと記す。また`COL`の相対幅に使う`*` 接尾辞はCALS表現からの取り込みを簡略化するためと明記する。これは`COL`要素そのものの祖先を特定する証拠ではない。[RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

### 解釈

`COL`はHTML 3.0の`COLSPEC`、リビジョン00の`COLW`が扱った幅指定、`HSPEC`／`VSPEC`が扱った配置指定を一要素へ統合したように見えるが、その設計変更を明示する記録がないため、系譜には接続しない。

## 系譜

[具体的祖先は未確認] W3C `WD-tables-950925` `COL`（1995-09-25）→ IETF 表草案 `COL` → RFC 1942 `COL` → HTML 4.0 `COL` → 現行HTML `<col>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-04-25 | [HTML 3.0 Internet-Draft, “Tables”](../../raw/www.w3.org/MarkUp/html3/tables.html)（[公開元](https://www.w3.org/MarkUp/html3/tables.html)） | 失効したIETF Working Draft | 列幅を`TABLE`の`COLSPEC`属性で指定し、`COL`要素は定義しない。 | 2026-08-09 |
| 1995-09-25 | W3C Working Draft `WD-tables-950925`, *The HTML3 Table Model*：[W3C Working Draft](../../raw/www.w3.org/TR/WD-tables-950925.html)・[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元1](https://www.w3.org/TR/WD-tables-950925.html)・[公開元2](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） | W3C Working Draft | 公開仕様上の`COL`初出を確認できる。リビジョン00の`COLW`、`HSPEC`、`VSPEC`に代わり、幅、範囲、水平・垂直配置既定値を一要素で扱うが、変更理由は記さない。 | 2026-08-10 |
| 1996-05 | [RFC 1942, *HTML Tables*](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | `COL`のDTDと、逐次表示のため列幅をデータより先に指定する導入理由を記す。`*` 幅表記だけはCALS取り込みとの関係を明記する。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | W3C Recommendation | `COL`をHTML 3.2以後の新要素として採録し、5要素を含む表DTDブロックをRFC 1942のIETF表標準へ帰属させる。 | 2026-08-10 |

## 確度

**B**

1995年W3C草案でHTMLへの導入理由と設計モデルを確認できるが、`COL`要素を具体的な先行要素、`COLSPEC`、`COLW`／`HSPEC`／`VSPEC`から採用した因果関係は確認できないため。

## 否定された仮説

`COL`要素をCALSから直接採用したという説明。RFC 1942が直接結ぶのは相対幅の`*`表記とCALS表現であり、要素自体ではない。

## 未解決

- `COLSPEC`属性またはリビジョン00の`COLW`／`HSPEC`／`VSPEC`から`COL`要素への機能統合と命名を決めた議論。
- `COL`要素自体へ影響したSGML表モデルがあるか。
