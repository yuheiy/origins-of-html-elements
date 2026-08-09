---
status: 完成
---

# `<noscript>`

## 概要

W3CのClient-side Scripting草案で、scriptまたはその言語に非対応のuser agentへ代替内容を示すため導入され、HTML 4へ入った要素である。Netscape Navigator 3.0の実装も確認できるが、W3C案との前後関係と採録因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、scriptingがenabledなら何も表さず、disabledならchildrenを表す。HTML syntaxで異なるmarkupを提示するためparserの動作へ影響し、XML syntaxでは使用できない。[一次定義](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element)（2026-08-09確認）

## HTMLへの導入

確認したW3C草案では1996年6月27日版に`NOSCRIPT`はなく、7月9日版に定義がある。同版は、user agentがclient-side scriptingまたは先行`SCRIPT`の言語を支援しない場合だけ内容をrenderし、downlevel browserへupgrade invitationを提供する要素と説明する。editorはDave Raggettである。[6月27日版](https://www.w3.org/TR/WD-script-960627.html) [7月9日版](https://www.w3.org/TR/WD-script-960709.html)

Netscapeのcopyright 1996、Version 3.0の*JavaScript Guide*と、Netscape 3.0用HTML referenceの保存複製は`NOSCRIPT`の実装と、JavaScript非対応または無効時に代替内容を表示する動作を記録する。ただし資料の公開日を固定できず、7月9日のW3C草案との前後関係は分からない。[JavaScript Guide保存複製](https://www.uv.es/jordi/v3/js/jsguide/jsguide.pdf) [HTML reference保存複製](https://lib.ru/WEBMASTER/tags.txt)

1997年3月14日版は同じ設計を継承し、HTML 4.01はscript無効・言語非対応・client-side script非対応時のalternate content containerとして標準化した。[1997年草案](https://www.w3.org/TR/WD-script-970314) [HTML 4.01](https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT)

## HTML直前の祖先

未確認。Netscape Navigator 3.0の`NOSCRIPT`実装は確認できるが、W3C案より先行したのか、W3C案を実装したのか、共通の非公開議論から並行して導入したのかを判定できない。

## さらに上流の由来

### 証拠

1996年7月のW3C草案とNetscape manualはともに、JavaScriptまたはclient-side scriptingを利用できない場合のalternate contentという要求を直接説明する。[W3C草案](https://www.w3.org/TR/WD-script-960709.html) [Netscape manual保存複製](https://www.uv.es/jordi/v3/js/jsguide/jsguide.pdf)

### 解釈

`noscript`はscriptを実行できない場合のfallback要求から設計された。ただし、この機能上の前提を`script`要素からの派生という矢印にはせず、Netscape実装とW3C案も因果を確認できるまで接続しない。

## 系譜

Netscape Navigator 3.0 `NOSCRIPT`（1996年、W3C案との前後・因果は未確認）

script・言語非対応時のdownlevel fallback要求 → W3C `NOSCRIPT`（遅くとも1996-07-09） → HTML 4 `NOSCRIPT` → 現行HTML `<noscript>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-06-27 | *Client-side Scripting and HTML* | W3C Working Draft | この版には`NOSCRIPT`定義がない。 | [一次資料](https://www.w3.org/TR/WD-script-960627.html) | 2026-08-10 |
| 1996-07-09 | *Client-side Scripting and HTML* | W3C Working Draft | `NOSCRIPT`の最初期の確認、非対応時だけrenderする条件、downlevel browser向けの要求。 | [一次資料](https://www.w3.org/TR/WD-script-960709.html) | 2026-08-10 |
| 1996 | Netscape *JavaScript Guide*, Version 3.0 | vendor公式manualの保存複製 | `NOSCRIPT`によるalternate contentと、NavigatorでJavaScriptを無効化した場合の表示を説明。 | [保存複製](https://www.uv.es/jordi/v3/js/jsguide/jsguide.pdf) | 2026-08-10 |
| 公開日未確認 | Netscape *HTML Reference Guide: Tags for Netscape 3.0* | vendor公式referenceの保存複製 | `NOSCRIPT`をNavigator 3.0のtagとして記録。 | [保存複製](https://lib.ru/WEBMASTER/tags.txt) | 2026-08-10 |
| 1997-03-14 | *Client-side Scripting and HTML* | W3C Working Draft | HTML 4統合前の`NOSCRIPT`とalternate content設計。 | [一次資料](https://www.w3.org/TR/WD-script-970314) | 2026-08-10 |
| 1999-12-24 | HTML 4.01 §18.3.1 | W3C Recommendation | script無効・言語非対応・script非対応時のalternate content container。 | [一次資料](https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT) | 2026-08-10 |

## 確度

**B**

W3C草案が導入要求と設計modelを直接説明し、Netscape Navigator 3.0実装も確認できるが、両者の時間順序と因果関係を固定できず、具体的な先行物から要素への因果関係は確認できないため。

## 否定された仮説

Netscape Navigator 2.0を直接祖先とする説明。1996年Netscape manualの例文はNavigator 2.0以降の取得を促すが、`NOSCRIPT`自体の初回実装版は示さない。Navigator 3.0からW3C案、またはW3C案からNavigator 3.0への矢印も、公開日の前後と採録記録がないため保留する。SGML conditional sectionからの由来も、機能の類似だけで採用因果がない。

## 未解決

- 1996年6月27日版と7月9日版の間で`NOSCRIPT`を提案した人物と議論は確認できるか。
- Navigator 3.0 betaのどのbuildで`NOSCRIPT`が実装され、いつ公開されたか。
- Netscape実装とW3C草案の前後関係・採録因果は確認できるか。
- upgrade invitation中心の設計が一般的なalternate contentへ整理された経緯は何か。
