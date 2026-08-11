---
status: 完成
---

# `<wbr>`

## 概要

Netscape Navigator 1.1の独自要素として記録された任意改行機会であり、遅くとも1995年4月25日にはHTML標準化議論でNetscapeの提案として認識されていた。導入要求は確認できるが、HTML5への再採録経路とHTML以前の具体的祖先は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、行を折り返してよい機会を表す。要素内の内容は周囲のtextの一部とみなされない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element)、2026-08-09確認）

## HTMLへの導入

1995年4月25日のIETF HTML-WG mailは、Netscapeが`WBR` tagを提案済みであることをliteral名で記録する。copyright 1995のNetscape Communications文書は`WBR`をnew elementとし、`NOBR`区間内の例外的な改行位置、または長い語で改行可能な位置をNavigatorへ知らせるためと説明する。`BR`と異なり改行を強制しない。後代のNetscape 3.0用HTML referenceは初回実装版をNavigator 1.1と記す。[HTML-WG mail](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html) [Netscape “Extensions to HTML”](https://marc.merlins.org/htmlearn/netscape/html_extensions.html) [Netscape HTML reference保存複製](https://lib.ru/WEBMASTER/tags.txt)

`WBR`はHTML 4.01には収録されなかった。WHATWG sourceでは遅くとも2006年7月31日に既存のempty elementとして確認でき、2008年1月22日のW3C HTML5 First Public Working Draftもparserとserializationの規則で`wbr`をempty elementとして扱う。ただし、Netscape実装を再採録したと明記する資料は未確認である。[WHATWG commit](https://github.com/whatwg/html/commit/78910a0464b60b2d2b3a1864970f66a8bdb774f3) [HTML5 FPWD](https://www.w3.org/TR/2008/WD-html5-20080122/)

## HTML直前の祖先

未確認。Netscape文書は`NOBR`との機能上の組合せを示すが、`NOBR`が時間的に先行し、そこから`WBR`が派生したとは示さない。現行要素についても、Netscape実装からHTML5へ再採録した因果資料は確認できない。

## さらに上流の由来

### 証拠

1995年4月のHTML-WG議論では、nowrap中の任意改行という同じ要求に対し、Netscape `WBR`ではなくconditional breaking spaceの`&cbsp;`とsoft hyphenの`&shy;`を使う競合案が示された。[Dave Raggettの返信](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)

### 解釈

`WBR`は通常の空白位置での改行と`NOBR`による改行禁止の間へ、authorが任意改行機会を置くための補助要素と解釈できる。HTML 3.0側の競合案は同じ要求の別解であり、`WBR`の祖先にはしない。

## 系譜

Netscape Navigator 1.1 `WBR`（遅くとも1995-04-25に提案として確認）

WHATWG `wbr`（遅くとも2006-07-31、Netscape実装からの再採録因果は未確認） → 現行HTML `<wbr>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-04-25 | [Dave Raggett, “Re: More comments on the HTML 3.0 draft”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)） | IETF HTML-WG mail保存版 | Netscapeの提案済み`WBR`に言及し、HTML 3.0側の競合案`&cbsp;`と`&shy;`を提示。 | 2026-08-10 |
| 1995（正確な日付不明） | [Netscape Communications, “Extensions to HTML”](../../raw/marc.merlins.org/htmlearn/netscape/html_extensions.html)（[公開元](https://marc.merlins.org/htmlearn/netscape/html_extensions.html)） | vendor公式文書の保存複製 | `WBR`をNavigatorのnew elementとし、任意改行位置を指定する導入要求を説明。 | 2026-08-10 |
| 公開日未確認 | [Netscape *HTML Reference Guide: Tags for Netscape 3.0*](../../raw/lib.ru/WEBMASTER/tags.txt)（[公開元](https://lib.ru/WEBMASTER/tags.txt)） | vendor公式referenceの保存複製 | `WBR`の初回実装版をNavigator 1.1と記録。 | 2026-08-10 |
| 2006-07-31 | [WHATWG HTML commit `78910a0`](../../raw/github.com/whatwg/html/commit/78910a0464b60b2d2b3a1864970f66a8bdb774f3)（[公開元](https://github.com/whatwg/html/commit/78910a0464b60b2d2b3a1864970f66a8bdb774f3)） | 仕様source commit | `WBR`を既存のempty elementとして扱っており、この時点までのWHATWG仕様内の存在を確認できる。 | 2026-08-10 |
| 2008-01-22 | [HTML 5 First Public Working Draft](../../raw/www.w3.org/TR/2008/WD-html5-20080122/index.html)（[公開元](https://www.w3.org/TR/2008/WD-html5-20080122/)） | W3C Working Draft | parserとserializationの規則で`wbr`をempty elementとして扱う。Netscapeからの採録理由は記さない。 | 2026-08-10 |

## 確度

**B**

Netscape文書で要素、実装主体、導入要求を確認できるが、現行要素へ至るHTML5での再採録因果と、それ以前の具体的祖先を確認できないため。

## 否定された仮説

`NOBR`を時間的な直接祖先として矢印で結ぶ説明。確認できるのは機能上の組合せであり、導入順序や派生関係ではない。`&cbsp;`と`&shy;`は1995年HTML 3.0側の競合案であり、Netscape `WBR`の祖先または採録形とはしない。desktop publishing、word processor、SGML語彙、soft hyphen等からNetscapeが採用したという説明も因果資料がない。

## 未解決

- Netscape `WBR`の正確な提案日、公開日、最初のNavigator buildは何か。
- Netscape内部の提案者、`NOBR`との実装順序、名称と空要素構文の選択理由を示す資料はあるか。
- 1995年HTML-WG議論後に`WBR`が初期HTML標準へ採録されなかった決定記録はあるか。
- WHATWGが`wbr`を再採録した最初のcommit、議論、およびNetscape実装との明示的因果は確認できるか。
