---
status: 完成
---

# `<progress>`

## 概要

`progress`は2004年12月のWHATWG Web Applications 1.0にあったProgress meters placeholderを、2006年3月にtask completionをdeterminate／indeterminateの二状態で表す要素へ具体化したものである。さらに古いGUI widget等からplaceholderへの採用経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、taskのcompletion progressを表す。`value`がない場合はindeterminate、ある場合は`max`に対する完了量を示す。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element)（2026-08-09確認）

## HTMLへの導入

2004年12月8日のWHATWG Web Applications 1.0草案には、`gauge`に似るがprogress barとして描画し、numeratorがなければindeterminateにするProgress meters placeholderがあった。この段階では`progress`という要素名、属性、DOM interface、task completionという定義はまだない。[2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)

2005年9月、編集者Ian Hicksonは今後仕様化する新要素に`progress`を挙げた。WHATWG公式Gitの初回収録である2006年3月2日のsourceではWIP `progress`がtask completionを表し、同じ節に旧placeholder本文が残っていた。3月29日のrevision 15はこのplaceholderを削除し、`value`、`max`、DOM interface、determinate／indeterminateの処理model、script更新例を持つ要素へ具体化した。[2005年status mail](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html) [初回Git収録](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648) [仕様化commit](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

## HTML直前の祖先

2004年12月8日のWHATWG Web Applications 1.0にあるProgress meters placeholder。2005年9月と2006年1月にも同じ構想が継続し、2006年3月29日のrevision 15がplaceholderを正式な`progress`要素へ置換した。placeholderを生んださらに古い具体的祖先は未確認である。[2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/) [2006年snapshot](https://www.whatwg.org/specs/web-apps/2006-01-01/) [仕様化commit](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

## さらに上流の由来

### 証拠

2004年のplaceholderはprogress barとindeterminate状態を明記した。revision 15はこれを、残作業量が不明でも進行中であるindeterminate状態と、0からmaximumまでのdeterminate状態を区別し、dynamic Web applicationがscriptで値を更新する要素へ具体化した。

2009年、Hicksonは`progress`の目的を、画像等で非アクセシブルに実装されていたprogress barを置き換え、platform-nativeな外見を得られるようにすることだと説明した。[編集者の説明](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)

### 解釈

確認できる導入要求は、Web applicationがtaskの進行状態を意味としてmarkupし、UAが二状態をアクセシブルかつplatform-nativeに表示できるようにすることだった。一般的なGUI progress barとの類似はあるが、特定のtoolkitからの採用因果は確定できない。

## 系譜

2004年WHATWG Web Applications 1.0 Progress meters placeholder → 2006年WHATWG `progress` → HTML5 `progress` → 現行HTML `progress`

placeholderより前の接続は未確認のため矢印で補わない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2003-10-14 | XForms 1.0 | W3C Recommendation | 定義するform controlsにprogress controlがない | https://www.w3.org/TR/2003/REC-xforms-20031014/slice8.html | 2026-08-10 |
| 2004-12-08（2004-12-10保存） | *Web Applications 1.0*, “Progress meters” | WHATWG草案の同時代保存版 | `gauge`に似るprogress barと、numerator欠落時のindeterminate状態を記したplaceholder。同草案はXUL／XAML等からの独立性も明記 | https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/ | 2026-08-10 |
| 2004-12-14 | Christopher Cook, “Web Forms 2.0 - File Upload Progress?” | WHATWG mailing-list proposal | DOM-accessibleなupload progressをpageへ提供する要求。placeholderより後発 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/044982.html | 2026-08-10 |
| 2004-12-16 PST（17日UTC） | Ian Hicksonの回答 | WHATWG mailing-list・編集者回答 | Upload feedbackはpageでなくUAが提供すべきとして提案経路を退けた | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/045003.html | 2026-08-10 |
| 2005-09-01 | Ian Hickson, “Status update” | WHATWG mailing-list | 今後仕様化する新要素として`progress`を列挙 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html | 2026-08-10 |
| 2006-01-01 | *Web Applications 1.0* | WHATWG公式snapshot | 2004年と同じProgress meters placeholderが正式要素化直前まで継続 | https://www.whatwg.org/specs/web-apps/2006-01-01/ | 2026-08-10 |
| 2006-03-02 | WHATWG HTML commit `c3550d90` | 仕様source・初回Git収録 | WIP `progress`、task completion、indeterminate状態の初期設計 | https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648 | 2026-08-09 |
| 2006-03-28 | *Web Applications 1.0*, revision 15 | WHATWG保存仕様 | task completion用`progress`と`meter`との役割分離 | https://platform.html5.org/history/webapps/r15.html#the-progress | 2026-08-09 |
| 2006-03-29 | WHATWG HTML commit `f8514de7`（revision 15） | 仕様commit | `value`, `max`, DOM interface、二状態の処理model、script更新例 | https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00 | 2026-08-09 |
| 2008-06-10 | *HTML 5: The progress element* | W3C Working Draft | HTML5で継承されたtask progress、二状態、script更新例 | https://www.w3.org/TR/2008/WD-html5-20080610/text-level.html#the-progress | 2026-08-09 |
| 2009-08-12 | Ian Hickson, “Spec comments, sections 3.1-4.7” | WHATWG mailing-list・編集者説明 | 画像等による非アクセシブルなprogress barを置換し、platform-native表示を得るという目的 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html | 2026-08-10 |
| 2026-08-09 | *HTML Living Standard: The progress element* | 現行仕様 | `progress`の現行定義 | https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element | 2026-08-09 |

## 確度

**A**

2004年WHATWG草案の具体的なProgress meters placeholderが、2006年の仕様commitで正式な`progress`要素へ直接具体化されたことを確認できる。placeholderより上流の具体的祖先は未確認である。

## 否定された仮説

2004年12月14日のfile upload progress要求は同じ問題領域だが、Progress meters placeholderより6日遅い。Hicksonも12月16日PST（17日UTC）の返信で、upload feedbackはpageでなくbrowser自身が提供すべきだとしてpage側の機構を退けたため、`progress`要素の直接祖先としない。[提案](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/044982.html) [編集者の回答](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/045003.html)

XUL、Avalon/XAML等からの採用。2004年草案は仕様がこれらproprietary UI languagesから独立すると明記し、XForms 1.0にもprogress controlはない。個別の採用を示す別資料を確認できないため、外見や状態modelの類似から接続しない。[2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/) [XForms 1.0](https://www.w3.org/TR/2003/REC-xforms-20031014/slice8.html)

## 未解決

- 2004年12月8日のProgress meters placeholderの提案者、追加日、対応するmailまたは編集diffは確認できるか。
- Placeholderのnumerator／indeterminate modelが参照した、さらに古い具体的なUIまたはmarkupはあるか。
