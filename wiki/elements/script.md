# `<script>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。Netscape Navigator実装からW3C仕様への系譜を検証済み（Netscape内部の設計過程は未解決）

## 概要

Netscapeが定義しNavigator 2.0 betaへ実装した`SCRIPT`を、W3CのHTML3 Scripting草案がformalizeした要素である。HTML 3.2では将来のclient-side scripting用placeholderとして収録され、HTML 4で本格的に規定された。

## 現在の意味

WHATWG HTML Living Standardでは、動的script、user agentへのinstructions、data blocksを文書へ含める。利用者向けcontent自体は表さず、`type`でscriptやdata blockの種類を、`src`で外部scriptを指定できる。[一次定義](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)（2026-08-09確認）

## HTMLへの導入

1996年1月24日のW3C Working Draft *HTML3 Scripting*は、Netscapeが定義しNavigator 2.0 betaへ実装した`SCRIPT`をformalizeし、互換にする仕様だと明記した。client-sideでのform検査と計算、eventに応じたembedded objectの制御、active documents、複数scripting systemの差し替えを要求として挙げ、inline codeと外部sourceの両方を定義した。[HTML3 Scripting](https://www.w3.org/TR/WD-script-960124.html)

HTML 3.2は`SCRIPT`を将来のclient-side scripts導入用placeholderとして収録し、HTML 4はinline／external script、event response、dynamic document modificationを本格的に規定した。[HTML 3.2](https://www.w3.org/TR/REC-html32) [HTML 4.01](https://www.w3.org/TR/html401/interact/scripts.html)

## HTML直前の祖先

Netscapeが定義しNavigator 2.0 betaへ実装した`SCRIPT`である。W3C草案がその実装をformalizeする関係を要素単位で明記する。

## さらに上流の由来

### 証拠

W3C草案はNetscapeとSunのJavaScriptを先行する実装文脈として挙げ、client-side forms、event-driven embedded objects、active documents、scripting engineのpluggabilityをHTML側の要求として列挙する。[HTML3 Scripting](https://www.w3.org/TR/WD-script-960124.html)

### 解釈

確認できる接続はJavaScript一般ではなく、NetscapeのHTML `SCRIPT`構文とNavigator実装からW3C `SCRIPT`への系譜である。JavaScript言語の設計史はHTML要素の祖先へ接続しない。

## 系譜

Netscape Navigator 2.0 beta `SCRIPT` → W3C HTML3 Scripting `SCRIPT`（1996年） → HTML 3.2 placeholder → HTML 4 `SCRIPT` → 現行HTML `<script>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-01-24 | *HTML3 Scripting* | W3C Working Draft | Netscape定義・Navigator 2.0 beta実装の`SCRIPT`をformalizeする因果、導入要求、inline／external script。 | [一次資料](https://www.w3.org/TR/WD-script-960124.html) | 2026-08-09 |
| 1997年保存（Navigator 2.0向け文書） | *JavaScript Authoring Guide: Navigator Scripting* | Netscape公式文書の保存版 | `SCRIPT`によるJavaScript埋込み、`LANGUAGE`、inline statements、event handlers。 | [保存版](https://web.archive.org/web/19970617232458id_/http://home.netscape.com/eng/mozilla/2.0/handbook/javascript/script.html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | `SCRIPT`を将来のclient-side scripts導入用placeholderとして収録。 | [一次資料](https://www.w3.org/TR/REC-html32) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §18 | W3C Recommendation | inline／external scriptと用途を本格的に規定。 | [一次資料](https://www.w3.org/TR/html401/interact/scripts.html) | 2026-08-09 |

## 確度

**A**

Netscape定義・Navigator 2.0 beta実装からW3Cがformalizeした因果関係を、同時代のW3C草案が要素単位で明記するため。

## 否定された仮説

W3Cが実装とは独立に`SCRIPT`を新設したという説明は、1996年草案のformalization記録と矛盾する。Javaまたは一般的なprogramming languageのscript概念を直接祖先とする説明も、HTML要素構文への採用因果がないため採らない。

## 未解決

- Netscape内で`SCRIPT`という名称、container構文、`LANGUAGE`属性を選んだ設計記録はあるか。
- Navigator 2.0 betaで`SCRIPT`が利用可能になった正確なbuildと公開日はいつか。
- W3C草案からHTML 3.2 placeholderへ入る際の個別編集・合意記録はあるか。

## 調査記録

1996年HTML3 Scripting草案、Netscape Navigator 2.0向けhandbook、HTML 3.2、HTML 4.01、現行Living Standardを確認した。横断比較は[Scripting / embedding要素の調査ノート](../research/scripting-embedding-elements.md)を参照する。

敵対的レビュー（2026-08-09）では、W3C草案がNetscape定義とNavigator 2.0 beta実装のformalizationを明記する文脈、Netscape保存文書、HTML 3.2・4.01を再確認した。JavaScript一般やevent handlerとの機能的一致を祖先にせず、要素単位の因果を支えるAを維持した。
