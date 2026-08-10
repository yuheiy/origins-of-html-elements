---
status: 完成
---

# `<footer>`

## 概要

2004年8月にWHATWGのsemantic element候補として確認でき、2005年草案ではsectionに関する著者・著作権等の情報を表した。編集者はこの語彙集合が典型的siteのmarkup、特に`div`濫用の調査から直接得られたと説明したが、`footer`個別の先行markupとの対応は不明である。

## 現在の意味

WHATWG HTML Living Standardでは、最も近い祖先sectioning content、該当する祖先がなければ`body`のfooterを表す。通常は著者、関連文書、著作権等、そのsectionについての情報を含む。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element)、2026-08-10確認）

## HTMLへの導入

2004年8月26日にJames Grahamがsite-wide要素とpage固有contentを区別するsingle-purpose elementとして`footer`を求め、29日のthreadでHicksonは導入候補として認め、一般的な`div`のpseudo-semantic用途を減らす目的を説明した。11月12日にはsectionのfooterを表す要素としてsectioning modelへ組み込み、12月8日版の保存草案は最も近いancestor sectionまたはpageのfooterと定義した。2005年4月5日のmailは、当時の仕様にある語彙が典型的siteのmarkup、特に`div`濫用の調査から直接得られたと明記し、9月1日草案はsectionに関する情報を表し通常は末尾に置く要素として定義した。[2004年8月の要求](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/001989.html) [Hicksonの応答](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html) [2004年11月の設計](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html) [2004年草案](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#footer) [2005年の調査説明](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-footer)

## HTML直前の祖先

典型的siteのmarkup、特に`div`のpseudo-semantic用途を調べた集合レベルの既存Web慣習である。資料は`footer`個別のclassまたはmarkupを列挙しない。2005年12月のGoogle調査は既存class `footer`とHTML5 `footer`の対応を示すが、草案より後の公表なので個別の採用因果は示さない。

## さらに上流の由来

### 証拠

2004年から2005年の議論は、一般的な`div`のpseudo-semantic用途を調査し、sectionのfooterを専用要素で表す集合レベルの設計要求を示す。後発usage調査は既存Webに`footer` classが広く存在したことを示す。

### 解釈

既存Webでclass付きcontainerとして表現されていたsection末尾の情報を専用要素で機械可読にする設計と解釈できる。ただし、調査対象のどのmarkupが`footer`へ対応したかは確定しない。

## 系譜

典型的siteのmarkup／`div`のpseudo-semantic用途 →［集合単位、個別対応不明］WHATWG `footer`提案（2004年） → Web Applications 1.0 `footer`（2005年） → 現行HTML `footer`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-08-26 | [`<section>` and headings](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/001989.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/001989.html)） | WHATWG mailing list | Grahamがsite-wide要素とpage固有contentを区別するsingle-purpose elementとして`footer`を求めたこと。 | 2026-08-10 |
| 2004-08-29 | [`<section>` and headings](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） | WHATWG mailing list | Hicksonが`footer`を候補として挙げ、一般的な`div`のpseudo-semantic用途を減らす目的を説明したこと。 | 2026-08-10 |
| 2004-11-12 | [Re: `<section>` and headings](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)） | WHATWG mailing list | `footer`をsectionのfooterとしてsectioning modelへ組み込んだこと。 | 2026-08-10 |
| 2004-12-08 | [Web Applications 1.0](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/index.html)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#footer)） | WHATWG保存Working Draft | `footer`を最も近いancestor section、なければpageのfooterとして定義したこと。 | 2026-08-10 |
| 2005-04-05 | [Re: `<section>` and headings and other threads](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-April/045650.html)） | WHATWG mailing list | 当時の仕様にある語彙が典型的siteのmarkup、特に`div`濫用の調査から直接得られたという編集者の説明。 | 2026-08-10 |
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg.org/specs/web-apps/2005-09-01/index.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-footer)） | WHATWG保存Early Working Draft | sectionに関する著者・著作権等の情報を表す`footer`。 | 2026-08-09 |
| 2005-12 | [Web Authoring Statistics: Classes](../../raw/web.archive.org/web/20060101000000id_/http%3A/code.google.com/webstats/2005-12/classes.html)（[公開元](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)） | Googleによる当時のusage調査（保存複製） | 既存`footer` classとHTML5 `footer`の対応。 | 2026-08-09 |

## 確度

**A−**

典型的siteのmarkupと`div`濫用の調査から当時の語彙集合を得た因果は編集者が直接説明するが、`footer`へ対応した個別markupを列挙しないため。

## 否定された仮説

2005年12月のGoogle調査にある既存`footer` classから個別に採用したという説明。この調査は草案より後に公表され、対応は示すが採用行為を述べない。

## 未解決

- 2004年8月26日以前のWHATWG draftまたは議論に`footer`の初出を特定できるか。
- 2005年4月に言及された調査のうち、`footer`へ対応した具体的なmarkupと判断は確認できるか。
