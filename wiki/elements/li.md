# `<li>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。初期HTMLのlist設計モデルを検証済み（直前祖先は未確認）

## 概要

1991年10月のBerners-Lee mailでlist用style tagとして確認でき、CERNの設計ノートは`LI` within `UL`をflat document modelで許す限定的nestingの例にする。先行GMLからの採用因果は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、list itemを表し、親が`ol`、`ul`、`menu`ならその親listの項目となる。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)（2026-08-09確認）

## HTMLへの導入

Tim Berners-Leeは1991年10月29日のmailで、`LI`を`UL`または`OL`内のstyle tagとして説明する。CERNの*Design Constraints*は`LI` within `UL`をflat document modelで許す限定的nestingの例にする。[Berners-Lee, 1991年mail](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) [*Design Constraints*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html)

## HTML直前の祖先

未確認。先行GMLの同名要素からHTMLへ採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

1988年Waterloo SCRIPT GMLにも`:LI`が存在するが、HTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

なし。

## 系譜

初期HTML `LI`（1991年に確認）→ 現行HTML `<li>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1988-10-18 | *SCRIPT GML User’s Guide* | Waterloo公式文書の保存版 | 先行GMLに`:LI`が存在する。HTMLへの採用因果は示さない。 | [Internet Archive](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) | 2026-08-09 |
| 1991-10-29 | “Re: status. Re: X11 BROWSER for WWW” | www-talkへの当事者投稿 | `LI`を`UL`または`OL`内のstyle tagとして説明する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) | 2026-08-09 |
| 1992（保存snapshot） | *Design Constraints* | CERN設計ノート | `LI` within `UL`を限定的nestingの例として設計モデルへ位置付ける。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html) | 2026-08-09 |
| 1992-11-13（更新日） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | `LI`をlist内の項目開始に用いる構文として記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | `LI`をempty elementとして宣言し、list content modelへ含める。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**B**

HTML側の集合単位の設計モデルは確認できるが、具体的な先行要素からの採用因果を確認できないため。

## 否定された仮説

Waterloo、CERN、HTMLの同名`LI`だけからWaterloo → CERN → HTMLの系譜を結ぶ説明。

## 未解決

- HTML `LI`の採用判断を記録する当事者資料はあるか。
- item markerから現在のlist item要素へ至るcontent modelの変化はいつ確定したか。

## 調査記録

1988年Waterloo SCRIPT GML、1991年Berners-Lee mail、CERN *Design Constraints*、1992年CERN HTMLタグ一覧、1993年HTML Internet-Draftの本文とDTDを確認した。対象群全体は[初期SGML/GML調査ノート](../research/early-sgml-elements.md)を参照する。

2026-08-09の敵対的レビューでは、Waterloo `:LI`、1991年Berners-Lee mail、CERNのflat model、1993年DTDを再比較した。WaterlooからHTMLへの採用記録は確認できず、先行存在を矢印で結ばないB判定を維持した。
