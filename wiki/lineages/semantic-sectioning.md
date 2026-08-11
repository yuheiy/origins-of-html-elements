---
status: 完成
---

# 既存Webから意味的セクショニング要素へ

## 集合単位の要求

2004年、WHATWG編集者Ian Hicksonは`header`、`footer`、主要内容、投稿単位、`sidebar`等を候補に挙げ、`div`の一般的な疑似意味的用途を減らすことを目的とした。2005年には、語彙が典型的サイトのマークアップ、とくに`div`濫用の調査から直接得られたと説明した。[2004年8月の提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） [2004年11月の設計要求](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)） [2005年の調査説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)）

## 個別に確認できる枝

- 既存Webの`div class="section"`から`section`への置換。
- 既存Webの`div class="post"`から、フォーラム投稿やブログ記事を表す`article`への置換。
- `sidebar`案から`aside`へ。編集者は、ページ側部だけへ用途を限定する誤解を避けた名称だと説明した。[役割の説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)） [名称の説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)）

対象: [`article`](../elements/article.md)、[`aside`](../elements/aside.md)、[`footer`](../elements/footer.md)、[`nav`](../elements/nav.md)、[`section`](../elements/section.md)

## 境界

`footer`と`nav`は集合単位の調査由来だけを確認できる。`navigation`から`nav`への名称変更判断と、XHTML 2の同種語彙からの採用因果は確認できない。後発のGoogle Web Authoring Statisticsを導入根拠にはしない。[Google class調査](../../raw/web.archive.org/web/20060101000000id_/http%3A/code.google.com/webstats/2005-12/classes.html)（[公開元](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)）
