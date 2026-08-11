---
status: 完成
---

# `<pre>`

## 概要

Dan Connollyの初期HTML案`TYPEWRITER`を、装置ではなく内容を記述する`PRE`へ改名し、Unixマニュアルページのハイパーテキスト化要求による拡張を経た整形済みテキスト要素である。

## 現在の意味

WHATWG HTML Living Standardでは、要素ではなく組版上の慣習によって構造が表現される整形済みテキストのブロックを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element)、2026-08-09確認）

## HTMLへの導入

Connollyの初期HTML案は、タイプライター用に整形済みの内容を、タグと文字実体を解釈したうえで固定幅・改行保持で表示する`TYPEWRITER`を定義した。Connollyは1992年12月2日版のDTDと仕様で`TYPEWRITER`を`PRE`へ変更し、12月4日の配布告知で、装置を規定するのではなく内容を記述するという命名方針を理由として報告した。[Connolly recommended HTML](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)） [The spec evolves...](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)）

HTML+は、初期HTMLでコンピューター出力を表示する要素だった`PRE`を、Unixマニュアルページをハイパーテキスト化する要求によって文字強調と埋め込みリンクを扱えるよう再設計した。RFC 1866がHTML 2.0へ採録した。[HTML+ preformatted text](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)） [RFC 1866 §5.5.2](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html#section-5.5.2)）

## HTML直前の祖先

直接のHTML上の祖先はConnolly案の`TYPEWRITER`である。`PRE`はその内容モデルと表示意図を継承し、装置名を避けるため改名された。`TYPEWRITER`より前の特定マークアップ要素から構文または名称を採用した証拠は未確認である。[Connolly recommended HTML](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)） [The spec evolves...](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)）

## さらに上流の由来

### 証拠

HTML+は整形済みコンピューター出力とプレーンテキストファイル、特にUnixマニュアルページを直接の要求として挙げる。[HTML+ preformatted text](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)）

### 解釈

さらに遡るとコンピューター出力とUnixマニュアルページの技術文書文化がある。これはHTML+自身が用途と再設計要求を説明するため、単なる外見の類似ではない。

## 系譜

初期HTML `TYPEWRITER` → 装置ではなく内容を記述する`PRE`への改名 → Unixマニュアルページのハイパーテキスト化に伴う拡張 → HTML+ → HTML 2.0以降`<pre>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-12-04以前 | [Connolly recommended HTML](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)） | 一次設計文書 | `TYPEWRITER`を、タグと文字実体を解釈したうえで、タイプライター用に整形済みの内容を固定幅・改行保持で表示する要素として定義する。 | 2026-08-12 |
| 1992-12-04 | [The spec evolves...](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)） | 一次メール・配布告知 | 12月2日版DTDと仕様の配布を告知し、`TYPEWRITER`を`PRE`へ変更したことと、装置を規定せず内容を記述する命名方針を報告する。 | 2026-08-12 |
| 1993-11-08 | [HTML+ §11](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)） | 一次仕様・提案 | 初期HTML `PRE`のコンピューター出力用途とUnixマニュアルページ要求による拡張史を説明する。 | 2026-08-09 |
| 1995-11 | [RFC 1866 §5.5.2](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html#section-5.5.2)） | 一次仕様・提案 | `PRE`を文字セルブロックとして標準化する。 | 2026-08-09 |

## 確度

**A**

`TYPEWRITER`から`PRE`への改名と理由を導入者の同時代文書で確認し、HTML+による拡張とHTML 2.0への採録も要素単位で接続できるため。

## 否定された仮説

`PRE`はHTML+で初めて導入されたという説明。1992年12月の配布告知が`TYPEWRITER`から`PRE`への改名を記録し、HTML+自身も既存HTML要素として前史を説明する。

## 未解決

- `TYPEWRITER`の構文と用途を採用したHTML以前の具体的な文書体系または実装はあるか。
