# `<head>`

> 状態: header part／`HEADING`提案からの系譜を検証済み（`HEAD`への改名記録は未回収）

## 概要

1992年11月の非要素header partと`HEADING` wrapper提案から、1993年1月6日版DTDの`HEAD`へ至る系列を確認できる。Tim Berners-LeeはHeader/Body用語を支持したが、`HEADING`から`HEAD`への改名記録は回収できていない。

## 現在の意味

WHATWG HTML Living Standardでは、`Document`のmetadataのcollectionを表す。 [一次定義](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element)（2026-08-09確認）

## HTMLへの導入

Dan Connollyは1992年11月19日、`TITLE`、`NEXTID`、`ISINDEX`を包む省略可能な`HEADING` tagを提案し、Tim Berners-LeeはHeader/Bodyがmail nomenclatureに合うと支持した。Berners-Leeの*Future plans for HTML*はwrapperによりheader終端を早期に判定できる利点も記録する。1993年6月draft収録のRCS id `93/01/06`のDTDは`HEAD`を宣言する。[Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [Berners-Lee, “Re: HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html) [*Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) [1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

直前の設計上の祖先は、非要素のheader partとConnollyが提案した`HEADING` wrapperである。`HEADING`から`HEAD`への改名を記録する中間版は未回収である。

## さらに上流の由来

### 証拠

1992年11月30日のConnolly guideは`TITLE`、`ISINDEX`、`NEXTID`からなる非要素のheader partを記録し、後続のwrapper提案との設計上の連続を確認できる。ただし、この間の直接のchange recordは未確認である。[Connolly, *Recommended HTML Usage*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)

### 解釈

なし。

## 系譜

HTMLの非要素header part → `HEADING` wrapper提案（1992-11-19）→［`HEAD`への改名記録は未回収］→ HTML DTD `HEAD`（1993-01-06）→ 現行HTML `<head>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992-11-19 | “HTML DTD issues”／“Re: HTML DTD issues” | www-talkへの当事者投稿 | Connollyが`HEADING` wrapperを提案し、Berners-LeeがHeader/Body用語を支持する。 | [提案](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[応答](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html) | 2026-08-09 |
| 1992-11-30（更新日） | *Recommended HTML Usage* | 当事者によるimplementors’ guide | `BODY`より前の非要素header partと、その構成要素を記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html) | 2026-08-09 |
| 1992-12-02（更新日） | *Future plans for HTML* | CERN設計ノート | header wrapperと、その終端を早期に判定する設計上の利点を記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) | 2026-08-09 |
| 1993-01-06（DTD RCS id） | *Hypertext Markup Language (HTML)*収録DTD | IETF Internet-Draft内のDTD | `HEAD`とそのunordered content modelを宣言する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**A−**

非要素header partと`HEADING` wrapper提案から`HEAD`への因果関係を集合単位の当事者資料で確認できるが、最終名への改名記録が欠けるため。

## 否定された仮説

一般的なSGML文書構造またはWaterloo GMLの同名構造をHTML直前の祖先とする説明。確認できる直前系列はHTML内のheader partと`HEADING`提案である。

## 未解決

- wrapper提案と1993年1月6日DTDの`HEAD`追加を直接結ぶmailまたはchange recordはあるか。
- `HEAD`のunordered collection設計に影響した具体的な文書体系はあるか。

## 調査記録

1992年CERN HTMLタグ一覧、Connolly guide、Berners-Leeのwrapper提案、1993年HTML Internet-Draftの本文とDTDを確認した。`HEAD`がない1992年7月DTDも比較した。対象群全体は[初期SGML/GML調査ノート](../research/early-sgml-elements.md)を参照する。
