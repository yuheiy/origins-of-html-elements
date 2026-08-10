---
status: 完成
---

# `<p>`

## 概要

1992年1月のBerners-Lee mailで、新しいparagraphを示す空のmarkとして確認できる。styled paragraph列へ往復できるflat document modelの一部だが、具体的祖先は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、paragraphを表す。 [HTML Living Standard](../../raw/html-living-standard/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element)、2026-08-09確認）

## HTMLへの導入

確認できる最初期のHTML資料は1992年1月9日のBerners-Lee mailで、`P`を新しいparagraphを示すtagとして記録する。CERNの*Design Constraints*は、HTMLをstyled paragraph列へ写像し、編集後にelementsへ一意に戻せるflat modelを設計要件として説明する。[Berners-Lee, “Re: Is there a paper which describes the www protocol?”](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html) [*Design Constraints*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html)

## HTML直前の祖先

未確認。先行SGML/GMLのparagraph markupとHTML `P`の間の採用因果は確認できない。

## さらに上流の由来

### 証拠

1988年Waterloo SCRIPT GMLにもparagraph用の`:P`が存在するが、WaterlooからCERNまたはHTMLへの採用を示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

なし。

## 系譜

初期HTML `P`（1992年に確認）→ 現行HTML `<p>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1988-10-18 | [*SCRIPT GML User’s Guide*](../../raw/items/web.archive.org/b82275288ef607cd-script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)） | Waterloo公式文書の保存版 | 先行GMLにparagraph用`:P`が存在する。HTMLへの採用因果は示さない。 | 2026-08-09 |
| 1992-01-09 | [“Re: Is there a paper which describes the www protocol?”](../../raw/items/lists.w3.org/4575ecdf19df5f8b-0000.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)） | www-talkへの当事者投稿 | `P`を新しいparagraphを示すtagとして記録する。 | 2026-08-09 |
| 1992（保存snapshot） | [*Design Constraints*](../../raw/early-www/5355c914170fae57-HTMLConstraints.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html)） | CERN設計ノート | HTMLをstyled paragraph列へ往復できるflat modelとする設計要件を記録する。 | 2026-08-09 |
| 1992-11-13（更新日） | [*Tags used in HTML*](../../raw/early-www/6fba3e9651380c1e-Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料のhistorical snapshot | `P`を新しいparagraphを示す最小化形式のtagとして記録する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/draft-ietf-iiir-html-00/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `P`をparagraph separatorであるempty elementとして宣言する。 | 2026-08-09 |

## 確度

**B**

HTML側の集合単位の設計モデルは確認できるが、具体的な先行要素からの採用因果を確認できないため。

## 否定された仮説

Waterlooの`:P`との同名・同用途だけから直接系譜を結ぶ説明。また、初期HTMLのempty separatorを現行`p`と同じcontainerだったとする説明。

## 未解決

- 初期HTML `P`を先行SGML/GMLから採用したことを示す記録はあるか。
- empty separatorからcontainer elementへ変わった時期と理由は何か。
