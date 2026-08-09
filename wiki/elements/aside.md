---
status: 完成
---

# `<aside>`

## 概要

2004年11月のWHATWG提案集合では`sidebar`、2005年草案では`aside`として確認できる。両者の正確な改名経路と、出版上のasideやsidebarからの採用因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、周囲の内容へ間接的に関連し、その内容から分離して考えられるページのsectionを表す。pull quote、sidebar、広告、`nav`群などに使用できる。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element)（2026-08-09確認）

## HTMLへの導入

2004年11月10日のWHATWG議論はsemantic element集合に`sidebar`を列挙し、2005年9月1日版Web Applications 1.0は現行名`aside`で周囲の内容へtangentially relatedなsectionとして定義する。両版の間の改名日と理由は確認できない。[2004年議論](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-aside)

## HTML直前の祖先

未確認。2004年の`sidebar`案は同じ提案集合内の先行役割だが、`aside`への直接改名を示す記録は確認できない。出版物のasideやWebのsidebarから採用したことを示す史料も確認できない。

## さらに上流の由来

### 証拠

2005年草案で導入時の意味を確認でき、2008年W3C差分草案もHTML 4にないdocument markupとして列挙する。

### 解釈

HTML5のsectioning modelで、主内容から分離可能な関連内容へ専用のsectionを与えたと解釈できる。さらに上流は確定しない。

## 系譜

WHATWG `sidebar`案（2004年）　[改名経路未確認]　Web Applications 1.0 `aside`（2005年） → 現行HTML `aside`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-11-10 | Semantic elements and spec complexity | WHATWG mailing list | semantic element集合に含まれた`sidebar`。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) | 2026-08-09 |
| 2005-09-01 | Web Applications 1.0 | WHATWG保存Early Working Draft | `aside`の存在と、周囲へ間接的に関連するsectionという意味。 | [一次資料](https://whatwg.org/specs/web-apps/2005-09-01/#the-aside) | 2026-08-09 |
| 2008-01-22 | HTML 5 differences from HTML 4 | W3C Working Draft | `aside`をHTML 4にないdocument markupとして列挙。 | [一次資料](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements) | 2026-08-09 |

## 確度

**B**

HTMLへの導入時の設計モデルは確認できるが、`sidebar → aside`の改名経路と具体的な先行物からの採用因果は確認できないため。

## 否定された仮説

出版上のasideまたはWebのsidebarから直接採用したという説明。2004年案に`sidebar`はあるが、`aside`への改名と外部慣習からの採用記録を確認できない。

## 未解決

- `sidebar`から`aside`への正確な改名日、提案者、理由は確認できるか。
- 出版上のasideまたは既存Webのsidebar慣習を参照した同時代記録はあるか。
