---
status: 完成
---

# `<a>`

## 概要

NeXT WorldWideWebの1991年1月の実装履歴と1992年のCERNタグ一覧で、リンクの始点・終点となるアンカーを確認できる。WWWがノード間のリンクを必要としたことは一次資料に明記されるが、ENQUIRE、NeXTのHyperText機能、HyTimeなどからHTMLの`A`へ採用した因果関係は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、`href`属性がある場合は内容をラベルとするハイパーリンク（ハイパーテキストアンカー）を表し、ない場合はリンクが置かれ得た位置のプレースホルダーを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)、2026-08-09確認）

## HTMLへの導入

確認できる最初期の実装記録は、Tim Berners-LeeのNeXT WorldWideWebバージョン0.4で、1991年1月30日にアンカーの作成と編集状態の処理を記したものである。1991年保存ソースでは、ノード内の領域であるAnchorオブジェクトをHTMLパーサーが`A`の`HREF`／`NAME`へ写像し、保存時に同じマークアップへ直列化する。1992年CERNタグ一覧は`A`を、テキストをリンクの始点、終点、または両方にする要素として定義する。`A`という要素名またはその設計モデルを選んだ理由までは記録しない。[CERN/W3C, *Features and Bug Fixes*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/NeXT/Implementation/Features.html) [*Anchor.h*](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.h) [*ParseHTML.h*](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h) [Berners-Lee, *HTML Tags*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

## HTML直前の祖先

未確認。ENQUIREや他のハイパーテキストシステムがWWWの設計比較に現れることは確認できるが、そのアンカーモデルまたはマークアップをHTMLの`A`へ採用したとする資料は確認できない。

## さらに上流の由来

### 証拠

Berners-LeeのWWW設計資料は、情報をノードとリンクのウェブとして扱い、リンクをたどって情報へ到達するモデルを記録する。別の設計ノートはKMSとHyperCardの一方向リンク、ENQUIREの双方向リンクを比較するが、HTML `A`の採用元は指定しない。[Berners-Lee, *Information Management: A Proposal*](https://www.w3.org/History/1989/proposal.html) [Berners-Lee, *Topology*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/Topology.html) 1998年のDave Raggettらによる回顧は、SGML自体にはハイパーテキストリンクがなく、アンカー要素と`HREF`属性はBerners-Lee独自の発明だったと説明する。[Raggettほか, *A history of HTML*](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)）

### 解釈

`A`はWWWのノード間リンクをテキストへ埋め込むHTML上の表現としてBerners-Leeが設計したと説明できる。当事者に近い後代の回顧も既存SGML語彙からの採用ではなく独自設計とするが、`A`というトークンの選択やENQUIREの内部モデルとの実装上の連続までは説明しない。

## 系譜

WWWのノード／リンク設計（1989–1990）→ NeXT WorldWideWebのAnchorオブジェクトとHTML `A`の写像（1991年保存ソース）→ 現行HTML `<a>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1989-03 | [*Information Management: A Proposal*](../../raw/www.w3.org/History/1989/proposal.html)（[公開元](https://www.w3.org/History/1989/proposal.html)） | CERNでのWWW提案 | 情報をノードとリンクからなるハイパーテキストとして扱うWWWの設計要求を記録する。 | 2026-08-09 |
| 1991-01-30 | [*Features and Bug Fixes*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/NeXT/Implementation/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/NeXT/Implementation/Features.html)） | CERN/W3Cの公式実装履歴 | NeXT WorldWideWeb 0.4でアンカー作成を実装済みだったことを記録する。 | 2026-08-09 |
| 1991-09-04／09-27（HTTP Last-Modified） | *Anchor.h*／*ParseHTML.h*：[Anchor object](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.h)・[HTML parser／serializer](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)（[公開元1](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.h)・[公開元2](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)） | W3C保存のWorldWideWeb実装ソース | ノード内のAnchorオブジェクトとHTML `A`の`HREF`／`NAME`を相互に写像する。 | 2026-08-09 |
| 1992-11-13（更新日） | [*HTML Tags*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | `A`の`HREF`と`NAME`によりリンクの始点・終点を表す初期HTMLの機能を定義する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | アンカーをリンクの始点・終点として定義し、`A`と属性をDTDへ収録する。 | 2026-08-09 |
| 1998 | [Dave Raggettほか, *A history of HTML*](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)） | 初期Web当事者による回顧 | SGMLにハイパーテキストリンクはなく、アンカー要素と`HREF`属性はBerners-Lee独自の発明だったと説明する。 | 2026-08-11 |

## 確度

**B**

WWWのハイパーリンク要求とHTMLでのアンカーの設計・初期実装は確認できるが、具体的な先行技術から`A`への採用因果を確認できないため。

## 否定された仮説

ENQUIRE、NeXTのHyperText機能、KMS、HyperCard、SGML／HyTimeを、名称または機能の類似だけからHTML `A`の直接祖先とする説明。確認できる資料は比較対象または背景として言及するにとどまり、要素への採用を示さない。

## 未解決

- `A`という要素名と`HREF`／`NAME`のマークアップを選んだ判断を記録する1990年の設計資料またはソース履歴は残っているか。
- ENQUIREまたはNeXT WorldWideWebの内部リンクモデルからHTMLへの直列化への具体的な写像を示す資料はあるか。
