---
status: 完成
---

# HTML句要素とTexinfo

## 共有される命名経路

1993年6月のHTML Internet-Draftは、文字強調節に列挙した`TT`, `B`, `I`, `U`, `EM`, `STRONG`, `CODE`, `SAMP`, `KBD`, `VAR`, `DFN`, `CITE`の名前をTexinfoのマクロ名から派生したと明記する。[Tim Berners-Lee and Daniel W. Connolly, *Hypertext Markup Language (HTML)*, `draft-ietf-iiir-html-00`, June 1993](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）

同時代のGNU Texinfo公式配布物では、`TT → @t`, `B → @b`, `I → @i`, `EM → @emph`, `STRONG → @strong`, `CODE → @code`, `SAMP → @samp`, `KBD → @kbd`, `VAR → @var`, `DFN → @dfn`, `CITE → @cite`の個別対応を確認できる。[GNU Texinfo 2.16](../../raw/ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)） [GNU Texinfo 3.7](../../raw/ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz/texinfo-3.7/texinfo.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)）

```text
[集合単位] GNU Texinfoのマクロ名
  → 1993年HTML草案の文字強調集合
```

対象: [`b`](../elements/b.md)、[`i`](../elements/i.md)、[`em`](../elements/em.md)、[`strong`](../elements/strong.md)、[`code`](../elements/code.md)、[`samp`](../elements/samp.md)、[`kbd`](../elements/kbd.md)、[`var`](../elements/var.md)、[`dfn`](../elements/dfn.md)、[`cite`](../elements/cite.md)、[`u`](../elements/u.md)。`tt`は共有史料の対象だが廃止／不適合なので現行要素の索引には含めない。

## 集合の境界

1993年草案に埋め込まれたDTDは`U`を含む一方、同時代のTexinfo 2.16／3.7には下線用`@u`がない。Texinfo 3.7の内部定義`\\def\\u`はアクセント処理であり、HTML `U`の命名元となる下線マクロではないため、集合単位の由来記述から`U → @u`という個別枝を導かない。[1993年HTML 草案](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） [GNU Texinfo 2.16](../../raw/ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)） [GNU Texinfo 3.7 manual](../../raw/ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz/texinfo-3.7/texinfo.texi)・[implementation](../../raw/ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz/texinfo-3.7/texinfo.tex)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)）

最終HTML 2.0のRFC 1866ではTexinfo由来の記述がなく、`DFN`と`U`も句マークアップ集合から落ちている。したがって由来記述をRFC 1866へ帰属させず、`dfn`と`u`について1993年草案から現行要素までを無条件に連結しない。[1993年HTML 草案](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)）
