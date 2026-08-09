# `<data>`

> 状態: HTML Working Groupのchange proposalからの導入を検証済み（editor draft初回commitは未確認）

## 概要

人間向けの表示内容と機械可読な値を結び付けるため、HTML Working Groupのchange proposal、合意、決定を経て導入された。

## 現在の意味

WHATWG HTML Living Standardでは、内容と、その機械可読な表現である`value`属性を併せて表す。値が日付または時刻に関係する場合は、より具体的な`time`を使える。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element)（2026-08-09確認）

## HTMLへの導入

HTML Working Groupのchange proposalは、2011年11月の議論で`data`追加にrough consensusがあり、editorが追加済みの定義をHTML5へ採用する提案だと記す。2012年4月のCall for Consensusと同年7月のWorking Group Decisionは、`data`要素の追加自体には合意があり、型systemを付けないmodelを採用したことを確認する。[提案](https://www.w3.org/wiki/User:Tantekelik/data_element) [CfC](https://lists.w3.org/Archives/Public/public-html/2012Apr/0026.html) [決定](https://www.w3.org/mid/5005BC08.7040705%2540intertwingly.net)

## HTML直前の祖先

HTML Working Groupの`data` change proposalである。提案、CfC、決定が要素追加を明示する。

## さらに上流の由来

### 証拠

提案は`meta`の隣接配置、global attribute、`time`との比較を行うが、それらから`data`を派生させたとは述べない。

### 解釈

表示内容と機械処理用の値を一要素内で明示的に対応させる要求を要素化したと解釈できる。

## 系譜

HTML WG `data` change proposal（2011–2012年） → HTML WG合意・決定（2012年） → HTML 5.1 `data`（2013年） → 現行HTML `data`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2012（更新日不詳） | `<data>` element change proposal | HTML WG change proposal | 導入理由、代替案、2011年のrough consensusとeditor追加済み定義。 | [一次資料](https://www.w3.org/wiki/User:Tantekelik/data_element) | 2026-08-09 |
| 2012-04-04 | ISSUE-184 Call for Consensus | HTML WG mailing list | 二案が`data`追加で一致し、型systemだけを争点としたこと。 | [一次資料](https://lists.w3.org/Archives/Public/public-html/2012Apr/0026.html) | 2026-08-09 |
| 2012-07-17 | ISSUE-184 Working Group Decision | HTML WG decision | 要素追加のconsensusと無型modelの決定。 | [一次資料](https://www.w3.org/mid/5005BC08.7040705%2540intertwingly.net) | 2026-08-09 |
| 2013-05-28 | HTML 5.1 `data` | W3C Working Draft | `value`による機械可読表現と`time`との機能分担。 | [一次資料](https://www.w3.org/TR/2013/WD-html51-20130528/text-level-semantics.html#the-data-element) | 2026-08-09 |

## 確度

**A**

HTML Working Groupの提案、合意、決定が`data`追加の要求と採用因果を要素単位で直接示すため。

## 否定された仮説

`time`から`data`が派生したという説明。資料は機能分担を示すだけである。`meta`、microdata、RDFaからの直接採用も確認できない。

## 未解決

- editor draftへ`data`を最初に追加したcommit、提案者、正確な日付は何か。
- 2011年11月3日の議論全文と最終構文までの変更は確認できるか。
- microformats、microdata、RDFaの具体例が編集判断へ使われた記録はあるか。

## 調査記録

HTML Working Groupのchange proposal、Call for Consensus、Working Group Decision、HTML 5.1草案を確認した。editor draft初回commitは確定できなかった。横断比較は[Modern HTML要素とforeign rootの調査ノート](../research/modern-html-foreign-roots.md)を参照する。
