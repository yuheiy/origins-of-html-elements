---
status: 完成
---

# `<body>`

## 概要

Tim Berners-Leeは1992年6月にheader／body分離案を示し、Dan Connollyの7月公開DTDは`BODY`をmixed content回避用の本文containerとして宣言した。11月には内部版の`DOCUMENT`を`BODY`へ戻す具体案が支持され、1993年1月6日版DTDへ続いた。`DOCUMENT`を含む内部版DTDは回収できていない。

## 現在の意味

WHATWG HTML Living Standardでは、文書のcontentsを表す。 [HTML Living Standard](../../raw/html-living-standard/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)、2026-08-09確認）

## HTMLへの導入

Tim Berners-Leeは1992年6月25日のmailで、HTMLを変更するならheaderとbodyを分けると述べた。Dan Connollyが7月15日にwww-talkへ送ったDTDは`BODY`を本文のcontainerとして宣言し、`HTML`のmixed contentを避ける必要性をcommentに記す。CERNの*Future plans for HTML*も、document-wide informationのwrapperと対になるrest用の`BODY`を新DTDの改善案に含めた。Connollyは11月19日のmailで、当時の内部版DTDでは同じ役割のcontainerを`DOCUMENT`と呼んでいると説明し、これを`BODY`へ戻す案を示し、Berners-Leeが支持した。12月1日にはmixed contentを避ける三案を比較して`BODY`を使う案を実施したと説明し、12月4日にはDTDの`HEAD/BODY`対応を報告した。[Berners-Lee／Connolly, “Re: HTML DTD”](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html) [Connolly, “HTML DTD enclosed”](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) [*Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) [Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [Berners-Lee, “Re: HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html) [Connolly, “HTML providers: please grab sgmls and the DTD”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0143.html) [Connolly, “The spec evolves...”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)

## HTML直前の祖先

1993年DTDの`BODY`直前にあったのは、Connollyが1992年11月に説明した内部版DTDの`DOCUMENT`である。当事者mailは`BODY`へ戻す変更案を明記し、Berners-Leeも支持するが、`DOCUMENT`を含むDTD本体は回収できていない。[Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [Berners-Lee, “Re: HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)

## さらに上流の由来

### 証拠

Waterloo GMLにも`BODY`／`eBODY`があるが、HTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

なし。

## 系譜

header／body分離案（1992-06-25）

HTML `BODY`（1992-07-15公開DTD）→ 内部版DTD `DOCUMENT`（1992-11-19の説明、DTD本体は未回収）→ `BODY`へ戻す提案と採用支持（同日）→ DTDの`HEAD/BODY`対応報告（1992-12-04）→ HTML DTD `BODY`（1993-01-06）→ 現行HTML `<body>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1988-10-18 | [*SCRIPT GML User’s Guide*](../../raw/items/web.archive.org/b82275288ef607cd-script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)） | Waterloo公式文書の保存版 | 先行GMLに`BODY`／`eBODY`が存在する。HTMLへの採用因果は示さない。 | 2026-08-09 |
| 1992-06-25（収録mailの日付） | [“Re: HTML DTD”](../../raw/items/lists.w3.org/800e708c34206f03-0063.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)） | www-talkへの当事者mailを含む返信 | Berners-LeeがHTMLの変更案としてheader partとbody partの分離を挙げる。 | 2026-08-10 |
| 1992-07-15 | [“HTML DTD enclosed”](../../raw/items/lists.w3.org/51289146bdefa66d-0020.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)） | www-talkへの当事者投稿とDTD | `BODY`を宣言し、`HTML`のmixed content問題を避けるという必要性をcommentに記す。後の`DOCUMENT`より早い`BODY`の公開例である。 | 2026-08-09 |
| 1992-11-19 | “HTML DTD issues”／“Re: HTML DTD issues”：[提案](../../raw/items/lists.w3.org/f99c068c486f1ed8-0068.html)・[応答](../../raw/items/lists.w3.org/7661438b0ffab82e-0072.html)（[公開元1](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[公開元2](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)） | www-talkへの当事者投稿 | Connollyが当時の内部版の`DOCUMENT`を`BODY`へ戻す案を示し、Berners-LeeがHeader/Body用語を支持する。 | 2026-08-09 |
| 1992-12-01 | [“HTML providers: please grab sgmls and the DTD”](../../raw/items/lists.w3.org/c24d96bcaf81e776-0143.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0143.html)） | www-talkへの当事者投稿 | Connollyがmixed contentを避ける選択肢を比較し、`BODY`を使う案を実施したと説明する。 | 2026-08-10 |
| 1992-12-04 | [“The spec evolves...”](../../raw/items/lists.w3.org/220abaf24f050298-0155.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)） | www-talkへの当事者投稿 | ConnollyがDTDを変更して`HEAD/BODY` tagへ対応したと報告する。 | 2026-08-10 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/draft-ietf-iiir-html-00/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | DTDで`BODY`とそのcontent modelを宣言する。 | 2026-08-09 |

## 確度

**A**

要素単位のheader／body分離案、`BODY`を必要とした設計理由と公開DTD、内部版`DOCUMENT`を`BODY`へ戻す具体的変更案と採用支持、結果のDTDを当事者資料で確認できるため。内部版DTD本体は欠けるが、その存在と変更内容は提案者自身が説明している。

## 否定された仮説

Waterloo GMLなどの同名`BODY`からHTMLへ採用されたとする説明。確認できる直前関係はHTML DTD内部の`DOCUMENT`からの改名である。

## 未解決

- `DOCUMENT`を含む内部版DTDと`BODY`へ戻した変更diffを回収できるか。
- HTML DTD以前の具体的な先行文書体系は確認できるか。
