---
status: 完成
---

# `<li>`

## 概要

1990年12月のWorldWideWebのテストファイルは、CERN-SGMLタグ集合から一部をHTMLへ含めたと明記し、`LI`を`OL`と`UL`の承認済みタグ集合の実例として使う。個々のタグの対応は明記されないため、CERN-SGMLからの採録は集合単位で確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、リスト項目を表し、親が`ol`、`ul`、`menu`ならその親リストの項目となる。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)、2026-08-09確認）

## HTMLへの導入

1990年12月7日保存のWorldWideWebのテストファイルは、承認済みHTMLタグの説明中でCERN-SGMLタグ集合から一部をHTMLへ含めたと明記し、同じファイルで`LI`を`OL`と`UL`の項目に使う。Tim Berners-Leeは1991年10月29日のメールでも`LI`を`UL`または`OL`内のスタイルタグとして説明する。CERNの*Design Constraints*は`UL`内の`LI`を平坦文書モデルで許す限定的入れ子の例にする。[WorldWideWebのテストファイル](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html) [Berners-Lee, 1991年メール](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) [*Design Constraints*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html)

## HTML直前の祖先

CERN-SGMLタグ集合である。WorldWideWebのテストファイルはCERN-SGMLから一部のタグをHTMLへ含めたと明記し、同じ承認済みタグ集合に`LI`を含む。ただし、CERN-SGML側の個別タグとHTML `LI`の対応は明記しない。

## さらに上流の由来

### 証拠

1988年Waterloo SCRIPT GMLにも`:LI`が存在するが、WaterlooからCERNまたはHTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

CERN-SGMLからHTMLへの採録はリストタグ集合について確認できるが、`LI`単独の対応としては確定できない。

## 系譜

CERN-SGMLタグ →［集合単位、個別対応は不明］WorldWideWeb承認済みタグ集合の`LI`（1990年保存）→ 現行HTML `<li>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1988-10-18 | [*SCRIPT GML User’s Guide*](../../raw/web.archive.org/web/20020504095301/http%3A/www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)） | Waterloo公式文書の保存版 | 先行GMLに`:LI`が存在する。HTMLへの採用因果は示さない。 | 2026-08-09 |
| 1990-12-07（HTTP Last-Modified） | [WorldWideWeb `backup_of_test.html`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)） | CERN/W3C保存の実装テストファイル | CERN-SGMLタグ集合から一部をHTMLへ含めたと明記し、承認済みタグ集合の実例で`LI`を`OL`と`UL`に使う。個別対応は指定しない。 | 2026-08-10 |
| 1991-10-29 | [“Re: status. Re: X11 BROWSER for WWW”](../../raw/lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)） | www-talkへの当事者投稿 | `LI`を`UL`または`OL`内のスタイルタグとして説明する。 | 2026-08-09 |
| 1992（保存スナップショット） | [*Design Constraints*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/HTMLConstraints.html)） | CERN設計ノート | `UL`内の`LI`を限定的入れ子の例として設計モデルへ位置付ける。 | 2026-08-09 |
| 1992-11-13（更新日） | [*Tags used in HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | `LI`をリスト内の項目開始に用いる構文として記録する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `LI`を空要素として宣言し、リストの内容モデルへ含める。 | 2026-08-09 |

## 確度

**A−**

CERN-SGMLタグ集合からHTMLへの採録を直接史料で確認できるが、個々のCERN-SGMLタグとHTML `LI`の対応を指定しない集合単位の記述であるため。

## 否定された仮説

Waterloo、CERN、HTMLの同名`LI`だけからWaterloo → CERN → HTMLの系譜を結ぶ説明。確認できる採録元はCERN-SGMLタグ集合であり、Waterlooとの接続は未確認である。

## 未解決

- CERN SGMLガイドのどの`LI`定義をHTMLへ対応させたかを示すタグ単位の記録はあるか。
- 項目マーカーから現在のリスト項目要素へ至る内容モデルの変化はいつ確定したか。
