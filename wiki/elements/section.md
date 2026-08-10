---
status: 完成
---

# `<section>`

## 概要

遅くとも2004年8月にはWHATWG Web Applications 1.0で定義され、見出しだけでは文書構造とoutlineを確実に復元できない問題へのsectioning modelを担った。2004年11月に編集者は、既存の`div class="section"`を`section`へ置換できることを設計要求として明記した。

## 現在の意味

WHATWG HTML Living Standardでは、文書またはアプリケーション内の汎用的なsection、すなわち通常は見出しを伴う主題別の内容群を表す。stylingやscriptingだけの汎用containerではない。[HTML Living Standard](../../raw/html-living-standard/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-section-element)、2026-08-10確認）

## HTMLへの導入

2004年8月26日のWHATWG議論でWeb Applications 1.0に定義済みであることが確認でき、headingだけではdocument structureとoutlineを確実に復元できない問題が議論された。9月23日版の最古の確認可能な保存草案はchapter等のdocument sectionとして定義する。11月12日にHicksonは、既存markupを`section`で包んでも正しく、`div class="section"`を`section`へ置換できることをsectioning modelの要件として明記した。2005年9月1日草案は文書またはアプリケーションのgeneric sectionとして定義する。[2004年8月の議論](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/001989.html) [2004年保存草案](https://web.archive.org/web/20041009144718id_/http://whatwg.org/specs/web-apps/current-work/#section) [2004年11月の設計要求](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-section)

## HTML直前の祖先

既存Webで文書の区分を包んでいた`div class="section"`である。Hicksonはこのmarkupを`section`へ置換できることを設計要求として直接示した。XHTML 2等にも同名要素が存在するが、WHATWGがそこから採用したことを示す史料は確認できない。[設計要求](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)

## さらに上流の由来

### 証拠

2004年のmailで、既存のheadingを保ったまま`div class="section"`を専用要素へ置換し、outlineを構成する要求を確認できる。2005年草案で、見出しと組み合わせて文書構造を表すsectioning modelを確認できる。

### 解釈

既存Webのgeneric containerに埋め込まれていたsection構造を、旧UAでのheading表示を保ちながら明示する要素として導入されたと解釈できる。XHTML 2等の別語彙からの影響は確定しない。

## 系譜

既存Web `div class="section"` → WHATWG Web Applications 1.0 `section`（2004年まで） → 現行HTML `section`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-08-26 | [`<section>` and headings](../../raw/items/lists.whatwg.org/3410681618b3e6ea-001989.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/001989.html)） | WHATWG mailing list | WA1で定義済みの`section`と、headingだけからoutlineを復元する問題。 | 2026-08-10 |
| 2004-09-23 | [Web Applications 1.0](../../raw/whatwg-web-apps-history/4c6dbe73281bd697-current.html)（[公開元](https://web.archive.org/web/20041009144718id_/http://whatwg.org/specs/web-apps/current-work/#section)） | WHATWG保存Working Draft | `section`をchapter等のdocument sectionとして定義した、最古の確認可能な保存草案。 | 2026-08-10 |
| 2004-11-12 | [Re: `<section>` and headings](../../raw/items/lists.whatwg.org/2787ce0070a2766d-002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)） | WHATWG mailing list | 既存markupを`section`で包み、`div class="section"`を`section`へ置換できることを設計要求としたこと。 | 2026-08-10 |
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg-web-apps-history/f8bdeadb28b78825-2005-.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-section)） | WHATWG保存Early Working Draft | `section`の存在と、見出しを伴うgeneric sectionという意味。 | 2026-08-09 |
| 2008-01-22 | [HTML 5 differences from HTML 4](../../raw/w3c-html5-history/07e1fb58af5f1133-WD-html5-diff-200.html)（[公開元](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements)） | W3C Working Draft | `section`をHTML 4にないdocument markupとして列挙。 | 2026-08-09 |

## 確度

**A**

既存Webの`div class="section"`を`section`へ置換可能にするという要素単位の設計要求を、WHATWG編集者の同時代mailで直接確認できるため。

## 否定された仮説

XHTML 2等の同名`section`から採用したという説明。同名存在だけでは因果を示さず、確認できる直接の設計要求は既存Webの`div class="section"`を指す。

## 未解決

- 2004年8月26日より前の提案者と正確な初出は確認できるか。
- XHTML 2等の先行語彙との関係を明記した同時代資料はあるか。
