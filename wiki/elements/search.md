---
status: 完成
---

# `<search>`

## 概要

WAI-ARIA `search` landmarkと`div role="search"`をnative HTMLで表すためWHATWGが採用し、2023年にLiving Standardへ入れたcontainerである。

## 現在の意味

WHATWG HTML Living Standardでは、検索またはfiltering operationを行うform controlsその他の内容を含むdocument／applicationの一部を表す。検索結果そのものを提示するだけの用途には使わない。[一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)（2026-08-09確認）

## HTMLへの導入

Carolyn MacLeodは2020年8月12日のWHATWG issue #5811で、ARIA landmarksのうち`search`だけ対応HTML要素がないため、`<div role="search">`と同じsemanticを持つnative要素を提案した。Domenic Denicolaが2021年11月8日にPR #7320を作成し、2023年3月24日にLiving Standardへmergeされた。[issue #5811](https://github.com/whatwg/html/issues/5811) [PR #7320](https://github.com/whatwg/html/pull/7320) [merge commit](https://github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec)

## HTML直前の祖先

`<div role="search">`が直接祖先である。issueとPRがARIAでしか表せなかったsemanticのnative replacementを導入理由として明記する。[issue #5811](https://github.com/whatwg/html/issues/5811) [PR #7320](https://github.com/whatwg/html/pull/7320)

## さらに上流の由来

### 証拠

2006年XHTML Role Moduleの`search`からWAI-ARIA `search` landmarkへ継承された系統を確認できる。[XHTML Role](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/) [WAI-ARIA FPWD](https://www.w3.org/TR/2008/WD-wai-aria-20080204/#search)

### 解釈

ARIAとHTMLのco-evolutionにより、authorが`role`を付ける`div`を専用要素へ置き換えた例と解釈できる。form submission等の機能は追加しなかった。

## 系譜

XHTML Role `search` → WAI-ARIA `search` landmark → `<div role="search">` → WHATWG issue／PR（2020–2021年） → Living Standard merge（2023年3月24日） → 現行HTML `<search>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2006-07-25 | XHTML Role Attribute Module | W3C Working Draft | HTML要素以前の`search` role。 | [一次資料](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/) | 2026-08-09 |
| 2008-02-04、2014-03-20 | WAI-ARIA 1.0 | W3C Working Draft／Recommendation | `search`をnavigational landmarkとして継承・標準化。 | [FPWD](https://www.w3.org/TR/2008/WD-wai-aria-20080204/#search) / [Recommendation](https://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#search) | 2026-08-09 |
| 2020-08-12 | WHATWG issue #5811 | 標準化issue | `search`だけHTML analogueがないことと`div role=search`置換を提案。 | [一次資料](https://github.com/whatwg/html/issues/5811) | 2026-08-09 |
| 2021-11-08 | WHATWG PR #7320 / initial commit | 標準化PR／仕様commit | `search`の仕様、ARIA semanticsをnativeで表す導入理由、追加機能を持たないこと。 | [PR](https://github.com/whatwg/html/pull/7320) / [commit](https://github.com/whatwg/html/commit/303b37ec277946798aef715ff3ade7944f2657c0) | 2026-08-09 |
| 2023-03-24 | WHATWG HTML merge commit | Living Standard仕様commit | PR #7320をmergeし`search`をLiving Standardへ導入。 | [一次資料](https://github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec) | 2026-08-09 |

## 確度

**A**

XHTML／ARIA roleから`div role=search`を経てnative HTML要素へ置換する採用因果をWHATWGのissueとPRが明記するため。

## 否定された仮説

`input type=search`の子孫または代替とする説明。issueはsearchboxではなくsearch機能全体のcontainerと明記する。`form`の後継またはsubmission機能を持つという説明も、採用PRが追加機能なしとするため採用しない。

## 未解決

- 2006年XHTML Role Working Draftより前の`search` roleの発案者と要求起源は何か。
- issueからPRまでに名称`search`への反対を解消した単一の決定記録はあるか。
