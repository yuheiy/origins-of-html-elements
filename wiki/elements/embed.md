---
status: 完成
---

# `<embed>`

## 概要

NetscapeがNavigator 2.0のプラグイン機構のために提案・実装した空要素である。1993年の同名リンク関係や後続のコンテナー案とは区別する。

## 現在の意味

WHATWG HTML Living Standardでは、外部アプリケーションまたは対話型コンテンツの統合点を提供する。`src`が埋め込むリソースのURLを、`type`がそのMIMEタイプを与える。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/iframe-embed-object.html)（[公開版](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element)、2026-08-09確認）

## HTMLへの導入

NetscapeのAlex Edelsteinは1995年9月19日、John Giannandrea名義の`EMBED`拡張案をW3CとIETF HTML WGへ投稿した。任意オブジェクトをHTMLへ直接挿入してアプリケーション固有のプラグインに処理させ、`A REL`案よりコンテンツ開発者が理解・実装しやすくすることが理由だった。[Netscape提案](../../raw/lists.w3.org/Archives/Public/www-html/1995Sep/0048.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1995Sep/0048.html)）

## HTML直前の祖先

HTML直前の祖先はNetscape Navigator 2.0のプラグイン機構と、そのための空 `EMBED`実装である。1996年のIETF草案もNetscapeが当初`EMBED`を空要素として実装したと記録する。[Compound Documents draft](../../raw/www.ietf.org/archive/id/draft-ietf-html-cda-00.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-html-cda-00.txt)）

## さらに上流の由来

### 証拠

1993年HTML Internet-Draftにはリンク関係としての`EMBED`があるが、Netscape提案はこれを代替として比較するだけで、要素をそこから派生させたとは述べない。[HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)）

### 解釈

現行の空要素に続く系統はNetscape初期実装である。Dave Raggettの`FIG`とSunの`APPLET`に影響された1996年のコンテナー型`EMBED`は後続の再設計案であり、初期要素の祖先ではない。

## 系譜

Netscape Navigator 2.0プラグイン機構＋空 `EMBED`実装（1995年） → 現行HTML `<embed>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-06 | [HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)） | IETF Internet-Draft | 要素ではなくリンク関係としての`EMBED`。 | 2026-08-09 |
| 1995-09-19 | [Netscape, “A Proposed Extension to HTML: Embed”](../../raw/lists.w3.org/Archives/Public/www-html/1995Sep/0048.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1995Sep/0048.html)） | ベンダー提案／標準化投稿 | 任意オブジェクト、プラグイン機構、`A REL`案より著者に容易という理由、Navigator実装。 | 2026-08-09 |
| 1996（保存ファイルLast-Modified 1996-03-02） | [*Compound Documents in HTML*](../../raw/www.ietf.org/archive/id/draft-ietf-html-cda-00.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-html-cda-00.txt)） | IETF Internet-Draft | Netscape初期`EMBED`が空要素だったことと後続コンテナー案との差。 | 2026-08-09 |

## 確度

**A**

Netscape自身の要素提案が、導入主体、要求、Navigatorのプラグイン実装との接続を要素単位で明示するため。

## 否定された仮説

1993年の`REL=EMBED`を`EMBED`要素の直接祖先とする説明。Netscape提案は競合案として比較するだけで、派生を述べない。1996年のコンテナー型案を初期空要素の祖先とする説明も時系列が逆である。

## 未解決

- Netscape提案からWHATWG／HTML5で現行要素として仕様化されるまでの具体的な採録記録はあるか。
- Navigator 2.0以前にプラグイン埋め込みモデルへ影響した具体的システムはあるか。
