---
status: 完成
---

# `<head>`

## 概要

1992年6月のheader／body分離案、CERNのheader wrapper計画、11月の`HEADING`提案と採用支持を経て、1993年1月6日版DTDの`HEAD`へ至る。wrapper採用の因果は当事者資料で確認できるが、`HEAD`という最終tokenを選んだ記録は回収できていない。

## 現在の意味

WHATWG HTML Living Standardでは、`Document`のmetadataのcollectionを表す。 [一次定義](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element)（2026-08-09確認）

## HTMLへの導入

Tim Berners-Leeは1992年6月25日のmailで、HTMLを変更するならheaderとbodyを分けると述べた。後の*Future plans for HTML*は、列挙した改善から新しいDTDが生じるとしたうえで、titleやdocument-wide linksを包み、受信途中でもheader終端を判定できるwrapperを提案した。Dan Connollyは11月19日に`TITLE`、`NEXTID`、`ISINDEX`を包む省略可能な`HEADING` tagを提案し、Berners-Leeはこの案を支持した。Connollyは12月4日、DTDへ`HEAD/BODY` tagを破壊的変更なしで対応させたと報告した。1993年6月draft収録のRCS id `93/01/06`のDTDは`HEAD`を宣言する。[Berners-Lee／Connolly, “Re: HTML DTD”](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html) [*Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) [Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [Berners-Lee, “Re: HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html) [Connolly, “The spec evolves...”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html) [1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

直前の設計上の祖先は、初期HTMLの非要素header partを包むCERNのheader wrapper計画とConnollyの`HEADING`提案である。改善案から新DTDが生じるという計画、Berners-Leeの採用支持、Connollyによる`HEAD/BODY`対応完了の報告がwrapper導入の因果を示す。`HEADING`から`HEAD`へのtoken変更を記録する中間版は未回収である。

## さらに上流の由来

### 証拠

1992年11月30日のConnolly guideは`TITLE`、`ISINDEX`、`NEXTID`からなる非要素のheader partを記録し、後続のwrapper提案との設計上の連続を確認できる。ただし、この間の直接のchange recordは未確認である。[Connolly, *Recommended HTML Usage*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)

### 解釈

なし。

## 系譜

header／body分離案（1992-06-25）→ CERN header wrapper計画 → `HEADING` wrapper提案と採用支持（1992-11-19）→［`HEAD`へのtoken変更記録は未回収］→ DTDの`HEAD/BODY`対応報告（1992-12-04）→ HTML DTD `HEAD`（1993-01-06）→ 現行HTML `<head>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992-06-25（収録mailの日付） | “Re: HTML DTD” | www-talkへの当事者mailを含む返信 | Berners-LeeがHTMLの変更案としてheader partとbody partの分離を挙げる。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html) | 2026-08-10 |
| 1992-11-19 | “HTML DTD issues”／“Re: HTML DTD issues” | www-talkへの当事者投稿 | Connollyが`HEADING` wrapperを提案し、Berners-LeeがHeader/Body用語を支持する。 | [提案](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[応答](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html) | 2026-08-09 |
| 1992-11-30（更新日） | *Recommended HTML Usage* | 当事者によるimplementors’ guide | `BODY`より前の非要素header partと、その構成要素を記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html) | 2026-08-09 |
| 1992-12-02（更新日） | *Future plans for HTML* | CERN設計ノート | header wrapperと、その終端を早期に判定する設計上の利点を記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) | 2026-08-09 |
| 1992-12-04 | “The spec evolves...” | www-talkへの当事者投稿 | ConnollyがDTDを変更して`HEAD/BODY` tagへ対応したと報告する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html) | 2026-08-10 |
| 1993-01-06（DTD RCS id） | *Hypertext Markup Language (HTML)*収録DTD | IETF Internet-Draft内のDTD | `HEAD`とそのunordered content modelを宣言する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**A−**

要素単位のheader wrapper計画、具体的な`HEADING`提案と採用支持、`HEAD/BODY`対応完了の報告、結果の`HEAD`宣言を当事者資料で確認できるが、`HEADING`から`HEAD`という最終tokenへの変更記録が欠けるため。

## 否定された仮説

一般的なSGML文書構造またはWaterloo GMLの同名構造をHTML直前の祖先とする説明。確認できる直前系列はHTML内のheader partと`HEADING`提案である。

## 未解決

- `HEADING`から`HEAD`というtokenへ変更したmailまたはchange recordはあるか。
- `HEAD`のunordered collection設計に影響した具体的な文書体系はあるか。
