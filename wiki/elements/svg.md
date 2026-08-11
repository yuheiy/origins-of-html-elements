---
status: 完成
---

# `<svg>`

## 概要

SVG 1.0で定義済みのSVG名前空間のルートを、2008年にHTMLパーサーへ統合し、一度削除した後、意見を受けて2009年に再導入したものである。

## 現在の意味

SVG 2ではSVG文書断片を含むルート要素である。断片は独立したSVG文書にも、HTMLまたはXML文書へ行内で埋め込む内容にもなり、SVG内容内の`svg`は新しいSVG表示領域も確立できる。[SVG 2](../../raw/w3c.github.io/svgwg/svg2-draft/struct.html)（[公開版](https://w3c.github.io/svgwg/svg2-draft/struct.html#elementdef-svg)、2026-08-09確認）

## HTMLへの導入

2008年4月5日のWHATWGコミットは`svg`開始タグからSVG名前空間の外来要素を生成するパーサー基盤を追加した。4月15日にSVG Working Groupの要請を理由として削除され、2009年3月25日に「より最近の意見」に基づく再試行として導入し直された。[初回コミット](../../raw/github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)（[公開元](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)） [削除コミット](../../raw/github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2)（[公開元](https://github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2)） [再導入コミット](../../raw/github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465)（[公開元](https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465)）

## HTML直前の祖先

SVG名前空間の`svg` ルートである。SVG 1.0がSVG文書断片のルートとして定義し、HTMLコミットが同じルートを外来名前空間要素として生成する因果を直接示す。[SVG 1.0](../../raw/www.w3.org/TR/2001/REC-SVG-20010904/__index)（[公開元](https://www.w3.org/TR/2001/REC-SVG-20010904/)）

## さらに上流の由来

### 証拠

SVG 1.0は2次元ベクターおよびベクター／ラスター混合グラフィックを記述するXML言語としてSVGを定義する。

### 解釈

新しいHTML名前空間要素を発明したのではなく、独立したSVG語彙のルートをHTML構文とパーサーへ接続した統合点と解釈できる。

## 系譜

SVG 1.0 `svg` ルート（2001年） → HTMLパーサー統合（2008年） → 削除（2008年） → 意見に基づく再導入（2009年） → 現行HTML文書内の外来要素のルート`svg`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2001-09-04 | [SVG 1.0](../../raw/www.w3.org/TR/2001/REC-SVG-20010904/__index)（[公開元](https://www.w3.org/TR/2001/REC-SVG-20010904/)） | W3C Recommendation | SVG XML言語と文書断片ルート `svg`の定義。 | 2026-08-09 |
| 2008-04-05 | [WHATWG HTML commit `1ff9688a`](../../raw/github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)（[公開元](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)） | 仕様コミット | `svg` ルートの`text/html`パーサーへの初回統合。 | 2026-08-09 |
| 2008-04-15 | [WHATWG HTML commit `7387156d`](../../raw/github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2)（[公開元](https://github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2)） | 仕様コミット | SVG Working Groupの要請を理由とするパーサー対応の削除。 | 2026-08-09 |
| 2009-03-25 | [WHATWG HTML commit `f6a4d7fe`](../../raw/github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465)（[公開元](https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465)） | 仕様コミット | 最近の意見に基づくSVG in `text/html`の再導入。 | 2026-08-09 |

## 確度

**A**

既存SVG `svg` ルートからHTMLパーサー統合への因果と、現行系統につながる再導入を仕様とコミット差分で直接確認できるため。

## 否定された仮説

HTML名前空間の新要素として発明されたという説明。パーサーが生成するのは既存SVG名前空間のルートである。2008年初回追加から途切れず現行へ続いたという説明も、同月の削除を見落としている。

## 未解決

- SVG Working Groupによる削除要請の本文はどれか。
- 2009年コミットがいう“より最近の意見”の出典は何か。
- 再導入後、現行外来要素の内容アルゴリズムまでの主要改訂は何か。
