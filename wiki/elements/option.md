---
status: 完成
---

# `<option>`

## 概要

1993年1月の`CHOICE`、6月の`ITEM`を経てHTML+で`OPTION`となり、HTML 2.0へ導出された選択メニューの候補要素である。外部UIの「選択肢」をHTML内の独立した項目へしたが、改名判断は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、`select`内の選択肢、または`datalist`内の候補一覧の一項目を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element)、2026-08-09確認）

## HTMLへの導入

1993年1月の`SELECT`案は各候補を`CHOICE`、6月のHTML+ DTDは`ITEM`と呼んだ。11月のHTML+は各候補を`OPTION`で表し、RFC 1866はHTML+由来のフォーム資料として標準化した。[Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） [HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)）

## HTML直前の祖先

HTML直前の祖先はHTML+ `OPTION`である。HTML+は各代替を`OPTION`で表すと明記する。[HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）

## さらに上流の由来

### 証拠

Raggettは関連プロジェクトの検討から一つ選択・複数選択のメニューを挙げ、各候補を表示文字列と返却値を分けられる子要素として設計した。6月の計算機構成例は以前のエキスパートシステムに基づくが、その画面上の候補とHTML要素の直接対応は示さない。[Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)）

### 解釈

外部UIの選択候補という概念を`SELECT`の子要素へ翻案したことは確認できるが、`CHOICE`、`ITEM`、`OPTION`という三つの名称はHTML+内部の編集過程であり、外部マークアップ語彙からの採用は確認できない。

## 系譜

1993年1月 `CHOICE` → 6月 `ITEM` → HTML+ `OPTION` → HTML 2.0 `OPTION` → 現行HTML `<option>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-01-19 | [Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） | www-talkメール | `SELECT`内の候補を表示文字列と返却値を持つ`CHOICE`として提案する。 | 2026-08-12 |
| 1993-06-18 | [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） | www-talkメール | 同じ役割の子要素を`ITEM`としたHTML+ DTDと業務用の選択例を示す。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §10](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） | Internet-Draft | `OPTION`のHTML+のフォーム上の設計を確認できる。 | 2026-08-09 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | Standards Track RFC | HTML 2.0フォームを定義し、フォーム資料のHTML+由来を明記する。 | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+のフォームからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

`OPTION`を外部の同名マークアップ要素から採用したという説明。確認できる直前形はHTML+作業中の`CHOICE`と`ITEM`であり、外部語彙との接続はない。

NCSA Mosaicが候補要素を最初に考案したという説明。`CHOICE`と`ITEM`はMosaicのフォーム実装より前に確認でき、Mosaicは後続実装者である。[Andreessen, “XMosaic 1.2 and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)） [Andreessen, “Fill-out form support”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)）

## 未解決

- 1993年6月の`ITEM`から11月の`OPTION`へ改名した判断と、`CHOICE`を一度`ITEM`へ変えた理由。
- Raggettが参照した関連プロジェクトで、表示文字列と返却値を分ける選択候補がどのように表現されていたか。
