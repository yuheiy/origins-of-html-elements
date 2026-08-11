---
status: 完成
---

# `<div>`

## 概要

HTML 3.0草案で、`class`とともに章、セクション、要約、付録等を表す汎用コンテナーとして確認でき、HTML 3.2へ継承された。HTML外の特定DTDや文書処理システムから採用した因果は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、それ自体に特別な意味を持たず子を表す。連続する要素群へ`class`、`lang`、`title`等で共通の意味を付ける場合などに使う最後の手段のフローコンテナーである。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element)、2026-08-09確認）

## HTMLへの導入

1995年3月のHTML 3.0草案“Divisions”は、`DIV`を`CLASS`属性とともに使い、章、セクション、要約、付録等の異なるコンテナーを表すと定義した。確認した範囲でこれが最初期の仕様上の出現で、草案著者はDave Raggettである。[HTML 3.0 Divisions](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)）

HTML 3.2は`DIV`でHTML文書を区分の階層として構造化できると定義した。また、NetscapeがHTML 3.0 `DIV`を対応する前に`CENTER`を導入したと記録しており、HTML 3.0 `DIV`がHTML 3.2とブラウザー実装へ先行したことを確認できる。[HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#div)）

## HTML直前の祖先

未確認。特定のSGML語彙、出版上の区分、または文書処理システムからHTML 3.0 `DIV`を採用した因果史料は確認できない。

## さらに上流の由来

### 証拠

HTML 3.0草案は`class`付きの汎用コンテナーで文書区分の種類を表す設計を直接示す。HTML 3.2は同じ要素を区分階層用に継承する。[HTML 3.0](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#div)）

### 解釈

確認できるのはHTML内部の連続性と導入時の設計目的までである。名称と文書分割用途が似る外部要素へは接続しない。

## 系譜

HTML 3.0 `DIV`（1995年） → HTML 3.2 `DIV` → 現行HTML `<div>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-03 | [HTML 3.0 draft “Divisions”](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)） | W3C保存仕様草案 | `DIV`を`CLASS`付きの章、セクション、要約、付録等のコンテナーとして定義。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#div)） | W3C Recommendation | `DIV`の区分階層とHTML 3.0 `DIV`へのブラウザー対応。 | 2026-08-09 |

## 確度

**B**

HTMLへの導入時に、汎用コンテナーと`class`で文書区分を表す設計目的は確認できるが、具体的な先行物からの採用因果は確認できないため。

## 否定された仮説

`CENTER`を`DIV`の祖先とする説明。HTML 3.2はNetscapeがHTML 3.0 `DIV`を対応する前に`CENTER`を導入したと述べるが、`DIV`を`CENTER`から設計したとは示さない。特定のSGML `DIV`からの採用も、名称と用途の類似だけでは確定できない。

## 未解決

- Dave RaggettがHTML 3.0 `DIV`を提案した正確な日付、議論、要求文書はあるか。
- 特定のSGML DTDまたは文書処理システムから採用されたか。
- 区分意味から現行の意味を持たない最後の手段コンテナーへの意味変更はいつ、なぜ行われたか。
