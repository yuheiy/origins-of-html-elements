---
status: 完成
---

# `head`と`body`への文書分割

## 共有された変更

1992年の議論は、文書をヘッダーと本文へ分け、タイトル、リンク、索引等の文書情報を本文外へ置く要求を示す。CERNの将来案はヘッダー用ラッパーを提示し、Dan Connollyは`HEADING`と`BODY`による構造を提案した。のちに`HEAD`／`BODY`対応が実装され、1993年1月のDTDで両要素を持つ文書構造を確認できる。[文書ヘッダー提案](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)） [CERNの将来案](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） [`HEADING`提案](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)） [`HEAD`／`BODY`実装報告](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)） [1993年IETF草案](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）

```text
文書情報と本文を分ける要求
  → HEADING / BODY案
  → HEAD / BODY実装
  → HTML DTDのHEAD / BODY
```

対象: [`head`](../elements/head.md)、[`body`](../elements/body.md)

## 接続しない境界

`HEADING`から`HEAD`への名称変更そのものを説明する記録と、内部DTDの`BODY`から公開DTDまでの完全な版履歴は未確認である。
