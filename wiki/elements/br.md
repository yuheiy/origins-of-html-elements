---
status: 完成
---

# `<br>`

## 概要

1993年7月のCERN/IETF HTML draftにはない。1993年9月5日公開のNCSA Mosaic 2.0 prerelease 3ではline break tagとして実装され、同月10日にDave Raggettが既存HTML+ draftの`BR`を`L`へ置き換える案を示した。両系列の前後関係、発案理由、発案者、HTML 2.0への採用経路は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、contentの一部であるline breakを表す。poemやaddressのように改行自体が内容である場合に限って使い、paragraphの分離には使わない。 [HTML Living Standard](../../raw/html-living-standard/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element)、2026-08-09確認）

## HTMLへの導入

1993年7月の`draft-ietf-iiir-html-01`には`BR`がない。Marc Andreessenは同年9月5日にNCSA Mosaic 2.0 prerelease 3をwww-talkで公開し、原配布物に由来する`CHANGES`は2.0 prerelease 2から3への変更として`br`と`hr`をそれぞれlinebreakとhorizontal ruleとして追加したと記録する。一方、Dave Raggettは9月10日に既存HTML+ draftのline break tag `BR`を`L`へ置き換える予定を述べており、NCSAとは別にHTML+系列にも`BR`が存在した。1993年11月8日のHTML+ DTDは結局`BR`をnormal text内の強制改行として収録する。既存HTML+ draftへ`BR`が入った日付、NCSA実装との前後・因果関係、HTML 2.0への採用経路は確認できない。[1993年7月HTML Internet-Draft](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) [prerelease 3公開mailの保存複製](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html) [NCSA Mosaic `CHANGES`の保存複製](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701) [Raggett, “Your views on changes to HTML+”の保存複製](http://1997.webhistory.org/www.lists/www-talk.1993q3/0883.html) [HTML+ DTD](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)

## HTML直前の祖先

未確認。NCSA Mosaic 2.0 prerelease 3と既存HTML+ draftの双方で`BR`を確認できるが、両者の前後・因果関係や、さらに先行するmarkup、browser、text formatting commandから採用したことを示す資料は確認できない。

## さらに上流の由来

### 証拠

確認できる直接史料はNCSA Mosaicの実装とHTML+ draftの存在までであり、それ以前の系譜や両者間の関係を示さない。

### 解釈

なし。

## 系譜

確認できる時系列は、NCSA Mosaic 2.0 prerelease 3のHTML `BR`（1993-09-05）、9月10日時点で既存と記されたHTML+ `BR`、HTML+ Internet-Draft `BR`（1993-11）、HTML 2.0 `BR`（1995）、現行HTML `<br>`である。NCSAとHTML+の前後関係を含め、各段階の採用因果は未確認のため矢印で接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-07-14 | [“XMosaic 1.2 and HTML+”](../../raw/items/1997.webhistory.org/6489d65e200ad564-0143.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)） | NCSA開発者によるwww-talk mailの保存複製 | AndreessenがMosaic 1.2ではHTML+ supportをまだ実装していないと述べる。後のpre3がHTML+を採用したことまでは示さない。 | 2026-08-10 |
| 1993-07-23（登録日） | [*Hypertext Markup Language (HTML)* revision 01](../../raw/items/www.w3.org/afa66c4ab9d857d4-draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） | IETF Internet-Draft | 本文とDTDに`BR`がなく、NCSA追加前の比較点となる。 | 2026-08-09 |
| 1993-09-05 | [“NCSA Mosaic for X 2.0 prerelease 3 available”](../../raw/items/ksi.cpsc.ucalgary.ca/18a4b358800e7bf3-821.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)） | NCSA開発者によるwww-talk公開mailの保存複製 | Marc Andreessenがprerelease 3のsourceとbinaryを公開し、新HTML widgetを主要変更として挙げる。 | 2026-08-10 |
| 1993-09-05（公開日） | [NCSA Mosaic `CHANGES`](../../raw/items/github.com/15de36fc052e2cf2-CH.html)（[公開元](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701)） | NCSA配布物由来のchange logの保存複製 | 新しいHTML widgetへ`br`をlinebreak tagとして追加したと記録する。 | 2026-08-10 |
| 1993-09-10 | [“Your views on changes to HTML+”](../../raw/items/1997.webhistory.org/3e7f4eae30ac3d68-0883.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0883.html)） | HTML+編集者によるwww-talk mailの保存複製 | Raggettが既存HTML+ draftの`BR`を`L`へ置き換える案を示し、この時点より前のHTML+系列に`BR`があったことを確認できる。 | 2026-08-10 |
| 1993-11-08 | [HTML+ DTD](../../raw/html-plus/htmlplus_58.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)） | 提案DTD | `BR`をnormal text内の強制改行として収録する。 | 2026-08-11 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/html-2.0/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.8)） | IETF Standards Track RFC | words間のline breakとして`BR`を標準化する。 | 2026-08-09 |

## 確度

**C**

確認可能な初期実装・draftと当時の意味は固定できるが、NCSAとHTML+の前後・因果関係、導入理由、発案者、具体的祖先、標準採用経路を確認できないため。

## 否定された仮説

印刷・typewriter・word processorの強制改行、SGMLのrecord end、または後代の現行用途を、類似だけからHTML `BR`の直接祖先とする説明。HTML+の同名要素だけからHTML+ → NCSA Mosaicとする説明も、Mosaic 1.2のHTML+非対応は確認できるが、pre3の採用を示す記録がないため採らない。

## 未解決

- NCSA Mosaic 2.0 prerelease 3で`BR`を追加した発案者、要求、source commitは確認できるか。
- 1993年6月1日版`htmlplus.dtd`の保存本文を回収し、`BR`が入った日付とNCSA実装との前後・因果関係を確認できるか。
- NCSAまたはHTML+からHTML 2.0へ`BR`を採用した議論は残っているか。
