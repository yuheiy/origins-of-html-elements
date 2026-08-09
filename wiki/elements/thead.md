---
status: 完成
---

# `<thead>`

## 概要

表のheader rowsをまとめる要素である。CALS table modelの同名`THEAD`要素を1995年4月のRaggett proposalがHTMLへ取り込み、7月のIETF table草案、RFC 1942を経てHTML 4.0が標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`のcolumn labels（headers）と付随するnon-header cellsからなるrowsのblockを表す。[一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element)（2026-08-09確認）

## HTMLへの導入

確認できた最初期の提案はDave Raggettが1995年4月21日に送ったHTML table proposalである。Harvey Binghamが4月29日の返信に転載したproposalは`THEAD`、`TBODY`、`TFOOT`をCALSから借用したと明記し、長い表のheader反復とrow group単位のrendering情報指定を目的として`THEAD`を定義した。7月7日のIETF Internet-Draft `draft-ietf-html-tables-00`が公開仕様として引き継ぎ、1996年5月のRFC 1942を経てHTML 4.0が採録した。[1995年提案](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html) [1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 DTD](../../raw/html-4.01/strict.dtd)

## HTML直前の祖先

HTML直前の祖先はCALS table modelの`THEAD`要素である。OASIS TRP 9501:1995は1993年のMIL-M-28001Bをbaselineとし、各`TGROUP`が任意の`THEAD`を持つ構造を記す。1995年4月のRaggett proposalは三要素をCALSから借用したと明記し、BinghamはCALSの`TGROUP`を除き、局所`COLSPEC`を持たないHTML向け簡略化だと対照した。[OASIS TRP 9501:1995](../../raw/cals-table-model/tr9501.html) [1995年提案](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)

## さらに上流の由来

### 証拠

OASIS TRP 9501:1995はCALS table modelが1990年のMIL-M-28001Aで初公開され、1993年のMIL-M-28001Bが当時のbaselineだったと記す。TM 9502:1995は`THEAD`をheader informationのrowsとして定義する。1990年版から1993年版までの要素単位の変遷は特定しない。[OASIS TRP 9501:1995](../../raw/cals-table-model/tr9501.html) [OASIS TM 9502:1995](../../raw/cals-table-model/tm9502.html)

### 解釈

なし。

## 系譜

CALS table model `THEAD`（1993 baseline）→ Raggett HTML table proposal `THEAD`（1995-04-21）→ IETF table draft `THEAD` → RFC 1942 `THEAD` → HTML 4.0 `THEAD` → 現行HTML `<thead>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-04-21（1995-04-29転載） | Dave Raggett HTML table proposal／Harvey Bingham reply | HTML-WG mail archive | Raggettが三要素をCALSから借用したと明記し、BinghamがCALS `TGROUP`、局所`COLSPEC`、`ROW`とHTML案の構造差を対照する。 | [University of Calgary保存HTML-WG archive](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html) | 2026-08-10 |
| 1995-07-07 | *HTML Tables* `draft-ietf-html-tables-00` | IETF Internet-Draft | CALSのfeaturesを取り込んだhead/body/foot groupingとして`THEAD`を定義し、反復headerとscrolling用途を記す。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) | 2026-08-09 |
| 1995-10-19 | OASIS Technical Memorandum TM 9502:1995, *CALS Table Model Document Type Definition* | OASIS Technical Memorandum | 1995年6月30日のMIL-HDBK-28001 Example DTDから`THEAD`の`VALIGN`既定値を変更したと記し、CALS側の既存同名要素をheader informationのrowsとして定義する。 | [保存資料](../../raw/cals-table-model/tm9502.html)・[正本](https://www.oasis-open.org/specs/a502.htm) | 2026-08-10 |
| 1995-11-21 | OASIS Technical Research Paper 9501:1995, *Table Interoperability: Issues for the CALS Table Model* | OASIS Technical Research Paper | CALS table modelの初公開を1990年、baselineを1993年のMIL-M-28001Bとし、各`TGROUP`が任意の`THEAD`を持つ構造を記す。 | [保存資料](../../raw/cals-table-model/tr9501.html)・[正本](https://www.oasis-open.org/specs/a501.htm) | 2026-08-10 |
| 1996-05 | RFC 1942, *HTML Tables* | Experimental RFC | CALSにならうhead/body/foot row grouping、`THEAD`のDTD、反復headerとfixed headerという用途を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 | W3C Recommendation | `THEAD`をHTML 3.2以後の新要素として採録し、5要素を含むtable DTD blockをRFC 1942のIETF table standardへ帰属させる。 | [HTML 4.01 DTD](../../raw/html-4.01/strict.dtd)・[changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-10 |

## 確度

**A**

CALS側の具体的な同名`THEAD`要素と、CALSからHTMLの`THEAD`を含む三要素への採用因果を一次資料で確認できるため。

## 否定された仮説

HTML+の単純table modelから`THEAD`を継承したという説明。RFC 1942はHTML+ modelをcaption、rows、header/data cells、spansからなる単純モデルとして区別し、head/body/foot groupingはCALSにならった拡張とする。

## 未解決

- 1995年4月提案より前のDanvers会合で`THEAD`を選んだ議論または編集履歴。
- 1990年版から1993年baselineまでにCALS `THEAD`がどう変化したかを示す版と設計記録。
