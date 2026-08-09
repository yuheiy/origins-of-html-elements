# IETF HTML国際化草案の共有系譜

## 範囲

このページは、IETF HTML国際化草案で同時に導入された要素群と、Unicodeおよびstyle仕様から合流する枝を示す。個別の初出、意味、確度、未解決点は各要素ページを正本とする。

## 一般テキスト要素

1995年9月25日の`draft-ietf-html-i18n-01`は、言語やplatformに応じたquotation markのための`Q`と、一般テキストのsubscript／superscriptのための`SUB`／`SUP`を同じ改訂で導入し、RFC 2070が三要素を標準化した。[IETF i18n draft-01](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01) [RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html)

```text
IETF i18n draft-01 Q / SUB / SUP
  → RFC 2070 Q / SUB / SUP
```

対象: [`q`](../elements/q.md)、[`sub`](../elements/sub.md)、[`sup`](../elements/sup.md)

HTML+とHTML 3.0にも`Q`、`SUB`、`SUP`は存在するが、国際化草案が各要素をそこから採用した記録は確認できないため、二つの系列を矢印で結ばない。[HTML+ `Q`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML+ `SUB`／`SUP`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/)

## 双方向テキストとstyle

同じ国際化草案は、`LANG`とbidi属性を保持するgeneric inline containerとして`SPAN`を、Unicode bidi algorithmの結果を明示的に上書きする要素として`BDO`を導入した。RFC 2070は`SPAN`のembeddingと`BDO`のoverrideをUnicodeの低水準mechanismへ対応させて標準化した。[IETF i18n draft-01](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01) [RFC 2070 §4.2](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2)

Michael J Hannahはstyle草案の新`C`要素を廃し、国際化提案にあった`SPAN`へ`STYLE`属性を追加して再利用することを提案した。W3Cのstyle草案も`SPAN`をgeneric rangeとして定義したため、`span`には国際化とstyleの枝が合流する。[提案](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html) [W3C style草案](https://www.w3.org/TR/WD-style-960115)

```text
Unicode embedding要求 → IETF i18n draft-01 SPAN → RFC 2070 SPAN
style草案のCを廃止して既存SPANを再利用

Unicode directional override → IETF i18n draft-01 BDO → RFC 2070 BDO
```

対象: [`span`](../elements/span.md)、[`bdo`](../elements/bdo.md)
