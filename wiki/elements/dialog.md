---
status: 完成
---

# `<dialog>`

## 概要

現行`dialog`は、CSS、JavaScript、WAI-ARIAで実装されていたページ内モーダルダイアログとブラウザーの遮断プロンプトが抱える問題を、カスタマイズ可能で非同期なネイティブHTML機構にするため2012年4月に導入された。2009年に削除された同名の会話用要素とは断絶している。

## 現在の意味

WHATWG HTML Living Standardでは、利用者がタスクを行うか情報を得るために操作する小ウィンドウ、すなわちダイアログボックスという形の、一時的なアプリケーション部分を表す。`open`属性はダイアログが有効で操作可能なことを示す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/interactive-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)、2026-08-09確認）

## HTMLへの導入

2011年のW3C Issue 162は、デスクトップ／Web UIツールキットでモーダルダイアログが一般的である一方、CSS、JavaScript、WAI-ARIAによる堅牢な実装が難しいとしてネイティブ機構を提案した。2012年4月11日、Ian Hicksonはメーリングリストの議論と既存利用例調査に基づき、アプリケーションUI用`dialog`を`open`, `show()`, `showModal()`, `close()`, `form method=dialog`等とともにWHATWG HTMLソースへ追加した。[Issue 162](../../raw/lists.w3.org/Archives/Public/public-html-wg-issue-tracking/2011Jan/0014.html)（[公開元](https://lists.w3.org/Archives/Public/public-html-wg-issue-tracking/2011Jan/0014.html)） [編集者説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-April/077688.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-April/077688.html)） [仕様コミット](../../raw/github.com/whatwg/html/commit/2fb24fcf3f916236e8767e2cb72b23e5c75b77e9)（[公開元](https://github.com/whatwg/html/commit/2fb24fcf3f916236e8767e2cb72b23e5c75b77e9)）

## HTML直前の祖先

CSS、JavaScript、WAI-ARIAで作られていたページ内モーダルダイアログと、`alert()`／`confirm()`等の遮断プロンプトである。Issue 162と導入時の編集者説明は、jQuery UI、YUI、Drupalのオーバーレイ等の既存Web実装、ブラウザープロンプトの実装問題、JavaScript製ライトボックス風ダイアログを具体的な利用例および置換対象として挙げる。単一ライブラリのAPIを移植したのではなく、実装群と要求をまとめたHTML機構である。

## さらに上流の由来

### 証拠

Issue 162はCSS、JavaScript、WAI-ARIAによるモーダルダイアログの実装例とアクセシビリティ上の要求を列挙する。導入時の編集者説明は、Chromium、WebKit、Firefoxの遮断モーダルプロンプトの問題を`showModal()`の非同期モデルで避け、カスタマイズ可能なページ内ダイアログを標準化する意図を示す。

### 解釈

複数の既存Web UI実装とブラウザープロンプトの問題を、マークアップ、モーダルスタック、不活性部分木、フォーム操作を持つ非同期のプラットフォーム機能へ統合した設計と解釈できる。特定ライブラリ一つを直接移植したとはしない。

## 系譜

会話用HTML5 `dialog` → 削除（2009年）

CSS／JavaScript／WAI-ARIA製モーダルダイアログ、JavaScript製ライトボックス、ブラウザー遮断プロンプト

→（既存利用例調査とメーリングリスト議論）アプリケーションUI用`dialog`の導入（2012年） → 現行HTML `dialog`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2008-01-22 | [HTML 5 differences from HTML 4](../../raw/www.w3.org/TR/2008/WD-html5-diff-20080122/index.html)（[公開元](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements)） | W3C Working Draft | `dt`を話者、`dd`を音声とする会話用の旧`dialog`。 | 2026-08-09 |
| 2009-09-15 | [WHATWG HTML commit `9c490f21`](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)） | 仕様コミット | 会話用`dialog`を削除し、通常のHTMLによる会話マークアップへ置換。 | 2026-08-09 |
| 2011-01-22 | [W3C HTML Issue 162](../../raw/lists.w3.org/Archives/Public/public-html-wg-issue-tracking/2011Jan/0014.html)（[公開元](https://lists.w3.org/Archives/Public/public-html-wg-issue-tracking/2011Jan/0014.html)） | 標準化論点 | CSS、JavaScript、WAI-ARIAで堅牢なモーダルダイアログを作る難しさ、既存Web UI実装、ネイティブ機構の提案。 | 2026-08-09 |
| 2012-04-11 | [WHATWG HTML commit `2fb24fcf`](../../raw/github.com/whatwg/html/commit/2fb24fcf3f916236e8767e2cb72b23e5c75b77e9)（[公開元](https://github.com/whatwg/html/commit/2fb24fcf3f916236e8767e2cb72b23e5c75b77e9)） | 仕様コミット | アプリケーションUI用`dialog`、モーダル／非モーダルAPI、関連機構の導入。 | 2026-08-09 |
| 2012-04-11 | [Ian Hickson, “Dialogs and prompts”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-April/077688.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-April/077688.html)） | WHATWGメーリングリスト・編集者説明 | 既存利用例と議論に基づく設計、ブラウザープロンプトの問題、JavaScript製ライトボックス風ダイアログ、非同期`showModal()`の採用理由。 | 2026-08-09 |

## 確度

**A**

CSS、JavaScript、WAI-ARIAによる具体的な既存のモーダルダイアログ実装群とブラウザープロンプトの問題から、現行要素とAPIを設計した因果関係を標準化論点と編集者説明で確認できるため。

## 否定された仮説

会話用旧`dialog`を現行要素の直接祖先とする説明。同名だが一度削除され、2012年に別の意味とAPIで再導入された。特定GUIツールキットまたはライブラリ一つから直接移植したという説明も、一次資料が複数の実装群と要求を示すため採らない。

## 未解決

- 旧要素と同じ名称を再利用した判断の記録は残っているか。
