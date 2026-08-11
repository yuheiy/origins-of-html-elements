---
status: 完成
---

# `<bdi>`

## 概要

W3C国際化グループの双方向文字分離要求と`ubi`属性案を、WHATWGが2010年に新要素へ変更して採録したものである。

## 現在の意味

WHATWG HTML Living Standardでは、双方向テキストの整形において周囲から分離するテキスト範囲を表す。`dir`はこの要素では`auto`が既定となり、親から継承しない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element)、2026-08-09確認）

## HTMLへの導入

2010年3月4日のW3C国際化Working Draftは、行内要素を分離する属性の暫定名として「bidirectional isolate」を縮めた`bdi`を公開した。後に属性名は`ubi`へ変わったが、同年10月12日のW3C Bug 10807でIan Hicksonが`bdo`にならう新要素へ同じ`bdi`名を再提案し、11月5日のWHATWGリビジョンr5669が「双方向文字上の影響を持ちうる利用者生成内容を安全に挿入する」要素として追加した。差分は要素定義、利用例、既定CSSの`unicode-bidi:isolate`を同時に追加している。[W3C bidi Working Draft](../../raw/www.w3.org/TR/2010/WD-html-bidi-20100304/__index)（[公開元](https://www.w3.org/TR/2010/WD-html-bidi-20100304/)） [W3C Bug 10807](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=10807)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807)） [r5669のGit複製](../../raw/github.com/whatwg/html/commit/29d7102ea5d923f807d44a402eef6fafd8f35327)（[公開元](https://github.com/whatwg/html/commit/29d7102ea5d923f807d44a402eef6fafd8f35327)）

リビジョンr5669では`dir=auto`が未実装であることを注記していたが、11月9日のr5672が`dir=auto`を追加し、`bdi`で属性が省略または不正な場合もauto状態として方向を算出する規則と、`dir`がこの要素では`auto`を既定とする注記を同じ差分に置いた。11月10日のr5677は`bdi`を段落レベルコンテナーおよび外側ではU+FFFCとして扱うよう実装要件を書き換えた変更であり、`dir=auto`の既定化ではない。[r5672のGit複製](../../raw/github.com/whatwg/html/commit/fd6901dbbe7c178cdde54e53f4f8aae8e6c28393)（[公開元](https://github.com/whatwg/html/commit/fd6901dbbe7c178cdde54e53f4f8aae8e6c28393)） [r5677通知](../../raw/lists.whatwg.org/pipermail/commit-watchers-whatwg.org/2010/012544.html)（[公開元](https://lists.whatwg.org/pipermail/commit-watchers-whatwg.org/2010/012544.html)）

## HTML直前の祖先

HTML直前の祖先はCSS `unicode-bidi:isolate`とW3C国際化グループの`ubi`属性案である。属性案から新要素へ変更した過程がBug 10807に直接記録されている。[W3C bidi requirements](../../raw/www.w3.org/TR/html-bidi/__index)（[公開元](https://www.w3.org/TR/html-bidi/#bidi-isolation)） [Bug 10807](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=10807)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807)）

## さらに上流の由来

### 証拠

Unicode Bidi Algorithmの上位レベルプロトコル分離要求が背景にある。LRM／RLM挿入では検索やコピー＆ペーストを壊す問題もW3C資料が記録する。[W3C bidi requirements](../../raw/www.w3.org/TR/html-bidi/__index)（[公開元](https://www.w3.org/TR/html-bidi/#bidi-isolation)）

### 解釈

`bdi`は`bdo`の別名ではなく、上書きとは異なる分離問題への解法を属性から要素へ組み替えたものと解釈できる。

## 系譜

Unicode Bidi Algorithmの分離要求 → CSS `unicode-bidi:isolate`＋W3C `ubi`属性案 → WHATWG `bdi` r5669＋`dir=auto` r5672（2010年） → 現行HTML `<bdi>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2010-03-04 | [*Additional Requirements for Bidi in HTML*](../../raw/www.w3.org/TR/2010/WD-html-bidi-20100304/__index)（[公開元](https://www.w3.org/TR/2010/WD-html-bidi-20100304/)） | W3C First Public Working Draft | 分離属性の暫定名`bdi`と「bidirectional isolate」という展開を確認できる最初期の公開案。 | 2026-08-11 |
| 2010-09-29〜2010-11-11 | [W3C Bug 10807](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=10807)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807)） | W3C HTML WG Bugzilla議論／WHATWGチェックイン記録 | `ubi`属性案に対し、Ian Hicksonが`bdo`にならう`bdi`要素と名称の展開を提案し、r5669で追加、r5677で処理を明確化した経路。 | 2026-08-11 |
| 2010-11-05 | [WHATWG HTML commit `29d7102e`（r5669）](../../raw/github.com/whatwg/html/commit/29d7102ea5d923f807d44a402eef6fafd8f35327)（[公開元](https://github.com/whatwg/html/commit/29d7102ea5d923f807d44a402eef6fafd8f35327)） | 仕様コミット | `bdi`の定義、利用者生成内容という要求、利用例、既定CSSを追加した完全な差分 | 2026-08-11 |
| 2010-11-09 | [WHATWG HTML commit `fd6901db`（r5672）](../../raw/github.com/whatwg/html/commit/fd6901dbbe7c178cdde54e53f4f8aae8e6c28393)（[公開元](https://github.com/whatwg/html/commit/fd6901dbbe7c178cdde54e53f4f8aae8e6c28393)） | 仕様コミット | `dir=auto`の追加と、`bdi`での省略時既定値、方向算出規則を追加した差分。 | 2026-08-11 |
| 2010-11-10 | [WHATWG r5677通知](../../raw/lists.whatwg.org/pipermail/commit-watchers-whatwg.org/2010/012544.html)（[公開元](https://lists.whatwg.org/pipermail/commit-watchers-whatwg.org/2010/012544.html)） | Subversionコミット通知／差分 | r5677が`dir=auto`ではなく、内外の双方向アルゴリズム上の扱いを明確化した変更であること。 | 2026-08-11 |
| 2015-07-21 | [*Additional Requirements for Bidi in HTML & CSS*](../../raw/www.w3.org/TR/html-bidi/__index)（[公開元](https://www.w3.org/TR/html-bidi/#bidi-isolation)） | W3C Working Group Note | 分離問題、`ubi`提案、実際には`bdi`が採用された歴史を記録。 | 2026-08-09 |

## 確度

**A**

具体的な分離要求、CSSと属性による先行案、新要素への変更、WHATWG採録を同じ公開議論で追跡できるため。

## 否定された仮説

`bdo`の単純な別名または反対機能として導出する説明。Bug 10807は上書きと分離を別の問題として扱う。利用者が生成した内容だけを唯一の由来とする説明も、著者作成テキストを含む利用例より狭すぎる。

## 未解決

- 2010年3月4日のWorking DraftはAharon Laninを編集者、13人を追加貢献者として挙げるが、そのうち誰が暫定属性名`bdi`を最初に提案したか。
