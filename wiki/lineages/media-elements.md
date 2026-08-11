---
status: 完成
---

# WHATWGメディア要素の共有モデル

## `video`と共通メディアAPI

Operaは2007年2月、実験実装を伴う`video`をWHATWGへ提案した。編集者はこの提案と実装経験を受け、映像固有の意味と時間指定メディアの共通APIを持つ`video`を導入した。[Operaの提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)） [編集者の回答](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)） [`video`導入コミット](../../raw/github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)（[公開元](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)）

同年3月、`audio`が`video`と共通のメディアモデルを使う要素として追加され、4月には従来の独立したWHATWG `Audio`インターフェースが`HTMLAudioElement`へ置換された。[`audio`導入コミット](../../raw/github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)（[公開元](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)） [`Audio`置換コミット](../../raw/github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)（[公開元](https://github.com/whatwg/html/commit/8211497160124b53938eab1f94725a80b28a305f)）

## 複数リソース

単一`src`版`video`は、コーデック選択のため同月に複数の`source`を使うモデルへ拡張され、`audio`も同じ子要素を使う共通メディアモデルへ統合された。[`source`導入コミット](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)）

対象: [`video`](../elements/video.md)、[`audio`](../elements/audio.md)、[`source`](../elements/source.md)

```text
Opera実験video → WHATWG video＋共通メディアAPI
WHATWG Audio API → HTMLAudioElement
単一src版video → sourceによる複数リソース選択
```

## 接続しない境界

Operaの`video`実装を`audio`と`source`の共通祖先とはしない。各要素には別の直接祖先または設計入力があり、共有するのはWHATWG内で統合されたメディアモデルである。`track`はSilvia Pfeifferの`itext`提案を個別の設計入力として後からこのモデルへ加わった単一要素の系譜なので、共有系譜ページの対象に含めない。
