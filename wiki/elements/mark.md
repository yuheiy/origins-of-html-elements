---
status: 完成
---

# `<mark>`

## 概要

2005年WHATWG草案の強調用`m`を、2008年に`mark`へ改名して導入された。改名と関連性を中心とする意味の詳述は仕様コミットで確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、別の文脈における関連性を理由に、参照目的でマークまたは強調された一続きのテキストを表す。本文では利用者の現在の行動に関連しそうな箇所、引用では原著者によらず後から注目させた箇所を示す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element)、2026-08-09確認）

## HTMLへの導入

2005年9月1日草案には印付きまたは強調されたテキストを表す`m`があり、検索語に一致する箇所をサーバーが強調する例を示す。2008年2月17日、Ian Hicksonが`m`を`mark`へ改名し、引用中で後から注目させる箇所や文脈上の関連性を表す用例を追加した。[2005年草案](../../raw/whatwg.org/specs/web-apps/2005-09-01/index.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-m)） [仕様コミット](../../raw/github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)）

## HTML直前の祖先

HTML5草案の`m`。2008年コミットが同要素を`mark`へ改名したことを直接明記する。

## さらに上流の由来

### 証拠

2005年の`m`は検索結果等の印付き/強調されたテキストという要求を示す。HTML外の具体的マークアップ祖先は確認できない。

### 解釈

検索等の現在の文脈に応じた強調を、重要性を表す`strong`とは異なる意味的として形式化したと解釈できる。

## 系譜

WHATWG Web Applications 1.0 `m`（2005年） → `mark`への改名と意味の詳述（2008年） → 現行HTML `mark`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg.org/specs/web-apps/2005-09-01/index.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-m)） | WHATWG保存Early Working Draft | 印付き/強調されたテキストを表す`m`と検索結果の用例。 | 2026-08-09 |
| 2008-02-17 | [WHATWG HTML commit `a1b2ff77`](../../raw/github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)） | 仕様コミット | `m`から`mark`への改名と関連性/強調用例の拡張。 | 2026-08-09 |

## 確度

**A**

現行`mark`の直接祖先`m`、改名、導入主体、意味の変更を要素単位の仕様コミットで直接確認できるため。

## 否定された仮説

紙の蛍光マーカーや`strong`から直接派生したという説明。確認できる直前祖先はHTML5草案の`m`であり、`strong`とは意味を区別している。

## 未解決

- `m`の正確な初出、提案者、名称選択の記録はあるか。
- `m → mark`改名を促した論点またはメーリングリスト提案は確認できるか。
