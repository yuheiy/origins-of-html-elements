---
status: 完成
---

# `<source>`

## 概要

`source`は、Web上の映像形式を単一コーデックへ統一できない状況に対し、UAが再生可能な候補を選べるよう、単一`src`版`video`を複数の代替メディアリソースへ拡張した要素である。2014年には`picture`内の画像候補にも拡張された。

## 現在の意味

WHATWG HTML Living Standardでは、`picture`では複数の画像候補集合、`audio`／`video`では複数の代替メディアリソースを指定する、内容を持たず単独では何も表さない要素である。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/embedded-content.html)（[公開版](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)、2026-08-09確認）

## HTMLへの導入

2007年3月15日の`video`議論は、Web上に普遍的に対応される映像形式がなく、単一形式だけに実装を制限できず、追加形式を許す必要があるというコーデック問題を整理した。翌日の`video`本格導入時にはリソースを単一の`src`属性で指定していたが、3月23日、WHATWGエディターIan Hicksonはリビジョン687でコーデック選択用の`source`を追加し、複数候補を順に調べるリソース選択と`src`、`type`、`media`を導入した。同日に後から追加された`audio`は当初から`source`を内容モデルに含んだ。[“Video proposals”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)） [導入コミット](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)）

## HTML直前の祖先

単一の`src`を持つWHATWG `video`である。追加コミットは、コーデック選択のため`src`方式を`source`要素と複数リソース選択へ変更したことを要素単位で示す。HTML外のさらに古い祖先は未確認である。

## さらに上流の由来

### 証拠

導入直前の議論は、Web上の映像に普遍的な形式がなく、ブラウザーベンダーによる追加形式も排除できないことを問題として明記する。仕様コミットは、単一`src`方式をコーデックや利用環境が異なる複数リソースからUAが選ぶ`source`方式へ変えた。[“Video proposals”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)） [導入コミット](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)）

### 解釈

`source`は特定の外部語彙の移植ではなく、相互運用可能な単一コーデックを決められない外部メディア環境を、複数候補と選択用メタデータで吸収するHTML内部の解決策と解釈できる。

## 系譜

WHATWG `video`の単一`src`方式（2007年3月16日） → コーデック選択用`source`と複数リソース選択（2007年3月23日） → 画像候補へ拡張された`source`（2014年） → 現行HTML `source`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2007-03-15 | [“Video proposals”](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)） | WHATWGメーリングリスト・編集者回答 | Web上に普遍的な映像形式がなく、単一形式だけへ制限せず追加形式を許す必要を整理する。 | 2026-08-12 |
| 2007-03-16 | [WHATWG HTML commit `753f385d`（revision 678）](../../raw/github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)（[公開元](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)） | 仕様コミット | `video`本格導入時の単一`src`方式。 | 2026-08-09 |
| 2007-03-23 | [WHATWG HTML commit `61af426a`（revision 687）](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)） | 仕様コミット | コーデック選択用`source`、複数リソース選択、`src`、`type`、`media`の追加。 | 2026-08-09 |
| 2007-04-30 | [*Web Applications 1.0*, revision 791](../../raw/platform.html5.org/history/webapps/r791.html)（[公開元](https://platform.html5.org/history/webapps/r791.html#the-source)） | WHATWG保存仕様 | 複数メディアリソースを指定する`source`と`src`、`type`、`media`属性。 | 2026-08-09 |
| 2010-10-19 | [*HTML5: The source element*](../../raw/www.w3.org/TR/2010/WD-html5-20101019/author/video.html)（[公開元](https://www.w3.org/TR/2010/WD-html5-20101019/author/video.html#the-source-element)） | W3C Working Draft | `audio`／`video`の代替メディアリソースと取得前の種別判定。 | 2026-08-09 |
| 2014-06-17 | [WHATWG HTML commit `a7716b7a`](../../raw/github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)（[公開元](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)） | 仕様コミット | `picture`と画像用`source`の後代統合。 | 2026-08-09 |
| 2026-08-09 | [WHATWG HTML Living Standard, “The source element”](../../raw/html.spec.whatwg.org/multipage/embedded-content.html)（[公開元](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)） | 現行仕様 | `source`の現行定義。 | 2026-08-09 |

## 確度

**A**

具体的な先行要素である単一`src`版`video`から、コーデック選択のため`source`と複数リソース選択へ変更した因果関係を要素単位の仕様コミットで直接確認できるため。HTML外のさらに古い祖先は未確認である。

## 否定された仮説

2014年のレスポンシブ画像用拡張を2007年のメディア用`source`の起源とする説明、およびSMIL等の同名要素を直接祖先とする説明。前者は時系列が逆で、後者は採用記録を確認できない。

## 未解決

- `source`の複数子要素構文を選ぶ際に、既存プラグインの代替内容構文を参照した記録はあるか。
