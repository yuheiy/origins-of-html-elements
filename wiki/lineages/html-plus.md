---
status: 完成
---

# HTML+から現行HTML要素への共有系譜

## Document amendments

HTML+は、法律文書や法案修正で削除部分と追加部分を示す要求に対して`REMOVED`と`ADDED`を定義した。表示慣習としてstrike-throughとunderlineを示すが、この機構をrevision history用ではないと限定する。Dave Raggettも後に、表示用の`S`とlogical useの`ADDED`／`REMOVED`を区別した。[HTML+ Document Amendments](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)） [Raggettの説明](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/2.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/2.html)）

W3CはHTML 3.0がHTML+の先行作業に基づくと記録し、HTML 3.0 DTDの履歴は1995年2月22日に`INS`と`DEL`をlegal documents用に追加したとする。後続のW3C HTML設計もHTML+とHTML 3.0草案からdrawすると明記されるため、HTML+ → HTML 3.0 → HTML 4は集合単位で接続できる。ただし`ADDED`→`INS`、`REMOVED`→`DEL`の個別改名、Cougar中間版、HTML 4への個別採録は未確認である。[HTML 3.0 materials](../../raw/www.w3.org/MarkUp/html3/index.html)（[公開元](https://www.w3.org/MarkUp/html3/)） [HTML 3.0 DTD](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） [W3C声明](../../raw/www.w3.org/press-releases/1996/html-leadership/index.html)（[公開元](https://www.w3.org/press-releases/1996/html-leadership/)）

HTML 4 First Public Working Draftは両要素を一般の文書版間差分へ広げ、`cite`と`datetime`を加えた。当初はDTDがinline contentだけを許しながら本文がblock-level contentも許す不整合があったが、1997年10月23日にHTML Working Groupがcontent modelを`%flow`とすることを決議した。[First Public Working Draft](../../raw/www.w3.org/TR/WD-html40-970708/struct/text.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)） [Working Group議事録](../../raw/lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)） [Proposed Recommendation](../../raw/www.w3.org/TR/PR-html40-971107/struct/text.html)（[公開元](https://www.w3.org/TR/PR-html40-971107/struct/text.html#h-9.4)）

```text
[集合単位] HTML+ REMOVED / ADDED
  → HTML 3.0 DEL / INS
  → W3C HTML design work
  → HTML 4 DEL / INS
  → 現行HTML del / ins
```

対象: [`del`](../elements/del.md)、[`ins`](../elements/ins.md)

## Forms

HTML+は`FORM`、`INPUT`、`SELECT`、`OPTION`、`TEXTAREA`を一つのform modelとして定義した。RFC 1866はforms materialがHTML+に基づくと明記するため、この五要素は集合単位でHTML+ formsからHTML 2.0 formsへ接続できる。[HTML+ Forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） [RFC 1866 §8](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html#section-8)）

```text
[集合単位] HTML+ FORM / INPUT / SELECT / OPTION / TEXTAREA
  → HTML 2.0 forms
  → 後続HTML
```

対象: [`form`](../elements/form.md)、[`input`](../elements/input.md)、[`select`](../elements/select.md)、[`option`](../elements/option.md)、[`textarea`](../elements/textarea.md)

## Tables

HTML+の単純なtable modelは`TABLE`、`CAPTION`、`TR`、`TH`、`TD`を含む。RFC 1942はtable model全体がHTML+とinitial HTML 3 draftから発展したと述べ、HTML 3.2はこの五要素を含む広く実装されたsubsetを採録したため、この区間は集合単位で接続できる。[HTML+ Tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 3.2 Tables](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)）

```text
[集合単位] HTML+ table work + initial HTML 3 draft
  → RFC 1942
  → HTML 3.2 TABLE / CAPTION / TR / TH / TD
  → 後続HTML
```

対象: [`table`](../elements/table.md)、[`caption`](../elements/caption.md)、[`tr`](../elements/tr.md)、[`th`](../elements/th.md)、[`td`](../elements/td.md)。CALS由来の後続拡張は[CALSとHTMLの表構造要素](cals-tables.md)で分けて扱う。

## Figures

Simon PietersはHTML+の`FIG`／`CAPTION`を明示してHTML5向けの再利用を提案し、Michel Fortinは`figure`／`caption`構造と実在するpublisherのuse casesを提示した。Ian Hicksonは、`CAPTION`のtable parser上の問題から`legend`を使い、`fig`を`figure`へ変えた点を除いてHTML+案に同意し、仕様へ追加したと説明した。caption構造は後に`dt`／`dd`、専用`figcaption`へ置換された。[HTML+ Figures](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)） [Pieters案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)） [Fortin案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html)） [Hicksonの総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)）

```text
HTML+ FIG / CAPTION + WHATWG image-caption proposals
  → HTML5 figure / legend
  → figure / dt / dd
  → figure / figcaption
```

対象: [`figure`](../elements/figure.md)、[`figcaption`](../elements/figcaption.md)

## Client-side image maps

HTML+の`FIG`は図中のshaped anchorsを提案し、James L. Seidmanの案はこの要求とserver-side image mapsの問題から`MAP` containerと`AREA` regionsを設計した。RFC 1980が両要素を標準化したため、この共有経路は要素単位でも接続できる。[HTML+ Active Areas](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html)） [Seidman案](../../raw/archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)（[公開元](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)） [RFC 1980](../../raw/www.rfc-editor.org/rfc/rfc1980.html)（[公開元](https://www.rfc-editor.org/rfc/rfc1980.html)）

```text
HTML+ FIG内のshaped links + server-side image maps
  → MAP / AREA proposal
  → RFC 1980
  → HTML 3.2 map / area
```

対象: [`map`](../elements/map.md)、[`area`](../elements/area.md)

## 接続しない境界

- HTML+／HTML 3.0の`ABBREV`とHTML 4の[`abbr`](../elements/abbr.md)は、改名・採用因果が確認できないため接続しない。HTML 4 Proposed Recommendationが直接示す改名前の要素は初期HTML 4草案の`ACRONYM`である。[HTML+ `ABBREV`](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)） [HTML 3.0](../../raw/www.w3.org/MarkUp/html3/logical.html)（[公開元](https://www.w3.org/MarkUp/html3/logical.html)） [HTML 4 Proposed Recommendation](../../raw/www.w3.org/TR/PR-html40-971107/struct/text.html)（[公開元](https://www.w3.org/TR/PR-html40-971107/struct/text.html)）
- HTML+／HTML 3.0の`S`からHTML 4の[`s`](../elements/s.md)への再採録は、HTML 3.2での欠落後の因果が確認できないため接続しない。HTML4由来のobsoleteな`S`／`STRIKE`から2010年のHTML5 `s`再導入への接続は個別ページで確認済みである。[HTML+ `S`](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html)） [W3C Bug 9429](../../raw/www.w3.org/Bugs/Public/show_bug.cgi-fbca4c889bfb6216)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=9429)）
- HTML+の`Q`は後続要素への個別採用を確認できない。`SUB`／`SUP`はHTML+ DTDの一般テキスト向け設計をHTML 3.0でも有用とするRaggettの説明により、HTML 3.0まで要素単位で接続できるが、1995年IETF国際化草案へ採用した記録はない。[HTML+ `Q`](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)） [HTML+ `SUB`／`SUP`](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)） [Raggettの回答](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)） IETF系列は[国際化草案の系譜](html-internationalization.md)で扱う。
