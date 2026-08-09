# `<ul>`

> 状態: 完成

## 概要

1991年10月のBerners-Lee mailでstyle tagとして確認でき、CERNの設計ノートは`LI` within `UL`をflat document modelで許す限定的nestingの例にする。先行GMLからの採用因果は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、項目の順序を変えても文書の意味が実質的に変わらないlistを表す。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)（2026-08-09確認）

## HTMLへの導入

Tim Berners-Leeは1991年10月29日のmailで、`UL`と`LI`をHTML fileに現れるstyle tagsとして列挙する。CERNの*Design Constraints*は`LI` within `UL`をflat document modelで許す限定的nestingの例にする。[Berners-Lee, 1991年mail](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) [*Design Constraints*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html)

## HTML直前の祖先

未確認。先行GMLの同名要素からHTMLへ採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

1988年Waterloo SCRIPT GMLにも`:UL`が存在するが、HTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

なし。

## 系譜

初期HTML `UL`（1991年に確認）→ 現行HTML `<ul>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1988-10-18 | *SCRIPT GML User’s Guide* | Waterloo公式文書の保存版 | 先行GMLに`:UL`が存在する。HTMLへの採用因果は示さない。 | [Internet Archive](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) | 2026-08-09 |
| 1991-10-29 | “Re: status. Re: X11 BROWSER for WWW” | www-talkへの当事者投稿 | `UL`と`LI`をHTMLのstyle tagsとして列挙する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) | 2026-08-09 |
| 1992（保存snapshot） | *Design Constraints* | CERN設計ノート | `LI` within `UL`を限定的nestingの例として設計モデルへ位置付ける。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html) | 2026-08-09 |
| 1992-11-13（更新日） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | `UL`の構文と当時想定されたlist renderingを記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | `UL`をlist opening tagの一つとして説明し、DTDのlist集合へ含める。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**B**

HTML側の集合単位の設計モデルは確認できるが、具体的な先行要素からの採用因果を確認できないため。

## 否定された仮説

Waterloo、CERN、HTMLの同名`UL`だけからWaterloo → CERN → HTMLの系譜を結ぶ説明。

## 未解決

- HTML `UL`の採用判断を記録する当事者資料はあるか。
- CERN SGML guideまたは別のlist systemを直前祖先として確認できるか。
