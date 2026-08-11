---
status: 完成
---

# `<script>`

## 概要

Netscapeが定義しNavigator 2.0ベータへ実装した`SCRIPT`を、W3CのHTML3 Scripting草案が形式化した要素である。HTML 3.2では将来のクライアント側スクリプティング用プレースホルダーとして収録され、HTML 4で本格的に規定された。

## 現在の意味

WHATWG HTML Living Standardでは、動的スクリプト、ユーザーエージェントへの指示、データブロックを文書へ含める。利用者向け内容自体は表さず、`type`でスクリプトやデータブロックの種類を、`src`で外部スクリプトを指定できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/scripting.html)（[公開版](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)、2026-08-09確認）

## HTMLへの導入

1996年1月24日のW3C Working Draft *HTML3 Scripting*は、Netscapeが定義しNavigator 2.0ベータへ実装した`SCRIPT`を形式化し、互換にする仕様だと明記した。クライアント側でのフォーム検査と計算、イベントに応じた埋め込みオブジェクトの制御、有効文書、複数スクリプティングシステムの差し替えを要求として挙げ、行内コードと外部ソースの両方を定義した。[HTML3 Scripting](../../raw/www.w3.org/TR/WD-script-960124.html)（[公開元](https://www.w3.org/TR/WD-script-960124.html)）

HTML 3.2は`SCRIPT`を将来のクライアント側スクリプト導入用プレースホルダーとして収録し、HTML 4は行内／外部スクリプト、イベント応答、動的な文書変更を本格的に規定した。[HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） [HTML 4.01](../../raw/www.w3.org/TR/html401/interact/scripts.html)（[公開元](https://www.w3.org/TR/html401/interact/scripts.html)）

## HTML直前の祖先

Netscapeが定義しNavigator 2.0ベータへ実装した`SCRIPT`である。W3C草案がその実装を形式化する関係を要素単位で明記する。

## さらに上流の由来

### 証拠

W3C草案はNetscapeとSunのJavaScriptを先行する実装文脈として挙げ、クライアント側フォーム、イベント駆動の埋め込みオブジェクト、有効文書、スクリプトエンジンの交換可能性をHTML側の要求として列挙する。[HTML3 Scripting](../../raw/www.w3.org/TR/WD-script-960124.html)（[公開元](https://www.w3.org/TR/WD-script-960124.html)）

### 解釈

確認できる接続はJavaScript一般ではなく、NetscapeのHTML `SCRIPT`構文とNavigator実装からW3C `SCRIPT`への系譜である。JavaScript言語の設計史はHTML要素の祖先へ接続しない。

## 系譜

Netscape Navigator 2.0ベータ `SCRIPT` → W3C HTML3 Scripting `SCRIPT`（1996年） → HTML 3.2プレースホルダー → HTML 4 `SCRIPT` → 現行HTML `<script>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-01-24 | [*HTML3 Scripting*](../../raw/www.w3.org/TR/WD-script-960124.html)（[公開元](https://www.w3.org/TR/WD-script-960124.html)） | W3C Working Draft | Netscape定義・Navigator 2.0ベータ実装の`SCRIPT`を形式化する因果、導入要求、行内／外部スクリプト。 | 2026-08-09 |
| 1997年保存（Navigator 2.0向け文書） | [*JavaScript Authoring Guide: Navigator Scripting*](../../raw/web.archive.org/web/19970617232458id_/http%3A/home.netscape.com/eng/mozilla/2.0/handbook/javascript/script.html)（[公開元](https://web.archive.org/web/19970617232458id_/http://home.netscape.com/eng/mozilla/2.0/handbook/javascript/script.html)） | Netscape公式文書の保存版 | `SCRIPT`によるJavaScript埋込み、`LANGUAGE`、行内文とイベントハンドラー。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） | W3C Recommendation | `SCRIPT`を将来のクライアント側スクリプト導入用プレースホルダーとして収録。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01 §18](../../raw/www.w3.org/TR/html401/interact/scripts.html)（[公開元](https://www.w3.org/TR/html401/interact/scripts.html)） | W3C Recommendation | 行内／外部スクリプトと用途を本格的に規定。 | 2026-08-09 |

## 確度

**A**

Netscapeによる定義とNavigator 2.0ベータ版の実装をW3Cが形式化した因果関係を、同時代のW3C草案が要素単位で明記するため。

## 否定された仮説

W3Cが実装とは独立に`SCRIPT`を新設したという説明は、1996年草案の形式化の記録と矛盾する。Javaまたは一般的なプログラミング言語のスクリプト概念を直接祖先とする説明も、HTML要素構文への採用因果がないため採らない。

## 未解決

- Netscape内で`SCRIPT`という名称、コンテナー構文、`LANGUAGE`属性を選んだ設計記録はあるか。
- Navigator 2.0ベータで`SCRIPT`が利用可能になった正確なビルドと公開日はいつか。
- W3C草案からHTML 3.2プレースホルダーへ入る際の個別編集・合意記録はあるか。
