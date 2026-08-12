---
status: 完成
---

# `<form>`

## 概要

HTML+ `FORM`は、初期HTMLの単一文字列検索`ISINDEX`を複数欄へ拡張するwww-talk上の設計と、Dave RaggettがHyperCardに触発されて開発したHP Protek Pilotの業務用ハイパーテキスト経験が合流して成立した。1993年6月の最初期`FORM`例は、その先行する計算機構成支援エキスパートシステムをモデルとしている。申込書や注文書などの記入用紙は画面フォーム一般の上流にあるが、特定の様式からHTML+へ直接移植された証拠は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、フォーム関連要素の集合を表し、その一部は処理のためサーバーへ送信できる編集可能な値を表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/forms.html)（[公開版](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)、2026-08-12確認）

## HTMLへの導入

HTML+ `FORM`は遅くとも1993年6月18日にDave Raggettがwww-talkへ示したDTDに現れる。文書内に複数のフォームを置き、`ACTION`で指定したサーバー、電子メール、ファクシミリへ、入力欄群の値をまとめて送るコンテナーだった。例には、数量、グラフィックス、ディスク、フロッピードライブを選んで計算機の見積を構成するフォームが使われ、Raggettは数年前に取り組んだエキスパートシステムに基づくと明記した。[Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)）

1993年11月のHTML+ Internet-Draftは`FORM`を入力欄群の範囲として定義した。RFC 1866はHTML 2.0フォームを標準化し、フォーム資料をHTML+仕様から導出したと明記する。[HTML+ Forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)）

## HTML直前の祖先

HTML 2.0 `FORM`の直接祖先はHTML+ `FORM`である。同名要素の一致だけでなく、RFC 1866自身がHTML+からフォーム資料を導出した因果関係を記録している。[RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)）

