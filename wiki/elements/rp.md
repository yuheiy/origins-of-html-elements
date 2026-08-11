---
status: 完成
---

# `<rp>`

## 概要

ルビ非対応ユーザーエージェント向けの括弧を表す要素としてW3Cが提案・規範化し、既存Web上の`rp`を含む単純なルビマークアップとの互換性を保つため、2008年に`ruby`、`rt`とともにHTML5へ追加された。

## 現在の意味

WHATWG HTML Living Standardでは、ルビ注釈を対応しないユーザーエージェントに表示させるため、ルビテキストコンポーネントの周囲へ括弧等の内容を与える。`ruby`の子である場合は何も表さない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element)、2026-08-09確認）

## HTMLへの導入

2007年8月12日、Ian Hicksonは`ruby`の構文解析と意味的要求を既に調査しており追加予定だと説明した。2008年5月26日、`ruby`、`rt`、`rp`とパーサー規則をWHATWG HTMLへ同時追加し、`rp`を従来のユーザーエージェント用の括弧構文として定義した。コミットはIEの異常系まで再現せず、Web上で使われる`rp`入りの単純構文との互換性を優先した。[編集者回答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)） [仕様コミット](../../raw/github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)（[公開元](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)）

## HTML直前の祖先

既存Web上の`ruby`、`rt`、`rp`による単純なマークアップである。HTML5コミットは`rp`を含む二つの実用構文を列挙し、その利用との互換性を採用判断とし、IE実装は厳密には再現しない比較対象とした。直後のDMOZ由来13万ページによる独立追試でも`rp`の意図的利用が確認されたが、編集者自身が使った資料群は特定できない。[独立追試](../../raw/lists.w3.org/Archives/Public/public-html/2008May/0620.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)）

## さらに上流の由来

### 証拠

1997年のMartin Dürstによる`RUBY`属性案は、ルビを行内表示するとき注釈を括弧で囲む実装方法を示した。1998年W3C草案はこの案に大きく着想を得たと明記し、括弧を構造化する`rp`を提案した。2001年Recommendationは`rp`を“ルビ括弧”と説明し、非対応ユーザーエージェント向け代替内容として規範化した。[1997年案](../../raw/www.w3.org/International/draft-duerst-ruby-01)（[公開元](https://www.w3.org/International/draft-duerst-ruby-01)） [1998年草案](../../raw/www.w3.org/TR/1998/WD-ruby-19981221/index.html)（[公開元](https://www.w3.org/TR/1998/WD-ruby-19981221/)） [2001年Recommendation](../../raw/www.w3.org/TR/2001/REC-ruby-20010531/index.html)（[公開元](https://www.w3.org/TR/2001/REC-ruby-20010531/#simple)）

RecommendationはJIS X 4052:2000のルビマークアップと協調して作られたが、JIS側は`rp`を許さないと記す。[謝辞](../../raw/www.w3.org/TR/2001/REC-ruby-20010531/index.html)（[公開元](https://www.w3.org/TR/2001/REC-ruby-20010531/#acks)）

### 解釈

属性案で示された行内括弧表示をW3Cが専用代替内容要素へ構造化し、同名・同役割の既存WebマークアップをHTMLパーサーへ統合したと解釈できる。ただしW3C RecommendationからHTML5への直接採用記録はない。

## 系譜

Dürst `RUBY`属性案の行内括弧表示（1997年） →［大きく着想］W3C Ruby `rp`案（1998年） → XHTML Ruby `rp`（2001年）

既存Webの`rp`利用 → HTML5 `rp`追加（2008年） → 現行HTML `rp`

W3C／XHTML枝からHTML5への接続は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1997-02-28 | [*Ruby in the Hypertext Markup Language*](../../raw/www.w3.org/International/draft-duerst-ruby-01)（[公開元](https://www.w3.org/International/draft-duerst-ruby-01)） | Internet-Draft | `RUBY`属性案と、非対応表示の先行案である行内括弧表示。 | 2026-08-10 |
| 1998-12-21 | [*Ruby*](../../raw/www.w3.org/TR/1998/WD-ruby-19981221/index.html)（[公開元](https://www.w3.org/TR/1998/WD-ruby-19981221/)） | W3C Working Draft | HTML拡張の`rp`を非対応ブラウザー用括弧として提案。 | 2026-08-09 |
| 2001-05-31 | [*Ruby Annotation*](../../raw/www.w3.org/TR/2001/REC-ruby-20010531/index.html)（[公開元](https://www.w3.org/TR/2001/REC-ruby-20010531/)） | W3C Recommendation | XHTMLモジュールの`rp`を代替内容括弧として規範化。 | 2026-08-09 |
| 2007-08-12 | [“My case for Ruby-elements”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)） | WHATWGメール | 編集者が`ruby`のパーサーと意味を調査済みで追加予定と説明。 | 2026-08-10 |
| 2008-05-26 | [WHATWG HTML commit `f4efc736`](../../raw/github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)（[公開元](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)） | 仕様コミット | `rp`を含む単純構文の実利用を根拠に、三要素と`rp`開始タグのパーサー規則を追加。 | 2026-08-10 |
| 2008-05-26 | [“Current HTML ruby markup usage”](../../raw/lists.w3.org/Archives/Public/public-html/2008May/0620.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)） | HTML WGメール／資料群追試 | DMOZ由来13万ページ標本で`rp`を含む意図的なルビマークアップを確認。 | 2026-08-10 |

## 確度

**A**

既存Webの`rp`を含む具体的な単純構文との互換性を理由にHTML5へ追加したことを、要素単位のコミットで確認できるため。W3C／XHTML枝からHTML5への接続と元資料群の来歴は未確認である。

## 否定された仮説

W3C Recommendationだけから直接採用したという説明。役割は連続し、導入後のレビューではRecommendation全体の採用案も出たが、HTML5編集者は採用元として明記しない。JIS X 4052からの直接採用は、同規格が`rp`を許さないため採用しない。

## 未解決

- 2008年コミットが参照した元資料群は何か。コミット直後のDMOZ標本は独立追試である。
- コミットが例示した異常入力について、2008年当時のIEが生成した正確なDOMツリーは何か。
- W3C Recommendationを直接参照した編集記録はあるか。
