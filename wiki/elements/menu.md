---
status: 完成
---

# `<menu>`

## 概要

1992年2月11日のHTTP保存日時を持つWorldWideWebテストソースで`MENU`と`LI`の実例を確認できる。一方、CERN Line Mode Browser変更履歴は2月12日より後、3月27日より前のバージョン1.2aで`MENU`と`DIR`を将来利用のため導入したと記録し、両資料の時系列は解消できていない。同年5月には検索結果生成に`MENU`が使われ、後続資料は`UL`より項目を詰め、通常1項目1行で表示するリストとする。HTML 4.01で非推奨となった後、WHATWGはWebアプリケーション向けのメニューと共有コマンド状態という要求に対して既存要素を再利用し、2004年9月にはナビゲーションリンクとコマンドの構造化リストへ再定義した。W3Cの現存公開配布物は2.11以降であり、初期導入の担当者、具体的祖先、命名理由は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、利用者が実行・起動できるコマンドを`li`で並べた順序なしリストとしてツールバーを表し、`ul`の意味上の代替とされる。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element)、2026-08-09確認）

## HTMLへの導入

1992年1月9日にBerners-Leeがwww-talkへ添付したHTML説明はリスト開始タグを`UL`と`OL`だけとしており、`MENU`と`DIR`を含まない。W3Cが公開するWorldWideWebテストソースはHTTP `Last-Modified`を2月11日とし、`MENU`と`LI`による実例を含む。CERN Line Mode Browser変更履歴は、2月12日のバージョン1.2より後、3月27日に修正された1.2fより前の1.2aで`MENU`と`DIR`を「将来利用のため」導入したと記録する。保存日時とバージョン区間の前後は解消できず、2月11日を公開日または実装日とは断定しない。Berners-Leeは5月25日に検索結果の選択肢を`MENU`で、翌26日にディレクトリ一覧を`DIR`で生成する例を示した。6月26日のDTD議論は`MENU`を現行HTMLのタグに含め、7月15日のConnolly DTDは`MENU`を`UL`、`OL`、`DIR`と同じ`LI`リスト一群へ収録する。後続のCERNタグ一覧は`MENU`を`UL`より簡潔な小さい段落のリスト、典型的には1項目1行と説明する。要素を`UL`と分けた判断、名称のソース、変更担当者は記録されていない。[1992年1月のHTML説明](../../raw/lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)） [WorldWideWeb test source](../../raw/www.w3.org/Test/test_source.txt)（[公開元](https://www.w3.org/Test/test_source.txt)） [Line Mode Browser change history](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)） [Berners-Lee, “Re: search engines & views”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html)） [Berners-Lee, “Making a simple file server for unix”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html)） [Berners-Lee, “Re: HTML DTD”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)） [Connolly, “HTML DTD enclosed”](../../raw/lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)） [Berners-Lee, *HTML Tags*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)）

W3Cが2016年に公開した旧FTPの移転目録は、Line Mode Browserの旧ソース配布物として2.11、2.12、2.13、2.14、2.15、3.0以降を列挙するが、1.2または1.2aを含まない。この目録、W3Cの1992年保存ディレクトリ、公開メール、想定RCSパスから欠落版を回収できなかったため、1.2から1.2aへの差分とテストソースの時系列は新しい保存配布物または履歴が現れるまで確定しない。[W3C FTP server shutdown](../../raw/www.w3.org/2016/11/ftp-shutdown/info.html)（[公開元](https://www.w3.org/2016/11/ftp-shutdown/info.html)）

## HTML直前の祖先

未確認。GUIメニュー、先行文書体系のリスト、または特定ブラウザーの表示スタイルからHTML `MENU`へ採用したことを示す資料は確認できない。

## さらに上流の由来

### 証拠

1992年の直接史料が示すのは、`MENU`と`DIR`を将来利用のため同時に導入し、検索結果の選択肢とディレクトリ一覧に使い分け、後に`UL`、`MENU`、`DIR`を項目長と簡潔さで区別したリストモデルまでである。HTML+はこの表示別分類を拡張`UL`へ一般化する対象として扱った。[Line Mode Browser change history](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)） [1992年5月25日の`MENU`例](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html)） [1992年5月26日の`DIR`例](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html)） [Dave Raggett, *A Review of the HTML+ Document Format*](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)）

HTML 4.01は`MENU`と`DIR`を非推奨とした。2004年4月のWeb Applications Markup Language 1.0は、サイトごとに異なるメニューUIを避けるネイティブなポップアップ／コンテキストメニューと、メニュー項目やツールバーボタンなど複数の入口で無効状態を共有するコマンド更新を要求に挙げた。9月23日のWeb Applications 1.0は既存の`menu`をナビゲーションリンクとコマンドの構造化リストとして定義し、ラベルのないものは`ul`と同様に表示する一方、ラベル付きのものは文書内表示から隠してメニューとして構築した。11月に編集者Ian Hicksonは、例で既存のリンクを使った理由を既存マークアップからの変更を最小にするためと説明した。2006年のWHATWG草案と2008年のW3C初回草案は`menu`をコマンドのリストとし、`toolbar`型を明示した。現行仕様はこのコマンドリストを、`ul`の意味上の代替となるツールバーとして維持する。[HTML 4.01, §10.4](../../raw/www.w3.org/TR/html401/html40.zip/struct/lists.html)（[公開元](https://www.w3.org/TR/html401/struct/lists.html#h-10.4)） [Web Applications Markup Language 1.0](../../raw/www.hixie.ch/specs/html/apps/web-apps-1)（[公開元](http://www.hixie.ch/specs/html/apps/web-apps-1)） [Web Applications 1.0, 23 September 2004](../../raw/web.archive.org/web/20041009144718id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041009144718id_/http://whatwg.org/specs/web-apps/current-work/)） [Hickson, “Web Applications 1.0 and Menu Labels”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/044780.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/044780.html)） [Web Applications 1.0, 28 March 2006](../../raw/platform.html5.org/history/webapps/r15.html)（[公開元](https://platform.html5.org/history/webapps/r15.html)） [HTML 5, 22 January 2008](../../raw/www.w3.org/TR/2008/WD-html5-20080122/__index)（[公開元](https://www.w3.org/TR/2008/WD-html5-20080122/#the-menu)） [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開元](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element)）

### 解釈

初期`MENU`はGUIウィジェットから採用されたとは確認できず、検索結果の選択肢を並べる用途を含む、短い項目のリストの変種だったと説明できる。現行仕様における「コマンドを並べるツールバー」という意味は、この初期用途から連続的に確認できるものではなく、非推奨期間を経てWebアプリケーションの一貫したメニューUIとコマンド状態共有を実現するために再利用された第二の設計段階である。

## 系譜

確認できる時系列は、WorldWideWebテストソースのHTML `MENU`（HTTP保存日時1992-02-11）、CERN Line Mode BrowserのHTML `MENU`（バージョン1.2a、同年2月12日より後）、初期HTML `MENU`の簡潔なリスト（1992）→HTML 2.0 `MENU`メニューリスト（1995）→HTML 4.01の非推奨`MENU`（1999）→Web Applications 1.0のナビゲーションリンクとコマンドの構造化リスト（2004）→現行HTML `<menu>`が表すコマンド用ツールバーである。最初の二資料の時系列と実装から仕様への採用因果は未確認のため、そこには矢印を置かない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-01-09 | [“Re: Is there a paper which describes the www protocol?”](../../raw/lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)） | Berners-Leeによるwww-talkメール | 添付されたHTML説明のリスト開始タグは`UL`と`OL`だけで、`MENU`と`DIR`の導入前を示す比較点となる。 | 2026-08-10 |
| 1992-02-11（HTTP Last-Modified） | [WorldWideWeb `test_source.txt`](../../raw/www.w3.org/Test/test_source.txt)（[公開元](https://www.w3.org/Test/test_source.txt)） | CERN/W3C保存の実装テストソース | `MENU`と`LI`による実例を含む。保存日時はLine Mode Browser 1.2aの記録区間より早いが、作成日、実装日、公開日のどれかは確定できない。 | 2026-08-10 |
| 1992-02-12より後、1992-03-27より前（バージョン1.2a、個別日付なし） | [*Features added*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)） | CERN Line Mode Browser change history | `MENU`と`DIR`を将来利用のため導入したと記録する。 | 2026-08-10 |
| 1992-05-25 | [“Re: search engines & views”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0009.html)） | Berners-Leeによるwww-talkメール | 検索結果の選択肢を`MENU`と`LI`で生成し、「メニュー用のHTML」と説明する。 | 2026-08-10 |
| 1992-05-26 | [“Making a simple file server for unix”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0012.html)） | Berners-Leeによるwww-talkメール | ディレクトリ内のファイルへのリンクリストを`DIR`で生成し、前日の`MENU`例との用途上の使い分けを確認できる。 | 2026-08-10 |
| 1992-06-26 | [“Re: HTML DTD”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)） | www-talkメール | Berners-Leeが現行HTMLのタグ集合に`MENU`を列挙する。 | 2026-08-10 |
| 1992-07-15 | [“HTML DTD enclosed”](../../raw/lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)） | DTD添付メール | `MENU`を`UL`、`OL`、`DIR`と同じ`LI`リスト一群として宣言する。 | 2026-08-09 |
| 1992-11-13（更新日） | [*HTML Tags*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | `MENU`を`UL`より項目を詰め、典型的には1項目1行で表示するリストと定義する。 | 2026-08-09 |
| 1993-07-23（登録日） | [*Hypertext Markup Language (HTML)* version 1.2](../../raw/www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） | IETF Internet-Draft | `MENU`を`UL`より項目を詰めて表示するリストとして維持する。 | 2026-08-09 |
| 1994 | [*A Review of the HTML+ Document Format*](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） | HTML+設計論文 | 旧`MENU`と`DIR`を拡張`UL`へ置き換える表示分類の一般化を説明する。 | 2026-08-11 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.6.4)） | IETF Standards Track RFC | `MENU`を通常1項目1行で`UL`より項目を詰めて表示するメニューリストとして標準化する。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01, §10.4](../../raw/www.w3.org/TR/html401/html40.zip/struct/lists.html)（[公開元](https://www.w3.org/TR/html401/struct/lists.html#h-10.4)） | W3C Recommendation | `MENU`と`DIR`を非推奨とする。 | 2026-08-11 |
| 2004-04-07 | [*Web Applications Markup Language 1.0*](../../raw/www.hixie.ch/specs/html/apps/web-apps-1)（[公開元](http://www.hixie.ch/specs/html/apps/web-apps-1)） | Ian Hickson編集の草案 | Webアプリケーション向けの一貫したネイティブなポップアップ／コンテキストメニューと、複数のUI入口で状態を共有するコマンド更新を要求に挙げる。 | 2026-08-11 |
| 2004-09-23 | [*Web Applications 1.0*](../../raw/web.archive.org/web/20041009144718id_/http%3A/whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041009144718id_/http://whatwg.org/specs/web-apps/current-work/)） | WHATWG草案 | `menu`をナビゲーションリンクとコマンドの構造化リストに再定義し、ラベルの有無に応じて通常リストまたはメニューとして扱う。 | 2026-08-11 |
| 2004-11-21 | [“Web Applications 1.0 and Menu Labels”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/044780.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/044780.html)） | Ian HicksonによるWHATWGメール | メニュー例でリンクを使った理由を、既存マークアップからの変更を最小にし移行を容易にするためと説明する。 | 2026-08-11 |
| 2006-03-28 | [*Web Applications 1.0*](../../raw/platform.html5.org/history/webapps/r15.html)（[公開元](https://platform.html5.org/history/webapps/r15.html)） | WHATWG草案 | `menu`をコマンドのリストとし、コンテキストメニュー用の`popup`とツールバー用の`toolbar`を区別する。 | 2026-08-11 |
| 2008-01-22 | [*HTML 5*](../../raw/www.w3.org/TR/2008/WD-html5-20080122/__index)（[公開元](https://www.w3.org/TR/2008/WD-html5-20080122/#the-menu)） | W3C First Public Working Draft | `menu`をコマンドのリストとして維持し、`context`、`toolbar`、既定の`list`状態を定義する。 | 2026-08-11 |
| 2016-11 | [*W3C FTP server shutdown*](../../raw/www.w3.org/2016/11/ftp-shutdown/info.html)（[公開元](https://www.w3.org/2016/11/ftp-shutdown/info.html)） | W3Cの旧FTP保存目録 | Line Mode Browserの旧ソース配布物として2.11以降を列挙するが、1.2と1.2aは含まない。 | 2026-08-12 |

## 確度

**C**

確認可能な初期のマークアップ、実装記録、初期用例、当時の意味は特定できるが、最初期二資料の時系列、`UL`と別要素にした要求、変更担当者、具体的祖先を確認できないため。

## 否定された仮説

初期HTMLの創設時から`MENU`が存在したとする説明。1990年の[WorldWideWeb test backup](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)）、1991年の[parser source](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)）、1992年1月9日の[HTML説明](../../raw/lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)）には`MENU`がない。また、2月11日のHTTP保存日時だけからLine Mode Browser 1.2aより先に実装・公開されたと断定する説明も採らない。名称または選択肢を並べる用途だけからGUIメニューを直接祖先とする説明は、採用因果を示す史料がない。

## 未解決

- 新たにLine Mode Browser 1.2／1.2aのソース、差分、配布告知、開発メールが保存公開された場合、`MENU`と`DIR`の変更担当者、`UL`と別要素にした要求、名称のソースを確認できるか。
- 新たに`test_source.txt`のRCS履歴または同時代の配布アーカイブが保存公開された場合、HTTP保存日時とLine Mode Browser 1.2aの導入区間の前後を解消できるか。
