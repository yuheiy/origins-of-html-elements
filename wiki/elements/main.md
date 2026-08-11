---
status: 完成
---

# `<main>`

## 概要

2005年までにXHTML 2の標準Role Collectionへ入った`main`役割はWAI-ARIAランドマークへ継承され、`div role="main"`、`id=main/content`等の既存Web慣習とともに2012年の提案がネイティブHTML要素へ形式化した。2013年1月、WHATWGはW3C案より広く、任意の要素の主要内容を包む要素として初めて統合した。

## 現在の意味

WHATWG HTML Living Standardでは文書の主要な内容を表す。`hidden`でない`main`を一つの文書に複数置くことはできない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element)、2026-08-09確認）

## HTMLへの導入

Steve Faulknerは2012年9月9日、ARIA `main`役割に対応するHTML要素がなく、著者が`id="main"`／`id="content"`と`role="main"`を使っていることを根拠に`maincontent`を提案した。10月17日の使用調査も`<maincontent>`と呼ぶ一方、11月7日にFaulknerは`main`要素の構文解析について実装者の助言を求めている。改名はこの間に行われたが、名称決定そのものを記録した公開資料は確認できない。[提案](../../raw/lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)） [使用調査](../../raw/lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)） [構文解析の相談](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/037800.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/037800.html)）

