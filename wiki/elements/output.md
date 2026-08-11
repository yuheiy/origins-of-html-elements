---
status: 完成
---

# `<output>`

## 概要

`output`はXFormsの非editableな値表示controlを含む機能集合を既存HTML forms modelへ適応する過程で、2003年にHTML form controlとして提案され、Web Forms 2.0を経てHTML5へ統合された。

## 現在の意味

WHATWG HTML Living Standardでは、計算結果またはユーザー操作の結果を表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element)、2026-08-09確認）

## HTMLへの導入

2003年9月の先行案には`output`がなく、Ian Hicksonは同年12月4日の*Proposed XHTML Module: XForms Basic*で追加した。XFormsの一部機能を既存HTML formsへ最小の影響で加え、その宣言的機能の大半をscriptで扱う設計方針のもと、`output`を`span`に似るがDOM上はform controlで、内容が値となり、scriptで更新でき、form submissionではsuccessful controlにならない要素とした。[先行案](https://www.hixie.ch/specs/html/forms/hfp.html) [2003年12月案](https://www.hixie.ch/specs/html/forms/xforms-basic-1)

同年12月7日のXFormsとの比較議論で、Hicksonは動的なboilerplate textはcontentでありdata modelに属さないと回答し、HTML版`output`のcontentとdata modelの境界を要素単位で示した。DOM値をscriptで更新する位置付けは、宣言的機能をscriptへ移す仕様全体の方針が示す。[編集者回答](https://lists.w3.org/Archives/Public/www-forms/2003Dec/0010.html)

2004年Web Forms 2.0と2005年W3C Member Submissionが`output`を継続し、Web Forms 2.0全体は後にHTML5へ統合された。[Web Forms 2.0](https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/#the-output) [HTML5差分](https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23)

## HTML直前の祖先

XFormsの`output`を含む機能集合。2003年案はXForms機能をHTML formsへ加える方針を明記し、同名の非editableな値表示controlをHTML DOMとscript中心のmodelへ作り直した。ただし`output`単独の採用記録は未確認である。

## さらに上流の由来

### 証拠

2000年12月19日のXForms 1.0 Working Draftは、data valueを他のcontent中へ表示し、userが変更できない`output` form controlを定義した。[XForms草案](https://www.w3.org/TR/2000/WD-xforms-20001219/ui.html#N1052)

### 解釈

HTML版はXFormsのinstance-data bindingをそのまま移植せず、動的な表示内容をdata modelではなくcontentとして扱い、DOM valueをscriptで更新する既存HTML formsに近いcontrolへ作り直した。

## 系譜

XForms `output`を含む機能集合 → 2003年HTML forms案`output` → Web Forms 2.0 `output` → HTML5 `output` → 現行HTML `output`

最初の矢印は仕様全体の設計方針に基づく集合レベルの関係であり、`output`単独の採用判断は欠ける。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2000-12-19 | [*XForms 1.0: XForms User Interface*](../../raw/www.w3.org/TR/2000/WD-xforms-20001219/ui.html)（[公開元](https://www.w3.org/TR/2000/WD-xforms-20001219/ui.html#N1052)） | W3C Working Draft | 非editableなdata value表示用`output` form control | 2026-08-10 |
| 2003-09 | [*XHTML Module: Extensions to Form Controls*](../../raw/www.hixie.ch/specs/html/forms/hfp.html)（[公開元](https://www.hixie.ch/specs/html/forms/hfp.html)） | Opera Working Draft | HTML forms拡張の先行版には`output`要素がないこと | 2026-08-10 |
| 2003-12-04 | [*Proposed XHTML Module: XForms Basic*](../../raw/www.hixie.ch/specs/html/forms/xforms-basic-1)（[公開元](https://www.hixie.ch/specs/html/forms/xforms-basic-1)） | Editor's Working Draft | XForms機能をHTML formsへ加える方針とHTML `output` | 2026-08-10 |
| 2003-12-07 | [“Re: Proposal for Extensions to HTML4”](../../raw/lists.w3.org/Archives/Public/www-forms/2003Dec/0010.html)（[公開元](https://lists.w3.org/Archives/Public/www-forms/2003Dec/0010.html)） | www-forms・編集者回答 | 動的boilerplate textをdata modelではなくcontentとして扱う設計判断 | 2026-08-10 |
| 2005-04-11 | [*Web Forms 2.0*](../../raw/www.w3.org/submissions/2005/SUBM-web-forms2-20050411/index.html)（[公開元](https://www.w3.org/submissions/2005/SUBM-web-forms2-20050411/#the-output)） | W3C Member Submission | scriptで更新する`output`と計算例 | 2026-08-09 |
| 2010-03-04 | [*HTML5 differences from HTML4*](../../raw/www.w3.org/TR/2010/WD-html5-diff-20100304/index.html)（[公開元](https://www.w3.org/TR/2010/WD-html5-diff-20100304/#changes-2009-04-23)） | W3C Working Draft | Web Forms 2.0のHTML5への統合 | 2026-08-09 |
| 2026-08-09 | [*HTML Living Standard: The output element*](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開元](https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element)） | 現行仕様 | `output`の現行定義 | 2026-08-09 |

## 確度

**A−**

XForms機能をHTML formsへ加える因果と同名controlの対応は直接確認できるが、集合単位の説明しかなく`output`単独の採用判断が欠ける。

## 否定された仮説

HTML `samp`や一般的なprogram outputから生まれたとは確認できないため、名称や現在の用途だけで`SAMP → OUTPUT`を結ばない。

## 未解決

- 2003年9月案から12月4日案までのどの議論で`output`追加を決め、XForms `output`との対応を選んだか。
- XForms bindingを外す理由以外に、`value`、`defaultValue`、resetというHTML固有のDOM modelを選んだ要素単位の判断記録はあるか。
