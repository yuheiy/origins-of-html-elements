---
status: 完成
---

# `time`の一般化と`data`との併存

## 置換から機能分担へ

Ian Hicksonは2011年、`time`の機械可読値という用途を日付・時刻以外へ一般化して`data`とする案を提出し、WHATWGリビジョン6783で`time`を`data`へ置換した。反対意見とHTML Working Groupでの議論を経て、同年11月に`data`を残したまま`time`が再導入され、汎用値と日付・時刻の機能分担が成立した。[Bug 13240](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)） [`data`への置換](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)） [HTML WG会合議事録](../../raw/www.w3.org/2011/11/03-html-wg-minutes.html)（[公開元](https://www.w3.org/2011/11/03-html-wg-minutes.html)） [`time`再導入](../../raw/github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)（[公開元](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)）

```text
HTML5 timeの機械可読値モデル
  → 汎用dataへ置換
  → time再導入
  → data（汎用値）＋time（日付・時刻）
```

対象: [`data`](../elements/data.md)、[`time`](../elements/time.md)

## 境界

`data`は`time`とは無関係な同名語彙から採用されたのではない。2011年3月の階層データ格納用`data`案も用途と編集経路が異なるため接続しない。
