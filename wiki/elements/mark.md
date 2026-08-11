---
status: 完成
---

# `<mark>`

## 概要

2005年4月13日WHATWG草案までに追加された強調用`m`を、2008年に`mark`へ改名して導入された。`mark`という名前は2007年のフィードバックで提案され、単文字名の希少性と`em`との混同を避ける議論を経て採用された。

## 現在の意味

WHATWG HTML Living Standardでは、別の文脈における関連性を理由に、参照目的でマークまたは強調された一続きのテキストを表す。本文では利用者の現在の行動に関連しそうな箇所、引用では原著者によらず後から注目させた箇所を示す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element)、2026-08-09確認）

## HTMLへの導入

2005年4月2日付草案には`m`がなく、4月13日付草案には印付きまたは強調されたテキストを表す`m`があるため、確認できる追加区間はこの間である。[2005年4月2日付草案](../../raw/web.archive.org/web/20050406023711id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20050406023711id_/http://whatwg.org/specs/web-apps/current-work/)） [2005年4月13日付草案](../../raw/web.archive.org/web/20050413075549id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20050413075549id_/http://www.whatwg.org/specs/web-apps/current-work/)）

2007年2月7日、Nicholas Shanksは用途に対して単文字名`m`を使うことへの懸念から`mark`を提案した。同じ議論では、`m`と`em`が口頭で紛らわしいこと、`hi`は視覚表現を強く連想させること、`mark`は意味を説明しやすいことが論点となった。2008年2月17日、Ian Hicksonはこのフィードバックに基づいて`m`を`mark`へ改名し、要素を残す理由を実在サイトの回避実装と複数の利用例に置き、引用中で後から注目させる箇所や文脈上の関連性を表す用例を追加した。[`m`要素への回答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-February/056266.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-February/056266.html)） [仕様コミット](../../raw/github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)）

## HTML直前の祖先

HTML5草案の`m`。2008年コミットが同要素を`mark`へ改名したことを直接明記する。

## さらに上流の由来

### 証拠

2005年4月13日付草案の`m`は検索結果等の印付き／強調されたテキストという要求を示す。同年5月11日の最初期フィードバックは、通常の読み方を変えずに注意すべき箇所を見つけやすくするものとして`m`を`strong`や`em`から区別した。HTML外の具体的マークアップ祖先は確認できない。[インラインマークアップへのコメント](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-May/046219.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-May/046219.html)）

### 解釈

検索等の現在の文脈に応じた強調を、重要性を表す`strong`とは異なる意味的として形式化したと解釈できる。

## 系譜

WHATWG Web Applications 1.0 `m`（2005年4月2日後〜4月13日まで） → `mark`への改名と意味の詳述（2008年） → 現行HTML `mark`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2005-04-02 | [Web Applications 1.0](../../raw/web.archive.org/web/20050406023711id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20050406023711id_/http://whatwg.org/specs/web-apps/current-work/)） | WHATWG保存草案 | 4月2日付草案のフレージング要素群には`m`がなく、次の保存版との間へ追加区間を限定できる。 | 2026-08-11 |
| 2005-04-13 | [Web Applications 1.0](../../raw/web.archive.org/web/20050413075549id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20050413075549id_/http://www.whatwg.org/specs/web-apps/current-work/)） | WHATWG保存草案 | 印付きまたは強調されたテキストを表す`m`の確認できる最初期出現。 | 2026-08-11 |
| 2005-05-11 | [インラインマークアップへのコメント](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-May/046219.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-May/046219.html)） | WHATWGメーリングリスト | `m`を`strong`や`em`と区別する最初期フィードバック。 | 2026-08-11 |
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg.org/specs/web-apps/2005-09-01/__index)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-m)） | WHATWG保存Early Working Draft | 印付き/強調されたテキストを表す`m`と検索結果の用例。 | 2026-08-09 |
| 2008-02-17 | [`m`要素への回答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-February/056266.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-February/056266.html)） | WHATWGメーリングリスト | Nicholas Shanksによる`mark`案を含む名称候補と混同回避の議論、要素を維持する利用実態、Ian Hicksonによる採用判断。 | 2026-08-11 |
| 2008-02-17 | [WHATWG HTML commit `a1b2ff77`](../../raw/github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)） | 仕様コミット | `m`から`mark`への改名と関連性/強調用例の拡張。 | 2026-08-09 |

## 確度

**A**

現行`mark`の直接祖先`m`、改名、導入主体、意味の変更を要素単位の仕様コミットで直接確認できるため。

## 否定された仮説

紙の蛍光マーカーや`strong`から直接派生したという説明。確認できる直前祖先はHTML5草案の`m`であり、`strong`とは意味を区別している。

## 未解決

- 2005年4月2日後から4月13日までの`m`追加差分または提案者を示す公開記録はあるか。
