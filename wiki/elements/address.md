---
status: 完成
---

# `<address>`

## 概要

1991年2月のNeXT WorldWideWeb変更履歴と保存ソースから、エディターの`Address`段落スタイルとHTML `ADDRESS` タグを相互変換する設計モデルを確認できる。具体的な直前祖先と`ADDRESS`という語彙の選択理由は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、最も近い`article`または`body` 祖先の連絡先情報を表す。祖先が`body`なら文書全体に適用される。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)、2026-08-09確認）

## HTMLへの導入

確認できる最初期のHTML実装記録は、NeXT WorldWideWebバージョン0.5の変更履歴で、1991年2月1日に`Address` スタイルをHTML `ADDRESS` タグとして実装したと記す。保存ソースは`ADDRESS`の構文解析と直列化をスタイルシート上の`Address`段落スタイルへ対応させており、HTML要素の実装上の設計モデルを確認できる。1991年3月5日にはCERN Line Mode Browserも`ADDRESS`を処理して左揃えするようになった。ただし、`Address` スタイルがHTMLより前に独立して存在したか、なぜ`ADDRESS`という語彙を選んだかは記録されていない。[CERN/W3C, *Features and Bug Fixes*](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html)） [WorldWideWeb `ParseHTML.h`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)） [Line Mode Browser change history](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)）

## HTML直前の祖先

未確認。WorldWideWeb内の`Address`段落スタイルとHTML `ADDRESS` タグの実装対応は確認できるが、スタイルの先行性や、同名または類似用途のSGML/GML要素から採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

1991年のWorldWideWeb `ParseHTML.h`は、`addressStyle`の開始・終了タグを`ADDRESS`とし、スタイルシート上の`Address`段落スタイルを取得して、HTMLの構文解析と直列化の双方に使う。`default.style`は`Address`をHelvetica Obliqueの段落スタイルとして定義する。[`ParseHTML.h`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)） [`default.style`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)）

### 解釈

初期HTML `ADDRESS`は、WorldWideWebエディターの`Address`段落スタイルをHTMLへ保存し、HTMLから復元するための要素として実装されたと説明できる。ただし、これは実装内の設計対応であり、スタイルまたは要素名のさらに前の由来を示さない。

## 系譜

確認済みの関係は、NeXT WorldWideWebの`Address`段落スタイル ⇄ HTML `ADDRESS`（1991）である。Line Mode BrowserのHTML `ADDRESS`（1991-03-05）、1992年CERN資料の`ADDRESS`、現行HTML `<address>`への時系列は確認できるが、個別の採用経路は未確認のため矢印で接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1991-02-01 | [*Features and Bug Fixes*](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html)） | CERN/W3Cの公式実装履歴 | WorldWideWeb 0.5で`Address` スタイルをHTML `ADDRESS` タグとして実装したと記録する。 | 2026-08-10 |
| 1991-03-05 | [*Features added*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)） | CERN Line Mode Browser change history | `ADDRESS` タグを処理し、テキストを左揃えするようになったと記録する。 | 2026-08-10 |
| 1991-03-21（ディレクトリタイムスタンプ） | [`default.style`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)） | CERN/W3C保存のWorldWideWeb配布ファイル | `Address`をHelvetica Obliqueの段落スタイルとして定義する。 | 2026-08-10 |
| 1991-09-27（ディレクトリタイムスタンプ） | [`ParseHTML.h`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)） | CERN/W3C保存のWorldWideWebソース | `ADDRESS`の構文解析と直列化をスタイルシート上の`Address`段落スタイルへ対応させる。 | 2026-08-10 |
| 1992-11-13（更新日） | [*Tags used in HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | `ADDRESS`を住所情報、署名などのためのタグとして記録する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `ADDRESS`の用途とDTD宣言を記録する。 | 2026-08-09 |

## 確度

**B**

WorldWideWebエディターの`Address`段落スタイルとHTML `ADDRESS`タグを相互変換する実装上の設計モデルを直接確認できるが、具体的な先行物からの採用因果は確認できないため。

## 否定された仮説

先行SGML/GMLに同名または類似用途の要素があることだけから、HTMLへの直接祖先とする説明。CERN SGMLタグセットから一部をHTMLへ含めたという集合単位の記録はあるが、`ADDRESS`を個別指定せず、採用因果を示さない。

## 未解決

- 1991年2月1日より前のWorldWideWebソースまたはスタイルファイルに`Address` スタイルだけが存在し、後からHTMLへの直列化が加わったことを確認できるか。
- CERN SGML、Waterloo GML、または別の文書体系からHTML `ADDRESS`を選んだと個別に明記する同時代資料はあるか。
