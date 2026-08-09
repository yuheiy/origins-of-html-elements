# `<nav>`

> 状態: 完成

## 概要

2004年11月のWHATWG提案集合では`navigation`、2005年草案では`nav`として確認できる。既存`nav` classとの対応は後発usage調査が示すが、採用因果と改名理由は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、他のページまたは同じページ内の箇所へリンクするページのsectionを表し、主に主要なナビゲーションlink群へ使用する。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)（2026-08-09確認）

## HTMLへの導入

2004年11月10日のWHATWG議論はsemantic element集合に`navigation`を列挙し、2005年9月1日草案は現行名`nav`でnavigation linksを含むsectionとして定義する。両版の間の改名日と理由は確認できない。[2004年議論](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-nav)

## HTML直前の祖先

未確認。2005年12月のGoogle調査は既存`nav` classとHTML5 `nav`の対応を示すが、草案より後の公表であり採用因果は示さない。

## さらに上流の由来

### 証拠

2004年の`navigation`提案と2005年の`nav`定義から、汎用`div`では区別できないnavigation sectionを専用要素にする設計を確認できる。

### 解釈

`navigation`というroleを短い`nav`要素として形式化したと解釈できるが、改名過程と既存classからの採用は確定しない。

## 系譜

WHATWG `navigation`案（2004年）　[改名経路未確認]　Web Applications 1.0 `nav`（2005年） → 現行HTML `nav`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-11-10 | Semantic elements and spec complexity | WHATWG mailing list | semantic element集合の`navigation`と汎用`div`との差。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) | 2026-08-09 |
| 2005-09-01 | Web Applications 1.0 | WHATWG保存Early Working Draft | navigation linksのsectionを表す`nav`。 | [一次資料](https://whatwg.org/specs/web-apps/2005-09-01/#the-nav) | 2026-08-09 |
| 2005-12 | Web Authoring Statistics: Classes | Googleによる当時のusage調査（保存複製） | 既存`nav` classとHTML5 `nav`の対応。 | [一次資料](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html) | 2026-08-09 |

## 確度

**B**

HTMLへの導入要求と設計モデルは確認できるが、`navigation → nav`の改名経路と具体的祖先からの採用因果は確認できないため。

## 否定された仮説

既存`nav` classから直接採用したという説明。usage調査は対応を示すが採用行為を述べない。2004年案の名称が最初から`nav`だったという説明も採用しない。

## 未解決

- `navigation`から`nav`への正確な改名日、提案者、理由は確認できるか。
- usage調査のdatasetが草案編集前に使われたことを示す記録はあるか。
