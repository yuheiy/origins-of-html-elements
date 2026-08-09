# `<section>`

> 状態: 完成

## 概要

遅くとも2004年8月にはWHATWG Web Applications 1.0で定義され、見出しだけでは文書構造とoutlineを確実に復元できない問題へのsectioning modelを担った。XHTML 2等の同名要素からの採用因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、文書またはアプリケーション内の汎用的なsection、すなわち通常は見出しを伴う主題別の内容群を表す。stylingやscriptingだけの汎用containerではない。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-section-element)（2026-08-09確認）

## HTMLへの導入

2004年8月のWHATWG議論でWeb Applications 1.0に定義済みであることをIan Hicksonが述べ、headingだけではdocument structureとoutlineを確実に復元できない問題が説明された。2005年9月1日草案は文書またはアプリケーションのgeneric sectionとして定義する。[2004年議論](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/date.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-section)

## HTML直前の祖先

未確認。XHTML 2等にも同名要素が存在するが、WHATWGがそこから採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

2005年草案で、見出しと組み合わせて文書構造を表すsectioning modelを確認できる。

### 解釈

HTML5のdocument outlineを表すための汎用sectionとして導入されたと解釈できるが、さらに上流の語彙は確定しない。

## 系譜

WHATWG Web Applications 1.0 `section`（2004年まで） → 現行HTML `section`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-08 | `<section>` and headings | WHATWG mailing list | WA1で定義済みの`section`と、headingだけからoutlineを復元する問題。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/date.html) | 2026-08-09 |
| 2005-09-01 | Web Applications 1.0 | WHATWG保存Early Working Draft | `section`の存在と、見出しを伴うgeneric sectionという意味。 | [一次資料](https://whatwg.org/specs/web-apps/2005-09-01/#the-section) | 2026-08-09 |
| 2008-01-22 | HTML 5 differences from HTML 4 | W3C Working Draft | `section`をHTML 4にないdocument markupとして列挙。 | [一次資料](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements) | 2026-08-09 |

## 確度

**B**

HTMLへの導入時の設計モデルは確認できるが、具体的な先行要素からの採用因果は確認できないため。

## 否定された仮説

XHTML 2等の同名`section`から採用したという説明。同名存在だけでは因果を示さない。

## 未解決

- 2004年8月より前の提案者と正確な初出は確認できるか。
- XHTML 2等の先行語彙との関係を明記した同時代資料はあるか。
