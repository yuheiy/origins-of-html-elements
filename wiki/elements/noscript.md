---
status: 完成
---

# `<noscript>`

## 概要

W3Cのクライアント側スクリプティング草案で、スクリプトまたはその言語に非対応のユーザーエージェントへ代替内容を示すため導入され、HTML 4へ入った要素である。Netscape Navigator 3.0の実装も確認できるが、W3C案との前後関係と採録因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、スクリプティングが有効なら何も表さず、無効なら子を表す。HTML構文で異なるマークアップを提示するためパーサーの動作へ影響し、XML構文では使用できない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/scripting.html)（[公開版](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element)、2026-08-09確認）

## HTMLへの導入

確認したW3C草案では1996年6月27日版に`NOSCRIPT`はなく、7月9日版に定義がある。同版は、ユーザーエージェントがクライアント側スクリプティングまたは先行`SCRIPT`の言語を支援しない場合だけ内容を描画し、旧式ブラウザーへ更新呼びかけを提供する要素と説明する。エディターはDave Raggettである。[6月27日版](https://www.w3.org/TR/WD-script-960627.html) [7月9日版](https://www.w3.org/TR/WD-script-960709.html)

Netscapeの著作権1996、Version 3.0の*JavaScript Guide*と、Netscape 3.0用HTML参照の保存複製は`NOSCRIPT`の実装と、JavaScript非対応または無効時に代替内容を表示する動作を記録する。ただし資料の公開日を固定できず、7月9日のW3C草案との前後関係は分からない。[JavaScript Guide保存複製](https://www.uv.es/jordi/v3/js/jsguide/jsguide.pdf) [HTML reference保存複製](https://lib.ru/WEBMASTER/tags.txt)

1997年3月14日版は同じ設計を継承し、HTML 4.01はスクリプト無効・言語非対応・クライアント側スクリプト非対応時の代替内容コンテナーとして標準化した。[1997年草案](https://www.w3.org/TR/WD-script-970314) [HTML 4.01](https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT)

## HTML直前の祖先

未確認。Netscape Navigator 3.0の`NOSCRIPT`実装は確認できるが、W3C案より先行したのか、W3C案を実装したのか、共通の非公開議論から並行して導入したのかを判定できない。

## さらに上流の由来

### 証拠

1996年7月のW3C草案とNetscapeマニュアルはともに、JavaScriptまたはクライアント側スクリプティングを利用できない場合の代替内容という要求を直接説明する。[W3C草案](https://www.w3.org/TR/WD-script-960709.html) [Netscape manual保存複製](https://www.uv.es/jordi/v3/js/jsguide/jsguide.pdf)

### 解釈

`noscript`はスクリプトを実行できない場合の代替内容要求から設計された。ただし、この機能上の前提を`script`要素からの派生という矢印にはせず、Netscape実装とW3C案も因果を確認できるまで接続しない。

## 系譜

Netscape Navigator 3.0 `NOSCRIPT`（1996年、W3C案との前後・因果は未確認）

スクリプト・言語非対応時の旧式代替内容要求 → W3C `NOSCRIPT`（遅くとも1996-07-09） → HTML 4 `NOSCRIPT` → 現行HTML `<noscript>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-06-27 | [*Client-side Scripting and HTML*](../../raw/www.w3.org/TR/WD-script-960627.html)（[公開元](https://www.w3.org/TR/WD-script-960627.html)） | W3C Working Draft | この版には`NOSCRIPT`定義がない。 | 2026-08-10 |
| 1996-07-09 | [*Client-side Scripting and HTML*](../../raw/www.w3.org/TR/WD-script-960709.html)（[公開元](https://www.w3.org/TR/WD-script-960709.html)） | W3C Working Draft | `NOSCRIPT`の最初期の確認、非対応時だけ描画する条件、旧式ブラウザー向けの要求。 | 2026-08-10 |
| 1996 | [Netscape *JavaScript Guide*, Version 3.0](../../raw/www.uv.es/jordi/v3/js/jsguide/jsguide.pdf)（[公開元](https://www.uv.es/jordi/v3/js/jsguide/jsguide.pdf)） | ベンダー公式マニュアルの保存複製 | `NOSCRIPT`による代替内容と、NavigatorでJavaScriptを無効化した場合の表示を説明。 | 2026-08-10 |
| 公開日未確認 | [Netscape *HTML Reference Guide: Tags for Netscape 3.0*](../../raw/lib.ru/WEBMASTER/tags.txt)（[公開元](https://lib.ru/WEBMASTER/tags.txt)） | ベンダー公式参照の保存複製 | `NOSCRIPT`をNavigator 3.0のタグとして記録。 | 2026-08-10 |
| 1997-03-14 | [*Client-side Scripting and HTML*](../../raw/www.w3.org/TR/WD-script-970314)（[公開元](https://www.w3.org/TR/WD-script-970314)） | W3C Working Draft | HTML 4統合前の`NOSCRIPT`と代替内容設計。 | 2026-08-10 |
| 1999-12-24 | [HTML 4.01 §18.3.1](../../raw/www.w3.org/TR/html401/interact/scripts.html)（[公開元](https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT)） | W3C Recommendation | スクリプト無効・言語非対応・スクリプト非対応時の代替内容コンテナー。 | 2026-08-10 |

## 確度

**B**

W3C草案が導入要求と設計モデルを直接説明し、Netscape Navigator 3.0実装も確認できるが、両者の時間順序と因果関係を固定できず、具体的な先行物から要素への因果関係は確認できないため。

## 否定された仮説

Netscape Navigator 2.0を直接祖先とする説明。1996年Netscapeマニュアルの例文はNavigator 2.0以降の取得を促すが、`NOSCRIPT`自体の初回実装版は示さない。Navigator 3.0からW3C案、またはW3C案からNavigator 3.0への矢印も、公開日の前後と採録記録がないため保留する。SGML条件付きセクションからの由来も、機能の類似だけで採用因果がない。

## 未解決

- 1996年6月27日版と7月9日版の間で`NOSCRIPT`を提案した人物と議論は確認できるか。
- Navigator 3.0ベータのどのビルドで`NOSCRIPT`が実装され、いつ公開されたか。
- Netscape実装とW3C草案の前後関係・採録因果は確認できるか。
- 更新呼びかけ中心の設計が一般的な代替内容へ整理された経緯は何か。
