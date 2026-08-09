# `<template>`

> 状態: 導入要求とstandalone提案を検証済み（WHATWG HTMLへの統合経路は未確認）

## 概要

dynamic pageが利用前のHTML fragmentを保持する要求に対し、inert DOM subtreeを宣言して複製できる仕組みとしてWeb Components作業で提案された。提案から現行HTMLへの統合記録は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、scriptでcloneしてdocumentへ挿入できるHTML fragmentを宣言する。rendering上は何も表さない。[一次定義](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)（2026-08-09確認）

## HTMLへの導入

2012年1月9日、Dimitri GlazkovがW3C WebAppsWGに`template`要素と処理を仕様化するumbrella bugを作成した。2013年2月14日のHTML Templates草案は、利用前のHTML fragmentを保持する要求に対し、inert DOM subtreeとDocumentFragmentの複製を定義した。[仕様bug](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476) [草案](https://www.w3.org/TR/2013/WD-html-templates-20130214/)

## HTML直前の祖先

未確認。standalone HTML Templates提案は現行要素と同じ設計を持つが、今回確認した資料にWHATWG HTMLへの統合commitまたは採用決定がない。

## さらに上流の由来

### 証拠

HTML Templates草案はdynamic pageに利用前のHTML fragmentが必要だと説明するが、特定のserver-side template、XBL、JavaScript libraryから採用したとは述べない。

### 解釈

なし。

## 系譜

W3C WebAppsWG `template`仕様化作業（2012年）／HTML Templates草案（2013年）

接続未確認

現行HTML `template`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2012-01-09 | W3C Bugzilla 15476 | 仕様bug | `template`要素と関連処理を仕様化する作業。 | [一次資料](https://www.w3.org/Bugs/Public/show_bug.cgi?ctype=xml&id=15476) | 2026-08-09 |
| 2013-02-14 | *HTML Templates* | W3C First Public Working Draft | inert subtreeとDocumentFragment複製という導入要求と設計。 | [一次資料](https://www.w3.org/TR/2013/WD-html-templates-20130214/) | 2026-08-09 |

## 確度

**B**

導入理由と設計モデルは確認できるが、standalone提案から現行HTML要素への採用因果を直接示す資料を確認できないため。

## 否定された仮説

server-side template、XBL、または特定のJavaScript libraryを直接祖先とする説明。機能は似ているが採用因果を示す資料がない。

## 未解決

- HTML Templates editor's draftの最初のcommitと、WHATWG HTMLへ統合したcommitはどれか。
- 特定のbrowser prototypeまたは既存template mechanismからの採用記録はあるか。
- parser、clone、`innerHTML`規則を現行HTMLへ移した中間経路は何か。

## 調査記録

W3C WebAppsWGの仕様bugとHTML Templates First Public Working Draftを確認した。WHATWG統合commitは確定できなかった。横断比較は[Modern HTML要素とforeign rootの調査ノート](../research/modern-html-foreign-roots.md)を参照する。
