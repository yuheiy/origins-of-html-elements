---
status: 完成
---

# `<ins>`

## 概要

HTML+は1993年に法案修正の追加部分を表す`ADDED`を定義し、Dave Raggettは1995年2月22日に法律文書用の`INS`をHTML 3.0 DTDへ追加した。HTML+からHTML 3.0、その先行作業からHTML 4への継承は集合単位で確認できるが、`ADDED`から`INS`への個別改名とHTML 4への個別採録は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、文書へ追加された部分を表す。`cite`で変更の説明先、`datetime`で変更日時を指定できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/edits.html)（[公開版](https://html.spec.whatwg.org/multipage/edits.html#the-ins-element)、2026-08-09確認）

## HTMLへの導入

HTML+は1993年11月8日に、法律文書や法案修正で追加部分を示すための`ADDED`を定義した。Raggettは1994年にこれを表示用の`S`と区別した論理用途と説明し、HTML 3.0 DTDの履歴は1995年2月22日に`INS`と`DEL`を法律文書用に追加したと記録する。3月28日の公開草案は`INS`を挿入済みテキスト用の“New in 3.0”要素とした。[HTML+](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)） [Raggettの説明](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/2.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/2.html)） [HTML 3.0 DTD](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） [HTML 3.0 Internet-Draft](../../raw/www.w3.org/MarkUp/html3/html3.txt)（[公開元](https://www.w3.org/MarkUp/html3/html3.txt)）

1997年7月8日のHTML 4.0 First Public Working Draftは、別版に対して挿入されたセクションをマークアップする`INS`、変更理由を指す`cite`、変更日時の`datetime`を定義した。この版はDTDで行内内容だけを許しながら本文でブロックレベルの内容も許す不整合があったが、10月23日にHTML Working Groupが`INS`と`DEL`の内容モデルを`%flow`とすることを決議し、11月7日のProposed Recommendationが反映した。[First Public Working Draft](../../raw/www.w3.org/TR/WD-html40-970708/struct/text.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)） [Working Group議事録](../../raw/lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)） [Proposed Recommendation](../../raw/www.w3.org/TR/PR-html40-971107/struct/text.html)（[公開元](https://www.w3.org/TR/PR-html40-971107/struct/text.html#h-9.4)）

HTML 4.0 Recommendationは`INS`をHTML 3.2からの新要素に列挙し、文書変更をマークアップする追加だったと記録する。[HTML 4.0 changes](../../raw/www.w3.org/TR/REC-html40-971218/appendix/changes.html)（[公開元](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1)）

## HTML直前の祖先

HTML 4の直前に確認できる先行要素はHTML 3.0 `INS`である。W3CはHTML設計作業がHTML+とHTML 3.0草案を基礎としていると説明し、HTML 4編集者もFirst Public Working DraftをCougar草案から書き直したと記録するが、`INS`個別の採録判断とCougar中間版は未確認である。[W3C声明](../../raw/www.w3.org/press-releases/1996/html-leadership/__index)（[公開元](https://www.w3.org/press-releases/1996/html-leadership/)） [編集者告知](../../raw/lists.w3.org/Archives/Public/www-html/1997Jul/0079.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1997Jul/0079.html)）

## さらに上流の由来

### 証拠

HTML+の`ADDED`は法案修正で追加されたテキストを示し、HTML 3.0保存ページは同仕様がHTML+の先行作業に基づくと記録する。HTML+はこの機構をリビジョン履歴用ではないとするが、HTML 4は異なる文書版に対する変更理由と日時まで表すモデルへ広げた。[HTML+](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)） [HTML 3.0 materials](../../raw/www.w3.org/MarkUp/html3/__index)（[公開元](https://www.w3.org/MarkUp/html3/)） [HTML 4.0 Working Draft](../../raw/www.w3.org/TR/WD-html40-970708/struct/text.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)）

### 解釈

HTML+の`ADDED`とHTML 3.0の`INS`は要求と役割が対応するが、集合単位の継承記録から個別改名までは導けない。HTML 4では、法案修正用の対要素を、一般の版間差分と語句・セクションの両方を扱う機構へ拡張したと解釈できる。

## 系譜

法案修正の追加を示す要求 → HTML+ `ADDED`（1993年）

［HTML+作業からHTML 3.0への集合単位の継承。`ADDED`から`INS`への個別改名は未確認］

HTML 3.0 `INS`（1995年） →［先行作業からHTML 4への集合単位の継承。個別採録は未確認］HTML 4.0 `INS`（1997年） → 現行HTML `<ins>`

共有経路の詳細: [HTML+から現行HTML要素への共有系譜](../lineages/html-plus.md#document-amendments)

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §5.10 Change Bars and Document Amendments](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)） | HTML拡張提案 | 法案修正の追加部分用に`ADDED`を定義し、リビジョン履歴用ではないと限定する。 | 2026-08-10 |
| 1994-06-06 | [Dave Raggett, “Re: HTML 2.0 Call for Review”](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/2.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/2.html)） | 設計者メール | 表示用の`S`と論理用途の`ADDED`／`REMOVED`を区別する。 | 2026-08-10 |
| 1995-02-22 | [HTML 3.0 DTD history](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） | W3C仕様草案 | Raggettが`INS`と`DEL`を法律文書用に追加した日と要求を記録する。 | 2026-08-10 |
| 1995-03-28 | [HTML 3.0 Internet-Draft](../../raw/www.w3.org/MarkUp/html3/html3.txt)（[公開元](https://www.w3.org/MarkUp/html3/html3.txt)） | IETF仕様草案 | `INS`を挿入済みテキスト用、法律文書を例とする“New in 3.0”の要素として定義する。 | 2026-08-10 |
| 1996-03-04 | [The W3 Consortium Takes Leadership Role in the Development of HTML](../../raw/www.w3.org/press-releases/1996/html-leadership/__index)（[公開元](https://www.w3.org/press-releases/1996/html-leadership/)） | W3C声明 | 後続のHTML設計がHTML+とHTML 3.0草案を基礎とすると記録する。 | 2026-08-10 |
| 1996-12-09（HTTP更新） | [HTML 3.0 Draft Materials](../../raw/www.w3.org/MarkUp/html3/__index)（[公開元](https://www.w3.org/MarkUp/html3/)） | W3C保存ページ | HTML 3.0がHTML+の先行作業に基づくと明記する。 | 2026-08-10 |
| 1997-07-08 | [Dave Raggett, “HTML 4.0 draft available”](../../raw/lists.w3.org/Archives/Public/www-html/1997Jul/0079.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1997Jul/0079.html)） | 編集者告知の引用保存 | First Public Working DraftをCougar草案から書き直しし、HTML Working Groupの作業とwww-html議論の結果と説明する。 | 2026-08-10 |
| 1997-07-08 | [HTML 4.0 Working Draft](../../raw/www.w3.org/TR/WD-html40-970708/struct/text.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)） | W3C仕様草案 | `INS`、`cite`、`datetime`、版間の挿入、草案法令例。 | 2026-08-09 |
| 1997-10-23 | [W3C HTML Working Group minutes](../../raw/lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)） | 標準化議事録 | `INS`／`DEL`の内容モデルを行内またはブロックの`%flow`とすることを決議する。 | 2026-08-10 |
| 1997-12-18 | [HTML 4.0 Specification](../../raw/www.w3.org/TR/REC-html40-971218/appendix/changes.html)（[公開元](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1)） | W3C Recommendation | `INS`をHTML 3.2からの新要素とし、文書変更マークアップの目的を記録。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01 §9.4](../../raw/www.w3.org/TR/html401/struct/text.html)（[公開元](https://www.w3.org/TR/html401/struct/text.html#h-9.4)） | W3C Recommendation | `INS`の定義、属性、法案例。 | 2026-08-09 |

## 確度

**A−**

HTML+ `ADDED`を含む先行作業からHTML 3.0、後続のW3C HTML設計への因果を集合単位で直接確認できるが、`ADDED`から`INS`への個別改名、Cougar中間版、HTML 4への個別採録が欠けるため。

## 否定された仮説

特定の法律編集標準やSGML語彙から直接採用したという説明。HTML+は取り消し線と下線を法案修正の一般的表示慣習とするが、特定の標準やツールへは帰属しない。HTML+ `CHANGED`は変更バーと構造階層をまたぐ範囲指定の別機構であり、`INS`へ分割された記録はない。

## 未解決

- HTML+ `ADDED`をHTML 3.0 `INS`へ改名・置換したことを示す1995年2月22日の作業記録は残っているか。
- HTML 3.0 `INS`をCougarまたはHTML 4へ個別に採録したことを示す議論はあるか。
- `cite`と`datetime`の追加がHTML+ `CHANGED`のBY／WHEN／WHY／WHAT候補または別の編集語彙を参照した記録はあるか。
