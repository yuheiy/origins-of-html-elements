---
status: 完成
---

# `<u>`

## 概要

1993年HTML draftは集合としてTexinfo由来と述べるが、underline用の対応マクロを同時代Texinfoで確認できない。HTML 2.0での不採録後、HTML 3.2で再出現した個別理由は未確認である。W3C HTML5でnonconformingだった`U`をconformingにする2011年のHTML WG決定は確認できるが、現行Living Standardまでの編集経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、明文化されていないが明示的にrenderされる非テキスト注釈を持つテキスト範囲を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element)、2026-08-09確認）

## HTMLへの導入

1993年6月のHTML Internet-Draftに埋め込まれたHTML DTDはRCS識別子`html.dtd,v 1.3 93/01/06`を持ち、`inline` entityに`U`を列挙するため、formal DTDへの収録を1993年1月6日まで遡って確認できる。同draft本文は`U`を物理的な文字強調elementとして列挙し、その集合の要素名をTexinfoのマクロ名から派生したと明記した。このRCS日付は実装初出や、それ以前のprototypeがなかったことを示すものではない。`U`は最終HTML 2.0には採録されず、HTML 3.2でdeprecated font style elementとして再出現した。W3C HTML5ではnonconformingとなったが、HTML WGは2011年4月8日に`U`をconformingとする提案を正式採択した。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html) [HTML 3.2](https://www.w3.org/TR/REC-html32) [HTML WG decision](https://lists.w3.org/Archives/Public/public-html/2011Apr/0212.html)

## HTML直前の祖先

HTML draftは`U`を含む12要素を集合としてTexinfoのマクロ名由来と述べる。しかし1992年と1995年のGNU Texinfoマニュアルおよび1995年の実装には、underline用の`@u` commandを確認できない。このため`<u>`に対応する個別のTexinfoマクロは未確認である。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) [GNU Texinfo 3.7公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)

## さらに上流の由来

### 証拠

1993年HTML draftがTexinfoを命名元として挙げることまでは確認できるが、`U`の個別対応を示すTexinfo側の証拠は確認できない。

### 解釈

なし。個別マクロが判明するまで、underline typographyや別の組版システムを由来として接続しない。

## 系譜

Texinfoのマクロ名（HTML draftによる集合レベルの由来記述、`U`の対応マクロは不明） → 1993年HTML draft `U`

HTML 3.2 `U` → HTML 4 `U`

W3C HTML5 nonconforming `U` → 2011年HTML WG決定によるconforming `U`

1993年HTML draftからHTML 3.2への再採録と、W3C HTML5の決定から現行Living Standardへの接続は個別因果が未確認のため矢印で結ばない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-10-06 | [*Texinfo — The GNU Documentation Format*, Edition 2.16](../../raw/ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)） | GNU公式配布物内マニュアル | 印刷用font commandsにunderline用`@u`を確認できない。 | 2026-08-09 |
| 1993-01-06（埋込みDTDのRCS識別子）、1993-06（draft） | [*Hypertext Markup Language (HTML)*, draft-ietf-iiir-html-00](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft／埋込みDTD | `html.dtd,v 1.3 93/01/06`の`inline` entityに`U`があり、本文は`U`を含む12要素名をTexinfoのマクロ名由来と一括して述べる。 | 2026-08-09 |
| 1995-06-07 | *Texinfo — The GNU Documentation Format*, Edition 2.21、および同梱実装：[manual](../../raw/ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz/texinfo-3.7/texinfo.texi)・[implementation](../../raw/ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz/texinfo-3.7/texinfo.tex)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)） | GNU公式配布物内マニュアル・実装 | font commandsとcommand tableにunderline用`@u`を確認できない。 | 2026-08-09 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | IETF Proposed Standard | HTML 2.0 DTDに`U`を含めない。除外理由は述べない。 | 2026-08-10 |
| 1996-07-31 | [Arne Knudson, “Re: Cougar DTD -- Ugh!”](../../raw/www.w3.org/mid/199607311834.OAA09274@ebt-inc.ebt.com;list=www-html)（[公開元](https://www.w3.org/mid/199607311834.OAA09274@ebt-inc.ebt.com;list=www-html)） | W3C public mailing list | Wilbur／Cougar DTDへの`U`の再収録を批判し、underlineとlinkの混同を以前の除外理由として回顧する。WG決定ではない。 | 2026-08-10 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） | W3C Recommendation | `U`をdeprecated font style elementとして採録する。個別の再採録理由は述べない。 | 2026-08-10 |
| 2011-04-08 | [HTML Working Group Decision: ISSUE-144](../../raw/lists.w3.org/Archives/Public/public-html/2011Apr/0212.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2011Apr/0212.html)） | W3C HTML WG decision | nonconformingだった`U`をconformingにする提案を採択し、editorへ仕様変更を指示する。 | 2026-08-10 |

## 確度

**A−**

HTML側の集合レベルの由来記述とW3C HTML5における2011年の再適合化は直接史料で確認できるが、Texinfo側の個別対応、HTML 3.2への再採録、現行Living Standardまでの編集経路が未確認であるため。

## 否定された仮説

`U → Texinfo @u`という一対一対応。1992–1995年のTexinfoで`@u`をunderline commandとして確認できないため採用しない。`texinfo.tex`内の内部的な`\\u`はplain TeXのaccent commandを扱うもので、underline macroではない。「linkと混同するためHTML 2.0から除外した」という説明は1996年のpublic commenterによる回顧に留まり、公式な除外理由としては採用しない。

## 未解決

- HTML draft執筆者が想定したTexinfo macroが何だったかを確認する。
- RFC 1866で不採録となった後、HTML 3.2へ`U`を個別に再採録した主体と理由を確認する。
- 2011年のW3C HTML WG決定と現行Living Standardの`u`定義を接続する編集記録はあるか。
