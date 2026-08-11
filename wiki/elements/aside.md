---
status: 完成
---

# `<aside>`

## 概要

2004年8月にWHATWG編集者Ian Hicksonが`sidebar`を提案し、11月には本文に関連するが本文のフロー外にある内容と説明した。2005年草案までに`aside`となり、Hicksonは後に、ページの側部だけに用途を限定すると誤解されないため`sidebar`を採らなかったと説明した。

## 現在の意味

WHATWG HTML Living Standardでは、周囲の内容へ間接的に関連し、その内容から分離して考えられるページのセクションを表す。本文から抜き出した引用、サイドバー、広告、`nav`群などに使用できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element)、2026-08-10確認）

## HTMLへの導入

2004年8月29日のWHATWGスレッドで、Hicksonは`sidebar`を今後定義する候補として挙げ、一般的な`div`の疑似意味的用途を減らす目的を説明した。11月12日にはセクショニング要素集合へ`sidebar`を含め、本文と関連するが本文のフロー外にある内容だと説明し、12月8日版の保存草案も同じ役割で定義した。2005年4月5日のメールは、当時の仕様にある語彙が典型的なサイトのマークアップ、特に`div`濫用の調査から直接得られたと明記し、9月1日版Web Applications 1.0は現行名`aside`で周囲の内容と間接的に関連するセクションとして定義する。2008年にHicksonは、ページの側部だけに用途を限定すると誤解されないよう`sidebar`ではなく`aside`としたと説明した。改名の正確な日付は確認できない。[2004年8月の提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） [2004年11月の役割](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)） [2004年草案](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/index.html)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#sidebar)） [2005年の調査説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)） [2005年草案](../../raw/whatwg.org/specs/web-apps/2005-09-01/index.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-aside)） [名称の説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)）

## HTML直前の祖先

WHATWGの`sidebar`案である。2004年11月時点の「本文に関連するがフロー外にある内容」という役割は2005年`aside`の定義へ続き、Hicksonの後の説明が`sidebar`を最終名にしなかった理由を直接示す。出版物の傍注から採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

2004年の`sidebar`案、2005年の`aside`定義、2008年の編集者説明から、役割の連続と名称選択の理由を確認できる。

### 解釈

既存Webでサイドバー等として表現されていた、主内容から分離可能な関連内容を、配置方向に依存しない名称のセクショニング要素へしたと解釈できる。具体的な既存クラスとの一対一の採用は確定しない。

## 系譜

WHATWG `sidebar`案（2004年） → 配置方向に限定しない名称としてWeb Applications 1.0 `aside`（2005年まで、改名日未確認） → 現行HTML `aside`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-08-29 | [`<section>` and headings](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） | WHATWGメーリングリスト | Hicksonが`sidebar`を候補として挙げ、一般的な`div`の疑似意味的用途を減らす目的を説明したこと。 | 2026-08-10 |
| 2004-11-12 | [`<section>` and headings](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)） | WHATWGメーリングリスト | `sidebar`をセクショニング要素集合へ含め、本文に関連するがフロー外にある内容と説明したこと。 | 2026-08-10 |
| 2004-12-08 | [Web Applications 1.0](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/index.html)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#sidebar)） | WHATWG保存Working Draft | `sidebar`を主要テキストの直接の一部ではないが関連話題のセクションとして定義したこと。 | 2026-08-10 |
| 2005-04-05 | [Re: `<section>` and headings and other threads](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)） | WHATWGメーリングリスト | 当時の仕様にある語彙が、典型的サイトのマークアップ、特に`div`濫用の調査から直接得られたという編集者の説明。 | 2026-08-10 |
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg.org/specs/web-apps/2005-09-01/index.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-aside)） | WHATWG保存Early Working Draft | `aside`の存在と、周囲へ間接的に関連するセクションという意味。 | 2026-08-09 |
| 2008-01-22 | [HTML 5 differences from HTML 4](../../raw/www.w3.org/TR/2008/WD-html5-diff-20080122/index.html)（[公開元](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements)） | W3C Working Draft | `aside`をHTML 4にない文書マークアップとして列挙。 | 2026-08-09 |
| 2008-11-29 | [Thoughts on HTML 5](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-November/017596.html)） | WHATWGエディターの返信 | `sidebar`ではページの側部だけに使えると誤解されるため、`aside`という名称を選んだこと。 | 2026-08-10 |

## 確度

**A**

WHATWGの具体的な`sidebar`案から同じ役割の`aside`へ至る関係と、`sidebar`を最終名にしなかった理由を編集者の説明で直接確認できるため。正確な改名日は未確認だが、直前の要素と名称判断の因果に欠落はない。

## 否定された仮説

出版上の傍注から直接採用したという説明。2004年案と編集者説明はWHATWG `sidebar`案からの名称選択を示すが、出版語彙からの採用を述べない。特定の既存Web `sidebar` クラスから個別採用したという説明も、調査との関係が集合単位なので採用しない。

## 未解決

- `sidebar`から`aside`への正確な改名日と変更差分は確認できるか。
- 出版上の傍注を参照した同時代記録、または特定の既存Web `sidebar` クラスとの個別対応はあるか。
