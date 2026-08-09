# `<bdi>`

> 状態: 完成

## 概要

W3C i18n groupのbidi isolation要求と`ubi`属性案を、WHATWGが2010年に新要素へ変更して採録したものである。

## 現在の意味

WHATWG HTML Living Standardでは、bidirectional text formattingにおいて周囲から分離するtext範囲を表す。`dir`はこの要素では`auto`が既定となり、親から継承しない。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element)（2026-08-09確認）

## HTMLへの導入

2010年のW3C Bug 10807でAharon LaninはCSS `unicode-bidi:isolate`をHTMLへ公開する`ubi`属性を提案した。Ian Hicksonは一般解として`bdi`要素を選び、2010年11月5日のWHATWG revision r5669がbidi上の影響を持ちうるuser-generated contentを安全に挿入する要素として追加した。[W3C Bug 10807](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807)

## HTML直前の祖先

HTML直前の祖先はCSS `unicode-bidi:isolate`とW3C i18n groupの`ubi`属性案である。属性案から新要素へ変更した過程がBug 10807に直接記録されている。[W3C bidi requirements](https://www.w3.org/TR/html-bidi/#bidi-isolation) [Bug 10807](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807)

## さらに上流の由来

### 証拠

Unicode Bidi Algorithmのhigher-level protocol isolation要求が上流にある。LRM／RLM挿入では検索やcopy-and-pasteを壊す問題もW3C資料が記録する。[W3C bidi requirements](https://www.w3.org/TR/html-bidi/#bidi-isolation)

### 解釈

`bdi`は`bdo`の別名ではなく、overrideとは異なるisolation問題への解法を属性から要素へ組み替えたものと解釈できる。

## 系譜

Unicode Bidi Algorithmのisolation要求 → CSS `unicode-bidi:isolate`＋W3C `ubi`属性案 → WHATWG `bdi` r5669／r5677（2010年） → 現行HTML `<bdi>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2010-09-29〜2010-11-11 | W3C Bug 10807 | W3C HTML WG Bugzilla議論／WHATWG check-in記録 | `ubi`属性提案から`bdi`要素を選択し、r5669／r5677へ採録した経路。 | [一次資料](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807) | 2026-08-09 |
| 2015-07-21 | *Additional Requirements for Bidi in HTML & CSS* | W3C Working Group Note | isolation問題、`ubi`提案、実際には`bdi`が採用された歴史を記録。 | [一次資料](https://www.w3.org/TR/html-bidi/#bidi-isolation) | 2026-08-09 |

## 確度

**A**

具体的なisolation要求、CSSと属性による先行案、新要素への変更、WHATWG採録を同じ公開議論で追跡できるため。

## 否定された仮説

`bdo`の単純な別名または反対機能として導出する説明。Bug 10807はoverrideとisolationを別の問題として扱う。user-generated contentだけを唯一の由来とする説明も、著者作成textを含むuse casesより狭すぎる。

## 未解決

- r5669とr5677の完全なdiffを恒久的に確認できる保存先はあるか。
- `ubi`案以前の`bdi`名称提案とされる元投稿はどれか。
