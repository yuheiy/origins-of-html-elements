# `<style>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。W3C style sheet草案からの系譜を検証済み（HTML 4への個別採録記録は未解決）

## 概要

HTMLへpresentation機能を増やし続けず、文書内のstyle rulesを`HEAD`へまとめるため、1996年のW3C草案が提案した要素である。HTML 3.2のplaceholderを経てHTML 4へ入ったが、HTML 4への接続は草案集合単位でしか確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、CSS style sheetを文書へ埋め込む。`media`で適用mediaを制限し、`blocking`でrender-blockingの扱いを指定できる。利用者向けcontent自体は表さない。[一次定義](https://html.spec.whatwg.org/multipage/semantics.html#the-style-element)（2026-08-09確認）

## HTMLへの導入

1996年1月15日のW3C Working Draft *HTML3 and Style Sheets*は、HTMLを新しい`STYLE`要素で拡張し、文書内style sheetを`HEAD`へ置くと定義した。rendering instructionsを個別要素、document head内のgroup、または外部style sheetへ置き、新しいrendering formのたびにHTML自体を拡張せず、特定のstyle-sheet notationから独立させることが目的だった。[HTML3 and Style Sheets](https://www.w3.org/TR/WD-style-960115)

1月19日版は`STYLE`をdocument内inline style sheets用の新要素とし、`TYPE`でlanguageを指定した。HTML 3.2は将来のstyle sheets導入用placeholderとして収録し、1997年のCougar向け草案を経てHTML 4が`HEAD`内のstyle rulesとして規定した。[1月19日版](https://www.w3.org/TR/WD-style-960119) [HTML 3.2](https://www.w3.org/TR/REC-html32) [HTML 4.01](https://www.w3.org/TR/html401/present/styles.html#style-group)

## HTML直前の祖先

W3C *HTML3 and Style Sheets*の`STYLE`である。document-local rulesを`HEAD`へgroupingし、style languageをHTMLから分離する設計がHTML 3.2 placeholderとHTML 4へ続く。ただし、W3CがCougar草案群をHTML 4のbasisとする記録は集合単位であり、要素単位の採録記録は未確認である。

## さらに上流の由来

### 証拠

HTML 3.0 introductionは、HTMLへのpresentation機能追加を抑え、user preferencesやresource limitationsを考慮したrenderingをstyle sheetsへ分離する要求を示す。1994年のCascading HTML Style Sheets proposalはauthorとreaderのstyleをcascadeするmodelと、外部sheetを`LINK REL="style"`で結ぶ構文を提案した。[HTML 3.0 introduction](https://www.w3.org/MarkUp/html3/intro.html) [CSS proposal](https://www.w3.org/People/howcome/p/cascade.html)

### 解釈

style sheets一般とcascadeは設計背景だが、1994年案は外部`LINK`を示すだけで`STYLE`要素の起源を直接説明しない。確定系譜は1996年のHTML側の提案から始める。

## 系譜

presentationをHTMLから分離しdocument-local rulesを`HEAD`へまとめる要求 → W3C `STYLE`草案（1996年） → HTML 3.2 placeholder → ［集合単位の接続］HTML 4 `STYLE` → 現行HTML `<style>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995 | HTML 3.0 introduction | 失効したInternet-Draftの仕様本文 | HTMLへのpresentation追加を抑え、style sheetsへ分離する要求。 | [一次資料](https://www.w3.org/MarkUp/html3/intro.html) | 2026-08-09 |
| 1996-01-15 | *HTML3 and Style Sheets* | W3C Working Draft | 新しい`STYLE`要素、document headへのrulesのgrouping、導入理由。 | [一次資料](https://www.w3.org/TR/WD-style-960115) | 2026-08-09 |
| 1996-01-19 | *HTML3 and Style Sheets* | W3C Working Draft | inline style sheetsと`TYPE`によるlanguage指定。 | [一次資料](https://www.w3.org/TR/WD-style-960119) | 2026-08-09 |
| 1996-12-17 | CSS1 §1.1 | W3C Recommendation | HTMLとstyle sheetの四つの結合方式、`STYLE`の使用例。 | [一次資料](https://www.w3.org/TR/REC-CSS1-961217#containment-in-html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | 将来のstyle sheets導入用placeholderとしての`STYLE`。 | [一次資料](https://www.w3.org/TR/REC-html32) | 2026-08-09 |
| 1997-03-24 | *HTML and Style Sheets* | W3C Working Draft | Cougar向け`STYLE`定義、言語非依存、head内grouping。 | [一次資料](https://www.w3.org/TR/WD-style-970324) | 2026-08-09 |
| 1995〜1997 | *Cougar — The next version of HTML* | W3C標準化ページ | listed draftsがHTML 4.0のbasisを形成したという集合単位の関係。 | [一次資料](https://www.w3.org/MarkUp/Cougar/) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §14.2.3 | W3C Recommendation | `STYLE`を`HEAD`内のstyle rulesとして本格的に規定。 | [一次資料](https://www.w3.org/TR/html401/present/styles.html#style-group) | 2026-08-09 |

## 確度

**A−**

W3Cの具体的な先行`STYLE`提案と導入要求は直接確認でき、W3C自身がCougar草案群をHTML 4のbasisとするが、HTML 4への接続は集合単位で個別採録経路が欠けるため。

## 否定された仮説

CSSが`STYLE`要素を発明してHTMLへ移植したという説明。CSS1は`STYLE`をHTML側の結合機構として参照し、1994年CSS案は`LINK`を示すが`STYLE`要素への採用因果を示さない。DSSSLの特定要素からの派生も確認できない。

## 未解決

- 1996年1月15日草案以前に`STYLE`要素構文を提案した投稿はあるか。
- HTML 3.2 placeholderへ収録した個別の編集・合意記録はあるか。
- Cougar草案からHTML 4 `STYLE`へ採録した際の要素単位の変更記録はあるか。

## 調査記録

HTML 3.0 introduction、1996〜1997年のW3C style草案、CSS1、HTML 3.2、HTML 4.01、Cougar標準化ページ、現行Living Standardを確認した。横断比較は[Scripting / embedding要素の調査ノート](../research/scripting-embedding-elements.md)を参照する。

敵対的レビュー（2026-08-09）では、1996年W3C草案、CSS1、HTML 3.2 placeholder、Cougarページ、HTML 4.01を再照合した。HTML 4への接続はCougar草案群の集合単位を越えて確認できず、個別採録を補わないA−を維持した。
