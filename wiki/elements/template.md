---
status: 完成
---

# `<template>`

## 概要

動的ページが利用前のHTML断片を保持する要求に対し、不活性DOM部分木を宣言して複製できる仕組みとして2011年にWHATWGへ提案された。Web Components／HTML Templates作業を経て、2013年にWHATWG HTMLへ統合された。

## 現在の意味

WHATWG HTML Living Standardでは、スクリプトで複製して文書へ挿入できるHTML断片を宣言する。描画上は何も表さない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/scripting.html)（[公開版](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)、2026-08-09確認）

## HTMLへの導入

2011年11月17日、Rafael Weinsteinは動的ページが利用前のDOM断片を不活性に保持するための`template`要素をWHATWGメーリングリストへ提案した。2012年1月9日にW3C WebAppsWGで仕様化作業が始まり、2013年2月14日のHTML Templates草案が不活性部分木とDocumentFragmentの複製を定義した。2013年6月28日、Ian Hicksonは`template`をWHATWG仕様へ統合したと記録した。WHATWGリビジョンr8000に対応する現行Gitコミットは`685a5e0b27e963f6b0a62a21cb95078171076e3b`であり、メッセージの`git-svn-id`が`webapps@8000`を直接保持する。[2011年提案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)） [仕様上のバグ報告](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__ctype=xml&id=15476)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476)） [草案](../../raw/www.w3.org/TR/2013/WD-html-templates-20130214/__index)（[公開元](https://www.w3.org/TR/2013/WD-html-templates-20130214/)） [統合記録](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=17930)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21)） [WHATWGコミット](../../raw/github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)（[公開元](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)）

この統合はW3C側のパッチをそのまま採用したものではない。HicksonはTony RossとRafael Weinsteinの文書を基にWHATWG仕様へ手作業で統合したと説明し、同日の記録でもr8000を両者の提案に基づく統合としている。[W3C Bug 17930 comments 18–21](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=17930)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c18)） [Ian Hickson, “HTML 8000”](../../raw/ln.hixie.ch/__index__q__count=1&start=1372461305)（[公開元](https://ln.hixie.ch/?count=1&start=1372461305)）

## HTML直前の祖先

2011年のWHATWG `template`提案と、その設計を仕様化したW3C WebAppsWGのHTML Templates作業である。W3C Bug 17930のコメント21–22と、メッセージにSVNリビジョン`@8000`を保持するWHATWGコミットが、この作業をWHATWG HTMLへ統合したことを直接記録する。[2011年提案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)） [HTML Templates草案](../../raw/www.w3.org/TR/2013/WD-html-templates-20130214/__index)（[公開元](https://www.w3.org/TR/2013/WD-html-templates-20130214/)） [統合記録](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=17930)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21)） [WHATWGコミット](../../raw/github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)（[公開元](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)）

## さらに上流の由来

### 証拠

2011年提案は、当時のクライアント側のテンプレート処理がJavaScript文字列、非表示のテキスト領域、非スクリプトMIMEタイプの`script`、コメント、`display: none`などを回避策として使っていたと説明する。これらの問題を解く標準構文として`template`を提案するが、特定ライブラリから採用したとは述べない。[2011年提案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)）

### 解釈

なし。

## 系譜

WHATWG `template`提案（2011年）→ W3C WebAppsWG仕様化作業／HTML Templates草案（2012–2013年）→ WHATWG HTML統合r8000／コミット `685a5e0b`（2013年）→ 現行HTML `<template>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2011-11-17 | [“Declarative Inert DOM”](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)） | WHATWGメーリングリスト提案 | 動的ページの不活性DOM断片要求、既存回避策の問題、`template`構文の提案。 | 2026-08-09 |
| 2012-01-09 | [W3C Bugzilla 15476](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__ctype=xml&id=15476)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476)） | 仕様バグ | `template`要素と関連処理を仕様化する作業。 | 2026-08-09 |
| 2013-02-14 | [*HTML Templates*](../../raw/www.w3.org/TR/2013/WD-html-templates-20130214/__index)（[公開元](https://www.w3.org/TR/2013/WD-html-templates-20130214/)） | W3C First Public Working Draft | 不活性部分木とDocumentFragment複製という導入要求と設計。 | 2026-08-09 |
| 2013-06-28 | [W3C Bug 17930 comments 18–21](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=17930)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c18)） | WHATWGエディターの統合記録 | Tony RossとRafael Weinsteinの文書を基に、WHATWG仕様へ手作業で統合したこと。 | 2026-08-09 |
| 2013-06-28 | [W3C Bug 17930 comments 21–22](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=17930)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21)） | WHATWGエディターの統合記録／チェックイン記録 | `template`をWHATWG仕様へ統合し、リビジョンr8000で“Integrate &lt;template&gt; into HTML”としてチェックインしたこと。 | 2026-08-09 |
| 2013-06-28 | [WHATWG HTML commit `685a5e0b`](../../raw/github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)（[公開元](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)） | WHATWG公式Git履歴 | `git-svn-id`が`webapps@8000`を保持し、要素、DOM API、パーサー、断片構文解析、描画をHTMLへ統合したこと。 | 2026-08-09 |
| 2013-06-28 | [“HTML 8000”](../../raw/ln.hixie.ch/__index__q__count=1&start=1372461305)（[公開元](https://ln.hixie.ch/?count=1&start=1372461305)） | WHATWGエディターによる同時代の記録 | r8000がRossとWeinsteinの提案に基づく`template`統合だったこと。 | 2026-08-09 |

## 確度

**A**

要素単位の2011年提案、W3C WebAppsWGでの仕様化、WHATWG編集者による2013年の統合記録を連続して確認できるため。

## 否定された仮説

サーバー側テンプレート、XBL、または特定のJavaScriptライブラリを直接祖先とする説明。機能は似ているが採用因果を示す資料がない。

W3C側のパッチが変更なしにWHATWGへ採用されたという説明。Hickson自身がRossとWeinsteinの文書を基に手作業で統合したと記録している。[W3C Bug 17930 comments 18–21](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=17930)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c18)）

## 未解決

- 特定のブラウザー試作または既存テンプレート仕組みからの採用記録はあるか。
- パーサー、複製、`innerHTML`規則を現行HTMLへ移した中間経路は何か。
