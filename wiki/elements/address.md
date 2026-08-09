# `<address>`

> 状態: 初期HTMLでの出現と当時の意味を検証済み（導入理由・直前祖先は未確認）

## 概要

1991年2月のNeXT WorldWideWeb change historyで、address styleとして実装されたことを確認できる。HTMLへの採用理由と具体的な直前祖先は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、最も近い`article`または`body` ancestorのcontact informationを表す。ancestorが`body`なら文書全体に適用される。 [一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)（2026-08-09確認）

## HTMLへの導入

今回確認できる最初期のHTML実装記録は、NeXT WorldWideWeb version 0.5のchange historyで、1991年2月1日に`ADDRESS` tagのaddress styleを実装したと記す。Berners-Leeの実装であることは確認できるが、要素を選んだ理由は記録されていない。[CERN/W3C, *Features and Bug Fixes*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/NeXT/Implementation/Features.html)

## HTML直前の祖先

未確認。同名または類似用途のSGML/GML要素からHTMLへ採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

確認できる直接史料は初期HTML内の定義までであり、その前段との因果関係は示さない。

### 解釈

なし。

## 系譜

NeXT WorldWideWebのHTML `ADDRESS`（1991年に確認）→ 現行HTML `<address>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1991-02-01 | *Features and Bug Fixes* | CERN/W3Cの公式実装履歴 | WorldWideWeb 0.5でHTML `ADDRESS` tagのaddress styleを実装したと記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/NeXT/Implementation/Features.html) | 2026-08-09 |
| 1992-11-13（更新日） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | `ADDRESS`を住所情報、署名などのためのタグとして記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | `ADDRESS`の用途とDTD宣言を記録する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**C**

確認可能な最初期の出現と当時の意味は固定できるが、導入理由と具体的祖先を確認できないため。

## 否定された仮説

先行SGML/GMLに同名または類似用途の要素があることだけから、HTMLへの直接祖先とする説明。採用因果を示す史料がない。

## 未解決

- `ADDRESS`をHTMLへ加えた判断を記録する設計資料または当事者記録はあるか。
- CERN内の先行文書体系に具体的な直前祖先を確認できるか。

## 調査記録

1991年NeXT WorldWideWeb実装履歴、1992年CERN HTMLタグ一覧、1992年Connolly DTD、1993年HTML Internet-Draft、Waterloo GMLの先行語彙を確認した。同名存在と採用因果を分離した。対象群全体は[初期SGML/GML調査ノート](../research/early-sgml-elements.md)を参照する。
