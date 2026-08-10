---
status: 完成
---

# `<source>`

## 概要

`source`は2007年3月23日、`video`でcodec negotiationを行い複数の代替media resourceから選択する要素としてWHATWGへ追加された。2014年には`picture`内の画像候補にも拡張された。

## 現在の意味

WHATWG HTML Living Standardでは、`picture`では複数の画像source set、`audio`／`video`では複数の代替media resourceを指定する、内容を持たず単独では何も表さない要素である。[HTML Living Standard](../../raw/html-living-standard/embedded-content.html)（[公開版](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)、2026-08-09確認）

## HTMLへの導入

2007年3月16日の`video`本格導入時にはresourceを単一の`src`属性で指定していた。3月23日、WHATWG editor Ian Hicksonはrevision 687でvideo codec negotiationのため`source`を追加し、複数候補を順に調べるresource selectionと`src`、`type`、`media`を導入した。同日に後から追加された`audio`は当初から`source`をcontent modelに含んだ。

## HTML直前の祖先

単一の`src`を持つWHATWG `video`である。追加commitは、codec negotiationのため`src`方式を`source`要素と複数resource selectionへ変更したことを要素単位で示す。HTML外のさらに古い祖先は未確認である。

## さらに上流の由来

### 証拠

仕様commitから、単一`src`方式を、codecや利用環境が異なる複数resourceからUAが選ぶ`source`方式へ変えたことを直接確認できる。

### 解釈

media formatと利用環境の差に対し、複数候補と選択用metadataをmarkupへ持たせる拡張と解釈できる。ただし、特定の先行技術から採用したとは断定できない。

## 系譜

WHATWG `video`の単一`src`方式（2007年3月16日） → codec negotiation用`source`と複数resource selection（2007年3月23日） → 画像候補へ拡張された`source`（2014年） → 現行HTML `source`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2007-03-16 | [WHATWG HTML commit `753f385d`（revision 678）](../../raw/whatwg-html-history/acbb97e2a5b4e3e4-753f385d6eb176f4cc7075ba9f41ed31908.html)（[公開元](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)） | 仕様commit | `video`本格導入時の単一`src`方式。 | 2026-08-09 |
| 2007-03-23 | [WHATWG HTML commit `61af426a`（revision 687）](../../raw/whatwg-html-history/2569357f56116a5d-61af426a3ae6d68ffa00505b6883cbf8704.html)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)） | 仕様commit | codec negotiation用`source`、複数resource selection、`src`、`type`、`media`の追加。 | 2026-08-09 |
| 2007-04-30 | [*Web Applications 1.0*, revision 791](../../raw/whatwg-web-apps-history/29f4a95bcaf32836-r791.html)（[公開元](https://platform.html5.org/history/webapps/r791.html#the-source)） | WHATWG保存仕様 | 複数media resourceを指定する`source`と`src`、`type`、`media`属性。 | 2026-08-09 |
| 2010-10-19 | [*HTML5: The source element*](../../raw/w3c-html5-history/2579a854225b6f5d-video.html)（[公開元](https://www.w3.org/TR/2010/WD-html5-20101019/author/video.html#the-source-element)） | W3C Working Draft | `audio`／`video`の代替media resourceと取得前のtype判定。 | 2026-08-09 |
| 2014-06-17 | [WHATWG HTML commit `a7716b7a`](../../raw/whatwg-html-history/66ad8afeef30633b-a7716b7a2463323c7f25176f4b3768008d1.html)（[公開元](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204)） | 仕様commit | `picture`と画像用`source`の後代統合。 | 2026-08-09 |
| 2026-08-09 | [WHATWG HTML Living Standard, “The source element”](../../raw/html-living-standard/embedded-content.html)（[公開元](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)） | 現行仕様 | `source`の現行定義。 | 2026-08-09 |

## 確度

**A**

具体的な先行要素である単一`src`版`video`から、codec negotiationのため`source`と複数resource selectionへ変更した因果関係を要素単位の仕様commitで直接確認できるため。HTML外のさらに古い祖先は未確認である。

## 否定された仮説

2014年のresponsive images用拡張を2007年のmedia用`source`の起源とする説明、およびSMIL等の同名要素を直接祖先とする説明。前者は時系列が逆で、後者は採用記録を確認できない。

## 未解決

- SMILのmedia source指定や既存plugin fallback構文を参照した記録はあるか。
