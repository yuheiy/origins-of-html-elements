# `<audio>`

> 状態: 完成

## 概要

`audio`は2007年3月23日、soundまたはaudio streamを表し、`video`と共通のmedia APIを持つ要素としてWHATWGへ追加された。追加へ至る決定記録とHTML直前の具体的祖先は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、soundまたはaudio streamを表すmedia elementである。`video`と共通のmedia modelを持つが、visual contentのplayback areaは持たない。[一次定義](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)（2026-08-09確認）

## HTMLへの導入

2007年3月15日の`video`導入議論では、複数人が`audio`要素も必要だと提起した一方、Ian Hicksonは既存`Audio` APIがあり、画面内の位置を必要としないsoundを要素にするuse caseは不明だと回答した。3月23日、Hicksonはrevision 689で`audio`、`HTMLAudioElement`、gameのsound effectという主用途、`video`と共通のmedia modelを追加した。追加へ転じた決定記録は未確認である。

## HTML直前の祖先

未確認。2004年からのWHATWG `Audio` interface、同時代のSMIL `audio`、HTML `object`、plugin、`bgsound`を探索候補としたが、いずれかから要素を採用した因果関係は確認できない。

## さらに上流の由来

### 証拠

revision 699は`audio`をsoundまたはaudio streamとして定義し、gameへsound effectを加える用途を挙げ、`video`と共通のmedia element APIを与えている。

### 解釈

`video`と同時期にtimed mediaの共通modelへ組み込まれたことは確認できるが、既存`Audio` APIから要素へ変えた経路は史料上つながらない。

## 系譜

WHATWG Web Applications 1.0 `audio`（2007年、具体的祖先は未確認） → 現行HTML `audio`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2007-03-15 | “Video proposals” | WHATWG mailing list・編集者回答 | `audio`要素を求める意見と、既存`Audio` APIに対して要素のuse caseを問う当時の回答。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html) | 2026-08-09 |
| 2007-03-23 | WHATWG HTML commit `37bbc4fa`（revision 689） | 仕様commit | `audio`、`HTMLAudioElement`、game sound effect用途、既存media modelの再利用。 | [一次資料](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c) | 2026-08-09 |
| 2007-03-29 | *Web Applications 1.0*, revision 699 | WHATWG保存仕様 | soundまたはaudio streamを表す定義、gameのsound effectという用途、`video`との共通media API。 | [一次資料](https://platform.html5.org/history/webapps/r699.html#audio) | 2026-08-09 |
| 2026-08-09 | WHATWG HTML Living Standard, “The audio element” | 現行仕様 | `audio`の現行定義。 | [一次資料](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) | 2026-08-09 |

## 確度

**B**

導入時の意味、用途、`video`との共通設計modelは確認できるが、具体的な先行物から`audio`要素を採用した因果関係は確認できないため。

## 否定された仮説

`bgsound`、HTML `object`、SMIL `audio`、plugin埋め込み、既存WHATWG `Audio` APIのいずれかを直接祖先とする説明。用途や名称の類似、時間的な先行だけでは採用因果を示さない。

## 未解決

- 2007年3月15日から23日までに要素のuse caseを確立した提案または実装feedbackはあるか。
- 既存WHATWG `Audio` constructor/interfaceと`audio`要素の継承関係を直接示す史料はあるか。
