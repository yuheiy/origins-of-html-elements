# `<sub>`

> 状態: 完成

## 概要

HTML+とHTML 3.0に同名のsubscript要素があり、HTML 3.0全体がHTML+の先行作業に基づくという集合レベルの関係を確認できる。個別採用は未確認で、1995年国際化草案が一般組版上の要求から`SUB`を導入し、HTML 3.2へ至る。

## 現在の意味

WHATWG HTML Living Standardでは、subscriptを表す。単なる表示上の上下配置ではなく、表記規則上subscriptとなる内容に使う。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements)（2026-08-09確認）

## HTMLへの導入

1993年HTML+は数学式で`SUB`をsubscriptとして使用した。W3CのHTML 3.0保存ページはHTML 3.0全体をHTML+の先行作業に基づくと説明し、HTML 3.0は`SUB`を一般のfont-style elementとして定義する。ただし`SUB`個別の採用は明記しない。1995年9月のIETF国際化草案は一般テキストでもsubscriptが必要だという理由から`SUB`を導入し、RFC 2070とHTML 3.2が採録した。[HTML+ math](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) [HTML 3.0 materials](https://www.w3.org/MarkUp/html3/) [HTML 3.0 element](https://www.w3.org/MarkUp/html3/emphasis.html) [国際化草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01) [RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html) [HTML 3.2](https://www.w3.org/TR/REC-html32)

## HTML直前の祖先

HTML+ mathの`SUB`は集合レベルの先行作業として確認できるが、HTML 3.0の`SUB`へ個別採用した記録は未確認である。HTML 3.0と1995年国際化草案が現行系統直前の確認済み提案である。

## さらに上流の由来

### 証拠

HTML+の数学提案全体はLaTeXのapproachに着想を得たと明記するが、`SUB`という要素名自体をLaTeXから借りたとは述べない。[HTML+ math](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)

### 解釈

数学・科学組版は上流文脈だが、タグ名の個別由来と数学モデル全体への影響を区別する。

## 系譜

[集合単位] HTML+ `SUB`を含むHTML+作業 → HTML 3.0 `SUB`

IETF国際化草案 `SUB`（1995年） → RFC 2070／HTML 3.2 `SUB` → 現行HTML `<sub>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §12 | 一次仕様・提案 | 数学式で`SUB`をsubscriptとして使用する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) | 2026-08-09 |
| 1995 | HTML 3.0 materials／font style elements | W3C保存の失効草案群 | HTML 3.0全体がHTML+作業に基づくことと、一般用`SUB`を確認できる。個別採用は述べない。 | [全体](https://www.w3.org/MarkUp/html3/)・[要素](https://www.w3.org/MarkUp/html3/emphasis.html) | 2026-08-09 |
| 1995-09-25 | `draft-ietf-html-i18n-01` | IETF Internet-Draft | 一般テキストの国際化要求から`SUB`を導入する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01) | 2026-08-09 |
| 1997-01 | RFC 2070 §4.2 | 一次仕様・提案 | 一般テキストでも必要なsubscriptとして追加する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | 一次仕様・提案 | `SUB`を採録する。 | [一次資料](https://www.w3.org/TR/REC-html32) | 2026-08-09 |

## 確度

**A−**

HTML 3.0全体がHTML+に基づく集合単位の因果と、国際化草案から後続標準への導入を確認できるが、HTML+ `SUB`の個別採用を確認できないため。

## 否定された仮説

HTML+ math全体がLaTeXに着想を得たことから、`SUB`というタグ名もLaTeX由来だと推論すること。

## 未解決

- `SUB`という個別名称のさらに上流のmarkup祖先。
