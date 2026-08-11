---
status: 完成
---

# `<data>`

## 概要

Ian Hicksonが`time`の機械可読値という用途を日付・時刻以外へ一般化する案として2011年に提案し、WHATWG草案への追加、HTML Working Groupの概略合意、変更提案、正式決定を経て導入された。

## 現在の意味

WHATWG HTML Living Standardでは、内容と、その機械可読な表現である`value`属性を併せて表す。値が日付または時刻に関係する場合は、より具体的な`time`を使える。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element)、2026-08-09確認）

## HTMLへの導入

Ian Hicksonは2011年7月14日、`time`の用途のうち、人間向け表記と機械可読な値を併記する仕組みは日付・時刻以外にも必要だとして、`time`を`data`へ一般化し、主にMicroformatsとMicrodataで使う案を提出した。同年10月29日のWHATWGリビジョン6783でHicksonが`time`を`data`へ置換し、これが確認できる最初の`data`仕様化である。[Bug 13240](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)） [WHATWGコミット](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)）

この置換には`time`を維持すべきだという反対があり、11月3日のHTML Working Group会合は両要素を持つ方向への概略支持を確認した。11月18日にWHATWG草案へ`time`が再導入された後も`data`は残った。HTML Working Groupの変更提案、2012年4月のCall for Consensus、同年7月のWorking Group Decisionは`data`追加自体への合意を確認し、型システムを付けないモデルを採用した。[撤回要求](../../raw/lists.w3.org/Archives/Public/public-html/2011Oct/0163.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2011Oct/0163.html)） [会合議事録](../../raw/www.w3.org/2011/11/03-html-wg-minutes.html)（[公開元](https://www.w3.org/2011/11/03-html-wg-minutes.html)） [`time`再導入コミット](../../raw/github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)（[公開元](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)） [提案](../../raw/www.w3.org/wiki/User%3ATantekelik/data_element)（[公開元](https://www.w3.org/wiki/User:Tantekelik/data_element)） [CfC](../../raw/lists.w3.org/Archives/Public/public-html/2012Apr/0026.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Apr/0026.html)） [決定](../../raw/www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)（[公開元](https://www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)）

## HTML直前の祖先

HTML5の`time`が持っていた、人間向け内容と機械可読な日付・時刻を属性で結び付けるモデルである。Bug 13240はこの用途を日付・時刻以外へ一般化して`data`とする変更を直接提案し、リビジョン6783が実行した。[Bug 13240](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)） [WHATWGコミット](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)）

## さらに上流の由来

### 証拠

Bug 13240は、`time`の機械可読値という用途を日付、評価値等へ一般化し、`abbr`に似た仕組みとしてMicroformatsとMicrodataで使うことを提案する。[Bug 13240](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)）

HTML Working Groupの変更提案は、隣接する`meta`より内容を包含する要素を著者が好むというMicroformats、Microdata、RDFaでの経験と、要素ごとに値を得る既存のMicroformats／Microdataパターンを`data value`の設計理由に挙げる。[変更提案](../../raw/www.w3.org/wiki/User%3ATantekelik/data_element)（[公開元](https://www.w3.org/wiki/User:Tantekelik/data_element)）

### 解釈

`data`は外部語彙の同名要素を採用したものではなく、`time`で実現していた表示値と機械可読値の組を汎用化し、Microformats、Microdata、RDFaで既に使われていた包含型・要素別の値抽出へ合わせて要素化したものと解釈できる。

## 系譜

HTML5 `time`の機械可読値モデル → Bug 13240の汎用化提案（2011年7月） → WHATWG `data`（2011年10月） → `time`との併存への概略合意（2011年11月） → HTML WG変更提案・決定（2012年） → HTML 5.1 `data`（2013年） → 現行HTML `data`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2011-03-15 | [階層データ埋め込みの提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2011-March/030907.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2011-March/030907.html)） | WHATWGメーリングリスト | MIME型を持ちJSONやXML等の階層データを格納する、現行系譜とは用途の異なる同名案。 | 2026-08-11 |
| 2011-07-14〜11-29 | [Bug 13240](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)） | HTML WG課題 | Ian Hicksonによる`time`から`data`への一般化提案、Microformats／Microdataという用途、代替案、反対意見、編集者による採用。 | 2026-08-11 |
| 2011-10-29 | [WHATWGコミット `70b0ce45`](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)） | 仕様ソースのコミット | Ian Hicksonがリビジョン6783で`time`を`data`へ置換し、仕様へ初めて追加。 | 2026-08-11 |
| 2011-10-30 | [`data`追加の撤回要求](../../raw/lists.w3.org/Archives/Public/public-html/2011Oct/0163.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2011Oct/0163.html)） | HTML WGメーリングリスト | Steve Faulknerがリビジョン6783を特定し、汎用属性やRDFaで代替できること、型を検証できないこと等を理由に反対。 | 2026-08-11 |
| 2011-11-03 | [HTML WG会合議事録](../../raw/www.w3.org/2011/11/03-html-wg-minutes.html)（[公開元](https://www.w3.org/2011/11/03-html-wg-minutes.html)） | HTML WG議事録 | `time`と`data`の双方を持つ方向への、Working Group全体ではない概略支持。Microformatsの実利用を要素追加の判断材料として議論。 | 2026-08-11 |
| 2011-11-18 | [WHATWGコミット `92baa833`](../../raw/github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)（[公開元](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)） | 仕様ソースのコミット | `data`を残したまま`time`を再導入し、二要素の機能分担を成立させた。 | 2026-08-11 |
| 2012（更新日不詳） | [`<data>` element変更提案](../../raw/www.w3.org/wiki/User%3ATantekelik/data_element)（[公開元](https://www.w3.org/wiki/User:Tantekelik/data_element)） | HTML WG変更提案 | 導入理由、代替案、2011年の概略合意とエディター追加済み定義。 | 2026-08-09 |
| 2012-04-04 | [ISSUE-184 Call for Consensus](../../raw/lists.w3.org/Archives/Public/public-html/2012Apr/0026.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Apr/0026.html)） | HTML WGメーリングリスト | 二案が`data`追加で一致し、型システムだけを争点としたこと。 | 2026-08-09 |
| 2012-07-17 | [ISSUE-184 Working Group Decision](../../raw/www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)（[公開元](https://www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)） | HTML WG判断 | 要素追加の合意と無型モデルの決定。 | 2026-08-09 |
| 2013-05-28 | [HTML 5.1 `data`](../../raw/www.w3.org/TR/2013/WD-html51-20130528/text-level-semantics.html)（[公開元](https://www.w3.org/TR/2013/WD-html51-20130528/text-level-semantics.html#the-data-element)） | W3C Working Draft | `value`による機械可読表現と`time`との機能分担。 | 2026-08-09 |

## 確度

**A**

HTML Working Groupの提案、合意、決定が`data`追加の要求と採用因果を要素単位で直接示すため。

## 否定された仮説

`data`は`time`と無関係にHTML Working Groupの変更提案から新設されたという説明。Bug 13240とリビジョン6783は、`time`の一用途を汎用化して`data`へ置換したことを直接示す。2011年3月の階層データ格納用の同名案は用途が異なり、Bug 13240や採用コミットとの接続がないため現行要素の祖先とはしない。`meta`、Microformats、Microdata、RDFaの同名語彙から直接採用したという説明も確認できない。

## 未解決

なし。
