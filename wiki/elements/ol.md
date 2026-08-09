---
status: 完成
---

# `<ol>`

## 概要

1991年10月のBerners-Lee mailでordered listとして確認できる。1992年には一時未使用だったが、unordered listとの区別のため戻す設計判断を確認できる。HTML以前の具体的祖先は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、順序を変えると文書の意味が変わるよう意図的に並べられた項目のlistを表す。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)（2026-08-09確認）

## HTMLへの導入

Tim Berners-Leeは1991年10月29日のmailで`OL`をHTMLのstyle tagとして列挙する。1992年1月資料では“NOT CURRENTLY USED”だったが、同年の*Future plans for HTML*はunordered listとの区別のため`OL`を戻し、Connollyが実装中だと記録する。[Berners-Lee, 1991年mail](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) [Berners-Lee, 1992年1月mail](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html) [*Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)

## HTML直前の祖先

未確認。先行GMLのordered listとの同名・同用途だけではHTMLへの採用因果を示さない。

## さらに上流の由来

### 証拠

1988年Waterloo SCRIPT GMLにも`:OL`が存在するが、HTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

なし。

## 系譜

初期HTML `OL`（1991年に確認）→ 一時未使用（1992-01）→ HTMLへ再収録（1992年末）→ 現行HTML `<ol>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1988-10-18 | *SCRIPT GML User’s Guide* | Waterloo公式文書の保存版 | 先行GMLに`:OL`が存在する。HTMLへの採用因果は示さない。 | [Internet Archive](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) | 2026-08-09 |
| 1991-10-29 | “Re: status. Re: X11 BROWSER for WWW” | www-talkへの当事者投稿 | `OL`をHTMLのstyle tagとして列挙する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) | 2026-08-09 |
| 1992-01-09 | “Re: Is there a paper which describes the www protocol?” | www-talkへの当事者投稿 | `OL`をordered listとしつつ“NOT CURRENTLY USED”と記録する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html) | 2026-08-09 |
| 1992-11-13（更新日） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | list opening tagsとして`UL`、`MENU`、`DIR`を列挙し、`OL`は列挙しない。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1992-12-02（更新日） | *Future plans for HTML* | CERN設計ノート | unordered listとの区別のため`OL`を戻し、Connollyが実装中だと記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | `OL`を順序が重要な番号付きlistとして説明し、DTDのlist集合へ含める。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**B**

HTML内での再導入理由は直接資料で確認できるが、HTML以前の具体的祖先を確認できないため。

## 否定された仮説

Waterlooの`:OL`との同名・同用途だけから直接系譜を結ぶ説明。また、1992年資料が番号付き表示を可能性として述べることを`OL`要素の存在証拠とする説明。

## 未解決

- 1992年タグ一覧から1993年draftまでの`OL`提案またはchange recordは残っているか。
- ordered listを先行文書体系から採用した因果関係を示す資料はあるか。
