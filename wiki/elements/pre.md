---
status: 完成
---

# `<pre>`

## 概要

初期HTMLのコンピューター出力表示から、Unixマニュアルページのハイパーテキスト化要求による拡張を経た整形済みテキスト要素である。

## 現在の意味

WHATWG HTML Living Standardでは、要素ではなく組版上の慣習によって構造が表現される整形済みテキストのブロックを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element)、2026-08-09確認）

## HTMLへの導入

`PRE`はHTML+初出ではない。HTML+自身は、初期HTMLでコンピューター出力を表示する要素だったものが、Unixマニュアルページをハイパーテキスト化する要求によって文字強調と埋め込みリンクを扱えるよう再設計されたと説明する。RFC 1866がHTML 2.0へ採録した。[HTML+ preformatted text](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)） [RFC 1866 §5.5.2](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html#section-5.5.2)）

## HTML直前の祖先

直接のHTML上の祖先は初期HTML `PRE`であり、HTML+は既存要素を拡張した。HTML+より前の特定マークアップ要素からタグ名を借りた証拠は未確認である。

## さらに上流の由来

### 証拠

HTML+は整形済みコンピューター出力とプレーンテキストファイル、特にUnixマニュアルページを直接の要求として挙げる。[HTML+ preformatted text](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)）

### 解釈

さらに遡るとコンピューター出力とUnixマニュアルページの技術文書文化がある。これはHTML+自身が用途と再設計要求を説明するため、単なる外見の類似ではない。

## 系譜

整形済みコンピューター出力 → 初期HTML `PRE` → Unixマニュアルページのハイパーテキスト化に伴う拡張 → HTML+ → HTML 2.0以降`<pre>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §11](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)） | 一次仕様・提案 | 初期HTML `PRE`のコンピューター出力用途とUnixマニュアルページ要求による拡張史を説明する。 | 2026-08-09 |
| 1995-11 | [RFC 1866 §5.5.2](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html#section-5.5.2)） | 一次仕様・提案 | `PRE`を文字セルブロックとして標準化する。 | 2026-08-09 |

## 確度

**A**

コンピューター出力とUnixマニュアルページという導入・拡張理由をHTML+自身が明記し、HTML 2.0への採録も確認できるため。

## 否定された仮説

`PRE`はHTML+で初めて導入されたという説明。HTML+自身が既存HTML要素として前史を記録している。

## 未解決

- `PRE`というタグ名のHTML以前の直接祖先。
- 初期HTMLでの最初の導入時期。
