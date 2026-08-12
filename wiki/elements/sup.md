---
status: 完成
---

# `<sup>`

## 概要

HTML+のDTDが一般テキストでも許可した`SUP`をHTML 3.0へ引き継ぐ設計意図を、Dave Raggettの同時代メールで確認できる。別枝の1995年国際化草案は一般組版上の要求から`SUP`を導入し、RFC 2070へ至る。

## 現在の意味

WHATWG HTML Living Standardでは、上付きを表す。単なる表示上の上下配置ではなく、表記規則上上付きとなる内容に使う。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements)、2026-08-09確認）

## HTMLへの導入

1993年HTML+は数学式で`SUP`を上付きとして使用し、DTDでは一般テキストにも許可した。1994年9月、Dave RaggettはこのHTML+の設計を指してHTML 3.0でも同じ許可が有用だと述べ、1995年HTML 3.0は`SUP`を一般のフォントスタイル要素として定義した。別枝では、1995年9月のIETF国際化草案が一般テキストでも上付きが必要だという理由から`SUP`を導入し、RFC 2070へ至った。HTML 3.2も`SUP`を採録したが、どちらの枝から採用したかは明記しない。[HTML+ math](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)） [Raggettの回答](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)） [HTML 3.0 element](../../raw/www.w3.org/MarkUp/html3/emphasis.html)（[公開元](https://www.w3.org/MarkUp/html3/emphasis.html)） [国際化草案](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)） [RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)）

## HTML直前の祖先

HTML+ DTDの`SUP`。Dave Raggettは、HTML+が通常テキストで`SUP`を許可したことを明示し、HTML 3.0でも同じことが有用だと述べたため、HTML+からHTML 3.0への個別の設計継承を確認できる。HTML 3.0系列とIETF国際化系列の接続、およびHTML 3.2がどちらから採用したかは未確認である。

## さらに上流の由来

### 証拠

HTML+の数学提案はLaTeXの手法に着想を得たと明記し、HTML 3数学案の同時代メールは、LaTeX・TeXマニュアルの長期調査、LaTeXからの変換を容易にする設計、上付きの短縮記法としてLaTeXと同じ`^`を使う案を記録する。[HTML+ math](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)） [Maloney, “Re: HTML 3.0 Process”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/340.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/340.html)） [Raggett, “Re: HTML 3.0 Process”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)）

### 解釈

LaTeX・TeXは一般的な背景候補ではなく、`SUP`を含むHTML数学モデルと短縮記法の直接の設計材料である。ただしLaTeXの記法は`^`であり、`SUP`というタグ名自体の借用元にはならない。

## 系譜

HTML+ `SUP` → HTML 3.0 `SUP`

IETF国際化草案`SUP`（1995年） → RFC 2070 `SUP`

HTML 3.2 `SUP` → 現行HTML `<sup>`

HTML 3.0系列、国際化系列、HTML 3.2の間は個別採用因果が未確認のため矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §12](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)） | 一次仕様・提案 | 数学式で`SUP`を上付きとして使用する。 | 2026-08-09 |
| 1994-09-09 | [Murray Maloney, “Re: HTML 3.0 Process”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/340.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/340.html)） | HTML-WGメーリングリスト（Calgary大学保存） | `SUB`／`SUP`を数式だけでなく一般テキストでも使える行内要素にするよう提案する。 | 2026-08-10 |
| 1994-09-12 | [Dave Raggett, “Re: HTML 3.0 Process”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)） | HTML-WGメーリングリスト（Calgary大学保存） | HTML+ DTDが通常テキストで`SUB`／`SUP`を許可し、HTML 3.0でも同じ設計が有用だと述べる。 | 2026-08-10 |
| 1995 | [HTML 3.0 font style elements](../../raw/www.w3.org/MarkUp/html3/emphasis.html)（[公開元](https://www.w3.org/MarkUp/html3/emphasis.html)） | W3C保存の失効草案 | 一般テキスト用`SUP`を定義する。 | 2026-08-10 |
| 1995-09-25 | [`draft-ietf-html-i18n-01`](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)） | IETF Internet-Draft | 一般テキストの国際化要求から`SUP`を導入する。 | 2026-08-09 |
| 1997-01 | [RFC 2070 §4.2](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)） | 一次仕様・提案 | 一般テキストでも必要な上付きとして追加する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） | 一次仕様・提案 | `SUP`を採録する。 | 2026-08-09 |

## 確度

**A**

HTML+ DTDの`SUP`をHTML 3.0の一般テキストでも許可する個別の設計継承をRaggettの同時代説明で確認でき、国際化草案にも要素単位の導入理由があるため。二つの枝とHTML 3.2の間は未接続として限定する。

## 否定された仮説

LaTeXの影響を`SUP`というタグ名の由来まで拡張すること。確認できるのは数式モデル、変換要求、`^`短縮記法への影響である。HTML 3.0とIETF国際化草案に同名要素があることだけから両系列を接続すること。

## 未解決

- `SUP`という個別名称に先行するマークアップ祖先。
- IETF国際化草案がHTML+またはHTML 3.0の`SUP`を採用した記録はあるか。
- HTML 3.2はHTML 3.0系列とIETF国際化系列のどちらから`SUP`を採用したか。
