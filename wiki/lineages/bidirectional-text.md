---
status: 完成
---

# 双方向テキストの埋め込みと上書き

## 対になる低水準機構

IETF HTML国際化草案は、`LANG`と双方向文字属性を保持する汎用行内コンテナーとして`SPAN`を、Unicode双方向文字アルゴリズムの結果を明示的に上書きする要素として`BDO`を導入した。RFC 2070は`SPAN`の埋め込みと`BDO`の上書きをUnicodeの低水準機構へ対応させて標準化した。[IETF i18n draft-01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)） [RFC 2070 §4.2](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2)）

Michael J Hannahはスタイル草案の新`C`要素を廃し、国際化提案の`SPAN`へ`STYLE`属性を加えて再利用することを提案したため、`span`にはスタイル指定の枝も合流する。[提案](../../raw/lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)（[公開元](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)） [W3C スタイル草案](../../raw/www.w3.org/TR/WD-style-960115)（[公開元](https://www.w3.org/TR/WD-style-960115)）

```text
Unicode埋め込み要求 → SPAN → RFC 2070 SPAN
スタイル草案Cの廃止 → 既存SPANの再利用
Unicode書字方向の上書き要求 → BDO → RFC 2070 BDO
```

対象: [`span`](../elements/span.md)、[`bdo`](../elements/bdo.md)

## 境界

同じ国際化草案の`Q`、`SUB`、`SUP`は、この二要素と共通の祖先または一体の導入要求を確認できないため、この共有系譜に含めない。
