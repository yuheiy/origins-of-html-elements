---
status: 完成
---

# HTML+フォームからHTML 2.0へ

## 集合単位の採用

HTML+は`FORM`、`INPUT`、`SELECT`、`OPTION`、`TEXTAREA`を一つのフォームモデルとして定義した。RFC 1866はHTMLフォームがHTML+の資料に基づくと明記するため、この五要素は集合単位でHTML+からHTML 2.0へ接続できる。[HTML+ Forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） [RFC 1866 §8](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html#section-8)）

この集合の形成はHTML+完成稿より早い。Whitescarverは1992年11月に検索・メール送信用`INPUT`を提案し、1993年1月にConnollyとRaggettが問い合わせフォーム、型付き入力欄、`SELECT`／`CHOICE`へ展開した。6月案はRaggettが以前取り組んだ計算機構成支援エキスパートシステムを例にし、`SELECT`の子を`ITEM`とした。11月のHTML+で子要素は`OPTION`となった。[Whitescarver, “interactive hypermedia”](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1992.messages/371.html)） [Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)）

```text
1992 INPUT案 → 1993 QUERYFORM / INPUT / SELECT / CHOICE案
  → HTML+ FORM / INPUT / SELECT / OPTION / TEXTAREA
  → HTML 2.0 forms
  → 後続HTML

HyperCard → HP Protek Pilotの業務用フォーム経験
  → HTML+フォーム群の設計背景
```

対象: [`form`](../elements/form.md)、[`input`](../elements/input.md)、[`select`](../elements/select.md)、[`option`](../elements/option.md)、[`textarea`](../elements/textarea.md)

## 境界

RFC 1866の記述はフォーム資料全体の由来を示すが、五要素それぞれの採録判断を個別には示さない。既存プラットフォームのUI慣習とProtek Pilotは設計背景として確認できる一方、特定GUIツールキットの各ウィジェットからHTML要素への一対一の採用記録はない。
