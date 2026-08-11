---
status: 完成
---

# `<address>`

## 概要

1991年2月のNeXT WorldWideWeb変更履歴と保存ソースから、エディターの`Address`段落スタイルとHTML `ADDRESS` タグを相互変換する設計モデルを確認できる。1988年のWaterloo SCRIPT GMLには同名の`:ADDRESS`があるが採用記録はなく、CERNの復元プロジェクトも2月以前のWorldWideWebソースを回収していないため、具体的な直前祖先と語彙の選択理由は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、最も近い`article`または`body` 祖先の連絡先情報を表す。祖先が`body`なら文書全体に適用される。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)、2026-08-09確認）

## HTMLへの導入

確認できる最初期のHTML実装記録は、NeXT WorldWideWebバージョン0.5の変更履歴で、1991年2月1日に`Address` スタイルをHTML `ADDRESS` タグとして実装したと記す。保存ソースは`ADDRESS`の構文解析と直列化をスタイルシート上の`Address`段落スタイルへ対応させており、HTML要素の実装上の設計モデルを確認できる。1991年3月5日にはCERN Line Mode Browserも`ADDRESS`を処理して左揃えするようになった。ただし、`Address` スタイルがHTMLより前に独立して存在したか、なぜ`ADDRESS`という語彙を選んだかは記録されていない。[CERN/W3C, *Features and Bug Fixes*](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html)） [WorldWideWeb `ParseHTML.h`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)） [Line Mode Browser change history](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)）

2019年のCERN復元プロジェクトは、発見できた最古かつ唯一のWorldWideWebソースがバージョン0.15を示す一方、1992年付のコメントも含むため版番号が更新されていない可能性を注記する。W3Cの1991年保存ツリー、バックアップ履歴、スタイル群とこの復元資料から2月1日以前のソースまたはスタイル版を回収できなかったため、スタイルの先行性は新しい保存版が現れるまで確定しない。[CERN, *Inside the Code*](../../raw/worldwideweb.cern.ch/code/__index)（[公開元](https://worldwideweb.cern.ch/code/)）

## HTML直前の祖先

未確認。WorldWideWeb内の`Address`段落スタイルとHTML `ADDRESS` タグの実装対応は確認できるが、スタイルの先行性や、同名または類似用途のSGML/GML要素から採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

1988年のWaterloo SCRIPT GML User’s Guideは、組織名と住所を題名ページへ置く`:ADDRESS`を定義し、各行を`:ALINE`で記す。1991年のWorldWideWeb `ParseHTML.h`は、`addressStyle`の開始・終了タグを`ADDRESS`とし、スタイルシート上の`Address`段落スタイルを取得して、HTMLの構文解析と直列化の双方に使う。`default.style`は`Address`をHelvetica Obliqueの段落スタイルとして定義する。[Waterloo SCRIPT GML User’s Guide](../../raw/web.archive.org/web/20020504095301/http%3A/www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)） [`ParseHTML.h`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)） [`default.style`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)）

### 解釈

初期HTML `ADDRESS`は、WorldWideWebエディターの`Address`段落スタイルをHTMLへ保存し、HTMLから復元するための要素として実装されたと説明できる。Waterlooの同名要素は機能上の先行候補だが、これは名称と住所用途の類似にとどまり、実装内の設計対応より前の由来を示さない。

## 系譜

確認済みの関係は、NeXT WorldWideWebの`Address`段落スタイル ⇄ HTML `ADDRESS`（1991）である。Line Mode BrowserのHTML `ADDRESS`（1991-03-05）、1992年CERN資料の`ADDRESS`、現行HTML `<address>`への時系列は確認できるが、個別の採用経路は未確認のため矢印で接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1988-10-18 | [*Waterloo SCRIPT GML User’s Guide*](../../raw/web.archive.org/web/20020504095301/http%3A/www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)） | 同時代の文書体系マニュアル | 組織名と住所を題名ページへ置く`:ADDRESS`と、各行を表す`:ALINE`を定義する。HTMLへの採用は記さない。 | 2026-08-12 |
| 1991-02-01 | [*Features and Bug Fixes*](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html)） | CERN/W3Cの公式実装履歴 | WorldWideWeb 0.5で`Address` スタイルをHTML `ADDRESS` タグとして実装したと記録する。 | 2026-08-10 |
| 1991-03-05 | [*Features added*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)） | CERN Line Mode Browser change history | `ADDRESS` タグを処理し、テキストを左揃えするようになったと記録する。 | 2026-08-10 |
| 1991-03-21（ディレクトリタイムスタンプ） | [`default.style`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)） | CERN/W3C保存のWorldWideWeb配布ファイル | `Address`をHelvetica Obliqueの段落スタイルとして定義する。 | 2026-08-10 |
| 1991-09-27（ディレクトリタイムスタンプ） | [`ParseHTML.h`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)） | CERN/W3C保存のWorldWideWebソース | `ADDRESS`の構文解析と直列化をスタイルシート上の`Address`段落スタイルへ対応させる。 | 2026-08-10 |
| 1992-11-13（更新日） | [*Tags used in HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | `ADDRESS`を住所情報、署名などのためのタグとして記録する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `ADDRESS`の用途とDTD宣言を記録する。 | 2026-08-09 |
| 2019 | [*Inside the Code — WorldWideWeb NeXT Application*](../../raw/worldwideweb.cern.ch/code/__index)（[公開元](https://worldwideweb.cern.ch/code/)） | CERN復元プロジェクトの保存資料解説 | 発見できた最古かつ唯一のソースは0.15を示すが、1992年付コメントがあり版番号が古い可能性もあると記す。 | 2026-08-12 |

## 確度

**B**

WorldWideWebエディターの`Address`段落スタイルとHTML `ADDRESS`タグを相互変換する実装上の設計モデルを直接確認できるが、具体的な先行物からの採用因果は確認できないため。

## 否定された仮説

Waterloo SCRIPT GMLの`:ADDRESS`、または別のSGML/GMLにある同名・類似用途の要素を、名称と用途の一致だけからHTMLへの直接祖先とする説明。CERN SGMLタグセットから一部をHTMLへ含めたという集合単位の記録も`ADDRESS`を個別指定せず、採用因果を示さない。

## 未解決

- 新たに1991年2月1日より前のWorldWideWebソースまたはスタイルファイルが保存公開された場合、`Address`スタイルだけが先行し、後からHTMLへの直列化が加わったことを確認できるか。
- CERN SGML、Waterloo GML、または別の文書体系からHTML `ADDRESS`を選んだと個別に明記する同時代資料が新たに現れるか。
