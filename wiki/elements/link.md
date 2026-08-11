---
status: 完成
---

# `<link>`

## 概要

1992年のCERN設計ノートは、テキストへ局所化されたアンカーと区別して文書全体の関係を表す空の`LINK`を新DTD向けに提案し、1993年1月6日版DTDに同要素が現れる。個別の採録記録と、HTML以前の具体的なリンク仕組みから採用した因果関係は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、文書を他のリソースへ結び付け、`rel`によって文書と行き先リソースの関係を指定する。リンク種別に応じてハイパーリンクまたは外部リソースリンクになる。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)、2026-08-09確認）

## HTMLへの導入

Berners-Leeの1992年*Future plans for HTML*は、列挙した改善から新しいDTDが生じるとしたうえで、局所的なアンカーとは異なる文書全体のリンクとして空の`LINK`を提案し、関連索引、用語集、親、著者、同時印刷・複製などの関係を用途に挙げる。1993年6月草案収録のRCS id `93/01/06`のDTDは`HEAD`内の空要素`LINK`を宣言し、本文は著者情報、索引、用語集、バージョン、ツリー構造などを典型用途とする。[Berners-Lee, *Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） [1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）

## HTML直前の祖先

直前の設計上の祖先は、Berners-Leeが新DTD向けの改善として示した同名・同構造の`LINK`提案である。1993年1月6日版DTDは`LINK`を文書全体の情報用ラッパーである`HEAD`へ収録するが、改善案から新DTDを作るという説明は一覧全体についてのものであり、`LINK`個別の採録記録は未回収である。

## さらに上流の由来

### 証拠

初期WWWのリンク種別設計ノートは、ノード間の著者情報、部分／全体、索引、用語集などの型付き関係を必要としていた。*Future plans for HTML*はこれらを文書全体の`LINK`で表す案を明記する。[Berners-Lee, *Link Types*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)） [Berners-Lee, *Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)）

### 解釈

`LINK`は、本文中のテキスト範囲へ結び付かないノード単位の関係をHTML文書のヘッドに記録するための要素として成立したと説明できる。

## 系譜

WWWの文書全体の型付きリンク要求 → 新DTD向けHTML `LINK`提案（1992）→ HTML DTD `HEAD`内の`LINK`（1993-01-06）→ 現行HTML `<link>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992（歴史的スナップショット） | [*Link Types*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)） | CERN設計ノート | ノード間の部分、著者情報、索引、用語集などの型付き関係を記録する。 | 2026-08-09 |
| 1992-12-02（更新日） | [*Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） | CERN設計ノート | 局所的なアンカーと異なる文書全体のリンクとして空の`LINK`を提案し、用途と属性を説明する。 | 2026-08-09 |
| 1993-01-06（DTD RCS id） | [*Hypertext Markup Language (HTML)*収録DTD](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft内のDTD | `HEAD`内の`LINK`と`HREF`、`REL`、`REV`等の属性を宣言する。 | 2026-08-09 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.4)） | IETF Standards Track RFC | `LINK`を`HEAD`内のハイパーリンクとして標準化し、典型的な文書関係を列挙する。 | 2026-08-09 |

## 確度

**A−**

要素単位の同名・同じ構造の提案と結果のDTD実体を確認できるが、改善案からDTDへの接続は一覧全体についての記述にとどまり、`LINK`個別の採録記録が欠けるため。

## 否定された仮説

ENQUIRE、HyperCard、HyTimeなどの型付きリンクまたはノード関係を、機能の類似だけからHTML `LINK`の直接祖先とする説明。

## 未解決

- 1992年提案を1993年1月6日DTDへ採用したリビジョン記録または議論は残っているか。
- 文書全体のリンクのマークアップを特定の先行ハイパーテキストシステムから採用したことを示す資料はあるか。
