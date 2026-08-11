---
status: 完成
---

# `<track>`

## 概要

`track`は2010年、メディア要素へ外部字幕、キャプション、説明、章、メタデータを関連づける時間指定トラック機構として導入された。編集者はSilvia Pfeifferの`itext`提案が「現在の`track`とほぼ同じ」と説明し、採用・改名した属性と見送った機能を項目別に記録している。

## 現在の意味

WHATWG HTML Living Standardでは、メディア要素の明示的な外部時間同期テキストトラックを指定する、内容を持たない要素である。`kind`で字幕、キャプション、音声解説、章、メタデータを区別する。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/media.html)（[公開版](https://html.spec.whatwg.org/multipage/media.html#the-track-element)、2026-08-09確認）

## HTMLへの導入

2010年5月4日、WHATWGエディターIan Hicksonはリビジョン5067でキャプション対応の第1段階として`track`を追加した。初版からメディア要素の子となる空要素で、5種類の`kind`と`HTMLTrackElement`を持っていた。7月23日の説明では、多数のメール、ブログ、提案を調査したうえで、Pfeifferの時刻同期リソース用`itext`が「現在の`track`とほぼ同じ」と述べ、`category`を`kind`、`language`を`srclang`へ改名して採用し、`default`は当時見送ったことを項目別に示した。[編集者説明](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html)）

## HTML直前の祖先

Silvia Pfeifferが2009年7月に提案した、時刻同期テキスト資源を`video`へ関連付ける共通`itext`要素である。Hicksonは2010年7月、現在の`track`がその提案と「ほぼ同じ」と述べ、属性ごとの採否を説明した。2010年4月の別の`track`／`trackgroup`変更提案は、空でない`track`や内部`source`構想など最終仕様と異なり、直接採用は確認できない。

## さらに上流の由来

### 証拠

導入時の編集者説明は、映像アクセシビリティ、とくに外部字幕とキャプションをマークアップから関連づけ、DOM、キャプション形式、処理モデルを一体として定義する要求を示す。`itext`から共通要素、言語、分類の設計を採り、別枝のキャプション形式は既存SRTを基礎にした。2010年12月25日にWebSRTをWebVTTへ改名し、2011年11月28日にWebVTT本文をHTML仕様から独立仕様へ分離した。

### 解釈

`itext`提案を直接の要素設計上の先行案とし、SRTを別枝のキャプション形式上の先行技術として組み合わせ、表示、選択、スクリプト操作を共通化したHTML機構と解釈できる。WebSRT／WebVTTは`track`が参照する形式の系譜であり、要素そのものの祖先とはしない。

## 系譜

Silvia Pfeiffer `itext`提案（2009年）

→（編集者が「現在の`track`とほぼ同じ」と説明）WHATWG HTML5 `track`（2010年） → 現行HTML `track`

別枝: SRT → WebSRT → WebVTT（2010年12月改名） → HTMLから独立仕様へ分離（2011年11月）

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2010-04-12 | [“Re: Change Proposals toward Issue-9”](../../raw/lists.w3.org/Archives/Public/public-html/2010Apr/0349.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2010Apr/0349.html)） | W3C public-html・変更提案議論 | `track`／`trackgroup`案、外部トラックと帯域内トラックの共通API、当時案の内容モデル。 | 2026-08-09 |
| 2010-05-04 | [WHATWG HTML commit `a183c899`（revision 5067）](../../raw/github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31)（[公開元](https://github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31)） | 仕様コミット | キャプション対応の第1段階として空な`track`、5種類の`kind`、`HTMLTrackElement`を追加。 | 2026-08-09 |
| 2010-07-23（引用された`itext`提案は2009-07-31） | [“Timed tracks for `<video>`”](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2010Jul/0449.html)） | WHATWGメーリングリスト・編集者説明 | 外部字幕・キャプションの導入要求、`itext`と`track`の直接関係、`category`→`kind`、`language`→`srclang`など提案項目の採否、SRTを基礎にしたキャプション形式。 | 2026-08-09 |
| 2010-10-19 | [*HTML5: The track element*](../../raw/www.w3.org/TR/2010/WD-html5-20101019/author/video.html)（[公開元](https://www.w3.org/TR/2010/WD-html5-20101019/author/video.html#the-track-element)） | W3C Working Draft | 外部時間指定トラックを指定する空要素と、5種類の`kind`、初期WebSRTとの関係。 | 2026-08-09 |
| 2010-12-25 | [WHATWG HTML commit `155b9a55`](../../raw/github.com/whatwg/html/commit/155b9a55416464e4e80f848b9daf53bc1b7f41f4)（[公開元](https://github.com/whatwg/html/commit/155b9a55416464e4e80f848b9daf53bc1b7f41f4)） | 仕様コミット | WebSRTをWebVTTへ改名。 | 2026-08-09 |
| 2011-11-28 | [WHATWG HTML commit `5e99b278`](../../raw/github.com/whatwg/html/commit/5e99b278578b666141bc487c77b8d5c56669a30b)（[公開元](https://github.com/whatwg/html/commit/5e99b278578b666141bc487c77b8d5c56669a30b)） | 仕様コミット | WebVTT本文をHTML仕様から除き、独立WebVTT仕様を参照する構成へ変更。 | 2026-08-09 |
| 2026-08-09 | [WHATWG HTML Living Standard, “The track element”](../../raw/html.spec.whatwg.org/multipage/media.html)（[公開元](https://html.spec.whatwg.org/multipage/media.html#the-track-element)） | 現行仕様 | `track`の現行定義。 | 2026-08-09 |

## 確度

**A**

具体的な`itext`提案から`track`への関係と、属性ごとの採用・改名・見送りを編集者の同時代説明で直接確認できるため。

## 否定された仮説

SRT、WebSRT、TTML、SMIL、または2010年4月の変更提案を`track`要素そのものの直接祖先とする説明。SRTはキャプション形式枝の基礎であり、4月案は最終仕様と異なる。`itext`については編集者が直接の関係を説明したため、否定対象から外した。

## 未解決

- 2010年4月案の`trackgroup`を採用せず、空な`track`の列へまとめた決定記録は残っているか。