HTML+内では、1992年11月にJim Whitescarverが、長さ、型、初期値を持つ`INPUT`と、値を検索語またはメールで送る案をwww-talkへ提案した。1993年1月にDan Connollyが複数欄を`QUERYFORM`で問い合わせへ組み立てる案を示し、Raggettがチェックボックス、数値欄、ラジオボタン、選択メニューを含む設計へ展開した。Raggettは4月、この1月のやり取りを基に`QUERYFORM`、`INPUT`、`SELECT`、`CHOICE`のHTML拡張案を提示した。[Whitescarver, “interactive hypermedia”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)） [Connolly, “Re: INPUT tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0083.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0083.html)） [Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） [Raggett, “Re WWW ideas”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0015.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0015.html)）

6月18日、Raggettは最新DTDで`FORM`を`MSG`の代わりに入れたと明記し、複数フォームを包んでcommit時の送信先を定める役割を説明した。したがって`FORM`コンテナーが直接置き換えた要素名は`MSG`である。4月の`QUERYFORM`案とこの`MSG`の間の変更記録は未回収である。[Raggett, “Re: HTML+ and Tables”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)）

## さらに上流の由来

### 証拠

Raggettは2004年の回顧で、1990年にHP Labsで計算機製品の注文を支援するエキスパートシステムのGUIへグラフィカル・ハイパーテキストを利用し、Bill AtkinsonのHyperCardから着想したと述べる。Protek Pilotと呼ばれたこのシステムはウィザード、豊富なフォーム、ファクシミリ送信用見積書を備えていた。Raggettは、CERN訪問後にProtek Pilotのようなアプリケーションへ使えるようHTMLとHTTPを拡張する議論と実験を始め、それが1993年7月までにHTML+へ至ったとも述べる。[Raggett, “My involvement with the early days of the Web”](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)）

同時代の1993年6月資料も、最初期のHTML+ `FORM`例をRaggett自身が以前取り組んだ計算機構成支援エキスパートシステムに基づけ、入力値の誤り、選択不能な項目、サーバーによる再評価を設計へ含めている。[Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)）

HTML+の解説は、従来HTMLの`ISINDEX`が遠隔データベース検索用の一つの文字列しか入力できなかったのに対し、fill-out formsが複数種の欄を持つ豊かなインターフェイスを提供すると説明する。[Raggett, “A Review of the HTML+ Document Format”](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)）

記入用紙と画面フォームの関係はHTML+以前から一般化されていた。1986年の米空軍向けUI設計ガイドラインは、画面上のデータフォームをラベル付き欄へ定義済み項目を入力する方式として扱い、紙の原票から転記するときは画面の項目順序とグループを原票に合わせるよう勧告している。1990年のIBM FormPlusは、記入用紙を電子フォームへ変換し、画面上で設計、記入する機能を一つのツールで扱っていた。[Smith and Mosier, “Guidelines for Designing User Interface Software” §1.4](../../raw/www.hcibib.org/sam/1.html#1.4)（[公開元](https://www.hcibib.org/sam/1.html#1.4)） [Fan et al., “FormPlus: a form authoring toolkit”](../../raw/research.ibm.com/publications/formplus-a-form-authoring-toolkit)（[公開元](https://research.ibm.com/publications/formplus-a-form-authoring-toolkit)）

一方、Whitescarverは1993年1月、SGMLで対話インターフェイスを定義する既知の先例はないとしたうえで、初期入力欄の設計にはGUI開発ツールを調べてSGMLへ翻訳する方法が役立つ可能性を述べた。具体的なツール名や採用結果は示していない。[Whitescarver, “Re: EDI for forms?”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0095.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0095.html)）

### 解釈

HTML+ `FORM`は、記入用紙一枚のレイアウトをWebへ複製したものではなく、ラベル付きの欄へ値を記入する既存の慣習を、GUIの入力欄、選択メニュー、フォーカス移動、検証機能と、Webの検索・送信処理へ組み替えたものと解釈できる。

HTML+へ直接つながる設計源は、初期HTMLの`ISINDEX`、www-talkの`INPUT`／`QUERYFORM`案、RaggettのProtek Pilot経験である。記入用紙から画面フォームへの一般的な継承は確認できるが、特定の様式からHyperCard、Protek Pilot、HTML+へ順に伝わった個別の因果関係は確認できない。

## 系譜

```text
HTML ISINDEX ───────────────────────────────┐
                                            ├→ HTML+ FORM → HTML 2.0 FORM → 現行HTML <form>
MSG ────────────────────────────────────────┘

1992 INPUT案 → 1993 QUERYFORM案    [QUERYFORMからMSGまでの変更記録は未回収]

HyperCard → HP Protek Pilot → HTML+の業務アプリケーション要求
                                      └→ HTML+ FORMの設計背景
```

記入用紙 → 画面上のフォーム入力は、HTML+以前に確立した一般的な媒体・UI上の継承として確認できる。ただし、この一般経路を特定のHTML+設計へ結ぶ直接史料がないため、上の確認済み系譜には接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1986-08 | [Smith and Mosier, *Guidelines for Designing User Interface Software* §1.4](../../raw/www.hcibib.org/sam/1.html#1.4)（[公開元](https://www.hcibib.org/sam/1.html#1.4)） | 米空軍技術報告 | 画面上のデータフォームをラベル付き欄への入力方式として定義し、紙の原票から転記するときは画面構成を原票へ適合させるよう勧告する。 | 2026-08-12 |
| 1990-12-01 | [Fan et al., “FormPlus: a form authoring toolkit”](../../raw/research.ibm.com/publications/formplus-a-form-authoring-toolkit)（[公開元](https://research.ibm.com/publications/formplus-a-form-authoring-toolkit)） | COMPSAC論文のIBM出版記録 | 記入用紙から電子フォームへの変換、画面上の設計、記入をFormPlusが扱うことを示す。 | 2026-08-12 |
| 1992-11-27 | [Whitescarver, “interactive hypermedia”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)） | www-talkメール | `INPUT`、型、長さ、初期値、検索またはメールによる送信を提案する。 | 2026-08-12 |
| 1993-01-16 | [Whitescarver, “INPUT tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0079.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0079.html)） | www-talkメール | Web以前に実装したという未特定の`INPUT`仕様に言及し、型付き入力、検索、スクリプトへの値渡しを課題として列挙する。 | 2026-08-12 |
| 1993-01-19 | [Connolly, “Re: INPUT tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0083.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0083.html)） | www-talkメール | 複数の`INPUT`と`QUERYFORM`を使い、利用者が記入した値を問い合わせへ組み立てる案を示す。 | 2026-08-12 |
| 1993-01-19 | [Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） | www-talkメール | Connolly案を受け、チェックボックス、数値欄、ラジオボタン、単一・複数選択メニューへ拡張する。 | 2026-08-12 |
| 1993-01-20 | [Whitescarver, “Re: EDI for forms?”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0095.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0095.html)） | www-talkメール | SGML対話インターフェイスの既知の先例はないとし、GUI開発ツールから入力欄を検討する可能性を示すが、特定ツールは挙げない。 | 2026-08-12 |
| 1993-04-05 | [Raggett, “Re WWW ideas”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0015.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0015.html)） | www-talkメール | 1月の議論に基づく`QUERYFORM`、`INPUT`、`SELECT`、`CHOICE`のHTML拡張案と、記入、送信、サーバー処理の流れを示す。 | 2026-08-12 |
| 1993-06-18 | [Raggett, “Re: HTML+ and Tables”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)） | www-talkメール | 最新HTML+ DTDで`FORM`が`MSG`を置き換え、複数フォームのラッパーとcommit時の動作を定めたことを明記する。 | 2026-08-12 |
| 1993-06-18 | [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） | www-talkメール | HTML+ `FORM`のDTDと、Raggettの先行エキスパートシステムに基づく計算機構成フォームを示す。 | 2026-08-12 |
| 1993-07-14 | [Andreessen, “XMosaic 1.2 and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)） | www-talkメール | NCSA X Mosaic 1.2がまだHTML+を実装していなかったことを示す。 | 2026-08-12 |
| 1993-09-05 | [Andreessen, “Fill-out form support”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)） | www-talkメール | Mosaic 2.0 prerelease 3にフォーム機能を実装したことを示す。 | 2026-08-12 |
| 1993-09-09 | [Raggett, “Re: Submitting input-form data to server”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0875.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0875.html)） | www-talkメール | RaggettがAndreessenの`name=value&name=value`送信案を受け入れたことを示す。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §10](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） | Internet-Draft | `FORM`の範囲、`ACTION`、入力欄、送信操作、既存プラットフォーム慣習を定義する。 | 2026-08-12 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | Standards Track RFC | HTML 2.0フォームを定義し、フォーム資料のHTML+由来を明記する。 | 2026-08-12 |
| 2004-12-01 | [Raggett, “My involvement with the early days of the Web”](../../raw/www.w3.org/People/Raggett/the-early-days-of-the-Web.html)（[公開元](https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html)） | 設計者による回顧 | HyperCardに触発されたProtek Pilotのフォームと、同種のアプリケーションを可能にするHTML・HTTP拡張からHTML+へ至った経緯を述べる。 | 2026-08-12 |

## 確度

**A**

RFC 1866がHTML+フォームからの導出を明記し、要素の役割も確認できるため。HTML+より上流の複数経路に残る欠落は、HTML 2.0への直接系譜に対するこの評価を下げない。

## 否定された仮説

NCSA X MosaicがHTML+ `FORM`の最初の発案元だったという説明。HTML+ `FORM`のDTDは1993年6月に確認できる一方、Andreessenは7月にMosaicがHTML+未対応と述べ、フォーム実装を報告したのは9月である。ただしNCSAは初期実装を行い、送信形式の設計へ寄与しているため、後続の共同形成者ではある。[Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） [Andreessen, “XMosaic 1.2 and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)） [Andreessen, “Fill-out form support”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)） [Raggett, “Re: Submitting input-form data to server”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0875.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0875.html)）

特定の記入用紙または一般的なGUIツールキットからHTML+ `FORM`がそのまま移植されたという説明。紙の原票と画面フォームの一般的な関係、HyperCardからProtek Pilotへの影響、HTML+が既存プラットフォームの操作慣習を利用したことは確認できるが、特定の様式または汎用GUIツールキットから`FORM`を採用した記録はない。

## 未解決

- 1993年4月の`QUERYFORM`から、6月に`FORM`が直接置き換えた`MSG`へ至る変更記録と、`MSG`の最初期定義。
- Whitescarverが1993年1月に「Web以前に実装した」と述べた`INPUT`仕様と実装の名称、内容、HTML+への寄与。
- 記入用紙からHyperCard、Protek Pilot、HTML+へ至る間に、Raggettが参照した特定の様式またはフォーム設計資料があったか。
