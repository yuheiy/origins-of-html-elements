# HTML+から現行HTML要素への共有系譜

## 範囲

このページは、HTML+を共通の上流とする複数要素の接続だけを示す。初出、現在の意味、確度、証拠表、要素ごとの未解決点は各要素ページを正本とする。

## Forms

HTML+は`FORM`、`INPUT`、`SELECT`、`OPTION`、`TEXTAREA`を一つのform modelとして定義した。RFC 1866はforms materialがHTML+に基づくと明記するため、この五要素は集合単位でHTML+ formsからHTML 2.0 formsへ接続できる。[HTML+ Forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [RFC 1866 §8](https://www.rfc-editor.org/rfc/rfc1866.html#section-8)

```text
[集合単位] HTML+ FORM / INPUT / SELECT / OPTION / TEXTAREA
  → HTML 2.0 forms
  → 後続HTML
```

対象: [`form`](../elements/form.md)、[`input`](../elements/input.md)、[`select`](../elements/select.md)、[`option`](../elements/option.md)、[`textarea`](../elements/textarea.md)

## Tables

HTML+の単純なtable modelは`TABLE`、`CAPTION`、`TR`、`TH`、`TD`を含む。RFC 1942はtable model全体がHTML+とinitial HTML 3 draftから発展したと述べ、HTML 3.2はこの五要素を含む広く実装されたsubsetを採録したため、この区間は集合単位で接続できる。[HTML+ Tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) [HTML 3.2 Tables](https://www.w3.org/TR/REC-html32#table)

```text
[集合単位] HTML+ table work + initial HTML 3 draft
  → RFC 1942
  → HTML 3.2 TABLE / CAPTION / TR / TH / TD
  → 後続HTML
```

対象: [`table`](../elements/table.md)、[`caption`](../elements/caption.md)、[`tr`](../elements/tr.md)、[`th`](../elements/th.md)、[`td`](../elements/td.md)。CALS由来の後続拡張は[CALSとHTMLの表構造要素](cals-tables.md)で分けて扱う。

## Client-side image maps

HTML+の`FIG`は図中のshaped anchorsを提案し、James L. Seidmanの案はこの要求とserver-side image mapsの問題から`MAP` containerと`AREA` regionsを設計した。RFC 1980が両要素を標準化したため、この共有経路は要素単位でも接続できる。[HTML+ Active Areas](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html) [Seidman案](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html) [RFC 1980](https://www.rfc-editor.org/rfc/rfc1980.html)

```text
HTML+ FIG内のshaped links + server-side image maps
  → MAP / AREA proposal
  → RFC 1980
  → HTML 3.2 map / area
```

対象: [`map`](../elements/map.md)、[`area`](../elements/area.md)

## 接続しない境界

- HTML+／HTML 3.0の`ABBREV`とHTML 4の[`abbr`](../elements/abbr.md)は、改名・採用因果が確認できないため接続しない。[HTML+ `ABBREV`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)
- HTML+／HTML 3.0の`S`とHTML 4以降の[`s`](../elements/s.md)は、HTML 3.2での欠落後に再採録した因果が確認できないため接続しない。[HTML+ `S`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html) [HTML 3.2](https://www.w3.org/TR/REC-html32) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)
- HTML+の`Q`、`SUB`、`SUP`は後続要素への個別採用を確認できない。[HTML+ `Q`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML+ `SUB`／`SUP`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) 1995年IETF国際化草案からの共有経路は[国際化草案の系譜](html-internationalization.md)で扱う。
- HTML+ `FIG`／`CAPTION`からHTML5の[`figure`](../elements/figure.md)／[`figcaption`](../elements/figcaption.md)への採用因果は確認できない。[HTML+ Figures](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html) [WHATWG `figure`導入commit](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)
