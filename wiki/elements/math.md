---
status: 完成
---

# `<math>`

## 概要

MathML 1.0で定義済みのMathML名前空間のルートを、2008年にHTMLの`text/html`パーサーから生成できる外来要素のルートとして統合したものである。

## 現在の意味

MathML Coreでは、文書内のMathMLマークアップの各インスタンスを包む唯一の最上位またはルート要素であり、他のすべてのMathML内容は`math`内に置く。[MathML Core](../../raw/w3c.github.io/mathml-core/index.html)（[公開版](https://w3c.github.io/mathml-core/#the-top-level-math-element)、2026-08-09確認）

## HTMLへの導入

2008年4月5日のWHATWGコミットは、MathMLとSVGを`text/html`で扱う外来要素の内容構文解析基盤を追加し、`math`開始タグからMathML名前空間の要素を生成する規則を導入した。[仕様コミット](../../raw/github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)（[公開元](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)）

## HTML直前の祖先

MathML名前空間の`math` ルートである。1998年MathML 1.0が最上位要素として定義し、HTMLコミットが同じルートを外来名前空間要素として生成する因果を直接示す。[MathML 1.0](../../raw/www.w3.org/TR/1998/REC-MathML-19980407/index.html)（[公開元](https://www.w3.org/TR/1998/REC-MathML-19980407/)）

## さらに上流の由来

### 証拠

MathML 1.0は数学の記法、構造、内容をWebで扱うXMLアプリケーションとしてMathMLを定義する。

### 解釈

新しいHTML名前空間要素を発明したのではなく、独立したMathML語彙のルートをHTML構文とパーサーへ接続した統合点と解釈できる。

## 系譜

MathML 1.0 `math` ルート（1998年） → HTML `text/html`パーサーで生成されるMathML `math` ルート（2008年） → 現行HTML文書内の外来要素のルート`math`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1998-04-07 | [MathML 1.0](../../raw/www.w3.org/TR/1998/REC-MathML-19980407/index.html)（[公開元](https://www.w3.org/TR/1998/REC-MathML-19980407/)） | W3C Recommendation | MathML XMLアプリケーションと最上位 `math`の定義。 | 2026-08-09 |
| 2008-04-05 | [WHATWG HTML commit `1ff9688a`](../../raw/github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)（[公開元](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)） | 仕様コミット | `math`開始タグをMathML名前空間ルートとして`text/html`パーサーへ統合。 | 2026-08-09 |

## 確度

**A**

既存MathML `math` ルートからHTMLパーサー統合への要素単位の因果を仕様とコミット差分で直接確認できるため。

## 否定された仮説

HTML名前空間の新要素として2008年に発明されたという説明。パーサーが生成するのは既存MathML名前空間のルートである。

## 未解決

- HTMLパーサーへの統合を要求した論点またはメーリングリスト議論はどれか。
- 採用時に想定したMathML版と互換性範囲は何か。
- XML／XHTML埋込みから`text/html`統合へ至る設計議論は確認できるか。
