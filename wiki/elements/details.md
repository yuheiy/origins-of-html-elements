# `<details>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。2006年のdisclosure triangle widgetからの導入を検証済み（名称の選択過程は未確認）

## 概要

`details`は2006年、GUIのdisclosure triangle/widgetをHTMLで表す要素としてWHATWGへ導入された。初期captionには`legend`を使い、2009年に`dt`／`dd`、2010年に専用`summary`へ変更された。

## 現在の意味

WHATWG HTML Living Standardでは、userが追加情報またはcontrolsを得られるdisclosure widgetを表す。`open`属性があればsummaryと追加内容を表示し、なければsummaryだけを表示する。[一次定義](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)（2026-08-09確認）

## HTMLへの導入

2006年7月6日、WHATWG editor Ian Hicksonがdisclosure triangle widgetとして`details`を追加した。初稿は先頭`legend`をsummary、残りを追加情報とし、差分内でApple HIGとGNOME usability threadの具体的なdisclosure widgetを参照した。[仕様commit](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)

## HTML直前の祖先

GUIのdisclosure triangle/widget慣習と、caption構造のモデルになった`fieldset`／`legend`。前者は導入commitが同時代のApple・GNOME資料を直接参照し、後者は2009年にIan Hicksonが採用理由を説明している。

## さらに上流の由来

### 証拠

Apple HIGは、defaultでは閉じたtriangleをclickすると向きが変わり、必要時に追加情報を表示するcontrolを定義する。GNOME usability threadにも、見出しから追加情報へ展開する具体的なwidget例がある。

### 解釈

既存GUIの開示controlを、caption、内容、開閉状態を持つHTML要素として移した設計と解釈できる。

## 系譜

GUI disclosure triangle/widget慣習＋`fieldset`／`legend` → HTML5 `details`＋`legend`（2006年） → `details`＋`dt`／`dd`（2009年） → `details`＋`summary`（2010年） → 現行HTML `details`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2006-06-07 | GNOME usability threadのdisclosure widget例 | UI設計議論（保存複製） | 閉じた見出しから追加情報へ展開するwidget例。導入commitが参照する。 | [一次資料](https://web.archive.org/web/20060701000000id_/http://mail.gnome.org/archives/usability/2006-June/msg00015.html) | 2026-08-09 |
| 2006-07-01以前 | Apple HIG “Disclosure Triangles” | platform UI guideline（保存複製） | disclosure triangleの状態、操作、追加情報を必要時に示す用途。導入commitが参照する。 | [一次資料](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html) | 2026-08-09 |
| 2006-07-06 | WHATWG HTML commit `f98736ae` | 仕様commit | disclosure triangle widgetとして`details`を追加し、先頭`legend`と追加情報を定義。 | [一次資料](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd) | 2026-08-09 |
| 2009-09-15 | public-html “Re: &lt;details&gt;”／commit `9c490f21` | 標準化mail／仕様commit | `dt`／`dd`案の採用と、旧`legend`方式を`fieldset`と一貫させた理由。 | [mail](https://lists.w3.org/Archives/Public/public-html/2009Sep/0566.html) / [commit](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7) | 2026-08-09 |
| 2010-01-30 | WHATWG HTML commit `c3974951` | 仕様commit | `details`のcaptionを専用`summary`へ変更。 | [一次資料](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f) | 2026-08-09 |

## 確度

**A**

導入commitが具体的なdisclosure triangle/widget資料を参照し、`fieldset`／`legend`をcaption構造へ採用した理由も直接確認できるため。

## 否定された仮説

`details`という名称をAppleまたはGNOMEから借用したという説明。確認できるのはwidget modelの採用であり、名称の由来は史料が示さない。

## 未解決

- `details`という名称を選んだ提案または議論はあるか。
- 導入commitが参照するGoogle Base settingsの2006年当時の本文は回収できるか。

## 調査記録

2006年と2009–2010年のWHATWG仕様commit、public-html mail、commitが参照するApple HIGとGNOME usability threadを確認した。名称の選択過程とGoogle Base参照先の当時の本文は確認できなかった。横断比較は[HTML5 semantic elements調査ノート](../research/html5-semantic-elements.md)を参照する。

2026-08-09の敵対的レビューでは、2006年導入commit patch、Apple HIG、GNOME thread、2009年mailとcommit、2010年`summary`変更commitを再読し、disclosure widget、`legend → dt/dd → summary`の順序と主体を照合した。既存HTMLの`fieldset`と各platform widgetを競合候補として確認したが、確定系譜と確度Aを覆す資料はなかった。
