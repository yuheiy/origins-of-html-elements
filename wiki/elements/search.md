---
status: 完成
---

# `<search>`

## 概要

WAI-ARIA `search`ランドマークと`div role="search"`をネイティブHTMLで表すためWHATWGが採用し、2023年にLiving Standardへ入れたコンテナーである。

## 現在の意味

WHATWG HTML Living Standardでは、検索または絞り込み操作を行うフォームコントロールその他の内容を含む文書／アプリケーションの一部を表す。検索結果そのものを提示するだけの用途には使わない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)、2026-08-09確認）

## HTMLへの導入

Carolyn MacLeodは2020年8月12日のWHATWG論点 #5811で、ARIAランドマークのうち`search`だけ対応HTML要素がないため、`<div role="search">`と同じ意味を持つネイティブ要素を提案した。Domenic Denicolaが2021年11月8日にPR #7320を作成し、2023年3月24日にLiving Standardへ統合された。[issue #5811](../../raw/github.com/whatwg/html/issues/5811)（[公開元](https://github.com/whatwg/html/issues/5811)） [PR #7320](../../raw/github.com/whatwg/html/pull/7320)（[公開元](https://github.com/whatwg/html/pull/7320)） [merge commit](../../raw/github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec)（[公開元](https://github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec)）

## HTML直前の祖先

`<div role="search">`が直接祖先である。論点とPRは、ARIAでしか表せなかった意味を備えるネイティブ要素の導入を理由として明記する。[論点 #5811](../../raw/github.com/whatwg/html/issues/5811)（[公開元](https://github.com/whatwg/html/issues/5811)） [PR #7320](../../raw/github.com/whatwg/html/pull/7320)（[公開元](https://github.com/whatwg/html/pull/7320)）

## さらに上流の由来

### 証拠

2006年XHTML Role Moduleの`search`からWAI-ARIA `search`ランドマークへ継承された系統を確認できる。[XHTML Role](../../raw/www.w3.org/TR/2006/WD-xhtml-role-20060725/__index)（[公開元](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/)） [WAI-ARIA FPWD](../../raw/www.w3.org/TR/2008/WD-wai-aria-20080204/__index)（[公開元](https://www.w3.org/TR/2008/WD-wai-aria-20080204/#search)）

### 解釈

ARIAとHTMLが相互に発展する過程で、著者が`role`を付ける`div`を専用要素へ置き換えた例と解釈できる。フォーム送信等の機能は追加しなかった。

## 系譜

XHTML Role `search` → WAI-ARIA `search`ランドマーク → `<div role="search">` → WHATWG論点／PR（2020–2021年） → Living Standard統合（2023年3月24日） → 現行HTML `<search>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2006-07-25 | [XHTML Role Attribute Module](../../raw/www.w3.org/TR/2006/WD-xhtml-role-20060725/__index)（[公開元](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/)） | W3C Working Draft | HTML要素以前の`search`役割。 | 2026-08-09 |
| 2008-02-04、2014-03-20 | WAI-ARIA 1.0：[FPWD](../../raw/www.w3.org/TR/2008/WD-wai-aria-20080204/__index)・[Recommendation](../../raw/www.w3.org/TR/2014/REC-wai-aria-20140320/roles)（[公開元1](https://www.w3.org/TR/2008/WD-wai-aria-20080204/#search)・[公開元2](https://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#search)） | W3C Working Draft／Recommendation | `search`をナビゲーション用ランドマークとして継承・標準化。 | 2026-08-09 |
| 2020-08-12 | [WHATWG issue #5811](../../raw/github.com/whatwg/html/issues/5811)（[公開元](https://github.com/whatwg/html/issues/5811)） | 標準化論点 | `search`だけHTML上の対応物がないことと`div role=search`置換を提案。 | 2026-08-09 |
| 2021-11-08 | WHATWG PR #7320 / 初期コミット：[PR](../../raw/github.com/whatwg/html/pull/7320)・[commit](../../raw/github.com/whatwg/html/commit/303b37ec277946798aef715ff3ade7944f2657c0)（[公開元1](https://github.com/whatwg/html/pull/7320)・[公開元2](https://github.com/whatwg/html/commit/303b37ec277946798aef715ff3ade7944f2657c0)） | 標準化PR／仕様コミット | `search`の仕様、ARIA意味をネイティブで表す導入理由、追加機能を持たないこと。 | 2026-08-09 |
| 2023-03-24 | [WHATWG HTML merge commit](../../raw/github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec)（[公開元](https://github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec)） | Living Standard仕様コミット | PR #7320を統合し`search`をLiving Standardへ導入。 | 2026-08-09 |

## 確度

**A**

XHTML／ARIAの役割から`div role=search`を経てネイティブHTML要素へ置換する採用因果をWHATWGの論点とPRが明記するため。

## 否定された仮説

`input type=search`の子孫または代替とする説明。論点は検索ボックスではなく検索機能全体のコンテナーと明記する。`form`の後継または送信機能を持つという説明も、採用PRが追加機能なしとするため採用しない。

## 未解決

- 2006年XHTML Role Working Draftより前の`search`役割の発案者と要求起源は何か。
- 論点からPRまでに名称`search`への反対を解消した単一の決定記録はあるか。
