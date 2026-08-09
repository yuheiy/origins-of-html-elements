---
status: 完成
---

# `<u>`

## 概要

1993年HTML draftは集合としてTexinfo由来と述べるが、underline用の対応マクロを同時代Texinfoで確認できず、個別祖先が未解決の要素である。

## 現在の意味

WHATWG HTML Living Standardでは、明文化されていないが明示的にrenderされるnon-textual annotationを持つtext spanを表す。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element)（2026-08-09確認）

## HTMLへの導入

1993年6月のHTML Internet-Draftに埋め込まれたHTML DTDはRCS識別子`html.dtd,v 1.3 93/01/06`を持ち、`inline` entityに`U`を列挙するため、formal DTDへの収録を1993年1月6日まで遡って確認できる。同draft本文は`U`をphysical character highlighting elementとして列挙し、その集合の要素名をTexinfo macro namesから派生したと明記した。このRCS日付は実装初出や、それ以前のprototypeがなかったことを示すものではない。`U`は最終HTML 2.0のRFC 1866には採録されていない。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [RFC 1866](https://www.w3.org/MarkUp/html-spec/html-spec.html)

## HTML直前の祖先

HTML draftは`U`を含む12要素を集合としてTexinfo macro names由来と述べる。しかし1992年と1995年のGNU Texinfoマニュアルおよび1995年の実装には、underline用の`@u` commandを確認できない。このため`<u>`に対応する個別のTexinfoマクロは未確認である。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) [GNU Texinfo 3.7公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)

## さらに上流の由来

### 証拠

1993年HTML draftがTexinfoを命名元として挙げることまでは確認できるが、`U`の個別対応を示すTexinfo側の証拠は確認できない。

### 解釈

なし。個別マクロが判明するまで、underline typographyや別の組版システムを上流へ接続しない。

## 系譜

Texinfo macro names（HTML draftによる集合レベルの由来記述、`U`の対応マクロは不明） → 1993年HTML draft `U` → 現行HTML `<u>`（途中の再採録経路は未確認）

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992-10-06 | *Texinfo — The GNU Documentation Format*, Edition 2.16 | GNU公式配布物内マニュアル | 印刷用font commandsにunderline用`@u`を確認できない。 | [GNU archive](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) | 2026-08-09 |
| 1993-01-06（埋込みDTDのRCS識別子）、1993-06（draft） | *Hypertext Markup Language (HTML)*, draft-ietf-iiir-html-00 | IETF Internet-Draft／埋込みDTD | `html.dtd,v 1.3 93/01/06`の`inline` entityに`U`があり、本文は`U`を含む12要素名をTexinfo macro names由来と一括して述べる。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |
| 1995-06-07 | *Texinfo — The GNU Documentation Format*, Edition 2.21、および同梱実装 | GNU公式配布物内マニュアル・実装 | font commandsとcommand tableにunderline用`@u`を確認できない。 | [GNU archive](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz) | 2026-08-09 |

## 確度

**A−**

HTML側の集合レベルの由来記述は直接史料で確認できるが、Texinfo側の個別対応と、HTML 2.0で不採録となった後の再採録経路が未確認であるため。

## 否定された仮説

`U → Texinfo @u`という一対一対応。1992–1995年のTexinfoで`@u`をunderline commandとして確認できないため採用しない。`texinfo.tex`内の内部的な`\\u`はplain TeXのaccent commandを扱うもので、underline macroではない。

## 未解決

- HTML draft執筆者が想定したTexinfo macroが何だったかを確認する。
- RFC 1866で不採録となった後、現行`u`へ至る再採録経路を確認する。
