# `<canvas>`

> 状態: 完成

## 概要

AppleがDashboard向けにWebKitへ`CANVAS`と2D drawing contextを実装した事実と、後のWHATWG仕様に`canvas`がある事実は確認できる。AppleからWHATWGへの提案受領時点について同時代資料が矛盾し、両者の採録因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、scriptがgraph、game graphics、artなどを動的に描画できるresolution-dependent bitmap canvasを提供する。より適切な要素がある場合の代用にはせず、bitmapと同じ機能または目的を伝えるfallback contentを用意する必要がある。[一次定義](https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element)（2026-08-09確認）

## HTMLへの導入

WebKit公式履歴は2004年5月26日までに新しい`CANVAS` tagと2D drawing APIが実装されたことを示す。AppleのDave Hyattは同年7月、Dashboardの時計の針等をHTMLで描くためAppleが要素を追加し、当時SVG/XHTMLは実装量、性能、複雑性の面で適さず、Canvasなら数日で実装できたと説明した。[WebKit履歴](https://trac.webkit.org/timeline?authors=&daysback=4&from=2004-05-30) [Introducing the Canvas](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005913) [On Extending HTML](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005928)

## HTML直前の祖先

未確認。Dashboard用のApple WebKit `CANVAS`実装と2D drawing contextは有力な先行候補であり、2005年9月までのWHATWG Web Applications 1.0 snapshotにもbitmap canvas、drawing context、fallback contentがある。しかし、Appleの提案をWHATWGが受領・採録したことを直接記録する資料は確認できない。[WHATWG snapshot](https://web.archive.org/web/20050901000000/http://www.whatwg.org/specs/web-apps/2005-09-01/)

## さらに上流の由来

### 証拠

Apple公式文書はcanvas drawing APIがQuartzに似た機能を持つと説明するが、Quartzから派生したとは述べない。[Apple “Drawing Content”](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Canvas.html)

### 解釈

Dashboardの要求に対する軽量なHTML drawing extensionとして成立したと解釈できる。Quartzとの類似を直接の派生関係へ広げない。

## 系譜

Apple WebKit `CANVAS`実装 for Dashboard（2004年5月）

WHATWG Web Applications 1.0 `canvas`（遅くとも2005年9月）→ 現行HTML `<canvas>`

Apple実装からWHATWG仕様への接続は、提案受領・採録の直接史料がないため矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-05-26 | WebKit Timeline / changeset 6693 | 公式実装履歴 | 新しい`CANVAS`実装Part 2としてtag、2D context、drawing operationsを実装。 | [一次資料](https://trac.webkit.org/timeline?authors=&daysback=4&from=2004-05-30) | 2026-08-09 |
| 2004-07-05 | Dave Hyatt, “Introducing the Canvas” | 当事者による同時代説明 | Appleが`canvas`を追加し、Dashboard時計の針を描くために使用。 | [保存版](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005913) | 2026-08-09 |
| 2004-07-07 | Dave Hyatt, “On Extending HTML” | 当事者による同時代説明 | Dashboardの要求、SVG/XHTMLを採らなかった実装上の理由、WHATWGへの提出というApple側の認識。 | [保存版](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005928) | 2026-08-09 |
| 2004-08-13 | Ian Hickson, “[whatwg] Canvas tag” | 標準化メーリングリスト | `canvas`提案は未提出で、Hyattらが準備中と回答。Hyattの説明と提出時点が矛盾。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/043985.html) | 2026-08-09 |
| 2004-11-02 | Apple, *Safari JavaScript Programming Topics*初版 | 公式実装文書 | WebKit canvas、Dashboard World Clock、Quartzに似たdrawing features。 | [一次資料](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Canvas.html) | 2026-08-09 |
| 2005-09-01 | WHATWG, *Web Applications 1.0* | 仕様snapshot | bitmap canvas、drawing context、fallback contentを仕様化。 | [保存版](https://web.archive.org/web/20050901000000/http://www.whatwg.org/specs/web-apps/2005-09-01/) | 2026-08-09 |
| 2007-03-14（書簡が参照する仕様日は2005-03-24） | Apple Senior Patent Counsel書簡 | 当事者の公式書簡 | AppleがWHATWG draftのbitmap canvas節に関係するIP rightsを持つと表明。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/010129.html) | 2026-08-09 |

## 確度

**B**

AppleがDashboard要求のためWebKitへ`CANVAS`を導入した理由と、WHATWG仕様上の設計modelは確認できるが、Apple実装からWHATWG仕様へ採録した因果関係は確認できないため。

## 否定された仮説

Quartzからcanvasを直接派生させたという説明。Apple文書が明記するのはdrawing featuresの類似であり、採用・移植・派生ではない。Hyattの2004年7月7日の「提出済み」だけからWHATWGへの受領日を確定する説明も、Hicksonの8月13日投稿と矛盾する。

## 未解決

- WebKit changeset 6693より前のPart 1 changesetの番号、著者、日付は何か。
- AppleからWHATWGへ渡された提案本文、提出日、採録時の編集記録はあるか。
- Hyattの「提出済み」とHicksonの「未提出」の差は何に由来するか。
- Quartzからの具体的な派生を示す当時の設計資料はあるか。
