---
status: 完成
---

# `<h1>`〜`<h6>`

## 概要

`h1`〜`h6`は、AAP tag setのheading definitionがCERN SGML guideを経て初期HTMLへ保持された、共通の直接史料を持つ6段階の見出し要素群である。

## 現在の意味

WHATWG HTML Living Standardでは、`h1`〜`h6`はそれぞれのsectionのheadingを表す。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements)（2026-08-09確認）

## HTMLへの導入

1992年のCERN公式HTML資料は`H1`〜`H6`の6段階を列挙し、CERN SGML guideで定義されたままHTMLへ保持したと説明する。[CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

## HTML直前の祖先

HTML直前の祖先はCERN SGML guideのheading familyである。CERN資料が6段階を“kept as defined”と明記するため、単なる同名存在ではなく集合単位の採用因果を確認できる。[CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

## さらに上流の由来

### 証拠

CERN資料はheading definitionsがAAP tag setに由来すると明記する。1991年2月1日のRCS識別子を持つAAP Book DTD BK-1保存版はheading familyを`h|h1|h2|h3|h4`と宣言しており、AAP側に5要素のheading語彙が実在したことを直接確認できる。ただし、AAPの5 identifiersとHTMLの6段階は一致しないため個別の番号対応は確定しない。1988年Waterloo SCRIPT GMLにも`H1`〜`H6`が存在するが、WaterlooからCERNまたはHTMLへの採用因果は確認できない。[AAP Book DTD](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd) [CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) [Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

SUNET archiveの`README`は、収録物をSAICの`actd.saic.com:pub/SGML/AAP`からanonymous FTPで複製したと記録する。一方、`README.first`は収録DTDがlatest revisionではないと明記するため、このBK-1保存版をAAP DTD全版の最終形とは扱わない。[AAP archive `README`](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/README) [AAP archive `README.first`](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/README.first)

### 解釈

出版SGMLで形式化されたheading hierarchyがHTMLの見出し語彙の上流にある。ただし、一般的な紙の見出しからHTMLへ直接移植されたとはせず、AAPとCERN SGMLを経由する確認済みの集合単位の経路を記す。

## 系譜

AAP tag set headings → CERN SGML guide `H1`〜`H6` → 初期HTML `H1`〜`H6` → 現行HTML `<h1>`〜`<h6>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1988-10-18 | *SCRIPT GML User’s Guide* | Waterloo公式文書の保存版 | 先行するGML語彙に`H1`〜`H6`が存在する。HTMLへの採用因果は示さない。 | [保存版](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) | 2026-08-09 |
| 1991-02-01（DTD内部RCS識別子） | AAP Book DTD BK-1, `aapbook.dtd,v 1.1` | AAP DTDの歴史的保存コピー | heading entityが`h|h1|h2|h3|h4`で、5要素を同じphrase content modelのheadingとして宣言する。HTMLの6段階との個別対応は示さない。 | [SUNET SGML archive](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd) | 2026-08-09 |
| 日付不記載 | AAP archive `README` | 保存元の来歴記録 | SUNETの収録物がSAICの`actd.saic.com:pub/SGML/AAP`からanonymous FTPで複製されたこと。 | [SUNET SGML archive](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/README) | 2026-08-09 |
| 日付不記載 | AAP archive `README.first` | 保存資料の制約記録 | 収録DTDがlatest revisionではなく、AAP DTD全版の最終形として扱えないこと。 | [SUNET SGML archive](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/README.first) | 2026-08-09 |
| 1992 | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | HTML `H1`〜`H6`をCERN SGML guideから保持し、その定義をAAP tag set由来と明記する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |

## 確度

**A**

CERN SGMLからHTMLへの6段階の保持と、さらに上流のAAP tag set由来をCERN自身が明記するため。AAPから各HTML headingへの個別番号対応ではなく、heading family全体の因果を評価する。

## 否定された仮説

Waterlooに同名の`H1`〜`H6`が存在することだけから、Waterloo → CERN → HTMLという直接系譜を断定すること。確認できる因果はAAP → CERN SGML → HTMLである。

## 未解決

- AAP BK-1の5 identifiersとCERN／HTMLの6段階はどのように対応し、第6段階はどこで追加されたか。
- CERN SGML guideがAAP headingsを採用した時期と判断資料は確認できるか。
