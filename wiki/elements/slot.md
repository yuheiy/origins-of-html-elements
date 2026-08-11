---
status: 完成
---

# `<slot>`

## 概要

Shadow DOM v0の`content`挿入点をスロットとして再設計し、DOMのスロット概念を参照するHTML要素として2016年に導入された。

## 現在の意味

WHATWG HTML Living Standardではスロットを定義し、主にシャドウツリー内で使う。割り当てられたノードがあればそれらを、なければ自身の内容を表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/scripting.html)（[公開版](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element)、2026-08-09確認）

## HTMLへの導入

2015年のWeb Components論点で`content`を`slot`へ改名する提案と配布モデルの単純化が議論された。2016年3月21日にWHATWG DOMがスロットとスロットへ割り当て可能なノードを定義し、同年4月20日にWHATWG HTMLがDOMの概念を参照する`slot`要素を追加した。[改名論点](https://github.com/WICG/webcomponents/issues/92) [DOMコミット](https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0) [HTMLコミット](https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)

## HTML直前の祖先

WHATWG DOMのスロット概念とWeb Componentsのスロット提案である。HTML追加コミットがDOMの概念を直接参照する。

## さらに上流の由来

### 証拠

2012年と2014年のShadow DOM草案は`content`をシャドウツリーの挿入点として定義し、2015年論点が`content`から`slot`への接続を明示する。[2012年草案](https://www.w3.org/TR/2012/WD-shadow-dom-20120522/) [2014年草案](https://www.w3.org/TR/2014/WD-shadow-dom-20140617/)

### 解釈

旧挿入点の名称だけを変えたのではなく、内容配布をスロット割り当てとして再設計した系譜と解釈できる。

## 系譜

Shadow DOM v0 `content`挿入点 → 再設計されたスロットモデル → WHATWG DOMスロット概念（2016年） → HTML `slot`（2016年） → 現行HTML `slot`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2012-05-22 | [*Shadow DOM*](../../raw/www.w3.org/TR/2012/WD-shadow-dom-20120522/index.html)（[公開元](https://www.w3.org/TR/2012/WD-shadow-dom-20120522/)） | W3C First Public Working Draft | `content`をシャドウDOM挿入点として定義。 | 2026-08-09 |
| 2015-04-27 | [Web Components issue 92](../../raw/github.com/WICG/webcomponents/issues/92)（[公開元](https://github.com/WICG/webcomponents/issues/92)） | 標準化論点 | `content`から`slot`への改名理由とモデル変更の議論。 | 2026-08-09 |
| 2016-03-21 | [WHATWG DOM commit `a2b04df5`](../../raw/github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0)（[公開元](https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0)） | 仕様コミット | スロットと、スロットへ割り当て可能なノードのDOM概念。 | 2026-08-09 |
| 2016-04-20 | [WHATWG HTML commit `3c157377`](../../raw/github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)（[公開元](https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)） | 仕様コミット | DOMスロット概念を参照するHTML `slot`の追加。 | 2026-08-09 |

## 確度

**A**

旧`content`からスロットモデルへの再設計と、DOMスロット概念からHTML要素への採用因果を標準化論点と仕様コミットで直接確認できるため。

## 否定された仮説

`content`から`slot`への単純改名という説明。論点は名称変更に加えて配布モデルの変更を示す。

## 未解決

- 配布意味を変更した最終決定記録はどれか。
- Shadow DOM v0 `content`とXBL等の先行コンポーネントモデルとの採用因果はあるか。
- 最初のブラウザー実装とDOM／HTML仕様コミットの時間的順序はどうなるか。
