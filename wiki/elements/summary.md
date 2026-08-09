---
status: 完成
---

# `<summary>`

## 概要

`summary`は2010年、`details`のcaptionを`legend`または`dt`／`dd`で表す方式を専用要素へ置換して導入された。

## 現在の意味

WHATWG HTML Living Standardでは、親`details`の残りの内容に対するsummary、caption、またはlegendを表す。親の最初の`summary`は開閉操作を担う。[一次定義](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element)（2026-08-09確認）

## HTMLへの導入

2010年1月30日、WHATWG editor Ian Hicksonが、`details`のcaptionを`dt`／`dd`または`legend`で表す方式から専用`summary`へ変更し、定義とcontent modelを追加した。[仕様commit](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)

## HTML直前の祖先

HTML5草案の`details` caption機構。2006年導入時は先頭`legend`、2009年から`dt`／`dd`を使い、2010年commitが専用`summary`で置換した。

## さらに上流の由来

### 証拠

2006年の`details`はGUI disclosure widgetをHTMLへ導入し、先頭captionと残りの追加情報を分離していた。

### 解釈

既存要素を流用していたcaption構造を、disclosure専用の要素へ置き換えた変更と解釈できる。

## 系譜

HTML5 `details`＋`legend`（2006年） → `details`＋`dt`／`dd`（2009年） → `details`＋`summary`（2010年） → 現行HTML `summary`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2006-07-06 | WHATWG HTML commit `f98736ae` | 仕様commit | `details`導入時に先頭`legend`をsummaryとして使用。 | [一次資料](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd) | 2026-08-09 |
| 2009-09-15 | public-html “Re: &lt;details&gt;”／commit `9c490f21` | 標準化mail／仕様commit | `details`のcaptionを`legend`から`dt`／`dd`へ変更。 | [mail](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html) / [commit](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7) | 2026-08-09 |
| 2010-01-30 | WHATWG HTML commit `c3974951` | 仕様commit | `details`の`dt`／`dd`または`legend` captionを専用`summary`へ変更。 | [一次資料](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f) | 2026-08-09 |

## 確度

**A**

HTML5草案内のcaption構造から専用要素へ置換した因果、導入主体、日付を仕様commitで直接確認できるため。

## 否定された仮説

HTML 4の`table summary`属性から採用したという説明。名称の類似だけで、確認した導入commitは採用関係を述べない。

## 未解決

- `summary`という名称を選んだ提案または議論はあるか。
- HTML 4の`table summary`属性との混同を検討した記録はあるか。
