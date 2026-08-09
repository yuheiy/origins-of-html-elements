# `<tbody>`

> 状態: RFC 1942でのCALS由来を集合単位で検証済み（個別対応は未確認）

## 概要

表のdata rowsを一つ以上のbody sectionへまとめる要素である。RFC 1942がCALS table modelにならったhead/body/foot row groupingとして提案し、HTML 4.0がHTML 3.2以後の新要素として標準化した。

## 現在の意味

WHATWG HTML Living Standardでは、親`table`のdata bodyを構成するrowsのblockを表す。[一次定義](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element)（2026-08-09確認）

## HTMLへの導入

今回確認できた最初期の公開仕様は1996年5月のRFC 1942である。Dave Raggettが著者となり、table bodyを一つ以上のrow groupへ分割し、group単位のrendering情報、scrolling、paged outputを扱うため`TBODY`を提案した。旧来の単純tableとの互換性のため、bodyが一つだけなら開始・終了tagを省略可能とした。RFC 1942はExperimental RFCであり、RecommendationとしてはHTML 4.0が1997年12月18日に初めて採録した。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

HTML直前の祖先として確認できるのはCALS table modelのhead/body/foot row-grouping設計である。RFC 1942は、CALSにならってtable rowsを三種のsectionへgroupingすると明記し、abstractではそのHTML上の具体化を`thead`, `tbody`, `tfoot` sectionsと特定する。ただしCALS側の個別要素との一対一対応は今回未確認である。[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)

## さらに上流の由来

### 証拠

RFC 1942はCALSより前のbody row sectionの祖先を特定していない。

### 解釈

なし。

## 系譜

[集合単位] CALS table modelのhead/body/foot row grouping → RFC 1942 `TBODY` → HTML 4.0 `TBODY` → 現行HTML `<tbody>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-05 | RFC 1942, *HTML Tables* | Experimental RFC | CALSにならうhead/body/foot row grouping、`TBODY`のDTD、複数body group、旧tableとの互換性を明記する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1942.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 | W3C Recommendation | `TBODY`をHTML 3.2以後の新要素として採録したことをHTML 4.01の差分付録が記録する。 | [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**A−**

RFC 1942がCALSから`TBODY`を含むrow-group modelへの因果関係を直接明記する一方、記述は三要素の集合単位であり、CALS側の個別要素との対応を確認できないため。

## 否定された仮説

HTML+に明示的な`TBODY`要素があったという説明。RFC 1942はHTML+の単純table modelに暗黙のbody相当は認めるが、head/body/foot groupingはCALSにならった後続拡張として区別する。

## 未解決

- RFC 1942以前のHTML tables draftへ`TBODY`が加わった正確な日付と議論。
- CALSより上流のbody row sectionの系譜。

## 調査記録

HTML+調査、1995年HTML 3.0 draft、RFC 1942、HTML 3.2、HTML 4.01 DTD／table章／差分付録、Living Standardを比較した。HTML 3.0とHTML 3.2には`TBODY`を確認できず、RFC 1942からHTML 4への経路を採用した。横断比較は[CALS／高度なtable model調査ノート](../research/cals-table-elements.md)を参照する。
