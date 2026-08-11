---
status: 完成
---

# `<audio>`

## 概要

`audio`は2007年3月23日、音声または音声ストリームを表し、`video`と共通のメディアAPIを持つ要素としてWHATWGへ追加された。翌月、従来の独立したWHATWG `Audio`インターフェースは`HTMLAudioElement`へ置換され、`new Audio()`も同要素を作るAPIとして残された。

## 現在の意味

WHATWG HTML Living Standardでは、音声または音声ストリームを表すメディア要素である。`video`と共通のメディアモデルを持つが、映像内容の再生領域は持たない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/media.html)（[公開版](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)、2026-08-09確認）

## HTMLへの導入

2007年3月15日の`video`導入議論では、複数人が`audio`要素も必要だと提起した一方、Ian Hicksonは既存`Audio`APIがあり、画面内の位置を必要としない音声を要素にする利用例は不明だと回答した。3月23日、Hicksonはリビジョン689で`audio`、`HTMLAudioElement`、ゲームの効果音という主用途、`video`と共通のメディアモデルを追加した。4月12日のリビジョン730は、従来の独立した`Audio`セクションを新しい`HTMLAudioElement`のために削除し、`Audio(src)`が`HTMLAudioElement`を構築するよう変更した。[追加コミット](../../raw/github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)（[公開元](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)） [置換コミット](../../raw/github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)（[公開元](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)）

## HTML直前の祖先

2004年からのWHATWG `Audio`コンストラクター／インターフェースである。リビジョン730は、独立した`Audio`オブジェクトを`HTMLAudioElement`へ置換し、既存の`new Audio()`という作成方法を要素へ接続したことを明記する。SMIL `audio`、HTML `object`、プラグイン、`bgsound`からの採用因果は確認できない。

## さらに上流の由来

### 証拠

リビジョン699は`audio`を音声または音声ストリームとして定義し、ゲームへ効果音を加える用途を挙げ、`video`と共通のメディア要素のAPIを与えている。リビジョン730は従来の`Audio`オブジェクトの機能を`HTMLAudioElement`へ統合した。

### 解釈

従来のスクリプト専用な音声オブジェクトを、文書内にも置けて`video`と共通メディアモデルを持つ要素へ統合しつつ、`new Audio()`の互換APIを残した設計と解釈できる。

## 系譜

WHATWG `Audio`コンストラクター／インターフェース（2004年〜）

→（独立セクションを`HTMLAudioElement`へ置換し`new Audio()`を接続）WHATWG `audio`（2007年） → 現行HTML `audio`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2007-03-15 | [“Video proposals”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)） | WHATWGメーリングリスト・編集者回答 | `audio`要素を求める意見と、既存`Audio`APIに対して要素の利用例を問う当時の回答。 | 2026-08-09 |
| 2007-03-23 | [WHATWG HTML commit `37bbc4fa`（revision 689）](../../raw/github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)（[公開元](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)） | 仕様コミット | `audio`、`HTMLAudioElement`、ゲームの効果音用途、既存メディアモデルの再利用。 | 2026-08-09 |
| 2007-03-29 | [*Web Applications 1.0*, revision 699](../../raw/platform.html5.org/history/webapps/r699.html)（[公開元](https://platform.html5.org/history/webapps/r699.html#audio)） | WHATWG保存仕様 | 音声または音声ストリームを表す定義、ゲームの効果音という用途、`video`との共通メディアAPI。 | 2026-08-09 |
| 2007-04-12 | [WHATWG HTML commit `82114971`（revision 730）](../../raw/github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)（[公開元](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)） | 仕様コミット | 独立した`Audio`セクションを`HTMLAudioElement`のために削除し、`Audio(src)`が`HTMLAudioElement`を構築するよう変更。 | 2026-08-09 |
| 2026-08-09 | [WHATWG HTML Living Standard, “The audio element”](../../raw/html.spec.whatwg.org/multipage/media.html)（[公開元](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)） | 現行仕様 | `audio`の現行定義。 | 2026-08-09 |

## 確度

**A**

具体的な先行`Audio`コンストラクター／インターフェースから`HTMLAudioElement`への置換と互換APIの接続を、要素単位の仕様コミットで直接確認できるため。

## 否定された仮説

`bgsound`、HTML `object`、SMIL `audio`、プラグイン埋め込みを直接祖先とする説明。用途や名称の類似、時間的な先行だけでは採用因果を示さない。既存WHATWG `Audio`APIとの接続はリビジョン730で確認できたため、否定対象から外した。

## 未解決

- 2007年3月15日から23日までに、要素の利用例を確立して編集判断を変えた提案または実装意見は残っているか。
