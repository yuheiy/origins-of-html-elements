---
status: 完成
---

# `<s>`

## 概要

HTML+とHTML 3.0にpresentational strike-throughの`S`が存在し、HTML 3.2で欠落した後、HTML 4がdeprecatedな`S`を採録した。HTML5では一度obsoleteとされたが、2010年のW3C bugで再採録が提案され、現行の「もはや正確でない、または関係しない」という意味を定めて`S`が再導入された。

## 現在の意味

WHATWG HTML Living Standardでは、もはや正確でない、または関係しなくなった内容を表す。 [HTML Living Standard](../../raw/html-living-standard/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+の`S`はpresentation-onlyなstrike-throughだった。HTML 3.0にも存在したがHTML 3.2では欠落し、HTML 4でdeprecatedな`S`として再登場した。[HTML+ presentation tags](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html) [HTML 3.2](https://www.w3.org/TR/REC-html32) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

2010年4月、Leif Halvard Silliはobsoleteだった`S`／`STRIKE`の再採録を提案し、削除済みではないが時間経過などで正確・関連しなくなった内容という意味を議論した。Ian Hicksonはその意味を要約し、9月29日にlanguage全体との一貫性から`STRIKE`ではなく`S`を選ぶと回答して、同日のrevision 5561で`S`を追加した。[W3C Bug 9429](https://www.w3.org/Bugs/Public/show_bug.cgi?id=9429) [仕様commit](https://github.com/whatwg/html/commit/40c807c2c3525301b13ac46ae2f2e77572efe486)

## HTML直前の祖先

HTML4から継承されHTML5でobsoleteとされていた`S`／`STRIKE`である。W3C Bug 9429はそれらを明示的に再採録対象とし、編集者は`S`を選んで現行semanticsを与えた。HTML+／HTML 3.0からHTML4へ再採録した1997年の判断は依然未確認である。

## さらに上流の由来

### 証拠

1994年reviewはstrike-throughが特にlegal documentsで有用と述べる。ただしHTML+には文書変更用の`ADDED`／`REMOVED`が別にあり、`S`はrevision semanticsではなかった。2010年の議論も`DEL`とは異なり、内容が文書の一部として残るが、外部事情により正確または関連しなくなった場合を区別した。[HTML+ review](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html) [HTML+ change markup](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html) [W3C Bug 9429](https://www.w3.org/Bugs/Public/show_bug.cgi?id=9429)

### 解釈

現行semanticsは初期のpresentational strike-throughから自動的に継承されたのではなく、既存`S`／`STRIKE`をHTML5へ戻すために、`DEL`と区別できるmedia-independentな意味として2010年に明示的に定義された。

## 系譜

HTML+ `S` → HTML 3.0 `S` → ［HTML 3.2では欠落］

接続未確認 → HTML 4 `S` → ［HTML5でobsolete］

→（W3C Bug 9429で再採録とsemanticsを議論し`S`を選択）HTML5 `s`（2010年） → 現行HTML `<s>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §5.4](../../raw/html-plus/htmlplus_16.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html)） | 一次仕様・提案 | `S`をstrike-throughのpresentation-only tagとして定義する。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/html-3.2/index.html)（[公開元](https://www.w3.org/TR/REC-html32)） | 一次仕様・提案 | `S`ではなく`STRIKE`を採録する。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0／HTML 4.01 changes](../../raw/html-4-history/8956e5bf2cd33e94-changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)） | 一次仕様・提案 | deprecatedな`S`をnew elementとして記録する。 | 2026-08-09 |
| 2010-04-06〜2010-09-29 | [W3C Bug 9429, “Unobsolete the `<strike>` element”](../../raw/items/www.w3.org/fbca4c889bfb6216-show_bu.html)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=9429)） | 標準化bug・編集者回答 | `S`／`STRIKE`の再採録提案、`DEL`と区別する意味の形成、`STRIKE`ではなく`S`を選ぶ編集判断。 | 2026-08-09 |
| 2010-09-29 | [WHATWG HTML commit `40c807c2`（revision 5561）](../../raw/whatwg-html-history/c1aef023bd3007ec-40c807c2c3525301b13ac46ae2f2e77572e.html)（[公開元](https://github.com/whatwg/html/commit/40c807c2c3525301b13ac46ae2f2e77572efe486)） | 仕様commit | `S`を「もはや正確でない、または関係しない内容」としてlanguageへ追加し、document editsには`DEL`を使うと明記。 | 2026-08-09 |

## 確度

**A**

HTML4由来でobsoleteだった具体的な先行要素から、現行semanticsを定義して`S`を再採録した提案、編集判断、仕様commitを要素単位で直接確認できるため。HTML+／HTML 3.0からHTML4への接続は未確認のままである。

## 否定された仮説

`S`は当初から文書変更や「もはや正確でない内容」を表したという説明。HTML+ではpresentation-onlyで、変更markupは別要素だった。現行semanticsは2010年の再採録議論で明示的に形成された。

## 未解決

- HTML+／HTML 3.0の`S`がHTML 3.2で欠落した後、HTML 4へ再採録された1997年の具体的議論は残っているか。
