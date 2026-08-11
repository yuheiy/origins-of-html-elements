---
status: 完成
---

# `<data>`

## 概要

人間向けの表示内容と機械可読な値を結び付けるため、HTML Working Groupの変更提案、合意、決定を経て導入された。

## 現在の意味

WHATWG HTML Living Standardでは、内容と、その機械可読な表現である`value`属性を併せて表す。値が日付または時刻に関係する場合は、より具体的な`time`を使える。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element)、2026-08-09確認）

## HTMLへの導入

HTML Working Groupの変更提案は、2011年11月の議論で`data`追加に概略合意があり、エディターが追加済みの定義をHTML5へ採用する提案だと記す。2012年4月のCall for Consensusと同年7月のWorking Group Decisionは、`data`要素の追加自体には合意があり、型システムを付けないモデルを採用したことを確認する。[提案](../../raw/www.w3.org/wiki/User%3ATantekelik/data_element)（[公開元](https://www.w3.org/wiki/User:Tantekelik/data_element)） [CfC](../../raw/lists.w3.org/Archives/Public/public-html/2012Apr/0026.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Apr/0026.html)） [決定](../../raw/www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)（[公開元](https://www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)）

## HTML直前の祖先

HTML Working Groupの`data`変更提案である。提案、CfC、決定が要素追加を明示する。

## さらに上流の由来

### 証拠

提案は`meta`の隣接配置、グローバル属性、`time`との比較を行うが、それらから`data`を派生させたとは述べない。

### 解釈

表示内容と機械処理用の値を一要素内で明示的に対応させる要求を要素化したと解釈できる。

## 系譜

HTML WG `data`変更提案（2011–2012年） → HTML WG合意・決定（2012年） → HTML 5.1 `data`（2013年） → 現行HTML `data`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2012（更新日不詳） | [`<data>` element変更提案](../../raw/www.w3.org/wiki/User%3ATantekelik/data_element)（[公開元](https://www.w3.org/wiki/User:Tantekelik/data_element)） | HTML WG変更提案 | 導入理由、代替案、2011年の概略合意とエディター追加済み定義。 | 2026-08-09 |
| 2012-04-04 | [ISSUE-184 Call for Consensus](../../raw/lists.w3.org/Archives/Public/public-html/2012Apr/0026.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Apr/0026.html)） | HTML WGメーリングリスト | 二案が`data`追加で一致し、型システムだけを争点としたこと。 | 2026-08-09 |
| 2012-07-17 | [ISSUE-184 Working Group Decision](../../raw/www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)（[公開元](https://www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)） | HTML WG判断 | 要素追加の合意と無型モデルの決定。 | 2026-08-09 |
| 2013-05-28 | [HTML 5.1 `data`](../../raw/www.w3.org/TR/2013/WD-html51-20130528/text-level-semantics.html)（[公開元](https://www.w3.org/TR/2013/WD-html51-20130528/text-level-semantics.html#the-data-element)） | W3C Working Draft | `value`による機械可読表現と`time`との機能分担。 | 2026-08-09 |

## 確度

**A**

HTML Working Groupの提案、合意、決定が`data`追加の要求と採用因果を要素単位で直接示すため。

## 否定された仮説

`time`から`data`が派生したという説明。資料は機能分担を示すだけである。`meta`、Microdata、RDFaからの直接採用も確認できない。

## 未解決

- エディター草案へ`data`を最初に追加したコミット、提案者、正確な日付は何か。
- 2011年11月3日の議論全文と最終構文までの変更は確認できるか。
- Microformats、Microdata、RDFaの具体例が編集判断へ使われた記録はあるか。
