# `<s>`

> 状態: 完成

## 概要

HTML+とHTML 3.0にpresentational strike-throughの`S`が存在し、HTML 3.2で欠落した後、HTML 4がdeprecatedな`S`をnew elementとして採録した。HTML 4の再採録を以前の`S`へ結ぶ因果資料は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、もはや正確でない、または関係しなくなった内容を表す。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+の`S`はpresentation-onlyなstrike-throughだった。HTML 3.0にも存在したがHTML 3.2では欠落し、HTML 4でdeprecatedな`S`として再登場した。[HTML+ presentation tags](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html) [HTML 3.2](https://www.w3.org/TR/REC-html32) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

## HTML直前の祖先

未確認。HTML+とHTML 3.0の`S`は先行する同名要素だが、HTML 3.2で一度欠落し、HTML 4が再び採録した判断をそれらへ明示的に結ぶ史料は確認できない。

## さらに上流の由来

### 証拠

1994年reviewはstrike-throughが特にlegal documentsで有用と述べる。ただしHTML+には文書変更用の`ADDED`／`REMOVED`が別にあり、`S`はrevision semanticsではなかった。[HTML+ review](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html) [HTML+ change markup](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)

### 解釈

legal documentsでの有用性は当時のユースケースであり、現行の「もはや正確でない内容」という意味の直接起源とはしない。

## 系譜

HTML+ `S` → HTML 3.0 `S` → ［HTML 3.2では欠落］

接続未確認

HTML 4 `S` → 現行HTML `<s>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §5.4 | 一次仕様・提案 | `S`をstrike-throughのpresentation-only tagとして定義する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | 一次仕様・提案 | `S`ではなく`STRIKE`を採録する。 | [一次資料](https://www.w3.org/TR/REC-html32) | 2026-08-09 |
| 1997-12-18 | HTML 4.0／HTML 4.01 changes | 一次仕様・提案 | deprecatedな`S`をnew elementとして記録する。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1) | 2026-08-09 |

## 確度

**C**

現行系統の確認可能な最初期出現はHTML 4のdeprecatedな`S`として特定できるが、再採録理由と具体的祖先を確認できないため。

## 否定された仮説

`S`は当初から文書変更や「もはや正確でない内容」を表したという説明。HTML+ではpresentation-onlyで、変更markupは別要素だった。

## 未解決

- HTML 4が`S`を再採録した具体的議論。
- presentational strike-throughから現行semanticsへの再解釈過程。
