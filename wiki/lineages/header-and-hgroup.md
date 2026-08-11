---
status: 完成
---

# 旧`header`から`hgroup`と新`header`へ

## 役割の分離

2005年草案の旧`header`はセクションの見出しを表すコンテナーだった。2009年4月30日、WHATWGはこれを`hgroup`へ改名して副見出し用途へ限定し、その30分後に、見出し、目次、検索フォーム、ロゴ、ナビゲーション等をまとめる新しい`header`を導入した。編集者は、従来の`header`では既存Webのページヘッダー相当を表せないという問題提起へ応じた変更だと説明した。[2005年草案](../../raw/whatwg.org/specs/web-apps/2005-09-01/__index)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-header)） [`hgroup`への改名](../../raw/github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)（[公開元](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)） [新`header`の導入](../../raw/github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db)（[公開元](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db)） [編集者の説明](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)）

```text
旧WHATWG header → hgroup（見出しグループへ限定）
既存Webのページ／セクションヘッダーを表す要求 → 新WHATWG header
```

対象: [`header`](../elements/header.md)、[`hgroup`](../elements/hgroup.md)

## 境界

両要素は同じ旧要素をそのまま二分したものではない。`hgroup`は旧`header`の改名、現行`header`は別要求に対する新設であり、同日の役割分離として接続する。
