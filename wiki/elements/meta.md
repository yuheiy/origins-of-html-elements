---
status: 完成
---

# `<meta>`

## 概要

Roy Fieldingが1994年6月、専用HTML要素で定義されない名前/値型の文書メタデータと、必要に応じたHTTP応答ヘッダーへの写像を行う`META`を提案した。同月のHTML 2.0仕様パッチとRFC 1866まで同じ属性モデルを追跡できる。

## 現在の意味

WHATWG HTML Living Standardでは、`title`、`base`、`link`、`style`、`script`では表せない各種メタデータを表す。`name`による文書レベルメタデータ、`http-equiv`によるプラグマ指示子、`charset`による文字エンコーディング宣言を扱う。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element)、2026-08-09確認）

## HTMLへの導入

1993年7月のHTML草案と同年11月のHTML+ DTDには`META`がない。Fieldingは1994年6月1日、他のHTML+要素で定義されない文書メタ情報をサーバーやクライアントが抽出できるよう、空な`META`と`NAME`／`VALUE`、HTTPヘッダー生成を指示する`HEADER`属性を具体例・DTDとともに提案した。6月12日には`HTTP-EQUIV`／`NAME`／`CONTENT`へ整理したHTML 2.0仕様パッチを提示し、RFC 1866が同じモデルを採用した。[Fielding, “Re: meta information”](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)） [Fielding, “Re: HTML 2.0 spec and the META element”](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)） [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.5)）

## HTML直前の祖先

直前の具体的祖先は、Fieldingが1994年6月1日に示した`META`提案と、同月12日のHTML 2.0仕様パッチである。

## さらに上流の由来

### 証拠

Fieldingの提案は、専用要素を増やさず任意の名前/値メタデータを扱う必要と、`Expires`などをHTML文書ヘッドからHTTP応答ヘッダーへ写像する必要を明記する。HTML 2.0パッチは専用の`TITLE`やURI関係用の`LINK`を優先する制約も加える。[Fielding, “Re: meta information”](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)） [Fielding, “Re: HTML 2.0 spec and the META element”](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)）

### 解釈

`META`は、既存HTML語彙を個別拡張せず文書メタデータを追加できる拡張機構と、HTTPヘッダー欄との明示的な対応を一つの空要素へまとめたものと説明できる。

## 系譜

Fieldingの`META`提案（1994-06-01）→ HTML 2.0仕様パッチ（1994-06-12）→ RFC 1866 `META`（1995）→ 現行HTML `<meta>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-07-23（登録日） | [*Hypertext Markup Language (HTML)* version 1.2](../../raw/www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） | IETF Internet-Draft | DTDに`META`がなく、Fielding提案前の比較点となる。 | 2026-08-09 |
| 1993-11-08 | [HTML+ DTD](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)） | 提案DTD | DTDに`META`がなく、1993年HTML+語彙には未収録だったことを確認できる。 | 2026-08-09 |
| 1994-06-01 | [“Re: meta information”](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)） | www-htmlへの提案メール | Fieldingが一般メタデータと選択的HTTPヘッダー生成のため`META`、属性、具体例を提案する。 | 2026-08-09 |
| 1994-06-12 | [“Re: HTML 2.0 spec and the META element”](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)） | HTML 2.0仕様パッチメール | `HTTP-EQUIV`／`NAME`／`CONTENT`を持つ`META`をHTML 2.0へ追加する具体的パッチを提示する。 | 2026-08-09 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.5)） | IETF Standards Track RFC | 専用要素では表せない文書メタデータとHTTPヘッダー生成をFielding案と同じ属性モデルで標準化する。 | 2026-08-09 |

## 確度

**A**

要素単位の具体的な提案、HTML 2.0への仕様パッチ、同じ属性モデルのRFC収録を一次資料で追跡できるため。

## 否定された仮説

1993年HTML草案またはHTML+ DTDですでに`META`が標準語彙だったとする説明。両DTDに要素はなく、1994年のHTML+レビューにある運用案だけでは初出を確定しない。

## 未解決

- Fieldingが1994年6月1日に転載したwww-talk原投稿のアーカイブURLは回収できるか。
- 1994年のHTML+レビューにある`NAME`／`VALUE`案とFielding提案の具体的な前後関係は何か。
