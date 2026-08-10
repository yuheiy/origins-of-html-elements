---
status: 完成
---

# `<nav>`

## 概要

2004年11月のWHATWG sectioning element集合では`navigation`、2005年草案では`nav`として確認できる。編集者はこの語彙集合が典型的siteのmarkup、特に`div`濫用の調査から直接得られたと説明したが、個別対応と`navigation`から`nav`への変更判断は不明である。

## 現在の意味

WHATWG HTML Living Standardでは、他のページまたは同じページ内の箇所へリンクするページのsectionを表し、主に主要なナビゲーションlink群へ使用する。[HTML Living Standard](../../raw/html-living-standard/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)、2026-08-10確認）

## HTMLへの導入

2004年8月31日のWHATWG threadは、一般的なsite ID調査から`navigation`を新要素候補として要約した。11月12日の議論はsectioning element集合に`navigation`を列挙し、12月8日版の保存草案はnavigation linksのblockとして定義した。2005年4月5日のmailは、当時の仕様にある語彙が典型的siteのmarkup、特に`div`濫用の調査から直接得られたと明記し、9月1日草案は現行名`nav`でnavigation linksを含むsectionとして定義する。`navigation`と`nav`の意味は対応するが、両版の間の変更日と変更判断は確認できない。[2004年8月の調査入力](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002181.html) [2004年の提案](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html) [2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#navigation) [2005年の調査説明](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-nav)

## HTML直前の祖先

典型的siteのmarkup、特に`div`のpseudo-semantic用途を調べた集合レベルの既存Web慣習である。資料は`nav`個別のclassまたはmarkupを列挙しない。2004年の`navigation`案は同じ役割の先行名だが、`nav`への変更記録がないため矢印では接続しない。2005年12月のGoogle調査も既存`nav` classとの対応を示すが、草案より後の公表なので個別の採用因果は示さない。

## さらに上流の由来

### 証拠

2004年から2005年の議論から、典型的siteのmarkupと`div`濫用を調査し、navigation sectionを専用要素にする集合レベルの設計を確認できる。

### 解釈

既存Webでclass付きcontainerとして表現されていたnavigation roleを専用sectioning elementにしたと解釈できる。ただし、`navigation`から`nav`への変更と個別classからの採用は確定しない。

## 系譜

典型的siteのmarkup／`div`のpseudo-semantic用途 →［集合単位、個別対応不明］WHATWG sectioning語彙

WHATWG `navigation`案（2004年）　[名称変更の判断未確認]　Web Applications 1.0 `nav`（2005年） → 現行HTML `nav`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-08-31 | [Re: `<section>` and headings](../../raw/items/lists.whatwg.org/503a7371f11c48ae-002181.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002181.html)） | WHATWG mailing list | 一般的なsite ID調査から`navigation`を新要素候補として要約したこと。採用の一対一因果は述べない。 | 2026-08-10 |
| 2004-11-12 | [Re: `<section>` and headings](../../raw/items/lists.whatwg.org/2787ce0070a2766d-002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)） | WHATWG mailing list | `navigation`をsectioning element集合に含めたこと。 | 2026-08-10 |
| 2004-12-08 | [Web Applications 1.0](../../raw/whatwg-web-apps-history/47bdd5e05dea69cc-current.html)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#navigation)） | WHATWG保存Working Draft | `navigation`をnavigation linksのblockとして定義したこと。 | 2026-08-10 |
| 2005-04-05 | [Re: `<section>` and headings and other threads](../../raw/items/lists.whatwg.org/55c518e04004c276-045650.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)） | WHATWG mailing list | 当時の仕様にある語彙が典型的siteのmarkup、特に`div`濫用の調査から直接得られたという編集者の説明。 | 2026-08-10 |
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg-web-apps-history/f8bdeadb28b78825-2005-.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-nav)） | WHATWG保存Early Working Draft | navigation linksのsectionを表す`nav`。 | 2026-08-09 |
| 2005-12 | [Web Authoring Statistics: Classes](../../raw/items/web.archive.org/88fd2ea9e5c46f6b-classes.html)（[公開元](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)） | Googleによる当時のusage調査（保存複製） | 既存`nav` classとHTML5 `nav`の対応。 | 2026-08-09 |

## 確度

**A−**

典型的siteのmarkupと`div`濫用の調査から当時の語彙集合を得た因果は編集者が直接説明するが、`nav`へ対応した個別markupと`navigation`からの名称変更判断を確認できないため。

## 否定された仮説

2005年12月のGoogle調査にある既存`nav` classから個別に採用したという説明。この調査は草案より後に公表され、対応は示すが採用行為を述べない。2004年案の名称が最初から`nav`だったという説明も採用しない。

## 未解決

- `navigation`から`nav`への正確な変更日、変更者、理由は確認できるか。
- 2005年4月に言及された調査のうち、`nav`へ対応した具体的なmarkupと判断は確認できるか。
