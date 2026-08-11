---
status: 完成
---

# `<slot>`

## 概要

Shadow DOM v0のセレクター式`content`挿入点を、実在するWeb ComponentsライブラリとGUIクラスライブラリの利用例に基づいて名前付き割り当てへ再設計した要素である。2015年に提案とブラウザー実装が成立し、2016年にWHATWG DOMとHTMLへ統合された。

## 現在の意味

WHATWG HTML Living Standardではスロットを定義し、主にシャドウツリー内で使う。割り当てられたノードがあればそれらを、なければ自身の内容を表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/scripting.html)（[公開版](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element)、2026-08-09確認）

## HTMLへの導入

Ryosuke Niwa、Edward O’Connor、Jan Miksovskyは2015年4月、実在するWeb Components APIとGUIフレームワークを検討した結果、セレクター式配布は一般的な用途に合わず、CSSセレクターの柔軟性も実際には不要だったとして、内容配布と継承時の差し込みを同じ仕組みで扱う名前付きスロットを提案した。[名前付きスロット提案](../../raw/lists.w3.org/Archives/Public/public-webapps/2015AprJun/0184.html)（[公開元](https://lists.w3.org/Archives/Public/public-webapps/2015AprJun/0184.html)）

Dimitri Glazkovは同年5月19日、シャドウツリーの挿入点を表す`slot`要素、`name`属性、`Element.slot`を初稿へ置いた。7月から8月の最終化論点では、ブラウザーベンダー間の概略合意を受けて旧`content`挿入点を除去し、スロット案を仕様化した。WebKitは9月18日に`HTMLSlotElement`と割り当て処理、9月21日に割り当てノードの描画を実装した。Chromiumは10月15日の要素追加を「最初の段階」とし、12月11日に描画と主要APIを実装した。[初稿コミット](../../raw/github.com/WICG/webcomponents/commit/27e06d2a7e6390c5ca726afab4671cd48a121c9e)（[公開元](https://github.com/WICG/webcomponents/commit/27e06d2a7e6390c5ca726afab4671cd48a121c9e)） [最終化論点](../../raw/github.com/WICG/webcomponents/issues/128)（[公開元](https://github.com/WICG/webcomponents/issues/128)） [WebKit初回実装](../../raw/github.com/WebKit/WebKit/commit/be43170fde964477f2e203e29cd419c2c3526ec3)（[公開元](https://github.com/WebKit/WebKit/commit/be43170fde964477f2e203e29cd419c2c3526ec3)） [WebKit描画実装](../../raw/github.com/WebKit/WebKit/commit/2078001d3a7f34355de3cc104d8f4c948e3a3039)（[公開元](https://github.com/WebKit/WebKit/commit/2078001d3a7f34355de3cc104d8f4c948e3a3039)） [Chromium初回追加](../../raw/github.com/chromium/chromium/commit/7478fc4939b1eb3e68510ed873d50b5b638dda1c)（[公開元](https://github.com/chromium/chromium/commit/7478fc4939b1eb3e68510ed873d50b5b638dda1c)） [Chromium主要実装](../../raw/github.com/chromium/chromium/commit/071137e656e1ad78c5e8ce506346aa5d2eeef5f9)（[公開元](https://github.com/chromium/chromium/commit/071137e656e1ad78c5e8ce506346aa5d2eeef5f9)）

WHATWG DOMは2016年3月21日にスロットと割り当て可能なノードを定義し、WHATWG HTMLは同年4月20日にその概念を参照する`slot`要素を追加した。最初に確認できるWebKit実装は両コミットより約6か月早い。[DOMコミット](../../raw/github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0)（[公開元](https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0)） [HTMLコミット](../../raw/github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)（[公開元](https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)）

## HTML直前の祖先

Web Componentsの`Slots Proposal`と、それを仕様化したDOMのスロット概念である。初稿は`slot`要素と`Element.slot`を一組として定義し、HTML追加コミットはDOMのスロット概念を直接参照する。

## さらに上流の由来

### 証拠

2012年のShadow DOM草案は、ホストの子ノードをCSSセレクターで選ぶ`content`挿入点、複数のシャドウルート、より古いシャドウツリーを差し込む`shadow`挿入点を定義した。謝辞はXBL 1.0とXBL 2.0が機能的カプセル化という問題について仕様全体へ大きな影響を与えたとするが、挿入点の要素構文または配布アルゴリズムとの個別対応は示さない。[2012年草案](../../raw/www.w3.org/TR/2012/WD-shadow-dom-20120522/index.html)（[公開元](https://www.w3.org/TR/2012/WD-shadow-dom-20120522/)）

2015年4月の詳細提案は、Polymerの`core-elements`と`paper-elements`、Basic Web Components、QuickUIを調べ、セレクターが実質的に名前として使われること、既定`content`が後続の挿入点より先に内容を消費すること、派生部品が基底部品の挿入点を埋めにくいことを問題とした。Windows Presentation FoundationとCocoaを含むGUIクラスライブラリの継承モデルも検討し、名前付き挿入点を内容配布と継承時の差し込みに共用する案を示した。[詳細提案の保存コミット](../../raw/github.com/WICG/webcomponents/commit/c691d821bfab9bef5bf2a2c3f623402ac32b64d3)（[公開元](https://github.com/WICG/webcomponents/commit/c691d821bfab9bef5bf2a2c3f623402ac32b64d3)）

2015年4月27日の論点でAnne van Kesterenは、Dimitri Glazkovが提案した`slot`という名称について、ノードは`content`へではなくスロットへ配布されるため短く明確だと説明した。後続の議論では、旧`content`と新`slot`は単なる改名ではなく、配布を受ける場所側のセレクター指定から、配布されるノード側の名前指定へ制御を移す差が確認された。[改名論点](../../raw/github.com/WICG/webcomponents/issues/92)（[公開元](https://github.com/WICG/webcomponents/issues/92)）

### 解釈

現行`slot`は、Shadow DOM v0の挿入点を起点にしつつ、実際の部品ライブラリで使われていた名前付けと、GUIクラスライブラリの派生部品が基底部品の内部へ内容を差し込む要求を、一つの名前付き割り当てモデルへまとめた再設計と解釈できる。

## 系譜

Shadow DOM v0の`content`／`shadow`挿入点 → 実在するWeb ComponentsライブラリとGUI継承モデルを調べた名前付きスロット提案（2015年） → Web Components `slot`要素初稿と合意（2015年） → WebKit／Chromium実装（2015年） → WHATWG DOMスロット概念（2016年） → HTML `slot`（2016年） → 現行HTML `slot`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2012-05-22 | [*Shadow DOM*](../../raw/www.w3.org/TR/2012/WD-shadow-dom-20120522/index.html)（[公開元](https://www.w3.org/TR/2012/WD-shadow-dom-20120522/)） | W3C First Public Working Draft | `content`と`shadow`の挿入点を定義し、XBL 1.0／2.0による仕様全体への影響を謝辞に記録するが、挿入点との個別対応は示さない。 | 2026-08-11 |
| 2015-04-21 | [「Imperative API for Node Distribution in Shadow DOM」](../../raw/lists.w3.org/Archives/Public/public-webapps/2015AprJun/0184.html)（[公開元](https://lists.w3.org/Archives/Public/public-webapps/2015AprJun/0184.html)） | Web標準化メーリングリスト | 実在するWeb Components APIとGUIフレームワークの調査を根拠に、セレクター式配布を名前付きスロットへ置き換える提案。 | 2026-08-11 |
| 2015-04-27 | [Web Components issue 92](../../raw/github.com/WICG/webcomponents/issues/92)（[公開元](https://github.com/WICG/webcomponents/issues/92)） | 標準化論点 | `slot`という名称の理由と、旧`content`との配布モデルの差。 | 2026-08-11 |
| 2015-04-30 | [WICG webcomponents commit `c691d821`](../../raw/github.com/WICG/webcomponents/commit/c691d821bfab9bef5bf2a2c3f623402ac32b64d3)（[公開元](https://github.com/WICG/webcomponents/commit/c691d821bfab9bef5bf2a2c3f623402ac32b64d3)） | 提案保存コミット | 実在する部品群とGUIクラスライブラリから配布・継承の問題を抽出した詳細提案。 | 2026-08-11 |
| 2015-05-19 | [WICG webcomponents commit `27e06d2a`](../../raw/github.com/WICG/webcomponents/commit/27e06d2a7e6390c5ca726afab4671cd48a121c9e)（[公開元](https://github.com/WICG/webcomponents/commit/27e06d2a7e6390c5ca726afab4671cd48a121c9e)） | 提案コミット | `slot`要素、`name`属性、`Element.slot`を置いた最初のSlots Proposal。 | 2026-08-11 |
| 2015-07-01〜08-28 | [Web Components issue 128](../../raw/github.com/WICG/webcomponents/issues/128)（[公開元](https://github.com/WICG/webcomponents/issues/128)） | 標準化論点 | ブラウザーベンダー間の概略合意、旧挿入点の除去、スロット案の仕様化完了。 | 2026-08-11 |
| 2015-09-18 | [WebKit commit `be43170f`](../../raw/github.com/WebKit/WebKit/commit/be43170fde964477f2e203e29cd419c2c3526ec3)（[公開元](https://github.com/WebKit/WebKit/commit/be43170fde964477f2e203e29cd419c2c3526ec3)） | 実装コミット | `HTMLSlotElement`、`Element.slot`、`assignedSlot`、スロット割り当て処理を実装。 | 2026-08-11 |
| 2015-09-21 | [WebKit commit `2078001d`](../../raw/github.com/WebKit/WebKit/commit/2078001d3a7f34355de3cc104d8f4c948e3a3039)（[公開元](https://github.com/WebKit/WebKit/commit/2078001d3a7f34355de3cc104d8f4c948e3a3039)） | 実装コミット | `HTMLSlotElement`へ割り当てられたノードの描画を実装。 | 2026-08-11 |
| 2015-10-15 | [Chromium commit `7478fc49`](../../raw/github.com/chromium/chromium/commit/7478fc4939b1eb3e68510ed873d50b5b638dda1c)（[公開元](https://github.com/chromium/chromium/commit/7478fc4939b1eb3e68510ed873d50b5b638dda1c)） | 実装コミット | Shadow DOM v1フラグ下に`slot`要素を置いたが、実装の最初の段階に限定。 | 2026-08-11 |
| 2015-12-11 | [Chromium commit `071137e6`](../../raw/github.com/chromium/chromium/commit/071137e656e1ad78c5e8ce506346aa5d2eeef5f9)（[公開元](https://github.com/chromium/chromium/commit/071137e656e1ad78c5e8ce506346aa5d2eeef5f9)） | 実装コミット | スロット割り当て、描画、主要APIを実装。 | 2026-08-11 |
| 2016-03-21 | [WHATWG DOM commit `a2b04df5`](../../raw/github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0)（[公開元](https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0)） | 仕様コミット | スロットと、スロットへ割り当て可能なノードのDOM概念。 | 2026-08-11 |
| 2016-04-20 | [WHATWG HTML commit `3c157377`](../../raw/github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)（[公開元](https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a)） | 仕様コミット | DOMスロット概念を参照するHTML `slot`の追加。 | 2026-08-11 |

## 確度

**A**

旧`content`挿入点から名前付きスロットへの変更理由、要素初稿、ベンダー合意、実装、DOM概念からHTML要素への採用因果を一次資料で直接確認できるため。

## 否定された仮説

`content`から`slot`への単純改名という説明。名称変更に加えて、配布先側のCSSセレクターでノードを選ぶモデルから、配布されるノード側が名前でスロットを選ぶモデルへ制御を移し、継承時の差し込みも同じ機構へ統合した。

## 未解決

- Shadow DOM草案が仕様全体への影響を認めるXBL 1.0／2.0から、v0の`content`／`shadow`挿入点が要素構文または配布モデルを個別に採用した記録はあるか。
