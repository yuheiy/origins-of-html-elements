---
status: 完成
---

# `<main>`

## 概要

WAI-ARIA `main`ランドマークと`div role="main"`、`id=main/content`等の既存Web慣習を、2012年の提案がネイティブHTML要素へ形式化したものである。

## 現在の意味

WHATWG HTML Living Standardでは文書の主要な内容を表す。`hidden`でない`main`を一つの文書に複数置くことはできない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element)、2026-08-09確認）

## HTMLへの導入

Steve Faulknerは2012年9月9日、ARIA `main`役割に対応するHTML要素がなく、著者が`id="main"`／`id="content"`と`role="main"`を使っていることを根拠に`maincontent`を提案した。2012年12月17日のW3C FPWDは名称を`main`とし、アクセシビリティ支援技術が主要内容を認識・移動できるようにする要素として定義した。2013年1月11日にHTML5エディター草案への統合が告知された。[提案](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html) [FPWD](https://www.w3.org/TR/2012/WD-html-main-element-20121217/) [統合告知](https://lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)

## HTML直前の祖先

WAI-ARIA `main`ランドマークと`<div role="main">`が直接祖先である。提案とFPWDがARIA上の対応物を作る採用因果を明記する。`id=main`／`id=content`等は実態調査を通じて提案を支えた別枝である。[XHTML Role](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/) [WAI-ARIA](https://www.w3.org/TR/2008/WD-wai-aria-20080806/#main) [使用調査](https://lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)

## さらに上流の由来

### 証拠

2006年XHTML Role Moduleの`main` 役割からWAI-ARIAランドマークへ続くWebアクセシビリティ技術を確認できる。

### 解釈

ARIAランドマークと既存の`div`／`id`慣習という二つの枝を、明示的でUAが信頼できるネイティブ要素へ合流させたと解釈できる。

## 系譜

XHTML Role `main` → WAI-ARIA `main`ランドマーク → `<div role="main">`＋`id`／`class`慣習 → W3C `maincontent`提案／`main` FPWD（2012年） → HTML5エディター草案統合（2013年） → 現行HTML `<main>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2006-07-25 | [XHTML Role Attribute Module](../../raw/www.w3.org/TR/2006/WD-xhtml-role-20060725/index.html)（[公開元](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/)） | W3C Working Draft | HTML要素以前の`main`役割。 | 2026-08-09 |
| 2008-08-06 | [WAI-ARIA 1.0 Working Draft](../../raw/www.w3.org/TR/2008/WD-wai-aria-20080806/index.html)（[公開元](https://www.w3.org/TR/2008/WD-wai-aria-20080806/#main)） | W3C Working Draft | 一つの主要内容領域を示すランドマーク `main`。 | 2026-08-09 |
| 2012-09-09、2012-10-17 | Steve Faulknerの提案と使用調査：[提案](../../raw/lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)・[調査](../../raw/lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)（[公開元1](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)・[公開元2](https://lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)） | W3C public-html投稿 | ARIA上の対応物と既存`id`／`class`慣習を要素化する提案、その実態調査。 | 2026-08-09 |
| 2012-12-17 | [*HTML Main Element*](../../raw/www.w3.org/TR/2012/WD-html-main-element-20121217/index.html)（[公開元](https://www.w3.org/TR/2012/WD-html-main-element-20121217/)） | W3C First Public Working Draft | 名称を`main`として定義し、ARIAと既存Web慣習との採用因果を説明。 | 2026-08-09 |
| 2013-01-11 | [Robin Berjon, integration announcement](../../raw/lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)） | W3C public-html投稿 | `main`仕様をHTML5エディター草案へ統合した告知。 | 2026-08-09 |

## 確度

**A**

提案者とFPWDがARIA `main`のHTML上の対応物と既存Webマークアップの形式化という採用因果を明記するため。

## 否定された仮説

紙媒体の本文概念から直接採用したという説明。確認できる直前経路はARIAとWebマークアップである。`id="main"`の頻度だけを起源とする説明も採用せず、提案者が調査を設計根拠に使った範囲に限る。初期提案名を`main`とする説明も誤りで、当初は`maincontent`だった。

## 未解決

- `maincontent`から`main`への名称決定を行った正確な記録はあるか。
- W3Cエディター's草案からWHATWG Living Standardへ入った最初のコミットはどれか。
- XHTML Roleの`main`を発案した人物と、それ以前の要求資料は何か。
