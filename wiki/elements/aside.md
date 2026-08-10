---
status: 完成
---

# `<aside>`

## 概要

2004年8月にWHATWG編集者Ian Hicksonが`sidebar`を提案し、11月には本文に関連するが本文のflow外にある内容と説明した。2005年草案までに`aside`となり、Hicksonは後に、pageのsideだけに用途を限定すると誤解されないため`sidebar`を採らなかったと説明した。

## 現在の意味

WHATWG HTML Living Standardでは、周囲の内容へ間接的に関連し、その内容から分離して考えられるページのsectionを表す。pull quote、sidebar、広告、`nav`群などに使用できる。[HTML Living Standard](../../raw/html-living-standard/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element)、2026-08-10確認）

## HTMLへの導入

2004年8月29日のWHATWG threadで、Hicksonは`sidebar`を今後定義する候補として挙げ、一般的な`div`のpseudo-semantic用途を減らす目的を説明した。11月12日にはsectioning element集合へ`sidebar`を含め、本文と関連するが本文のflow外にあるcontentだと説明し、12月8日版の保存草案も同じ役割で定義した。2005年4月5日のmailは、当時の仕様にある語彙が典型的なsiteのmarkup、特に`div`濫用の調査から直接得られたと明記し、9月1日版Web Applications 1.0は現行名`aside`で周囲の内容へtangentially relatedなsectionとして定義する。2008年にHicksonは、pageのsideだけに用途を限定すると誤解されないよう`sidebar`ではなく`aside`としたと説明した。改名の正確な日付は確認できない。[2004年8月の提案](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html) [2004年11月の役割](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html) [2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#sidebar) [2005年の調査説明](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-aside) [名称の説明](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)

## HTML直前の祖先

WHATWGの`sidebar`案である。2004年11月時点の「本文に関連するがflow外にあるcontent」という役割は2005年`aside`の定義へ続き、Hicksonの後の説明が`sidebar`を最終名にしなかった理由を直接示す。出版物のasideから採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

2004年の`sidebar`案、2005年の`aside`定義、2008年の編集者説明から、役割の連続と名称選択の理由を確認できる。

### 解釈

既存Webでsidebar等として表現されていた、主内容から分離可能な関連内容を、配置方向に依存しない名称のsectioning elementへしたと解釈できる。具体的な既存classとの一対一の採用は確定しない。

## 系譜

WHATWG `sidebar`案（2004年） → 配置方向に限定しない名称としてWeb Applications 1.0 `aside`（2005年まで、改名日未確認） → 現行HTML `aside`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-08-29 | [`<section>` and headings](../../raw/items/lists.whatwg.org/15a13e1b313b3b1f-002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） | WHATWG mailing list | Hicksonが`sidebar`を候補として挙げ、一般的な`div`のpseudo-semantic用途を減らす目的を説明したこと。 | 2026-08-10 |
| 2004-11-12 | [`<section>` and headings](../../raw/items/lists.whatwg.org/eb4cab367a6e3897-002363.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)） | WHATWG mailing list | `sidebar`をsectioning element集合へ含め、本文に関連するがflow外にあるcontentと説明したこと。 | 2026-08-10 |
| 2004-12-08 | [Web Applications 1.0](../../raw/whatwg-web-apps-history/47bdd5e05dea69cc-current.html)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#sidebar)） | WHATWG保存Working Draft | `sidebar`をmain textの直接の一部ではないが関連topicのsectionとして定義したこと。 | 2026-08-10 |
| 2005-04-05 | [Re: `<section>` and headings and other threads](../../raw/items/lists.whatwg.org/55c518e04004c276-045650.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)） | WHATWG mailing list | 当時の仕様にある語彙が、典型的siteのmarkup、特に`div`濫用の調査から直接得られたという編集者の説明。 | 2026-08-10 |
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg-web-apps-history/f8bdeadb28b78825-2005-.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-aside)） | WHATWG保存Early Working Draft | `aside`の存在と、周囲へ間接的に関連するsectionという意味。 | 2026-08-09 |
| 2008-01-22 | [HTML 5 differences from HTML 4](../../raw/w3c-html5-history/07e1fb58af5f1133-WD-html5-diff-200.html)（[公開元](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements)） | W3C Working Draft | `aside`をHTML 4にないdocument markupとして列挙。 | 2026-08-09 |
| 2008-11-29 | [Thoughts on HTML 5](../../raw/items/lists.whatwg.org/4e07f82b80b4310d-017596.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)） | WHATWG editorの返信 | `sidebar`ではpageのsideだけに使えると誤解されるため、`aside`という名称を選んだこと。 | 2026-08-10 |

## 確度

**A**

WHATWGの具体的な`sidebar`案から同じ役割の`aside`へ至る関係と、`sidebar`を最終名にしなかった理由を編集者の説明で直接確認できるため。正確な改名日は未確認だが、直前の要素と名称判断の因果に欠落はない。

## 否定された仮説

出版上のasideから直接採用したという説明。2004年案と編集者説明はWHATWG `sidebar`案からの名称選択を示すが、出版語彙からの採用を述べない。特定の既存Web `sidebar` classから個別採用したという説明も、調査との関係が集合単位なので採用しない。

## 未解決

- `sidebar`から`aside`への正確な改名日と変更差分は確認できるか。
- 出版上のasideを参照した同時代記録、または特定の既存Web `sidebar` classとの個別対応はあるか。
