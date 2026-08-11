---
status: 完成
---

# `<title>`

## 概要

1991年10月のTim Berners-Leeのmailで、nodeを文脈外で識別しwindow nameやhistory listに使うため設計された要素として確認できる。Raggettらの回顧はSGML由来のtag-pair構文の例に`TITLE`を挙げるが、要素名の具体的な元DTDは未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、文書のtitleまたはnameを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element)、2026-08-09確認）

## HTMLへの導入

Tim Berners-Leeは1991年10月29日のmailで、`TITLE`はwindowのtop banner/nameまたはhistory listに使うため設計され、本文中の文脈依存な`H1`と異なり、文脈外でも意味が通るべきだと説明する。[Berners-Lee, “Re: status. Re: X11 BROWSER for WWW”](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)

## HTML直前の祖先

未確認。一般的なSGML文書構造や同名要素の存在だけではHTMLへの採用因果を示さない。

## さらに上流の由来

### 証拠

Waterloo GMLにもtitle page用の`TITLE`があるが、HTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) 1998年のRaggettらによる回顧は、初期HTMLのSGML由来のtag-pair構文を説明する例として`TITLE`を挙げるが、要素名の元となったDTDは指定しない。[Raggettほか, *A history of HTML*](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)）

### 解釈

SGMLのtag-pair構文は設計材料だったと説明できるが、`TITLE`という語彙を特定のSGML/GML vocabularyから採用したとは確認できない。nodeをwindow名やhistoryへ使う機能はWWW固有の設計として分けて扱う。

## 系譜

初期HTML `TITLE`（1991年に確認）→ 現行HTML `<title>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1988-10-18 | [*SCRIPT GML User’s Guide*](../../raw/web.archive.org/web/20020504095301/http%3A/www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)） | Waterloo公式文書の保存版 | 先行GMLにtitle page用`TITLE`が存在する。HTMLへの採用因果は示さない。 | 2026-08-09 |
| 1991-10-29 | [“Re: status. Re: X11 BROWSER for WWW”](../../raw/lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)） | www-talkへの当事者投稿 | `TITLE`をwindow nameやhistory listに使う設計目的と`H1`との違いを説明する。 | 2026-08-09 |
| 1992-11-13（更新日） | [*Tags used in HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料のhistorical snapshot | `TITLE`の構文とnode全体を識別する用途を記録する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `TITLE`を`HEAD`内に置く文書全体のpropertyとして説明し、DTD宣言を記録する。 | 2026-08-09 |
| 1998 | [Dave Raggettほか, *A history of HTML*](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)） | 初期Web当事者による回顧 | SGML由来のtag-pair構文を説明する例として`TITLE`を挙げるが、要素名の元DTDは示さない。 | 2026-08-11 |

## 確度

**B**

HTMLへの設計目的は当事者資料で確認できるが、具体的な先行要素からの採用因果を確認できないため。

## 否定された仮説

`TITLE`が一般的なSGML文書構造であることだけから、特定のDTDをHTML直前の祖先とする説明。

## 未解決

- HTML `TITLE`が参照した具体的なSGML/GML vocabularyを示す初期設計資料はあるか。
- node propertyとしての設計に影響した具体的なhypertext systemまたは文書体系はあるか。
