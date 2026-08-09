# `<dialog>`

> 状態: 完成

## 概要

現行`dialog`は2012年4月、Web applicationのdialog box等を表す要素とAPIとしてWHATWG HTMLへ導入された。2009年に削除された同名の会話用要素とは意味とcontent modelが断絶しており、直接祖先とはしない。

## 現在の意味

WHATWG HTML Living Standardでは、userがtaskを行うか情報を得るために操作する小window、すなわちdialog boxという形の、一時的なapplication部分を表す。`open`属性はdialogがactiveで操作可能なことを示す。[一次定義](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)（2026-08-09確認）

## HTMLへの導入

2012年4月11日、Ian Hicksonがapplication UI用`dialog`を`open`, `show()`, `showModal()`, `close()`, `form method=dialog`等とともにWHATWG HTML sourceへ追加した。taskを行うためuserが操作するapplication部分として、dialog box、inspector、windowを例示する。[仕様commit](https://github.com/whatwg/html/commit/2fb24fcf3f916236e8767e2cb72b23e5c75b77e9)

## HTML直前の祖先

未確認。2008年草案にはconversation用の同名`dialog`があったが、2009年に明示的に削除され、2012年版は別のcontent modelとAPIで再導入された。特定GUI toolkitのdialog widgetから採用した因果も確認できない。

## さらに上流の由来

### 証拠

2012年commitはdialog box、inspector、windowを設計対象として挙げ、Web application UIという導入要求を直接示す。

### 解釈

非modal／modalな一時的UIとdocument blockingをHTML要素・APIとして統合した設計と解釈できる。ただし具体的な先行実装は確定しない。

## 系譜

conversation用HTML5 `dialog` → 削除（2009年）

[具体的祖先未確認] → application UI用`dialog`の導入（2012年） → 現行HTML `dialog`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2008-01-22 | HTML 5 differences from HTML 4 | W3C Working Draft | `dt`をspeaker、`dd`をspeechとするconversation用の旧`dialog`。 | [一次資料](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements) | 2026-08-09 |
| 2009-09-15 | WHATWG HTML commit `9c490f21` | 仕様commit | conversation用`dialog`を削除し、通常のHTMLによる会話markupへ置換。 | [一次資料](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7) | 2026-08-09 |
| 2012-04-11 | WHATWG HTML commit `2fb24fcf` | 仕様commit | application UI用`dialog`、modal/non-modal API、関連機構の導入。 | [一次資料](https://github.com/whatwg/html/commit/2fb24fcf3f916236e8767e2cb72b23e5c75b77e9) | 2026-08-09 |

## 確度

**B**

現行要素の導入主体、日付、Web application UIという設計モデルは確認できるが、具体的な先行widgetまたは実装からの採用因果は確認できないため。

## 否定された仮説

会話用旧`dialog`を現行要素の直接祖先とする説明。同名だが一度削除され、2012年に別の意味とAPIで再導入された。特定GUI dialogから直接採用したという説明も、外見と機能の類似だけなので採用しない。

## 未解決

- 2012年commitより前の提案者、実装要求、mailing-listまたはbug記録はあるか。
- 具体的に参照されたbrowser UI、library、GUI toolkitはあるか。
- 旧要素と同じ名称を再利用した判断の記録はあるか。
