---
status: 完成
---

# `<i>`

## 概要

1993年HTML draftがTexinfoのマクロ名由来と明記した物理的な文字強調要素で、同時代Texinfoの`@i`との対応を確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、異なる声調やmood、または通常のproseと異なる性質を示すために区別されたテキスト範囲を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element)、2026-08-09確認）

## HTMLへの導入

1993年6月のHTML Internet-Draftに埋め込まれたHTML DTDはRCS識別子`html.dtd,v 1.3 93/01/06`を持ち、`inline` entityに`I`を列挙するため、formal DTDへの収録を1993年1月6日まで遡って確認できる。同draft本文は文字強調elementとして`<i>`を列挙し、その集合の要素名をTexinfoのマクロ名から派生したと明記する。このRCS日付は実装初出や、それ以前のprototypeがなかったことを示すものではない。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

HTML側の直接史料は、列挙した要素名の派生元をTexinfoと明記している。同時代のGNU Texinfo 2.16マニュアルは`@i`を印刷出力だけにitalic fontを指定するfont commandとして定義しており、個別の対応も確認できる。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)

## さらに上流の由来

### 証拠

Texinfoはソフトウェアマニュアルを単一ソースから印刷物とInfo文書へ出力する文書システムであり、`@i`はその語彙の一部だった。[GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)

### 解釈

直接の命名元はTexinfoである。さらに遡るとコンピュータ技術文書文化を背景として位置づけられるが、この文化からHTMLへ直接採用されたという主張にはしない。

## 系譜

Texinfo `@i` → 1993年HTML draft `<i>` → 後続HTML `<i>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-10-06 | [*Texinfo — The GNU Documentation Format*, Edition 2.16](../../raw/ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)） | GNU公式配布物内マニュアル | `@i`の当時の定義を確認できる。 | 2026-08-09 |
| 1993-01-06（埋込みDTDのRCS識別子）、1993-06（draft） | [*Hypertext Markup Language (HTML)*, draft-ietf-iiir-html-00](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft／埋込みDTD | `html.dtd,v 1.3 93/01/06`の`inline` entityに`I`があり、本文は`<i>`を含む文字強調要素名をTexinfoのマクロ名由来と明記する。 | 2026-08-09 |

## 確度

**A**

HTML側が命名元を明示し、Texinfo側でも対応する同時代マクロと用途を確認できるため。

## 否定された仮説

活字のitalic表現から直接HTMLへ採用されたという説明。1993年draftが明記する直接の命名元はTexinfo `@i`であり、一般的な組版慣習だけを採用因果とはしない。

## 未解決

- presentationalなitalicから現行semanticsへの再解釈過程を確認する。
