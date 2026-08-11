---
status: 完成
---

# `<figure>`

## 概要

2006年11月、Ian Hicksonが埋め込み内容とキャプションからなる段落としてWHATWG HTMLへ追加した。Michel Fortinによる`figure`提案と実例調査、Simon Pietersが示したHTML+ `FIG`／`CAPTION`を受け、HTML+案の`fig`を`figure`、パーサー上再利用できない`caption`を`legend`へ変えて採用したことをHickson自身が同時代メールで説明している。キャプション構造はその後`dt`／`dd`を経て専用`figcaption`へ変わり、各変更理由も公開議論と論点で確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、任意のキャプションを伴い、自己完結していて、通常は文書の主たる流れから一単位として参照されるフロー内容を表す。最初の子`figcaption`があれば内容のキャプションとなる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element)、2026-08-09確認）

## HTMLへの導入

2006年11月27日、Ian Hicksonが`figure`と関連規則をWHATWG HTMLソースへ追加した。直前の[親ソース](https://github.com/whatwg/html/blob/18322b5f67ea55395dad2183244a905174da971f/source)にはこの定義がなく、導入コミットは`figure`を埋め込み内容とキャプションからなる段落とし、キャプションに既存`legend`を使った。[仕様コミットと親との差分](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)

翌28日にHicksonが公開した意見総括は、Fortinが`figure`を提案しニュース、科学・技術出版物、Wikipedia等の実例を示したことに同意し、PietersがHTML+の`FIG`／`CAPTION`を示して再利用を提案した箇所では、`caption`のパーサー問題と`fig`ではなく`figure`を使う点を除いて同意し、仕様へ追加したと明記する。`caption`は表構文解析を壊すため再利用できず、同じキャプション概念を表しパーサーで扱える既存`legend`を選んだとも説明している。[PietersによるHTML+案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html) [Fortinの`figure`提案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html) [WHATWGフィードバック総括](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)

同じメールに現れるDocBook参照は`h6`をDocBook `simplesect`のように使う別提案への言及で、Hicksonは見出し処理を複雑にするとして退けており、`figure`の採用根拠ではない。2006年7月のXHTML 2 Working Draftは`object`の子`caption`を定義していたが、意見総括はXHTML 2を参照しない。この二者から`figure`を採用した因果は確認できない。[WHATWGフィードバック総括](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html) [XHTML 2 Object Module](https://www.w3.org/TR/2006/WD-xhtml2-20060726/mod-object.html)

2009年9月15日、Jeremy Keithが`details`のラベルと本文へ`dt`／`dd`を再利用する案を示すと、Hicksonは採用を明言し、同時に`figure`にも適用したと説明した。ただしHickson自身も`figure`での`dt`／`dd`は`legend`より直感的でないと述べており、メールは`figure`固有の要求ではなく、`details`へ出された構文案を`figure`にも揃えた経緯を示す。[公開メール](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html) [仕様コミットと親との差分](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)

2009年9月17日のW3C Bug 7657は、`dt`／`dd`を`dl`、`figure`、`details`で異なる構造と意味に再利用することによる作者の混乱を問題にした。Bug 7669は`figure`専用キャプション要素と、キャプション以外の内容を直接置く単純な構造を求めた。コメントではIE 6／7が`dl`外の`dt`／`dd`から期待と異なるDOMを作る後方互換性問題も報告され、HTML WG ISSUE-83へ昇格した。[Bug 7657](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7657) [Bug 7669](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7669) [ISSUE-83](https://www.w3.org/html/wg/tracker/issues/83)

ISSUE-83の変更提案は、後方互換性、既存スタイルシートとの衝突、不適切な既定スタイル、`dl`との構造・意味の違い、不要な本文ラッパーを理由に`dt`／`dd`の廃止を求め、HTMLの構造化要素には専用の子要素を使う設計パターンから`figcaption`案を提示した。2010年1月30日の仕様コミットは`figure`のキャプションを`figcaption`へ、本文を直接のフロー内容へ変更した。HTML WGはこの編集を受けてISSUE-83を円満な解決として閉じた。[同時代の変更提案](https://wiki.whatwg.org/index.php?title=Change_Proposal:_figure_and_details&oldid=4382) [仕様コミットと親差分](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f) [ISSUE-83](https://www.w3.org/html/wg/tracker/issues/83)

## HTML直前の祖先

HTML+の`FIG`／`CAPTION`と、Michel Fortinが2006年に提案した`figure`構造および実在する発行者の画像とキャプション利用例である。HicksonはHTML+案について二つの構文差を除いて同意して仕様へ追加したと述べ、Fortinの原提案を支持しているため、採用因果を直接確認できる。[HTML+ Figures](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html) [WHATWGフィードバック総括](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)

## さらに上流の由来

### 証拠

HTML+は`FIG`に画像ソース、子`CAPTION`、テキスト代替内容をまとめていた。Pietersはこの構造をHTML5用に`fig`コンテナー、子`caption`、子`img`として示し、Hicksonは`caption`のパーサー問題と要素名を除いて採用した。Fortinの提案と利用例調査は、画像とキャプションを明示的に結び、主たる流れから分離できる図構造への要求を示した。[HTML+ Figures](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html) [WHATWGフィードバック総括](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)

### 解釈

WHATWG案はHTML+構造をそのまま複製せず、Fortinによる`figure`という綴りと収集されたWeb上の利用例を取り込み、HTMLパーサーの制約から`caption`を`legend`へ置き換えた設計である。DocBookまたはXHTML 2からの追加影響は確認できない。

## 系譜

[HTML+ `FIG`＋`CAPTION`]＋[Michel Fortin `figure`提案／発行者利用例]＋[`caption`のパーサー制約] → WHATWG HTML `figure`＋`legend`（2006年） → `figure`＋`dt`／`dd`（2009年） → `figure`＋`figcaption`（2010年） → 現行HTML `figure`

最初の矢印は`details`へ出された`dt`／`dd`再利用案をHicksonが`figure`にも適用した変更である。次の矢印はBug 7657／ISSUE-83で記録された意味・構造・後方互換性の問題を解消するための専用キャプション要素への置換である。[2009年の公開メール](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html) [Bug 7657](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7657) [変更提案](https://wiki.whatwg.org/index.php?title=Change_Proposal:_figure_and_details&oldid=4382)

DocBook `figure`／`title`とXHTML 2 `object`／`caption`は、WHATWG `figure`への採用因果が未確認のため接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ “Figures”](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)） | 失効したInternet-Draft | `FIG`と子`CAPTION`の先行存在。WHATWGへの採用因果は示さない。 | 2026-08-10 |
| 2006-04-22 | [Simon Pieters, image caption proposal](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)） | WHATWGメーリングリスト | HTML+ `FIG`／`CAPTION`を明示して、`fig`、`caption`、`img`によるHTML5向け再利用案を提示した。 | 2026-08-10 |
| 2006-05-03 | [Michel Fortin, formal `figure` proposal](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html)） | WHATWGメーリングリスト | `figure`、任意の`caption`、例示的な内容の構造と、主たる流れから分離可能な意味を提案した。 | 2026-08-10 |
| 2006-07-26 | [XHTML 2.0 Working Draft](../../raw/www.w3.org/TR/2006/WD-xhtml2-20060726/mod-object.html)（[公開元](https://www.w3.org/TR/2006/WD-xhtml2-20060726/mod-object.html)） | W3C Working Draft | `object`が任意の先頭子`caption`を持つ先行構造。`figure`要素は定義せず、WHATWGへの採用因果も示さない。 | 2026-08-10 |
| 2006-10-01 | [DocBook V4.5](../../raw/tdg.docbook.org/tdg/4.5/figure)（[公開元](https://tdg.docbook.org/tdg/4.5/figure)） | OASIS Standard／公式要素参照 | `figure`を必須`title`を持つ正式オブジェクトとして定義する。WHATWGへの採用因果は示さない。 | 2026-08-10 |
| 2006-11-27 | [WHATWG HTML commit `32bff0ac`](../../raw/github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)（[公開元](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)） | 仕様コミット／親差分 | Ian Hicksonによる`figure`の追加、埋め込み内容とキャプションのモデル、`legend`の再利用。 | 2026-08-10 |
| 2006-11-28 | [“many messages regarding image captions”](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)） | WHATWG意見総括／W3C保存メール | Fortinの`figure`提案と発行者利用例、PietersによるHTML+案の提示、Hicksonによる採用回答、`caption`を避け`legend`を使うパーサー上の理由。DocBookへの別件の言及は採用せず、XHTML 2は参照しない。 | 2026-08-10 |
| 2009-09-15 | [“Re: `<details>`”](../../raw/lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)） | W3C public-htmlメーリングリスト | `details`へ出された`dt`／`dd`案をHicksonが受諾し、同時に`figure`にも適用したこと、`figure`では`legend`より直感的でないと認識していたこと。 | 2026-08-10 |
| 2009-09-15 | [WHATWG HTML commit `9c490f21`](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)） | 仕様コミット／親差分 | `figure`と`details`を`legend`から`dt`／`dd`へ変更した。 | 2026-08-10 |
| 2009-09-17–2010-03-30 | [W3C Bug 7657](../../raw/www.w3.org/Bugs/Public/show_bug.cgi-2867df8a72c94218)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7657)） | Bugzilla | `dt`／`dd`再利用による意味・構造上の混乱、IE 6／7のDOM互換性問題、ISSUE-83への昇格、修正後の解決。 | 2026-08-10 |
| 2009-09-17 | [W3C Bug 7669](../../raw/www.w3.org/Bugs/Public/show_bug.cgi-e603fef40f4a1959)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7669)） | Bugzilla | `figure`専用キャプション要素を追加し、キャプション以外の内容を直接置いて構造を単純化する要求。 | 2026-08-10 |
| 2009-09-29–2010-02-12 | [HTML WG ISSUE-83](../../raw/www.w3.org/html/wg/tracker/issues/83)（[公開元](https://www.w3.org/html/wg/tracker/issues/83)） | 論点追跡機構 | Bug 7657からの昇格、代替案の審議、仕様編集後の円満な解決。 | 2026-08-10 |
| 2010-01-12 | [“Change Proposal: figure and details”](../../raw/wiki.whatwg.org/index.php-ab175fe94c92f193)（[公開元](https://wiki.whatwg.org/index.php?title=Change_Proposal:_figure_and_details&oldid=4382)） | WHATWG Wiki上の同時代変更提案 | 後方互換性、スタイルシート、既定スタイル、構造・意味、余分なラッパーの問題と、専用`figcaption`案の要求。 | 2026-08-10 |
| 2010-01-30 | [WHATWG HTML commit `c3974951`](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)） | 仕様コミット／親差分 | `dt`／`dd`を除き、専用`figcaption`と直接のフロー内容へ変更した。 | 2026-08-10 |

## 確度

**A**

HTML+ `FIG`／`CAPTION`とFortinの具体的提案・利用例からWHATWG `figure`を設計し、`caption`のパーサー問題を避けて`legend`へ変えた因果をHicksonの同時代説明で確認できる。後続の`dt`／`dd`、`figcaption`への変更も公開メール、論点、仕様コミットで確認できるため。

## 否定された仮説

HTML+ `FIG`からの採用を名称と構造の類似だけに基づく仮説として退ける説明。Hicksonの同時代メールがHTML+案への同意と仕様への追加を明記するため、この仮説は直接証拠のある系譜へ移した。

DocBook `figure`またはXHTML 2 `object`から直接採用したという説明。DocBookへの同時代メール中の言及は見出し処理に関する別提案であり、XHTML 2は意見総括に現れない。XHTML 2の2006年草案も`figure`要素ではなく`object`の子として`caption`を定義していたため、両者は採用系譜へ接続しない。

`legend`から`dt`／`dd`への変更が`figure`固有の要件から生じたという説明。公開メールが直接示すのは、`details`へ出された再利用案を受諾した際にHicksonが`figure`も同じ構造へ変更したことまでであり、`figure`固有の要求は示さない。

## 未解決

- DocBookまたはXHTML 2が、確認済みのHTML+／Fortin系統とは別に2006年WHATWG `figure`の設計へ影響したことを示す同時代記録はあるか。
