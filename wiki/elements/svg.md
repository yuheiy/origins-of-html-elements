# `<svg>`

> 状態: SVG rootからHTML `text/html` parserへの統合・削除・再導入を検証済み

## 概要

SVG 1.0で定義済みのSVG名前空間のrootを、2008年にHTML parserへ統合し、一度削除した後、feedbackを受けて2009年に再導入したものである。

## 現在の意味

SVG 2ではSVG document fragmentを含むroot要素である。fragmentは独立したSVG documentにも、HTMLまたはXML文書へinlineで埋め込む内容にもなり、SVG content内の`svg`は新しいSVG viewportも確立できる。[一次定義](https://w3c.github.io/svgwg/svg2-draft/struct.html#elementdef-svg)（2026-08-09確認）

## HTMLへの導入

2008年4月5日のWHATWG commitは`svg` start tagからSVG名前空間のforeign elementを生成するparser infrastructureを追加した。4月15日にSVG Working Groupの要請を理由として削除され、2009年3月25日に“more recent feedback”に基づくsecond tryとして再導入された。[初回commit](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7) [削除commit](https://github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2) [再導入commit](https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465)

## HTML直前の祖先

SVG名前空間の`svg` rootである。SVG 1.0がSVG document fragmentのrootとして定義し、HTML commitが同じrootをforeign namespace elementとして生成する因果を直接示す。[SVG 1.0](https://www.w3.org/TR/2001/REC-SVG-20010904/)

## さらに上流の由来

### 証拠

SVG 1.0は2次元vectorおよびvector／raster混合graphicsを記述するXML languageとしてSVGを定義する。

### 解釈

新しいHTML名前空間要素を発明したのではなく、独立したSVG語彙のrootをHTML syntaxとparserへ接続した統合点と解釈できる。

## 系譜

SVG 1.0 `svg` root（2001年） → HTML parser統合（2008年） → 削除（2008年） → feedbackに基づく再導入（2009年） → 現行HTML文書内のforeign root `svg`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2001-09-04 | SVG 1.0 | W3C Recommendation | SVG XML languageとdocument fragment root `svg`の定義。 | [一次資料](https://www.w3.org/TR/2001/REC-SVG-20010904/) | 2026-08-09 |
| 2008-04-05 | WHATWG HTML commit `1ff9688a` | 仕様commit | `svg` rootの`text/html` parserへの初回統合。 | [一次資料](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7) | 2026-08-09 |
| 2008-04-15 | WHATWG HTML commit `7387156d` | 仕様commit | SVG Working Groupの要請を理由とするparser supportの削除。 | [一次資料](https://github.com/whatwg/html/commit/7387156d67e9087106a62157bb4b6d3e47739fb2) | 2026-08-09 |
| 2009-03-25 | WHATWG HTML commit `f6a4d7fe` | 仕様commit | recent feedbackに基づくSVG in `text/html`の再導入。 | [一次資料](https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465) | 2026-08-09 |

## 確度

**A**

既存SVG `svg` rootからHTML parser統合への因果と、現行系統につながる再導入を仕様とcommit差分で直接確認できるため。

## 否定された仮説

HTML名前空間の新要素として発明されたという説明。parserが生成するのは既存SVG名前空間のrootである。2008年初回追加から途切れず現行へ続いたという説明も、同月の削除を見落としている。

## 未解決

- SVG Working Groupによる削除要請の本文はどれか。
- 2009年commitがいう“more recent feedback”の出典は何か。
- 再導入後、現行foreign content algorithmまでの主要改訂は何か。

## 調査記録

SVG 1.0 Recommendation、2008年初回統合・削除commit、2009年再導入commitを確認した。削除要請とfeedback本文は確定できなかった。横断比較は[Modern HTML要素とforeign rootの調査ノート](../research/modern-html-foreign-roots.md)を参照する。
