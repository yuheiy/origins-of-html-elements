---
status: 完成
---

# `<div>`

## 概要

1995年2月9日のHTML 3.0 DTDで、汎用クラスと固定バナー用のコンテナーとして追加され、複数の区分モデル候補から単一`DIV`を使う案がHTML WGの合意となった。HTML外の特定DTDや文書処理システムからの採用は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、それ自体に特別な意味を持たず子を表す。連続する要素群へ`class`、`lang`、`title`等で共通の意味を付ける場合などに使う最後の手段のフローコンテナーである。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element)、2026-08-09確認）

## HTMLへの導入

HTML 3.0 DTDの変更履歴は、Dave Raggettが1995年2月9日に`DIV`を汎用コンテナークラスと固定バナー用として追加したと記録する。3月の草案“Divisions”は、`DIV`を`CLASS`属性とともに使い、章、セクション、要約、付録等の異なるコンテナーを表すと定義した。[HTML 3.0 DTD](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） [HTML 3.0 Divisions](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)）

1995年3月18日のHTML WG議論は、複数階層の`DIVn`、先頭見出しを必須とする区分、再帰的な`DIV`と見出し必須`SECT`の分離等も提案されていたが、単一`DIV`について合意があると整理した。翌日の返信は、完全な`DIV0`、`DIV1`等は利用者に複雑すぎるとして、当面`DIV CLASS=chapter`等を使う案を支持した。[Joe English, “Re: Enhancements for HTML 2.1”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0681.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0681.html)） [Peter Flynnの返信](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0687.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0687.html)）

HTML 3.2は`DIV`でHTML文書を区分の階層として構造化できると定義した。また、NetscapeがHTML 3.0 `DIV`を対応する前に`CENTER`を導入したと記録しており、HTML 3.0 `DIV`がHTML 3.2とブラウザー実装へ先行したことを確認できる。[HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#div)）

## HTML直前の祖先

HTML直前の設計過程としては、複数階層の`DIVn`、見出し必須の区分、`DIV`／`SECT`分離等の競合案から、利用者向けの単純さを理由に単一の汎用`DIV`を選んだことまで確認できる。これらの案を特定のHTML外SGML語彙、出版上の区分、文書処理システムから採用した因果は未確認である。[Joe English, “Re: Enhancements for HTML 2.1”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0681.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0681.html)） [Peter Flynnの返信](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0687.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0687.html)）

## さらに上流の由来

### 証拠

HTML 3.0草案は、固定された区分要素の集合ではなく、`class`付きの汎用コンテナーで章、セクション、要約、付録等を表す設計を直接示す。HTML 3.2は同じ要素を区分階層用に継承する。[HTML 3.0](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#div)）

### 解釈

`DIV`は、文書区分の階層を一つの要素と`class`で表し、固定バナーにも再利用するHTML内部の汎用化として確認できる。競合案にSGML的な区分構造が見えることと、特定DTDからの採用因果は区別する。

## 系譜

HTML 3.0 `DIV`（1995年） → HTML 3.2 `DIV` → 現行HTML `<div>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-02-09 | [HTML 3.0 DTD](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） | DTD変更履歴 | `DIV`を汎用コンテナークラスと固定バナー用として追加した日付と目的を記録する。 | 2026-08-12 |
| 1995-03-18 | [Joe English, “Re: Enhancements for HTML 2.1”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0681.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0681.html)） | HTML WGメール | `DIVn`、見出し必須区分、`DIV`／`SECT`分離等の競合案と、単一`DIV`への合意を記録する。 | 2026-08-12 |
| 1995-03-19 | [Peter Flynn, “Re: Enhancements for HTML 2.1”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0687.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0687.html)） | HTML WGメール | 階層別`DIVn`は利用者に複雑すぎるとして、単一`DIV`と`class`を支持する。 | 2026-08-12 |
| 1995-03-28 | [HTML 3.0 draft “Divisions”](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)） | W3C保存仕様草案 | `DIV`を`CLASS`付きの章、セクション、要約、付録等のコンテナーとして定義。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#div)） | W3C Recommendation | `DIV`の区分階層とHTML 3.0 `DIV`へのブラウザー対応。 | 2026-08-09 |

## 確度

**B**

HTMLへの導入時に、汎用コンテナーと`class`で文書区分を表す設計目的は確認できるが、具体的な先行物からの採用因果は確認できないため。

## 否定された仮説

`CENTER`を`DIV`の祖先とする説明。HTML 3.2はNetscapeがHTML 3.0 `DIV`を対応する前に`CENTER`を導入したと述べるが、`DIV`を`CENTER`から設計したとは示さない。特定のSGML `DIV`からの採用も、名称と用途の類似だけでは確定できない。

## 未解決

- 1995年2月9日の追加に先立つRaggettの提案、要求文書、競合案の本文は残っているか。
- `DIVn`、`SECT`等の候補を含め、特定のSGML DTDまたは文書処理システムから採用されたか。
- 区分意味から現行の意味を持たない最後の手段コンテナーへの意味変更はいつ、なぜ行われたか。
