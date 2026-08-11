---
status: 完成
---

# HTML+フォームからHTML 2.0へ

## 集合単位の採用

HTML+は`FORM`、`INPUT`、`SELECT`、`OPTION`、`TEXTAREA`を一つのフォームモデルとして定義した。RFC 1866はHTMLフォームがHTML+の資料に基づくと明記するため、この五要素は集合単位でHTML+からHTML 2.0へ接続できる。[HTML+ Forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） [RFC 1866 §8](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html#section-8)）

```text
[集合単位] HTML+ FORM / INPUT / SELECT / OPTION / TEXTAREA
  → HTML 2.0 forms
  → 後続HTML
```

対象: [`form`](../elements/form.md)、[`input`](../elements/input.md)、[`select`](../elements/select.md)、[`option`](../elements/option.md)、[`textarea`](../elements/textarea.md)

## 境界

RFC 1866の記述はフォーム資料全体の由来を示すが、五要素それぞれの採録判断を個別には示さない。
