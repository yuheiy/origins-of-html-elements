---
status: 完成
---

# レスポンシブ画像と`picture`／`source`

## 複数の設計入力

2007年の静止画用`picture`案は名称と豊かな代替内容を提示したが、単一`src`でありレスポンシブ画像は扱わなかった。2011年、Bruce Lawsonはこの案を`video`の複数`source`、`media`、代替内容の構造と組み合わせ、Responsive Images Community Groupが提案とPicturefill実装を具体化した。[2007年の`picture`案](../../raw/lists.w3.org/Archives/Public/public-html/2007Jul/0069.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2007Jul/0069.html)） [Lawsonの草案](../../raw/brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/__index)（[公開元](https://brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/)） [Picturefill](../../raw/www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/__index)（[公開元](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)）

独立に成立した`img srcset`は、2013年のHTML Working Group草案で`source media`と併用された。Simon Pietersは同年、`picture`をソース群と必須`img`の結合用ラッパーとし、既存`img`の描画・代替処理を再利用する構造を提案した。2014年のWHATWGコミットが`picture`と画像用`source`をLiving Standardへ統合した。[`srcset`提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html)） [HTML WG草案](../../raw/www.w3.org/TR/2013/WD-html-picture-element-20130226/__index)（[公開元](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)） [Pieters案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2013Nov/0256.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2013Nov/0256.html)） [WHATWG統合コミット](../../raw/github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)（[公開元](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)）

対象: [`picture`](../elements/picture.md)、[`source`](../elements/source.md)

```text
静止画用picture案＋videoのsource / media構造
  → RICG picture / Picturefill

RICG picture＋独立したimg srcset＋既存imgの描画・代替処理
  → HTML WG草案 → WHATWG picture＋画像用source
```

## 接続しない境界

メディア用`source`から`picture`自体が派生したとはしない。現行構造は、要素名、条件付きソース、候補集合、描画主体を異なる枝から統合したものである。Picturefillだけを最終構文の起源とする説明も採らない。
