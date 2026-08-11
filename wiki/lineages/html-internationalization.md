---
status: 完成
---

# IETF HTML国際化草案の共有系譜

## 一般テキスト要素

1995年8月15日の`draft-ietf-html-i18n-00`は言語やplatformに応じたquotation markのため`Q`を導入した。9月25日の`draft-ietf-html-i18n-01`は、一般テキストのsubscript／superscriptのため`SUB`／`SUP`を追加し、RFC 2070が三要素を標準化した。[IETF i18n draft-00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00)） [IETF i18n draft-01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)） [RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）

```text
IETF i18n draft-00 Q → 後続草案Q → RFC 2070 Q
IETF i18n draft-01 SUB / SUP → RFC 2070 SUB / SUP
```

対象: [`q`](../elements/q.md)、[`sub`](../elements/sub.md)、[`sup`](../elements/sup.md)

HTML+とHTML 3.0にも`Q`、`SUB`、`SUP`は存在する。HTML+からHTML 3.0への`SUB`／`SUP`の設計継承は確認できるが、国際化草案が三要素をそこから採用した記録はないため、HTML 3.0系列とIETF系列を矢印で結ばない。[HTML+ `Q`](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)） [HTML+ `SUB`／`SUP`](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)） [Raggettの回答](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)） [HTML 3.0](../../raw/www.w3.org/MarkUp/html3/index.html)（[公開元](https://www.w3.org/MarkUp/html3/)）

## 双方向テキストとstyle

同じ国際化草案は、`LANG`とbidi属性を保持するgeneric inline containerとして`SPAN`を、Unicode bidi algorithmの結果を明示的に上書きする要素として`BDO`を導入した。RFC 2070は`SPAN`のembeddingと`BDO`のoverrideをUnicodeの低水準mechanismへ対応させて標準化した。[IETF i18n draft-01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)） [RFC 2070 §4.2](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2)）

Michael J Hannahはstyle草案の新`C`要素を廃し、国際化提案にあった`SPAN`へ`STYLE`属性を追加して再利用することを提案した。W3Cのstyle草案も`SPAN`をgeneric rangeとして定義したため、`span`には国際化とstyleの枝が合流する。[提案](../../raw/lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)（[公開元](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)） [W3C style草案](../../raw/www.w3.org/TR/WD-style-960115)（[公開元](https://www.w3.org/TR/WD-style-960115)）

```text
Unicode embedding要求 → IETF i18n draft-01 SPAN → RFC 2070 SPAN
style草案のCを廃止して既存SPANを再利用

Unicode directional override → IETF i18n draft-01 BDO → RFC 2070 BDO
```

対象: [`span`](../elements/span.md)、[`bdo`](../elements/bdo.md)
