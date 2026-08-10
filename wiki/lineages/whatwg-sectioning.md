---
status: 完成
---

# 初期WHATWG sectioning語彙の共有系譜

## 共通要求

2004年8月、WHATWG編集者Ian Hicksonは、`header`、`footer`、main content、投稿単位、`sidebar`等のsemantic element候補を挙げ、目的を`div`の最も一般的なpseudo-semantic用途を減らすことだと説明した。11月には`body`、`section`、`article`、`navigation`、`sidebar`をsectioning element集合とし、既存のheadingを保ったまま`div class="section"`を`section`へ、`div class="post"`を`article`へ置換できることを要件にした。[2004年8月の提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） [2004年11月の設計要求](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)）

2005年4月、Hicksonは更新したsectioning仕様の語彙が典型的siteのmarkup、特に`div`濫用の調査から直接得られたと説明した。この資料は集合全体の採用理由を示すが、各語彙に対応した調査対象を列挙しない。[2005年の調査説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)）

典型的siteのmarkup／`div`のpseudo-semantic用途 →［集合単位、個別対応は一部のみ確認］初期WHATWG semantic element集合

## 個別に確認できる枝

- 既存Web `div class="section"` → WHATWG `section`。編集者が置換関係を直接示す。
- 既存Web `div class="post"` → WHATWG `article`。編集者が置換関係とforum post／blog article用途を直接示す。
- WHATWG `sidebar`案 → `aside`。2004年の役割と2005年の定義が連続し、編集者は後に、pageのsideだけに用途を限定すると誤解されないため`sidebar`を最終名にしなかったと説明した。正確な改名日は未確認である。[2004年の役割](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)） [名称の説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)）

`footer`と`nav`は集合単位の調査由来だけを確認できる。2004年の`navigation`案と2005年の`nav`は意味が対応するが、名称変更の判断を示す史料がないため矢印で接続しない。

## 接続しない境界

2005年12月公表のGoogle Web Authoring Statisticsは、既存classとHTML5要素の対応を示すが、保存草案より後なので個別要素の採用根拠にはしない。XHTML 2の`section`や`nl`、出版物のarticle／asideは先行する同種概念だが、WHATWGへの採用因果を示す史料を確認できないため接続しない。[Google class調査](../../raw/web.archive.org/web/20060101000000id_/http%3A/code.google.com/webstats/2005-12/classes.html)（[公開元](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)）
