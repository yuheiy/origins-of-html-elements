---
status: 完成
---

# WHATWGメディア要素の共有モデル

## `video`と共通メディアAPI

Operaは2007年2月、実験実装を伴う`video`をWHATWGへ提案した。編集者はこの提案と実装経験を受け、映像固有の意味と時間指定メディアの共通APIを持つ`video`を導入した。[Operaの提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)） [編集者の回答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)） [`video`導入コミット](../../raw/github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)（[公開元](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)）

同年3月、`audio`が`video`と共通のメディアモデルを使う要素として追加され、4月には従来の独立したWHATWG `Audio`インターフェースが`HTMLAudioElement`へ置換された。[`audio`導入コミット](../../raw/github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)（[公開元](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)） [`Audio`置換コミット](../../raw/github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)（[公開元](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)）

## リソースと時間指定トラック

単一`src`版`video`は、コーデック選択のため同月に複数の`source`を使うモデルへ拡張された。2010年にはSilvia Pfeifferの`itext`提案を直接の設計入力として、外部字幕、キャプション、説明、章、メタデータを関連づける`track`が加わった。[`source`導入コミット](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)） [`track`導入コミット](../../raw/github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31)（[公開元](https://github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31)） [`itext`との比較](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html)）

対象: [`video`](../elements/video.md)、[`audio`](../elements/audio.md)、[`source`](../elements/source.md)、[`track`](../elements/track.md)

```text
Opera実験video → WHATWG video＋共通メディアAPI
WHATWG Audio API → HTMLAudioElement
単一src版video → sourceによる複数リソース選択
Pfeiffer itext提案 → track
```

## 接続しない境界

Operaの`video`実装を`audio`、`source`、`track`すべての共通祖先とはしない。各要素には別の直接祖先または設計入力があり、共有するのはWHATWG内で統合されたメディアモデルである。SRTからWebVTTへの系譜は`track`が参照する形式の別枝であり、要素そのものの祖先ではない。
