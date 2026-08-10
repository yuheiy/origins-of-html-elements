---
status: 完成
---

# `<ruby>`

## 概要

W3C Internationalization Working GroupがHTML拡張として提案した語彙とIE実装が既に存在する中、既存Web上のruby markupを保つため2008年に`rt`、`rp`とともにHTML5へ追加された。W3C語彙からHTML5への直接採用記録は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、phrasing contentの一つ以上の範囲へruby annotationを付ける。ruby annotationは主に東アジア組版で発音等を示すため、base textに沿えて表示する短いtextである。[HTML Living Standard](../../raw/html-living-standard/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element)、2026-08-09確認）

## HTMLへの導入

2007年8月12日、Lars GuntherがCJKと歴史文書のinterlinear annotationをuse caseとしてRuby要素の追加予定を問い、Ian Hicksonは`ruby`のparsingとsemantic requirementsを既に調査しており追加予定だと答えた。[提案](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054625.html) [編集者回答](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)

2008年5月26日、Hicksonが`ruby`、`rt`、`rp`とparser規則をWHATWG HTMLへ同時追加した。commitはIEの異常系まで再現せず、Web上で使われる単純な四構文との互換性を優先した。[仕様commit](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)

## HTML直前の祖先

既存Web上の`ruby`、`rt`、`rp`による単純なmarkupである。HTML5 commitはその実利用との互換性を採用判断として明記し、IE実装は厳密には再現しない比較対象とした。直後の独立追試もDMOZ由来13万ページ標本で三要素の意図的利用を確認したが、編集者自身が使ったcorpusは特定できない。[独立追試](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)

## さらに上流の由来

### 証拠

1997年のMartin Dürst案は東アジアの発音注記をHTMLへ導入するため、既存inline要素の`RUBY`属性を提案した。1998年W3C草案は、この案に大きく着想を得たと明記しつつ、East Asian typographyのrubyをHTMLで構造化できない問題へ`ruby`、`rb`、`rt`、`rp`要素を提案した。[1997年案](https://www.w3.org/International/draft-duerst-ruby-01) [1998年草案](https://www.w3.org/TR/1998/WD-ruby-19981221/)

2001年Recommendationは同語彙をXHTML moduleとして規範化し、JIS X 4052:2000の組版markupと協調して作ったこと、JIS側は`rp`を許さないことを記す。[2001年Recommendation](https://www.w3.org/TR/2001/REC-ruby-20010531/#acks)

### 解釈

Dürstの属性案からW3Cの構造要素modelへ進んだ上流と、IE実装を背景にした既存Web markupからHTML5へ入った直前経路を分けて捉える必要がある。両者の語彙は連続するが、W3C RecommendationからHTML5への直接採用は確認できない。

## 系譜

Dürst `RUBY`属性案（1997年） →［大きく着想］W3C Ruby要素案（1998年） → XHTML Ruby module（2001年）

既存Webの`ruby`／`rt`／`rp`利用 → HTML5 `ruby`追加（2008年） → 現行HTML `ruby`

W3C／XHTML枝からHTML5への接続は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1997-02-28 | [*Ruby in the Hypertext Markup Language*](../../raw/ruby-markup/93c142fbeff73349-draft-duerst-ru.html)（[公開元](https://www.w3.org/International/draft-duerst-ruby-01)） | Internet-Draft | 東アジアのrubyをHTMLへ表す`RUBY`属性案とJIS X 4051の組版背景。 | 2026-08-10 |
| 1998-12-21 | [*Ruby*](../../raw/ruby-markup/4f19a1a45ff5e64f-WD-ruby-199.html)（[公開元](https://www.w3.org/TR/1998/WD-ruby-19981221/)） | W3C Working Draft | HTML拡張`ruby`語彙、国際化要求、次版HTMLへ提出する意図。 | 2026-08-09 |
| 2001-05-31 | [*Ruby Annotation*](../../raw/ruby-markup/af6b6f2bacdb9795-REC-ruby-200.html)（[公開元](https://www.w3.org/TR/2001/REC-ruby-20010531/)） | W3C Recommendation | XHTML moduleの`ruby`を規範化し、JIS X 4052 markupとの協調と差分を記録。 | 2026-08-10 |
| 2007-08-12 | “My case for Ruby-elements”：[提案](../../raw/items/lists.whatwg.org/3163ee917c00cde8-054625.html)・[回答](../../raw/items/lists.whatwg.org/8c66fe2e60dc7e19-054633.html)（[公開元1](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054625.html)・[公開元2](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)） | WHATWG mail | Ruby要素のuse casesと、編集者による`ruby`採録予定。 | 2026-08-10 |
| 2008-05-26 | [WHATWG HTML commit `f4efc736`](../../raw/whatwg-html-history/882743fed9302600-f4efc73617bb37e721828ba03fe3da1642c.html)（[公開元](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)） | 仕様commit | 三要素の追加と、IE厳密互換より既存Webの四つの単純構文を優先したparser規則。 | 2026-08-10 |
| 2008-05-26 | [“Current HTML ruby markup usage”](../../raw/items/lists.w3.org/8277f91937ac5877-0620.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)） | HTML WG mail／corpus追試 | DMOZ由来13万ページ標本で`ruby`、`rt`、`rp`等の意図的利用を確認した独立追試。 | 2026-08-10 |

## 確度

**A**

既存Webの`ruby`を含む具体的な単純構文との互換性を理由にHTML5へ追加したことを、要素単位のcommitと同時代の採録予定記録で確認できるため。W3C／XHTML枝からHTML5への接続と元corpusの来歴は未確認である。

## 否定された仮説

W3C Ruby Recommendationだけから直接採用したという説明。名称と役割は連続し、導入後のreviewではRecommendationが参照されたが、HTML5編集者は採用元として明記しない。1997年の`RUBY`属性案からHTML5へ直接接続する説明と、組版慣習からHTML要素へ直接接続する説明も採用しない。

## 未解決

- 2008年commitが参照した元corpusは何か。commit直後のDMOZ標本は独立追試であり、元corpusではない。
- commitが例示した異常入力について、2008年当時のIEが生成した正確なDOM treeは何か。
- W3C RecommendationをHTML5編集時に直接参照した記録はあるか。
- 1999年のW3C WG会合でcomplex modelを決めた詳細議事録は公開されているか。
