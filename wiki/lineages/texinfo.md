# HTML phrase elementsとTexinfo

## 範囲

このページは、Texinfoを共通の命名元とするHTML phrase要素群の接続と、その集合に共通する制約だけを示す。個別の初出、現在の意味、確度、証拠表、未解決点は各要素ページを正本とする。

## 共有される命名経路

1993年6月のHTML Internet-Draftは、character highlighting節に列挙した`TT`, `B`, `I`, `U`, `EM`, `STRONG`, `CODE`, `SAMP`, `KBD`, `VAR`, `DFN`, `CITE`の名前をTexinfo macro namesから派生したと明記する。[Tim Berners-Lee and Daniel W. Connolly, *Hypertext Markup Language (HTML)*, `draft-ietf-iiir-html-00`, June 1993](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

同時代のGNU Texinfo公式配布物では、`TT → @t`, `B → @b`, `I → @i`, `EM → @emph`, `STRONG → @strong`, `CODE → @code`, `SAMP → @samp`, `KBD → @kbd`, `VAR → @var`, `DFN → @dfn`, `CITE → @cite`の個別対応を確認できる。[GNU Texinfo 2.16](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) [GNU Texinfo 3.7](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)

```text
[集合単位] GNU Texinfo macro names
  → 1993年HTML draftのcharacter highlighting集合
```

対象: [`b`](../elements/b.md)、[`i`](../elements/i.md)、[`em`](../elements/em.md)、[`strong`](../elements/strong.md)、[`code`](../elements/code.md)、[`samp`](../elements/samp.md)、[`kbd`](../elements/kbd.md)、[`var`](../elements/var.md)、[`dfn`](../elements/dfn.md)、[`cite`](../elements/cite.md)、[`u`](../elements/u.md)。`tt`は共有史料の対象だがobsolete／non-conformingなので現行要素の索引には含めない。

## 集合の境界

1993年draftに埋め込まれたDTDは`U`を含む一方、同時代のTexinfo 2.16／3.7にはunderline用`@u`がない。Texinfo 3.7の内部定義`\\def\\u`はaccent処理であり、HTML `U`の命名元となるunderline macroではないため、集合単位の由来記述から`U → @u`という個別枝を導かない。[1993年HTML draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [GNU Texinfo 2.16](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) [GNU Texinfo 3.7](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)

最終HTML 2.0のRFC 1866ではTexinfo由来の記述がなく、`DFN`と`U`もphrase markup集合から落ちている。したがって由来記述をRFC 1866へ帰属させず、`dfn`と`u`について1993年草案から現行要素までを無条件に連結しない。[1993年HTML draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)
