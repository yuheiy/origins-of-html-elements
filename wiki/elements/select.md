---
status: 完成
---

# `<select>`

## 概要

Raggettが関連プロジェクトに見た一つ選択・複数選択のメニューを1993年1月にHTMLへ翻案し、HTML+からHTML 2.0へ導出した選択リストである。特定のGUIツールキットからの移植ではない。

## 現在の意味

WHATWG HTML Living Standardでは、選択肢の集合から選ぶためのコントロールを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element)、2026-08-09確認）

## HTMLへの導入

1993年1月、Raggettは関連プロジェクトの検討から一つ選択・複数選択のメニューが必要だとし、`SELECT`に`CHOICE`を入れる案を提示した。6月案では候補を`ITEM`とし、HTML+は11月までに`OPTION`へ改名して候補集合を簡潔に示す選択リストとして定義した。RFC 1866はHTML+由来のフォーム資料として`SELECT`を標準化した。[Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） [HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)）

## HTML直前の祖先

HTML直前の祖先はHTML+ `SELECT`である。HTML+はラジオボタン／チェックボックスをすべて表示する方式に対する簡潔UIとして説明する。[HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）

## さらに上流の由来

### 証拠

Raggettは一つ選択・複数選択のメニューを「関連プロジェクト」の検討から挙げた。6月の計算機構成例は、コンパクト表示をドロップダウンボタン、通常表示を常時見えるリストとして説明し、この例自体を以前のエキスパートシステムに基づけた。HTML+は一般的な描画をプルダウンコンボリストと説明する。[Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） [HTML+ forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）

### 解釈

`SELECT`は、業務アプリケーションにある一つ選択・複数選択のメニューを、表示方式をブラウザーへ委ねるHTML構造として翻案したと解釈できる。プルダウンとリストの双方を許すため、特定ツールキットの単一ウィジェットを祖先とはしない。

## 系譜

1993年1月 `SELECT`／`CHOICE`案 → 6月 `SELECT`／`ITEM`案 → HTML+ `SELECT`／`OPTION` → HTML 2.0 `SELECT` → 現行HTML `<select>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-01-19 | [Raggett, “QueryForms and Input tag”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0085.html)） | www-talkメール | 関連プロジェクトの検討から一つ選択・複数選択のメニューを挙げ、`SELECT`／`CHOICE`構造を提案する。 | 2026-08-12 |
| 1993-06-18 | [Raggett, “Re: HTML+ Forms”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0557.html)） | www-talkメール | エキスパートシステムに基づく`SELECT`／`ITEM`例と、ドロップダウンまたは常時表示リストという描画候補を示す。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §10](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） | Internet-Draft | `SELECT`のHTML+のフォーム上の設計を確認できる。 | 2026-08-09 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | Standards Track RFC | HTML 2.0フォームを定義し、フォーム資料のHTML+由来を明記する。 | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+のフォームからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

特定GUIツールキットのコンボボックスから直接移植されたという説明。史料は関連プロジェクト、先行エキスパートシステム、複数の描画候補までを示すが、特定製品のウィジェットとの一対一対応は示さない。

NCSA Mosaicが`SELECT`を最初に考案したという説明。`SELECT`案は1993年1月、HTML+ DTDは6月に確認できる一方、Mosaicは7月時点でHTML+未実装、フォーム実装の報告は9月である。[Andreessen, “XMosaic 1.2 and HTML+”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0143.html)） [Andreessen, “Fill-out form support”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q3/0816.html)）

## 未解決

- Raggettが1993年1月に参照した「関連プロジェクト」と、Protek Pilotの選択メニューの具体的な仕様・画面。
