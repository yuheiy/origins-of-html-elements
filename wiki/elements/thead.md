# `<thead>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。1995年IETF table草案での初出とCALS由来を集合単位で検証済み

## 概要

表のheader rowsをまとめる要素である。1995年7月のIETF table草案がCALS table modelにならったhead/body/foot row groupingとして提案し、RFC 1942を経てHTML 4.0が標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`のcolumn labels（headers）と付随するnon-header cellsからなるrowsのblockを表す。[一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element)（2026-08-09確認）

## HTMLへの導入

確認できた最初期の公開仕様はDave Raggettによる1995年7月7日のIETF Internet-Draft `draft-ietf-html-tables-00`である。同草案は長い表のheader反復、scrollable body、row group単位のrendering情報指定を目的として`THEAD`を定義した。1996年5月のRFC 1942がこれを改訂し、RecommendationとしてはHTML 4.0が1997年12月18日に採録した。[1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

HTML直前の祖先として確認できるのはCALS table modelのhead/body/foot row-grouping設計である。1995年草案はCALSのfeaturesを取り込み、そのHTML上の具体化を`thead`, `tbody`, `tfoot` sectionsと特定する。ただしCALS側の個別要素との一対一対応は今回未確認である。[1995年草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)

## さらに上流の由来

### 証拠

1995年草案とRFC 1942はCALSより前のhead row sectionの祖先を特定していない。

### 解釈

なし。

## 系譜

[集合単位] CALS table modelのhead/body/foot row grouping → IETF table草案 `THEAD`（1995年） → RFC 1942 `THEAD` → HTML 4.0 `THEAD` → 現行HTML `<thead>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-07-07 | *HTML Tables* `draft-ietf-html-tables-00` | IETF Internet-Draft | CALSのfeaturesを取り込んだhead/body/foot groupingとして`THEAD`を定義し、反復headerとscrolling用途を記す。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt) | 2026-08-09 |
| 1996-05 | RFC 1942, *HTML Tables* | Experimental RFC | CALSにならうhead/body/foot row grouping、`THEAD`のDTD、反復headerとfixed headerという用途を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 | W3C Recommendation | `THEAD`をHTML 3.2以後の新要素として採録したことをHTML 4.01の差分付録が記録する。 | [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**A−**

1995年草案がCALSから`THEAD`を含むrow-group modelへの因果関係を直接明記する一方、記述は三要素の集合単位であり、CALS側の個別要素との対応を確認できないため。

## 否定された仮説

HTML+の単純table modelから`THEAD`を継承したという説明。RFC 1942はHTML+ modelをcaption、rows、header/data cells、spansからなる単純モデルとして区別し、head/body/foot groupingはCALSにならった拡張とする。

## 未解決

- 1995年7月草案より前に`THEAD`を加えた議論または編集履歴。
- CALSより上流のhead row sectionの系譜。

## 調査記録

HTML+調査、1995年HTML 3.0 draft、RFC 1942、HTML 3.2、HTML 4.01 DTD／table章／差分付録、Living Standardを比較した。HTML 3.0とHTML 3.2には`THEAD`を確認できず、RFC 1942からHTML 4への経路を採用した。横断比較は[CALS／高度なtable model調査ノート](../research/cals-table-elements.md)を参照する。

敵対的レビュー中の反証探索（2026-08-09）で、RFC 1942より早い`draft-ietf-html-tables-00`の`THEAD`定義とCALS由来文を確認した。初出と系譜を訂正し、集合レベルの制約は維持した。

訂正後の別レビュー（2026-08-09）では、1995年草案のabstract、design influences、本文、DTDをRFC 1942とHTML 4へ再照合した。CALS側の個別要素名を補わず、初出・系譜・A−判定・未解決が証拠表に整合することを確認した。
