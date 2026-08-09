---
status: 完成
---

# `<address>`

## 概要

1991年2月のNeXT WorldWideWeb change historyと保存sourceから、editorの`Address` paragraph styleとHTML `ADDRESS` tagを相互変換する設計モデルを確認できる。具体的な直前祖先と`ADDRESS`という語彙の選択理由は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、最も近い`article`または`body` ancestorのcontact informationを表す。ancestorが`body`なら文書全体に適用される。 [一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)（2026-08-09確認）

## HTMLへの導入

確認できる最初期のHTML実装記録は、NeXT WorldWideWeb version 0.5のchange historyで、1991年2月1日に`Address` styleをHTML `ADDRESS` tagとして実装したと記す。保存sourceは`ADDRESS`のparseとserializationをstyle sheet上の`Address` paragraph styleへ対応させており、HTML要素の実装上の設計モデルを確認できる。1991年3月5日にはCERN Line Mode Browserも`ADDRESS`を処理してleft justifyするようになった。ただし、`Address` styleがHTMLより前に独立して存在したか、なぜ`ADDRESS`という語彙を選んだかは記録されていない。[CERN/W3C, *Features and Bug Fixes*](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html) [WorldWideWeb `ParseHTML.h`](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h) [Line Mode Browser change history](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)

## HTML直前の祖先

未確認。WorldWideWeb内の`Address` paragraph styleとHTML `ADDRESS` tagの実装対応は確認できるが、styleの先行性や、同名または類似用途のSGML/GML要素から採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

1991年のWorldWideWeb `ParseHTML.h`は、`addressStyle`の開始・終了tagを`ADDRESS`とし、style sheet上の`Address` paragraph styleを取得して、HTMLのparseとserializationの双方に使う。`default.style`は`Address`をHelvetica Obliqueのparagraph styleとして定義する。[`ParseHTML.h`](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h) [`default.style`](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)

### 解釈

初期HTML `ADDRESS`は、WorldWideWeb editorの`Address` paragraph styleをHTMLへ保存し、HTMLから復元するための要素として実装されたと説明できる。ただし、これは実装内の設計対応であり、styleまたは要素名のさらに上流の由来を示さない。

## 系譜

確認済みの関係は、NeXT WorldWideWebの`Address` paragraph style ⇄ HTML `ADDRESS`（1991）である。Line Mode BrowserのHTML `ADDRESS`（1991-03-05）、1992年CERN資料の`ADDRESS`、現行HTML `<address>`への時系列は確認できるが、個別の採用経路は未確認のため矢印で接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1991-02-01 | *Features and Bug Fixes* | CERN/W3Cの公式実装履歴 | WorldWideWeb 0.5で`Address` styleをHTML `ADDRESS` tagとして実装したと記録する。 | [W3C History](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Features.html) | 2026-08-10 |
| 1991-03-05 | *Features added* | CERN Line Mode Browser change history | `ADDRESS` tagを処理し、textをleft justifyするようになったと記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html) | 2026-08-10 |
| 1991-03-21（directory timestamp） | `default.style` | CERN/W3C保存のWorldWideWeb配布ファイル | `Address`をHelvetica Obliqueのparagraph styleとして定義する。 | [W3C History](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style) | 2026-08-10 |
| 1991-09-27（directory timestamp） | `ParseHTML.h` | CERN/W3C保存のWorldWideWeb source | `ADDRESS`のparseとserializationをstyle sheet上の`Address` paragraph styleへ対応させる。 | [W3C History](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h) | 2026-08-10 |
| 1992-11-13（更新日） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | `ADDRESS`を住所情報、署名などのためのタグとして記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | `ADDRESS`の用途とDTD宣言を記録する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**B**

WorldWideWeb editorの`Address` paragraph styleとHTML `ADDRESS` tagを相互変換する実装上の設計モデルを直接確認できるが、具体的な先行物からの採用因果は確認できないため。

## 否定された仮説

先行SGML/GMLに同名または類似用途の要素があることだけから、HTMLへの直接祖先とする説明。CERN SGML tag setから一部をHTMLへ含めたという集合単位の記録はあるが、`ADDRESS`を個別指定せず、採用因果を示さない。

## 未解決

- 1991年2月1日より前のWorldWideWeb sourceまたはstyle fileに`Address` styleだけが存在し、後からHTML serializationが加わったことを確認できるか。
- CERN SGML、Waterloo GML、または別の文書体系からHTML `ADDRESS`を選んだと個別に明記する同時代資料はあるか。
