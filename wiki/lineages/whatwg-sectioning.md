---
status: 完成
---

# WHATWGの文書構造語彙の共有系譜

## 共通要求

2004年8月、WHATWG編集者Ian Hicksonは、`header`、`footer`、主要内容、投稿単位、`sidebar`等の意味的要素候補を挙げ、目的を`div`の最も一般的な疑似意味的用途を減らすことだと説明した。11月には`body`、`section`、`article`、`navigation`、`sidebar`をセクショニング要素集合とし、既存の見出しを保ったまま`div class="section"`を`section`へ、`div class="post"`を`article`へ置換できることを要件にした。[2004年8月の提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） [2004年11月の設計要求](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)）

2005年4月、Hicksonは更新したセクショニング仕様の語彙が典型的サイトのマークアップ、特に`div`濫用の調査から直接得られたと説明した。この資料は集合全体の採用理由を示すが、各語彙に対応した調査対象を列挙しない。[2005年の調査説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)）

典型的サイトのマークアップ／`div`の疑似意味的用途 →［集合単位、個別対応は一部のみ確認］初期WHATWG意味的要素集合

## 個別に確認できる枝

- 既存Web `div class="section"` → WHATWG `section`。編集者が置換関係を直接示す。
- 既存Web `div class="post"` → WHATWG `article`。編集者が置換関係とフォーラム投稿／ブログ記事用途を直接示す。
- WHATWG `sidebar`案 → `aside`。2004年の役割と2005年の定義が連続し、編集者は後に、ページの側部だけに用途を限定すると誤解されないため`sidebar`を最終名にしなかったと説明した。正確な改名日は未確認である。[2004年の役割](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)） [名称の説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)）

`footer`と`nav`は集合単位の調査由来だけを確認できる。2004年の`navigation`案と2005年の`nav`は意味が対応するが、名称変更の判断を示す史料がないため矢印で接続しない。

## 見出しグループとページヘッダーの分離

2005年草案の旧`header`はセクションの見出しを表すコンテナーだった。2009年4月30日、WHATWGはこの要素を`hgroup`へ改名して副見出し用途へ限定し、その30分後に、見出し、目次、検索フォーム、ロゴ、ナビゲーション等をまとめる新しい`header`を導入した。編集者は、従来の`header`では既存Webのページヘッダー相当を表せないという同月の問題提起へ応じた変更だと説明した。[2005年草案](../../raw/whatwg.org/specs/web-apps/2005-09-01/__index)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-header)） [`hgroup`への改名](../../raw/github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)（[公開元](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)） [新`header`の導入](../../raw/github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db)（[公開元](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db)） [編集者の説明](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)）

```text
旧WHATWG header
  → hgroup（見出しグループへ限定）

既存Webのページ／セクションヘッダーを表す要求
  → 新しいWHATWG header
```

対象: [`header`](../elements/header.md)、[`hgroup`](../elements/hgroup.md)

## 接続しない境界

2005年12月公表のGoogle Web Authoring Statisticsは、既存クラスとHTML5要素の対応を示すが、保存草案より後なので個別要素の採用根拠にはしない。XHTML 2の`section`や`nl`、出版物の記事／傍注は先行する同種概念だが、WHATWGへの採用因果を示す史料を確認できないため接続しない。[Google class調査](../../raw/web.archive.org/web/20060101000000id_/http%3A/code.google.com/webstats/2005-12/classes.html)（[公開元](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)）
