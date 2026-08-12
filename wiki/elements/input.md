---
status: 完成
---

# `<input>`

## 概要

1992年のwww-talkで「キーボードデータ用のアンカー」として提案された入力欄を、HTML+が業務アプリケーション向けの型付きコントロールへ展開し、HTML 2.0へ導出した。特定のGUIツールキットからの採用は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、型を持つデータ入力欄を表し、通常はユーザーがデータを編集するためのフォームコントロールを伴う。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/input.html)（[公開版](https://html.spec.whatwg.org/multipage/input.html#the-input-element)、2026-08-09確認）

## HTMLへの導入

Jim Whitescarverは1992年11月、長さ、型、初期値を持ち、検索語またはメールとして送れる`INPUT`をwww-talkへ提案した。1993年1月にDan ConnollyとDave Raggettが問い合わせフォーム、数値、真偽値、テキスト等へ具体化し、HTML+は`TYPE`で多様な入力欄を表す要素として定義した。RFC 1866はHTML 2.0フォームへ`INPUT`を採録し、フォーム資料のHTML+由来を明記する。[Whitescarver, “interactive hypermedia”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)） [Connolly, “Re: INPUT tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0083.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0083.html)） [Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)）

## HTML直前の祖先

HTML直前の祖先はHTML+ `INPUT`である。RFC 1866の謝辞により、HTML+のフォームからHTML 2.0への因果関係も確認できる。[RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)）

## さらに上流の由来

### 証拠

Whitescarverは`INPUT`を「キーボードデータ用のアンカー」にたとえ、1993年1月にはWeb以前に実装した旧仕様があると述べたが、その仕様と実装は特定できない。[Whitescarver, “interactive hypermedia”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)） [Whitescarver, “INPUT tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0079.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0079.html)）

Raggettは関連プロジェクトの検討からチェックボックス、テキスト欄、数値欄、ラジオボタン等が必要だと述べ、6月のHTML+例を、自身が以前取り組んだ計算機構成支援エキスパートシステムに基づけた。後代の回顧は、そのHP Protek PilotがHyperCardに触発され、豊富なフォームを備え、同種のアプリケーションをWebで可能にする要求がHTML+へつながったと説明する。[Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） [Raggett, “My involvement with the early days of the Web”](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)）

HTML+の各種別は既存プラットフォームのテキスト欄、チェックボックス、ラジオボタン、フォーカス移動等の慣習を利用するが、個別のウィジェットを特定のGUIツールキットから借用したとは資料に書かれていない。[HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）

### 解釈

`INPUT`は単一の外部ウィジェットの移植ではなく、Webの検索・送信要求と、業務用ハイパーテキストで用いた複数種のフォームUIをHTMLへ組み替えたものと解釈できる。HyperCardとProtek Pilotはフォーム群の設計背景までを支えるが、各`TYPE`との一対一対応は示さない。

## 系譜

1992年www-talk `INPUT`案 → 1993年`QUERYFORM`の型付き`INPUT` → HTML+ `INPUT` → HTML 2.0 `INPUT` → 現行HTML `<input>`

HyperCard → HP Protek Pilotのフォーム経験 → HTML+フォーム群の設計背景

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-11-27 | [Whitescarver, “interactive hypermedia”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)） | www-talkメール | 長さ、型、初期値を持つ`INPUT`と検索・メール送信を提案し、キーボードデータ用のアンカーと説明する。 | 2026-08-12 |
| 1993-01-16〜19 | 初期具体化：[Whitescarver](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0079.html)・[Connolly](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0083.html)・[Raggett](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元1](http://1997.webhistory.org/www.lists/www-talk.1993q1/0079.html)・[公開元2](http://1997.webhistory.org/www.lists/www-talk.1993q1/0083.html)・[公開元3](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） | www-talkメール | Web以前の旧実装への言及、問い合わせフォーム、型付き入力欄への展開を示す。 | 2026-08-12 |
| 1993-06-18 | [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） | www-talkメール | 先行エキスパートシステムに基づく例で、数値入力と真偽値チェックボックスを使う。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §10](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） | Internet-Draft | `INPUT`のHTML+のフォーム上の設計を確認できる。 | 2026-08-09 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | Standards Track RFC | HTML 2.0フォームを定義し、フォーム資料のHTML+由来を明記する。 | 2026-08-09 |
| 2004-12-01 | [Raggett, “My involvement with the early days of the Web”](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)） | 設計者による回顧 | HyperCardに触発されたProtek Pilotの豊富なフォームと、同種のアプリケーションを可能にするHTML+の設計背景を説明する。 | 2026-08-12 |

## 確度

**A**

RFC 1866がHTML+のフォームからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

`input`の各種別を特定OSまたはGUIツールキットの同名のウィジェットから直接コピーしたという説明。史料が確認するのは複数プラットフォームの慣習とProtek Pilotのフォーム経験までで、要素・型ごとの直接対応はない。

NCSA Mosaicが`INPUT`を最初に考案したという説明。要素案は1992年11月、HTML+ DTDは1993年6月に確認できる一方、Mosaicは7月時点でHTML+未実装、フォーム実装の報告は9月である。[Andreessen, “XMosaic 1.2 and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)） [Andreessen, “Fill-out form support”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)）

## 未解決

- WhitescarverがWeb以前に実装した`INPUT`仕様とソフトウェアの名称、内容、1992年案への継承関係。
- HyperCardまたはProtek Pilotの個別コントロールとHTML+の各`INPUT TYPE`を対応させる設計記録は残っているか。
