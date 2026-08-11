---
status: 完成
---

# `<blockquote>`

## 概要

Dan Connollyが1992年12月4日のメールで、新しい段落スタイルとしてHTML DTDへ追加すると説明し、1993年1月6日版DTDで確認できる。HTMLより前の同名要素はDocBook 1.0にあり、Connollyが導入直前にDocBook語彙を検討していたことも確認できるが、本人の後代の回顧はDocBook説とUsenet説の間で定まらず、直接祖先は確定できない。

## 現在の意味

WHATWG HTML Living Standardでは、別の出典から引用されたセクションを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element)、2026-08-09確認）

## HTMLへの導入

Dan Connollyは1992年12月4日のメールで、既存コードを大きく変えず`html.dtd`へ加えられる新しい段落スタイルの例として`BLOCKQUOTE`を挙げる。1993年6月草案収録のRCS id `93/01/06`のDTDは、他のソースを引用する要素として宣言する。[Connolly, “Re: The spec evolves...”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)） [1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）

## HTML直前の祖先

未確認。1992年11月12日のファイル時刻を持つDocBook 1.0 DTDに同名の`BlockQuote`があり、Connollyは11月19日にO'Reilly／HaL DocBook語彙をHTMLの候補として検討していた。しかし、そのメールは`BlockQuote`を候補として列挙せず、2017年のConnollyの回顧もDocBook説を示唆した後にUsenetニュース式引用の影響をより有力とするため、採用因果は確定できない。[DocBook 1.0 DTD](../../raw/www.oasis-open.org/docbook/sgml/1.0/docbk10.zip/docbook.dtd)（[公開元](https://www.oasis-open.org/docbook/sgml/1.0/docbk10.zip)） [Connolly, “HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)） [Palmer, “The Origin of Blockquote”](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)） [Connolly, “Re: Provenance of the blockquote element”](../../raw/lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)（[公開元](https://lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)）

## さらに上流の由来

### 証拠

OASISが現在配布するDocBook 1.0 DTDはRelease 1.0、Copyright 1992と記し、アーカイブ内のファイル時刻は1992年11月12日である。同DTDは`Para`と共通の内容モデルを持つ`BlockQuote`を宣言する。[DocBook 1.0 DTD](../../raw/www.oasis-open.org/docbook/sgml/1.0/docbk10.zip/docbook.dtd)（[公開元](https://www.oasis-open.org/docbook/sgml/1.0/docbk10.zip)）Connollyは11月19日、O'Reilly／HaL DocBookの語彙をHTMLの候補として列挙したが、列挙に`BlockQuote`は含まれない。[Connolly, “HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)）

2017年の史料再探索でConnollyは、DocBook 1.0の同名要素とHTMLより早いファイル時刻を確認した際に由来問題が解けたとの認識を示した。一方、同年9月にはDocBookよりUsenetニュース式引用の影響がありそうだと回想した。いずれも当時の採用記録または確定的な記憶としては提示されず、相互に競合する。[Palmer, “The Origin of Blockquote”](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)） [Connolly, “Re: Provenance of the blockquote element”](../../raw/lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)（[公開元](https://lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)）Texinfoには`@quotation`等があるが同名ではなく、LaTeX、FrameMaker MML、MidasWWWも候補を確定できなかった。

### 解釈

DocBook 1.0はHTML以前の同名語彙であり、Connollyが導入直前にDocBookを設計候補として知っていたことから、単なる名称類似より強い候補である。しかし要素単位の採用記録はなく、導入者自身の後代の説明もUsenet説と競合するため、DocBookを直接祖先とはできない。Usenet、SGML Annex E系の`LQ`、LaTeX、Texinfo、CERN SGMLも確定系譜には接続しない。

## 系譜

HTML DTDへの`BLOCKQUOTE`追加説明（1992-12-04）→ HTML DTD `BLOCKQUOTE`（1993-01-06）→ 現行HTML `<blockquote>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-11-12（アーカイブ内ファイル時刻） | [DocBook 1.0 DTD](../../raw/www.oasis-open.org/docbook/sgml/1.0/docbk10.zip/docbook.dtd)（[公開元](https://www.oasis-open.org/docbook/sgml/1.0/docbk10.zip)） | OASIS配布のO'Reilly／HaL DocBook DTD | Release 1.0、Copyright 1992のDTDが`Para`と共通の内容モデルを持つ同名の`BlockQuote`を宣言する。日付は配布アーカイブ内のファイル時刻であり、公表日とは断定しない。 | 2026-08-11 |
| 1992-11-13（更新日） | [*Tags used in HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | 当時のHTMLタグ一覧に`BLOCKQUOTE`を確認できない。 | 2026-08-09 |
| 1992-11-19 | [“HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)） | www-talkへの導入者の投稿 | ConnollyがO'Reilly／HaL DocBook語彙をHTMLの候補として検討していたが、列挙した候補に`BlockQuote`はない。 | 2026-08-11 |
| 1992-12-04 | [“Re: The spec evolves...”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)） | www-talkへの当事者投稿 | Connollyが新しい段落スタイルとして`BLOCKQUOTE`をDTDへ追加すると説明する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `BLOCKQUOTE`の引用用途、典型的な描画、例、DTD宣言を記録する。 | 2026-08-09 |
| 2017-08-28 | [Sean B. Palmer, “The Origin of Blockquote”](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)） | 導入者を含む史料再探索ログ | DocBook 1.0の同名要素とHTMLより早いファイル時刻を確認し、Connollyが由来問題の解決との認識を示す。一方、同時代の要素単位の採用記録は提示しない。 | 2026-08-11 |
| 2017-09-11 | [Dan Connolly, “Re: Provenance of the blockquote element”](../../raw/lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)（[公開元](https://lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)） | 導入者による回顧 | Usenetニューススタイル引用の影響を有力候補として挙げるが、当時の記録による確定ではない。 | 2026-08-11 |

## 確度

**B**

HTMLへ加えた主体と設計意図は当事者資料で確認できるが、HTML以前の具体的祖先を確認できないため。

## 否定された仮説

DocBookを確定した直接祖先とする説明。HTMLより早い同名DTD、導入直前のDocBook検討、2017年のConnollyの反応は有力な候補を形成するが、要素単位の採用記録がなく、同じ導入者のUsenet説と競合する。SGML Annex E系、CERN SGML、LaTeX、Texinfo、印刷上のブロック引用、Usenetニュース式引用も同様に確定系譜にはしない。

## 未解決

- 1992年11月19日のDocBook検討から12月4日の`BLOCKQUOTE`追加までに、要素単位の採用判断を示すConnollyのConvexメール、W3Cへ移されたRCSの`,v`全版、11月23日の`shar`アーカイブ、または`docbook@ora.com`の1991〜1992年アーカイブは公開されるか。[Palmer, “The Origin of Blockquote”](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)）
- それらの同時代資料は、DocBook説とUsenetニュース式引用説のどちらかを支持または反証するか。

2017年の公開再探索ログとその後の公開スレッドまで再監査したが、要素単位の採用記録は提示されなかった。以後は上記資料のいずれかが新たに公開された場合にだけ再開する。
