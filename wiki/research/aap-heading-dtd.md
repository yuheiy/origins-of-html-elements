# AAP Book DTDとHTML heading familyの対応

## 調査対象の選定

調査時点の`wiki/elements/`全115ページについて`## 未解決`直下の箇条書きを棚卸ししたところ、252件あった。このうち`h1`〜`h6`の旧6ページは全て「AAP tag set内の正確なDTD定義と版を固定する」と「CERN SGML guideがAAP headingsを採用した時期と判断資料を追加確認する」を共有するため、一つの一次資料が複数要素へ波及する可能性が最も高い群の一つとして選んだ。現在は[`h1`〜`h6`統合ページ](../elements/hx.md)にまとめている。（2026-08-09確認）

## 結論

SUNETの歴史的SGML archiveから、公開識別子`-//USA/AAP//DTD BK-1//EN`を持つAAP Book DTDの保存コピーを確認した。DTD内部のRCS識別子は`aapbook.dtd,v 1.1 91/02/01 15:16:47 gpg Exp`であり、これを「1991-02-01のRCS revision 1.1を名乗るAAP Book DTD BK-1保存コピー」と固定できる。[AAP Book DTD](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)（2026-08-09閲覧）

このDTDはheading用parameter entityを`h|h1|h2|h3|h4`と宣言し、その5 generic identifiersを同じphrase content modelのheading elementsとして定義する。したがってAAP BK-1にheading familyが実在したことは、CERNによる後代の説明だけでなくAAP名義のDTD本文から直接確認できる。[AAP Book DTD](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)（2026-08-09閲覧）

一方、回収したBK-1には`h5`と`h6`がなく、AAP側の列は`h`から`h4`まで、HTML側の列は`H1`から`H6`までである。CERNの1992年HTML資料はHTMLが少なくとも6段階を持ち、これらをCERN SGML guideで定義されたまま保持し、その定義が歴史的にはAAP tag set由来だと明記するが、AAP `h|h1|h2|h3|h4`からCERN／HTML `H1`〜`H6`への個別の番号対応や第6段階の追加元は記さない。[CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) [AAP Book DTD](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)（2026-08-09閲覧）

従って、6要素共通の未解決点のうち「参照可能なAAP DTDの版とheading宣言」は部分的に解決したが、「各HTML headingとAAP generic identifierの要素単位の写像」は解決していない。既存の集合単位の`AAP headings → CERN SGML headings → HTML H1–H6`という系譜は補強できるものの、`AAP h1 → HTML H1`のような個別矢印へ細分化してはならない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1991-02-01（DTD内部RCS識別子） | `aapbook.dtd,v 1.1` | AAP Book DTDの歴史的保存コピー | public identifierは`-//USA/AAP//DTD BK-1//EN`である。heading entityは`h|h1|h2|h3|h4`で、5要素をheadingとして同じphrase content modelへ宣言する。 | [SUNET SGML archive](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd) | 2026-08-09 |
| 日付不記載 | AAP archive `README` | 保存元の来歴記録 | SUNET側ファイルは`actd.saic.com:pub/SGML/AAP`からanonymous FTPで複製された。 | [SUNET SGML archive](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/README) | 2026-08-09 |
| 日付不記載 | AAP archive `README.first` | 保存資料の制約記録 | 収録DTDはlatest revisionではなく、ISO 12083派生DTDの使用を勧めると明記する。このためBK-1をAAP DTD全版の最終形とは扱えない。 | [SUNET SGML archive](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/README.first) | 2026-08-09 |
| 1992（HTTP Last-Modifiedは1992-11-13） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | HTMLは`H1`〜`H6`の少なくとも6段階を持つ。これらはCERN SGML guideの定義を保持し、その定義はAAP tag setに由来すると説明する。HTMLではclosing tagを許す点を差分として挙げる。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1992（HTTP Last-Modifiedは1992-04-13） | *AAP* | CERN公式HTML資料のhistorical snapshot | CERNはAAPを、共通SGML DTDを早期に定めた団体の一つと説明する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/AAP.html) | 2026-08-09 |

## 解釈

AAP BK-1の5 generic identifiersとHTMLの6 generic identifiersは集合の大きさと命名が一致しないため、CERN資料の“deriving from the AAP tag set”はheading familyの設計系譜を示す集合単位の因果と読むのが安全である。AAP BK-1本文の存在によって「AAP heading familyそのものが未確認」という欠落は解消するが、個別要素の同一性はCERN SGML guideのDTDまたは変換表なしには確定できない。

HTMLがclosing tagを許すことをCERN資料自身が差分として述べるため、AAP／CERNの構文を変更なしで複製したという解釈も採らない。確認できるのはheading familyと階層的な役割の継承であり、HTML serializationには少なくとも終了tagに関する変更がある。[CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（2026-08-09閲覧）

## 統合ページへ反映可能な結論

| 対象 | 反映できる証拠 | 反映時の制約 |
|---|---|---|
| `h1`〜`h4` | AAP BK-1 revision 1.1保存コピーに同綴りの`h1`〜`h4`を含むheading familyが実在する。 | 同綴りだけではAAP要素から同番号HTML要素への個別採用因果にならない。 |
| `h5`〜`h6` | CERNの1992年HTML資料は両要素を含む6段階全体をCERN SGML guide経由のAAP由来と説明する。 | 回収したAAP BK-1には`h5`／`h6`がないため、AAP側の直接DTD定義が確認済みとは書けない。 |
| `h1`〜`h6` | 共通して、AAP DTDの候補版を`BK-1`, RCS revision 1.1, 1991-02-01へ具体化し、AAP heading familyの直接証拠を追加できる。 | 総合系譜は集合単位のまま維持し、個別generic identifierの矢印を追加しない。 |

## 未解決

- 1986年*CERN SGML User's Guide*本体のDTDまたはtag definitionを回収し、CERN側のheading generic identifiers、段階数、AAP BK-1との写像を確認する。CERN Document ServerのPDF URLは2026-08-09の取得時にbot challengeだけを返し、本文を検証できなかった。[CERN Document Server](https://cds.cern.ch/record/997909/files/cer-002659963.pdf)（2026-08-09アクセス）
- AAPのBook以外のArticle／Serial DTD、およびBK-1の前後revisionに`h5`／`h6`または別の6段階定義があるか確認する。
- CERNがAAPの5 generic identifiersを6段階以上へ変更した時期、担当者、判断理由を示すchange recordまたは変換表を探す。
- SUNETの`README.first`が収録DTDをlatest revisionではないと明記するため、AAP／EPSIGが公刊した版との書誌的な対応を確定する。

## 調査記録

`wiki/elements/`の全`## 未解決`節を機械的に抽出して252件を確認し、同一の問いが6要素へ波及するheading familyを選んだ。既存の[初期SGML/GML系統の調査](early-sgml-elements.md)を読み、そこで未回収だったAAP DTDとCERN guideを優先した。

SUNETのSGML archiveで`AAP/`ディレクトリ、`README`、`README.first`、`aapbook.dtd`を確認した。DTD内部のpublic identifier、RCS識別子、heading parameter entity、element declarationを照合した。CERNの1992年historical snapshotでは`H1`〜`H6`の列挙、CERN SGML guideからの保持、AAP由来、closing tagという差分を原文で再確認した。

CERN Document Serverの1986年guide PDFはbot challengeにより本文を取得できなかった。検索結果や二次資料からDTD内容を補わず、AAP BK-1と到達可能なCERN／W3C一次資料が直接示す範囲だけを結論にした。
