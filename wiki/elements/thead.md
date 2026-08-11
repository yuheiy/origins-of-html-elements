---
status: 完成
---

# `<thead>`

## 概要

表のヘッダー行をまとめる要素である。CALS表モデルの同名`THEAD`要素を1995年4月のRaggett提案がHTMLへ取り込み、7月のIETF表草案、RFC 1942を経てHTML 4.0が標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`の列見出し（ヘッダー）と付随する見出し以外のセルからなる行のブロックを表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/tables.html)（[公開版](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element)、2026-08-09確認）

## HTMLへの導入

確認できた最初期の提案はDave Raggettが1995年4月21日に送ったHTML表の提案である。Harvey Binghamが4月29日の返信に転載した提案は`THEAD`、`TBODY`、`TFOOT`をCALSから借用したと明記し、長い表のヘッダー反復と行グループ単位の描画情報指定を目的として`THEAD`を定義した。7月7日のIETF Internet-Draft `draft-ietf-html-tables-00`が公開仕様として引き継ぎ、1996年5月のRFC 1942を経てHTML 4.0が採録した。[1995年提案](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html) [1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 DTD](../../raw/www.w3.org/TR/html401/html40.zip/strict.dtd)（[公開元](https://www.w3.org/TR/html401/sgml/dtd.html)）

## HTML直前の祖先

HTML直前の祖先はCALS表モデルの`THEAD`要素である。OASIS TRP 9501:1995は1993年のMIL-M-28001Bを基準とし、各`TGROUP`が任意の`THEAD`を持つ構造を記す。1995年4月のRaggett提案は三要素をCALSから借用したと明記し、BinghamはCALSの`TGROUP`を除き、局所`COLSPEC`を持たないHTML向け簡略化だと対照した。[OASIS TRP 9501:1995](../../raw/www.oasis-open.org/specs/a501.htm)（[公開元](https://www.oasis-open.org/specs/a501.htm)） [1995年提案](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)

## さらに上流の由来

### 証拠

OASIS TRP 9501:1995はCALS表モデルが1990年のMIL-M-28001Aで初公開され、1993年のMIL-M-28001Bが当時の基準だったと記す。TM 9502:1995は`THEAD`をヘッダー情報の行として定義する。1990年版から1993年版までの要素単位の変遷は特定しない。[OASIS TRP 9501:1995](../../raw/www.oasis-open.org/specs/a501.htm)（[公開元](https://www.oasis-open.org/specs/a501.htm)） [OASIS TM 9502:1995](../../raw/www.oasis-open.org/specs/a502.htm)（[公開元](https://www.oasis-open.org/specs/a502.htm)）

### 解釈

なし。

## 系譜

CALS表モデル `THEAD`（1993年基準）→ Raggett HTML 表提案 `THEAD`（1995-04-21）→ IETF 表草案 `THEAD` → RFC 1942 `THEAD` → HTML 4.0 `THEAD` → 現行HTML `<thead>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-04-21（1995-04-29転載） | [Dave RaggettのHTML表提案／Harvey Binghamの返信](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)） | HTML-WGメールアーカイブ | Raggettが三要素をCALSから借用したと明記し、BinghamがCALS `TGROUP`、局所`COLSPEC`、`ROW`とHTML案の構造差を対照する。 | 2026-08-10 |
| 1995-07-07 | [*HTML Tables* `draft-ietf-html-tables-00`](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)） | IETF Internet-Draft | CALSの機能を取り込んだヘッダー／本文／フッターのグループ化として`THEAD`を定義し、反復ヘッダーとスクロール用途を記す。 | 2026-08-09 |
| 1995-10-19 | [OASIS Technical Memorandum TM 9502:1995, *CALS Table Model Document Type Definition*](../../raw/www.oasis-open.org/specs/a502.htm)（[公開元](https://www.oasis-open.org/specs/a502.htm)） | OASIS Technical Memorandum | 1995年6月30日のMIL-HDBK-28001 Example DTDから`THEAD`の`VALIGN`既定値を変更したと記し、CALS側の既存同名要素をヘッダー情報の行として定義する。 | 2026-08-10 |
| 1995-11-21 | [OASIS Technical Research Paper 9501:1995, *Table Interoperability: Issues for the CALS Table Model*](../../raw/www.oasis-open.org/specs/a501.htm)（[公開元](https://www.oasis-open.org/specs/a501.htm)） | OASIS Technical Research Paper | CALS表モデルの初公開を1990年、基準を1993年のMIL-M-28001Bとし、各`TGROUP`が任意の`THEAD`を持つ構造を記す。 | 2026-08-10 |
| 1996-05 | [RFC 1942, *HTML Tables*](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） | Experimental RFC | CALSにならうヘッダー／本文／フッターの行グループ化、`THEAD`のDTD、反復ヘッダーと固定ヘッダーという用途を明記する。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | W3C Recommendation | `THEAD`をHTML 3.2以後の新要素として採録し、5要素を含む表DTDブロックをRFC 1942のIETF表標準へ帰属させる。 | 2026-08-10 |

## 確度

**A**

CALS側の具体的な同名`THEAD`要素と、CALSからHTMLの`THEAD`を含む三要素への採用因果を一次資料で確認できるため。

## 否定された仮説

HTML+の単純表モデルから`THEAD`を継承したという説明。RFC 1942はHTML+モデルをキャプション、行、ヘッダー／データセル、セルの結合からなる単純モデルとして区別し、ヘッダー／本文／フッターのグループ化はCALSにならった拡張とする。

## 未解決

- 1995年4月提案より前のDanvers会合で`THEAD`を選んだ議論または編集履歴。
- 1990年版から1993年基準までにCALS `THEAD`がどう変化したかを示す版と設計記録。
