---
status: 完成
---

# `<meta>`

## 概要

Roy Fieldingが1994年6月、専用HTML要素で定義されないname/value型のdocument metadataと、必要に応じたHTTP response headerへの写像を行う`META`を提案した。同月のHTML 2.0仕様patchとRFC 1866まで同じ属性modelを追跡できる。

## 現在の意味

WHATWG HTML Living Standardでは、`title`、`base`、`link`、`style`、`script`では表せない各種metadataを表す。`name`によるdocument-level metadata、`http-equiv`によるpragma directive、`charset`によるcharacter encoding declarationを扱う。 [HTML Living Standard](../../raw/html-living-standard/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element)、2026-08-09確認）

## HTMLへの導入

1993年7月のHTML draftと同年11月のHTML+ DTDには`META`がない。Fieldingは1994年6月1日、他のHTML+要素で定義されないdocument metainformationをserverやclientが抽出できるよう、emptyな`META`と`NAME`／`VALUE`、HTTP header生成を指示する`HEADER`属性を具体例・DTDとともに提案した。6月12日には`HTTP-EQUIV`／`NAME`／`CONTENT`へ整理したHTML 2.0仕様patchを提示し、RFC 1866が同じmodelを採用した。[Fielding, “Re: meta information”](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html) [Fielding, “Re: HTML 2.0 spec and the META element”](https://lists.w3.org/Archives/Public/www-html/1994Jun/0041.html) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.5)

## HTML直前の祖先

直前の具体的祖先は、Fieldingが1994年6月1日に示した`META`提案と、同月12日のHTML 2.0仕様patchである。

## さらに上流の由来

### 証拠

Fieldingの提案は、専用要素を増やさず任意のname/value metadataを扱う必要と、`Expires`などをHTML document headからHTTP response headerへ写像する必要を明記する。HTML 2.0 patchは専用の`TITLE`やURI relation用の`LINK`を優先する制約も加える。[Fielding, “Re: meta information”](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html) [Fielding, “Re: HTML 2.0 spec and the META element”](https://lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)

### 解釈

`META`は、既存HTML語彙を個別拡張せずdocument metadataを追加できるescape mechanismと、HTTP header fieldとの明示的な対応を一つの空要素へまとめたものと説明できる。

## 系譜

Fieldingの`META`提案（1994-06-01）→ HTML 2.0仕様patch（1994-06-12）→ RFC 1866 `META`（1995）→ 現行HTML `<meta>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-07-23（登録日） | [*Hypertext Markup Language (HTML)* version 1.2](../../raw/items/www.w3.org/afa66c4ab9d857d4-draft-ietf-iiir-html-01.txt)（[公開元](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)） | IETF Internet-Draft | DTDに`META`がなく、Fielding提案前の比較点となる。 | 2026-08-09 |
| 1993-11-08 | [HTML+ DTD](../../raw/html-plus/htmlplus_58.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)） | 提案DTD | DTDに`META`がなく、1993年HTML+語彙には未収録だったことを確認できる。 | 2026-08-09 |
| 1994-06-01 | [“Re: meta information”](../../raw/items/lists.w3.org/809a2940eafa2317-0002.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)） | www-htmlへの提案mail | Fieldingが一般metadataと選択的HTTP header生成のため`META`、属性、具体例を提案する。 | 2026-08-09 |
| 1994-06-12 | [“Re: HTML 2.0 spec and the META element”](../../raw/items/lists.w3.org/48ac3de6454a040d-0041.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)） | HTML 2.0仕様patch mail | `HTTP-EQUIV`／`NAME`／`CONTENT`を持つ`META`をHTML 2.0へ追加する具体的patchを提示する。 | 2026-08-09 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/html-2.0/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.5)） | IETF Standards Track RFC | specialized document metadataとHTTP header生成をFielding案と同じ属性modelで標準化する。 | 2026-08-09 |

## 確度

**A**

要素単位の具体的proposal、HTML 2.0への仕様patch、同じ属性modelのRFC収録を一次資料で追跡できるため。

## 否定された仮説

1993年HTML draftまたはHTML+ DTDですでに`META`が標準語彙だったとする説明。両DTDに要素はなく、1994年HTML+ reviewの運用案だけでは初出を確定しない。

## 未解決

- Fieldingが1994年6月1日に転載したwww-talk原投稿のarchive URLは回収できるか。
- 1994年HTML+ reviewにある`NAME`／`VALUE`案とFielding提案の具体的な前後関係は何か。
