---
status: 完成
---

# `<details>`

## 概要

`details`は2006年、GUIの開閉三角形/ウィジェットをHTMLで表す要素としてWHATWGへ導入された。初期キャプションには`legend`を使い、2009年に`dt`／`dd`、2010年に専用`summary`へ変更された。

## 現在の意味

WHATWG HTML Living Standardでは、利用者が追加情報またはコントロールを得られる開閉ウィジェットを表す。`open`属性があれば要約と追加内容を表示し、なければ要約だけを表示する。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/interactive-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)、2026-08-09確認）

## HTMLへの導入

2006年7月6日、WHATWGエディターIan Hicksonが開閉三角形ウィジェットとして`details`を追加した。初稿は先頭`legend`を要約、残りを追加情報とし、差分内でApple HIGとGNOME使いやすさスレッドの具体的な開閉ウィジェットを参照した。[仕様コミット](../../raw/github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)（[公開元](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)）

## HTML直前の祖先

GUIの開閉三角形/ウィジェット慣習と、キャプション構造のモデルになった`fieldset`／`legend`。前者は導入コミットが同時代のApple・GNOME資料を直接参照し、後者は2009年にIan Hicksonが採用理由を説明している。

## さらに上流の由来

### 証拠

Apple HIGは、既定値では閉じた三角形をクリックすると向きが変わり、必要時に追加情報を表示するコントロールを定義する。GNOME使いやすさスレッドにも、見出しから追加情報へ展開する具体的なウィジェット例がある。

### 解釈

既存GUIの開示コントロールを、キャプション、内容、開閉状態を持つHTML要素として移した設計と解釈できる。

## 系譜

GUI開閉三角形/ウィジェット慣習＋`fieldset`／`legend` → HTML5 `details`＋`legend`（2006年） → `details`＋`dt`／`dd`（2009年） → `details`＋`summary`（2010年） → 現行HTML `details`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2006-06-07 | [GNOME usability threadのdisclosure widget例](../../raw/web.archive.org/web/20060701000000id_/http%3A/mail.gnome.org/archives/usability/2006-June/msg00015.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://mail.gnome.org/archives/usability/2006-June/msg00015.html)） | UI設計議論（保存複製） | 閉じた見出しから追加情報へ展開するウィジェット例。導入コミットが参照する。 | 2026-08-09 |
| 2006-07-01以前 | [Apple HIG “Disclosure Triangles”](../../raw/web.archive.org/web/20060701000000id_/http%3A/developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)） | プラットフォームUIガイドライン（保存複製） | 開閉三角形の状態、操作、追加情報を必要時に示す用途。導入コミットが参照する。 | 2026-08-09 |
| 2006-07-06 | [WHATWG HTML commit `f98736ae`](../../raw/github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)（[公開元](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)） | 仕様コミット | 開閉三角形ウィジェットとして`details`を追加し、先頭`legend`と追加情報を定義。 | 2026-08-09 |
| 2009-09-15 | public-html “Re: &lt;details&gt;”／コミット`9c490f21`：[メール](../../raw/lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)・[コミット](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元1](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html)・[公開元2](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)） | 標準化メール／仕様コミット | `dt`／`dd`案の採用と、旧`legend`方式を`fieldset`と一貫させた理由。 | 2026-08-09 |
| 2010-01-30 | [WHATWG HTML commit `c3974951`](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)） | 仕様コミット | `details`のキャプションを専用`summary`へ変更。 | 2026-08-09 |

## 確度

**A**

導入コミットが具体的な開閉用の三角形／ウィジェットの資料を参照し、`fieldset`／`legend`をキャプション構造へ採用した理由も直接確認できるため。

## 否定された仮説

`details`という名称をAppleまたはGNOMEから借用したという説明。確認できるのはウィジェットモデルの採用であり、名称の由来は史料が示さない。

## 未解決

- `details`という名称を選んだ提案または議論はあるか。
- 導入コミットが参照するGoogle Baseの設定画面について、2006年当時の本文は回収できるか。
