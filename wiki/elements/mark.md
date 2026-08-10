---
status: 完成
---

# `<mark>`

## 概要

2005年WHATWG草案のhighlight用`m`を、2008年に`mark`へ改名して導入された。改名とrelevanceを中心とする意味の詳述は仕様commitで確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、別の文脈における関連性を理由に、参照目的でmarkまたはhighlightされた一続きのtextを表す。本文ではuserの現在の行動に関連しそうな箇所、引用では原著者によらず後から注目させた箇所を示す。[HTML Living Standard](../../raw/html-living-standard/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element)、2026-08-09確認）

## HTMLへの導入

2005年9月1日草案にはmarkedまたはhighlighted textを表す`m`があり、検索語に一致する箇所をserverがhighlightする例を示す。2008年2月17日、Ian Hicksonが`m`を`mark`へ改名し、引用中で後から注目させる箇所や文脈上のrelevanceを表す用例を追加した。[2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-m) [仕様commit](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)

## HTML直前の祖先

HTML5草案の`m`。2008年commitが同要素を`mark`へ改名したことを直接明記する。

## さらに上流の由来

### 証拠

2005年の`m`は検索結果等のmarked/highlighted textという要求を示す。HTML外の具体的markup祖先は確認できない。

### 解釈

検索等の現在の文脈に応じたhighlightを、importanceを表す`strong`とは異なるsemanticとして形式化したと解釈できる。

## 系譜

WHATWG Web Applications 1.0 `m`（2005年） → `mark`への改名と意味の詳述（2008年） → 現行HTML `mark`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg-web-apps-history/f8bdeadb28b78825-2005-.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-m)） | WHATWG保存Early Working Draft | marked/highlighted textを表す`m`と検索結果の用例。 | 2026-08-09 |
| 2008-02-17 | [WHATWG HTML commit `a1b2ff77`](../../raw/whatwg-html-history/6ad2b6e548ba2e59-a1b2ff77457cf198c77975b98f245985d3b.html)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)） | 仕様commit | `m`から`mark`への改名とrelevance/highlight用例の拡張。 | 2026-08-09 |

## 確度

**A**

現行`mark`の直接祖先`m`、改名、導入主体、意味の変更を要素単位の仕様commitで直接確認できるため。

## 否定された仮説

紙の蛍光markerや`strong`から直接派生したという説明。確認できる直前祖先はHTML5草案の`m`であり、`strong`とは意味を区別している。

## 未解決

- `m`の正確な初出、提案者、名称選択の記録はあるか。
- `m → mark`改名を促したissueまたはmailing-list提案は確認できるか。
