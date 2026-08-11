---
status: 完成
---

# `<s>`

## 概要

HTML+とHTML 3.0に表示上の取り消し線の`S`が存在し、HTML 3.2で欠落した後、HTML 4が非推奨な`S`を採録した。HTML5では一度廃止とされたが、2010年のW3Cバグで再採録が提案され、現行の「もはや正確でない、または関係しない」という意味を定めて`S`が再導入された。

## 現在の意味

WHATWG HTML Living Standardでは、もはや正確でない、または関係しなくなった内容を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+の`S`は表示だけを目的とする取り消し線だった。HTML 3.0にも存在したがHTML 3.2では欠落し、HTML 4で非推奨な`S`として再登場した。[HTML+ presentation tags](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html)） [HTML 3.0](../../raw/www.w3.org/MarkUp/html3/emphasis.html)（[公開元](https://www.w3.org/MarkUp/html3/emphasis.html)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） [HTML 4.01 changes](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)）

2010年4月、Leif Halvard Silliは廃止だった`S`／`STRIKE`の再採録を提案し、削除済みではないが時間経過などで正確・関連しなくなった内容という意味を議論した。Ian Hicksonはその意味を要約し、9月29日に言語全体との一貫性から`STRIKE`ではなく`S`を選ぶと回答して、同日のリビジョン5561で`S`を追加した。[W3C Bug 9429](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=9429)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=9429)） [仕様コミット](../../raw/github.com/whatwg/html/commit/40c807c2c3525301b13ac46ae2f2e77572efe486)（[公開元](https://github.com/whatwg/html/commit/40c807c2c3525301b13ac46ae2f2e77572efe486)）

## HTML直前の祖先

HTML4から継承されHTML5で廃止とされていた`S`／`STRIKE`である。W3C Bug 9429はそれらを明示的に再採録対象とし、編集者は`S`を選んで現行意味を与えた。HTML+／HTML 3.0からHTML4へ再採録した1997年の判断は依然未確認である。

## さらに上流の由来

### 証拠

1994年レビューは取り消し線が特に法律文書で有用と述べる。ただしHTML+には文書変更用の`ADDED`／`REMOVED`が別にあり、`S`はリビジョン意味ではなかった。2010年の議論も`DEL`とは異なり、内容が文書の一部として残るが、外部事情により正確または関連しなくなった場合を区別した。[HTML+のレビュー](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） [HTML+の変更マークアップ](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)） [W3C Bug 9429](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=9429)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=9429)）

### 解釈

現行意味は初期の表示上の取り消し線から自動的に継承されたのではなく、既存`S`／`STRIKE`をHTML5へ戻すために、`DEL`と区別できるメディアに依存しない意味として2010年に明示的に定義された。

## 系譜

HTML+ `S` → HTML 3.0 `S` → ［HTML 3.2では欠落］

接続未確認 → HTML 4 `S` → ［HTML5で廃止］

→（W3C Bug 9429で再採録と意味を議論し`S`を選択）HTML5 `s`（2010年） → 現行HTML `<s>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §5.4](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html)） | 一次仕様・提案 | `S`を取り消し線の表現専用タグとして定義する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） | 一次仕様・提案 | `S`ではなく`STRIKE`を採録する。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0／HTML 4.01 changes](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | 一次仕様・提案 | 非推奨な`S`を新要素として記録する。 | 2026-08-09 |
| 2010-04-06〜2010-09-29 | [W3C Bug 9429, “Unobsolete the `<strike>` element”](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=9429)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=9429)） | 標準化バグ・編集者回答 | `S`／`STRIKE`の再採録提案、`DEL`と区別する意味の形成、`STRIKE`ではなく`S`を選ぶ編集判断。 | 2026-08-09 |
| 2010-09-29 | [WHATWG HTML commit `40c807c2`（revision 5561）](../../raw/github.com/whatwg/html/commit/40c807c2c3525301b13ac46ae2f2e77572efe486)（[公開元](https://github.com/whatwg/html/commit/40c807c2c3525301b13ac46ae2f2e77572efe486)） | 仕様コミット | `S`を「もはや正確でない、または関係しない内容」として言語へ追加し、文書の編集箇所には`DEL`を使うと明記。 | 2026-08-09 |

## 確度

**A**

HTML 4由来で廃止されていた具体的な先行要素から、現行の意味を定義して`S`を再採録した提案、編集判断、仕様コミットを要素単位で直接確認できるため。HTML+／HTML 3.0からHTML 4への接続は未確認のままである。

## 否定された仮説

`S`は当初から文書変更や「もはや正確でない内容」を表したという説明。HTML+では表示だけを目的としており、変更マークアップは別要素だった。現行意味は2010年の再採録議論で明示的に形成された。

## 未解決

- HTML+／HTML 3.0の`S`がHTML 3.2で欠落した後、HTML 4へ再採録された1997年の具体的議論は残っているか。
