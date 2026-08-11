---
status: 完成
---

# `<meter>`

## 概要

`meter`は、Matthew Thomasが2004年に`progress`と対になる非進捗の比率表示として提案した`gauge`を、WHATWGが2006年に綴りやすい名称へ改めた要素である。`low`、`high`、`optimum`による三領域モデルも同時代の議論から仕様へ入った。

## 現在の意味

WHATWG HTML Living Standardでは、既知範囲内のスカラー量の測定または比率を表す。タスクの進捗には使わない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element)、2026-08-09確認）

## HTMLへの導入

Matthew Thomasは2004年9月8日、Webアプリケーションごとの独自な進捗表示を避ける`progressmeter`または`progress`を提案し、同時に、関連度や割当量のような非進捗の比率へ進捗表示を誤用させない`gauge`も必要だと述べた。Ian Hicksonは11月16日に両者を別要素として支持し、`gauge`のプレースホルダー節を追加したと応答した。12月8日付草案には`gauge`節が存在する。[Matthew Thomasの提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044484.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044484.html)） [Ian Hicksonの採用応答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/044733.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/044733.html)） [2004年12月8日付草案](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)）

Ian Hicksonは2006年3月20日、`gauge`は綴り間違いを招くとして代替名を募り、候補のうち`meter`が最良だとした。3月23日には、計測器を意味する`meter`には英米差がないという指摘を踏まえ、`meter`を採用して初稿を仕様化したと報告した。3月29日のGitコミットに対応するリビジョン15は同じ節を`meter`へ改名し、`min`、`max`、`value`、`low`、`high`、`optimum`とDOMインターフェースを具体化した。[改名の問題提起](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048362.html)） [名称決定と初稿の報告](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048383.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048383.html)） [仕様化コミット](../../raw/github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)（[公開元](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)）

## HTML直前の祖先

Matthew Thomasが提案し、WHATWG Web Applications 1.0に追加された`gauge`要素。提案への採用応答とGit差分が、同じ節を`meter`へ改名して意味と設計を継承した経路を直接示す。

## さらに上流の由来

### 証拠

Thomasは、Mac OSで進捗表示と非進捗の比率表示の一方しか用意されず、開発者が関連度や割当量へ進捗表示を使っていたと説明し、`progress`と`gauge`を同時に導入するよう求めた。[Matthew Thomasの提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044484.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044484.html)）

Mikko Rantalainenは2004年9月23日、検索結果の高い値は良好でもCPU温度の高い値は不良であり、自動車のエンジン温度のように中間値が良好な場合も必要だと指摘した。fantasaiは2006年3月20日、三領域の尺度には最小値、最大値、下限閾値、上限閾値、最適値が必要だと具体化し、Hicksonは三領域を支持してこの属性モデルへ同意した。[良好／不良範囲の要求](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044544.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044544.html)） [三領域の属性案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048364.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048364.html)） [編集者の合意](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048367.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048367.html)）

### 解釈

`meter`は計器の外見を移植した要素ではなく、進行中の作業と現在状態の測定を意味上分け、値の範囲と望ましさを機械可読にする要求から設計された。`low`、`high`、`optimum`は、単なる最終仕様の属性名ではなく、値の向きによって良否が変わり、中間が最適にもなるという議論を三領域へ落とし込んだものである。

## 系譜

Matthew Thomasの非進捗比率用`gauge`提案 → WHATWG Web Applications 1.0 `gauge` → 2006年`meter`初稿・リビジョン15 → HTML5 `meter` → 現行HTML `meter`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-09-08 | [「Status bars and progress indicators」](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044484.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044484.html)） | WHATWGメール | Matthew Thomasによる`progress`と非進捗比率用`gauge`の対の提案、その用途とMac OSを反例にした導入理由 | 2026-08-11 |
| 2004-09-23 | [Mikko Rantalainenの返信](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044544.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044544.html)） | WHATWGメール | 値の増減方向だけで良否を決められず、中間値が良好な範囲も必要という要求 | 2026-08-11 |
| 2004-11-16 | [Ian Hicksonの採用応答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/044733.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/044733.html)） | WHATWGメール | `progress`と`gauge`を別要素として支持し、プレースホルダー節を追加したこと | 2026-08-11 |
| 2004-12-08 | [*Web Applications 1.0*](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)） | WHATWG草案 | Git移行前の`gauge`節と、既知の範囲内の値という定義 | 2026-08-11 |
| 2006-03-02 | [WHATWG HTML commit `c3550d90`](../../raw/github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)（[公開元](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)） | 仕様ソース・初回Git収録 | WIP `gauge`の初期意味と検討中の処理 | 2026-08-09 |
| 2006-03-20 | [改名の問題提起](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048362.html)） | WHATWGメール | `gauge`の綴りにくさ、代替候補の比較、`meter`を最良候補とした理由 | 2026-08-11 |
| 2006-03-20 | [fantasaiの三領域案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048364.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048364.html)） | WHATWGメール | `min`、`max`、下限閾値、上限閾値、最適値からなる属性モデル | 2026-08-11 |
| 2006-03-20 | [Ian Hicksonの合意](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048367.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048367.html)） | WHATWGメール | 任意数ではなく三領域を折衷案として採り、fantasaiの属性モデルへ同意したこと | 2026-08-11 |
| 2006-03-23 | [`meter`初稿の報告](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048383.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048383.html)） | WHATWGメール | `meter`という名称の採用、初稿の仕様化、良好／不良の一〜三領域という設計 | 2026-08-11 |
| 2006-03-28 | [*Web Applications 1.0*, revision 15](../../raw/platform.html5.org/history/webapps/r15.html)（[公開元](https://platform.html5.org/history/webapps/r15.html#the-meter)） | WHATWG保存仕様 | `meter`の同時代定義と`progress`との役割分離 | 2026-08-09 |
| 2006-03-29 | [WHATWG HTML commit `f8514de7`（revision 15）](../../raw/github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)（[公開元](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)） | 仕様コミット | `gauge`から`meter`への改名、意味・属性・DOMモデルの具体化 | 2026-08-09 |
| 2006-10-27 | [WHATWG HTML commit `cb22e823`](../../raw/github.com/whatwg/html/commit/cb22e823d93b27b01b73496e3cfe534ab6ee6509)（[公開元](https://github.com/whatwg/html/commit/cb22e823d93b27b01b73496e3cfe534ab6ee6509)） | 仕様コミット | 残っていた`gauge`表記一件を`meter`へ訂正 | 2026-08-11 |
| 2026-08-09 | [*HTML Living Standard: The meter element*](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開元](https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element)） | 現行仕様 | `meter`の現行定義 | 2026-08-09 |

## 確度

**A**

提案者による`gauge`の用途と導入理由、編集者による採用、`meter`への改名理由と決定、三領域モデルの提案と合意、同じ仕様節の継承を要素単位のメールとGit差分で確認できる。

## 否定された仮説

特定OSのメーターウィジェットまたは計器一般から語彙や外見を直接採用したとは確認できない。Thomasが挙げたMac OSは進捗表示との混同を避ける設計理由であり、具体的な祖先要素としては扱わない。

## 未解決

なし。
