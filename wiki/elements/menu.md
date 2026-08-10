---
status: 完成
---

# `<menu>`

## 概要

1992年2月11日のHTTP保存日時を持つWorldWideWeb test sourceで`MENU`と`LI`の実例を確認できる。一方、CERN Line Mode Browser change historyは2月12日より後、3月27日より前のversion 1.2aで`MENU`と`DIR`を将来利用のため導入したと記録し、両資料の時系列は解消できていない。同年5月には検索結果生成に`MENU`が使われ、後続資料は`UL`よりcompactで通常1 item 1 lineのlistとする。初期の表示別list分類から現行のcommand semanticsへの再定義経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、利用者が実行・起動できるcommandを`li`で並べたunordered listとしてtoolbarを表し、`ul`のsemantic alternativeとされる。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element)、2026-08-09確認）

## HTMLへの導入

1992年1月9日にBerners-Leeがwww-talkへ添付したHTML説明はlist開始tagを`UL`と`OL`だけとしており、`MENU`と`DIR`を含まない。W3Cが公開するWorldWideWeb test sourceはHTTP `Last-Modified`を2月11日とし、`MENU`と`LI`による実例を含む。CERN Line Mode Browser change historyは、2月12日のversion 1.2より後、3月27日に修正された1.2fより前の1.2aで`MENU`と`DIR`を「将来利用のため」導入したと記録する。保存日時とversion区間の前後は解消できず、2月11日を公開日または実装日とは断定しない。Berners-Leeは5月25日に検索結果の選択肢を`MENU`で、翌26日にdirectory listingを`DIR`で生成する例を示した。6月26日のDTD議論は`MENU`をcurrent HTMLのtagに含め、7月15日のConnolly DTDは`MENU`を`UL`、`OL`、`DIR`と同じ`LI` list familyへ収録する。後続のCERNタグ一覧は`MENU`を`UL`よりcompactな小さいparagraphのlist、典型的には1 item 1 lineと説明する。要素を`UL`と分けた判断、名称のsource、変更担当者は記録されていない。[1992年1月のHTML説明](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html) [WorldWideWeb test source](https://www.w3.org/Test/test_source.txt) [Line Mode Browser change history](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html) [Berners-Lee, “Re: search engines & views”](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html) [Berners-Lee, “Making a simple file server for unix”](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html) [Berners-Lee, “Re: HTML DTD”](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html) [Connolly, “HTML DTD enclosed”](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) [Berners-Lee, *HTML Tags*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

## HTML直前の祖先

未確認。GUI menu、先行文書体系のlist、または特定browserの表示styleからHTML `MENU`へ採用したことを示す資料は確認できない。

## さらに上流の由来

### 証拠

1992年の直接史料が示すのは、`MENU`と`DIR`を将来利用のため同時に導入し、検索結果の選択肢とdirectory listingに使い分け、後に`UL`、`MENU`、`DIR`をitem長とcompactnessで区別したlist modelまでである。HTML+はこの表示別分類を拡張`UL`へ一般化する対象として扱った。[Line Mode Browser change history](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html) [1992年5月25日の`MENU`例](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html) [1992年5月26日の`DIR`例](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html) [Dave Raggett, *A Review of the HTML+ Document Format*](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)

### 解釈

初期`MENU`はGUI widgetから採用されたとは確認できず、検索結果の選択肢を並べる用途を含む、短いitemのlist variantだったと説明できる。現行のcommand toolbar semanticsへの経路は未解決である。

## 系譜

確認できる時系列は、WorldWideWeb test sourceのHTML `MENU`（HTTP保存日時1992-02-11）、CERN Line Mode BrowserのHTML `MENU`（version 1.2a、同年2月12日より後）、初期HTML `MENU` compact list（1992）、HTML 2.0 `MENU` menu list（1995）、現行HTML `<menu>` command toolbarである。最初の二資料の時系列、実装から仕様への採用因果、意味の再定義経路は未確認のため矢印で接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-01-09 | [“Re: Is there a paper which describes the www protocol?”](../../raw/lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)） | Berners-Leeによるwww-talk mail | 添付されたHTML説明のlist開始tagは`UL`と`OL`だけで、`MENU`と`DIR`の導入前を示す比較点となる。 | 2026-08-10 |
| 1992-02-11（HTTP Last-Modified） | [WorldWideWeb `test_source.txt`](../../raw/www.w3.org/Test/test_source.txt)（[公開元](https://www.w3.org/Test/test_source.txt)） | CERN/W3C保存の実装test source | `MENU`と`LI`による実例を含む。保存日時はLine Mode Browser 1.2aの記録区間より早いが、作成日、実装日、公開日のどれかは確定できない。 | 2026-08-10 |
| 1992-02-12より後、1992-03-27より前（version 1.2a、個別日付なし） | [*Features added*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)） | CERN Line Mode Browser change history | `MENU`と`DIR`を将来利用のため導入したと記録する。 | 2026-08-10 |
| 1992-05-25 | [“Re: search engines & views”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html)） | Berners-Leeによるwww-talk mail | grep結果の選択肢を`MENU`と`LI`で生成し、「HTML for a menu」と説明する。 | 2026-08-10 |
| 1992-05-26 | [“Making a simple file server for unix”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html)） | Berners-Leeによるwww-talk mail | directory内のfileへのlink listを`DIR`で生成し、前日の`MENU`例との用途上の使い分けを確認できる。 | 2026-08-10 |
| 1992-06-26 | [“Re: HTML DTD”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)） | www-talk mail | Berners-Leeがcurrent HTMLのtag集合に`MENU`を列挙する。 | 2026-08-10 |
| 1992-07-15 | [“HTML DTD enclosed”](../../raw/lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)） | DTD添付mail | `MENU`を`UL`、`OL`、`DIR`と同じ`LI` list familyとして宣言する。 | 2026-08-09 |
| 1992-11-13（更新日） | [*HTML Tags*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料のhistorical snapshot | `MENU`を`UL`よりcompactで、典型的には1 item 1 lineのlistと定義する。 | 2026-08-09 |
| 1993-07-23（登録日） | [*Hypertext Markup Language (HTML)* version 1.2](../../raw/www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） | IETF Internet-Draft | `MENU`をcompact listとして維持する。 | 2026-08-09 |
| 1994 | [*A Review of the HTML+ Document Format*](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） | HTML+設計論文 | 旧`MENU`と`DIR`を拡張`UL`へ置き換える表示分類の一般化を説明する。 | 2026-08-11 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.6.4)） | IETF Standards Track RFC | `MENU`を通常1 item 1 lineで`UL`よりcompactなmenu listとして標準化する。 | 2026-08-09 |

## 確度

**C**

確認可能な初期markup、実装記録、初期用例、当時の意味は特定できるが、最初期二資料の時系列、`UL`と別要素にした要求、変更担当者、具体的祖先を確認できないため。

## 否定された仮説

初期HTMLの創設時から`MENU`が存在したとする説明。1990年の[WorldWideWeb test backup](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)、1991年の[parser source](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)、1992年1月9日の[HTML説明](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)には`MENU`がない。また、2月11日のHTTP保存日時だけからLine Mode Browser 1.2aより先に実装・公開されたと断定する説明も採らない。名称または選択肢を並べる用途だけからGUI menuを直接祖先とする説明は、採用因果を示す史料がない。

## 未解決

- Line Mode Browser 1.2から1.2aのsource diff、配布告知、開発mailから、`MENU`と`DIR`の変更担当者、`UL`と別要素にした要求、名称のsourceを確認できるか。
- `test_source.txt`のHTTP保存日時とLine Mode Browser 1.2aの導入区間の前後を、RCS履歴または配布archiveで解消できるか。
- 初期のcompact listから現行のcommand toolbar／`ul` semantic alternativeへ意味を再定義した仕様変更はどれか。
