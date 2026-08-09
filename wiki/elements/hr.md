---
status: 完成
---

# `<hr>`

## 概要

1993年7月のCERN/IETF HTML draftにはなく、1993年9月5日に公開されたNCSA Mosaic 2.0 prerelease 3のchange logでhorizontal rule tagとして追加されたことを確認できる。同年11月のHTML+ draftにも収録されるが、発案理由、発案者、標準採用までの因果は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、storyのscene changeやsection内のtopic transitionなど、paragraph-levelのthematic breakを表す。`select`内ではoption群のseparatorも表す。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element)（2026-08-09確認）

## HTMLへの導入

1993年7月の`draft-ietf-iiir-html-01`には`HR`がない。Marc Andreessenは同年9月5日にNCSA Mosaic 2.0 prerelease 3をwww-talkで公開し、原配布物に由来する`CHANGES`は2.0 prerelease 2から3への変更として`br`と`hr`をそれぞれlinebreakとhorizontal ruleとして追加したと記録する。1993年11月のHTML+ draftは`HR`をDTDへ収録する。誰がどの要求から考案し、NCSA実装からHTML+またはHTML 2.0へ採用されたかは確認できない。[1993年7月HTML Internet-Draft](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) [prerelease 3公開mailの保存複製](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html) [NCSA Mosaic `CHANGES`の保存複製](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701) [HTML+ Internet-Draft](https://datatracker.ietf.org/doc/html/draft-raggett-www-html-00)

## HTML直前の祖先

未確認。NCSA Mosaic 2.0 prerelease 3での追加は確認できるが、先行markup、browser、印刷上のruleから採用したことを示す資料は確認できない。

## さらに上流の由来

### 証拠

確認できる直接史料はNCSA Mosaicにおけるhorizontal ruleとしての初期実装までであり、それ以前の系譜を示さない。

### 解釈

なし。

## 系譜

確認できる時系列は、NCSA Mosaic 2.0 prerelease 3のHTML `HR`（1993-09-05）、HTML+ `HR`（1993-11）、HTML 2.0 `HR`（1995）、現行HTML `<hr>`である。各段階の採用因果は未確認のため矢印で接続せず、初期のhorizontal ruleというpresentationと現行のthematic breakも同一視しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-07-14 | “XMosaic 1.2 and HTML+” | NCSA開発者によるwww-talk mailの保存複製 | AndreessenがMosaic 1.2ではHTML+ supportをまだ実装していないと述べる。後のpre3がHTML+を採用したことまでは示さない。 | [Web History保存複製](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html) | 2026-08-10 |
| 1993-07-23（登録日） | *Hypertext Markup Language (HTML)* revision 01 | IETF Internet-Draft | 本文とDTDに`HR`がなく、NCSA追加前の比較点となる。 | [W3C保存text](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) | 2026-08-09 |
| 1993-09-05 | “NCSA Mosaic for X 2.0 prerelease 3 available” | NCSA開発者によるwww-talk公開mailの保存複製 | Marc Andreessenがprerelease 3のsourceとbinaryを公開し、新HTML widgetを主要変更として挙げる。 | [University of Calgary保存複製](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html) | 2026-08-10 |
| 1993-09-05（公開日） | NCSA Mosaic `CHANGES` | NCSA配布物由来のchange logの保存複製 | 新しいHTML widgetへ`hr`をhorizontal rule tagとして追加したと記録する。 | [GitHub保存複製](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701) | 2026-08-10 |
| 1993-11 | *HTML+ (Hypertext Markup Format)* | IETF Internet-Draft | `HR`をDTDへ収録し、list itemなどでも使える要素として記録する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-raggett-www-html-00) | 2026-08-09 |
| 1995-11 | RFC 1866: *Hypertext Markup Language - 2.0* | IETF Standards Track RFC | text section間のdividerで、典型的には全幅horizontal ruleとして`HR`を標準化する。 | [RFC Editor](https://www.rfc-editor.org/rfc/rfc1866#section-5.9) | 2026-08-09 |

## 確度

**C**

確認可能な初期実装と当時の意味は固定できるが、導入理由、発案者、具体的祖先、標準採用経路を確認できないため。

## 否定された仮説

印刷上のhorizontal ruleまたは現行のthematic break semanticsを、外見・用途の類似だけからHTML `HR`の直接祖先とする説明。HTML+の後続版に同名要素があることだけからHTML+ → NCSA Mosaicとする説明も、pre3の採用を示す記録がないため採らない。

## 未解決

- NCSA Mosaic 2.0 prerelease 3で`HR`を追加した発案者、要求、source commitは確認できるか。
- 1993年6月1日版`htmlplus.dtd`の保存本文を回収し、`HR`の収録有無とNCSA実装との前後・因果関係を確認できるか。
- presentation用horizontal ruleから現行のthematic breakへの意味変更を決定した仕様議論はどれか。
