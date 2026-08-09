# 初期SGML/GML系統の調査（第1回）

## 結論

`h1`〜`h6`については、AAP tag setからCERN SGML guideを経て初期HTMLへ保持された因果関係を、1992年のCERN公式HTML資料が明記している。この6要素はAと評価できる。[Tim Berners-Lee, *Tags used in HTML*, 1992年のW3C historical snapshot](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

今回あわせて調査対象とした`address`, `body`, `head`, `title`, `html`, `p`, `ul`, `li`, `ol`, `dl`, `dt`, `dd`, `blockquote`は、同名または対応語彙の先行存在や初期HTMLでの存在を示す資料があっても、CERN SGML等からHTMLへ採用した因果関係を個別に明記する史料を今回固定できなかった。このため個別ページの確度は変更せず、追加調査対象として残す。

## `h1`〜`h6`

1992年のCERN公式ページ*Tags used in HTML*は、`H1`〜`H6`をCERN SGML guideで定義されたまま保持したと説明し、その定義がAAP tag setに由来すると明記する。ページの短い表現では“kept as defined in the CERN SGML guide”および“deriving from the AAP tag set”である。[CERN/W3C historical snapshot](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

この史料は、先行システムで同名タグが存在することを示すだけでなく、CERN SGMLからHTMLへ保持したことと、その一段上のAAP由来を同じ説明で示す。安全な系譜は次のとおりである。

```text
AAP tag set headings
→ CERN SGML guide H1–H6
→ early HTML H1–H6
→ current HTML h1–h6
```

1988年のWaterloo SCRIPT GML User’s Guideにも`H1`〜`H6`が定義されている。ただし、この資料だけではWaterlooの見出し語彙からCERNまたはHTMLへ採用された因果関係を示せないため、さらに上流の同名存在としてのみ扱う。[University of Waterloo, *SCRIPT GML User’s Guide*, 18 October 1988（保存版）](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

| 要素 | HTML直前の祖先 | さらに上流 | 推奨確度 | 根拠 |
|---|---|---|---|---|
| `h1` | CERN SGML guide `H1` | AAP tag set | A | CERN資料が保持と由来を明記する。 |
| `h2` | CERN SGML guide `H2` | AAP tag set | A | 同上。 |
| `h3` | CERN SGML guide `H3` | AAP tag set | A | 同上。 |
| `h4` | CERN SGML guide `H4` | AAP tag set | A | 同上。 |
| `h5` | CERN SGML guide `H5` | AAP tag set | A | 同上。 |
| `h6` | CERN SGML guide `H6` | AAP tag set | A | 同上。 |

## 今回確度を変更しない要素

### `address`, `p`, `ul`, `li`, `dl`, `dt`, `dd`

1992年の*Tags used in HTML*はこれらを初期HTML語彙として記録するが、見出し節のようにCERN SGML guideから保持したとは個別に述べない。[CERN/W3C historical snapshot](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

先行SGML/GML資料での同名要素の存在は調査仮説を強めるが、存在と採用因果は別である。CERN SGML guideの本文、DTD、実文書を確認しただけではHTMLへの採用理由を確定できないため、追加の設計資料または当事者記録を探す。

### `blockquote`

1992年の*Tags used in HTML*では`BLOCKQUOTE`を確認できず、1993年6月のHTML Internet-Draftではblock quotation要素として確認できる。[1992年CERN HTML tags](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) [1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

この初出範囲は、CERN SGMLやGMLの同名要素から採用した因果関係を示さない。正確な導入経路が見つかるまで、同名存在を直接祖先として矢印で結ばない。

### `body`, `head`, `title`, `html`

初期HTMLではSGMLの通常のframing tagsが省略可能だったため、現行の文書構造からCERN SGMLの同名要素へ単純に遡ることはできない。個別のDTD変遷とparser上の扱いを調査してから確度を決める。

### `ol`

今回の時間範囲では、Waterloo/CERN語彙から初期HTML `OL`への採用因果を示す一次資料を固定できなかった。先行存在だけで確度を上げない。

## 否定する短絡

- Waterloo、CERN、HTMLに同名タグがあるという理由だけで、Waterloo → CERN → HTMLの矢印を引かない。
- `BODY`, `HEAD`, `TITLE`が一般的なSGML文書構造であることだけで、個別の採用経路を証明したとしない。
- `BLOCKQUOTE`の名称と用途が先行要素に似ていることだけで、直接祖先としない。

## 次回調査

- 1986年CERN SGML User’s Guideの見出し以外の要素定義と、HTML採用を説明する本文を分けて確認する。
- pre-Web CERN文書のDTDと実使用を、採用因果ではなく先行存在の証拠として整理する。
- `blockquote`が1992年資料から1993年draftへ入った議論を探す。
- `html`, `head`, `body`, `title`の省略可能tagとDTD変遷を追う。
- list familyについてWaterloo/CERNからHTMLへの採用を明記する当事者資料を探す。
