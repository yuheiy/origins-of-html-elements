---
status: 完成
---

# `<link>`

## 概要

1992年のCERN設計ノートは、textへ局所化されたanchorと区別して文書全体の関係を表す空の`LINK`を新DTD向けに提案し、1993年1月6日版DTDに同要素が現れる。個別の採録記録と、HTML以前の具体的なlink mechanismから採用した因果関係は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、文書を他のresourceへ結び付け、`rel`によって文書とdestination resourceの関係を指定する。link typeに応じてhyperlinkまたはexternal resource linkになる。 [HTML Living Standard](../../raw/html-living-standard/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)、2026-08-09確認）

## HTMLへの導入

Berners-Leeの1992年*Future plans for HTML*は、列挙した改善から新しいDTDが生じるとしたうえで、localized anchorとは異なるdocument-wide linkとして空の`LINK`を提案し、related index、glossary、parent、author、同時印刷・複製などのrelationを用途に挙げる。1993年6月draft収録のRCS id `93/01/06`のDTDは`HEAD`内の空要素`LINK`を宣言し、本文はauthorship、index、glossary、version、tree structureなどを典型用途とする。[Berners-Lee, *Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) [1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

直前の設計上の祖先は、Berners-Leeが新DTD向けの改善として示した同名・同構造の`LINK`提案である。1993年1月6日版DTDは`LINK`をdocument-wide information用wrapperである`HEAD`へ収録するが、改善案から新DTDを作るという説明は一覧全体についてのものであり、`LINK`個別の採録記録は未回収である。

## さらに上流の由来

### 証拠

初期WWWのlink type設計ノートは、node間のauthorship、part／whole、index、glossaryなどのtyped relationを必要としていた。*Future plans for HTML*はこれらを文書全体の`LINK`で表す案を明記する。[Berners-Lee, *Link Types*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html) [Berners-Lee, *Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)

### 解釈

`LINK`は、本文中のtext spanへ結び付かないnode-level relationをHTML documentのheadに記録するための要素として成立したと説明できる。

## 系譜

WWWのdocument-wide typed-link要求 → 新DTD向けHTML `LINK`提案（1992）→ HTML DTD `HEAD`内の`LINK`（1993-01-06）→ 現行HTML `<link>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992（historical snapshot） | [*Link Types*](../../raw/early-www/176c770282bdd8c9-LinkTypes.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)） | CERN設計ノート | node間のpart、authorship、index、glossaryなどのtyped relationを記録する。 | 2026-08-09 |
| 1992-12-02（更新日） | [*Future plans for HTML*](../../raw/early-www/c778b33c842bb160-Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） | CERN設計ノート | localized anchorと異なるdocument-wide linkとして空の`LINK`を提案し、用途と属性を説明する。 | 2026-08-09 |
| 1993-01-06（DTD RCS id） | [*Hypertext Markup Language (HTML)*収録DTD](../../raw/draft-ietf-iiir-html-00/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft内のDTD | `HEAD`内の`LINK`と`HREF`、`REL`、`REV`等の属性を宣言する。 | 2026-08-09 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/html-2.0/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.4)） | IETF Standards Track RFC | `LINK`を`HEAD`内のhyperlinkとして標準化し、典型的なdocument relationを列挙する。 | 2026-08-09 |

## 確度

**A−**

要素単位の同名・同構造proposalと結果のDTD実体を確認できるが、改善案からDTDへの接続は一覧全体についての記述にとどまり、`LINK`個別の採録記録が欠けるため。

## 否定された仮説

ENQUIRE、HyperCard、HyTimeなどのtyped linkまたはnode relationを、機能の類似だけからHTML `LINK`の直接祖先とする説明。

## 未解決

- 1992年提案を1993年1月6日DTDへ採用したrevision recordまたは議論は残っているか。
- document-wide linkのmarkupを特定の先行hypertext systemから採用したことを示す資料はあるか。
