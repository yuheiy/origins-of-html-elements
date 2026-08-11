---
status: 完成
---

# `<form>`

## 概要

HTML+ formsからHTML 2.0へ導出されたform containerで、特定GUI toolkitとの直接関係は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、フォーム関連要素の集合を通じて操作できるhyperlinkを表し、その一部はサーバーへ送信できる編集可能な値を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/forms.html)（[公開版](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+は`FORM`を入力field群を含むformの範囲として定義した。RFC 1866はHTML 2.0 formsを標準化し、forms materialをHTML+ specificationから導出したと明記する。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)

## HTML直前の祖先

HTML直前の祖先はHTML+ `FORM`である。同名要素の一致だけでなく、RFC 1866自身がHTML+からforms materialを導出した因果関係を記録している。[RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html)

## さらに上流の由来

### 証拠

HTML+はform操作について既存のplatform conventionsを参照し、1994年reviewはNCSA X Mosaicの先駆的実装に言及するが、特定GUI toolkitを`FORM`の祖先とはしていない。[HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html) [HTML+ review](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)

### 解釈

Web form UIは既存の対話慣習を利用したと解釈できるが、紙フォームや特定GUI toolkitからの直接移植とはしない。

## 系譜

HTML+ `FORM` → HTML 2.0 `FORM` → 現行HTML `<form>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §10](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)） | Internet-Draft | `FORM`のHTML+ forms上の設計を確認できる。 | 2026-08-09 |
| 1995-11 | [RFC 1866](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866.html)） | Standards Track RFC | HTML 2.0 formsを定義し、forms materialのHTML+由来を明記する。 | 2026-08-09 |

## 確度

**A**

RFC 1866がHTML+ formsからの導出を明記し、要素の役割も確認できるため。

## 否定された仮説

紙フォームまたは特定GUI toolkitからHTMLへ直接移植されたという説明。一次資料が示すのは操作慣習とMosaicの実装上の先駆性までである。

## 未解決

- HTML+ formsとNCSA X Mosaic formsの提案・実装の正確な時系列。
- 特定GUI systemが`FORM`の設計に与えた直接の影響。
