---
status: 完成
---

# `<ol>`

## 概要

1990年12月のWorldWideWebのテストファイルは、CERN-SGMLタグ集合から一部をHTMLへ含めたと明記し、`OL`を承認済みタグ集合の実例として使う。ただし当時は順序なしリストとして実装され、個々のCERN-SGMLタグとの対応も明記されない。1992年には一時未使用だったが、順序なしリストとの区別のため戻す設計判断を確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、順序を変えると文書の意味が変わるよう意図的に並べられた項目のリストを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)、2026-08-09確認）

## HTMLへの導入

1990年12月7日保存のWorldWideWebのテストファイルは、承認済みHTMLタグの説明中でCERN-SGMLタグ集合から一部をHTMLへ含めたと明記し、同じファイルで`OL`を使う。冒頭の`OL`と後段の順序付きリスト例はいずれも存在するが、後段には順序なしリストとして対応すると注記され、誤って`</UL>`で閉じられている。Tim Berners-Leeは1991年10月29日のメールでも`OL`をHTMLのスタイルタグとして列挙する。1992年1月資料では“NOT CURRENTLY USED”だったが、同年の*Future plans for HTML*は順序なしリストとの区別のため`OL`を戻し、Connollyが実装中だと記録する。[WorldWideWebのテストファイル](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html) [Berners-Lee, 1991年メール](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html) [Berners-Lee, 1992年1月メール](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html) [*Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)

## HTML直前の祖先

CERN-SGMLタグ集合である。WorldWideWebのテストファイルはCERN-SGMLから一部のタグをHTMLへ含めたと明記し、同じ承認済みタグ集合に`OL`を含む。ただし、CERN-SGML側の個別タグとの対応は明記せず、当時のWorldWideWebは順序付き表示を実装していなかった。

## さらに上流の由来

### 証拠

1988年Waterloo SCRIPT GMLにも`:OL`が存在するが、WaterlooからCERNまたはHTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

CERN-SGMLからHTMLへの採録はリストタグ集合について確認できるが、`OL`単独の対応としては確定できない。1990年のHTMLマークアップと実装表示も分離して扱う必要がある。

## 系譜

CERN-SGMLタグ →［集合単位、個別対応は不明］WorldWideWeb承認済みタグ集合の`OL`（1990年保存、順序なし表示）→ 一時未使用（1992-01）→ HTMLへ再収録（1992年末）→ 現行HTML `<ol>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1988-10-18 | [*SCRIPT GML User’s Guide*](../../raw/web.archive.org/web/20020504095301/http%3A/www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)） | Waterloo公式文書の保存版 | 先行GMLに`:OL`が存在する。HTMLへの採用因果は示さない。 | 2026-08-09 |
| 1990-12-07（HTTP Last-Modified） | [WorldWideWeb `backup_of_test.html`](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)） | CERN/W3C保存の実装テストファイル | CERN-SGMLタグ集合から一部をHTMLへ含めたと明記し、`OL`と`LI`の実例を使う。順序付きリストを順序なし表示で対応するという実装差と誤った`</UL>`も記録する。個別対応は指定しない。 | 2026-08-10 |
| 1991-10-29 | [“Re: status. Re: X11 BROWSER for WWW”](../../raw/lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)） | www-talkへの当事者投稿 | `OL`をHTMLのスタイルタグとして列挙する。 | 2026-08-09 |
| 1992-01-09 | [“Re: Is there a paper which describes the www protocol?”](../../raw/lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)） | www-talkへの当事者投稿 | `OL`を順序付きリストとしつつ“NOT CURRENTLY USED”と記録する。 | 2026-08-09 |
| 1992-11-13（更新日） | [*Tags used in HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | リスト開始タグとして`UL`、`MENU`、`DIR`を列挙し、`OL`は列挙しない。 | 2026-08-09 |
| 1992-12-02（更新日） | [*Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） | CERN設計ノート | 順序なしリストとの区別のため`OL`を戻し、Connollyが実装中だと記録する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `OL`を順序が重要な番号付きリストとして説明し、DTDのリスト集合へ含める。 | 2026-08-09 |

## 確度

**A−**

CERN-SGMLタグ集合からHTMLへの採録とHTML内での再導入理由を直接史料で確認できるが、個々のCERN-SGMLタグとHTML `OL`の対応が不明で、1990年の実装は順序付き表示を備えていないため。

## 否定された仮説

Waterlooの`:OL`との同名・同用途だけからWaterloo → CERN → HTMLの直接系譜を結ぶ説明。また、1990年の`OL` マークアップを順序付き表示の実装証拠とする説明と、1992年資料が番号付き表示を可能性として述べることだけを`OL`要素の存在証拠とする説明。

## 未解決

- 1992年タグ一覧から1993年草案までの`OL`提案または変更記録は残っているか。
- CERN SGMLガイドのどの`OL`定義をHTMLへ対応させたかを示すタグ単位の記録はあるか。
