---
status: 完成
---

# `<audio>`

## 概要

`audio`は、ゲーム等のWebアプリケーションで効果音を再生するスクリプト専用のWHATWG `Audio`案を、文書内にも置ける`video`共通メディア要素へ統合したものである。構想は2004年7月21日後〜9月23日までに現れ、12月8日までに正式なインターフェースとなった。特定の外部メディア語彙やブラウザー実装からの採用は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、音声または音声ストリームを表すメディア要素である。`video`と共通のメディアモデルを持つが、映像内容の再生領域は持たない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/media.html)（[公開版](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)、2026-08-09確認）

## HTMLへの導入

2004年7月21日版に`Audio`はなく、9月23日版の将来案に`new Audio("explosion.wav")`と再生・反復を行うsound APIが現れ、12月8日版はこれをマークアップ要素を持たない正式な`Audio`インターフェースへ具体化した。2007年3月15日の`video`導入議論では、複数人が`audio`要素も必要だと提起した一方、Ian Hicksonは既存`Audio`APIがあり、画面内の位置を必要としない音声を要素にする利用例は不明だと回答した。3月23日、Hicksonはリビジョン689で`audio`、`HTMLAudioElement`、ゲームの効果音という主用途、`video`と共通のメディアモデルを追加した。4月12日のリビジョン730は、従来の独立した`Audio`セクションを新しい`HTMLAudioElement`のために削除し、`Audio(src)`が`HTMLAudioElement`を構築するよう変更した。[2004年7月版](../../raw/web.archive.org/web/20040803041815id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20040803041815id_/http://whatwg.org/specs/web-apps/current-work/)） [2004年9月版](../../raw/web.archive.org/web/20041009144718id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041009144718id_/http://whatwg.org/specs/web-apps/current-work/)） [2004年12月版](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)） [追加コミット](../../raw/github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)（[公開元](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)） [置換コミット](../../raw/github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)（[公開元](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)）

## HTML直前の祖先

2004年9月版で構想され、12月版で正式化されたWHATWG `Audio`コンストラクター／インターフェースである。9月版は爆発音ファイルを例にスクリプトから再生・反復するAPIを示し、12月版は複数クリップの混合と、対応するマークアップ要素がないことを明記した。リビジョン730は、この独立した`Audio`オブジェクトを`HTMLAudioElement`へ置換し、既存の`new Audio()`という作成方法を要素へ接続した。SMIL `audio`、HTML `object`、プラグイン、`bgsound`からの採用因果は確認できない。[2004年9月版](../../raw/web.archive.org/web/20041009144718id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041009144718id_/http://whatwg.org/specs/web-apps/current-work/)） [2004年12月版](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)） [`Audio`置換コミット](../../raw/github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)（[公開元](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)）

## さらに上流の由来

### 証拠

2004年9月版は爆発音を例にしたsound APIを示し、12月版はゲーム等を対象Webアプリケーションに挙げて、スクリプトから複数の音声クリップを混合して再生する`Audio`を規定した。リビジョン699は`audio`を音声または音声ストリームとして定義し、ゲームへ効果音を加える用途を挙げ、`video`と共通のメディア要素のAPIを与えている。リビジョン730は従来の`Audio`オブジェクトの機能を`HTMLAudioElement`へ統合した。[2004年9月版](../../raw/web.archive.org/web/20041009144718id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041009144718id_/http://whatwg.org/specs/web-apps/current-work/)） [2004年12月版](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)） [revision 699](../../raw/platform.html5.org/history/webapps/r699.html)（[公開元](https://platform.html5.org/history/webapps/r699.html#audio)） [置換コミット](../../raw/github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)（[公開元](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)）

### 解釈

ブラウザーゲーム等が必要とする短い効果音の再生をスクリプト専用オブジェクトとして始め、文書内の音声コンテンツも扱える要素へ広げながら`new Audio()`を残した設計と解釈できる。ゲーム音声はHTML外のソフトウェア用途として確認できるが、特定のゲームエンジンや音声APIを祖先とはしない。

## 系譜

WHATWG sound API構想（2004年9月） → `Audio`コンストラクター／インターフェース（2004年12月）

→（独立セクションを`HTMLAudioElement`へ置換し`new Audio()`を接続）WHATWG `audio`（2007年） → 現行HTML `audio`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-07-21（2004-08-03保存） | [*Web Applications Markup Language 1.0*](../../raw/web.archive.org/web/20040803041815id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20040803041815id_/http://whatwg.org/specs/web-apps/current-work/)） | WHATWG草案の同時代保存版 | `Audio`またはsound APIを含まず、初出区間の下限を示す。 | 2026-08-12 |
| 2004-09-23（2004-10-09保存） | [*Web Applications 1.0* 将来案](../../raw/web.archive.org/web/20041009144718id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041009144718id_/http://whatwg.org/specs/web-apps/current-work/)） | WHATWG草案の同時代保存版 | 爆発音ファイルを`new Audio()`で作り、再生・反復するsound API構想。 | 2026-08-12 |
| 2004-12-08（2004-12-10保存） | [*Web Applications 1.0*, “Sound”](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/)） | WHATWG草案の同時代保存版 | ゲームを対象Webアプリケーションに挙げ、マークアップを持たずスクリプトで音声クリップを再生・混合する`Audio`を定義。 | 2026-08-12 |
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

- 2007年3月15日から23日までに、`Audio`をマークアップ要素へ広げる編集判断を変えた提案または実装意見は残っているか。
- 2004年7月21日後〜9月23日の`Audio`構想を提案した人物、議論、参照したブラウザー実装・ゲーム音声APIはあるか。
