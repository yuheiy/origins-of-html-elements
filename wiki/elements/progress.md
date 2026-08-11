---
status: 完成
---

# `<progress>`

## 概要

`progress`は2004年12月のWHATWG Web Applications 1.0にあったProgressメータープレースホルダーを、2006年3月にタスク完了を確定／不定の二状態で表す要素へ具体化したものである。さらに古いGUIウィジェット等からプレースホルダーへの採用経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、タスクの完了進捗を表す。`value`がない場合は不定、ある場合は`max`に対する完了量を示す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element)、2026-08-09確認）

## HTMLへの導入

2004年12月8日のWHATWG Web Applications 1.0草案には、`gauge`に似るが進捗バーとして描画し、分子がなければ不定にするProgressメータープレースホルダーがあった。この段階では`progress`という要素名、属性、DOMインターフェース、タスク完了という定義はまだない。[2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)

2005年9月、編集者Ian Hicksonは今後仕様化する新要素に`progress`を挙げた。WHATWG公式Gitの初回収録である2006年3月2日のソースでは作業中の`progress`がタスク完了を表し、同じ節に旧プレースホルダー本文が残っていた。3月29日のリビジョン15はこのプレースホルダーを削除し、`value`、`max`、DOMインターフェース、確定／不定の処理モデル、スクリプト更新例を持つ要素へ具体化した。[2005年の状況報告メール](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html) [初回Git収録](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648) [仕様化コミット](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

## HTML直前の祖先

2004年12月8日のWHATWG Web Applications 1.0にあるProgressメータープレースホルダー。2005年9月と2006年1月にも同じ構想が継続し、2006年3月29日のリビジョン15がプレースホルダーを正式な`progress`要素へ置換した。プレースホルダーを生んださらに古い具体的祖先は未確認である。[2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/) [2006年snapshot](https://www.whatwg.org/specs/web-apps/2006-01-01/) [仕様化コミット](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

## さらに上流の由来

### 証拠

2004年のプレースホルダーは進捗バーと不定状態を明記した。リビジョン15はこれを、残作業量が不明でも進行中である不定状態と、0から最大値までの確定状態を区別し、動的Webアプリケーションがスクリプトで値を更新する要素へ具体化した。

2009年、Hicksonは`progress`の目的を、画像等で非アクセシブルに実装されていた進捗バーを置き換え、プラットフォーム固有な外見を得られるようにすることだと説明した。[編集者の説明](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)

### 解釈

確認できる導入要求は、Webアプリケーションがタスクの進行状態を意味としてマークアップし、UAが二状態をアクセシブルかつプラットフォーム固有に表示できるようにすることだった。一般的なGUI進捗バーとの類似はあるが、特定のツールキットからの採用因果は確定できない。

## 系譜

2004年WHATWG Web Applications 1.0 Progressメータープレースホルダー → 2006年WHATWG `progress` → HTML5 `progress` → 現行HTML `progress`

プレースホルダーより前の接続は未確認のため矢印で補わない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2003-10-14 | [XForms 1.0](../../raw/www.w3.org/TR/2003/REC-xforms-20031014/slice8.html)（[公開元](https://www.w3.org/TR/2003/REC-xforms-20031014/slice8.html)） | W3C Recommendation | 定義するフォームコントロールに進捗コントロールがない | 2026-08-10 |
| 2004-12-08（2004-12-10保存） | [*Web Applications 1.0*, “Progress meters”](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/index.html)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)） | WHATWG草案の同時代保存版 | `gauge`に似る進捗バーと、分子欠落時の不定状態を記したプレースホルダー。同草案はXUL／XAML等からの独立性も明記 | 2026-08-10 |
| 2004-12-14 | [Christopher Cook, “Web Forms 2.0 - File Upload Progress?”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/044982.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/044982.html)） | WHATWGメーリングリスト提案 | DOMから参照できるアップロード進捗をページへ提供する要求。プレースホルダーより後発 | 2026-08-10 |
| 2004-12-16 PST（17日UTC） | [Ian Hicksonの回答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/045003.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/045003.html)） | WHATWGメーリングリスト・編集者回答 | Upload意見はページでなくUAが提供すべきとして提案経路を退けた | 2026-08-10 |
| 2005-09-01 | [Ian Hickson, “Status update”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html)） | WHATWGメーリングリスト | 今後仕様化する新要素として`progress`を列挙 | 2026-08-10 |
| 2006-01-01 | [*Web Applications 1.0*](../../raw/www.whatwg.org/specs/web-apps/2006-01-01/index.html)（[公開元](https://www.whatwg.org/specs/web-apps/2006-01-01/)） | WHATWG公式スナップショット | 2004年と同じProgressメータープレースホルダーが正式要素化直前まで継続 | 2026-08-10 |
| 2006-03-02 | [WHATWG HTML commit `c3550d90`](../../raw/github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)（[公開元](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)） | 仕様ソース・初回Git収録 | WIP `progress`、タスク完了、不定状態の初期設計 | 2026-08-09 |
| 2006-03-28 | [*Web Applications 1.0*, revision 15](../../raw/platform.html5.org/history/webapps/r15.html)（[公開元](https://platform.html5.org/history/webapps/r15.html#the-progress)） | WHATWG保存仕様 | タスク完了用`progress`と`meter`との役割分離 | 2026-08-09 |
| 2006-03-29 | [WHATWG HTML commit `f8514de7`（revision 15）](../../raw/github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)（[公開元](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)） | 仕様コミット | `value`, `max`, DOMインターフェース、二状態の処理モデル、スクリプト更新例 | 2026-08-09 |
| 2008-06-10 | [*HTML 5: The progress element*](../../raw/www.w3.org/TR/2008/WD-html5-20080610/text-level.html)（[公開元](https://www.w3.org/TR/2008/WD-html5-20080610/text-level.html#the-progress)） | W3C Working Draft | HTML5で継承されたタスクの進捗、二状態、スクリプト更新例 | 2026-08-09 |
| 2009-08-12 | [Ian Hickson, “Spec comments, sections 3.1-4.7”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)） | WHATWGメーリングリスト・編集者説明 | 画像等による非アクセシブルな進捗バーを置換し、プラットフォーム固有表示を得るという目的 | 2026-08-10 |
| 2026-08-09 | [*HTML Living Standard: The progress element*](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開元](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element)） | 現行仕様 | `progress`の現行定義 | 2026-08-09 |

## 確度

**A**

2004年WHATWG草案の具体的な進捗メーターのプレースホルダーが、2006年の仕様コミットで正式な`progress`要素へ直接具体化されたことを確認できる。プレースホルダー以前の具体的祖先は未確認である。

## 否定された仮説

2004年12月14日のファイルアップロード進捗要求は同じ問題領域だが、Progressメータープレースホルダーより6日遅い。Hicksonも12月16日PST（17日UTC）の返信で、アップロード意見はページでなくブラウザー自身が提供すべきだとしてページ側の機構を退けたため、`progress`要素の直接祖先としない。[提案](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/044982.html) [編集者の回答](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/045003.html)

XUL、Avalon/XAML等からの採用。2004年草案は仕様がこれら独自仕様のUI言語から独立すると明記し、XForms 1.0にも進捗コントロールはない。個別の採用を示す別資料を確認できないため、外見や状態モデルの類似から接続しない。[2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/) [XForms 1.0](https://www.w3.org/TR/2003/REC-xforms-20031014/slice8.html)

## 未解決

- 2004年12月8日のProgressメータープレースホルダーの提案者、追加日、対応するメールまたは編集差分は確認できるか。
- Placeholderの分子／不定モデルが参照した、さらに古い具体的なUIまたはマークアップはあるか。
