---
status: 完成
---

# `<picture>`

## 概要

Responsive Images Community Groupの提案とPicturefillを、HTML Working Groupの拡張草案を経てWHATWG HTMLへ統合した要素である。

## 現在の意味

WHATWG HTML Living Standardでは、子の`img`が使う画像リソースを、画素密度、ビューポートの寸法、画像形式等に応じて選べるよう複数のソースを提供するコンテナーである。`picture`自体は表示されず、子要素を表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/embedded-content.html)（[公開版](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)、2026-08-09確認）

## HTMLへの導入

Responsive Images Community Groupは2012年に提案中の`picture` マークアップを動かすPicturefillを公開した。2013年のHTML Working Group草案は同Community Groupとの共同開発を明記し、2014年6月17日のWHATWGコミットが上流の`picture`更新をHTML Living Standardへ統合した。[Picturefill](../../raw/www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/index.html)（[公開元](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)） [HTML WG草案](../../raw/www.w3.org/TR/2013/WD-html-picture-element-20130226/index.html)（[公開元](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)） [仕様コミット](../../raw/github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)（[公開元](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)）

導入理由は、解像度の切り替え、アートディレクション、区切り位置、画像形式等に応じた複数ソースの選択を宣言的に行い、従来のユーザーエージェントには`img`で代替内容を提供することだった。[要求文書](../../raw/www.w3.org/TR/2013/WD-respimg-usecases-20130226/index.html)（[公開元](https://www.w3.org/TR/2013/WD-respimg-usecases-20130226/)）

## HTML直前の祖先

Responsive Images Community Groupの`picture`提案と、同じマークアップを実行したPicturefillである。HTML Working Group草案は共同開発を、WHATWGコミットは上流統合を明記する。

## さらに上流の由来

### 証拠

2013年の要求文書は、当時使われていた独自手法の欠点を標準化の動機として列挙するが、最終構文を特定の一手法から採用したとは述べない。

### 解釈

クライアント側回避策を不要にするネイティブな宣言的画像選択として標準化されたと解釈できる。

## 系譜

RICG `picture`提案／Picturefill（2012年） → HTML WG `picture` 拡張（2013年） → WHATWG HTML統合（2014年） → 現行HTML `picture`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2012-02-21 | [A sample picture implementation](../../raw/www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/index.html)（[公開元](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)） | Community Group実装資料 | 提案中の`picture`のマークアップ、メディアクエリー、`img`の代替内容を実行するPicturefill。 | 2026-08-09 |
| 2013-02-26 | [*The picture element*](../../raw/www.w3.org/TR/2013/WD-html-picture-element-20130226/index.html)（[公開元](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)） | W3C First Public Working Draft | RICGとの共同開発と`picture`の構文・意味。 | 2026-08-09 |
| 2013-02-26 | [Responsive Images Use Cases](../../raw/www.w3.org/TR/2013/WD-respimg-usecases-20130226/index.html)（[公開元](https://www.w3.org/TR/2013/WD-respimg-usecases-20130226/)） | W3C First Public Working Draft | 回避策の欠点とレスポンシブ画像の標準化要求。 | 2026-08-09 |
| 2014-06-17 | [WHATWG HTML commit `a7716b7a`](../../raw/github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)（[公開元](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)） | 仕様コミット | 上流 `picture`更新のHTML Living Standardへの統合。 | 2026-08-09 |

## 確度

**A**

Community Groupの提案と実装、HTML Working Group草案、WHATWGへの上流側の統合が要素単位で連続して確認できるため。

## 否定された仮説

`video`／`audio`の`source`から`picture`自体が派生したという説明。既存`source`を再利用したことは確認できるが、`picture`の採用元とする記録はない。

## 未解決

- `picture`という名称と最初のマークアップを提案した正確な議論またはコミットはどれか。
- WHATWGソースへ要素本体を最初に置いたコミットはどれか。
- Picturefill以外の回避策から最終構文へ採用された個別機構はあるか。
