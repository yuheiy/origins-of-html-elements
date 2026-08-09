# `<template>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。2011年提案から2013年WHATWG統合までの系譜を確認。

## 概要

dynamic pageが利用前のHTML fragmentを保持する要求に対し、inert DOM subtreeを宣言して複製できる仕組みとして2011年にWHATWGへ提案された。Web Components／HTML Templates作業を経て、2013年にWHATWG HTMLへ統合された。

## 現在の意味

WHATWG HTML Living Standardでは、scriptでcloneしてdocumentへ挿入できるHTML fragmentを宣言する。rendering上は何も表さない。[一次定義](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)（2026-08-09確認）

## HTMLへの導入

2011年11月17日、Rafael Weinsteinはdynamic pageが利用前のDOM fragmentをinertに保持するための`template`要素をWHATWG mailing listへ提案した。2012年1月9日にW3C WebAppsWGで仕様化作業が始まり、2013年2月14日のHTML Templates草案がinert subtreeとDocumentFragmentの複製を定義した。2013年6月28日、Ian Hicksonは`template`をWHATWG仕様へmergeしたと記録し、WHATWG revision r8000のcheck-in commentも統合を明記する。[2011年提案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html) [仕様bug](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476) [草案](https://www.w3.org/TR/2013/WD-html-templates-20130214/) [統合記録](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21)

## HTML直前の祖先

2011年のWHATWG `template`提案と、その設計を仕様化したW3C WebAppsWGのHTML Templates作業である。W3C Bug 17930のcomment 21と22が、この作業をWHATWG HTMLへ統合したことを直接記録する。[2011年提案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html) [HTML Templates草案](https://www.w3.org/TR/2013/WD-html-templates-20130214/) [統合記録](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21)

## さらに上流の由来

### 証拠

2011年提案は、当時のclient-side templatingがJavaScript文字列、hidden textarea、非script MIME typeの`script`、comment、`display: none`などを回避策として使っていたと説明する。これらの問題を解く標準構文として`template`を提案するが、特定libraryから採用したとは述べない。[2011年提案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)

### 解釈

なし。

## 系譜

WHATWG `template`提案（2011年）→ W3C WebAppsWG仕様化作業／HTML Templates草案（2012–2013年）→ WHATWG HTML merge r8000（2013年）→ 現行HTML `<template>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2011-11-17 | “Declarative Inert DOM” | WHATWG mailing-list提案 | dynamic pageのinert DOM fragment要求、既存回避策の問題、`template`構文の提案。 | [一次資料](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html) | 2026-08-09 |
| 2012-01-09 | W3C Bugzilla 15476 | 仕様bug | `template`要素と関連処理を仕様化する作業。 | [一次資料](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476) | 2026-08-09 |
| 2013-02-14 | *HTML Templates* | W3C First Public Working Draft | inert subtreeとDocumentFragment複製という導入要求と設計。 | [一次資料](https://www.w3.org/TR/2013/WD-html-templates-20130214/) | 2026-08-09 |
| 2013-06-28 | W3C Bug 17930 comments 21–22 | WHATWG editorの統合記録／check-in記録 | `template`をWHATWG仕様へmergeし、revision r8000で“Integrate &lt;template&gt; into HTML”としてcheck-inしたこと。 | [一次資料](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21) | 2026-08-09 |

## 確度

**A**

要素単位の2011年提案、W3C WebAppsWGでの仕様化、WHATWG editorによる2013年の統合記録を連続して確認できるため。

## 否定された仮説

server-side template、XBL、または特定のJavaScript libraryを直接祖先とする説明。機能は似ているが採用因果を示す資料がない。

## 未解決

- WHATWG revision r8000に対応する現行Git履歴上のcommit hashはどれか。
- 特定のbrowser prototypeまたは既存template mechanismからの採用記録はあるか。
- parser、clone、`innerHTML`規則を現行HTMLへ移した中間経路は何か。

## 調査記録

2011年WHATWG提案、W3C WebAppsWGの仕様bug、HTML Templates First Public Working Draft、W3C Bug 17930のWHATWG統合記録を確認した。横断比較は[Modern HTML要素とforeign rootの調査ノート](../research/modern-html-foreign-roots.md)を参照する。

最初の敵対的レビュー（2026-08-09）では統合記録を発見できずBを維持したが、横断系譜の独立レビューで2011年のより早い提案と2013年の明示的merge記録を確認したため、その結論を撤回して系譜と確度を訂正した。

訂正後の別レビュー（2026-08-09）で、2011年提案、W3C WebAppsWGの仕様化、Bug 17930 comments 21–22のmerge記録、証拠表、系譜、確度A、未解決点の整合を再確認した。
