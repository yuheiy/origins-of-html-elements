# `<progress>`

> 状態: WHATWGでの初期仕様化と導入時の設計を検証済み（具体的な先行要素・UIは未確認）

## 概要

`progress`は遅くとも2006年3月にWHATWG Web Applications 1.0へ存在し、task completionをdeterminate／indeterminateの二状態で表し、scriptで更新するWeb application向け要素として仕様化された。

## 現在の意味

WHATWG HTML Living Standardでは、taskのcompletion progressを表す。`value`がない場合はindeterminate、ある場合は`max`に対する完了量を示す。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element)（2026-08-09確認）

## HTMLへの導入

WHATWG公式Gitの初回収録である2006年3月2日のsourceにはWIP `progress`があり、task completionと、値が不明なindeterminate progress barを記録していた。Ian Hicksonは3月29日のrevision 15で`value`, `max`, DOM interface、determinate／indeterminateの処理modelを具体化し、script更新例も追加した。[初回Git収録](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648) [仕様化commit](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

## HTML直前の祖先

未確認。初回Git収録以前の草案、特定の先行markup、またはUI widgetから採用した記録を確認できない。

## さらに上流の由来

### 証拠

revision 15は、残作業量が不明でも進行中であるindeterminate状態と、0からmaximumまでのdeterminate状態を区別し、dynamic Web applicationがscriptで値を更新する例を示した。

### 解釈

導入要求はtaskの進行状態を意味としてmarkupし、UAが二状態を一貫して表示できるようにすることだった。一般的なGUI progress barとの類似はあるが、採用因果は確定できない。

## 系譜

2006年WHATWG Web Applications 1.0 `progress` → HTML5 `progress` → 現行HTML `progress`

初回Git収録以前の接続は未確認のため矢印で補わない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2006-03-02 | WHATWG HTML commit `c3550d90` | 仕様source・初回Git収録 | WIP `progress`、task completion、indeterminate状態の初期設計 | https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648 | 2026-08-09 |
| 2006-03-29 | WHATWG HTML commit `f8514de7`（revision 15） | 仕様commit | `value`, `max`, DOM interface、二状態の処理model、script更新例 | https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00 | 2026-08-09 |
| 2006-03-28 | *Web Applications 1.0*, revision 15 | WHATWG保存仕様 | task completion用`progress`と`meter`との役割分離 | https://platform.html5.org/history/webapps/r15.html#the-progress | 2026-08-09 |
| 2008-06-10 | *HTML 5: The progress element* | W3C Working Draft | HTML5で継承されたtask progress、二状態、script更新例 | https://www.w3.org/TR/2008/WD-html5-20080610/text-level.html#the-progress | 2026-08-09 |
| 2026-08-09 | *HTML Living Standard: The progress element* | 現行仕様 | `progress`の現行定義 | https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element | 2026-08-09 |

## 確度

**B**

仕様化の主体、時期、task completionという設計とscript更新の要求は確認できるが、具体的な先行物からの採用因果は確認できない。

## 否定された仮説

2004年のfile upload progress要求は同じ問題領域だが、`progress`要素がその提案を採用した記録は確認できないため直接祖先としない。[WHATWG mailing list](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-December/044982.html)

## 未解決

- 2006年3月2日より前のplaceholder初出、提案者、mailing-list threadは確認できるか。
- Native GUI progress bar、XUL、XAML、XForms等から状態modelを採用した記録はあるか。
- File upload progress要求と汎用task progress要素を結ぶ一次資料はあるか。

## 調査記録

WHATWG公式Gitの初回sourceとrevision 15、同revisionの保存仕様、2008年HTML 5 Working Draft、現行Living Standardを確認した。初回Git収録以前のsourceと特定UIからの採用記録は確認できなかった。横断比較は[Forms/UI要素の調査ノート](../research/forms-ui-elements.md)を参照する。
