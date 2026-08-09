# `<code>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。1993-01-06 DTD収録とTexinfoからの命名系譜を検証済み

## 概要

1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@code`との対応を確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、computer codeのfragmentを表す。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element)（2026-08-09確認）

## HTMLへの導入

1993年6月のHTML Internet-Draftに埋め込まれたHTML DTDはRCS識別子`html.dtd,v 1.3 93/01/06`を持ち、`inline` entityに`CODE`を列挙するため、formal DTDへの収録を1993年1月6日まで遡って確認できる。同draft本文はcharacter highlighting elementとして `<code>` を列挙し、その集合の要素名をTexinfo macro namesから派生したと明記する。このRCS日付は実装初出や、それ以前のprototypeがなかったことを示すものではない。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

HTML側の直接史料は、列挙した要素名の派生元をTexinfoと明記している。同時代のGNU Texinfo 2.16マニュアルは `@code` をプログラムの一部を成す完全なsyntactic tokenとして定義しており、個別の対応も確認できる。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)

## さらに上流の由来

### 証拠

Texinfoはソフトウェアマニュアルを単一ソースから印刷物とInfo文書へ出力する文書システムであり、`@code` はその語彙の一部だった。[GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)

### 解釈

直接の命名元はTexinfoである。そのさらに上流にコンピュータ技術文書文化を位置づけられるが、この文化からHTMLへ直接採用されたという主張にはしない。

## 系譜

Texinfo `@code` → 1993年HTML draft `<code>` → 後続HTML `<code>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992-10-06 | *Texinfo — The GNU Documentation Format*, Edition 2.16 | GNU公式配布物内マニュアル | `@code` の当時の定義を確認できる。 | [GNU archive](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) | 2026-08-09 |
| 1993-01-06（埋込みDTDのRCS識別子）、1993-06（draft） | *Hypertext Markup Language (HTML)*, draft-ietf-iiir-html-00 | IETF Internet-Draft／埋込みDTD | `html.dtd,v 1.3 93/01/06`の`inline` entityに`CODE`があり、本文は`<code>`を含むcharacter highlighting要素名をTexinfo macro names由来と明記する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**A**

HTML側が命名元を明示し、Texinfo側でも対応する同時代マクロと用途を確認できるため。

## 否定された仮説

なし。

## 未解決

- 1993年案から後続標準への採録経路を確認する。

## 調査記録

1993年HTML draftと埋込みDTDのRCS識別子、RFC 1866、GNU Texinfo 2.16および3.7を確認した。Texinfo系統全体の照合は[調査ノート](../research/texinfo-phrase-elements.md)を参照する。

2026-08-09の敵対的レビューでは、1993年draftの命名由来記述とTexinfo 2.16の`@code`定義を本文へ戻って照合し、RFC 1866とTexinfo 3.7も比較した。一般的なcode組版やSGMLの同名要素を反例候補として確認したが、明示されたTexinfo命名因果を覆す資料はなく、確度Aを維持した。

埋込みDTD追加後の別レビュー（2026-08-09）では、RCS識別子`html.dtd,v 1.3 93/01/06`と`inline` entityのliteral nameをローカル保存資料で再照合した。RCS日付を実装初出や最終採用決定へ拡張せず、既存の系譜と確度を維持した。
