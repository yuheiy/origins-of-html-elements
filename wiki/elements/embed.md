---
status: 完成
---

# `<embed>`

## 概要

NetscapeがNavigator 2.0のplug-in mechanismのために提案・実装した空要素である。1993年の同名link relationshipや後続のcontainer案とは区別する。

## 現在の意味

WHATWG HTML Living Standardでは、外部applicationまたは対話型コンテンツの統合点を提供する。`src`が埋め込むresourceのURLを、`type`がそのMIMEタイプを与える。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/iframe-embed-object.html)（[公開版](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element)、2026-08-09確認）

## HTMLへの導入

NetscapeのAlex Edelsteinは1995年9月19日、John Giannandrea名義の`EMBED`拡張案をW3CとIETF HTML WGへ投稿した。任意objectをHTMLへ直接挿入してapplication-specific plug-inに処理させ、`A REL`案よりcontent developerが理解・実装しやすくすることが理由だった。[Netscape提案](https://lists.w3.org/Archives/Public/www-html/1995Sep/0048.html)

## HTML直前の祖先

HTML直前の祖先はNetscape Navigator 2.0のplug-in mechanismと、そのためのempty `EMBED`実装である。1996年のIETF draftもNetscapeが当初`EMBED`を空要素として実装したと記録する。[Compound Documents draft](https://www.ietf.org/archive/id/draft-ietf-html-cda-00.txt)

## さらに上流の由来

### 証拠

1993年HTML Internet-Draftにはlink relationshipとしての`EMBED`があるが、Netscape提案はこれをalternativeとして比較するだけで、要素をそこから派生させたとは述べない。[HTML Internet-Draft](https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)

### 解釈

現行の空要素に続く系統はNetscape初期実装である。Dave Raggettの`FIG`とSunの`APPLET`に影響された1996年のcontainer型`EMBED`は後続の再設計案であり、初期要素の祖先ではない。

## 系譜

Netscape Navigator 2.0 plug-in mechanism＋empty `EMBED`実装（1995年） → 現行HTML `<embed>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-06 | [HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)） | IETF Internet-Draft | 要素ではなくlink relationshipとしての`EMBED`。 | 2026-08-09 |
| 1995-09-19 | [Netscape, “A Proposed Extension to HTML: Embed”](../../raw/lists.w3.org/Archives/Public/www-html/1995Sep/0048.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1995Sep/0048.html)） | vendor提案／標準化投稿 | 任意object、plug-in mechanism、`A REL`案よりauthorに容易という理由、Navigator実装。 | 2026-08-09 |
| 1996（保存file Last-Modified 1996-03-02） | [*Compound Documents in HTML*](../../raw/www.ietf.org/archive/id/draft-ietf-html-cda-00.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-html-cda-00.txt)） | IETF Internet-Draft | Netscape初期`EMBED`が空要素だったことと後続container案との差。 | 2026-08-09 |

## 確度

**A**

Netscape自身の要素提案が、導入主体、要求、Navigator plug-in実装との接続を要素単位で明示するため。

## 否定された仮説

1993年の`REL=EMBED`を`EMBED`要素の直接祖先とする説明。Netscape提案は競合案として比較するだけで、派生を述べない。1996年のcontainer型案を初期empty要素の祖先とする説明も時系列が逆である。

## 未解決

- Netscape提案からWHATWG／HTML5で現行要素として仕様化されるまでの具体的な採録記録はあるか。
- Navigator 2.0以前にplug-in embedding modelへ影響した具体的systemはあるか。
