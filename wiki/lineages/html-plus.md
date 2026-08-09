# HTML+から現行HTML要素への共有系譜

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

## Figures

Simon PietersはHTML+の`FIG`／`CAPTION`を明示してHTML5向けの再利用を提案し、Michel Fortinは`figure`／`caption`構造と実在するpublisherのuse casesを提示した。Ian Hicksonは、`CAPTION`のtable parser上の問題から`legend`を使い、`fig`を`figure`へ変えた点を除いてHTML+案に同意し、仕様へ追加したと説明した。caption構造は後に`dt`／`dd`、専用`figcaption`へ置換された。[HTML+ Figures](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html) [Pieters案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html) [Fortin案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html) [Hicksonの総括](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)

```text
HTML+ FIG / CAPTION + WHATWG image-caption proposals
  → HTML5 figure / legend
  → figure / dt / dd
  → figure / figcaption
```

対象: [`figure`](../elements/figure.md)、[`figcaption`](../elements/figcaption.md)

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
- HTML+／HTML 3.0の`S`からHTML 4の[`s`](../elements/s.md)への再採録は、HTML 3.2での欠落後の因果が確認できないため接続しない。HTML4由来のobsoleteな`S`／`STRIKE`から2010年のHTML5 `s`再導入への接続は個別ページで確認済みである。[HTML+ `S`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html) [W3C Bug 9429](https://www.w3.org/Bugs/Public/show_bug.cgi?id=9429)
- HTML+の`Q`、`SUB`、`SUP`は後続要素への個別採用を確認できない。[HTML+ `Q`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML+ `SUB`／`SUP`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) 1995年IETF国際化草案からの共有経路は[国際化草案の系譜](html-internationalization.md)で扱う。
