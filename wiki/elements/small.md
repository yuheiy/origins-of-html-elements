---
status: 完成
---

# `<small>`

## 概要

HTML 3.0草案で細則を小さいfontで表示する新要素として確認でき、HTML 3.2以降へ継承された。WHATWGは2005年4月に、legacy browserとの互換性から名称を維持しつつ、legal restrictions等の細則または補足事項sという表示非依存の意味へ再定義した。HTML 3.0への最初の導入経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、細則のような短い補足事項を表す。典型例は免責、注意、法的制限、著作権、帰属、license要件であり、単なる文字縮小やde-emphasis、複数段落に及ぶ本文には使わない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element)、2026-08-09確認）

## HTMLへの導入

1995年3月のHTML 3.0草案“Font Style Elements”は、`SMALL (Small print)`を、囲んだtextを通常より小さいfontで可能なら表示する要素として定義した。[HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html)

HTML 3.2は`SMALL`をtext-level font style elementとして収録し、「small fontへ置く」と定義した。HTML 3.2は1996年初頭のrecommended practiceとwidely deployed featuresを取り込んだが、`SMALL`個別の提案者や採用元は明記しない。[HTML 3.2](https://www.w3.org/TR/REC-html32#font-style)

2005年4月6日のWHATWG保存草案には`small`の要素定義がなく、4月13日保存版にはlegal restrictions、copyrights等の細則またはother補足事項sという定義がある。4月12日、Hicksonは`small`がfont sizeでなくlegal text／disclaimersという“細則”を意味し、既存名ならlegacy browsersでも機能するため名称を維持したと説明した。したがってsemantic reinterpretationは保存資料上4月6日後から13日以前に成立し、その設計理由も確認できる。[4月6日保存版](https://web.archive.org/web/20050406023711id_/http://whatwg.org/specs/web-apps/current-work/) [編集者の説明](https://lists.w3.org/Archives/Public/public-whatwg-archive/2005Apr/0190.html) [4月13日保存版](https://web.archive.org/web/20050413075549id_/http://www.whatwg.org/specs/web-apps/current-work/)

## HTML直前の祖先

未確認。Netscapeの“Extensions to HTML 3.0”保存版にもほぼ同じ定義があるが、原文書の作成日、実装版、HTML 3.0草案との採用方向を確定できない。

## さらに上流の由来

### 証拠

HTML 3.0草案は`SMALL`を“New in 3.0”とし、細則を小さいfontで表示するpresentational meaningを示す。HTML+には`SMALL`がなく、Netscape保存資料にはHTML 3.0とほぼ同じ定義があるが、Netscape資料の原公開日は確定できない。[HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html) [HTML+ DTD](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html) [Netscape保存版](https://web.archive.org/web/19970613212205id_/http://home.netscape.com:80/assist/net_sites/html_extensions_3.html)

2005年4月12日の改名提案は、当時`SMALL`がcopyright noticeやlegal descriptionに使われていたと述べた。Hicksonは同日、表示寸法ではなく細則という意味と、旧browserでも機能する既存名の利点を説明し、4月13日保存版はその表示非依存の定義を持つ。[改名提案](https://lists.w3.org/Archives/Public/public-whatwg-archive/2005Apr/0187.html) [編集者の回答](https://lists.w3.org/Archives/Public/public-whatwg-archive/2005Apr/0190.html) [保存草案](https://web.archive.org/web/20050413075549id_/http://www.whatwg.org/specs/web-apps/current-work/)

### 解釈

WHATWGは従来の名称を後方互換性のため再利用し、“細則”を表示寸法ではなくlegal restrictions等を含む補足事項というmedia-independentな意味へ再解釈した。この2005年の判断から1995年の導入理由は逆算しない。

## 系譜

HTML 3.0 `SMALL`（1995年） → HTML 3.2 `SMALL` → HTML 4 `SMALL`

→（2005年4月にsemantic reinterpretation）WHATWG `small` → 現行HTML `<small>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ DTD](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)） | W3C保存仕様草案 | 要素集合に`SMALL`がない | 2026-08-10 |
| 1995-03 | [HTML 3.0 draft “Font Style Elements”](../../raw/www.w3.org/MarkUp/html3/emphasis.html)（[公開元](https://www.w3.org/MarkUp/html3/emphasis.html)） | W3C保存仕様草案 | `SMALL`を細則を小さいfontで表示する要素として定義。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32#font-style)） | W3C Recommendation | `SMALL`をsmall font用のfont-style elementとして収録。 | 2026-08-09 |
| 日付未確定（1997-06-13保存） | [*Extensions to HTML 3.0*](../../raw/web.archive.org/web/19970613212205id_/http%3A/home.netscape.com%3A80/assist/net_sites/html_extensions_3.html)（[公開元](https://web.archive.org/web/19970613212205id_/http://home.netscape.com:80/assist/net_sites/html_extensions_3.html)） | Netscape公式資料の保存版 | Navigator 2.0文脈の`SMALL`定義。HTML 3.0との採用方向は確定できない。 | 2026-08-09 |
| 1997-12-18 | [HTML 4.0](../../raw/www.w3.org/TR/REC-html40/present/graphics.html)（[公開元](https://www.w3.org/TR/REC-html40/present/graphics.html#h-15.2.1)） | W3C Recommendation | `SMALL`をfont style elementとして継承 | 2026-08-10 |
| 2005-04-06（保存日） | [WHATWG, *Web Applications 1.0*](../../raw/web.archive.org/web/20050406023711id_/http%3A/whatwg.org/specs/web-apps/current-work/index.html)（[公開元](https://web.archive.org/web/20050406023711id_/http://whatwg.org/specs/web-apps/current-work/)） | 同時代保存草案 | `small`の要素定義節がまだないことを確認できる変更時期の下限 | 2026-08-10 |
| 2005-04-12 | [Henrik Lied, “HTML5: Deprecate the SMALL element”](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2005Apr/0187.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2005Apr/0187.html)） | WHATWG mailing-list proposal | `SMALL`の実利用をcopyright notice／legal descriptionとし、改名を提案 | 2026-08-10 |
| 2005-04-12 | [Ian Hicksonの回答](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2005Apr/0190.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2005Apr/0190.html)） | WHATWG mailing-list・編集者説明 | Small printという表示非依存の意味、既存名によるlegacy browser互換性、名称維持の判断 | 2026-08-10 |
| 2005-04-13（保存日） | [WHATWG, *Web Applications 1.0*](../../raw/web.archive.org/web/20050413075549id_/http%3A/www.whatwg.org/specs/web-apps/current-work/index.html)（[公開元](https://web.archive.org/web/20050413075549id_/http://www.whatwg.org/specs/web-apps/current-work/)） | 同時代保存草案 | Legal restrictions等の細則またはother補足事項sという定義 | 2026-08-10 |

## 確度

**B**

2005年のsemantic reinterpretationの時期と理由は確認できるが、HTML 3.0への導入理由と、それ以前の具体的祖先は確認できないため。

## 否定された仮説

Netscape `SMALL`からHTML 3.0へ入ったという説明。両資料の文言は近いが、Netscape資料は後代のsnapshotしか確認できず、作成日と採用方向を固定できない。出版上の細則慣習からHTML 3.0への直接採用も、判断を示す史料がない。

2005年4月12日のHenrik Liedによる改名提案がsemantic reinterpretationを起こしたという説明。Hicksonの返答は当時の草案がすでに表示非依存だと述べるため、このmailを変更原因とはしない。

## 未解決

- HTML 3.0 `SMALL`の最初の提案者、初出diff、mail、導入要求は確認できるか。
- Netscape資料の初版日、Navigatorでの初回実装版、HTML 3.0草案との編集関係は何か。
- 2005年4月6日から13日の間にsemantic reinterpretationを反映した草案編集diff自体は確認できるか。
