---
status: 完成
---

# `<audio>`

## 概要

`audio`は2007年3月23日、soundまたはaudio streamを表し、`video`と共通のmedia APIを持つ要素としてWHATWGへ追加された。翌月、従来の独立したWHATWG `Audio` interfaceは`HTMLAudioElement`へ置換され、`new Audio()`も同要素を作るAPIとして残された。

## 現在の意味

WHATWG HTML Living Standardでは、soundまたはaudio streamを表すmedia elementである。`video`と共通のmedia modelを持つが、visual contentのplayback areaは持たない。[HTML Living Standard](../../raw/html-living-standard/media.html)（[公開版](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)、2026-08-09確認）

## HTMLへの導入

2007年3月15日の`video`導入議論では、複数人が`audio`要素も必要だと提起した一方、Ian Hicksonは既存`Audio` APIがあり、画面内の位置を必要としないsoundを要素にするuse caseは不明だと回答した。3月23日、Hicksonはrevision 689で`audio`、`HTMLAudioElement`、gameのsound effectという主用途、`video`と共通のmedia modelを追加した。4月12日のrevision 730は、従来の独立した`Audio` sectionを新しい`HTMLAudioElement`のために削除し、`Audio(src)`が`HTMLAudioElement`を構築するよう変更した。[追加commit](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c) [置換commit](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)

## HTML直前の祖先

2004年からのWHATWG `Audio` constructor／interfaceである。revision 730は、独立した`Audio` objectを`HTMLAudioElement`へ置換し、既存の`new Audio()`という作成方法を要素へ接続したことを明記する。SMIL `audio`、HTML `object`、plugin、`bgsound`からの採用因果は確認できない。

## さらに上流の由来

### 証拠

revision 699は`audio`をsoundまたはaudio streamとして定義し、gameへsound effectを加える用途を挙げ、`video`と共通のmedia element APIを与えている。revision 730は従来の`Audio` objectの機能を`HTMLAudioElement`へ統合した。

### 解釈

従来のscript-onlyなsound objectを、document内にも置けて`video`と共通media modelを持つ要素へ統合しつつ、`new Audio()`の互換APIを残した設計と解釈できる。

## 系譜

WHATWG `Audio` constructor／interface（2004年〜）

→（独立sectionを`HTMLAudioElement`へ置換し`new Audio()`を接続）WHATWG `audio`（2007年） → 現行HTML `audio`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2007-03-15 | [“Video proposals”](../../raw/items/lists.whatwg.org/c974dc225232cb7c-052433.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)） | WHATWG mailing list・編集者回答 | `audio`要素を求める意見と、既存`Audio` APIに対して要素のuse caseを問う当時の回答。 | 2026-08-09 |
| 2007-03-23 | [WHATWG HTML commit `37bbc4fa`（revision 689）](../../raw/whatwg-html-history/2cbafc204365f408-37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2.html)（[公開元](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)） | 仕様commit | `audio`、`HTMLAudioElement`、game sound effect用途、既存media modelの再利用。 | 2026-08-09 |
| 2007-03-29 | [*Web Applications 1.0*, revision 699](../../raw/whatwg-web-apps-history/167cb993a954cee1-r699.html)（[公開元](https://platform.html5.org/history/webapps/r699.html#audio)） | WHATWG保存仕様 | soundまたはaudio streamを表す定義、gameのsound effectという用途、`video`との共通media API。 | 2026-08-09 |
| 2007-04-12 | [WHATWG HTML commit `82114971`（revision 730）](../../raw/whatwg-html-history/b6a9db9141408750-8211497160124b53938eab1f94725a80b28.html)（[公開元](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)） | 仕様commit | 独立した`Audio` sectionを`HTMLAudioElement`のために削除し、`Audio(src)`が`HTMLAudioElement`を構築するよう変更。 | 2026-08-09 |
| 2026-08-09 | [WHATWG HTML Living Standard, “The audio element”](../../raw/html-living-standard/media.html)（[公開元](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)） | 現行仕様 | `audio`の現行定義。 | 2026-08-09 |

## 確度

**A**

具体的な先行`Audio` constructor／interfaceから`HTMLAudioElement`への置換と互換APIの接続を、要素単位の仕様commitで直接確認できるため。

## 否定された仮説

`bgsound`、HTML `object`、SMIL `audio`、plugin埋め込みを直接祖先とする説明。用途や名称の類似、時間的な先行だけでは採用因果を示さない。既存WHATWG `Audio` APIとの接続はrevision 730で確認できたため、否定対象から外した。

## 未解決

- 2007年3月15日から23日までに、要素のuse caseを確立して編集判断を変えた提案または実装feedbackは残っているか。
