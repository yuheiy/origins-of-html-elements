# `<tbody>`

> 状態: 完成

## 概要

表のdata rowsを一つ以上のbody sectionへまとめる要素である。1995年7月のIETF table草案がCALS table modelにならったhead/body/foot row groupingとして提案し、RFC 1942を経てHTML 4.0が標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`のdata bodyを構成するrowsのblockを表す。[一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element)（2026-08-09確認）

## HTMLへの導入

確認できた最初期の公開仕様はDave Raggettによる1995年7月7日のIETF Internet-Draft `draft-ietf-html-tables-00`である。同草案はtable bodyをrow groupへ分割し、rendering情報、scrolling、paged outputを扱うため`TBODY`を定義した。1996年5月のRFC 1942がこれを改訂し、RecommendationとしてはHTML 4.0が1997年12月18日に採録した。[1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

HTML直前の祖先として確認できるのはCALS table modelのhead/body/foot row-grouping設計である。1995年草案はCALSのfeaturesを取り込み、そのHTML上の具体化を`thead`, `tbody`, `tfoot` sectionsと特定する。ただしCALS側の個別要素との一対一対応は未確認である。[1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)

## さらに上流の由来

### 証拠

1995年草案とRFC 1942はCALSより前のbody row sectionの祖先を特定していない。

### 解釈

なし。

## 系譜

[集合単位] CALS table modelのhead/body/foot row grouping → IETF table草案 `TBODY`（1995年） → RFC 1942 `TBODY` → HTML 4.0 `TBODY` → 現行HTML `<tbody>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-07-07 | *HTML Tables* `draft-ietf-html-tables-00` | IETF Internet-Draft | CALSのfeaturesを取り込んだhead/body/foot groupingとして`TBODY`を定義し、scrollingとpaged outputの用途を記す。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) | 2026-08-09 |
| 1996-05 | RFC 1942, *HTML Tables* | Experimental RFC | CALSにならうhead/body/foot row grouping、`TBODY`のDTD、複数body group、旧tableとの互換性を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 | W3C Recommendation | `TBODY`をHTML 3.2以後の新要素として採録したことをHTML 4.01の差分付録が記録する。 | [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**A−**

1995年草案がCALSから`TBODY`を含むrow-group modelへの因果関係を直接明記する一方、記述は三要素の集合単位であり、CALS側の個別要素との対応を確認できないため。

## 否定された仮説

HTML+に明示的な`TBODY`要素があったという説明。RFC 1942はHTML+の単純table modelに暗黙のbody相当は認めるが、head/body/foot groupingはCALSにならった後続拡張として区別する。

## 未解決

- 1995年7月草案より前に`TBODY`を加えた議論または編集履歴。
- CALSより上流のbody row sectionの系譜。