11月16日、Ian Hicksonは、専用要素の用途は既存の`article`、`div`、他のセクショニング要素等で扱え、実態調査には正しい利用を保証しない偏りがあるとしてWHATWGへの採用に反対した。W3Cは12月17日のFPWDで`main`を文書またはアプリケーションの主要内容として定義し、2013年1月11日にHTML5エディター草案への統合を告知した。[WHATWGでの反対論](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/080251.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/080251.html)） [FPWD](../../raw/www.w3.org/TR/2012/WD-html-main-element-20121217/__index)（[公開元](https://www.w3.org/TR/2012/WD-html-main-element-20121217/)） [統合告知](../../raw/lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)）

2013年1月31日、HicksonはWHATWG仕様コミットr7680で`main`を初めて追加した。コミットは要素定義、ARIA `main`の暗黙的役割、構文解析、描画、要素索引を一括して導入し、W3C案の文書に一つという設計とは異なり、任意の要素の主要内容を包めるものとして定義した。[WHATWG初回統合コミット](../../raw/github.com/whatwg/html/commit/7761b993b22765dbd26ca229d8d89bcb5044392c)（[公開元](https://github.com/whatwg/html/commit/7761b993b22765dbd26ca229d8d89bcb5044392c)）

## HTML直前の祖先

WAI-ARIA `main`ランドマークと`<div role="main">`が直接祖先である。提案とFPWDがARIA上の対応物を作る採用因果を明記する。`id=main`／`id=content`等は実態調査を通じて提案を支えた別枝である。[XHTML Role](../../raw/www.w3.org/TR/2006/WD-xhtml-role-20060725/__index)（[公開元](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/)） [WAI-ARIA](../../raw/www.w3.org/TR/2008/WD-wai-aria-20080806/__index)（[公開元](https://www.w3.org/TR/2008/WD-wai-aria-20080806/#main)） [使用調査](../../raw/lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)）

## さらに上流の由来

### 証拠

2004年7月22日のXHTML 2草案にRole Collectionはなく、2005年5月27日草案は`main`をアクセシビリティ用の標準役割として定義し、アクセスキーで主要内容へ移動する例を示す。したがって、XHTML系で確認できる追加区間はこの二版の間である。[2004年XHTML 2草案](../../raw/www.w3.org/TR/2004/WD-xhtml2-20040722/__index)（[公開元](https://www.w3.org/TR/2004/WD-xhtml2-20040722/)） [2005年XHTML 2 Role Collection](../../raw/www.w3.org/TR/2005/WD-xhtml2-20050527/mod-role.html)（[公開元](https://www.w3.org/TR/2005/WD-xhtml2-20050527/mod-role.html)）

Mark Birbeckは2005年9月、`role`はアクセシビリティ専門家の作業から生まれ、音声ブラウザーやモバイル機器がマークアップ言語をまたいで文書の要点を識別するためのものだと説明し、T. V. Ramanを原設計者の一人として挙げた。この説明は`role`機構の要求と設計者を示すが、標準語彙`main`の個別発案者までは示さない。[Birbeckによる`role`の説明](../../raw/lists.w3.org/Archives/Public/www-html/2005Sep/0003.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/2005Sep/0003.html)）

### 解釈

XHTML 2の`main`役割からWAI-ARIAランドマークへ続く役割語彙と、既存の`div`／`id`慣習という二つの枝を、明示的でUAが認識できるネイティブ要素へ合流させたと解釈できる。WHATWGの初回統合はW3C案をそのまま複製せず、既存の`div`利用を置き換える汎用コンテナーへ広げた別の編集判断である。

## 系譜

XHTML 2 Role Collection `main`（2005年まで） → XHTML Role Module／WAI-ARIA `main`ランドマーク → `<div role="main">`＋`id`／`class`慣習 → W3C `maincontent`提案 → `main`へ改名（2012年10月17日後〜11月7日まで） → W3C FPWD／HTML5エディター草案統合 → WHATWG r7680で初回統合（2013年） → 現行HTML `<main>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-07-22 | [XHTML 2.0 Working Draft](../../raw/www.w3.org/TR/2004/WD-xhtml2-20040722/__index)（[公開元](https://www.w3.org/TR/2004/WD-xhtml2-20040722/)） | W3C Working Draft | Role Collectionも`main`役割もまだない追加前の境界。 | 2026-08-11 |
| 2005-05-27 | [XHTML 2.0 Role Collection](../../raw/www.w3.org/TR/2005/WD-xhtml2-20050527/mod-role.html)（[公開元](https://www.w3.org/TR/2005/WD-xhtml2-20050527/mod-role.html)） | W3C Working Draft | アクセシビリティ用の標準`main`役割と、主要内容へ移動するアクセスキー例。 | 2026-08-11 |
| 2005-09-02 | [Mark Birbeckによる`role`の説明](../../raw/lists.w3.org/Archives/Public/www-html/2005Sep/0003.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/2005Sep/0003.html)） | W3C www-html投稿 | `role`のアクセシビリティ、音声、モバイル上の要求と、原設計者の一人T. V. Raman。 | 2026-08-11 |
| 2006-07-25 | [XHTML Role Attribute Module](../../raw/www.w3.org/TR/2006/WD-xhtml-role-20060725/__index)（[公開元](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/)） | W3C Working Draft | HTML要素以前の`main`役割。 | 2026-08-09 |
| 2008-08-06 | [WAI-ARIA 1.0 Working Draft](../../raw/www.w3.org/TR/2008/WD-wai-aria-20080806/__index)（[公開元](https://www.w3.org/TR/2008/WD-wai-aria-20080806/#main)） | W3C Working Draft | 一つの主要内容領域を示すランドマーク `main`。 | 2026-08-09 |
| 2012-09-09、2012-10-17 | Steve Faulknerの提案と使用調査：[提案](../../raw/lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)・[調査](../../raw/lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)（[公開元1](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)・[公開元2](https://lists.w3.org/Archives/Public/public-html/2012Oct/0109.html)） | W3C public-html投稿 | ARIA上の対応物と既存`id`／`class`慣習を要素化する提案、その実態調査。 | 2026-08-09 |
| 2012-11-07 | [`main`の構文解析に関する相談](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/037800.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/037800.html)） | WHATWGメール | 10月17日の`maincontent`後に`main`という名称と実装相談を確認できる改名後の境界。 | 2026-08-11 |
| 2012-11-16 | [Ian Hicksonの反対論](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/080251.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/080251.html)） | WHATWGメール | 既存要素で用途を扱えることと、利用実態データの限界を理由とする不採用判断。 | 2026-08-11 |
| 2012-12-17 | [*HTML Main Element*](../../raw/www.w3.org/TR/2012/WD-html-main-element-20121217/__index)（[公開元](https://www.w3.org/TR/2012/WD-html-main-element-20121217/)） | W3C First Public Working Draft | 名称を`main`として定義し、ARIAと既存Web慣習との採用因果を説明。 | 2026-08-09 |
| 2013-01-11 | [Robin Berjon, integration announcement](../../raw/lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2013Jan/0033.html)） | W3C public-html投稿 | `main`仕様をHTML5エディター草案へ統合した告知。 | 2026-08-09 |
| 2013-01-31 | [WHATWGコミット `7761b993`（r7680）](../../raw/github.com/whatwg/html/commit/7761b993b22765dbd26ca229d8d89bcb5044392c)（[公開元](https://github.com/whatwg/html/commit/7761b993b22765dbd26ca229d8d89bcb5044392c)） | 仕様ソースのコミット | `main`の要素定義、ARIA役割、構文解析、描画を初めて一括追加し、任意の要素の主要内容用コンテナーとして定義。 | 2026-08-11 |

## 確度

**A**

提案者とFPWDがARIA `main`のHTML上の対応物と既存Webマークアップの形式化という採用因果を明記し、XHTML 2の役割語彙からWAI-ARIAを経る直前経路とWHATWGへの初回統合も同時代資料で確認できるため。

## 否定された仮説

紙媒体の本文概念から直接採用したという説明。確認できる直前経路はARIAとWebマークアップである。`id="main"`の頻度だけを起源とする説明も採用せず、提案者が調査を設計根拠に使った範囲に限る。初期提案名を`main`とする説明も誤りで、当初は`maincontent`だった。

## 未解決

- `maincontent`から`main`への名称決定を行った正確な記録はあるか。
- 2004年7月22日後から2005年5月27日までにXHTML 2の標準Role Collectionへ`main`を追加した個人と編集記録は確認できるか。
