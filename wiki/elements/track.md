# `<track>`

> 状態: 2010年の外部字幕・caption機構としての導入を検証済み（特定の先行案からの採用因果は未確認）

## 概要

`track`は2010年、media elementへ外部字幕、caption、description、chapter、metadataを関連づけるtimed track機構として導入された。同時代の複数案を踏まえたことは確認できるが、特定案を直接祖先とは確定できない。

## 現在の意味

WHATWG HTML Living Standardでは、media elementの明示的な外部timed text trackを指定する、内容を持たない要素である。`kind`でsubtitles、captions、descriptions、chapters、metadataを区別する。[一次定義](https://html.spec.whatwg.org/multipage/media.html#the-track-element)（2026-08-09確認）

## HTMLへの導入

2010年5月4日、WHATWG editor Ian Hicksonはrevision 5067でcaption対応の第1段階として`track`を追加した。初版からmedia elementの子となるempty elementで、5種類の`kind`と`HTMLTrackElement`を持っていた。7月23日には、多数のmail、blog、proposalを調べ、`track`、DOM API、簡潔なcaption format、処理modelの四部分として設計したと説明している。

## HTML直前の祖先

未確認。2010年4月には`track`／`trackgroup`を使うchange proposalが存在したが、non-emptyな`track`や内部`source`構想など最終仕様と異なる。7月の仕様がこの案を直接採用したとは確認できない。

## さらに上流の由来

### 証拠

導入時の編集者説明は、video accessibility、とくに外部字幕とcaptionをmarkupから関連づけ、DOM、caption format、処理modelを一体として定義する要求を示す。2010年4月案は外部trackとmedia file内のtrackを同じAPIで扱う要求を示す。

### 解釈

既存の字幕・caption・timed metadataをmedia elementへ関連づけ、表示、選択、script操作を共通化するHTML機構として導入されたと解釈できる。ただし、特定の形式または提案からの派生は確定しない。

## 系譜

WHATWG HTML5 `track`（2010年、具体的祖先は未確認） → 現行HTML `track`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2010-04-12 | “Re: Change Proposals toward Issue-9” | W3C public-html・change proposal議論 | `track`／`trackgroup`案、外部・in-band trackの共通API、当時案のcontent model。 | [一次資料](https://lists.w3.org/Archives/Public/public-html/2010Apr/0349.html) | 2026-08-09 |
| 2010-05-04 | WHATWG HTML commit `a183c899`（revision 5067） | 仕様commit | caption対応の第1段階としてemptyな`track`、5種類の`kind`、`HTMLTrackElement`を追加。 | [一次資料](https://github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31) | 2026-08-09 |
| 2010-07-23 | “Timed tracks for `<video>`” | WHATWG mailing list・編集者説明 | 外部字幕・captionの導入要求と、`track`、DOM API、caption format、処理modelからなる追加。 | [一次資料](https://lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html) | 2026-08-09 |
| 2010-10-19 | *HTML5: The track element* | W3C Working Draft | 外部timed trackを指定するempty elementと、5種類の`kind`、初期WebSRTとの関係。 | [一次資料](https://www.w3.org/TR/2010/WD-html5-20101019/author/video.html#the-track-element) | 2026-08-09 |
| 2026-08-09 | WHATWG HTML Living Standard, “The track element” | 現行仕様 | `track`の現行定義。 | [一次資料](https://html.spec.whatwg.org/multipage/media.html#the-track-element) | 2026-08-09 |

## 確度

**B**

導入理由と設計modelは編集者の同時代説明で確認できるが、具体的な先行要素、提案、形式から採用した因果関係は確認できないため。

## 否定された仮説

SRT、WebSRT、TTML、SMIL、または2010年4月のchange proposalのいずれか一つを直接祖先とする説明。WebSRTは同時期に設計されたformatであり、4月案は最終仕様と異なるため、直接採用を示す史料なしには接続しない。

## 未解決

- 2010年7月の設計が検討した提案一覧と、最終構文へ直接採用した項目は確認できるか。
- `trackgroup`を採用せず、emptyな`track`の列へまとめた決定記録はあるか。
- WebSRTからWebVTTへの改名と独立仕様化を、要素の系譜へどこまで含めるべきか。

## 調査記録

2010年のW3C video accessibility議論、revision 5067、WHATWG editorによるtimed track説明、同年10月のW3C Working Draft、現行Living Standardを確認した。SRT、WebSRT、TTML、SMILおよび4月案を検討したが、いずれか一つからの採用因果は確認できなかった。横断比較は[HTML media要素の調査ノート](../research/media-elements.md)を参照する。
