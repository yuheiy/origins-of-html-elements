---
status: 完成
---

# `details`と`summary`の開閉UI系譜

## GUI慣習から`details`へ

2006年のWHATWGコミットは、Apple HIGとGNOMEの具体的な開閉ウィジェット資料を参照して`details`を導入し、先頭`legend`を要約、残りを追加情報とした。既存GUIの開閉状態とキャプション構造をHTMLへ移した直接経路を確認できる。[Apple HIG](../../raw/web.archive.org/web/20060701000000id_/http%3A/developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)） [GNOMEの例](../../raw/web.archive.org/web/20060701000000id_/http%3A/mail.gnome.org/archives/usability/2006-June/msg00015.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://mail.gnome.org/archives/usability/2006-June/msg00015.html)） [`details`導入コミット](../../raw/github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)（[公開元](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)）

## キャプションの専用化

参照されたGNOMEの同時代議論は、開閉ラベルを単なる説明でなく開示される値の要約にするよう求めていた。2009年にHTMLのキャプション構造は`legend`から`dt`／`dd`へ変わり、2010年に専用`summary`へ置換された。この最後の変更が現行二要素を直接結ぶ。ただし、GNOMEの表現からタグ名を借用した記録はない。[GNOMEの開閉UI議論](../../raw/web.archive.org/web/20060701000000id_/http%3A/mail.gnome.org/archives/usability/2006-June/msg00015.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://mail.gnome.org/archives/usability/2006-June/msg00015.html)） [2009年の変更](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)） [`summary`導入コミット](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)）

対象: [`details`](../elements/details.md)、[`summary`](../elements/summary.md)

```text
追加情報を要約するGUI開閉ラベル＋fieldset / legendのキャプション構造
  → details / legend
  → details / dt / dd
  → details / summary
```

## 接続しない境界

AppleまたはGNOMEから`details`という名称を借用した記録、`summary`の名称決定、HTML 4の`table summary`属性からの採用は確認できない。後者は名称の一致だけなので接続しない。
