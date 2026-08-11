---
status: 完成
---

# `<rt>`

## 概要

W3Cのルビ語彙で注釈テキストを表す要素として提案・規範化され、既存Web上の`rt`を含む単純なルビマークアップとの互換性を保つため、2008年に`ruby`、`rp`とともにHTML5へ追加された。

## 現在の意味

WHATWG HTML Living Standardでは、ルビ注釈のルビテキストコンポーネントを示す。`ruby`の子である場合、単独では何も表さず、親`ruby`が表す内容の決定に使われる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element)、2026-08-09確認）

## HTMLへの導入

2007年8月12日、Ian Hicksonは`ruby`の構文解析と意味的要求を既に調査しており追加予定だと説明した。2008年5月26日、`ruby`、`rt`、`rp`とパーサー規則をWHATWG HTMLへ同時追加し、IEの異常系まで再現せずWeb上で使われる`rt`入りの単純構文との互換性を優先した。[編集者回答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)） [仕様コミット](../../raw/github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)（[公開元](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)）

## HTML直前の祖先

既存Web上の`ruby`、`rt`、`rp`による単純なマークアップである。HTML5コミットは`rt`を含む四つの実用構文を列挙し、その利用との互換性を採用判断とし、IE実装は厳密には再現しない比較対象とした。直後のDMOZ由来13万ページによる独立追試でも`rt`の意図的利用が確認されたが、編集者自身が使った資料群は特定できない。[独立追試](../../raw/lists.w3.org/Archives/Public/public-html/2008May/0620.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)）

## さらに上流の由来

### 証拠

1997年のMartin Dürstによる`RUBY`属性案はHTMLで東アジアの発音注記を表すことを提案した。1998年W3C草案はこの案に大きく着想を得たと明記し、専用の`rt`をルビテキストとして提案した。2001年RecommendationがXHTML Rubyモジュールの同じ役割として規範化した。[1997年案](../../raw/www.w3.org/International/draft-duerst-ruby-01)（[公開元](https://www.w3.org/International/draft-duerst-ruby-01)） [1998年草案](../../raw/www.w3.org/TR/1998/WD-ruby-19981221/index.html)（[公開元](https://www.w3.org/TR/1998/WD-ruby-19981221/)） [2001年Recommendation](../../raw/www.w3.org/TR/2001/REC-ruby-20010531/index.html)（[公開元](https://www.w3.org/TR/2001/REC-ruby-20010531/)）

### 解釈

W3Cの注釈テキスト用語彙と同名・同役割の既存Webマークアップを、実利用との互換性を優先してHTMLパーサーへ統合したと解釈できる。ただしW3C RecommendationからHTML5への直接採用記録はない。

## 系譜

Dürst `RUBY`属性案（1997年） →［大きく着想］W3C Ruby要素案（1998年） → XHTML Ruby `rt`（2001年）

既存Webの`rt`利用 → HTML5 `rt`追加（2008年） → 現行HTML `rt`

W3C／XHTML枝からHTML5への接続は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1997-02-28 | [*Ruby in the Hypertext Markup Language*](../../raw/www.w3.org/International/draft-duerst-ruby-01)（[公開元](https://www.w3.org/International/draft-duerst-ruby-01)） | Internet-Draft | 後の要素モデルに先行する`RUBY`属性案。 | 2026-08-10 |
| 1998-12-21 | [*Ruby*](../../raw/www.w3.org/TR/1998/WD-ruby-19981221/index.html)（[公開元](https://www.w3.org/TR/1998/WD-ruby-19981221/)） | W3C Working Draft | HTML拡張の`rt`をルビテキストとして提案。 | 2026-08-09 |
| 2001-05-31 | [*Ruby Annotation*](../../raw/www.w3.org/TR/2001/REC-ruby-20010531/index.html)（[公開元](https://www.w3.org/TR/2001/REC-ruby-20010531/)） | W3C Recommendation | XHTMLモジュールの`rt`をルビテキストとして規範化。 | 2026-08-09 |
| 2007-08-12 | [“My case for Ruby-elements”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-August/054633.html)） | WHATWGメール | 編集者が`ruby`のパーサーと意味を調査済みで追加予定と説明。 | 2026-08-10 |
| 2008-05-26 | [WHATWG HTML commit `f4efc736`](../../raw/github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)（[公開元](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)） | 仕様コミット | `rt`を含む単純構文の実利用を根拠に、三要素と`rt`開始タグのパーサー規則を追加。 | 2026-08-10 |
| 2008-05-26 | [“Current HTML ruby markup usage”](../../raw/lists.w3.org/Archives/Public/public-html/2008May/0620.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)） | HTML WGメール／資料群追試 | DMOZ由来13万ページ標本で`rt`を含む意図的なルビマークアップを確認。 | 2026-08-10 |

## 確度

**A**

既存Webの`rt`を含む具体的な単純構文との互換性を理由にHTML5へ追加したことを、要素単位のコミットで確認できるため。W3C／XHTML枝からHTML5への接続と元資料群の来歴は未確認である。

## 否定された仮説

W3C Recommendationだけから直接採用したという説明。役割は連続し、導入後のレビューではRecommendation全体の採用案も出たが、HTML5編集者は採用元として明記しない。1997年の属性案からHTML5へ直接接続する説明も採用しない。

## 未解決

- 2008年コミットが参照した元資料群は何か。コミット直後のDMOZ標本は独立追試である。
- コミットが例示した異常入力について、2008年当時のIEが生成した正確なDOMツリーは何か。
- W3C Recommendationを直接参照した編集記録はあるか。
