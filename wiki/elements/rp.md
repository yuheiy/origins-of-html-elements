---
status: 完成
---

# `<rp>`

## 概要

ruby非対応user agent向けの括弧を表す要素としてW3Cが提案・規範化し、既存Web上の`rp`を含む単純なruby markupとの互換性を保つため、2008年に`ruby`、`rt`とともにHTML5へ追加された。

## 現在の意味

WHATWG HTML Living Standardでは、ruby annotationをsupportしないuser agentに表示させるため、ruby text componentの周囲へ括弧等の内容を与える。`ruby`の子である場合は何も表さない。[HTML Living Standard](../../raw/html-living-standard/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element)、2026-08-09確認）

## HTMLへの導入

2007年8月12日、Ian Hicksonは`ruby`のparsingとsemantic requirementsを既に調査しており追加予定だと説明した。2008年5月26日、`ruby`、`rt`、`rp`とparser規則をWHATWG HTMLへ同時追加し、`rp`をlegacy user agent用の括弧構文として定義した。commitはIEの異常系まで再現せず、Web上で使われる`rp`入りの単純構文との互換性を優先した。[編集者回答](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html) [仕様commit](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)

## HTML直前の祖先

既存Web上の`ruby`、`rt`、`rp`による単純なmarkupである。HTML5 commitは`rp`を含む二つの実用構文を列挙し、その利用との互換性を採用判断とし、IE実装は厳密には再現しない比較対象とした。直後のDMOZ由来13万ページによる独立追試でも`rp`の意図的利用が確認されたが、編集者自身が使ったcorpusは特定できない。[独立追試](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)

## さらに上流の由来

### 証拠

1997年のMartin Dürstによる`RUBY`属性案は、rubyをinline表示するときannotationを括弧で囲む実装方法を示した。1998年W3C草案はこの案に大きく着想を得たと明記し、括弧を構造化する`rp`を提案した。2001年Recommendationは`rp`を“ruby parenthesis”と説明し、非対応user agent向けfallbackとして規範化した。[1997年案](https://www.w3.org/International/draft-duerst-ruby-01) [1998年草案](https://www.w3.org/TR/1998/WD-ruby-19981221/) [2001年Recommendation](https://www.w3.org/TR/2001/REC-ruby-20010531/#simple)

RecommendationはJIS X 4052:2000のruby markupと協調して作られたが、JIS側は`rp`を許さないと記す。[謝辞](https://www.w3.org/TR/2001/REC-ruby-20010531/#acks)

### 解釈

属性案で示されたinline括弧表示をW3Cが専用fallback要素へ構造化し、同名・同役割の既存Web markupをHTML parserへ統合したと解釈できる。ただしW3C RecommendationからHTML5への直接採用記録はない。

## 系譜

Dürst `RUBY`属性案のinline括弧表示（1997年） →［大きく着想］W3C Ruby `rp`案（1998年） → XHTML Ruby `rp`（2001年）

既存Webの`rp`利用 → HTML5 `rp`追加（2008年） → 現行HTML `rp`

W3C／XHTML枝からHTML5への接続は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1997-02-28 | [*Ruby in the Hypertext Markup Language*](../../raw/ruby-markup/93c142fbeff73349-draft-duerst-ru.html)（[公開元](https://www.w3.org/International/draft-duerst-ruby-01)） | Internet-Draft | `RUBY`属性案と、非対応表示の先行案であるinline括弧表示。 | 2026-08-10 |
| 1998-12-21 | [*Ruby*](../../raw/ruby-markup/4f19a1a45ff5e64f-WD-ruby-199.html)（[公開元](https://www.w3.org/TR/1998/WD-ruby-19981221/)） | W3C Working Draft | HTML拡張の`rp`を非対応browser用parenthesisとして提案。 | 2026-08-09 |
| 2001-05-31 | [*Ruby Annotation*](../../raw/ruby-markup/af6b6f2bacdb9795-REC-ruby-200.html)（[公開元](https://www.w3.org/TR/2001/REC-ruby-20010531/)） | W3C Recommendation | XHTML moduleの`rp`をfallback括弧として規範化。 | 2026-08-09 |
| 2007-08-12 | [“My case for Ruby-elements”](../../raw/items/lists.whatwg.org/8c66fe2e60dc7e19-054633.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)） | WHATWG mail | 編集者が`ruby`のparserとsemanticsを調査済みで追加予定と説明。 | 2026-08-10 |
| 2008-05-26 | [WHATWG HTML commit `f4efc736`](../../raw/whatwg-html-history/882743fed9302600-f4efc73617bb37e721828ba03fe3da1642c.html)（[公開元](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)） | 仕様commit | `rp`を含む単純構文の実利用を根拠に、三要素と`rp`開始tagのparser規則を追加。 | 2026-08-10 |
| 2008-05-26 | [“Current HTML ruby markup usage”](../../raw/items/lists.w3.org/8277f91937ac5877-0620.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)） | HTML WG mail／corpus追試 | DMOZ由来13万ページ標本で`rp`を含む意図的なruby markupを確認。 | 2026-08-10 |

## 確度

**A**

既存Webの`rp`を含む具体的な単純構文との互換性を理由にHTML5へ追加したことを、要素単位のcommitで確認できるため。W3C／XHTML枝からHTML5への接続と元corpusの来歴は未確認である。

## 否定された仮説

W3C Recommendationだけから直接採用したという説明。役割は連続し、導入後のreviewではRecommendation全体の採用案も出たが、HTML5編集者は採用元として明記しない。JIS X 4052からの直接採用は、同規格が`rp`を許さないため採用しない。

## 未解決

- 2008年commitが参照した元corpusは何か。commit直後のDMOZ標本は独立追試である。
- commitが例示した異常入力について、2008年当時のIEが生成した正確なDOM treeは何か。
- W3C Recommendationを直接参照した編集記録はあるか。
