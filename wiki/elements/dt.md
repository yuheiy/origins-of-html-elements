# `<dt>`

> 状態: 初期HTMLのdefinition list設計モデルを検証済み（直前祖先は未確認）

## 概要

1991年10月のBerners-Lee mailでdefinition listのterm用style tagとして確認できる。先行GMLとの同名一致はあるが、HTMLへの採用因果は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、description list内のterm-description groupにおけるtermまたはname部分を表す。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element)（2026-08-09確認）

## HTMLへの導入

Tim Berners-Leeは1991年10月29日のmailで、`DL`、`DT`、`DD`をHTML fileに現れるstyle tagsとして説明する。これは集合単位の設計モデルを示すが、採用元は示さない。[Berners-Lee, 1991年mail](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)

## HTML直前の祖先

未確認。先行GMLの同名要素からHTMLへ採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

1988年Waterloo SCRIPT GMLにも`:DT`が存在するが、HTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

なし。

## 系譜

初期HTML `DT`（1991年に確認）→ 現行HTML `<dt>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1988-10-18 | *SCRIPT GML User’s Guide* | Waterloo公式文書の保存版 | 先行GMLに`:DT`が存在する。HTMLへの採用因果は示さない。 | [Internet Archive](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) | 2026-08-09 |
| 1991-10-29 | “Re: status. Re: X11 BROWSER for WWW” | www-talkへの当事者投稿 | `DL`、`DT`、`DD`をHTMLのstyle tagsとして説明する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) | 2026-08-09 |
| 1992-11-13（更新日） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | `DT`をdefinition listのterm開始に用いる構文として記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | `DT`をtermと説明し、empty elementとしてDTD宣言する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**B**

HTML側の集合単位の設計モデルは確認できるが、具体的な先行要素からの採用因果を確認できないため。

## 否定された仮説

Waterloo、CERN、HTMLの同名`DT`だけからWaterloo → CERN → HTMLの系譜を結ぶ説明。

## 未解決

- HTML `DT`の採用判断を記録する当事者資料はあるか。
- 初期のempty markerから現在のterm elementへ至るcontent modelの変化はいつ確定したか。

## 調査記録

1988年Waterloo SCRIPT GML、1991年Berners-Lee mail、1992年CERN HTMLタグ一覧、1993年HTML Internet-Draftの本文とDTDを確認した。対象群全体は[初期SGML/GML調査ノート](../research/early-sgml-elements.md)を参照する。
