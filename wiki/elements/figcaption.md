---
status: 完成
---

# `<figcaption>`

## 概要

2010年1月、HTML5草案の`figure` キャプションを`dt`／`dd`で表す方式が意味、構造、後方互換性の問題を指摘され、専用の`figcaption`へ変更された。さらに遡ると、HTML+ `FIG`／`CAPTION`をWHATWGの`figure` キャプション構造へ採用した因果を確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、親が`figure`である場合に、その残りの内容のキャプションまたは凡例を表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element)、2026-08-09確認）

## HTMLへの導入

2009年9月のW3C Bug 7657と7669は、`dt`／`dd`を`dl`と異なる意味・構造で再利用する混乱、旧IEでのDOM互換性問題、不要な内容ラッパーを指摘し、`figure`専用キャプション要素を求めた。この問題はHTML WG ISSUE-83へ昇格し、2010年1月の変更提案では`fcaption`の代案として`figcaption`という名称も明示された。[Bug 7657](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=7657)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7657)） [Bug 7669](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=7669)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7669)） [変更提案](../../raw/www.w3.org/html/wg/wiki/ChangeProposals/DdDtFcaptionDlabel)（[公開元](https://www.w3.org/html/wg/wiki/ChangeProposals/DdDtFcaptionDlabel)）

2010年1月30日、WHATWGエディターIan Hicksonが`figure`のキャプション機構を専用`figcaption`へ変更し、キャプション以外のフロー内容を直接置く構造、定義、例を追加した。HTML WGはこの編集を受けてISSUE-83を円満な解決として閉じた。[仕様コミット](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)） [ISSUE-83](../../raw/www.w3.org/html/wg/tracker/issues/83)（[公開元](https://www.w3.org/html/wg/tracker/issues/83)）

## HTML直前の祖先

HTML5草案の`figure`＋`dt`／`dd` キャプション機構。2010年コミットが`dt`／`dd`を除き、専用`figcaption`と直接のフロー内容へ置換したことを示す。

## さらに上流の由来

### 証拠

2006年、Simon PietersはHTML+ `FIG`／`CAPTION`を示してHTML5向けの再利用を提案し、Ian Hicksonは`caption`のパーサー問題と`fig`から`figure`への名称変更を除いて同意し、仕様へ追加したと説明した。Michel Fortinは科学・技術出版物におけるfigureとキャプションの慣習を`figure`提案名の理由として示し、ニュースサイトやWikipedia等のWeb上の実例を設計要求として提示した。このキャプション構造は`legend`、`dt`／`dd`を経て`figcaption`へ置換された。[Pietersの提案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)） [Hicksonの総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)）

### 解釈

出版における図版・キャプションの慣習はキャプション概念の上流にあり、Web制作者による実例がHTMLの図キャプション構造を求める直接の材料になった。その構造は、HTML+からHTML5へ採用された後、パーサー制約から既存要素を二度流用し、意味・構造・互換性の問題を解消するため専用要素へ深化した。ただし出版慣習から個々のWeb実践へ伝わった具体的な経路は確認できず、HTML+ `CAPTION`から`figcaption`への直接改名でもない。

## 系譜

HTML+ `FIG`＋`CAPTION` → WHATWG HTML `figure`＋`legend` → `figure`＋`dt`／`dd` → `figure`＋`figcaption`（2010年） → 現行HTML `figcaption`

最初の矢印は2006年の提案とHicksonの採用説明、中間の二矢印は2009年の公開メール、Bug 7657／7669、ISSUE-83、2010年の仕様コミットで確認できる。[2006年の総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)） [2009年の公開メール](../../raw/lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)） [ISSUE-83](../../raw/www.w3.org/html/wg/tracker/issues/83)（[公開元](https://www.w3.org/html/wg/tracker/issues/83)）

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ “Figures”](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)） | 失効したInternet-Draft | `FIG`の子`CAPTION`という先行存在。WHATWGへの採用因果は示さない。 | 2026-08-09 |
| 2006-04-22 | [Simon Pieters, image caption proposal](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)） | WHATWGメーリングリスト | HTML+ `FIG`／`CAPTION`を明示し、HTML5向けの再利用案を提示した。 | 2026-08-10 |
| 2006-11-28 | [“many messages regarding image captions”](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)） | WHATWG意見総括／W3C保存メール | 科学・技術出版物のfigure慣習とWeb上のキャプション実例、HicksonによるHTML+案への同意、二つの構文変更、仕様への追加。 | 2026-08-10 |
| 2009-09-15 | [“Re: `<details>`”](../../raw/lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)） | W3C public-htmlメーリングリスト | `details`向け`dt`／`dd`案を`figure`にも適用した経緯。 | 2026-08-10 |
| 2009-09-17–2010-03-30 | W3C Bug 7657／7669：[Bug 7657](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=7657)・[Bug 7669](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=7669)（[公開元1](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7657)・[公開元2](https://www.w3.org/Bugs/Public/show_bug.cgi?id=7669)） | Bugzilla | `dt`／`dd`再利用の意味・構造・互換性問題と、専用キャプション要素および直接の内容を求める要求。 | 2026-08-10 |
| 2009-09-29–2010-02-12 | [HTML WG ISSUE-83](../../raw/www.w3.org/html/wg/tracker/issues/83)（[公開元](https://www.w3.org/html/wg/tracker/issues/83)） | 論点追跡機構 | 代替案の審議と仕様編集後の円満な解決。 | 2026-08-10 |
| 2010-01-13 | [“Change Proposal: `<fcaption>` and `<dlabel>`”](../../raw/www.w3.org/html/wg/wiki/ChangeProposals/DdDtFcaptionDlabel)（[公開元](https://www.w3.org/html/wg/wiki/ChangeProposals/DdDtFcaptionDlabel)） | HTML WG変更提案 | `fcaption`の代案として`figcaption`を明示し、専用キャプション要素と直接の内容を提案した。 | 2026-08-10 |
| 2010-01-30 | [WHATWG HTML commit `c3974951`](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)） | 仕様コミット | `dt`／`dd`を専用`figcaption`と直接のフロー内容へ変更。 | 2026-08-10 |

## 確度

**A**

HTML5草案内の直前のキャプション構造から専用要素へ置換した要求、名称案、導入主体、日付を論点、変更提案、仕様コミットで直接確認できるため。

## 否定された仮説

HTML+ `CAPTION`から`figcaption`へ直接改名したという説明。HTML+構造からHTML5への採用は確認できるが、`legend`と`dt`／`dd`を経た二段階の置換があり、`figcaption`の直接祖先はHTML5草案のキャプション機構である。

## 未解決

なし。
