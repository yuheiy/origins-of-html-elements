---
status: 完成
---

# MathMLとSVGのHTMLパーサー統合

## 既存XML語彙のルート

MathML 1.0は`math`をMathMLの最上位要素として、SVG 1.0は`svg`をSVG文書断片のルートとして定義した。2008年4月のWHATWGコミットは、この二つの開始タグからそれぞれの名前空間の要素を生成する`text/html`パーサー規則を一体として追加した。[MathML 1.0](../../raw/www.w3.org/TR/1998/REC-MathML-19980407/__index)（[公開元](https://www.w3.org/TR/1998/REC-MathML-19980407/)） [SVG 1.0](../../raw/www.w3.org/TR/2001/REC-SVG-20010904/__index)（[公開元](https://www.w3.org/TR/2001/REC-SVG-20010904/)） [初回統合コミット](../../raw/github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)（[公開元](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)）

対象: [`math`](../elements/math.md)、[`svg`](../elements/svg.md)

```text
MathML mathルート → text/htmlパーサーが生成するMathML math
SVG svgルート → text/htmlパーサーが生成するSVG svg
```

## SVG枝の中断

SVG対応は2008年4月15日にSVG Working Groupの要請を理由としていったん削除され、2009年3月25日に「より最近の意見」に基づいて再導入された。したがって`svg`は初回追加から現行まで連続した経路として扱わない。[削除コミット](../../raw/github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2)（[公開元](https://github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2)） [再導入コミット](../../raw/github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465)（[公開元](https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465)）

## 境界

`math`と`svg`はHTML名前空間の新要素ではなく、既存の外来名前空間語彙をHTML構文から開始する統合点である。パーサー統合を求めた議論、2008年のSVG削除要請本文、2009年の再導入判断が参照した意見は未確認である。
