---
status: 完成
---

# `<canvas>`

## 概要

Richard WilliamsonがDashboard向けにWebKitへ`CANVAS`を初めて実装し、その実装からWHATWGのcanvas機能が設計されたことを、WebKit変更履歴とWHATWG自身の謝辞で確認できる。提案本文、正式な提出日、採録時の編集記録は未確認であり、Dave HyattとIan Hicksonの同時代説明も提出時点について食い違う。

## 現在の意味

WHATWG HTML Living Standardでは、scriptがgraph、ゲーム用画像、artなどを動的に描画できる解像度依存のビットマップキャンバスを提供する。より適切な要素がある場合の代用にはせず、bitmapと同じ機能または目的を伝えるfallback contentを用意する必要がある。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/canvas.html)（[公開版](https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element)、2026-08-09確認）

## HTMLへの導入

Richard Williamsonは2004年5月25日のWebKit changeset 6685で`CANVAS` tagの要素、parser、renderer、`getContext`の土台を追加し、翌26日のchangeset 6693でbitmap drawing contextと2D drawing operationsを実装した。AppleのDave Hyattは同年7月、Dashboardの時計の針等をHTMLで描くためAppleが要素を追加し、当時SVG/XHTMLは実装量、性能、複雑性の面で適さず、Canvasなら数日で実装できたと説明した。[Part 1](https://github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c) [Part 2](https://github.com/WebKit/WebKit/commit/368b12910aa7b71c5f96fd2053b88132fa7264fb) [Introducing the Canvas](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005913) [On Extending HTML](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005928)

WHATWGの仕様謝辞は、WilliamsonがSafariで最初の`canvas`実装を作り、その実装からcanvas機能が設計されたと明記する。WHATWG仕様への収録はAppleの書簡が参照する2005年3月24日版まで確認できる。[WHATWG謝辞](https://html.spec.whatwg.org/multipage/acknowledgements.html#acknowledgments) [Apple書簡](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/010129.html)

## HTML直前の祖先

Dashboard用のApple WebKit/Safari `CANVAS`実装である。WHATWGは、この最初の実装からcanvas機能を設計したと明記する。提案の受領日や採録操作そのものは未確認だが、先行実装から仕様機能への因果関係は直接確認できる。[WHATWG謝辞](https://html.spec.whatwg.org/multipage/acknowledgements.html#acknowledgments)

## さらに上流の由来

### 証拠

WebKit changeset 6693では、`RenderCanvasImage`が`CGBitmapContextCreate`でbitmapの`CGContextRef`を作り、JavaScriptの`save`、`restore`、path、color、line、transform、drawing各操作を`CGContextSaveGState`、`CGContextBeginPath`、`CGContextSetRGBStrokeColor`、`CGContextScaleCTM`などへ直接対応させている。AppleのCore Graphics文書は`CGContext`をQuartz 2D drawing environmentと定義する。[WebKit Part 2](https://github.com/WebKit/WebKit/commit/368b12910aa7b71c5f96fd2053b88132fa7264fb) [Apple `CGContext`](https://developer.apple.com/documentation/coregraphics/cgcontext)

Appleのcanvas解説も、canvas drawing APIがQuartzに似たdrawing featuresを提供すると説明する。[Apple “Drawing Content”](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Canvas.html)

### 解釈

Dashboardの要求に対する軽量なHTML drawing extensionとして成立した。少なくとも最初の2D実装とAPI操作の実装系譜については、Quartz 2Dのbitmap contextとdrawing functionsを直接用いた薄いJavaScript wrapperであり、単なる外見上の類似ではない。Quartzを設計上の着想源として選んだ意思決定過程までは、実装差分だけから確定しない。

## 系譜

Quartz 2D `CGContext` bitmap context・drawing functions

→（WebKit実装が直接呼び出す）Apple WebKit/Safari `CANVAS`実装for Dashboard（2004年5月）

→（WHATWG謝辞が「この最初の実装から設計」と明記）WHATWG Web Applications 1.0 `canvas`（遅くとも2005年3月24日）

→ 現行HTML `<canvas>`

AppleからWHATWGへの提案本文、提出日、採録時の編集記録は未確認であるが、Apple実装からWHATWG機能への接続自体は確認済みである。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-05-25 | [WebKit changeset 6685 / “Part 1 of the new `<CANVAS>` tag implementation”](../../raw/github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)（[公開元](https://github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)） | 公式実装履歴・ソースコード | Richard Williamsonが`CANVAS`要素、parser、renderer、`getContext`の土台を追加。Dave Hyattがreview。 | 2026-08-09 |
| 2004-05-26 | [WebKit changeset 6693 / “Part 2 of the new `<CANVAS>` tag implementation”](../../raw/github.com/WebKit/WebKit/commit/368b12910aa7b71c5f96fd2053b88132fa7264fb)（[公開元](https://github.com/WebKit/WebKit/commit/368b12910aa7b71c5f96fd2053b88132fa7264fb)） | 公式実装履歴・ソースコード | Williamsonが2D contextとdrawing operationsを実装。bitmap `CGContextRef`を作成し、JavaScriptのdrawing operationsからQuartz 2Dの`CGContext`関数を直接呼ぶ。 | 2026-08-09 |
| 2004-07-05 | [Dave Hyatt, “Introducing the Canvas”](../../raw/web.archive.org/web/20040708074642/http%3A/weblogs.mozillazine.org/hyatt/archives/2004_07.html)（[公開元](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005913)） | 当事者による同時代説明 | Appleが`canvas`を追加し、Dashboard時計の針を描くために使用。 | 2026-08-09 |
| 2004-07-07 | [Dave Hyatt, “On Extending HTML”](../../raw/web.archive.org/web/20040708074642/http%3A/weblogs.mozillazine.org/hyatt/archives/2004_07.html)（[公開元](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005928)） | 当事者による同時代説明 | Dashboardの要求、SVG/XHTMLを採らなかった実装上の理由、WHATWGへの提出というApple側の認識。 | 2026-08-09 |
| 2004-08-13 | [Ian Hickson, “\[whatwg\] Canvas tag”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/043985.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/043985.html)） | 標準化メーリングリスト | `canvas`提案は未提出で、Hyattらが準備中と回答。Hyattの説明と提出時点が矛盾。 | 2026-08-09 |
| 2004-11-02 | [Apple, *Safari JavaScript Programming Topics*初版](../../raw/developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Canvas.html)（[公開元](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Canvas.html)） | 公式実装文書 | WebKit canvas、Dashboard World Clock、Quartzに似たdrawing features。 | 2026-08-09 |
| 2005-09-01 | [WHATWG, *Web Applications 1.0*](../../raw/web.archive.org/web/20050901000000/http%3A/www.whatwg.org/specs/web-apps/2005-09-01/index.html)（[公開元](https://web.archive.org/web/20050901000000/http://www.whatwg.org/specs/web-apps/2005-09-01/)） | 仕様snapshot | bitmap canvas、drawing context、fallback contentを仕様化。 | 2026-08-09 |
| 2006-03-02（WHATWG source初回check-in） | [WHATWG, *Web Applications 1.0*謝辞](../../raw/github.com/whatwg/html/blob/c3550d90867392905edbd91c94fec8c89fbfe648/source)（[公開元](https://github.com/whatwg/html/blob/c3550d90867392905edbd91c94fec8c89fbfe648/source#L19425-L19427)） | 仕様source | Richard WilliamsonによるSafari最初の`canvas`実装からcanvas機能を設計したと明記。 | 2026-08-09 |
| 2007-03-14（書簡が参照する仕様日は2005-03-24） | [Apple Senior Patent Counsel書簡](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/010129.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/010129.html)） | 当事者の公式書簡 | AppleがWHATWG draftのbitmap canvas節に関係するIP rightsを持つと表明。 | 2026-08-09 |

## 確度

**A**

要素単位の具体的な先行実装、実装者、実装理由をWebKit変更履歴と当事者説明で確認でき、WHATWG自身がそのSafari実装からcanvas機能を設計したと因果関係を明記するため。提案の正式な提出日と採録時の編集記録は欠けるが、先行実装から仕様機能への接続自体は直接確認できる。

## 否定された仮説

WHATWGがApple実装とは独立にcanvas機能を設計したという説明。WHATWGの謝辞がSafari最初の実装から設計したと明記するため成立しない。Quartzとの関係が機能上の類似にとどまるという従来の説明も、WebKit実装がQuartz 2Dのbitmap contextを作成し各drawing operationから`CGContext`関数を直接呼ぶため成立しない。Hyattの2004年7月7日の「提出済み」だけからWHATWGへの受領日を確定する説明は、Hicksonの8月13日投稿と矛盾する。

## 未解決

- AppleからWHATWGへ渡された提案本文、正式な提出日、採録時の編集記録は残っているか。
- Hyattの2004年7月7日の「すべての拡張を提出済み」とHicksonの8月13日の「canvas提案は未提出」の差は、非公開共有と正式提案の区別、対象範囲、または別の事情のどれに由来するか。
