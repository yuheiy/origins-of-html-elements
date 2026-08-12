---
status: 完成
---

# `<col>`

## 概要

表の一つ以上の列を表す空要素である。1995年9月25日のHTML3 Tables Working Draftは逐次表示に必要な列幅と列に基づく既定値をデータより先に指定するため提案した。後続草案は列グループの役割を`COLGROUP`へ分離し、`COL`を属性共有のための列指定へ限定してRFC 1942とHTML 4.0へ採録した。`COL`要素自体をCALSから採用した証拠は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、親`colgroup`が親`table`を持つとき、その列グループ内の一つ以上の列を表す。`span`属性で列数を指定できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-col-element)、2026-08-09確認）

## HTMLへの導入

確認できる最初期の公開仕様はDave Raggettによる1995年9月25日のW3C Working Draft `WD-tables-950925`である。大きな表を全データの受信前に表示するには列数と幅が必要だという設計課題に対し、表データより前に幅と配置既定値を指定する空要素`COL`を定義した。7月7日のIETFリビジョン00は幅を`COLW`、水平・垂直配置を`HSPEC`／`VSPEC`で扱っており、`COL`はまだない。10月3日のリビジョン01はW3C草案と同じ`COL`モデルを採る。[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） [W3C Working Draft](../../raw/www.w3.org/TR/WD-tables-950925.html)（[公開元](https://www.w3.org/TR/WD-tables-950925.html)） [revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01.txt)）

10月27日のリビジョン03は、`COL`が`SPAN`で同じ幅の列群を表す制約を解く`COLGROUP`を追加した。1996年1月18日のリビジョン04はグループの`SPAN`と既定属性を`COLGROUP`へ移し、子`COL`の属性が親の既定値を上書きする構造へ整理した。1月23日のリビジョン05はトップレベルの`COL`列も再び許可し、`COL SPAN`は列グループを作らず属性定義を共有するだけだと明記した。この区別がRFC 1942とHTML 4.0草案へ継承された。[revision 03](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)） [revision 04](../../raw/www.ietf.org/archive/id/draft-ietf-html-tables-04.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-html-tables-04.txt)） [revision 05](../../raw/www.ietf.org/archive/id/draft-ietf-html-tables-05.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-html-tables-05.txt)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 4.0草案](../../raw/www.w3.org/TR/WD-html40-970917/struct/tables.html)（[公開元](https://www.w3.org/TR/WD-html40-970917/struct/tables.html#h-12.1.4)）

## HTML直前の祖先

初出以前の祖先は未確認である。HTML 3.0草案の`COLSPEC`属性と1995年7月の表の草案リビジョン00の`COLW`要素は列幅という同じ要求を扱うが、9月の`COL`へ変更・採用した因果を本文は明記しない。版間では幅専用の`COLW`と配置用の`HSPEC`／`VSPEC`が消え、`COL`が幅、範囲、配置既定値を担う機能再編を観察できる。初出後はリビジョン05が`COL SPAN`をグループではなく属性共有と明記し、現行要素へ続く列指定の役割を固定した。CALSとの直接関係として草案とRFC 1942が明記するのも`WIDTH`値の`*`表記までであり、`COL`要素自体の由来ではない。[HTML 3.0 tables](../../raw/www.w3.org/MarkUp/html3/tables.html)（[公開元](https://www.w3.org/MarkUp/html3/tables.html)） [revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） [revision 05](../../raw/www.ietf.org/archive/id/draft-ietf-html-tables-05.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-html-tables-05.txt)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

## さらに上流の由来

### 証拠

1995年4月、RaggettはCALSの`COLSPEC`を、行・列範囲の幅と配置を指定するHTML `TSPEC`へ一般化する案を提示した。CALS共同著者は、これは`COLSPEC`と`SPANSPEC`をまとめた別構造だと分析した。7月草案の`COLW`／`HSPEC`／`VSPEC`、9月草案の`COL`へ至る機能再編の中間記録はないが、相対幅の`*`表記はCALS取り込みを簡略化するためだとRFC 1942も明記する。[CALS比較](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）

### 解釈

列単位の幅・配置指定という要求にはCALS `COLSPEC`からHTML `TSPEC`への明示的な翻案があるが、`TSPEC`から`COLW`／`HSPEC`／`VSPEC`、さらに`COL`へ至る中間経路は欠ける。したがってCALSを`COL`要素の直接祖先とはせず、CALS由来の列指定要求をHTML表モデル内で再編した外部候補付きの内発設計と位置づける。

## 系譜

[具体的祖先は未確認] W3C `WD-tables-950925` `COL`（1995-09-25）→ IETF revision 03 `COL`＋`COLGROUP` → revision 05 列指定`COL`／列群`COLGROUP`の分離 → RFC 1942 `COL` → HTML 4.0 `COL` → 現行HTML `<col>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-04-21〜29 | [Bingham, “Re: HTML/CALS/ICADD Table Prop”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） | HTML WGメール | Raggettの`TSPEC`案とCALS `COLSPEC`／`SPANSPEC`の対応および差異を記録する。 | 2026-08-12 |
| 1995-04-25 | [HTML 3.0 Internet-Draft, “Tables”](../../raw/www.w3.org/MarkUp/html3/tables.html)（[公開元](https://www.w3.org/MarkUp/html3/tables.html)） | 失効したIETF Working Draft | 列幅を`TABLE`の`COLSPEC`属性で指定し、`COL`要素は定義しない。 | 2026-08-09 |
| 1995-09-25 | W3C Working Draft `WD-tables-950925`, *The HTML3 Table Model*：[W3C Working Draft](../../raw/www.w3.org/TR/WD-tables-950925.html)・[revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元1](https://www.w3.org/TR/WD-tables-950925.html)・[公開元2](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） | W3C Working Draft | 公開仕様上の`COL`初出を確認できる。リビジョン00の`COLW`、`HSPEC`、`VSPEC`に代わり、幅、範囲、水平・垂直配置既定値を一要素で扱うが、変更理由は記さない。 | 2026-08-10 |
| 1995-10-27 | [`draft-ietf-html-tables-03`](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt)） | IETF Internet-Draft | 同じ幅の列群しか表せない`COL SPAN`の制約に対し、異なる幅の子`COL`を持つ`COLGROUP`を追加。 | 2026-08-12 |
| 1996-01-18〜23 | `draft-ietf-html-tables`：[revision 04](../../raw/www.ietf.org/archive/id/draft-ietf-html-tables-04.txt)・[revision 05](../../raw/www.ietf.org/archive/id/draft-ietf-html-tables-05.txt)（[公開元1](https://www.ietf.org/archive/id/draft-ietf-html-tables-04.txt)・[公開元2](https://www.ietf.org/archive/id/draft-ietf-html-tables-05.txt)） | IETF Internet-Draft | グループの既定値を`COLGROUP`へ移し、`COL`を列の属性共有へ限定する。revision 05は`COL SPAN`がグループを作らないと明記。 | 2026-08-12 |
| 1996-05 | [RFC 1942, *HTML Tables*](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | `COL`のDTDと、逐次表示のため列幅をデータより先に指定する導入理由を記す。`*` 幅表記だけはCALS取り込みとの関係を明記する。 | 2026-08-09 |
| 1997-09-17 | [HTML 4.0 Working Draft §12.1.4](../../raw/www.w3.org/TR/WD-html40-970917/struct/tables.html)（[公開元](https://www.w3.org/TR/WD-html40-970917/struct/tables.html#h-12.1.4)） | W3C Working Draft | `COL`は列グループを定義せず、列間で属性値を共有する要素だと明記して採録。 | 2026-08-12 |
| 1997-12-18 | [HTML 4.0](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | W3C Recommendation | `COL`をHTML 3.2以後の新要素として採録し、5要素を含む表DTDブロックをRFC 1942のIETF表標準へ帰属させる。 | 2026-08-10 |

## 確度

**B**

1995年W3C草案でHTMLへの導入理由と設計モデルを確認できるが、`COL`要素を具体的な先行要素、`COLSPEC`、`COLW`／`HSPEC`／`VSPEC`から採用した因果関係は確認できないため。

## 否定された仮説

`COL`要素をCALSから直接採用したという説明。RFC 1942が直接結ぶのは相対幅の`*`表記とCALS表現であり、要素自体ではない。

## 未解決

- `COLSPEC`属性またはリビジョン00の`COLW`／`HSPEC`／`VSPEC`から`COL`要素への機能統合と命名を決めた人物・議論。
- CALS `COLSPEC`からHTML `TSPEC`、`COLW`／`HSPEC`／`VSPEC`、`COL`へ至る欠落した編集記録は残っているか。
