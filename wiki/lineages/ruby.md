---
status: 完成
---

# ルビ注釈語彙の共有系譜

## W3Cの要素モデル

Martin Dürstの1997年案は、東アジアの発音注記をHTMLで表す`RUBY`属性と、非対応表示向けの行内括弧を提案した。1998年のW3C Ruby草案はこの案に大きく着想を得たと明記し、`ruby`、`rt`、`rp`等の要素モデルへ変更した。2001年のXHTML Ruby Recommendationがこの語彙を規範化した。[Dürst案](../../raw/www.w3.org/International/draft-duerst-ruby-01)（[公開元](https://www.w3.org/International/draft-duerst-ruby-01)） [W3C Ruby草案](../../raw/www.w3.org/TR/1998/WD-ruby-19981221/__index)（[公開元](https://www.w3.org/TR/1998/WD-ruby-19981221/)） [XHTML Ruby](../../raw/www.w3.org/TR/2001/REC-ruby-20010531/__index)（[公開元](https://www.w3.org/TR/2001/REC-ruby-20010531/)）

## HTML5への導入

2008年のWHATWGコミットは、既存Webで使われていた単純なルビ構文との互換性を理由に`ruby`、`rt`、`rp`とパーサー規則を同時追加した。IEの異常系まで再現する設計は採らず、実利用される構文を優先した。[WHATWGコミット](../../raw/github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)（[公開元](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9)） [既存利用の独立追試](../../raw/lists.w3.org/Archives/Public/public-html/2008May/0620.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2008May/0620.html)）

対象: [`ruby`](../elements/ruby.md)、[`rt`](../elements/rt.md)、[`rp`](../elements/rp.md)

```text
Dürst RUBY属性案
  →［大きく着想］W3C Ruby要素案
  → XHTML Ruby

既存Webのruby / rt / rp利用
  → HTML5へ三要素を同時追加
  → 現行HTML
```

## 接続しない境界

W3C／XHTMLの語彙とHTML5の三要素は名称と役割が連続するが、WHATWG編集者がRecommendationから直接採用した記録は確認できないため、二つの枝を矢印で結ばない。2008年コミットが参照した元資料群も特定できず、直後のDMOZ標本は独立追試として扱う。
