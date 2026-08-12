---
status: 完成
---

# `<summary>`

## 概要

`summary`は、GUI開閉ウィジェットの「追加情報を要約するラベル」という役割を継承し、`details`のキャプションに`legend`または`dt`／`dd`を流用する方式を2010年に専用化した要素である。名称を直接選んだ議論は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、親`details`の残りの内容に対する要約、キャプション、または凡例を表す。親の最初の`summary`は開閉操作を担う。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/interactive-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element)、2026-08-09確認）

## HTMLへの導入

2010年1月30日、WHATWGエディターIan Hicksonが、`details`のキャプションを`dt`／`dd`または`legend`で表す方式から専用`summary`へ変更し、定義と内容モデルを追加した。[仕様コミット](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)）

## HTML直前の祖先

HTML5草案の`details`のキャプション機構。2006年導入時は先頭`legend`、2009年から`dt`／`dd`を使い、2010年コミットが専用`summary`で置換した。

## さらに上流の由来

### 証拠

2006年の`details`導入コミットが参照したApple HIGは、開閉三角形を簡潔な既定表示から追加情報を示すUIとし、ラベルには表示・非表示になる内容を示すよう求めた。同じコミットが参照したGNOMEの議論は、ラベルを単なる説明でなく、開示される値の要約にするよう提案した。HTMLの`details`はこのGUI慣習を取り込み、先頭キャプションと残りの追加情報を分離した。[Apple HIG](../../raw/web.archive.org/web/20060701000000id_/http%3A/developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)） [GNOMEの開閉UI議論](../../raw/web.archive.org/web/20060701000000id_/http%3A/mail.gnome.org/archives/usability/2006-June/msg00015.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://mail.gnome.org/archives/usability/2006-June/msg00015.html)） [`details`導入コミット](../../raw/github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)（[公開元](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)）

### 解釈

`summary`の意味上の外部背景は、開閉対象の内容または値を要約するGUIラベルである。2010年の変更は、HTML内で`legend`や`dt`を流用していたこの役割を専用要素へ置き換えた。ただしGNOMEの文言から`summary`というタグ名を直接借用したとは断定しない。

## 系譜

HTML5 `details`＋`legend`（2006年） → `details`＋`dt`／`dd`（2009年） → `details`＋`summary`（2010年） → 現行HTML `summary`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2006-06-07 | [GNOMEの開閉UI議論](../../raw/web.archive.org/web/20060701000000id_/http%3A/mail.gnome.org/archives/usability/2006-June/msg00015.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://mail.gnome.org/archives/usability/2006-June/msg00015.html)） | GUI設計の同時代議論 | 開閉ラベルを、表示されるコントロールの値の要約にするよう提案。`details`導入コミットが参照する。 | 2026-08-12 |
| 2006年（2006-07-01保存） | [Apple HIG, “Disclosure Triangles”](../../raw/web.archive.org/web/20060701000000id_/http%3A/developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)） | プラットフォームUIガイド | 簡潔な既定表示から追加情報を開示し、ラベルで表示対象を示す開閉UIを規定。`details`導入コミットが参照する。 | 2026-08-12 |
| 2006-07-06 | [WHATWG HTML commit `f98736ae`](../../raw/github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)（[公開元](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)） | 仕様コミット | `details`導入時に先頭`legend`を要約として使用。 | 2026-08-09 |
| 2009-09-15 | public-html “Re: &lt;details&gt;”／コミット`9c490f21`：[メール](../../raw/lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)・[コミット](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元1](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)・[公開元2](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)） | 標準化メール／仕様コミット | `details`のキャプションを`legend`から`dt`／`dd`へ変更。 | 2026-08-09 |
| 2010-01-30 | [WHATWG HTML commit `c3974951`](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)） | 仕様コミット | `details`の`dt`／`dd`または`legend` キャプションを専用`summary`へ変更。 | 2026-08-09 |

## 確度

**A**

HTML5草案内のキャプション構造から専用要素へ置換した因果、導入主体、日付を仕様コミットで直接確認できるため。

## 否定された仮説

HTML 4の`table summary`属性から採用したという説明。名称の類似だけで、確認した導入コミットは採用関係を述べない。

## 未解決

- `summary`という名称を選んだ提案または議論はあるか。
- HTML 4の`table summary`属性との混同を検討した記録はあるか。
