---
status: 完成
---

# `<ol>`

## 概要

1990年12月のWorldWideWeb test fileは、CERN-SGML tagsetから一部をHTMLへ含めたと明記し、`OL`をaccepted tag集合の実例として使う。ただし当時はunordered listとして実装され、個々のCERN-SGML tagとの対応も明記されない。1992年には一時未使用だったが、unordered listとの区別のため戻す設計判断を確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、順序を変えると文書の意味が変わるよう意図的に並べられた項目のlistを表す。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)（2026-08-09確認）

## HTMLへの導入

1990年12月7日保存のWorldWideWeb test fileは、accepted HTML tagsの説明中でCERN-SGML tagsetから一部をHTMLへ含めたと明記し、同じfileで`OL`を使う。冒頭の`OL`と後段のordered list例はいずれも存在するが、後段にはunordered listとしてsupportすると注記され、誤って`</UL>`で閉じられている。Tim Berners-Leeは1991年10月29日のmailでも`OL`をHTMLのstyle tagとして列挙する。1992年1月資料では“NOT CURRENTLY USED”だったが、同年の*Future plans for HTML*はunordered listとの区別のため`OL`を戻し、Connollyが実装中だと記録する。[WorldWideWeb test file](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html) [Berners-Lee, 1991年mail](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) [Berners-Lee, 1992年1月mail](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html) [*Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)

## HTML直前の祖先

CERN-SGML tagsetである。WorldWideWeb test fileはCERN-SGMLから一部のtagをHTMLへ含めたと明記し、同じaccepted tag集合に`OL`を含む。ただし、CERN-SGML側の個別tagとの対応は明記せず、当時のWorldWideWebはordered表示を実装していなかった。

## さらに上流の由来

### 証拠

1988年Waterloo SCRIPT GMLにも`:OL`が存在するが、WaterlooからCERNまたはHTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

CERN-SGMLからHTMLへの採録はlist tag集合について確認できるが、`OL`単独の対応としては確定できない。1990年のHTML markupと実装表示も分離して扱う必要がある。

## 系譜

CERN-SGML tags →［集合単位、個別対応は不明］WorldWideWeb accepted tag集合の`OL`（1990年保存、unordered表示）→ 一時未使用（1992-01）→ HTMLへ再収録（1992年末）→ 現行HTML `<ol>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1988-10-18 | *SCRIPT GML User’s Guide* | Waterloo公式文書の保存版 | 先行GMLに`:OL`が存在する。HTMLへの採用因果は示さない。 | [Internet Archive](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) | 2026-08-09 |
| 1990-12-07（HTTP Last-Modified） | WorldWideWeb `backup_of_test.html` | CERN/W3C保存の実装test file | CERN-SGML tagsetから一部をHTMLへ含めたと明記し、`OL`と`LI`の実例を使う。ordered listをunordered表示でsupportするという実装差と誤った`</UL>`も記録する。個別対応は指定しない。 | [W3C History](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html) | 2026-08-10 |
| 1991-10-29 | “Re: status. Re: X11 BROWSER for WWW” | www-talkへの当事者投稿 | `OL`をHTMLのstyle tagとして列挙する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) | 2026-08-09 |
| 1992-01-09 | “Re: Is there a paper which describes the www protocol?” | www-talkへの当事者投稿 | `OL`をordered listとしつつ“NOT CURRENTLY USED”と記録する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html) | 2026-08-09 |
| 1992-11-13（更新日） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | list opening tagsとして`UL`、`MENU`、`DIR`を列挙し、`OL`は列挙しない。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1992-12-02（更新日） | *Future plans for HTML* | CERN設計ノート | unordered listとの区別のため`OL`を戻し、Connollyが実装中だと記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | `OL`を順序が重要な番号付きlistとして説明し、DTDのlist集合へ含める。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**A−**

CERN-SGML tagsetからHTMLへの採録とHTML内での再導入理由を直接史料で確認できるが、個々のCERN-SGML tagとHTML `OL`の対応が不明で、1990年の実装はordered表示を備えていないため。

## 否定された仮説

Waterlooの`:OL`との同名・同用途だけからWaterloo → CERN → HTMLの直接系譜を結ぶ説明。また、1990年の`OL` markupをordered表示の実装証拠とする説明と、1992年資料が番号付き表示を可能性として述べることだけを`OL`要素の存在証拠とする説明。

## 未解決

- 1992年タグ一覧から1993年draftまでの`OL`提案またはchange recordは残っているか。
- CERN SGML guideのどの`OL`定義をHTMLへ対応させたかを示すtag単位の記録はあるか。
