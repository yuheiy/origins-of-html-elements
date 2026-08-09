# `<noscript>`

> 状態: W3C scripting草案での導入要求を検証済み（提案者と先行実装は未解決）

## 概要

W3CのClient-side Scripting草案で、scriptまたはその言語に非対応のuser agentへ代替内容を示すため導入され、HTML 4へ入った要素である。具体的な先行要素やvendor実装からの採用は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、scriptingがenabledなら何も表さず、disabledならchildrenを表す。HTML syntaxで異なるmarkupを提示するためparserの動作へ影響し、XML syntaxでは使用できない。[一次定義](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element)（2026-08-09確認）

## HTMLへの導入

確認したW3C草案では1996年6月27日版に`NOSCRIPT`はなく、7月9日版に定義がある。同版は、user agentがclient-side scriptingまたは先行`SCRIPT`の言語を支援しない場合だけ内容をrenderし、downlevel browserへupgrade invitationを提供する要素と説明する。editorはDave Raggettである。[6月27日版](https://www.w3.org/TR/WD-script-960627.html) [7月9日版](https://www.w3.org/TR/WD-script-960709.html)

1997年3月14日版は同じ設計を継承し、HTML 4.01はscript無効・言語非対応・client-side script非対応時のalternate content containerとして標準化した。[1997年草案](https://www.w3.org/TR/WD-script-970314) [HTML 4.01](https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT)

## HTML直前の祖先

未確認。具体的な先行要素、vendor実装、または別のmarkup vocabularyからW3C `NOSCRIPT`を採用した因果は確認できない。

## さらに上流の由来

### 証拠

1996年7月草案は、unsupported client-side scriptingまたはunsupported scripting languageを条件とし、旧browserへupgrade invitationを示せる設計を直接説明する。[Client-side Scripting and HTML](https://www.w3.org/TR/WD-script-960709.html)

### 解釈

`noscript`は`script`を実行できない場合のfallback要求から設計された。ただし、この機能上の前提を`script`要素からの派生という矢印にはしない。

## 系譜

script・言語非対応時のdownlevel fallback要求 → W3C `NOSCRIPT`（遅くとも1996-07-09） → HTML 4 `NOSCRIPT` → 現行HTML `<noscript>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-06-27 | *Client-side Scripting and HTML* | W3C Working Draft | この版には`NOSCRIPT`定義がない。 | [一次資料](https://www.w3.org/TR/WD-script-960627.html) | 2026-08-09 |
| 1996-07-09 | *Client-side Scripting and HTML* | W3C Working Draft | `NOSCRIPT`の最初期の確認、非対応時だけrenderする条件、downlevel browser向けの要求。 | [一次資料](https://www.w3.org/TR/WD-script-960709.html) | 2026-08-09 |
| 1997-03-14 | *Client-side Scripting and HTML* | W3C Working Draft | HTML 4統合前の`NOSCRIPT`とalternate content設計。 | [一次資料](https://www.w3.org/TR/WD-script-970314) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §18.3.1 | W3C Recommendation | script無効・言語非対応・script非対応時のalternate content container。 | [一次資料](https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT) | 2026-08-09 |

## 確度

**B**

W3C草案が導入要求と設計modelを直接説明するが、具体的な先行物から要素への因果関係は確認できないため。

## 否定された仮説

Netscape Navigator 2.0の`NOSCRIPT`を直接祖先とする説明は、導入日とW3C案への採用を結ぶ同時代資料がないため保留する。SGML conditional sectionからの由来も、機能の類似だけで採用因果がない。

## 未解決

- 1996年6月27日版と7月9日版の間で`NOSCRIPT`を提案した人物と議論は確認できるか。
- 同時期のbrowser実装に`NOSCRIPT`が先行していたか。
- upgrade invitation中心の設計が一般的なalternate contentへ整理された経緯は何か。

## 調査記録

1996年6月・7月と1997年3月のW3C scripting草案、HTML 4.01、現行Living Standardを確認した。横断比較は[Scripting / embedding要素の調査ノート](../research/scripting-embedding-elements.md)を参照する。
