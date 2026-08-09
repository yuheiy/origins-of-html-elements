---
status: 完成
---

# `<sub>`

## 概要

HTML+のDTDが一般テキストでも許可した`SUB`をHTML 3.0へ引き継ぐ設計意図を、Dave Raggettの同時代メールで確認できる。別枝の1995年国際化草案は一般組版上の要求から`SUB`を導入し、RFC 2070へ至る。

## 現在の意味

WHATWG HTML Living Standardでは、subscriptを表す。単なる表示上の上下配置ではなく、表記規則上subscriptとなる内容に使う。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements)（2026-08-09確認）

## HTMLへの導入

1993年HTML+は数学式で`SUB`をsubscriptとして使用し、DTDでは一般テキストにも許可した。1994年9月、Dave RaggettはこのHTML+の設計を指してHTML 3.0でも同じ許可が有用だと述べ、1995年HTML 3.0は`SUB`を一般のfont-style elementとして定義した。別枝では、1995年9月のIETF国際化草案が一般テキストでもsubscriptが必要だという理由から`SUB`を導入し、RFC 2070へ至った。HTML 3.2も`SUB`を採録したが、どちらの枝から採用したかは明記しない。[HTML+ math](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) [Raggettの回答](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html) [HTML 3.0 element](https://www.w3.org/MarkUp/html3/emphasis.html) [国際化草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01) [RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html) [HTML 3.2](https://www.w3.org/TR/REC-html32)

## HTML直前の祖先

HTML+ DTDの`SUB`。Dave Raggettは、HTML+がordinary textで`SUB`を許可したことを明示し、HTML 3.0でも同じことが有用だと述べたため、HTML+からHTML 3.0への個別の設計継承を確認できる。HTML 3.0系列とIETF国際化系列の接続、およびHTML 3.2がどちらから採用したかは未確認である。

## さらに上流の由来

### 証拠

HTML+の数学提案全体はLaTeXのapproachに着想を得たと明記するが、`SUB`という要素名自体をLaTeXから借りたとは述べない。[HTML+ math](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)

### 解釈

数学・科学組版は上流文脈だが、タグ名の個別由来と数学モデル全体への影響を区別する。

## 系譜

HTML+ `SUB` → HTML 3.0 `SUB`

IETF国際化草案 `SUB`（1995年） → RFC 2070 `SUB`

HTML 3.2 `SUB` → 現行HTML `<sub>`

HTML 3.0系列、国際化系列、HTML 3.2の間は個別採用因果が未確認のため矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §12 | 一次仕様・提案 | 数学式で`SUB`をsubscriptとして使用する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) | 2026-08-09 |
| 1994-09-09 | Murray Maloney, “Re: HTML 3.0 Process” | HTML-WG mailing list（Calgary大学保存） | `SUB`／`SUP`をmathだけでなく一般テキストでも使えるinline要素にするよう提案する。 | [保存資料](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/340.html) | 2026-08-10 |
| 1994-09-12 | Dave Raggett, “Re: HTML 3.0 Process” | HTML-WG mailing list（Calgary大学保存） | HTML+ DTDがordinary textで`SUB`／`SUP`を許可し、HTML 3.0でも同じ設計が有用だと述べる。 | [保存資料](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html) | 2026-08-10 |
| 1995 | HTML 3.0 font style elements | W3C保存の失効草案 | 一般テキスト用`SUB`を定義する。 | [一次資料](https://www.w3.org/MarkUp/html3/emphasis.html) | 2026-08-10 |
| 1995-09-25 | `draft-ietf-html-i18n-01` | IETF Internet-Draft | 一般テキストの国際化要求から`SUB`を導入する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01) | 2026-08-09 |
| 1997-01 | RFC 2070 §4.2 | 一次仕様・提案 | 一般テキストでも必要なsubscriptとして追加する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | 一次仕様・提案 | `SUB`を採録する。 | [一次資料](https://www.w3.org/TR/REC-html32) | 2026-08-09 |

## 確度

**A**

HTML+ DTDの`SUB`をHTML 3.0の一般テキストでも許可する個別の設計継承をRaggettの同時代説明で確認でき、国際化草案にも要素単位の導入理由があるため。二つの枝とHTML 3.2の間は未接続として限定する。

## 否定された仮説

HTML+ math全体がLaTeXに着想を得たことから、`SUB`というタグ名もLaTeX由来だと推論すること。HTML 3.0とIETF国際化草案に同名要素があることだけから両系列を接続すること。

## 未解決

- `SUB`という個別名称のさらに上流のmarkup祖先。
- IETF国際化草案がHTML+またはHTML 3.0の`SUB`を採用した記録はあるか。
- HTML 3.2はHTML 3.0系列とIETF国際化系列のどちらから`SUB`を採用したか。
