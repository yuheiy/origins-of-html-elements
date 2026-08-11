---
status: 完成
---

# `<picture>`

## 概要

2007年の静止画用`picture`案を、Bruce Lawsonが2011年に`video`の複数`source`と`media`による選択へ組み合わせてレスポンシブ画像用に転用した。Responsive Images Community GroupとPicturefillによる具体化、独立に成立した`srcset`との統合、`img`を描画主体とする構造への修正を経て、2014年にWHATWG HTMLへ統合された。

## 現在の意味

WHATWG HTML Living Standardでは、子の`img`が使う画像リソースを、画素密度、ビューポートの寸法、画像形式等に応じて選べるよう複数のソースを提供するコンテナーである。`picture`自体は表示されず、子要素を表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/embedded-content.html)（[公開版](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)、2026-08-09確認）

## HTMLへの導入

Robert Burnsは2007年7月1日、静止画に豊かな代替内容を持たせる単純な新要素として`picture`と最初のマークアップをHTML Working Groupへ提案した。この案は単一の`src`を持ち、複数画像の条件選択は扱っていなかった。[Burnsの提案](../../raw/lists.w3.org/Archives/Public/public-html/2007Jul/0069.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2007Jul/0069.html)）

Bruce Lawsonは2011年12月8日、Burnsの`picture`案を、HTML5 `video`で実績のある複数の`source`、`media`、代替内容の構造と組み合わせたレスポンシブ画像用の草案を公表した。2012年1月にMat Marquisが同じ構造を詳述し、Responsive Images Community Groupは同年2月にそのマークアップを実行するPicturefillを公開した。[Lawsonの草案](../../raw/brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/index.html)（[公開元](https://brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/)） [Marquisの説明](../../raw/alistapart.com/article/responsive-images-how-they-almost-worked-and-what-we-need/index.html)（[公開元](https://alistapart.com/article/responsive-images-how-they-almost-worked-and-what-we-need/)） [Picturefill](../../raw/www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/index.html)（[公開元](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)）

一方、Edward O’Connorは2012年5月10日にCSS `image-set()`を下敷きとする`img srcset`をWHATWGへ提案し、Ian Hicksonが5月15日に最初の仕様稿を追加した。2013年のHTML Working Group `picture`草案は、`source media`による作者指定の分岐と、各分岐内の`srcset`による候補選択を併用した。[O’Connorの提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html)） [`srcset`初稿コミット](../../raw/github.com/whatwg/html/commit/969543cd259a0cc41a0a5cbe97e0010c6999eb09)（[公開元](https://github.com/whatwg/html/commit/969543cd259a0cc41a0a5cbe97e0010c6999eb09)） [HTML WG草案](../../raw/www.w3.org/TR/2013/WD-html-picture-element-20130226/index.html)（[公開元](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)）

Simon Pietersは2013年11月19日、新要素に`img`の描画・代替機構を複製する問題を避けるため、必須の`img`を`picture`内に置き、その前の`source`を`img`の画像更新処理が参照する構造を提案した。2014年6月17日のWHATWG revision 8680が、この構造を含む上流の`picture`更新をHTML Living Standardへ初めて統合した。[Pietersの提案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2013Nov/0256.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2013Nov/0256.html)） [仕様コミット](../../raw/github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)（[公開元](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)）

導入理由は、解像度の切り替え、アートディレクション、区切り位置、画像形式等に応じた複数ソースの選択を、スクリプト、Cookie、サーバー側処理、CSS画像置換に依存せず宣言的に行い、従来のユーザーエージェントにも`img`を提供することだった。[要求文書](../../raw/www.w3.org/TR/2013/WD-respimg-usecases-20130226/index.html)（[公開元](https://www.w3.org/TR/2013/WD-respimg-usecases-20130226/)）

## HTML直前の祖先

Responsive Images Community Groupの`picture`提案とPicturefill、WHATWGの`img srcset`、`img`を描画主体とするPietersの2013年案である。HTML Working Group草案で前二者の併用を、WHATWGコミットで上流統合を確認できる。

## さらに上流の由来

### 証拠

2007年のBurns案は`picture`という要素名と`img`より豊かな代替内容を持つ新しい静止画要素を提示した。Lawsonはこの案を明示的に参照し、`video`の複数`source`、`media`、代替内容の構造と組み合わせたと説明した。[Burnsの提案](../../raw/lists.w3.org/Archives/Public/public-html/2007Jul/0069.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2007Jul/0069.html)） [Burns案への返信](../../raw/lists.w3.org/Archives/Public/public-html/2007Jul/0121.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2007Jul/0121.html)） [Lawsonの草案](../../raw/brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/index.html)（[公開元](https://brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/)）

Dominique Hazaël-Massieuxは2011年5月、`img`から`source media`のリストを参照する別案を提示した。2012年の`srcset`はこれとも`picture`とも別にWHATWGへ提案された。2013年のPieters案は`img`とソース群を結び付けるラッパーをいったん`sourcelist`と呼び、最終的に`picture`へ戻した。[Hazaël-Massieuxの提案](../../raw/lists.w3.org/Archives/Public/public-html/2011May/0386.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2011May/0386.html)） [O’Connorの提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html)） [Pietersの提案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2013Nov/0256.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2013Nov/0256.html)）

### 解釈

現行`picture`は一つの発明をそのまま採用したものではない。名称と新要素による代替内容は2007年案、条件付きの複数ソースは`video`、密度等の候補集合は独立した`srcset`、描画と代替テキストは既存の`img`から受け継ぎ、RICG、HTML Working Group、WHATWGの議論で一つの構造へ統合されたと解釈できる。

## 系譜

Burnsの静止画用`picture`案（2007年）＋`video`の`source`／`media`／代替内容 → Lawsonのレスポンシブ`picture`草案（2011年） → RICG `picture`提案／Picturefill（2012年）

WHATWG `img srcset`（2012年）＋ RICG `picture` → HTML WG `picture`拡張（2013年） → `img`を描画主体とするPieters案（2013年） → WHATWG HTML統合（2014年） → 現行HTML `picture`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2007-07-01 | [handling fallback content for still images](../../raw/lists.w3.org/Archives/Public/public-html/2007Jul/0069.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2007Jul/0069.html)） | HTML Working Groupメール | Burnsが豊かな代替内容を持つ単一ソースの`picture`と最初のマークアップを提案した。 | 2026-08-11 |
| 2007-07-02 | [Re: handling fallback content for still images](../../raw/lists.w3.org/Archives/Public/public-html/2007Jul/0121.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2007Jul/0121.html)） | HTML Working Groupメール | Maciej StachowiakがBurns案を引用し、旧UAへの`img`代替を新要素の課題として指摘した。 | 2026-08-11 |
| 2011-05-30 | [Responsive images proposal](../../raw/lists.w3.org/Archives/Public/public-html/2011May/0386.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2011May/0386.html)） | HTML Working Groupメール | `img`から`source media`のリストを参照する、クライアント側の複数画像選択案。 | 2026-08-11 |
| 2011-12-08 | [Notes on Adaptive Images](../../raw/brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/index.html)（[公開元](https://brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/)） | 提案者の記事 | Burnsの`picture`案と`video`の構造を組み合わせた`picture`、複数`source media`、代替`img`の草案。 | 2026-08-11 |
| 2012-01-31 | [Responsive Images: How They Almost Worked and What We Need](../../raw/alistapart.com/article/responsive-images-how-they-almost-worked-and-what-we-need/index.html)（[公開元](https://alistapart.com/article/responsive-images-how-they-almost-worked-and-what-we-need/)） | 当事者の記事 | Cookie、JavaScript、サーバー側リダイレクトの問題と、`video`／`audio`型の`picture`構文。 | 2026-08-11 |
| 2012-02-21 | [A sample picture implementation](../../raw/www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/index.html)（[公開元](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)） | Community Group実装資料 | 提案中の`picture`、`source media`、代替`img`を実行するPicturefill。 | 2026-08-09 |
| 2012-05-10 | [An `img` `srcset` proposal](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html)） | WHATWGメール | O’ConnorがCSS `image-set()`に基づく`img srcset`を提案した。 | 2026-08-11 |
| 2012-05-15 | [WHATWG HTML commit `969543cd`](../../raw/github.com/whatwg/html/commit/969543cd259a0cc41a0a5cbe97e0010c6999eb09)（[公開元](https://github.com/whatwg/html/commit/969543cd259a0cc41a0a5cbe97e0010c6999eb09)） | 仕様コミット | Ian Hicksonが`img srcset`の最初の仕様稿を追加した。 | 2026-08-11 |
| 2013-02-26 | [*The picture element*](../../raw/www.w3.org/TR/2013/WD-html-picture-element-20130226/index.html)（[公開元](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)） | W3C First Public Working Draft | RICGとの共同開発、`source media`と`srcset`の併用、代替`img`を規定した。 | 2026-08-09 |
| 2013-02-26 | [Responsive Images Use Cases](../../raw/www.w3.org/TR/2013/WD-respimg-usecases-20130226/index.html)（[公開元](https://www.w3.org/TR/2013/WD-respimg-usecases-20130226/)） | W3C First Public Working Draft | 回避策の欠点とレスポンシブ画像の標準化要求。 | 2026-08-09 |
| 2013-11-19 | [Re: The src-N proposal](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2013Nov/0256.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2013Nov/0256.html)） | WHATWGメール | Pietersが`picture`をソース群と必須`img`の結合用ラッパーとし、`img`の画像更新処理を使う構造を提案した。 | 2026-08-11 |
| 2014-06-17 | [WHATWG HTML commit `a7716b7a`](../../raw/github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)（[公開元](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)） | 仕様コミット | revision 8680として上流の`picture`更新と要素本体をHTML Living Standardへ統合した。 | 2026-08-11 |

## 確度

**A**

名称と最初の要素案、レスポンシブ画像用構文への転用、Community Groupの実装、独立した`srcset`との統合、現行構造の提案、WHATWG HTMLへの導入が要素単位の一次資料で連続して確認できるため。

## 否定された仮説

- 2007年の`picture`案がすでにレスポンシブ画像を扱っていたという説明。Burns案は単一の`src`と豊かな代替内容を扱い、条件付きの複数ソースは持たない。
- Picturefillが最終構文を単独で生み出したという説明。`picture`名は2007年案、`source media`型の構造はLawsonによる`video`との合成、`srcset`は独立したWHATWG提案、必須`img`が描画する構造は2013年のPieters案に遡る。
- Cookie、JavaScriptによる`src`交換、サーバー側リダイレクト、CSS画像置換から最終構文の個別機構を採用したという説明。これらは要求文書と当事者の説明で克服すべき回避策として扱われ、採用元とはされていない。

## 未解決

なし。
