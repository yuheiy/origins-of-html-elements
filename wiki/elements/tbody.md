---
status: 完成
---

# `<tbody>`

## 概要

表のdata rowsを一つ以上のbody sectionへまとめる要素である。CALS table modelの同名`TBODY`要素を1995年4月のRaggett proposalがHTMLへ取り込み、7月のIETF table草案、RFC 1942を経てHTML 4.0が標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`のdata bodyを構成するrowsのblockを表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element)、2026-08-09確認）

## HTMLへの導入

確認できた最初期の提案はDave Raggettが1995年4月21日に送ったHTML table proposalである。Harvey Binghamが4月29日の返信に転載したproposalは`THEAD`、`TBODY`、`TFOOT`をCALSから借用したと明記し、table bodyをrow groupへ分割してrendering情報、scrolling、paged outputを扱う`TBODY`を定義した。7月7日のIETF Internet-Draft `draft-ietf-html-tables-00`が公開仕様として引き継ぎ、1996年5月のRFC 1942を経てHTML 4.0が採録した。[1995年提案](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html) [1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 DTD](../../raw/www.w3.org/TR/html401/html40.zip/strict.dtd)（[公開元](https://www.w3.org/TR/html401/sgml/dtd.html)）

## HTML直前の祖先

HTML直前の祖先はCALS table modelの`TBODY`要素である。OASIS TRP 9501:1995は1993年のMIL-M-28001Bをbaselineとし、各`TGROUP`が`TBODY`を持つ構造を記す。1995年4月のRaggett proposalは三要素をCALSから借用したと明記し、BinghamはCALSの`TGROUP`を除き、局所`COLSPEC`を持たないHTML向け簡略化だと対照した。[OASIS TRP 9501:1995](../../raw/www.oasis-open.org/specs/a501.htm)（[公開元](https://www.oasis-open.org/specs/a501.htm)） [1995年提案](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)

## さらに上流の由来

### 証拠

OASIS TRP 9501:1995はCALS table modelが1990年のMIL-M-28001Aで初公開され、1993年のMIL-M-28001Bが当時のbaselineだったと記す。TM 9502:1995は`TBODY`を`TGROUP`または`ENTRYTBL`のbodyとして定義する。1990年版から1993年版までの要素単位の変遷は特定しない。[OASIS TRP 9501:1995](../../raw/www.oasis-open.org/specs/a501.htm)（[公開元](https://www.oasis-open.org/specs/a501.htm)） [OASIS TM 9502:1995](../../raw/www.oasis-open.org/specs/a502.htm)（[公開元](https://www.oasis-open.org/specs/a502.htm)）

### 解釈

なし。

## 系譜

CALS table model `TBODY`（1993 baseline）→ Raggett HTML table proposal `TBODY`（1995-04-21）→ IETF table draft `TBODY` → RFC 1942 `TBODY` → HTML 4.0 `TBODY` → 現行HTML `<tbody>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-04-21（1995-04-29転載） | [Dave Raggett HTML table proposal／Harvey Bingham reply](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） | HTML-WG mail archive | Raggettが三要素をCALSから借用したと明記し、BinghamがCALS `TGROUP`、局所`COLSPEC`、`ROW`とHTML案の構造差を対照する。 | 2026-08-10 |
| 1995-07-07 | [*HTML Tables* `draft-ietf-html-tables-00`](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） | IETF Internet-Draft | CALSのfeaturesを取り込んだhead/body/foot groupingとして`TBODY`を定義し、scrollingとpaged outputの用途を記す。 | 2026-08-09 |
| 1995-10-19 | [OASIS Technical Memorandum TM 9502:1995, *CALS Table Model Document Type Definition*](../../raw/www.oasis-open.org/specs/a502.htm)（[公開元](https://www.oasis-open.org/specs/a502.htm)） | OASIS Technical Memorandum | 1995年6月30日のMIL-HDBK-28001 Example DTDから`TBODY`の`VALIGN`既定値を変更したと記し、CALS側の既存同名要素を`TGROUP`または`ENTRYTBL`のbodyとして定義する。 | 2026-08-10 |
| 1995-11-21 | [OASIS Technical Research Paper 9501:1995, *Table Interoperability: Issues for the CALS Table Model*](../../raw/www.oasis-open.org/specs/a501.htm)（[公開元](https://www.oasis-open.org/specs/a501.htm)） | OASIS Technical Research Paper | CALS table modelの初公開を1990年、baselineを1993年のMIL-M-28001Bとし、各`TGROUP`が`TBODY`を持つ構造を記す。 | 2026-08-10 |
| 1996-05 | [RFC 1942, *HTML Tables*](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | CALSにならうhead/body/foot row grouping、`TBODY`のDTD、複数body group、旧tableとの互換性を明記する。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | W3C Recommendation | `TBODY`をHTML 3.2以後の新要素として採録し、5要素を含むtable DTD blockをRFC 1942のIETF table standardへ帰属させる。 | 2026-08-10 |

## 確度

**A**

CALS側の具体的な同名`TBODY`要素と、CALSからHTMLの`TBODY`を含む三要素への採用因果を一次資料で確認できるため。

## 否定された仮説

HTML+に明示的な`TBODY`要素があったという説明。RFC 1942はHTML+の単純table modelに暗黙のbody相当は認めるが、head/body/foot groupingはCALSにならった後続拡張として区別する。

## 未解決

- 1995年4月提案より前のDanvers会合で`TBODY`を選んだ議論または編集履歴。
- 1990年版から1993年baselineまでにCALS `TBODY`がどう変化したかを示す版と設計記録。
