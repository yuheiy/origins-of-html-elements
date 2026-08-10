---
status: 完成
---

# `<picture>`

## 概要

Responsive Images Community Groupの提案とPicturefillを、HTML Working Groupのextension draftを経てWHATWG HTMLへ統合した要素である。

## 現在の意味

WHATWG HTML Living Standardでは、子の`img`が使う画像resourceを、pixel density、viewport size、画像format等に応じて選べるよう複数のsourceを提供するcontainerである。`picture`自体は表示されず、子要素を表す。[HTML Living Standard](../../raw/html-living-standard/embedded-content.html)（[公開版](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)、2026-08-09確認）

## HTMLへの導入

Responsive Images Community Groupは2012年に提案中の`picture` markupを動かすPicturefillを公開した。2013年のHTML Working Group草案は同Community Groupとの共同開発を明記し、2014年6月17日のWHATWG commitがupstreamの`picture`更新をHTML Living Standardへ統合した。[Picturefill](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/) [HTML WG草案](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/) [仕様commit](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)

導入理由は、resolution switching、art direction、breakpoint、画像format等に応じた複数sourceの選択を宣言的に行い、legacy user agentには`img`でfallbackすることだった。[要求文書](https://www.w3.org/TR/2013/WD-respimg-usecases-20130226/)

## HTML直前の祖先

Responsive Images Community Groupの`picture`提案と、同じmarkupを実行したPicturefillである。HTML Working Group草案は共同開発を、WHATWG commitはupstream統合を明記する。

## さらに上流の由来

### 証拠

2013年の要求文書は、当時使われていたcustom techniqueの欠点を標準化の動機として列挙するが、最終構文を特定の一手法から採用したとは述べない。

### 解釈

client-side workaroundを不要にするnativeな宣言的画像選択として標準化されたと解釈できる。

## 系譜

RICG `picture`提案／Picturefill（2012年） → HTML WG `picture` extension（2013年） → WHATWG HTML統合（2014年） → 現行HTML `picture`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2012-02-21 | [A sample picture implementation](../../raw/items/www.w3.org/6c497960b615f61f-a-sample-picture-implement.html)（[公開元](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)） | Community Group実装資料 | 提案中の`picture` markup、media query、`img` fallbackを実行するPicturefill。 | 2026-08-09 |
| 2013-02-26 | [*The picture element*](../../raw/w3c-html5-history/07cc38dfce7715c8-WD-html-picture-element-201.html)（[公開元](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)） | W3C First Public Working Draft | RICGとの共同開発と`picture`の構文・意味。 | 2026-08-09 |
| 2013-02-26 | [Responsive Images Use Cases](../../raw/w3c-html5-history/24ae26ed81a389ee-WD-respimg-usecases-201.html)（[公開元](https://www.w3.org/TR/2013/WD-respimg-usecases-20130226/)） | W3C First Public Working Draft | workaroundの欠点とresponsive imagesの標準化要求。 | 2026-08-09 |
| 2014-06-17 | [WHATWG HTML commit `a7716b7a`](../../raw/whatwg-html-history/66ad8afeef30633b-a7716b7a2463323c7f25176f4b3768008d1.html)（[公開元](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)） | 仕様commit | upstream `picture`更新のHTML Living Standardへの統合。 | 2026-08-09 |

## 確度

**A**

Community Groupの提案と実装、HTML Working Group草案、WHATWGへのupstream統合が要素単位で連続して確認できるため。

## 否定された仮説

`video`／`audio`の`source`から`picture`自体が派生したという説明。既存`source`を再利用したことは確認できるが、`picture`の採用元とする記録はない。

## 未解決

- `picture`という名称と最初のmarkupを提案した正確な議論またはcommitはどれか。
- WHATWG sourceへ要素本体を最初に置いたcommitはどれか。
- Picturefill以外のworkaroundから最終構文へ採用された個別機構はあるか。
