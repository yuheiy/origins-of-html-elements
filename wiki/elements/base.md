---
status: 完成
---

# `<base>`

## 概要

1992年CERNタグ一覧は、メール送信や複数アドレスでの参照により文書が取得時の文脈を失っても相対アドレスを解決するため、基底アドレスが必要だと説明する。同年の設計ノートには`SAVEDAS`案、1993年1月6日版DTDには`BASE`があるが、その間の具体化記録は回収できていない。

## 現在の意味

WHATWG HTML Living Standardでは、URL解析に使う文書基準URLと、ハイパーリンクナビゲーションおよびフォーム送信に使う既定のナビゲーション対象名を指定する。要素自体はそれ以外の内容を表さない。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-base-element)、2026-08-09確認）

## HTMLへの導入

1992年11月のCERNタグ一覧は基底アドレス用タグの形式を未定・未使用としつつ、文書がメールされた場合や複数のアドレスで見える場合にも相対アドレスを正しく解決するという要素固有の要求を記録する。Berners-Leeの*Future plans for HTML*は、文書を保存したアドレスを持たせるタグ名として`SAVEDAS`を提案する。1993年6月草案に収録されたRCS id `93/01/06`のDTDは、URLの参照文脈となる`BASE HREF`を宣言する。[Berners-Lee, *HTML Tags*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） [Berners-Lee, *Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） [1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）

## HTML直前の祖先

未確認。HTML内部のBase Address要求と`SAVEDAS`提案は確認できるが、`SAVEDAS`から`BASE`への改名・採用を直接記録する資料は回収できていない。

## さらに上流の由来

### 証拠

1992年資料が直接示す背景は、相対アドレスが文書の取得URLを文脈として必要とし、メールや複数アドレスによりその文脈を失いうるというURL処理上の問題である。

### 解釈

`BASE`は文書を移送・再保存しても相対URLの解決基準を文書内に保持するための文書コントロール要素として成立したと説明できる。

## 系譜

HTMLのBase Address要求／`SAVEDAS`提案（1992）→［`BASE`への具体化記録は未回収］→ HTML DTD `BASE`（1993-01-06）→ 現行HTML `<base>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-11-13（更新日） | [*HTML Tags*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | 文脈から切り離された文書で相対アドレスを解決するため基底アドレスが必要だと説明し、タグ形式は未定・未使用と記す。 | 2026-08-09 |
| 1992-12-02（更新日） | [*Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） | CERN設計ノート | 保存時の文書アドレスを記録するタグとして`SAVEDAS`を提案する。 | 2026-08-09 |
| 1993-01-06（DTD RCS id） | [*Hypertext Markup Language (HTML)*収録DTD](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft内のDTD | URLの参照文脈となる`BASE`と`HREF`属性を宣言する。 | 2026-08-09 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.2)） | IETF Standards Track RFC | 文脈から切り離された文書の相対URLを解釈する基底アドレスとして標準化する。 | 2026-08-09 |

## 確度

**B**

HTMLへの導入理由と設計要求は直接史料で確認できるが、具体的な先行要素または`SAVEDAS`から`BASE`への変更過程を確認できないため。

## 否定された仮説

SGMLの同名概念または後代のURL仕様から`BASE`の起源を逆算する説明。確認できる直接の背景は初期HTMLにおける文脈外文書の相対アドレス解決要求である。

## 未解決

- `SAVEDAS`案を`BASE HREF`へ具体化または改名したメール、DTDリビジョン、ソース変更は残っているか。
- 基底アドレス機構を既存のハイパーテキストシステムまたは文書形式から採用したことを示す資料はあるか。
