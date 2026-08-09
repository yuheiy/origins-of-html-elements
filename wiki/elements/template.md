---
status: 完成
---

# `<template>`

## 概要

dynamic pageが利用前のHTML fragmentを保持する要求に対し、inert DOM subtreeを宣言して複製できる仕組みとして2011年にWHATWGへ提案された。Web Components／HTML Templates作業を経て、2013年にWHATWG HTMLへ統合された。

## 現在の意味

WHATWG HTML Living Standardでは、scriptでcloneしてdocumentへ挿入できるHTML fragmentを宣言する。rendering上は何も表さない。[一次定義](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)（2026-08-09確認）

## HTMLへの導入

2011年11月17日、Rafael Weinsteinはdynamic pageが利用前のDOM fragmentをinertに保持するための`template`要素をWHATWG mailing listへ提案した。2012年1月9日にW3C WebAppsWGで仕様化作業が始まり、2013年2月14日のHTML Templates草案がinert subtreeとDocumentFragmentの複製を定義した。2013年6月28日、Ian Hicksonは`template`をWHATWG仕様へmergeしたと記録した。WHATWG revision r8000に対応する現行Git commitは`685a5e0b27e963f6b0a62a21cb95078171076e3b`であり、messageの`git-svn-id`が`webapps@8000`を直接保持する。[2011年提案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html) [仕様bug](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476) [草案](https://www.w3.org/TR/2013/WD-html-templates-20130214/) [統合記録](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21) [WHATWG commit](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)

このmergeはW3C側のpatchをそのまま採用したものではない。HicksonはTony RossとRafael Weinsteinの文書を基にWHATWG仕様へ手作業で統合したと説明し、同日の記録でもr8000を両者の提案に基づく統合としている。[W3C Bug 17930 comments 18–21](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c18) [Ian Hickson, “HTML 8000”](https://ln.hixie.ch/?count=1&start=1372461305)

## HTML直前の祖先

2011年のWHATWG `template`提案と、その設計を仕様化したW3C WebAppsWGのHTML Templates作業である。W3C Bug 17930のcomments 21–22と、messageにSVN revision `@8000`を保持するWHATWG commitが、この作業をWHATWG HTMLへ統合したことを直接記録する。[2011年提案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html) [HTML Templates草案](https://www.w3.org/TR/2013/WD-html-templates-20130214/) [統合記録](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21) [WHATWG commit](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)

## さらに上流の由来

### 証拠

2011年提案は、当時のclient-side templatingがJavaScript文字列、hidden textarea、非script MIME typeの`script`、comment、`display: none`などを回避策として使っていたと説明する。これらの問題を解く標準構文として`template`を提案するが、特定libraryから採用したとは述べない。[2011年提案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)

### 解釈

なし。

## 系譜

WHATWG `template`提案（2011年）→ W3C WebAppsWG仕様化作業／HTML Templates草案（2012–2013年）→ WHATWG HTML merge r8000／commit `685a5e0b`（2013年）→ 現行HTML `<template>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2011-11-17 | “Declarative Inert DOM” | WHATWG mailing-list提案 | dynamic pageのinert DOM fragment要求、既存回避策の問題、`template`構文の提案。 | [一次資料](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html) | 2026-08-09 |
| 2012-01-09 | W3C Bugzilla 15476 | 仕様bug | `template`要素と関連処理を仕様化する作業。 | [一次資料](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476) | 2026-08-09 |
| 2013-02-14 | *HTML Templates* | W3C First Public Working Draft | inert subtreeとDocumentFragment複製という導入要求と設計。 | [一次資料](https://www.w3.org/TR/2013/WD-html-templates-20130214/) | 2026-08-09 |
| 2013-06-28 | W3C Bug 17930 comments 18–21 | WHATWG editorの統合記録 | Tony RossとRafael Weinsteinの文書を基に、WHATWG仕様へ手作業で統合したこと。 | [一次資料](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c18) | 2026-08-09 |
| 2013-06-28 | W3C Bug 17930 comments 21–22 | WHATWG editorの統合記録／check-in記録 | `template`をWHATWG仕様へmergeし、revision r8000で“Integrate &lt;template&gt; into HTML”としてcheck-inしたこと。 | [一次資料](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21) | 2026-08-09 |
| 2013-06-28 | WHATWG HTML commit `685a5e0b` | WHATWG公式Git履歴 | `git-svn-id`が`webapps@8000`を保持し、要素、DOM API、parser、fragment parsing、renderingをHTMLへ統合したこと。 | [一次資料](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b) | 2026-08-09 |
| 2013-06-28 | “HTML 8000” | WHATWG editorによる同時代の記録 | r8000がRossとWeinsteinの提案に基づく`template`統合だったこと。 | [一次資料](https://ln.hixie.ch/?count=1&start=1372461305) | 2026-08-09 |

## 確度

**A**

要素単位の2011年提案、W3C WebAppsWGでの仕様化、WHATWG editorによる2013年の統合記録を連続して確認できるため。

## 否定された仮説

server-side template、XBL、または特定のJavaScript libraryを直接祖先とする説明。機能は似ているが採用因果を示す資料がない。

W3C側のpatchが変更なしにWHATWGへ採用されたという説明。Hickson自身がRossとWeinsteinの文書を基に手作業で統合したと記録している。[W3C Bug 17930 comments 18–21](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c18)

## 未解決

- 特定のbrowser prototypeまたは既存template mechanismからの採用記録はあるか。
- parser、clone、`innerHTML`規則を現行HTMLへ移した中間経路は何か。
