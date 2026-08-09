# HTML media要素の導入

## 調査範囲

`audio`, `video`, `source`, `track`について、WHATWGの保存草案、同時代のWHATWG mailing list、W3C HTML Working Draft、現行Living Standardを照合した。対象は「確認可能な初出」「導入時の要求」「HTML直前の具体的な祖先」を分離して評価する。閲覧日はすべて2026-08-09である。

## 結論

| 要素 | 確認可能な導入経路 | HTML直前の祖先 | 推奨確度 | 制約 |
|---|---|---|---|---|
| `video` | Operaの実験実装と2007-02-28の提案を受け、Ian Hicksonが2007-03-09に初期節、03-16にmedia APIを追加 | Opera実験版の`video`要素と添付提案 | A | Opera提案の添付本文は旧archive URLで取得できず、mail本文と編集者の採用回答を根拠とする |
| `audio` | Ian Hicksonが2007-03-23に`video`と共通のmedia modelを持つ要素として追加 | 未確認 | B | 既存WHATWG `Audio` APIから要素へ変えた因果と、追加を決めた議論は未確認 |
| `source` | Ian Hicksonが2007-03-23にvideo codec negotiationのため追加 | 未確認 | B | 具体的な先行markupまたは提案からの採用因果は未確認 |
| `track` | Ian Hicksonが2010-05-04にcaption対応の第1段階として追加し、7月に外部字幕・caption機構全体を説明 | 未確認 | B | 同時代の複数提案を調べて設計したことは確認できるが、特定の先行要素または形式から採用したとは確定できない |

## `video`

### 証拠

2007-02-28にOperaのAnne van Kesterenは、内部実験版で`video`要素を実装したと報告し、`Audio()`に似た`play()`, `pause()`, `stop()` APIを示した。提案は`object`のように動作しつつ、`img`が画像のsemanticsを持つのと同様にvideo固有のsemanticsを持つ要素だった。[Anne van Kesteren, “`<video>` element proposal”, WHATWG mailing list, 28 February 2007](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)

2007-03-15にIan Hicksonは`video`要素を基本機能付きで仕様へ追加したと報告し、Operaの要素とAPIを提案および実装経験を受けて追加したと明記した。同mailは、`object`では種類の判別が必要になるのに対してvideo固有のsemanticsを検索・accessibilityへ利用できること、pluginごとに異なるAPIではなくtimed mediaの共通APIを持てること、browser vendorから`object`のoverloadは難しいとのfeedbackがあったことを導入理由として採用している。[Ian Hickson, “Video proposals”, WHATWG mailing list, 15 March 2007](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)

