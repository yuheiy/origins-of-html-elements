---
status: 完成
---

# `<rt>`

## 概要

W3Cのruby語彙でannotation textを表す要素として提案・規範化され、既存Web利用との互換性を考慮して2008年に`ruby`、`rp`とともにHTML5へ追加された。

## 現在の意味

WHATWG HTML Living Standardでは、ruby annotationのruby text componentを示す。`ruby`の子である場合、単独では何も表さず、親`ruby`が表す内容の決定に使われる。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element)（2026-08-09確認）

## HTMLへの導入

2008年5月26日、Ian Hicksonが`ruby`、`rt`、`rp`とparser規則をWHATWG HTMLへ同時追加した。commitはIEとの完全互換ではなく、Web上のruby利用との互換性を採用判断として明記する。[仕様commit](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)

## HTML直前の祖先

W3C Ruby語彙、IE実装、既存Web上の`rt`利用という集合である。HTML5 commitは既存利用を参照するが、そのcorpusや一つの採用元を特定しない。

## さらに上流の由来

### 証拠

1998年W3C草案は`rt`をruby textとして提案し、2001年RecommendationがXHTML Ruby moduleの同じ役割として規範化した。[1998年草案](https://www.w3.org/TR/1998/WD-ruby-19981221/) [2001年Recommendation](https://www.w3.org/TR/2001/REC-ruby-20010531/)

### 解釈

国際化作業のannotation text用語彙を、既存実装・利用との互換性を考慮してHTML parserへ統合したと解釈できる。

## 系譜

W3C Ruby `rt`案（1998年） → XHTML Ruby `rt`（2001年）／IE実装・既存Web利用 → HTML5 `rt`追加（2008年） → 現行HTML `rt`

個別の直前経路は集合レベルの資料しかなく、一部欠落する。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1998-12-21 | *Ruby* | W3C Working Draft | HTML拡張の`rt`をruby textとして提案。 | [一次資料](https://www.w3.org/TR/1998/WD-ruby-19981221/) | 2026-08-09 |
| 2001-05-31 | *Ruby Annotation* | W3C Recommendation | XHTML moduleの`rt`をruby textとして規範化。 | [一次資料](https://www.w3.org/TR/2001/REC-ruby-20010531/) | 2026-08-09 |
| 2008-05-26 | WHATWG HTML commit `f4efc736` | 仕様commit | `rt`を含むruby三要素の追加と既存Web利用を考慮したparser規則。 | [一次資料](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9) | 2026-08-09 |

## 確度

**A−**

語彙集合とHTML5追加の因果は確認できるが、HTML5 commitが参照した既存利用から`rt`への個別経路が不明なため。

## 否定された仮説

W3C Recommendationだけから直接採用したという説明。役割は連続するが、HTML5 commitは単一の採用元を明記しない。

## 未解決

- 2008年commitが参照した`rt`利用のcorpusは何か。
- IEの`rt`実装とHTML5 parser規則の差分は何か。
- W3C Recommendationを直接参照した編集記録はあるか。
