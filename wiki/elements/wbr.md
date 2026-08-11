---
status: 完成
---

# `<wbr>`

## 概要

Netscape Navigator 1.1の独自要素として記録された任意改行機会であり、遅くとも1995年4月25日にはHTML標準化議論でNetscapeの提案として認識されていた。WHATWGが2010年に廃止扱いから適合要素へ変更した経路は確認できるが、NetscapeからWHATWGへの因果とHTML以前の具体的祖先は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、行を折り返してよい機会を表す。要素内の内容は周囲のテキストの一部とみなされない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element)、2026-08-09確認）

## HTMLへの導入

1995年4月25日のIETF HTML-WGメールは、Netscapeが`WBR`タグを提案済みであることをリテラル名で記録する。著作権1995のNetscape Communications文書は`WBR`を新要素とし、`NOBR`区間内の例外的な改行位置、または長い語で改行可能な位置をNavigatorへ知らせるためと説明する。`BR`と異なり改行を強制しない。後代のNetscape 3.0用HTML参照は初回実装版をNavigator 1.1と記す。[HTML-WGメール](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)） [Netscape “Extensions to HTML”](../../raw/marc.merlins.org/htmlearn/netscape/html_extensions.html)（[公開元](https://marc.merlins.org/htmlearn/netscape/html_extensions.html)） [Netscape HTMLリファレンスの保存複製](../../raw/lib.ru/WEBMASTER/tags.txt)（[公開元](https://lib.ru/WEBMASTER/tags.txt)）

`WBR`はHTML 4.01には収録されなかった。WHATWGソースでは遅くとも2006年7月31日に既存の空要素として確認でき、2008年1月22日のW3C HTML5 First Public Working Draftもパーサーと直列化の規則で`wbr`を空要素として扱う。2010年4月2日のr4956は、それまで廃止要素一覧にあった`wbr`を行折返し機会を表す適合要素として定義した。この差分によりWHATWG内で現行要素へ至る標準化経路は確認できるが、Netscape実装をWHATWGが再採録したと明記する資料は未確認である。[WHATWGコミット](../../raw/github.com/whatwg/html/commit/78910a0464b60b2d2b3a1864970f66a8bdb774f3)（[公開元](https://github.com/whatwg/html/commit/78910a0464b60b2d2b3a1864970f66a8bdb774f3)） [HTML5 FPWD](../../raw/www.w3.org/TR/2008/WD-html5-20080122/__index)（[公開元](https://www.w3.org/TR/2008/WD-html5-20080122/)） [適合化コミット](../../raw/github.com/whatwg/html/commit/33fc385dc0248f1464af8d8286da1cb55d52eb9c)（[公開元](https://github.com/whatwg/html/commit/33fc385dc0248f1464af8d8286da1cb55d52eb9c)）

## HTML直前の祖先

現行要素の直前の祖先は、WHATWG仕様がパーサー上で扱いながら廃止要素としていた`wbr`である。r4956は同じ要素を廃止一覧から外し、意味と適合要件を追加する差分を直接示す。

## さらに上流の由来

### 証拠

Netscapeの`WBR`はWHATWGの`wbr`より先に確認できるが、ここで参照する保存資料は両者の採用因果を述べない。1995年4月のHTML-WG議論では、改行禁止範囲内の任意改行という同じ要求に対し、Netscape `WBR`ではなく条件付きの分割可能な空白を表す`&cbsp;`と任意ハイフンの`&shy;`を使う競合案が示された。[Dave Raggettの返信](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)） [Netscape “Extensions to HTML”](../../raw/marc.merlins.org/htmlearn/netscape/html_extensions.html)（[公開元](https://marc.merlins.org/htmlearn/netscape/html_extensions.html)）

### 解釈

`WBR`は通常の空白位置での改行と`NOBR`による改行禁止の間へ、著者が任意改行機会を置くための補助要素と解釈できる。HTML 3.0側の競合案は同じ要求の別解であり、`WBR`の祖先にはしない。

## 系譜

Netscape Navigator 1.1 `WBR`（遅くとも1995-04-25に提案として確認）

WHATWGのパーサー上の`wbr`（遅くとも2006-07-31） → r4956で適合要素化（2010-04-02） → 現行HTML `<wbr>`

Netscape実装からWHATWGへの因果は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-04-25 | [Dave Raggett, “Re: More comments on the HTML 3.0 draft”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0278.html)） | IETF HTML-WGメール保存版 | Netscapeの提案済み`WBR`に言及し、HTML 3.0側の競合案`&cbsp;`と`&shy;`を提示。 | 2026-08-10 |
| 1995（正確な日付不明） | [Netscape Communications, “Extensions to HTML”](../../raw/marc.merlins.org/htmlearn/netscape/html_extensions.html)（[公開元](https://marc.merlins.org/htmlearn/netscape/html_extensions.html)） | ベンダー公式文書の保存複製 | `WBR`をNavigatorの新要素とし、任意改行位置を指定する導入要求を説明。 | 2026-08-10 |
| 公開日未確認 | [Netscape *HTML Reference Guide: Tags for Netscape 3.0*](../../raw/lib.ru/WEBMASTER/tags.txt)（[公開元](https://lib.ru/WEBMASTER/tags.txt)） | ベンダー公式参照の保存複製 | `WBR`の初回実装版をNavigator 1.1と記録。 | 2026-08-10 |
| 2006-07-31 | [WHATWG HTML commit `78910a0`](../../raw/github.com/whatwg/html/commit/78910a0464b60b2d2b3a1864970f66a8bdb774f3)（[公開元](https://github.com/whatwg/html/commit/78910a0464b60b2d2b3a1864970f66a8bdb774f3)） | 仕様ソースのコミット | `WBR`を既存の空要素として扱っており、この時点までのWHATWG仕様内の存在を確認できる。 | 2026-08-10 |
| 2008-01-22 | [HTML 5 First Public Working Draft](../../raw/www.w3.org/TR/2008/WD-html5-20080122/__index)（[公開元](https://www.w3.org/TR/2008/WD-html5-20080122/)） | W3C Working Draft | パーサーと直列化の規則で`wbr`を空要素として扱う。Netscapeからの採録理由は記さない。 | 2026-08-10 |
| 2010-04-02 | [WHATWG HTML commit `33fc385d`（r4956）](../../raw/github.com/whatwg/html/commit/33fc385dc0248f1464af8d8286da1cb55d52eb9c)（[公開元](https://github.com/whatwg/html/commit/33fc385dc0248f1464af8d8286da1cb55d52eb9c)） | 仕様コミット | `wbr`を廃止要素一覧から外し、行折返し機会を表す適合要素として定義 | 2026-08-11 |

## 確度

**A**

WHATWG仕様内の廃止要素`wbr`を、r4956が同じ識別子と構文のまま意味を持つ適合要素へ変更し、現行要素へ至る因果を要素単位の差分で確認できるため。NetscapeからWHATWGへの上流経路は未解決だが、確度が評価するHTMLへの導入とその直前の系譜は確認できる。

## 否定された仮説

`NOBR`を時間的な直接祖先として矢印で結ぶ説明。確認できるのは機能上の組合せであり、導入順序や派生関係ではない。`&cbsp;`と`&shy;`は1995年HTML 3.0側の競合案であり、Netscape `WBR`の祖先または採録形とはしない。デスクトップ出版、ワードプロセッサー、SGML語彙、任意ハイフン等からNetscapeが採用したという説明も因果資料がない。

## 未解決

- Netscape `WBR`の正確な提案日、公開日、最初のNavigatorビルドは何か。
- Netscape内部の提案者、`NOBR`との実装順序、名称と空要素構文の選択理由を示す資料はあるか。
- 1995年HTML-WG議論後に`WBR`が初期HTML標準へ採録されなかった決定記録はあるか。
- WHATWGのパーサーへ`wbr`を入れた最初のコミットと、Netscape実装との明示的因果は確認できるか。適合要素にした変更は2010年r4956と確認済みである。
