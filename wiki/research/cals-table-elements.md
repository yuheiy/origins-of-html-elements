# CALSとHTMLの表構造要素

## 結論

敵対的レビューでRFC化前のIETF改訂系列を確認した。`thead`、`tbody`、`tfoot`の最初の確認可能なHTML仕様上の出現はDave Raggettによる`draft-ietf-html-tables-00`（1995年7月7日）、`col`は`-01`（1995年10月3日）、`colgroup`は`-03`（1995年10月27日）である。RFC 1942（1996年5月）はこの系列をRFC化した。HTML 3.2（1997年1月14日）のDTDは5要素を含まず、HTML 4.01の変更付録が5要素をHTML 3.2からの新要素として列挙するため、Recommendationへの採録はHTML 4で確認できる。[IETF改訂履歴](https://datatracker.ietf.org/doc/draft-ietf-html-tables/history/)（2026-08-09閲覧）[RFC 1942, 1996-05](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）[HTML 3.2, 1997-01-14](../../raw/html-3.2/index.html)（[外部URL](https://www.w3.org/TR/REC-html32)、2026-08-09閲覧）[HTML 4.01, 1999-12-24, Changes](../../raw/html-4.01/appendix/changes.html)（[外部URL](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)、2026-08-09閲覧）

1995年7月の`-00`は、CALS table modelのfeaturesを取り込み、表の行を`thead`、`tbody`、`tfoot`へ分けると明記する。したがってCALSの行区分設計から三要素を含むHTML proposalへの因果関係はRFC化前から直接確認できる。ただし、今回の資料はCALS側の具体的な要素名やDTDを収録していないため、三つのHTML要素名そのものをCALSから借用したとは確定しない。[IETF `draft-ietf-html-tables-00`, 1995-07-07](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)（2026-08-09閲覧）

`col`は、`-00`の`COLW`に続く`-01`でcolumn-based defaultsとwidth／alignment propertiesを指定する空要素として現れる。`COLW`からの改名・採用理由は明記されないため、両者を確定矢印では結ばない。`colgroup`は`-03`がnew elementと明記し、旧`COL`の`SPAN`では対象columnsを同じwidthにする必要があった制約を避け、group内の各columnへ異なるpropertiesを与えるcontainerとして導入する。CALSとの直接関係はimport要件と相対幅記法までに限定し、要素名や分割そのものをCALSから採ったとはしない。[IETF `draft-ietf-html-tables-01`, 1995-10-03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01) [IETF `draft-ietf-html-tables-03`, 1995-10-27](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03)（2026-08-09閲覧）

## 証拠

### HTMLへの導入

IETFのtable draft改訂系列は`-00`で`thead`／`tbody`／`tfoot`、`-01`で`col`、`-03`で`colgroup`を定義し、RFC 1942が5要素を含むmodelをRFC化した。RFC 1942はtable model全体がHTML+とinitial HTML 3 draftから発展したとも述べるが、HTML+のsimple modelとして列挙するのはcaption、rows、header/data cells、row/column spanである。この記述だけでは対象5要素をHTML+に個別対応させられない。[IETF改訂履歴](https://datatracker.ietf.org/doc/draft-ietf-html-tables/history/) [RFC 1942](../../raw/rfc1942-html-tables/rfc1942.txt)（2026-08-09閲覧）

HTML 3.2はRFC 1942のwidely deployed subsetを採用したと明記する一方、本文とDTDのtable content modelは`(caption?, tr+)`であり、対象5要素を定義しない。また参考文献欄はRFC 1942をHTML 3.2のtable modelのsupersetと説明する。したがって、RFC 1942で提案済みだったことと、HTML 3.2 Recommendationに採録されたことを同一視してはならない。[HTML 3.2, 1997-01-14, Tables / DTD / References](../../raw/html-3.2/index.html)（[外部URL](https://www.w3.org/TR/REC-html32#table)、2026-08-09閲覧）

HTML 4.01はDTDと表の章で5要素を定義し、変更付録で`COL`、`COLGROUP`、`TBODY`、`TFOOT`、`THEAD`をHTML 3.2からのnew elementsに列挙する。RFC 1942からHTML 4への個別の採録議論は今回の資料群にないため、確認できるのは同じ仕様語彙がRFC 1942より後のHTML 4で標準採録されたという時系列までである。[HTML 4.01, 1999-12-24, Tables](../../raw/html-4.01/struct/tables.html)（[外部URL](https://www.w3.org/TR/html401/struct/tables.html)、2026-08-09閲覧）[HTML 4.01, 1999-12-24, Changes](../../raw/html-4.01/appendix/changes.html)（[外部URL](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)、2026-08-09閲覧）

### `thead`、`tbody`、`tfoot`

1995年7月の`-00`は`thead`、`tfoot`、`tbody`を定義し、large tableのscrolling body、paged outputでのhead/footerの反復、row group単位のrenderingを説明する。RFC 1942はこのmodelを改訂し、`tfoot`を`tbody`より先に置いて全data受信前にfootをrenderする最適化も明記する。[IETF `draft-ietf-html-tables-00`](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00) [RFC 1942](../../raw/rfc1942-html-tables/rfc1942.txt)（2026-08-09閲覧）

`-00`とRFC 1942はこのrow groupingをCALS table modelから取り込んだと明記する。これは行区分という設計上の因果関係を直接示すが、CALS側にも`THEAD`、`TBODY`、`TFOOT`という同名要素があったことを示さない。[IETF `draft-ietf-html-tables-00`](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00) [RFC 1942](../../raw/rfc1942-html-tables/rfc1942.txt)（2026-08-09閲覧）

HTML 4.01では三要素がrow groupを表し、head/body/foot divisionがscrollingとpaged outputに利用できるというRFC 1942の用途を保持する。2026年7月20日更新のLiving Standardでは、`thead`はcolumn labelsと付随cellからなるrow block、`tbody`はbody dataからなるrow block、`tfoot`はcolumn summariesからなるrow blockを表す。[HTML 4.01, 1999-12-24, Row groups](../../raw/html-4.01/struct/tables.html)（[外部URL](https://www.w3.org/TR/html401/struct/tables.html#h-11.2.3)、2026-08-09閲覧）[WHATWG HTML Living Standard, 2026-07-20](../../raw/html-living-standard/tables.html)（[外部URL](https://html.spec.whatwg.org/multipage/tables.html)、2026-08-09閲覧）

### `col`、`colgroup`

`-00`はcolumn width用に`COLW`を使い、`-01`はtable dataより前にcolumn-based defaultsを指定する`COL`へmodelを変更した。`-03`は、旧`COL`によるgroupingでは各columnを同じwidthにする制約を避けるため`COLGROUP`をnew elementとして導入した。RFC 1942はこのmodelを継承する。[IETF `draft-ietf-html-tables-00`](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00) [IETF `-01`](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01) [IETF `-03`](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03)（2026-08-09閲覧）

RFC 1942はCALSとの関係として、table model全体がCALSの「sets of cells according to the context」へのcompactなalignment指定をembodyすること、CALS tableのimport簡略化が設計上のsubsidiary goalであること、`col`／`colgroup`の`width="*"`記法がCALS representationからのimportを簡単にすることを述べる。この証拠はCALSからの変換要件と相対幅記法への影響を支えるが、alignment設計を`col`／`colgroup`だけへ個別対応させることや、両要素の名称または要素分割そのもののCALS由来は支えない。[RFC 1942, 1996-05, Abstract / Recent Changes / Standard units / COLGROUP / COL](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）

HTML 4.01は`colgroup`を明示的なcolumn group、`col`をcolumn group内の一つ以上のcolumnを共有する属性指定として扱い、両要素による事前のcolumn properties宣言がincremental renderingを可能にすると説明する。Living Standardでは`colgroup`は親table内の一つ以上のcolumn group、`col`はそのgroup内の一つ以上のcolumnsを表す。[HTML 4.01, 1999-12-24, Column groups](../../raw/html-4.01/struct/tables.html)（[外部URL](https://www.w3.org/TR/html401/struct/tables.html#h-11.2.4)、2026-08-09閲覧）[WHATWG HTML Living Standard, 2026-07-20](../../raw/html-living-standard/tables.html)（[外部URL](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element)、2026-08-09閲覧）

## 解釈

史料で安全に結べる関係と、時系列上は隣接するが採録因果を確認できない区間は次のとおりである。未確認区間を矢印で補わない。

```text
CALSのhead/body/foot row groupingとfoot-before-body最適化
  → IETF table draft-00 THEAD/TBODY/TFOOT
  → RFC 1942 THEAD/TBODY/TFOOT

[RFC 1942からの個別採録記録は未確認]

HTML 4 THEAD/TBODY/TFOOT
  → 現行HTML thead/tbody/tfoot

CALSからのimport要件
  → IETF table draft系列／RFC 1942 COL/COLGROUPの相対幅記法

draft-00 COLW [改名・採用因果は未確認] draft-01 COL

draft-01 COLのgroup model上の制約
  → draft-03 COLGROUP

RFC 1942 table model全体のcontext依存alignmentにはCALSの影響あり

[RFC 1942 COL/COLGROUPの具体祖先、およびRFC 1942からの個別採録記録は未確認]

HTML 4 COL/COLGROUP
  → 現行HTML col/colgroup
```

5要素の個別ページに適用する場合、推奨確度は`thead`／`tbody`／`tfoot`がA−、`col`／`colgroup`がBである。前者はCALSから1995年草案への因果が直接確認できるものの、三要素をまとめた集合単位でありCALS側の個別対応が未確認である。`col`は`COLW`との採用関係とHTML 4への個別採録が未確認である。`colgroup`は旧`COL` modelの制約からの導入因果を確認できるが、HTML外の具体的祖先とHTML 4への個別採録が欠ける。

## 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-07-07 | `draft-ietf-html-tables-00` | IETF Internet-Draft | CALS由来のrow groupingと`THEAD`／`TBODY`／`TFOOT`、`COLW`を定義。 | https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00 | 2026-08-09 |
| 1995-10-03 | `draft-ietf-html-tables-01` | IETF Internet-Draft | `COL`をcolumn-based defaults用の空要素として定義。 | https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01 | 2026-08-09 |
| 1995-10-27 | `draft-ietf-html-tables-03` | IETF Internet-Draft | 旧`COL` groupingの制約を解決するnew `COLGROUP`を導入。 | https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03 | 2026-08-09 |
| 1996-05 | [RFC 1942: HTML Tables](../../raw/rfc1942-html-tables/rfc1942.txt) | Experimental RFC | 対象5要素のDTD、導入目的、CALSとの明示的な関係、HTML+／HTML 3初期draftからのtable model全体の発展。 | https://www.rfc-editor.org/rfc/rfc1942.html | 2026-08-09 |
| 1997-01-14 | [HTML 3.2 Reference Specification](../../raw/html-3.2/index.html) | W3C Recommendation | RFC 1942のsubsetを採るが、対象5要素を含まないtable model。 | https://www.w3.org/TR/REC-html32 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01, Tables](../../raw/html-4.01/struct/tables.html) | W3C Recommendation | 対象5要素の定義と用途、row／column grouping、incremental rendering。 | https://www.w3.org/TR/html401/struct/tables.html | 2026-08-09 |
| 1999-12-24 | [HTML 4.01, Changes](../../raw/html-4.01/appendix/changes.html) | W3C Recommendation付録 | 対象5要素をHTML 3.2からHTML 4へのnew elementsとして列挙する。 | https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1 | 2026-08-09 |
| 2026-07-20 | [WHATWG HTML Living Standard, Tables](../../raw/html-living-standard/tables.html) | Living Standard snapshot | 現行5要素が表すrow block、column group、columns。 | https://html.spec.whatwg.org/multipage/tables.html | 2026-08-09 |

## 否定された仮説

- HTML 3.2がRFC 1942のsubsetを採用したため対象5要素もHTML 3.2に入った、とはしない。HTML 3.2のDTDが反証する。
- RFC 1942がtable model全体をHTML+／HTML 3初期draftから発展させたため対象5要素もHTML+に存在した、とはしない。RFCがHTML+のsimple modelとして説明する範囲に対象5要素は含まれない。
- `thead`、`tbody`、`tfoot`という名称をCALSからそのまま借用した、とはしない。確認できるのはhead/body/foot row groupingという設計の採用までである。
- `col`、`colgroup`要素そのものがCALS由来、とはしない。確認できるのはCALS import、相対幅記法、contextに応じたproperties指定への影響までである。

## 未解決

- `draft-ietf-html-tables-00`より前にrow-group三要素を提案した議論と、`COLW`から`COL`へ変更した議論は残っているか。
- CALS table modelのどの版・DTDをRFC 1942が参照し、そこにhead/body/footとcolumn specificationがどの要素名で定義されていたか。
- `col`の名称と`colgroup`の名称を決めた具体的な議論は残っているか。
- RFC 1942からHTML 4へ対象5要素を採録した個別の議論・決定記録は残っているか。
