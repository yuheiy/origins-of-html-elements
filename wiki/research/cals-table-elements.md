# CALSとHTMLの表構造要素

## 結論

今回確認した資料群では、`thead`、`tbody`、`tfoot`、`col`、`colgroup`の最初の確認可能なHTML仕様上の出現は、Dave RaggettによるExperimental RFC 1942（1996年5月）である。HTML 3.2（1997年1月14日）はRFC 1942の「widely deployed subset」を採録したが、そのDTDは`table`、`caption`、`tr`、`th`、`td`だけを含み、この5要素を含まない。HTML 4.01の変更付録は5要素をHTML 3.2からHTML 4への新要素として列挙するため、標準への採録はHTML 4で確認できる。[RFC 1942, 1996-05](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）[HTML 3.2, 1997-01-14](../../raw/html-3.2/index.html)（[外部URL](https://www.w3.org/TR/REC-html32)、2026-08-09閲覧）[HTML 4.01, 1999-12-24, Changes](../../raw/html-4.01/appendix/changes.html)（[外部URL](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)、2026-08-09閲覧）

RFC 1942は、CALS table modelにならって表の行をhead、body、footへ分けることと、footをbodyより先に記す長大表向けの最適化を採用したと明記する。したがって、CALSの行区分設計からRFC 1942の`thead`／`tbody`／`tfoot`への因果関係は直接確認できる。ただし、今回の資料はCALS側の具体的な要素名やDTDを収録していないため、三つのHTML要素名そのものをCALSから借用したとは確定しない。[RFC 1942, 1996-05, Abstract / Design Rationale](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）

`col`／`colgroup`についてRFC 1942が要素単位で直接述べるCALSとの関係は、両要素の相対幅記法がCALS表のimportを簡単にすることである。RFCはtable model全体について、CALSにならったcontext依存の一括alignmentも挙げ、`colgroup`を列集合へ幅・alignment propertyを与える新要素として導入したと述べるが、`col`または`colgroup`という要素自体をCALSから採ったとは述べない。RFC 1942はHTML 4より前に両要素を定義した確認済みの提案だが、HTML 4がRFC 1942から両要素を採録した個別記録は未確認であるため、HTML直前の具体的祖先は確定しない。その上流に置けるCALSは機能・変換要件への影響までに限定する。[RFC 1942, 1996-05, Abstract / Recent Changes / COLGROUP / COL](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）

## 証拠

### HTMLへの導入

RFC 1942はHTMLをtablesへ拡張する仕様であり、DTDに`thead`、`tfoot`、`tbody`、`colgroup`、`col`を定義する。文書はtable model全体がHTML+の初期作業とHTML 3のinitial draftから発展したとも述べるが、HTML+のsimple modelとして列挙するのはcaption、rows、header/data cells、row/column spanである。この記述だけでは、対象5要素をHTML+に個別対応させられない。[RFC 1942, 1996-05, Abstract / Recent Changes / Design Rationale / HTML Table DTD](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）

HTML 3.2はRFC 1942のwidely deployed subsetを採用したと明記する一方、本文とDTDのtable content modelは`(caption?, tr+)`であり、対象5要素を定義しない。また参考文献欄はRFC 1942をHTML 3.2のtable modelのsupersetと説明する。したがって、RFC 1942で提案済みだったことと、HTML 3.2 Recommendationに採録されたことを同一視してはならない。[HTML 3.2, 1997-01-14, Tables / DTD / References](../../raw/html-3.2/index.html)（[外部URL](https://www.w3.org/TR/REC-html32#table)、2026-08-09閲覧）

HTML 4.01はDTDと表の章で5要素を定義し、変更付録で`COL`、`COLGROUP`、`TBODY`、`TFOOT`、`THEAD`をHTML 3.2からのnew elementsに列挙する。RFC 1942からHTML 4への個別の採録議論は今回の資料群にないため、確認できるのは同じ仕様語彙がRFC 1942より後のHTML 4で標準採録されたという時系列までである。[HTML 4.01, 1999-12-24, Tables](../../raw/html-4.01/struct/tables.html)（[外部URL](https://www.w3.org/TR/html401/struct/tables.html)、2026-08-09閲覧）[HTML 4.01, 1999-12-24, Changes](../../raw/html-4.01/appendix/changes.html)（[外部URL](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)、2026-08-09閲覧）

### `thead`、`tbody`、`tfoot`

RFC 1942のDTDは`thead`をtable header、`tfoot`をtable footer、`tbody`をtable bodyとして定義する。本文は、これらをlarge tableのscrolling body、paged outputでのhead/footerの反復、複数bodyのrow groupingに使えると説明し、`tfoot`を`tbody`より先に置くことで全dataの受信前にfootをrenderできるとする。[RFC 1942, 1996-05, Table Head, Foot and Body Elements / HTML Table DTD](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）

RFC 1942はこのrow groupingを「Following the CALS table model」と明記し、foot-before-bodyをCALSと共有する長大表向けの最適化と説明する。これは行区分という設計上の因果関係を直接示すが、CALS側にも`THEAD`、`TBODY`、`TFOOT`という同名要素があったことを、この資料単独では示さない。[RFC 1942, 1996-05, Abstract / Design Rationale](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）

HTML 4.01では三要素がrow groupを表し、head/body/foot divisionがscrollingとpaged outputに利用できるというRFC 1942の用途を保持する。2026年7月20日更新のLiving Standardでは、`thead`はcolumn labelsと付随cellからなるrow block、`tbody`はbody dataからなるrow block、`tfoot`はcolumn summariesからなるrow blockを表す。[HTML 4.01, 1999-12-24, Row groups](../../raw/html-4.01/struct/tables.html)（[外部URL](https://www.w3.org/TR/html401/struct/tables.html#h-11.2.3)、2026-08-09閲覧）[WHATWG HTML Living Standard, 2026-07-20](../../raw/html-living-standard/tables.html)（[外部URL](https://html.spec.whatwg.org/multipage/tables.html)、2026-08-09閲覧）

### `col`、`colgroup`

RFC 1942はincremental displayに先立ってcolumn widthを知らせるため、table dataより前の一つ以上の`col`を設計に使う。`col`は一つ以上のcolumnへpropertiesを設定する空要素で、`colgroup`はcolumn集合のcontainerとしてdefault propertiesを設定する。RFCのRecent Changesは、列集合へ異なるwidthとalignment propertiesを与えるため`colgroup`を「new element」として導入したと明記する。[RFC 1942, 1996-05, Design Rationale / Recent Changes / COLGROUP / COL](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）

RFC 1942はCALSとの関係として、table model全体がCALSの「sets of cells according to the context」へのcompactなalignment指定をembodyすること、CALS tableのimport簡略化が設計上のsubsidiary goalであること、`col`／`colgroup`の`width="*"`記法がCALS representationからのimportを簡単にすることを述べる。この証拠はCALSからの変換要件と相対幅記法への影響を支えるが、alignment設計を`col`／`colgroup`だけへ個別対応させることや、両要素の名称または要素分割そのもののCALS由来は支えない。[RFC 1942, 1996-05, Abstract / Recent Changes / Standard units / COLGROUP / COL](../../raw/rfc1942-html-tables/rfc1942.txt)（[外部URL](https://www.rfc-editor.org/rfc/rfc1942.html)、2026-08-09閲覧）

HTML 4.01は`colgroup`を明示的なcolumn group、`col`をcolumn group内の一つ以上のcolumnを共有する属性指定として扱い、両要素による事前のcolumn properties宣言がincremental renderingを可能にすると説明する。Living Standardでは`colgroup`は親table内の一つ以上のcolumn group、`col`はそのgroup内の一つ以上のcolumnsを表す。[HTML 4.01, 1999-12-24, Column groups](../../raw/html-4.01/struct/tables.html)（[外部URL](https://www.w3.org/TR/html401/struct/tables.html#h-11.2.4)、2026-08-09閲覧）[WHATWG HTML Living Standard, 2026-07-20](../../raw/html-living-standard/tables.html)（[外部URL](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element)、2026-08-09閲覧）

## 解釈

史料で安全に結べる関係と、時系列上は隣接するが採録因果を確認できない区間は次のとおりである。未確認区間を矢印で補わない。

```text
CALSのhead/body/foot row groupingとfoot-before-body最適化
  → RFC 1942 THEAD/TBODY/TFOOT

[RFC 1942からの個別採録記録は未確認]

HTML 4 THEAD/TBODY/TFOOT
  → 現行HTML thead/tbody/tfoot

CALSからのimport要件
  → RFC 1942 COL/COLGROUPの相対幅記法

RFC 1942 table model全体のcontext依存alignmentにはCALSの影響あり

[RFC 1942 COL/COLGROUPの具体祖先、およびRFC 1942からの個別採録記録は未確認]

HTML 4 COL/COLGROUP
  → 現行HTML col/colgroup
```

5要素の個別ページに適用する場合、推奨確度は`thead`／`tbody`／`tfoot`がA−、`col`／`colgroup`がBである。前者はCALSからRFC 1942への因果が直接確認できるものの、三要素をまとめた集合単位の記述であり、CALS側の個別要素との対応とRFC 1942からHTML 4への採録記録が未確認である。後者はRFC 1942への導入理由とCALS変換上の要件を確認できるが、具体的な先行要素から各HTML要素への因果関係を確認できない。

## 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
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

- RFC 1942より前のHTML 3 draft群で、対象5要素がそれぞれ最初に現れる版と提案者はどれか。
- CALS table modelのどの版・DTDをRFC 1942が参照し、そこにhead/body/footとcolumn specificationがどの要素名で定義されていたか。
- `col`と`colgroup`の要素分割および名称を決めた具体的な議論は残っているか。
- RFC 1942からHTML 4へ対象5要素を採録した個別の議論・決定記録は残っているか。
