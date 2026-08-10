---
status: 完成
---

# `<em>`

## 概要

1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@emph`との対応を確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、内容のstress emphasisを表す。 [HTML Living Standard](../../raw/html-living-standard/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element)、2026-08-09確認）

## HTMLへの導入

1992年11月19日、Dan ConnollyはHTML DTDのhighlighting候補として既存の`HP1`〜`HP5`を問う一方、番号式より`em`, `tt`, `cite`を好むと提案した。Tim Berners-Leeは同日、番号式はほぼ役に立たないとして応答した。これは`em`の確認可能な最初のHTML標準化上の提案であるが、実装初出や最終語彙を決めた記録ではない。[提案](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [応答](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)

1993年6月のHTML Internet-Draftはcharacter highlighting elementとして `<em>` を列挙し、その集合の要素名をTexinfo macro namesから派生したと明記した。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

HTML側の直接史料は、列挙した要素名の派生元をTexinfoと明記している。同時代のGNU Texinfo 2.16マニュアルは `@emph` をカテゴリーを限定しない一般的な強調として定義しており、個別の対応も確認できる。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)

## さらに上流の由来

### 証拠

Texinfoはソフトウェアマニュアルを単一ソースから印刷物とInfo文書へ出力する文書システムであり、`@emph` はその語彙の一部だった。[GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)

### 解釈

直接の命名元はTexinfoである。そのさらに上流にコンピュータ技術文書文化を位置づけられるが、この文化からHTMLへ直接採用されたという主張にはしない。

## 系譜

Texinfo `@emph` → 1993年HTML draft `<em>` → 後続HTML `<em>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-10-06 | [*Texinfo — The GNU Documentation Format*, Edition 2.16](../../raw/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)） | GNU公式配布物内マニュアル | `@emph` の当時の定義を確認できる。 | 2026-08-09 |
| 1992-11-19 | “HTML DTD issues”とTim Berners-Leeの応答：[提案](../../raw/items/lists.w3.org/f99c068c486f1ed8-0068.html)・[応答](../../raw/items/lists.w3.org/7661438b0ffab82e-0072.html)（[公開元1](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[公開元2](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)） | www-talk標準化議論 | Connollyが`HP1`〜`HP5`の代案として`em`を具体的に提案し、Berners-Leeが番号式highlightingを退ける方向に同意した。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*, draft-ietf-iiir-html-00](../../raw/draft-ietf-iiir-html-00/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `<em>` を含むcharacter highlighting要素名をTexinfo macro names由来と明記する。 | 2026-08-09 |

## 確度

**A**

HTML側が命名元を明示し、Texinfo側でも対応する同時代マクロと用途を確認できるため。

## 否定された仮説

なし。

## 未解決

- 1993年案から後続標準への採録経路を確認する。
