# `<sub>`

> 状態: HTML+数学表現からの系譜を検証済み

## 概要

HTML+の数学表現から、一般組版と国際化へ用途を広げて標準化されたsubscript要素である。

## 現在の意味

WHATWG HTML Living Standardでは、subscriptを表す。単なる表示上の上下配置ではなく、表記規則上subscriptとなる内容に使う。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements)（2026-08-09確認）

## HTMLへの導入

1993年HTML+は数学式で`SUB`をsubscriptとして使用した。HTML 3.0で一般のfont-style elementへ広がり、RFC 2070とHTML 3.2が採録した。[HTML+ math](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html) [RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html) [HTML 3.2](https://www.w3.org/TR/REC-html32)

## HTML直前の祖先

HTML直前の祖先はHTML+ mathの`SUB`である。HTML+では主に数学記法、後続標準では一般組版と国際化へ用途が広がった。

## さらに上流の由来

### 証拠

HTML+の数学提案全体はLaTeXのapproachに着想を得たと明記するが、`SUB`という要素名自体をLaTeXから借りたとは述べない。[HTML+ math](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)

### 解釈

数学・科学組版は上流文脈だが、タグ名の個別由来と数学モデル全体への影響を区別する。

## 系譜

HTML+ `SUB`（math） → HTML 3.0 → RFC 2070／HTML 3.2 → 現行HTML `<sub>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §12 | 一次仕様・提案 | 数学式で`SUB`をsubscriptとして使用する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) | 2026-08-09 |
| 1997-01 | RFC 2070 §4.2 | 一次仕様・提案 | 一般テキストでも必要なsubscriptとして追加する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | 一次仕様・提案 | `SUB`を採録する。 | [一次資料](https://www.w3.org/TR/REC-html32) | 2026-08-09 |

## 確度

**A**

HTML+の数学用途から後続仕様への役割の連続と採録を確認できるため。

## 否定された仮説

HTML+ math全体がLaTeXに着想を得たことから、`SUB`というタグ名もLaTeX由来だと推論すること。

## 未解決

- `SUB`という個別名称のさらに上流のmarkup祖先。

## 調査記録

HTML+、HTML 3.0、後続RFCおよびW3C Recommendationを確認した。横断比較は[HTML+調査ノート](../research/html-plus-elements.md)を参照する。