WHATWG公式Git履歴では、Ian Hicksonが2007-03-09のrevision 674で未完成の`video`節を初めて追加し、03-16のrevision 678で`video`要素とplayback state、buffering、seeking、event等のmedia APIを本格的に追加したことを確認できる。[WHATWG HTML commit `845c40c8`, 9 March 2007](https://github.com/whatwg/html/commit/845c40c8035ddccb20301433b2f1225a1203e4de) [WHATWG HTML commit `753f385d`, 16 March 2007](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)

2007-03-29のWHATWG Web Applications 1.0 revision 699は、`video`をvideoまたはmovieを表すmedia elementとして定義し、著者が独自player UIを作るためのJavaScript APIを当時の主用途とした。[WHATWG, *Web Applications 1.0*, revision 699, 29 March 2007](https://platform.html5.org/history/webapps/r699.html#video)

### 解釈

確認できる系譜は`Operaの実験的video要素・提案 → WHATWG video`である。提案者のmail、実装経験、編集者による採用回答、直後の仕様を要素単位で対応づけられるためAを推奨する。導入要求は、pluginまたは汎用`object`に埋め込まれていたvideoをHTML上で識別可能にし、共通のscript APIとfallbackを持たせることだった。

### 否定された仮説

SMILにも`video`要素があるという指摘に対し、Ian HicksonはSMIL `video`はSMIL `ref`とsemantically equivalentであり、提案中のHTML `video`よりHTML `object`に近いと回答した。名称の一致だけから`SMIL video → HTML video`を結ばない。[Ian Hickson, “Video proposals”, 15 March 2007](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)

### 未解決

- Opera添付提案の完全な本文、実験実装のsource、実装日。
- Opera提案より前に同じ要素を実装または提案した資料と、Operaが名称・APIを選んだsource。

## `audio`

### 証拠

2007-03-15の`video`導入mailでは、複数人が同様の理由で`audio`要素も必要だと提起したのに対し、Ian Hicksonは既存の`Audio` APIがあり、soundは画面内の位置を必要としないため要素のuse caseは不明だと回答していた。[Ian Hickson, “Video proposals”, WHATWG mailing list, 15 March 2007](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)

Ian Hicksonによる2007-03-23のrevision 689は、commit messageで`audio`追加を明記し、`HTMLMediaElement`を継承する`HTMLAudioElement`、soundまたはaudio streamという定義、gameへsound effectを加える当時の主用途、`source`を使うcontent modelを追加した。[WHATWG HTML commit `37bbc4fa`, 23 March 2007](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)

2007-03-29保存草案も`audio`要素を収録し、soundまたはaudio streamを表すmedia elementと定義した。当時の主用途はgameへsound effectを加えることで、`video`と同じmedia element APIを共有していた。[WHATWG, *Web Applications 1.0*, revision 699, 29 March 2007](https://platform.html5.org/history/webapps/r699.html#audio)

### 解釈

2007-03-23の追加主体、日付、`video`と共通するmedia model、およびgame sound effectという導入時の要求は確認できる。しかし、編集者が当初疑問視した`audio`要素を追加へ転じた決定記録と、2004年から存在したWHATWG `Audio` interfaceを要素へ置換した因果は未確認である。具体的祖先からの因果を確定せずBを推奨する。

### 否定された仮説

`bgsound`、HTML `object`、SMIL `audio`、またはplugin埋め込みを、同用途または名称の類似だけで直接祖先とはしない。

### 未解決

- 2007-03-15から2007-03-23までに、要素のuse caseを確立した提案または実装feedback。
- 既存WHATWG `Audio` constructor/interfaceと`audio`要素の要素単位の継承関係。

## `source`

### 証拠

2007-03-16の`video`本格導入時にはresourceを単一の`src`属性で指定していた。[WHATWG HTML commit `753f385d`, 16 March 2007](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)

Ian Hicksonによる2007-03-23 07:07 UTCのrevision 687は、video codec negotiationのため`source`要素を追加した。差分はmedia elementの子となる`source`、複数候補を順に調べるresource selection、`src`、`type`、`media`を導入した。[WHATWG HTML commit `61af426a`, 23 March 2007](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)

2007-04-30のrevision 791は`source`要素を収録し、media elementへ複数のmedia resourceを指定するものと定義した。`src`にresource URL、`type`にdownload前のplayability判定を助けるMIME typeとcodec parameter、`media`にresourceの有用性を事前判定するmedia queryを持たせていた。[WHATWG, *Web Applications 1.0*, revision 791, 30 April 2007](https://platform.html5.org/history/webapps/r791.html#the-source)

2010-10-19のW3C HTML5 Working Draftも、`source`を`audio`／`video`の複数のalternative media resourceを指定し、`type`によって取得前に再生可否を判断できる要素として定義した。[W3C HTML Working Group, *HTML5: The source element*, Working Draft, 19 October 2010](https://www.w3.org/TR/2010/WD-html5-20101019/author/video.html#the-source-element)

2014-06-17にはResponsive Images Community Group由来の`picture`仕様がWHATWGへ統合され、既存`source`が画像候補にも拡張された。この後代の拡張は[`picture`の横断調査](modern-html-foreign-roots.md)で扱い、メディア用`source`の導入原因とはしない。[WHATWG HTML commit `a7716b7a`, 17 June 2014](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)

### 解釈

`video`の単一`src`方式から、codecや利用環境の異なる複数resourceを宣言しUAが選ぶ方式へ拡張されたことがcommitで直接確認できる。導入理由とHTML5内部の直前状態は確認できるが、特定の先行markup、実装、または提案を採用した記録は未確認なのでBを推奨する。確認できる仕様内の系譜は`video + src → video + source*`であり、`audio`は同日その後に追加され、導入時から`source`をcontent modelに含んだ。

### 否定された仮説

2014年のresponsive images用拡張から2007年のmedia用`source`が生まれたという時系列逆転、およびSMIL等の同名要素からの採用を、直接史料なしに結ばない。

### 未解決

- 複数format fallback、MIME type、media queryという三つの設計要求を提起したmailing-list threadまたはbrowser実装。
- SMILのmedia object source指定や既存plugin fallback構文を参照した記録の有無。

## `track`

### 証拠

2010-04-12のpublic-html threadには、`track`と`trackgroup`を`audio`／`video`内へ置き、外部trackとmedia file内のtrackを同じAPIで扱うchange proposalが存在した。ただしこの案は`track`をnon-emptyにし、将来その内部へ`source`を置く構想を含み、最終仕様と同一ではない。[Silvia Pfeiffer, “Re: Change Proposals toward Issue-9: how accessibility works for video is unclear”, W3C public-html, 12 April 2010](https://lists.w3.org/Archives/Public/public-html/2010Apr/0349.html)

Ian Hicksonによる2010-05-04のrevision 5067は、caption対応の第1段階として`track`要素を追加した。初版からmedia elementの子となるempty elementで、explicit external timed tracksを指定し、`kind`, `src`, `srclang`, `label`と`HTMLTrackElement`を持ち、kindはsubtitles、captions、descriptions、chapters、metadataを区別した。[WHATWG HTML commit `a183c899`, 4 May 2010](https://github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31)

2010-07-23にIan Hicksonは、HTML videoへ外部字幕とcaptionを加える仕組みを最近仕様へ追加したと報告した。設計時に多数のmail、blog、proposalを調べ、仕組みをmarkupからtimed trackへlinkする`track`要素、DOM API、簡潔なcaption format、処理modelの四部分で構成したと説明している。[Ian Hickson, “Timed tracks for `<video>`”, WHATWG mailing list archive, 23 July 2010](https://lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html)

2010-10-19のW3C HTML5 Working Draftは`track`をmedia elementの子となるempty elementとして収録し、外部timed trackを指定するものと定義した。`kind`はsubtitles、captions、descriptions、chapters、metadataを区別し、同草案は初期WebSRT resourceを参照した。[W3C HTML Working Group, *HTML5: The track element*, Working Draft, 19 October 2010](https://www.w3.org/TR/2010/WD-html5-20101019/author/video.html#the-track-element)

### 解釈

`track`はvideo accessibility、とくに外部字幕とcaptionをmarkupから関連づけ、表示・選択・script操作の共通modelを与える要求から導入された。April proposalとMayの仕様は同じ課題と要素名を共有するが、content modelなどが異なり、July mailも特定案を直接採用したとは述べない。導入主体、日付、理由は直接確認できる一方、具体的な直前祖先との因果は確定できないためBを推奨する。

### 否定された仮説

WebSRTは`track`と同時期に設計された外部timed-text formatであり、要素そのものの先行markup祖先とは確認できない。SRT、TTML、SMIL、April change proposalのいずれか一つから`track`が直接派生したとは、今回確認した史料だけでは断定しない。

### 未解決

- July 2010の設計が採否を検討した提案一覧と、最終`track`構文へ直接採用された項目。
- `trackgroup`を採用せず、emptyな`track`の列へまとめた決定記録。
- WebSRTからWebVTTへの改名と独立仕様化を、要素の系譜へどこまで含めるべきか。

## 現行定義との対応

現行Living Standardでは、`video`はvideoまたはmovie、およびcaption付きaudio fileの再生に使うmedia elementであり、`audio`はsoundまたはaudio streamを表す。両者は同じ`HTMLMediaElement` modelを共有するが、`audio`にはvisual contentのplayback areaがない。[WHATWG HTML Living Standard, `video` and `audio`](https://html.spec.whatwg.org/multipage/media.html#the-video-element)（2026-08-09確認）

現行`source`は`picture`では複数画像候補、`audio`／`video`では複数alternative media resourceを指定するempty elementである。[WHATWG HTML Living Standard, `source`](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)（2026-08-09確認）

現行`track`はmedia elementのexplicit external timed text trackを指定するempty elementで、subtitles、captions、descriptions、chapters、metadataを区別する。[WHATWG HTML Living Standard, `track`](https://html.spec.whatwg.org/multipage/media.html#the-track-element)（2026-08-09確認）

## 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2007-02-28 | “`<video>` element proposal” | WHATWG mailing list・実装提案 | Operaの内部実験実装、`Audio()`類似API、`object`型の埋め込みとvideo固有semanticsを組み合わせた提案 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html | 2026-08-09 |
| 2007-03-15 | “Video proposals” | WHATWG mailing list・編集者回答 | Operaの提案と実装経験を受けた`video`追加、固有semantics、共通API、`object`実装上の問題、SMILとの差 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html | 2026-08-09 |
| 2007-03-09 | WHATWG HTML commit `845c40c8`（revision 674） | 仕様commit | 未完成の`video`要素節の初回追加 | https://github.com/whatwg/html/commit/845c40c8035ddccb20301433b2f1225a1203e4de | 2026-08-09 |
| 2007-03-16 | WHATWG HTML commit `753f385d`（revision 678） | 仕様commit | `video`本体と共通media APIの本格導入 | https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10 | 2026-08-09 |
| 2007-03-23 | WHATWG HTML commit `61af426a`（revision 687） | 仕様commit | codec negotiation用`source`と複数resource selectionの追加 | https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52 | 2026-08-09 |
| 2007-03-23 | WHATWG HTML commit `37bbc4fa`（revision 689） | 仕様commit | `audio`、`HTMLAudioElement`、game sound effect用途、既存media modelの再利用 | https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c | 2026-08-09 |
| 2007-03-29 | *Web Applications 1.0*, revision 699 | WHATWG保存仕様 | `video`と`audio`の定義、導入時用途、共通media model | https://platform.html5.org/history/webapps/r699.html | 2026-08-09 |
| 2007-04-30 | *Web Applications 1.0*, revision 791 | WHATWG保存仕様 | 複数media resource、`src`、`type`、`media`を持つ`source` | https://platform.html5.org/history/webapps/r791.html | 2026-08-09 |
| 2010-04-12 | “Re: Change Proposals toward Issue-9” | W3C public-html・change proposal議論 | `track`／`trackgroup`案、外部・in-band trackの共通API、当時案のcontent model | https://lists.w3.org/Archives/Public/public-html/2010Apr/0349.html | 2026-08-09 |
| 2010-05-04 | WHATWG HTML commit `a183c899`（revision 5067） | 仕様commit | caption対応の第1段階としてemptyな`track`、5種のkind、`HTMLTrackElement`を追加 | https://github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31 | 2026-08-09 |
| 2010-07-23 | “Timed tracks for `<video>`” | WHATWG mailing list・編集者説明 | 外部字幕・captionの導入要求、`track`、DOM API、caption format、処理modelからなる追加 | https://lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html | 2026-08-09 |
| 2010-10-19 | *HTML5: The video element* | W3C Working Draft | `audio`, `video`, `source`, `track`とtimed track modelの同時代定義 | https://www.w3.org/TR/2010/WD-html5-20101019/author/video.html | 2026-08-09 |
| 2014-06-17 | WHATWG HTML commit `a7716b7a` | 仕様commit | `picture`と画像用`source`の後代統合 | https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204 | 2026-08-09 |
| 2026-08-09 | WHATWG HTML Living Standard | 現行仕様 | 4要素の現行定義とmedia model | https://html.spec.whatwg.org/multipage/media.html / https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element | 2026-08-09 |

## 調査記録

WHATWG mailing listの2007年`video` thread、WHATWG公式Gitへ移行されたrevision 674、678、687、689、5067、2007年3月・4月の保存草案、2010年のW3C video accessibility議論、WHATWG editorによるtimed track説明、2010年10月のW3C Working Draft、現行Living Standardを確認した。`video`は提案・実装から採用への因果を確認できた。`audio`と`source`は追加revision、主体、導入時の意味を固定できたが、HTML外の直接祖先は確定できなかった。`track`は追加revision、導入要求、同時代案を確認できたが、最終構文を特定案から採用した因果は未確認のまま残した。
