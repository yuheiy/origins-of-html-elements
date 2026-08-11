---
status: 完成
---

# `<hr>`

## 概要

1993年7月のCERN/IETF HTML草案と7月12日版HTML+提案にはない。7月末のWWW Workshopでは、ハイフン列による区切りを置き換える水平罫線`HR`を基礎HTMLへ追加することが決まり、8月25日のLynx 2.0.11と9月5日のNCSA Mosaic 2.0プレリリース3で実装を確認できる。決定の発案者とHTML 2.0までの編集経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、物語の場面転換やセクション内の話題の転換など、段落レベルの主題の区切りを表す。`select`内では選択肢群の区切りも表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element)、2026-08-09確認）

## HTMLへの導入

1993年7月の`draft-ietf-iiir-html-01`とDave Raggettの7月12日版HTML+提案には`HR`がない。7月28〜30日のWWW Workshopを記録したTony Sandersの同時代メモは、RFC化前の基礎HTMLへ`BR`と`HR`を追加することが決まり、`HR`はハイフン列による区切りを置き換える水平罫線だと記す。ただしSanders自身が、このメモは確定一覧ではなく、合意とは自身が全員も同意したと理解したという意味だと限定している。Tim Berners-Leeの会合メモはHTML実装レベルとHTML+討議を記録するが、`BR`と`HR`の個別決定を列挙しない。8月25日のLynx 2.0.11公開告知は、二つのテキスト本文を分ける水平線として`HR`を実装したと記録する。Marc Andreessenは9月5日にNCSA Mosaic 2.0プレリリース3を公開し、原配布物に由来する`CHANGES`も`hr`を水平罫線として追加したと記録する。したがってNCSAを最初の提案または実装とはみなさない。11月8日のHTML+ DTDも`HR`を収録するが、Workshop決定からHTML+またはHTML 2.0へ至る編集経路は未確認である。[1993年7月HTML Internet-Draft](../../raw/www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） [Raggett, *HTML+ (Hypertext markup language)*](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)） [Sanders, “WWWWW Notes”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)） [Berners-Lee, *Tim's notes on W5 July 1993*](../../raw/www.w3.org/History/1994/WWW/WorkingNotes/1993_Workshop/TimNotes.html)（[公開元](https://www.w3.org/History/1994/WWW/WorkingNotes/1993_Workshop/TimNotes.html)） [Montulli, “Lynx 2.0.11 now available!”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/774.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/774.html)） [プレリリース3公開メールの保存複製](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)） [NCSA Mosaic `CHANGES`の保存複製](../../raw/github.com/alandipert/ncsa-mosaic/blob/master/CHANGES)（[公開元](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701)） [HTML+ DTD](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)）

## HTML直前の祖先

HTML文書内で区切りとして使われていたハイフン列。WWW Workshopの同時代メモは、基礎HTMLへ追加する`HR`がこの表現を置き換えると明記する。[Sanders, “WWWWW Notes”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)）

## さらに上流の由来

### 証拠

WWW Workshopの同時代メモは、`HR`をハイフン列による区切りの置換として基礎HTMLへ追加したと記録する。[Sanders, “WWWWW Notes”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)）

### 解釈

`HR`は、文書内に文字として描いていた区切り線を専用のHTML要素へ置き換え、ブラウザーが水平罫線として描画できるようにしたものと説明できる。

## 系譜

確認できる系譜は、HTML文書中のハイフン列による区切り → WWW Workshopで基礎HTMLへ追加された`HR`（1993-07-28〜30）である。その後にLynx 2.0.11のHTML `HR`（同年8月25日）、NCSA Mosaic 2.0プレリリース3のHTML `HR`（同年9月5日）、HTML+ `HR`（同年11月）、HTML 2.0 `HR`（1995）、現行HTML `<hr>`を確認できるが、Workshop決定から各実装・仕様への採用因果は未確認のため矢印で接続せず、初期の水平罫線という表現と現行の主題の区切りも同一視しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-07-12 | [*HTML+ (Hypertext markup language)*](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus.ps)） | HTML+提案のW3C保存PostScript | 本文とDTDに`BR`はあるが`HR`はなく、Workshop決定前の比較点となる。HTTP `Last-Modified`は1993-07-13である。 | 2026-08-11 |
| 1993-07-14 | [“XMosaic 1.2 and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)） | NCSA開発者によるwww-talkメールの保存複製 | AndreessenがMosaic 1.2ではHTML+対応をまだ実装していないと述べる。後のプレリリース3がHTML+を採用したことまでは示さない。 | 2026-08-10 |
| 1993-07-23（登録日） | [*Hypertext Markup Language (HTML)* revision 01](../../raw/www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） | IETF Internet-Draft | 本文とDTDに`HR`がなく、Workshop決定前の基礎HTML草案を示す比較点となる。 | 2026-08-09 |
| 1993-07-28〜30（会合）、1993-08-10（投稿） | [“WWWWW Notes”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/459.html)） | WWW Workshop参加者による同時代メモ | RFC化前の基礎HTMLへ`HR`を追加し、ハイフン列による区切りを置き換える水平罫線とする決定を記録する。著者は確定一覧ではないと限定している。 | 2026-08-11 |
| 1993-07-28〜30 | [*Tim's notes on W5 July 1993*](../../raw/www.w3.org/History/1994/WWW/WorkingNotes/1993_Workshop/TimNotes.html)（[公開元](https://www.w3.org/History/1994/WWW/WorkingNotes/1993_Workshop/TimNotes.html)） | Berners-Leeによる会合メモ | HTML実装レベルとHTML+討議を記録するが`BR`と`HR`の個別決定を列挙せず、Sandersメモを確定議事録とみなせないことを示す。 | 2026-08-11 |
| 1993-08-25 | [“Lynx 2.0.11 now available!”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/774.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/774.html)） | Lynx開発者による公開告知 | 二つのテキスト本文を分ける水平線として`HR`を追加したと記録し、NCSA Mosaicプレリリース3より早い確認済み実装を示す。 | 2026-08-11 |
| 1993-09-05 | [“NCSA Mosaic for X 2.0 prerelease 3 available”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q3.messages/821.html)） | NCSA開発者によるwww-talk公開メールの保存複製 | Marc Andreessenがプレリリース3のソースと二値を公開し、新HTMLウィジェットを主要変更として挙げる。 | 2026-08-10 |
| 1993-09-05（公開日） | [NCSA Mosaic `CHANGES`](../../raw/github.com/alandipert/ncsa-mosaic/blob/master/CHANGES)（[公開元](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701)） | NCSA配布物由来の変更ログの保存複製 | 新しいHTMLウィジェットへ`hr`を水平罫線タグとして追加したと記録する。 | 2026-08-10 |
| 1993-11-08 | [HTML+ DTD](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)） | 提案DTD | `HR`を収録し、リスト項目を含む本文内容で許可する。 | 2026-08-11 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.9)） | IETF Standards Track RFC | テキストセクション間の区切りで、典型的には全幅の水平罫線として`HR`を標準化する。 | 2026-08-09 |

## 確度

**A**

WWW Workshopの同時代メモが、ハイフン列による区切りから基礎HTML `HR`への要素単位の置換と導入決定を直接記録するため。決定の発案者と後続仕様への編集経路は未確認である。

## 否定された仮説

NCSA Mosaicを`HR`の最初の提案または実装とする説明。WWW Workshopの決定とLynx実装が先行する。一般的な印刷上の水平罫線または現行の主題の区切りを、外見・用途の類似だけからHTML `HR`の直接祖先とする説明も採らない。確認できる直接祖先はWorkshop記録が明示するHTML文書内のハイフン列である。HTML+の後続版に同名要素があることだけからHTML+ → LynxまたはNCSA Mosaicとする説明も、個別実装の採用記録がないため保留する。

## 未解決

- WWW Workshopでハイフン列を`HR`へ置き換える案を出した人物と、決定を確定した議事録は残っているか。
- Workshop決定からLynx、NCSA Mosaic、1993年11月HTML+、HTML 2.0へ至る要素単位の採用・編集記録は残っているか。
- 表現用の水平罫線から現行の主題の区切りへの意味変更を決定した仕様議論はどれか。
