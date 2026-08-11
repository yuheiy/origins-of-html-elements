---
status: 完成
---

# `<colgroup>`

## 概要

表の一つ以上の列をグループ化する要素である。1995年10月27日のHTML Tables草案リビジョン03が、旧`COL` グループ化モデルではグループ内を異なる幅にできない制約を解く新要素として導入し、RFC 1942を経てHTML 4.0が標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`内の一つ以上の列からなるグループを表す。`span`属性がある場合はその数の列を表し、ない場合は子`col`要素によって列を指定する。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element)、2026-08-09確認）

## HTMLへの導入

1995年10月27日の`draft-ietf-html-tables-03`は`COLGROUP`を「新要素」と明記し、異なる幅と配置プロパティを持つ列集合を一つ以上の`COL`によってグループ化するため導入した。10月10日のリビジョン02には`COLGROUP`がなく、リビジョン03はグループ間の規則描画と、グループからセルへのプロパティ既定値もモデルに含めた。RFC 1942はこのモデルをExperimental RFCとして標準化し、HTML 4.0の変更付録も同じ導入理由を記して採録した。[revision 02](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt) [revision 03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.7)

## HTML直前の祖先

HTML直前の設計上の祖先はリビジョン02までの`COL`による列グループ化モデルである。旧モデルでは`SPAN`の対象列を同じ幅にする必要があり、リビジョン03は各列へ異なる幅と配置プロパティを与えられるコンテナーとして新`COLGROUP`を導入した。[revision 02](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt) [revision 03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)

## さらに上流の由来

### 証拠

1995年草案とRFC 1942は表モデル全体が既存SGML表モデル、ワード処理系、紙媒体の表配置研究から発展し、CALS表の取り込み簡略化を副目標としたと記す。しかしHTML外の`COLGROUP`個別祖先は特定しない。[1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

### 解釈

旧`COL`モデルの同一幅制約を、各列に異なるプロパティを与えられる明示的なコンテナーへ分離して解消したと説明できる。

## 系譜

`draft-ietf-html-tables-02`までの`COL`グループ化モデル → `draft-ietf-html-tables-03` `COLGROUP`（1995-10-27）→ RFC 1942 `COLGROUP` → HTML 4.0 `COLGROUP` → 現行HTML `<colgroup>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-10-27 | `draft-ietf-html-tables-03`：[revision 02](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt)・[revision 03](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)（[公開元1](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt)・[公開元2](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)） | IETF Internet-Draft | リビジョン02までの`COL` グループではグループ内を異なる幅にできない制約を示し、異なる幅と配置プロパティを与えられる新要素`COLGROUP`を導入する。 | 2026-08-09 |
| 1996-05 | [RFC 1942, *HTML Tables*](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | `COLGROUP`を異なる幅と配置プロパティを持つ列集合のための新要素として導入し、DTDとプロパティ継承を定義する。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.7)） | W3C Recommendation | `COLGROUP`をHTML 3.2以後の新要素として採録し、異なる幅と配置プロパティを一つ以上の`COL`で指定できる列グループのため導入したと変更付録が記録する。5要素を含む表DTDブロックはRFC 1942のIETF表標準へ帰属する。 | 2026-08-10 |

## 確度

**A**

旧`COL` グループモデルの具体的制約から`COLGROUP`を導入した要素単位の設計因果を1995年草案で確認でき、HTML 4の変更付録も同じ導入理由を明記するため。

## 否定された仮説

`COLGROUP`要素をCALSから直接採用したという説明。RFC 1942は表モデル全体のCALS取り込みを目標に含めるが、`COLGROUP`をCALS要素から採用したとは明記しない。

## 未解決

- リビジョン03の本文外で`COLGROUP`を提案・合意した人物と議論。
- RFC 1942からHTML 4へ`COLGROUP`を移した要素単位の議論または編集履歴。
- `COLGROUP`要素自体へ影響したSGML表モデルがあるか。
