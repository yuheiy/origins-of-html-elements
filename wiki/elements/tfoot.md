# `<tfoot>`

> 状態: RFC 1942でのCALS由来を集合単位で検証済み（個別対応は未確認）

## 概要

表のcolumn summariesを含むfooter rowsをまとめる要素である。RFC 1942がCALS table modelにならったhead/body/foot row groupingとして提案し、HTML 4.0がHTML 3.2以後の新要素として標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`のcolumn summaries（footers）からなるrowsのblockを表す。[一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-tfoot-element)（2026-08-09確認）

## HTMLへの導入

今回確認できた最初期の公開仕様は1996年5月のRFC 1942である。Dave Raggettが著者となり、paged outputでfooter rowを反復し、長いtableを全件受信する前にfootをrenderできるようにするため`TFOOT`を提案した。そのためRFC 1942のmarkup順は`TBODY`より前だった。RFC 1942はExperimental RFCであり、RecommendationとしてはHTML 4.0が1997年12月18日に初めて採録した。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

HTML直前の祖先として確認できるのはCALS table modelのhead/body/foot row-grouping設計である。RFC 1942は、CALSにならってtable rowsを三種のsectionへgroupingすると明記し、footをbodyより前へ置く最適化もCALSと共有すると説明する。ただしCALS側の個別要素との一対一対応は今回未確認である。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

## さらに上流の由来

### 証拠

RFC 1942はCALSより前のfoot row sectionの祖先を特定していない。

### 解釈

なし。

## 系譜

[集合単位] CALS table modelのhead/body/foot row grouping → RFC 1942 `TFOOT` → HTML 4.0 `TFOOT` → 現行HTML `<tfoot>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-05 | RFC 1942, *HTML Tables* | Experimental RFC | CALSにならうfoot row section、`TFOOT`のDTD、反復footerとbodyより前へ置く最適化を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 | W3C Recommendation | `TFOOT`をHTML 3.2以後の新要素として採録したことをHTML 4.01の差分付録が記録する。 | [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**A−**

RFC 1942がCALSから`TFOOT`を含むrow-group modelへの因果関係を直接明記する一方、記述は三要素の集合単位であり、CALS側の個別要素との対応を確認できないため。

## 否定された仮説

現在の`TFOOT`配置規則をRFC 1942まで遡らせる説明。RFC 1942とHTML 4ではstreamingのためfootをbodyより前へ置いたが、Living Standardでは`TFOOT`を`TBODY`の後にも置ける。

## 未解決

- RFC 1942以前のHTML tables draftへ`TFOOT`が加わった正確な日付と議論。
- CALSより上流のfoot row sectionの系譜。

## 調査記録

HTML+調査、1995年HTML 3.0 draft、RFC 1942、HTML 3.2、HTML 4.01 DTD／table章／差分付録、Living Standardを比較した。HTML 3.0とHTML 3.2には`TFOOT`を確認できず、RFC 1942からHTML 4への経路を採用した。横断比較は[CALS／高度なtable model調査ノート](../research/cals-table-elements.md)を参照する。
