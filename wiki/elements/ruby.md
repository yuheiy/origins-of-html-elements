# `<ruby>`

> 状態: 完成

## 概要

W3C Internationalization Working GroupがHTML拡張として提案し、XHTML moduleで規範化したruby語彙を背景に、既存Web利用との互換性を考慮して2008年に`rt`、`rp`とともにHTML5へ追加された。

## 現在の意味

WHATWG HTML Living Standardでは、phrasing contentの一つ以上の範囲へruby annotationを付ける。ruby annotationは主に東アジア組版で発音等を示すため、base textに沿えて表示する短いtextである。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element)（2026-08-09確認）

## HTMLへの導入

2008年5月26日、Ian Hicksonが`ruby`、`rt`、`rp`とparser規則をWHATWG HTMLへ同時追加した。commitはIEとの完全互換ではなく、Web上のruby利用との互換性を採用判断として明記する。[仕様commit](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)

## HTML直前の祖先

W3C Ruby語彙、IE実装、既存Web上のruby markupという集合である。HTML5 commitは既存利用を参照するが、そのcorpusや一つの採用元を特定しない。

## さらに上流の由来

### 証拠

1998年W3C草案は、East Asian typographyのrubyをHTMLで構造化できない問題に対して`ruby`、`rb`、`rt`、`rp`を提案し、次版HTMLへ提出する意図を示した。2001年Recommendationは同語彙をXHTML moduleとして規範化した。[1998年草案](https://www.w3.org/TR/1998/WD-ruby-19981221/) [2001年Recommendation](https://www.w3.org/TR/2001/REC-ruby-20010531/)

### 解釈

国際化作業で作られたmarkup語彙と実装・既存利用を、HTML parserへ統合した系譜と解釈できる。

## 系譜

W3C Ruby HTML拡張案（1998年） → XHTML Ruby module（2001年）／IE実装・既存Web利用 → HTML5 `ruby`・`rt`・`rp`追加（2008年） → 現行HTML `ruby`

個別の直前経路は集合レベルの資料しかなく、一部欠落する。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1998-12-21 | *Ruby* | W3C Working Draft | HTML拡張`ruby`語彙、国際化要求、次版HTMLへ提出する意図。 | [一次資料](https://www.w3.org/TR/1998/WD-ruby-19981221/) | 2026-08-09 |
| 2001-05-31 | *Ruby Annotation* | W3C Recommendation | XHTML moduleの`ruby`をannotation全体として規範化。 | [一次資料](https://www.w3.org/TR/2001/REC-ruby-20010531/) | 2026-08-09 |
| 2008-05-26 | WHATWG HTML commit `f4efc736` | 仕様commit | `ruby`、`rt`、`rp`の同時追加と既存Web利用を考慮したparser規則。 | [一次資料](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9) | 2026-08-09 |

## 確度

**A−**

語彙集合とHTML5追加の因果は直接史料で確認できるが、commitが参照した既存Web利用と各先行系統の個別対応が不明なため。

## 否定された仮説

W3C Ruby Recommendationだけから直接採用したという説明。名称と役割は連続するが、HTML5 commitはRecommendationを採用元として明記しない。組版慣習からHTML要素へ直接接続する説明も採用しない。

## 未解決

- 2008年commitが参照したWeb上のruby usageのcorpusは何か。
- IE実装とHTML5 parser設計の採用・不採用差分は何か。
- W3C RecommendationをHTML5編集時に直接参照した記録はあるか。
- 組版慣習からW3C markup語彙へ至る決定記録はあるか。
