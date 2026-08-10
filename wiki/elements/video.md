---
status: 完成
---

# `<video>`

## 概要

`video`は2007年、Operaの実験実装と提案を受けてWHATWGへ導入された。video固有のsemantics、timed mediaの共通API、fallbackを汎用`object`やpluginに依存せず提供することが目的だった。

## 現在の意味

WHATWG HTML Living Standardでは、videoまたはmovie、およびcaption付きaudio fileの再生に使うmedia elementである。内容は非対応browser向けfallbackであり、accessibility用代替には`track`や近接するtranscript等を使う。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/media.html)（[公開版](https://html.spec.whatwg.org/multipage/media.html#the-video-element)、2026-08-09確認）

## HTMLへの導入

2007年2月28日、OperaのAnne van Kesterenが内部実験版で実装した`video`要素をWHATWGへ提案した。WHATWG editor Ian Hicksonは3月9日のrevision 674で未完成の節を追加し、3月15日にOperaの提案と実装経験を受けた追加だと説明し、3月16日のrevision 678で要素とmedia APIを本格的に導入した。

## HTML直前の祖先

Operaの実験的`video`要素とWHATWGへの提案。提案者のmailが実装と構文を示し、編集者の回答がその提案と実装経験を受けた仕様追加を明記する。

## さらに上流の由来

### 証拠

導入議論は、pluginや汎用`object`ではvideoを種類として識別しにくく、pluginごとにAPIが異なる問題を挙げ、`img`と同様にmedia固有のsemanticsを持つ要素とtimed mediaの共通APIを要求した。

### 解釈

plugin／`object`中心のvideo埋め込みを、HTML上で識別可能な専用要素と共通script APIへ置き換える設計と解釈できる。

## 系譜

Operaの実験的`video`要素・提案（2007年） → WHATWG Web Applications 1.0 `video`（2007年） → 現行HTML `video`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2007-02-28 | [“`<video>` element proposal”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)） | WHATWG mailing list・実装提案 | Operaの内部実験実装、`Audio()`に似たAPI、`object`型の埋め込みとvideo固有semanticsを組み合わせた提案。 | 2026-08-09 |
| 2007-03-09 | [WHATWG HTML commit `845c40c8`（revision 674）](../../raw/github.com/whatwg/html/commit/845c40c8035ddccb20301433b2f1225a1203e4de)（[公開元](https://github.com/whatwg/html/commit/845c40c8035ddccb20301433b2f1225a1203e4de)） | 仕様commit | 未完成の`video`要素節の初回追加。 | 2026-08-09 |
| 2007-03-15 | [“Video proposals”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)） | WHATWG mailing list・編集者回答 | Operaの提案と実装経験を受けた仕様追加、固有semantics、共通API、`object`実装上の問題、SMILとの差。 | 2026-08-09 |
| 2007-03-16 | [WHATWG HTML commit `753f385d`（revision 678）](../../raw/github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)（[公開元](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)） | 仕様commit | `video`本体と共通media APIの本格導入。 | 2026-08-09 |
| 2007-03-29 | [*Web Applications 1.0*, revision 699](../../raw/platform.html5.org/history/webapps/r699.html)（[公開元](https://platform.html5.org/history/webapps/r699.html#video)） | WHATWG保存仕様 | videoまたはmovieを表すmedia element、fallback、共通media API、当時の主用途。 | 2026-08-09 |
| 2026-08-09 | [WHATWG HTML Living Standard, “The video element”](../../raw/html.spec.whatwg.org/multipage/media.html)（[公開元](https://html.spec.whatwg.org/multipage/media.html#the-video-element)） | 現行仕様 | `video`の現行定義。 | 2026-08-09 |

## 確度

**A**

要素単位の提案と実験実装からWHATWG仕様へ追加した因果関係を、提案者と編集者の同時代mailおよび直後の仕様で確認できるため。

## 否定された仮説

SMIL `video`をHTML `video`の直接祖先とする説明。Ian HicksonはSMIL `video`がSMIL `ref`とsemantically equivalentで、提案中のHTML `video`よりHTML `object`に近いと回答しているため、同名だけでは接続しない。

## 未解決

- Opera添付提案の完全な本文、実験実装のsource、実装日は確認できるか。
- Operaが`video`という名称とAPIを選んだ、さらに上流のsourceはあるか。
