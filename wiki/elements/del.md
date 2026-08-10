---
status: 完成
---

# `<del>`

## 概要

HTML+は1993年に法案修正の削除部分を表す`REMOVED`を定義し、Dave Raggettは1995年2月22日に法律文書用の`DEL`をHTML 3.0 DTDへ追加した。HTML+からHTML 3.0、その先行作業からHTML 4への継承は集合単位で確認できるが、`REMOVED`から`DEL`への個別改名とHTML 4への個別採録は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、文書からのremovalを表す。`cite`で変更の説明先、`datetime`で変更日時を指定できる。[一次定義](https://html.spec.whatwg.org/multipage/edits.html#the-del-element)（2026-08-09確認）

## HTMLへの導入

HTML+は1993年11月8日に、法律文書や法案修正で削除部分を示すための`REMOVED`を定義した。Raggettは1994年にこれを表示用の`S`と区別したlogical useと説明し、HTML 3.0 DTDの履歴は1995年2月22日に`INS`と`DEL`をlegal documents用に追加したと記録する。3月28日の公開草案は`DEL`をdeleted text用の“New in 3.0”要素とした。[HTML+](../../raw/html-plus/htmlplus_22.html) [Raggettの説明](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/2.html) [HTML 3.0 DTD](https://www.w3.org/MarkUp/html3/html3.dtd) [HTML 3.0 Internet-Draft](https://www.w3.org/MarkUp/html3/html3.txt)

1997年7月8日のHTML 4.0 First Public Working Draftは、別版に対して削除されたsectionをmark upする`DEL`、変更理由を指す`cite`、変更日時の`datetime`を定義した。この版はDTDでinline contentだけを許しながら本文でblock-level contentも許す不整合があったが、10月23日にHTML Working Groupが`INS`と`DEL`のcontent modelを`%flow`とすることを決議し、11月7日のProposed Recommendationが反映した。[First Public Working Draft](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4) [Working Group議事録](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html) [Proposed Recommendation](https://www.w3.org/TR/PR-html40-971107/struct/text.html#h-9.4)

HTML 4.0 Recommendationは`DEL`をHTML 3.2からのnew elementに列挙し、文書変更をmark upする追加だったと記録する。[HTML 4.0 changes](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1)

## HTML直前の祖先

HTML 4の直前に確認できる先行要素はHTML 3.0 `DEL`である。W3CはHTML設計作業がHTML+とHTML 3.0草案からdrawすると説明し、HTML 4編集者もFirst Public Working DraftをCougar草案からrewriteしたと記録するが、`DEL`個別の採録判断とCougar中間版は未確認である。[W3C声明](https://www.w3.org/press-releases/1996/html-leadership/) [編集者告知](https://lists.w3.org/Archives/Public/www-html/1997Jul/0079.html)

## さらに上流の由来

### 証拠

HTML+の`REMOVED`は法案修正で削除されたtextを示し、HTML 3.0保存ページは同仕様がHTML+の先行作業に基づくと記録する。HTML+はこの機構をrevision history用ではないとするが、HTML 4は異なる文書版に対する変更理由と日時まで表すmodelへ広げた。[HTML+](../../raw/html-plus/htmlplus_22.html) [HTML 3.0 materials](https://www.w3.org/MarkUp/html3/) [HTML 4.0 Working Draft](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)

### 解釈

HTML+の`REMOVED`とHTML 3.0の`DEL`は要求と役割が対応するが、集合単位の継承記録から個別改名までは導けない。HTML 4では、法案修正用の対要素を、一般の版間差分と語句・sectionの両方を扱う機構へ拡張したと解釈できる。

## 系譜

法案修正の削除を示す要求 → HTML+ `REMOVED`（1993年）

［HTML+作業からHTML 3.0への集合単位の継承。`REMOVED`から`DEL`への個別改名は未確認］

HTML 3.0 `DEL`（1995年） →［先行作業からHTML 4への集合単位の継承。個別採録は未確認］ HTML 4.0 `DEL`（1997年） → 現行HTML `<del>`

共有経路の詳細: [HTML+から現行HTML要素への共有系譜](../lineages/html-plus.md#document-amendments)

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §5.10 Change Bars and Document Amendments | HTML拡張提案 | 法案修正の削除部分用に`REMOVED`を定義し、revision history用ではないと限定する。 | [一次資料](../../raw/html-plus/htmlplus_22.html) | 2026-08-10 |
| 1994-06-06 | Dave Raggett, “Re: HTML 2.0 Call for Review” | 設計者mail | 表示用の`S`とlogical useの`ADDED`／`REMOVED`を区別する。 | [一次資料](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/2.html) | 2026-08-10 |
| 1995-02-22 | HTML 3.0 DTD history | W3C仕様草案 | Raggettが`INS`と`DEL`をlegal documents用に追加した日と要求を記録する。 | [一次資料](https://www.w3.org/MarkUp/html3/html3.dtd) | 2026-08-10 |
| 1995-03-28 | HTML 3.0 Internet-Draft | IETF仕様草案 | `DEL`をdeleted text用、legal documentsを例とする“New in 3.0”の要素として定義する。 | [一次資料](https://www.w3.org/MarkUp/html3/html3.txt) | 2026-08-10 |
| 1996-03-04 | The W3 Consortium Takes Leadership Role in the Development of HTML | W3C声明 | 後続のHTML設計がHTML+とHTML 3.0草案からdrawすると記録する。 | [一次資料](https://www.w3.org/press-releases/1996/html-leadership/) | 2026-08-10 |
| 1996-12-09（HTTP更新） | HTML 3.0 Draft Materials | W3C保存ページ | HTML 3.0がHTML+の先行作業に基づくと明記する。 | [一次資料](https://www.w3.org/MarkUp/html3/) | 2026-08-10 |
| 1997-07-08 | Dave Raggett, “HTML 4.0 draft available” | 編集者告知の引用保存 | First Public Working DraftをCougar草案からrewriteし、HTML Working Groupの作業とwww-html議論の結果と説明する。 | [一次資料](https://lists.w3.org/Archives/Public/www-html/1997Jul/0079.html) | 2026-08-10 |
| 1997-07-08 | HTML 4.0 Working Draft | W3C仕様草案 | `DEL`、`cite`、`datetime`、版間の削除、draft legislation例。 | [一次資料](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4) | 2026-08-09 |
| 1997-10-23 | W3C HTML Working Group minutes | 標準化議事録 | `INS`／`DEL`のcontent modelをinlineまたはblockの`%flow`とすることを決議する。 | [一次資料](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html) | 2026-08-10 |
| 1997-12-18 | HTML 4.0 Specification | W3C Recommendation | `DEL`をHTML 3.2からのnew elementとし、文書変更markupの目的を記録。 | [一次資料](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §9.4 | W3C Recommendation | `DEL`の定義、attributes、法案例、strike-throughのrendering例。 | [一次資料](https://www.w3.org/TR/html401/struct/text.html#h-9.4) | 2026-08-09 |

## 確度

**A−**

HTML+ `REMOVED`を含む先行作業からHTML 3.0、後続のW3C HTML設計への因果を集合単位で直接確認できるが、`REMOVED`から`DEL`への個別改名、Cougar中間版、HTML 4への個別採録が欠けるため。

## 否定された仮説

`S`／`STRIKE`から`DEL`が派生したという説明。Raggettは表示用の`S`とlogical useの`REMOVED`を明確に分け、HTML 4もpresentationalな`S`／`STRIKE`と文書変更の`DEL`を分ける。特定の法律編集標準やSGML vocabularyからの直接採用は未確認で、HTML+ `CHANGED`もchange barと構造階層をまたぐ範囲指定の別機構である。

## 未解決

- HTML+ `REMOVED`をHTML 3.0 `DEL`へ改名・置換したことを示す1995年2月22日の作業記録は残っているか。
- HTML 3.0 `DEL`をCougarまたはHTML 4へ個別に採録したことを示す議論はあるか。
- `cite`と`datetime`の追加がHTML+ `CHANGED`のBY／WHEN／WHY／WHAT候補または別の編集vocabularyを参照した記録はあるか。
