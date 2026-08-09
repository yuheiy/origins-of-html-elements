# `<rp>`

> 状態: 完成

## 概要

ruby非対応user agent向けの括弧を表す要素としてW3Cが提案・規範化し、既存Web利用との互換性を考慮して2008年に`ruby`、`rt`とともにHTML5へ追加された。

## 現在の意味

WHATWG HTML Living Standardでは、ruby annotationをsupportしないuser agentに表示させるため、ruby text componentの周囲へ括弧等の内容を与える。`ruby`の子である場合は何も表さない。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element)（2026-08-09確認）

## HTMLへの導入

2008年5月26日、Ian Hicksonが`ruby`、`rt`、`rp`とparser規則をWHATWG HTMLへ同時追加した。差分は`rp`をlegacy user agent用の括弧構文として定義し、commitはWeb上のruby利用との互換性を採用判断として記す。[仕様commit](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)

## HTML直前の祖先

W3C Ruby語彙、IE実装、既存Web上の`rp`利用という集合である。HTML5 commitは既存利用を参照するが、そのcorpusや一つの採用元を特定しない。

## さらに上流の由来

### 証拠

1998年W3C草案は`rp`をruby非対応browser用のparenthesisとして提案し、2001年RecommendationがXHTML Ruby moduleの同じfallback機構として規範化した。[1998年草案](https://www.w3.org/TR/1998/WD-ruby-19981221/) [2001年Recommendation](https://www.w3.org/TR/2001/REC-ruby-20010531/)

### 解釈

ruby markupを理解しないuser agentでもannotationとの境界を読めるfallbackを、HTML parserへ継承したと解釈できる。

## 系譜

W3C Ruby `rp`案（1998年） → XHTML Ruby `rp`（2001年）／IE実装・既存Web利用 → HTML5 `rp`追加（2008年） → 現行HTML `rp`

個別の直前経路は集合レベルの資料しかなく、一部欠落する。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1998-12-21 | *Ruby* | W3C Working Draft | HTML拡張の`rp`を非対応browser用parenthesisとして提案。 | [一次資料](https://www.w3.org/TR/1998/WD-ruby-19981221/) | 2026-08-09 |
| 2001-05-31 | *Ruby Annotation* | W3C Recommendation | XHTML moduleの`rp`をfallback括弧として規範化。 | [一次資料](https://www.w3.org/TR/2001/REC-ruby-20010531/) | 2026-08-09 |
| 2008-05-26 | WHATWG HTML commit `f4efc736` | 仕様commit | `rp`を含むruby三要素とlegacy UA用括弧構文の追加。 | [一次資料](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9) | 2026-08-09 |

## 確度

**A−**

語彙集合とHTML5追加の因果は確認できるが、HTML5 commitが参照した既存利用から`rp`への個別経路が不明なため。

## 否定された仮説

W3C Recommendationだけから直接採用したという説明。役割は連続するが、HTML5 commitは単一の採用元を明記しない。

## 未解決

- 2008年commitが参照した`rp`利用のcorpusは何か。
- IEの`rp`実装とHTML5 parser規則の差分は何か。
- W3C Recommendationを直接参照した編集記録はあるか。
