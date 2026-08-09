# `<ins>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML 3.0での初出とHTML 4での標準化を検証済み（両版の個別採用因果とHTML外の祖先は未確認）

## 概要

1995年HTML 3.0でinserted text用のnew elementとして確認でき、1997年HTML 4.0が別版の文書に対して挿入された箇所をmachine-readableにmark upする要素として標準化した。両版の個別採用因果とHTML外の具体的祖先は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、文書へのadditionを表す。`cite`で変更の説明先、`datetime`で変更日時を指定できる。[一次定義](https://html.spec.whatwg.org/multipage/edits.html#the-ins-element)（2026-08-09確認）

## HTMLへの導入

1995年3月のHTML 3.0 Draftは`INS`をinserted text用、legal documentsを例とする“New in 3.0”の要素として定義する。1997年7月8日のHTML 4.0 Working Draftは“Marking document changes”節に`INS`を収録し、別版の文書に対して挿入されたsectionをmark upすると定義した。draft legislationの変更例、inlineまたはblock-level contentを囲む構造、変更理由を指す`cite`、変更日時の`datetime`も規定した。ただしHTML 3.0案からHTML 4案への`INS`個別の採用記録は未確認である。[HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.0 Working Draft](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)

HTML 4.0 Recommendationは`INS`をHTML 3.2からのnew elementに列挙し、文書変更をmark upする追加だったと記録する。[HTML 4.0 changes](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1)

## HTML直前の祖先

最初期に確認できる先行要素はHTML 3.0 `INS`だが、HTML 4がこれを個別に採用したと述べる資料は未確認である。特定のHTML外markup vocabulary、word processor、法律編集体系、または版管理systemからの採用因果も確認できない。

## さらに上流の由来

### 証拠

HTML 3.0草案はinserted textとlegal documentsの用途を示し、HTML 4.0草案は版間で挿入された箇所を記録する設計とdraft legislationのuse caseを示す。[HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.0 Working Draft](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)

### 解釈

法律文書は確認できる用途例だが、法律編集慣習を採用元とする証拠ではない。HTML 3.0とHTML 4.0の同名・同用途も個別採用を単独では証明しない。

## 系譜

HTML 3.0 `INS`（1995年）

［HTML 4への個別採用因果は未確認］

版間の文書挿入をmark upする要求 → HTML 4.0 `INS`（1997年） → 現行HTML `<ins>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-03 | HTML 3.0: Information Type Elements | W3C仕様草案 | `INS`をinserted text用、legal documentsを例とする“New in 3.0”の要素として定義する。 | [一次資料](https://www.w3.org/MarkUp/html3/logical.html) | 2026-08-09 |
| 1997-07-08 | HTML 4.0 Working Draft | W3C仕様草案 | `INS`、`cite`、`datetime`、版間の挿入、draft legislation例。 | [一次資料](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 Specification | W3C Recommendation | `INS`をHTML 3.2からのnew elementとし、文書変更markupの目的を記録。 | [一次資料](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §9.4 | W3C Recommendation | `INS`の定義、attributes、法案例。 | [一次資料](https://www.w3.org/TR/html401/struct/text.html#h-9.4) | 2026-08-09 |

## 確度

**B**

HTML 3.0での初出・用途とHTML 4での標準化理由・設計modelは確認できるが、両版の個別採用因果と具体的なHTML外祖先は確認できないため。

## 否定された仮説

法律のredlining慣習または特定SGML edit vocabularyから直接採用したという説明。draft legislationはuse caseだが、採用元との記述はない。また、同名・同用途だけからHTML 3.0 `INS`→HTML 4 `INS`の個別採用を断定しない。

## 未解決

- HTML 3.0 `INS`をHTML 4へ個別に採用したことを示すHTML ERB／W3C HTML Working Groupの議論はあるか。
- `cite`と`datetime`の設計が参照した版管理、法律編集、SGML vocabularyはあるか。
- inlineとblockの両方を囲めるcontent modelを選んだ具体的要求は何か。

## 調査記録

HTML 3.0、1997年HTML 4.0草案・Recommendation、HTML 4.01、現行Living Standardを確認した。横断比較は[Text/structure/edits要素の調査ノート](../research/text-structure-edits-elements.md)を参照する。

2026-08-09の敵対的レビューでは、HTML 4.0 FPWDの文書変更節、changes付録、法案例を再読し、HTML 3.0にも同名`INS`があることを早い版の反例として確認した。初出をHTML 3.0へ訂正し、未確認のHTML 3.0→HTML 4接続を系譜から外した。訂正後に再読し、導入理由は確認できるが個別採用因果は欠けるためB判定を維持し、本文・証拠表・系譜・未解決点の整合を確認した。
