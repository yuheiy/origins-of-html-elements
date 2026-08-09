---
status: 完成
---

# `<pre>`

## 概要

初期HTMLのcomputer output表示から、Unix manual pagesのhypertext化要求による拡張を経たpreformatted text要素である。

## 現在の意味

WHATWG HTML Living Standardでは、要素ではなくtypographic conventionsによって構造が表現されるpreformatted textのblockを表す。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element)（2026-08-09確認）

## HTMLへの導入

`PRE`はHTML+初出ではない。HTML+自身は、初期HTMLでcomputer outputを表示する要素だったものが、Unix manual pagesをhypertext化する要求によってcharacter emphasisとembedded linksを扱えるよう再設計されたと説明する。RFC 1866がHTML 2.0へ採録した。[HTML+ preformatted text](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html) [RFC 1866 §5.5.2](https://www.rfc-editor.org/rfc/rfc1866.html#section-5.5.2)

## HTML直前の祖先

直接のHTML上の祖先は初期HTML `PRE`であり、HTML+は既存要素を拡張した。HTML+より前の特定markup要素からタグ名を借りた証拠は未確認である。

## さらに上流の由来

### 証拠

HTML+はpreformatted computer outputとplain text files、特にUnix manual pagesを直接の要求として挙げる。[HTML+ preformatted text](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)

### 解釈

さらに上流にはcomputer outputとUnix manual pageの技術文書文化がある。これはHTML+自身が用途と再設計要求を説明するため、単なる外見の類似ではない。

## 系譜

preformatted computer output → 初期HTML `PRE` → Unix manual pagesのhypertext化に伴う拡張 → HTML+ → HTML 2.0以降 `<pre>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §11 | 一次仕様・提案 | 初期HTML `PRE`のcomputer output用途とUnix manual page要求による拡張史を説明する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html) | 2026-08-09 |
| 1995-11 | RFC 1866 §5.5.2 | 一次仕様・提案 | `PRE`をcharacter cell blockとして標準化する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1866.html#section-5.5.2) | 2026-08-09 |

## 確度

**A**

computer outputとUnix manual pagesという導入・拡張理由をHTML+自身が明記し、HTML 2.0への採録も確認できるため。

## 否定された仮説

`PRE`はHTML+で初めて導入されたという説明。HTML+自身が既存HTML要素として前史を記録している。

## 未解決

- `PRE`というタグ名のHTML以前の直接祖先。
- 初期HTMLでの最初の導入時期。
