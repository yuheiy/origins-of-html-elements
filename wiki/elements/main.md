# `<main>`

> 状態: 完成

## 概要

WAI-ARIA `main` landmarkと`div role="main"`、`id=main/content`等の既存Web慣習を、2012年の提案がnative HTML要素へ形式化したものである。

## 現在の意味

WHATWG HTML Living Standardではdocumentのdominant contentsを表す。`hidden`でない`main`を一つのdocumentに複数置くことはできない。[一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element)（2026-08-09確認）

## HTMLへの導入

Steve Faulknerは2012年9月9日、ARIA `main` roleに対応するHTML要素がなく、authorsが`id="main"`／`id="content"`と`role="main"`を使っていることを根拠に`maincontent`を提案した。2012年12月17日のW3C FPWDは名称を`main`とし、accessibility technologyがmain contentを認識・移動できるようにする要素として定義した。2013年1月11日にHTML5 editor's draftへの統合が告知された。[提案](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html) [FPWD](https://www.w3.org/TR/2012/WD-html-main-element-20121217/) [統合告知](https://lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)

## HTML直前の祖先

WAI-ARIA `main` landmarkと`<div role="main">`が直接祖先である。提案とFPWDがARIA analogueを作る採用因果を明記する。`id=main`／`id=content`等は実態調査を通じて提案を支えた別枝である。[XHTML Role](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/) [WAI-ARIA](https://www.w3.org/TR/2008/WD-wai-aria-20080806/#main) [使用調査](https://lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)

## さらに上流の由来

### 証拠

2006年XHTML Role Moduleの`main` roleからWAI-ARIA landmarkへ続くWeb accessibility技術を確認できる。

### 解釈

ARIA landmarkと既存の`div`／`id`慣習という二つの枝を、明示的でUAが信頼できるnative elementへ合流させたと解釈できる。

## 系譜

XHTML Role `main` → WAI-ARIA `main` landmark → `<div role="main">`＋`id`／`class`慣習 → W3C `maincontent`提案／`main` FPWD（2012年） → HTML5 editor's draft統合（2013年） → 現行HTML `<main>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2006-07-25 | XHTML Role Attribute Module | W3C Working Draft | HTML要素以前の`main` role。 | [一次資料](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/) | 2026-08-09 |
| 2008-08-06 | WAI-ARIA 1.0 Working Draft | W3C Working Draft | 一つのmain content areaを示すlandmark `main`。 | [一次資料](https://www.w3.org/TR/2008/WD-wai-aria-20080806/#main) | 2026-08-09 |
| 2012-09-09、2012-10-17 | Steve Faulknerの提案と使用調査 | W3C public-html投稿 | ARIA analogueと既存`id`／`class`慣習を要素化する提案、その実態調査。 | [提案](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html) / [調査](https://lists.w3.org/Archives/Public/public-html/2012Oct/0109.html) | 2026-08-09 |
| 2012-12-17 | *HTML Main Element* | W3C First Public Working Draft | 名称を`main`として定義し、ARIAと既存Web慣習との採用因果を説明。 | [一次資料](https://www.w3.org/TR/2012/WD-html-main-element-20121217/) | 2026-08-09 |
| 2013-01-11 | Robin Berjon, integration announcement | W3C public-html投稿 | `main`仕様をHTML5 editor's draftへ統合した告知。 | [一次資料](https://lists.w3.org/Archives/Public/public-html/2013Jan/0033.html) | 2026-08-09 |

## 確度

**A**

提案者とFPWDがARIA `main`のHTML analogueと既存Web markupの形式化という採用因果を明記するため。

## 否定された仮説

紙媒体の本文概念から直接採用したという説明。確認できる直前経路はARIAとWeb markupである。`id="main"`の頻度だけを起源とする説明も採用せず、提案者が調査を設計根拠に使った範囲に限る。初期提案名を`main`とする説明も誤りで、当初は`maincontent`だった。

## 未解決

- `maincontent`から`main`への名称決定を行った正確な記録はあるか。
- W3C editor's draftからWHATWG Living Standardへ入った最初のcommitはどれか。
- XHTML Roleの`main`を発案した人物と、それ以前の要求資料は何か。
