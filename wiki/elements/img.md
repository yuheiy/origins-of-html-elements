---
status: 完成
---

# `<img>`

## 概要

Marc AndreessenがNCSA X Mosaicへ実装し、1993年に提案したinline image要素である。提案以前の画像埋込みsystemからの直接系譜は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは画像を表す。`src`、`srcset`、親が`picture`なら先行する`source`の候補から選ばれた画像が埋め込み内容となり、`alt`は画像を処理できない場合の等価な内容を与える。[一次定義](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)（2026-08-09確認）

## HTMLへの導入

Marc Andreessenは1993年2月25日、`www-talk`で`IMG SRC`を新しい任意HTML tagとして提案し、X Mosaicで既に動作する必須機能だと記した。2月26日には各browserが独自構文を実装する前の統一を理由に挙げ、3月14日にNCSA Mosaic for X 0.10の機能として公開された。同年6月のHTML Internet-Draftが`IMG`を収録した。[提案](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html) [理由](http://1997.webhistory.org/www.lists/www-talk.1993q1/0197.html) [Mosaic 0.10](http://1997.webhistory.org/www.lists/www-talk.1993q1/0262.html) [HTML draft](https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)

## HTML直前の祖先

HTML直前の祖先は、Andreessenの`IMG`提案と同時に存在したNCSA X Mosaic実装である。提案者、構文、導入要求、実装公開、HTML draftへの収録が連続して確認できる。

## さらに上流の由来

### 証拠

同時代の議論ではMidas 2.0の`ICON`と`A REL="EMBED, PRESENT"`が先行・競合案として挙がったが、Andreessenがそこから`IMG`を派生させたとは記録されていない。[Midas `ICON`](http://1997.webhistory.org/www.lists/www-talk.1993q1/0183.html) [`A REL`](http://1997.webhistory.org/www.lists/www-talk.1993q1/0186.html)

### 解釈

さらに上流の特定systemは未確認である。MidasやViolaWWWの先行存在を、因果関係なしに系譜へ加えない。

## 系譜

NCSA X Mosaic `IMG`実装／Andreessenの`IMG`提案（1993年2月） → HTML Internet-Draft `IMG`（1993年6月） → 現行HTML `<img>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-02-25 | Marc Andreessen, “proposed new tag: IMG” | 当事者の同時代投稿 | `IMG SRC`、inline画像、anchor内利用、X Mosaicで実装済みという提案。 | [一次資料](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html) | 2026-08-09 |
| 1993-02-26、1993-03-12 | Marc Andreessen replies | 当事者の同時代投稿 | 構文統一の必要と、一般化した`EMBED`や`ICON`を採らなかった理由。 | [2月26日](http://1997.webhistory.org/www.lists/www-talk.1993q1/0197.html) / [3月12日](http://1997.webhistory.org/www.lists/www-talk.1993q1/0257.html) | 2026-08-09 |
| 1993-03-14 | NCSA Mosaic for X 0.10 release | 公式実装公開告知 | `IMG`、GIF/XBM inline画像、URL取得、anchor内利用を実装。 | [一次資料](http://1997.webhistory.org/www.lists/www-talk.1993q1/0262.html) | 2026-08-09 |
| 1993-06 | HTML Internet-Draft | IETF Internet-Draft | `IMG`をHTML語彙とDTDへ収録。 | [一次資料](https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt) | 2026-08-09 |

## 確度

**A**

要素単位の提案者、目的、実装、HTML草案への収録を直接史料で連続して確認できるため。

## 否定された仮説

Midas `ICON`、ViolaWWW、`A REL="EMBED, PRESENT"`を`IMG`の直接祖先とする説明。先行・競合する存在は確認できるが、採用または派生の因果は確認できない。

## 未解決

- Andreessenが`IMG`を考案する際に参照した、さらに上流の画像埋込みsystemはあるか。
- Midas `ICON`、ViolaWWW等の先行実装と`IMG`の因果関係を示す史料はあるか。
