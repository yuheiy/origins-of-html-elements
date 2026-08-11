---
status: 完成
---

# `<time>`

## 概要

Ian Hicksonが2005年に構想した日付・時刻要素は、2006年3月までにWHATWG草案の`<t>`となった。Microformats、CSS、ブログ／出版、既存Webの要求を背景に具体化され、可読性を求める提案から同年11月に`<time>`へ改名された。2011年には一度`data`へ置換されたが、実利用、検証可能な日付構文、用途拡張をめぐる議論を経て両要素の併存へ移った。

## 現在の意味

WHATWG HTML Living Standardでは、内容とその機械可読な形式を`datetime`属性で表す。対象は仕様が定める形式の日付、時刻、タイムゾーンオフセット、継続時間に限られる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element)、2026-08-09確認）

## HTMLへの導入

Ian Hicksonは2005年9月1日、今後仕様化する新要素として`date`と`time`を挙げた。2006年2月16日付草案には専用の日付・時刻要素がまだなく、3月2日のWHATWG公式Git初回収録には、日付または時刻を表し`datetime`属性を持つWIP `t`がある。したがって、確認できる追加区間はこの二版の間であるが、二候補を単一の`<t>`へまとめた編集記録は確認できない。[2005年の作業方針](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html)） [2006年2月16日付草案](../../raw/web.archive.org/web/20060216040621id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20060216040621id_/http://whatwg.org/specs/web-apps/current-work/)） [初回Git収録](../../raw/github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)（[公開元](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)）

Hicksonは10月26日に`<t> element, draft the first`として、日付と時刻、機械可読な`datetime`、DOM属性、具体例を詳述した。10月30日には、Microformats、CSS、ブログ／出版の各コミュニティからの要求と、既存Webで独自要素、ID、classが日付・時刻に使われていた調査結果を設計理由として説明した。[`<t>`初稿コミット](../../raw/github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)（[公開元](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)） [用途の説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049786.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049786.html)）

Michel Fortinは10月31日、単文字の`<t>`はソースから意味を理解しにくく誤用されやすいとして`<time>`を提案した。11月23日のコミットは`<t> becomes <time>`と明記し、意味と`datetime`を維持したまま要素名、DOMインターフェース、例を一括して改名した。[改名提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049823.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049823.html)） [改名コミット](../../raw/github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)（[公開元](https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)）

2011年7月、Hicksonは`time`の用途をCSSによる日付表示、記事の公開日時とAtom変換、Microformats／Microdata用の機械可読値に分け、最後の用途を日付以外へ一般化する`data`への置換を提案した。10月29日に置換を実施したが、翌日の撤回要求は、`time`の実利用、`pubdate`の簡潔さ、日付構文の検証可能性、ISO形式の共有性を失うと反論した。11月3日のHTML Working Group会合では、年だけ、年と月、年なし日付、タイムゾーン、継続時間等の用途と反対意見を検討し、出席者の概略支持は`time`と`data`の双方を持つ方向へ向かった。11月18日に`data`を残したまま`time`が再導入され、現行の分担が成立した。[Bug 13240](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)） [置換コミット](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)） [撤回要求](../../raw/lists.w3.org/Archives/Public/public-html/2011Oct/0163.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2011Oct/0163.html)） [会合議事録](../../raw/www.w3.org/2011/11/03-html-wg-minutes.html)（[公開元](https://www.w3.org/2011/11/03-html-wg-minutes.html)） [再導入コミット](../../raw/github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)（[公開元](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)）

## HTML直前の祖先

WHATWG Web Applications 1.0の`<t>`要素である。2006年コミットが`<t>`から`<time>`への改名を要素単位で直接明記し、意味と`datetime`を継承する。

## さらに上流の由来

### 証拠

Hicksonは、複数のMicroformatsが特定の日付や時刻を機械可読にするため`abbr`を流用していたこと、CSS側が地域に応じた日付・時刻の表示変更を求めていたこと、ブログ／出版側が公開日、誕生日、予定時刻等を明示したがっていたことを`<t>`の理由として挙げた。既存Web調査では、日付・時刻用の独自要素、ID、classが多数あり、`date`は14番目に多いclass名だったとも説明した。[用途の説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049786.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049786.html)）

### 解釈

`<t>`は、特定の外部要素名を移植したのではなく、Microformatsにおける`abbr`の流用、CSSでの日付表示、ブログ／出版上の意味付け、既存Webのclass等を一つの専用要素で扱うためのWHATWG設計と解釈できる。Atomは2011年に挙げられた用途の一つであり、2006年の採用元としては確認できない。

## 系譜

WHATWG Web Applications 1.0 WIP `<t>`（2006年3月まで） → 詳細な`<t>`初稿（2006年10月） → Michel Fortinの`<time>`提案 → `<time>`への改名 → `data`へ一時置換（2011-10） → `<time>`と`data`の併存（2011-11） → 現行HTML `<time>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2005-09-01 | [WHATWG「Status update」](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-September/004660.html)） | WHATWGメール | Ian Hicksonが今後仕様化する新要素候補として`date`と`time`を列挙。 | 2026-08-11 |
| 2006-02-16 | [*Web Applications 1.0*](../../raw/web.archive.org/web/20060216040621id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20060216040621id_/http://whatwg.org/specs/web-apps/current-work/)） | WHATWG草案 | 専用の日付・時刻要素がまだ存在しない追加前の境界。 | 2026-08-11 |
| 2006-03-02 | [WHATWGコミット `c3550d90`](../../raw/github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)（[公開元](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)） | 仕様ソース・初回Git収録 | WIP `<t>`、日付または時刻という意味、`datetime`属性。 | 2026-08-11 |
| 2006-10-26 | [WHATWGコミット `6bdcd9dc`](../../raw/github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)（[公開元](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)） | 仕様ソースのコミット | `<t>`初稿として意味、`datetime`、DOM、例を具体化。 | 2026-08-09 |
| 2006-10-30 | [Ian Hicksonの用途説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049786.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049786.html)） | WHATWGメール | Microformats、CSS、ブログ／出版からの要求と既存Web調査を`<t>`の根拠として説明。 | 2026-08-11 |
| 2006-10-31 | [Michel Fortinの改名提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049823.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049823.html)） | WHATWGメール | 単文字名の理解しにくさと誤用可能性を理由に`<time>`を提案。 | 2026-08-11 |
| 2006-11-23 | [WHATWGコミット `fdfe6548`](../../raw/github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)（[公開元](https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)） | 仕様ソースのコミット | `<t>`から`time`への明示的改名。 | 2026-08-09 |
| 2011-07-14〜11-29 | [Bug 13240](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)） | HTML WG課題 | `time`の三用途、`data`への一般化提案、代替案と反対意見。 | 2026-08-11 |
| 2011-10-29 | [WHATWGコミット `70b0ce45`](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)） | 仕様ソースのコミット | `time`を削除し`data`へ置換。 | 2026-08-09 |
| 2011-10-30 | [`time`削除の撤回要求](../../raw/lists.w3.org/Archives/Public/public-html/2011Oct/0163.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2011Oct/0163.html)） | HTML WGメール | 実利用、`pubdate`、日付構文の検証可能性、ISO形式を理由に`time`維持を要求。 | 2026-08-11 |
| 2011-11-03 | [HTML WG会合議事録](../../raw/www.w3.org/2011/11/03-html-wg-minutes.html)（[公開元](https://www.w3.org/2011/11/03-html-wg-minutes.html)） | HTML WG議事録 | 追加する日付粒度、タイムゾーン、継続時間、反対意見を検討し、出席者が両要素の併存を概略支持。 | 2026-08-11 |
| 2011-11-18 | [WHATWGコミット `92baa833`](../../raw/github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)（[公開元](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)） | 仕様ソースのコミット | `time`を機械可読日付と時刻／継続時間要素として再導入。 | 2026-08-09 |

## 確度

**A**

現行要素の具体的な前身`<t>`からの改名と設計継承をWHATWGの仕様コミットが要素単位で直接明記し、導入要求、改名提案、2011年の削除と再導入も同時代資料で確認できるため。

## 否定された仮説

`data`を唯一の起源とする説明。`time`は2006年から存在し、`data`は2011年の短い置換区間である。Microformatsは設計要求として明示されるが、hCalendarの特定要素名からの採用ではなく、既存の`abbr`流用を置き換える方向で参照された。AtomとHTML 4 `INS`／`DEL`の`datetime`からの直接採用も確認できない。

## 未解決

- 2006年2月16日後〜3月2日までに`date`と`time`の二候補を単一の`<t>`へまとめた編集記録と、単文字名を最初に選んだ理由は確認できるか。
