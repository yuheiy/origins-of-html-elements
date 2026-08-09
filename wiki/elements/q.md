# `<q>`

> 状態: HTML+系譜と国際化上の採録を検証済み

## 概要

HTML+のinline short quotationから、RFC 2070による国際化上の強化を経て標準化された要素である。

## 現在の意味

WHATWG HTML Living Standardでは、別の出典から引用したphrasing contentを表す。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+は`Q`をinline short quotationとして定義した。HTML 3.0を経て、RFC 2070が言語に応じたquotation markのrenderingを可能にする要素としてHTML 2.0拡張へ導入し、HTML 4へ採録された。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html)

## HTML直前の祖先

HTML直前の祖先はHTML+ `Q`である。HTML+での初出目的はinline quotationであり、RFC 2070のlanguage-sensitive renderingは後続の国際化上の標準化理由として分ける。

## さらに上流の由来

### 証拠

HTML+以前のquotation markup祖先は今回の資料群では確認していない。

### 解釈

quotationという文化的概念の存在だけから、特定の出版・GML語彙を直接祖先とはしない。

## 系譜

HTML+ `Q` → HTML 3.0 `Q` → RFC 2070 `Q` → HTML 4以降 `<q>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §5.6 | 一次仕様・提案 | `Q`をinline short quotationとして定義する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) | 2026-08-09 |
| 1997-01 | RFC 2070 §4.2.2 | 一次仕様・提案 | language-sensitiveなshort quotation要素として追加する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |

## 確度

**A**

HTML+からHTML 3.0、RFC 2070、HTML 4への役割と採録経路を一次資料で確認できるため。

## 否定された仮説

HTML+でのinline quotationという初出目的と、RFC 2070での国際化上の強化を同じ導入理由として圧縮すること。

## 未解決

- HTML+以前の具体的quotation markup祖先。

## 調査記録

HTML+、HTML 3.0、後続RFCおよびW3C Recommendationを確認した。横断比較は[HTML+調査ノート](../research/html-plus-elements.md)を参照する。
