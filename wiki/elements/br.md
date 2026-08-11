---
status: 完成
---

# `<br>`

## 概要

1993年6月1日版HTML+ DTDの公開と同時代の閲覧は確認できるが、保存本文は回収できず`BR`の収録も確認できない。現存本文では、Dave Raggettの7月12日版HTML+提案が詩や住所のように意味を持つ改行を表す`BR`を定義した。7月末のWWW Workshopでは`BR`を基礎HTMLへ追加することが決まり、8月25日のLynx 2.0.11と9月5日のNCSA Mosaic 2.0プレリリース3で実装を確認できる。HTML+からWorkshop決定への要素単位の採用因果、発案者、HTML 2.0までの経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、内容の一部である改行を表す。詩やアドレスのように改行自体が内容である場合に限って使い、段落の分離には使わない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element)、2026-08-09確認）

## HTMLへの導入

Dave Raggettは1993年6月2日、6月1日版HTML+ DTDの最新版をCERNへアップロードしたと報告し、Tim Berners-Leeが公開先をwww-talkへ転送した。Terry Allenの同日返信は同版を閲覧したうえで`PANEL`、`P MARGIN`、`INPUT`へ具体的にコメントするため、DTDの公開と閲覧は確認できる。ただし保存メールにDTD本文はなく、返信も`BR`へ言及しないため、同版に`BR`があったとは判定できない。1993年7月の`draft-ietf-iiir-html-01`には`BR`がない。現存本文では、Dave Raggettの7月12日版HTML+提案が、通常の空白処理と異なり意味を持つ改行が詩や住所にあることを理由として、現在の左余白から新しい行を始める空要素`BR`を定義する。7月28〜30日のWWW Workshopを記録したTony Sandersの同時代メモは、RFC化前の基礎HTMLへ`BR`と`HR`を追加することが決まり、ブラウザー実装者は実装すべきだと記す。ただしSanders自身が、このメモは確定一覧ではなく、合意とは自身が全員も同意したと理解したという意味だと限定している。Tim Berners-Leeの会合メモはHTML実装レベルとHTML+討議を記録するが、`BR`と`HR`の個別決定を列挙しない。8月25日のLynx 2.0.11公開告知は、現在のスタイルを保って改行する`BR`を追加したと記録する。Marc Andreessenは9月5日にNCSA Mosaic 2.0プレリリース3を公開し、原配布物に由来する`CHANGES`も`br`を改行タグとして追加したと記録する。したがってNCSAを最初の提案または実装とはみなさない。HTML+の検討はWorkshopの目的だったが、先行するHTML+ `BR`を基礎HTMLへ採用したと要素単位で明記する資料はなく、HTML 2.0までの編集経路も未確認である。[Raggett／Berners-Lee, “HTML+ DTD in ftp://info.cern.ch/pub/www/dev/htmlplus.dtd”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/428.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/428.html)） [Allen, “RE htmlplus.dtd of 1 June”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/429.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/429.html)） [1993年7月HTML Internet-Draft](../../raw/www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） [Raggett, *HTML+ (Hypertext markup language)*](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)） [Sanders, “WWWWW Notes”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)） [Berners-Lee, *Tim's notes on W5 July 1993*](../../raw/www.w3.org/History/1994/WWW/WorkingNotes/1993_Workshop/TimNotes.html)（[公開元](https://www.w3.org/History/1994/WWW/WorkingNotes/1993_Workshop/TimNotes.html)） [Montulli, “Lynx 2.0.11 now available!”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/774.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/774.html)） [プレリリース3公開メールの保存複製](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)） [NCSA Mosaic `CHANGES`の保存複製](../../raw/github.com/alandipert/ncsa-mosaic/blob/master/CHANGES)（[公開元](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701)）

## HTML直前の祖先

未確認。基礎HTMLへの追加決定より先にHTML+ `BR`が存在したことは確認できるが、Workshop記録はHTML+からの要素単位の採用を明記せず、さらに先行するマークアップやテキスト整形コマンドからHTML+へ採用したことも示さない。

## さらに上流の由来

### 証拠

HTML+提案は、通常の空白を折り畳む文書でも詩や住所では改行が意味を持つため、`BR`で改行を明示すると説明する。[Raggett, *HTML+ (Hypertext markup language)*](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)）

### 解釈

`BR`は単なる余白調整ではなく、文書内容として意味を持つ改行を通常テキスト内へ残す要求に応じた要素として提案された。HTML+から基礎HTMLへの採用経路は、この要求の一致だけでは確定できない。

## 系譜

確認できる時系列は、HTML+ `BR`（1993-07-12）、WWW Workshopでの基礎HTMLへの追加決定（同年7月28〜30日）、Lynx 2.0.11のHTML `BR`（同年8月25日）、NCSA Mosaic 2.0プレリリース3のHTML `BR`（同年9月5日）、HTML+ Internet-Draft `BR`（同年11月）、HTML 2.0 `BR`（1995）、現行HTML `<br>`である。Workshop決定からLynxおよびNCSA実装への前後関係は確認できるが、実装ごとの採用因果、HTML+からWorkshop決定、WorkshopからHTML 2.0への接続は未確認のため矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-06-01（DTD版）、1993-06-02（投稿） | [“HTML+ DTD in ftp://info.cern.ch/pub/www/dev/htmlplus.dtd”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/428.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/428.html)） | HTML+編集者のメールを含むwww-talk投稿 | Raggettが6月1日版DTDを最新版としてアップロードし、Berners-LeeがCERN上の公開先を転送したことを確認できる。保存メールはDTD本文を含まず、`BR`にも言及しない。 | 2026-08-12 |
| 1993-06-02 | [“RE htmlplus.dtd of 1 June”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/429.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/429.html)） | www-talkへの同時代返信 | Allenが同版の`PANEL`、`P MARGIN`、`INPUT`へ具体的にコメントしており、公開DTDを閲覧したことを確認できる。`BR`への言及はない。 | 2026-08-12 |
| 1993-07-12 | [*HTML+ (Hypertext markup language)*](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)） | HTML+提案のW3C保存PostScript | 詩や住所で意味を持つ改行を表す空要素`BR`を定義し、DTDにも収録する。HTTP `Last-Modified`は1993-07-13である。 | 2026-08-11 |
| 1993-07-14 | [“XMosaic 1.2 and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)） | NCSA開発者によるwww-talkメールの保存複製 | AndreessenがMosaic 1.2ではHTML+対応をまだ実装していないと述べる。後のプレリリース3がHTML+を採用したことまでは示さない。 | 2026-08-10 |
| 1993-07-23（登録日） | [*Hypertext Markup Language (HTML)* revision 01](../../raw/www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） | IETF Internet-Draft | 本文とDTDに`BR`がなく、HTML+提案とWorkshop決定前後の基礎HTML草案を示す比較点となる。 | 2026-08-09 |
| 1993-07-28〜30（会合）、1993-08-10（投稿） | [“WWWWW Notes”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)） | WWW Workshop参加者による同時代メモ | RFC化前の基礎HTMLへ`BR`と`HR`を追加し、ブラウザー実装者へ実装を促す決定を記録する。著者は確定一覧ではないと限定している。 | 2026-08-11 |
| 1993-07-28〜30 | [*Tim's notes on W5 July 1993*](../../raw/www.w3.org/History/1994/WWW/WorkingNotes/1993_Workshop/TimNotes.html)（[公開元](https://www.w3.org/History/1994/WWW/WorkingNotes/1993_Workshop/TimNotes.html)） | Berners-Leeによる会合メモ | HTML実装レベルとHTML+討議を記録するが`BR`と`HR`の個別決定を列挙せず、Sandersメモを確定議事録とみなせないことを示す。 | 2026-08-11 |
| 1993-08-25 | [“Lynx 2.0.11 now available!”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/774.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/774.html)） | Lynx開発者による公開告知 | 現在のスタイルを保って改行する`BR`を追加したと記録し、NCSA Mosaicプレリリース3より早い確認済み実装を示す。 | 2026-08-11 |
| 1993-09-05 | [“NCSA Mosaic for X 2.0 prerelease 3 available”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)） | NCSA開発者によるwww-talk公開メールの保存複製 | Marc Andreessenがプレリリース3のソースと二値を公開し、新HTMLウィジェットを主要変更として挙げる。 | 2026-08-10 |
| 1993-09-05（公開日） | [NCSA Mosaic `CHANGES`](../../raw/github.com/alandipert/ncsa-mosaic/blob/master/CHANGES)（[公開元](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701)） | NCSA配布物由来の変更ログの保存複製 | 新しいHTMLウィジェットへ`br`を改行タグとして追加したと記録する。 | 2026-08-10 |
| 1993-09-10 | [“Your views on changes to HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0883.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0883.html)） | HTML+編集者によるwww-talkメールの保存複製 | Raggettが既存のHTML+草案の`BR`を`L`へ置き換える案を示し、この時点より前のHTML+系列に`BR`があったことを確認できる。 | 2026-08-10 |
| 1993-11-08 | [HTML+ DTD](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)） | 提案DTD | `BR`を通常のテキスト内の強制改行として収録する。 | 2026-08-11 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.8)） | IETF Standards Track RFC | 単語間の改行として`BR`を標準化する。 | 2026-08-09 |

## 確度

**B**

基礎HTMLへの追加決定と、意味を持つ改行を明示する設計要求は確認できるが、具体的な先行物から基礎HTML `BR`への要素単位の採用因果、発案者、HTML 2.0までの編集経路を確認できないため。

## 否定された仮説

NCSA Mosaicを`BR`の最初の提案または実装とする説明。7月12日版HTML+の提案と8月25日のLynx実装が先行する。印刷・タイプライター・ワードプロセッサーの強制改行、SGMLのレコード終端、または後代の現行用途を、類似だけからHTML `BR`の直接祖先とする説明も採らない。HTML+の同名要素とWorkshopでの検討対象だったことだけからHTML+ → 基礎HTMLまたは個別ブラウザーとする説明は、要素単位の採用記録がないため保留する。

## 未解決

- 公開と同時代の閲覧を確認できた1993年6月1日版`htmlplus.dtd`の保存本文は現存するか。同版への`BR`収録と発案者を確認できるか。
- HTML+ `BR`からWWW Workshopの基礎HTML `BR`、またはWorkshop決定からLynxおよびNCSA Mosaicの実装へ至る要素単位の採用記録は残っているか。
- Workshop決定またはHTML+からHTML 2.0へ`BR`を採用した編集記録は残っているか。
