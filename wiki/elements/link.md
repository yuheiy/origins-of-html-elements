# `<link>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。1992年の`LINK`提案からの系譜を検証済み（DTD採録までのchange recordは未回収）

## 概要

1992年のCERN設計ノートは、textへ局所化されたanchorと区別して、文書全体の関係を表す空の`LINK`要素を提案する。1993年1月6日版DTDで同要素を確認できるが、HTML以前の具体的なlink mechanismから採用した因果関係は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、文書を他のresourceへ結び付け、`rel`によって文書とdestination resourceの関係を指定する。link typeに応じてhyperlinkまたはexternal resource linkになる。 [一次定義](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)（2026-08-09確認）

## HTMLへの導入

Berners-Leeの1992年*Future plans for HTML*は、localized anchorとは異なるdocument-wide linkとして`LINK`を提案し、related index、glossary、parent、author、同時印刷・複製などのrelationを用途に挙げる。1993年6月draft収録のRCS id `93/01/06`のDTDは`HEAD`内の空要素`LINK`を宣言し、本文はauthorship、index、glossary、version、tree structureなどを典型用途とする。[Berners-Lee, *Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) [1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

直前の設計上の祖先は、Berners-Leeが1992年の*Future plans for HTML*で示した同名・同構造の`LINK`提案である。提案から1993年1月6日DTDへの採録を明記するchange recordは未回収である。

## さらに上流の由来

### 証拠

初期WWWのlink type設計ノートは、node間のauthorship、part／whole、index、glossaryなどのtyped relationを必要としていた。*Future plans for HTML*はこれらを文書全体の`LINK`で表す案を明記する。[Berners-Lee, *Link Types*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html) [Berners-Lee, *Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)

### 解釈

`LINK`は、本文中のtext spanへ結び付かないnode-level relationをHTML documentのheadに記録するための要素として成立したと説明できる。

## 系譜

WWWのdocument-wide typed-link要求 → HTML `LINK`提案（1992）→ HTML DTD `LINK`（1993-01-06）→ 現行HTML `<link>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992（historical snapshot） | *Link Types* | CERN設計ノート | node間のpart、authorship、index、glossaryなどのtyped relationを記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html) | 2026-08-09 |
| 1992-12-02（更新日） | *Future plans for HTML* | CERN設計ノート | localized anchorと異なるdocument-wide linkとして空の`LINK`を提案し、用途と属性を説明する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) | 2026-08-09 |
| 1993-01-06（DTD RCS id） | *Hypertext Markup Language (HTML)*収録DTD | IETF Internet-Draft内のDTD | `HEAD`内の`LINK`と`HREF`、`REL`、`REV`等の属性を宣言する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |
| 1995-11 | RFC 1866: *Hypertext Markup Language - 2.0* | IETF Standards Track RFC | `LINK`を`HEAD`内のhyperlinkとして標準化し、典型的なdocument relationを列挙する。 | [RFC Editor](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.4) | 2026-08-09 |

## 確度

**A−**

要素単位の同名proposalと直後のDTD実体を確認できるが、提案からDTDへの採録を明記する中間記録が欠けるため。

## 否定された仮説

ENQUIRE、HyperCard、HyTimeなどのtyped linkまたはnode relationを、機能の類似だけからHTML `LINK`の直接祖先とする説明。

## 未解決

- 1992年提案を1993年1月6日DTDへ採用したrevision recordまたは議論は残っているか。
- document-wide linkのmarkupを特定の先行hypertext systemから採用したことを示す資料はあるか。

## 調査記録

WWWのlink type設計ノート、1992年CERN将来計画、1992年Connolly DTD群、1993年HTML Internet-Draft本文・DTD、HTML 2.0を確認した。localized `A`とdocument-wide `LINK`を区別し、先行systemとの類似は系譜へ接続しなかった。対象群全体は[初期hypertext／document control調査ノート](../research/early-hypertext-elements.md)を参照する。

2026-08-09の敵対的レビューでは、1992年CERNのlink type設計、Berners-Leeの`LINK`提案、Connolly DTD群、1993年draftを日付順に再読した。提案からDTD採録までのchange recordと特定先行systemは未回収であり、確認区間と欠落を分けるA−判定を維持した。
