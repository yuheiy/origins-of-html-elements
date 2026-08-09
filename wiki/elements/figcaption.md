# `<figcaption>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。2010年のHTML5 caption機構からの置換を検証済み（HTML+からの採用因果は未確認）

## 概要

2010年1月、HTML5草案の`figure` captionを`dt`／`dd`または`legend`で表す方式から、専用の`figcaption`へ変更して導入された。HTML+ `CAPTION`との採用因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、親が`figure`である場合に、その残りの内容のcaptionまたはlegendを表す。[一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element)（2026-08-09確認）

## HTMLへの導入

2010年1月30日、WHATWG editor Ian Hicksonが`figure`のcaption機構を`dt`／`dd`または`legend`から専用`figcaption`へ変更し、定義と例を追加した。[仕様commit](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)

## HTML直前の祖先

HTML5草案の`figure` caption機構。2006年導入時は`legend`、その後`dt`／`dd`を使用し、2010年commitが専用`figcaption`で置換したことを明記する。

## さらに上流の由来

### 証拠

1993年HTML+に`FIG`の子`CAPTION`が存在したことは確認できるが、WHATWGの変更commitはそこからの採用を述べない。

### 解釈

既存要素を流用していたcaption構造を、figure専用の明示的な要素へdeepeningした変更と解釈できる。

## 系譜

HTML5 `figure`＋`legend` → `figure`＋`dt`／`dd` → `figure`＋`figcaption`（2010年） → 現行HTML `figcaption`

HTML+ `FIG`／`CAPTION`は採用因果が未確認のため接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ “Figures” | 失効したInternet-Draft | `FIG`の子`CAPTION`という先行存在。WHATWGへの採用因果は示さない。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html) | 2026-08-09 |
| 2006-11-27 | WHATWG HTML commit `32bff0ac` | 仕様commit | `figure`導入時にcaptionとして`legend`を再利用。 | [一次資料](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059) | 2026-08-09 |
| 2010-01-30 | WHATWG HTML commit `c3974951` | 仕様commit | `dt`／`dd`または`legend`によるcaptionを専用`figcaption`へ変更。 | [一次資料](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f) | 2026-08-09 |

## 確度

**A**

HTML5草案内の直前のcaption構造から専用要素へ置換した因果、導入主体、日付を仕様commitで直接確認できるため。

## 否定された仮説

HTML+ `CAPTION`から直接採用したという説明。名称と役割の類似だけであり、WHATWG commitは採用関係を述べない。

## 未解決

- `legend → dt/dd`の変更を促したissueと正確な時期は何か。
- `figcaption`という名称の提案過程は確認できるか。

## 調査記録

HTML+、2006年と2010年のWHATWG commit、2008年W3C差分草案を確認した。HTML+との採用因果は確認できなかった。横断比較は[HTML5 semantic elements調査ノート](../research/html5-semantic-elements.md)を参照する。

2026-08-09の敵対的レビューでは、HTML+ `FIG/CAPTION`、2006年`figure`導入commit、2008年草案、2010年`figcaption`導入commit patchを再読し、`legend`・`dt/dd`から専用要素への置換と日付を照合した。HTML+を競合祖先として再確認したが採用記録はなく、HTML5内部の直接系譜と確度Aを維持した。
