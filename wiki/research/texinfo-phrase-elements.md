# HTML phrase elementsとTexinfo（1992–1995）

## 結論

1993年6月のHTML Internet-Draftは、character highlighting節に列挙した12要素の名前を「TeXInfo macro names」から派生したと明記する。対象はphysical stylesの`TT`, `B`, `I`, `U`と、logical stylesの`EM`, `STRONG`, `CODE`, `SAMP`, `KBD`, `VAR`, `DFN`, `CITE`である。[Tim Berners-Lee and Daniel W. Connolly, *Hypertext Markup Language (HTML)*, `draft-ietf-iiir-html-00`, June 1993](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

ただし、同時代のGNU Texinfo公式配布物で個別の対応を確認できるのは`TT → @t`, `B → @b`, `I → @i`, `EM → @emph`, `STRONG → @strong`, `CODE → @code`, `SAMP → @samp`, `KBD → @kbd`, `VAR → @var`, `DFN → @dfn`, `CITE → @cite`である。underlineを指定するTexinfoの`@u`は確認できず、HTML draftの一括記述から`U → @u`という個別対応を導くことはできない。

この発見により、ハンドオフでAとされた現行`u`のTexinfo系譜はA−へ下げる。HTML側が集合としてTexinfo由来と述べる証拠はあるが、その直接祖先となる個別マクロをTexinfo側で確認できないためである。

## HTML側の証拠

1993年draftのcharacter highlighting節は、12要素を列挙する直前に、これらの要素名がTexinfoのマクロ名から派生したと記している。これはHTML側から命名元を明示する直接史料である。[IETF Datatracker上の1993年draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

W3Cの`1995-archive`にも同じ由来文と列挙を持つ版が保存されているが、本文のDTD revisionは1994年5月18日である。このページを「1995年の最終HTML 2.0仕様」と呼ばない。[W3C, archived HTML specification](https://www.w3.org/MarkUp/1995-archive/html-spec.html)

最終HTML 2.0であるRFC 1866にはTexinfo由来の文がなく、phrase markupの集合から`DFN`と`U`も落ちている。したがって、由来文をRFC 1866へ帰属させず、1993年draftに帰属させる。また`dfn`と`u`については、1993年案から現行要素までの標準化経路を別途調査する。[RFC 1866, *Hypertext Markup Language - 2.0*, November 1995](https://www.w3.org/MarkUp/html-spec/html-spec.html)

## Texinfo側の証拠

調査対象はGNU公式配布物に同梱されたマニュアル原稿と実装である。

- [GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z): *Texinfo — The GNU Documentation Format*, Manual Edition 2.16, Texinfo Version Two, 1992年10月6日。原稿は`texinfo2.texi`。
- [GNU Texinfo 3.7公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz): 同書Manual Edition 2.21, Texinfo Version Three, マニュアル日付1995年6月7日。原稿は`texinfo.texi`、実装確認対象は`makeinfo/makeinfo.c`と`texinfo.tex`。

両版で次の定義は実質的に一致する。短い引用は3.7同梱マニュアルから採った。

| HTML draft | Texinfo | Texinfoでの当時の用途 | 短い原文 | 判定 |
|---|---|---|---|---|
| `TT` | `@t` | fixed-widthのtypewriter-style font | “typewriter-style font” | 個別対応を確認 |
| `B` | `@b` | 印刷出力のbold face | “bold face” | 個別対応を確認 |
| `I` | `@i` | 印刷出力のitalic font | “italic font” | 個別対応を確認 |
| `U` | 対応不明 | underline用マクロは確認できない | — | 個別対応を確認できない |
| `EM` | `@emph` | 一般的な強調 | “for emphasis” | 個別対応を確認 |
| `STRONG` | `@strong` | `@emph`より強い強調 | “stronger” | 個別対応を確認 |
| `CODE` | `@code` | プログラムの一部を成す完全なsyntactic token | “piece of a program” | 個別対応を確認 |
| `SAMP` | `@samp` | 文字列などのliteral sample | “‘sample’” | 個別対応を確認 |
| `KBD` | `@kbd` | ユーザーがタイプする入力文字 | “typed by users” | 個別対応を確認 |
| `VAR` | `@var` | metasyntactic variable | “metasyntactic variables” | 個別対応を確認 |
| `DFN` | `@dfn` | 技術用語を導入または定義する箇所 | “defining use” | 個別対応を確認 |
| `CITE` | `@cite` | companion Info fileを持たない書籍名 | “name of a book” | 個別対応を確認 |

## `U`の矛盾

Texinfo 3.7同梱マニュアルの*Fonts for Printing, Not Info*は、印刷用font commandsを`@i`, `@b`, `@t`, `@r`の4個としている。同梱`makeinfo/makeinfo.c`のcommand tableにも`b`, `i`, `t`, `r`はあるが`u`はない。[GNU Texinfo 3.7公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)

同梱`texinfo.tex`には内部定義の`\\def\\u`があるが、plain TeXのaccent commandsを扱う処理にあり、underline macroではない。後代に文書化されるTexinfoの`@u`もbreve accentである。したがって、1993年HTML draftの包括的な由来文は史料上の事実として記録する一方、`U → @u`は否定された仮説として扱う。

## 証拠と解釈

### 証拠

- 1993年HTML draftは、列挙した12要素名をTexinfo macro namesから派生したと明記する。
- 同時代Texinfoは、プログラム断片、literal sample、ユーザー入力、metasyntactic variable、用語定義などを別々のマクロで表す。
- Texinfoはカテゴリー型のマクロと、`@b`, `@i`, `@t`など印刷出力だけのfont commandsを区別する。

### 解釈

Texinfoはソフトウェアマニュアルを作る文書システムであるため、これらのHTML要素の上流にコンピュータ技術文書文化を位置づけられる。ただし、文化からHTMLへ直接導入されたとは書かず、直接の命名元であるTexinfoを中間に置く。

## 現行要素ページへの評価

| 現行要素 | HTML直前の命名元 | 推奨確度 | 残る問題 |
|---|---|---|---|
| `b` | Texinfo `@b` | A | 現行semantic reinterpretationは別途調査する。 |
| `i` | Texinfo `@i` | A | 現行semantic reinterpretationは別途調査する。 |
| `em` | Texinfo `@emph` | A | なし。 |
| `strong` | Texinfo `@strong` | A | なし。 |
| `code` | Texinfo `@code` | A | なし。 |
| `samp` | Texinfo `@samp` | A | なし。 |
| `kbd` | Texinfo `@kbd` | A | なし。 |
| `var` | Texinfo `@var` | A | なし。 |
| `dfn` | Texinfo `@dfn` | A | HTML 2.0で不採録後の標準化経路を調べる。 |
| `cite` | Texinfo `@cite` | A | なし。 |
| `u` | 個別対応不明 | A− | HTML側の包括的記述とTexinfo側の語彙が一致しない。HTML 2.0で不採録後の標準化経路も調べる。 |

`tt`は1993年draftの由来を検証する重要な対照例だが、現在はobsolete/non-conformingなので現行要素ページの固定一覧には含めない。
