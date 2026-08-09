# `<br>`

> 状態: 完成

## 概要

1993年7月のCERN/IETF HTML draftにはなく、NCSA Mosaic 2.0 prerelease 3のchange logでline break tagとして追加されたことを確認できる。同年11月のHTML+ draftにも収録されるが、発案理由、発案者、標準採用までの因果は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、contentの一部であるline breakを表す。poemやaddressのように改行自体が内容である場合に限って使い、paragraphの分離には使わない。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element)（2026-08-09確認）

## HTMLへの導入

1993年7月の`draft-ietf-iiir-html-01`には`BR`がない。NCSA Mosaicの原配布物に由来する`CHANGES`は、2.0 prerelease 2から3への変更として`br`と`hr`をそれぞれlinebreakとhorizontal ruleとして追加したと記録する。1993年11月のHTML+ draftは`BR`をnormal text内の強制改行としてDTDへ収録する。誰がどの要求から考案し、NCSA実装からHTML+またはHTML 2.0へ採用されたかは確認できない。[1993年7月HTML Internet-Draft](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) [NCSA Mosaic `CHANGES`の保存複製](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701) [HTML+ Internet-Draft](https://datatracker.ietf.org/doc/html/draft-raggett-www-html-00)

## HTML直前の祖先

未確認。NCSA Mosaic 2.0 prerelease 3での追加は確認できるが、先行markup、browser、text formatting commandから採用したことを示す資料は確認できない。

## さらに上流の由来

### 証拠

確認できる直接史料はNCSA Mosaicにおける初期実装までであり、それ以前の系譜を示さない。

### 解釈

なし。

## 系譜

確認できる時系列は、NCSA Mosaic 2.0 prerelease 3のHTML `BR`（1993）、HTML+ `BR`（1993-11）、HTML 2.0 `BR`（1995）、現行HTML `<br>`である。各段階の採用因果は未確認のため矢印で接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-07-23（登録日） | *Hypertext Markup Language (HTML)* revision 01 | IETF Internet-Draft | 本文とDTDに`BR`がなく、NCSA追加前の比較点となる。 | [W3C保存text](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) | 2026-08-09 |
| 1993（2.0 prerelease 3） | NCSA Mosaic `CHANGES` | NCSA配布物由来のchange logの保存複製 | 新しいHTML widgetへ`br`をlinebreak tagとして追加したと記録する。 | [GitHub保存複製](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L701) | 2026-08-09 |
| 1993-11 | *HTML+ (Hypertext Markup Format)* | IETF Internet-Draft | `BR`をnormal text内の強制改行として説明し、DTDへ収録する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-raggett-www-html-00) | 2026-08-09 |
| 1995-11 | RFC 1866: *Hypertext Markup Language - 2.0* | IETF Standards Track RFC | words間のline breakとして`BR`を標準化する。 | [RFC Editor](https://www.rfc-editor.org/rfc/rfc1866#section-5.8) | 2026-08-09 |

## 確度

**C**

確認可能な初期実装と当時の意味は固定できるが、導入理由、発案者、具体的祖先、標準採用経路を確認できないため。

## 否定された仮説

印刷・typewriter・word processorの強制改行、SGMLのrecord end、または後代の現行用途を、類似だけからHTML `BR`の直接祖先とする説明。

## 未解決

- NCSA Mosaic 2.0 prerelease 3で`BR`を追加した発案者、要求、source commitは確認できるか。
- NCSA実装からHTML+またはHTML 2.0へ`BR`を採用した議論は残っているか。
