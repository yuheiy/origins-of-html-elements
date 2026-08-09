# `<slot>`

> 状態: Shadow DOM `content` insertion pointから再設計されたslot modelの系譜を検証済み

## 概要

Shadow DOM v0の`content` insertion pointをslotsとして再設計し、DOMのslot概念を参照するHTML要素として2016年に導入された。

## 現在の意味

WHATWG HTML Living Standardではslotを定義し、主にshadow tree内で使う。割り当てられたnodeがあればそれらを、なければ自身の内容を表す。[一次定義](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element)（2026-08-09確認）

## HTMLへの導入

2015年のWeb Components issueで`content`を`slot`へ改名する提案とdistribution modelの単純化が議論された。2016年3月21日にWHATWG DOMがslotとslotableを定義し、同年4月20日にWHATWG HTMLがDOMの概念を参照する`slot`要素を追加した。[改名issue](https://github.com/WICG/webcomponents/issues/92) [DOM commit](https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0) [HTML commit](https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)

## HTML直前の祖先

WHATWG DOMのslot概念とWeb Componentsのslots proposalである。HTML追加commitがDOMの概念を直接参照する。

## さらに上流の由来

### 証拠

2012年と2014年のShadow DOM草案は`content`をshadow treeのinsertion pointとして定義し、2015年issueが`content`から`slot`への接続を明示する。[2012年草案](https://www.w3.org/TR/2012/WD-shadow-dom-20120522/) [2014年草案](https://www.w3.org/TR/2014/WD-shadow-dom-20140617/)

### 解釈

旧insertion pointの名称だけを変えたのではなく、content distributionをslot assignmentとして再設計した系譜と解釈できる。

## 系譜

Shadow DOM v0 `content` insertion point → 再設計されたslot model → WHATWG DOM slot概念（2016年） → HTML `slot`（2016年） → 現行HTML `slot`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2012-05-22 | *Shadow DOM* | W3C First Public Working Draft | `content`をshadow DOM insertion pointとして定義。 | [一次資料](https://www.w3.org/TR/2012/WD-shadow-dom-20120522/) | 2026-08-09 |
| 2015-04-27 | Web Components issue 92 | 標準化issue | `content`から`slot`への改名理由とmodel変更の議論。 | [一次資料](https://github.com/WICG/webcomponents/issues/92) | 2026-08-09 |
| 2016-03-21 | WHATWG DOM commit `a2b04df5` | 仕様commit | slotとslotableのDOM概念。 | [一次資料](https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0) | 2026-08-09 |
| 2016-04-20 | WHATWG HTML commit `3c157377` | 仕様commit | DOM slot概念を参照するHTML `slot`の追加。 | [一次資料](https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a) | 2026-08-09 |

## 確度

**A**

旧`content`からslot modelへの再設計と、DOM slot概念からHTML要素への採用因果を標準化issueと仕様commitで直接確認できるため。

## 否定された仮説

`content`から`slot`への単純改名という説明。issueは名称変更に加えてdistribution modelの変更を示す。

## 未解決

- distribution semanticsを変更した最終決定記録はどれか。
- Shadow DOM v0 `content`とXBL等の先行component modelとの採用因果はあるか。
- 最初のbrowser実装とDOM／HTML仕様commitの時間的順序はどうなるか。

## 調査記録

Shadow DOM草案、Web Components改名issue、WHATWG DOM／HTMLの追加commitを確認した。横断比較は[Modern HTML要素とforeign rootの調査ノート](../research/modern-html-foreign-roots.md)を参照する。
