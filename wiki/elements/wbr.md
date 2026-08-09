# `<wbr>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。Netscapeでの導入要求を検証済み（具体的祖先と正確な公開日は未確認）

## 概要

Netscapeが1995年のNavigator拡張として記録した任意改行機会である。導入理由は確認できるが、HTML以前の具体的祖先は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、行を折り返してよい機会を表す。要素内の内容は周囲のtextの一部とみなされない。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element)（2026-08-09確認）

## HTMLへの導入

Copyright 1995のNetscape Communications文書は`WBR`をnew elementとし、`NOBR`区間内の例外的な改行位置、または長い語で改行可能な位置をNavigatorへ知らせるためと説明する。`BR`と異なり改行を強制しない。[Netscape “Extensions to HTML”](https://marc.merlins.org/htmlearn/netscape/html_extensions.html)

## HTML直前の祖先

未確認。Netscape文書は`NOBR`との機能上の組合せを示すが、`NOBR`が時間的に先行し、そこから`WBR`が派生したとは示さない。

## さらに上流の由来

### 証拠

Netscape Navigatorのline breakingと`NOBR`が直接の設計文脈である。desktop publishing、word processor、SGML語彙、soft hyphen等からの採用は確認できない。

### 解釈

通常の空白位置での改行と`NOBR`による改行禁止の間へ、authorが任意改行機会を置くための補助要素と解釈できる。

## 系譜

Netscape Navigator拡張`WBR`（1995年、正確な日付不明） → 現行HTML `<wbr>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995（正確な日付不明） | Netscape Communications, “Extensions to HTML” | vendor公式文書の保存複製 | `WBR`をNavigatorのnew elementとし、任意改行位置を指定する導入要求を説明。 | [一次資料](https://marc.merlins.org/htmlearn/netscape/html_extensions.html) | 2026-08-09 |

## 確度

**B**

HTMLへの導入主体と設計要求はvendor文書で確認できるが、その一段上の具体的祖先を確認できないため。

## 否定された仮説

`NOBR`を時間的な直接祖先として矢印で結ぶ説明。確認できるのは機能上の組合せであり、導入順序や派生関係ではない。soft hyphen等との直接関係も未確認である。

## 未解決

- Netscape文書の正確な公開日と対象Navigator版は何か。
- `NOBR`との実装順序と設計議論を示す資料はあるか。
- 組版・word processor・SGML・soft hyphen等の先行機構から採用した因果資料はあるか。

## 調査記録

Netscape Communicationsの1995年拡張文書と、Netscape 1.1 beta拡張という後代の索引情報を探索した。後者は当時の一次資料ではないため確定根拠に用いなかった。横断比較は[browser vendor要素調査ノート](../research/browser-vendor-elements.md)を参照する。

敵対的レビュー（2026-08-09）では、Netscape公式文書の保存複製と後代索引を区別して再確認した。`NOBR`、soft hyphen、組版の任意改行との類似は採用因果を示さず、正確な公開日も確定できないためBを維持した。
