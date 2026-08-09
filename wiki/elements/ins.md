# `<ins>`

> 状態: HTML 4での導入目的を検証済み（HTML外の具体的祖先は未解決）

## 概要

HTML 4.0で、別版の文書に対して挿入された箇所をmachine-readableにmark upするため導入された。導入目的は確認できるが、特定の編集体系、word processor、またはSGML vocabularyから採用した因果は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、文書へのadditionを表す。`cite`で変更の説明先、`datetime`で変更日時を指定できる。[一次定義](https://html.spec.whatwg.org/multipage/edits.html#the-ins-element)（2026-08-09確認）

## HTMLへの導入

1997年7月8日のHTML 4.0 Working Draftは“Marking document changes”節に`INS`を収録し、別版の文書に対して挿入されたsectionをmark upすると定義した。draft legislationの変更例、inlineまたはblock-level contentを囲む構造、変更理由を指す`cite`、変更日時の`datetime`も規定した。[HTML 4.0 Working Draft](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)

HTML 4.0 Recommendationは`INS`をHTML 3.2からのnew elementに列挙し、文書変更をmark upする追加だったと記録する。[HTML 4.0 changes](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1)

## HTML直前の祖先

未確認。特定の先行markup vocabulary、word processor、法律編集体系、または版管理systemから採用した因果は確認できない。

## さらに上流の由来

### 証拠

HTML 4.0草案は、版間で挿入された箇所を記録する設計とdraft legislationのuse caseを示す。[HTML 4.0 Working Draft](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)

### 解釈

法律文書は確認できる用途例だが、法律編集慣習を採用元とする証拠ではない。確定できる系譜はHTML 4.0から始める。

## 系譜

版間の文書挿入をmark upする要求 → HTML 4.0 `INS`（1997年） → 現行HTML `<ins>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-07-08 | HTML 4.0 Working Draft | W3C仕様草案 | `INS`、`cite`、`datetime`、版間の挿入、draft legislation例。 | [一次資料](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 Specification | W3C Recommendation | `INS`をHTML 3.2からのnew elementとし、文書変更markupの目的を記録。 | [一次資料](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 §9.4 | W3C Recommendation | `INS`の定義、attributes、法案例。 | [一次資料](https://www.w3.org/TR/html401/struct/text.html#h-9.4) | 2026-08-09 |

## 確度

**B**

W3C HTML Working Groupによる導入理由と設計modelは確認できるが、具体的な先行物からの採用因果は確認できないため。

## 否定された仮説

法律のredlining慣習または特定SGML edit vocabularyから直接採用したという説明。draft legislationはuse caseだが、採用元との記述はない。

## 未解決

- 1997年7月草案以前の提案者、HTML ERB／W3C HTML Working Groupでの採択議論はあるか。
- `cite`と`datetime`の設計が参照した版管理、法律編集、SGML vocabularyはあるか。
- inlineとblockの両方を囲めるcontent modelを選んだ具体的要求は何か。

## 調査記録

1997年HTML 4.0草案・Recommendation、HTML 4.01、現行Living Standardを確認した。横断比較は[Text/structure/edits要素の調査ノート](../research/text-structure-edits-elements.md)を参照する。
