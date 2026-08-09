# `<figure>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。2006年WHATWGへの導入を検証済み（HTML+との採用因果は未確認）

## 概要

2006年11月、Ian Hicksonがembedded contentとcaptionからなるparagraphとしてWHATWG HTMLへ追加した。HTML+にも`FIG`が存在したが、そこから採用したことを示す史料は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、任意のcaptionを伴い、自己完結していて、通常は文書のmain flowから一単位として参照されるflow contentを表す。最初の子`figcaption`があれば内容のcaptionとなる。[一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element)（2026-08-09確認）

## HTMLへの導入

2006年11月27日、Ian Hicksonが`figure`と関連規則をWHATWG HTML sourceへ追加した。導入時はembedded contentとcaptionからなるparagraphで、captionには既存`legend`を使った。[仕様commit](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)

## HTML直前の祖先

未確認。1993年HTML+に`FIG`と子`CAPTION`が存在するが、2006年の導入commitはHTML+からの採用または派生を述べない。

## さらに上流の由来

### 証拠

HTML+ `FIG`／`CAPTION`の先行存在と、HTML5導入時に`figure`＋`legend`を使った事実はそれぞれ確認できる。

### 解釈

embedded contentとcaptionを一単位として扱う要求からHTML5 `figure`が設計されたと解釈できるが、特定の先行markup vocabularyは確定しない。

## 系譜

WHATWG HTML `figure`＋`legend`（2006年） → `figure`＋`dt`／`dd` → `figure`＋`figcaption`（2010年） → 現行HTML `figure`

HTML+ `FIG`／`CAPTION`は採用因果が未確認のため接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ “Figures” | 失効したInternet-Draft | `FIG`と子`CAPTION`の先行存在。WHATWGへの採用因果は示さない。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html) | 2026-08-09 |
| 2006-11-27 | WHATWG HTML commit `32bff0ac` | 仕様commit | `figure`の追加、embedded contentとcaptionのモデル、`legend`の再利用。 | [一次資料](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059) | 2026-08-09 |
| 2008-01-22 | HTML 5 differences from HTML 4 | W3C Working Draft | `video`と`legend`を含む`figure`の当時の構造。 | [一次資料](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements) | 2026-08-09 |
| 2010-01-30 | WHATWG HTML commit `c3974951` | 仕様commit | caption機構を専用`figcaption`へ変更。 | [一次資料](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f) | 2026-08-09 |

## 確度

**B**

導入主体、日付、導入時の設計モデルは確認できるが、具体的な先行物からの採用因果は確認できないため。

## 否定された仮説

HTML+ `FIG`から直接採用したという説明。名称とcaption構造の類似はあるが、WHATWGの導入commitは採用関係を述べない。

## 未解決

- 2006年案がHTML+、DocBook、XHTML 2等を参照した同時代記録はあるか。
- `legend → dt/dd → figcaption`の各変更を促したissueと要求は何か。

## 調査記録

HTML+、2006年と2010年のWHATWG commit、2008年W3C差分草案を確認した。HTML+等からの採用因果は確認できなかった。横断比較は[HTML5 semantic elements調査ノート](../research/html5-semantic-elements.md)を参照する。

2026-08-09の敵対的レビューでは、HTML+ `FIG/CAPTION`、2006年`figure`導入commit、2008年草案、2010年caption変更commitを再読し、Ian Hickson、導入日、embedded contentとcaptionのmodelを照合した。HTML+、DocBook、XHTML 2を競合祖先として再探索したが採用因果はなく、系譜と確度Bを維持した。
