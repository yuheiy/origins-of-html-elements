---
status: 完成
---

# `<head>`

## 概要

1992年6月のヘッダー／本文分離案、CERNのヘッダーラッパー計画、11月の`HEADING`提案と採用支持を経て、1993年1月6日版DTDの`HEAD`へ至る。ラッパー採用の因果は当事者資料で確認できるが、`HEAD`という最終トークンを選んだ記録は回収できていない。

## 現在の意味

WHATWG HTML Living Standardでは、`Document`のメタデータの集合を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element)、2026-08-09確認）

## HTMLへの導入

Tim Berners-Leeは1992年6月25日のメールで、HTMLを変更するならヘッダーと本文を分けると述べた。後の*Future plans for HTML*は、列挙した改善から新しいDTDが生じるとしたうえで、タイトルや文書全体のリンクを包み、受信途中でもヘッダー終端を判定できるラッパーを提案した。Dan Connollyは11月19日に`TITLE`、`NEXTID`、`ISINDEX`を包む省略可能な`HEADING`タグを提案し、Berners-Leeはこの案を支持した。Connollyは12月4日、DTDへ`HEAD/BODY`タグを破壊的変更なしで対応させたと報告した。1993年6月草案収録のRCS id `93/01/06`のDTDは`HEAD`を宣言する。[Berners-Lee／Connolly, “Re: HTML DTD”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)） [*Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） [Connolly, “HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)） [Berners-Lee, “Re: HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)） [Connolly, “The spec evolves...”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)） [1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）

## HTML直前の祖先

直前の設計上の祖先は、初期HTMLの非要素ヘッダー部分を包むCERNのヘッダーラッパー計画とConnollyの`HEADING`提案である。改善案から新DTDが生じるという計画、Berners-Leeの採用支持、Connollyによる`HEAD/BODY`対応完了の報告がラッパー導入の因果を示す。`HEADING`から`HEAD`へのトークン変更を記録する中間版は未回収である。

## さらに上流の由来

### 証拠

1992年11月30日のConnollyガイドは`TITLE`、`ISINDEX`、`NEXTID`からなる非要素のヘッダー部分を記録し、後続のラッパー提案との設計上の連続を確認できる。ただし、この間の直接の変更記録は未確認である。[Connolly, *Recommended HTML Usage*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)）

### 解釈

なし。

## 系譜

ヘッダー／本文分離案（1992-06-25）→ CERNヘッダーラッパー計画 → `HEADING` ラッパー提案と採用支持（1992-11-19）→［`HEAD`へのトークン変更記録は未回収］→ DTDの`HEAD/BODY`対応報告（1992-12-04）→ HTML DTD `HEAD`（1993-01-06）→ 現行HTML `<head>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-06-25（収録メールの日付） | [“Re: HTML DTD”](../../raw/lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0063.html)） | www-talkへの当事者メールを含む返信 | Berners-LeeがHTMLの変更案としてヘッダー部分と本文部分の分離を挙げる。 | 2026-08-10 |
| 1992-11-19 | “HTML DTD issues”／“Re: HTML DTD issues”：[提案](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[応答](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)（[公開元1](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[公開元2](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)） | www-talkへの当事者投稿 | Connollyが`HEADING`ラッパーを提案し、Berners-Leeがヘッダー／本文という用語を支持する。 | 2026-08-09 |
| 1992-11-30（更新日） | [*Recommended HTML Usage*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Connolly/recommended.html)） | 当事者による実装者向けガイド | `BODY`より前の非要素ヘッダー部分と、その構成要素を記録する。 | 2026-08-09 |
| 1992-12-02（更新日） | [*Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） | CERN設計ノート | ヘッダーラッパーと、その終端を早期に判定する設計上の利点を記録する。 | 2026-08-09 |
| 1992-12-04 | [“The spec evolves...”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0155.html)） | www-talkへの当事者投稿 | ConnollyがDTDを変更して`HEAD/BODY`タグへ対応したと報告する。 | 2026-08-10 |
| 1993-01-06（DTD RCS id） | [*Hypertext Markup Language (HTML)*収録DTD](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft内のDTD | `HEAD`とその順序なしの内容モデルを宣言する。 | 2026-08-09 |

## 確度

**A−**

要素単位のヘッダーラッパー計画、具体的な`HEADING`提案と採用支持、`HEAD/BODY`対応完了の報告、結果の`HEAD`宣言を当事者資料で確認できるが、`HEADING`から`HEAD`という最終トークンへの変更記録が欠けるため。

## 否定された仮説

一般的なSGML文書構造またはWaterloo GMLの同名構造をHTML直前の祖先とする説明。確認できる直前系列はHTML内のヘッダー部分と`HEADING`提案である。

## 未解決

- `HEADING`から`HEAD`というトークンへ変更したメールまたは変更記録はあるか。
- `HEAD`の順序なし集合設計に影響した具体的な文書体系はあるか。
