---
status: 完成
---

# HTML+から基本表モデルへ

HTML+の単純表モデルは`TABLE`、`CAPTION`、`TR`、`TH`、`TD`を含む。RFC 1942は表モデルがHTML+と初期HTML 3草案から発展したと述べ、HTML 3.2はこの五要素を含む広く実装された部分集合を採録した。[HTML+ Tables](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)） [RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)） [HTML 3.2 Tables](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#table)）

```text
HTML+の基本表＋初期HTML 3草案
  → RFC 1942
  → HTML 3.2 TABLE / CAPTION / TR / TH / TD
  → 後続HTML
```

対象: [`table`](../elements/table.md)、[`caption`](../elements/caption.md)、[`tr`](../elements/tr.md)、[`th`](../elements/th.md)、[`td`](../elements/td.md)

## 境界

`tr`はHTML+作業中に行区切りから行コンテナーへ変化した。CALS由来の行グループと後発の列グループは別の共有系譜として扱う。
