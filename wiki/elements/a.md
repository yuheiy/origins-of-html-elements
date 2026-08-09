# `<a>`

> 状態: 完成

## 概要

NeXT WorldWideWebの1991年1月の実装履歴と1992年のCERNタグ一覧で、linkの始点・終点となるanchorを確認できる。WWWがnode間のlinkを必要としたことは一次資料に明記されるが、ENQUIRE、NeXTのHyperText機能、HyTimeなどからHTMLの`A`へ採用した因果関係は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、`href`属性がある場合は内容をlabelとするhyperlink（hypertext anchor）を表し、ない場合はlinkが置かれ得た位置のplaceholderを表す。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)（2026-08-09確認）

## HTMLへの導入

確認できる最初期の実装記録は、Tim Berners-LeeのNeXT WorldWideWeb version 0.4で、1991年1月30日にanchorの作成と編集状態の処理を記したものである。1991年保存sourceでは、node内の領域であるAnchor objectをHTML parserが`A`の`HREF`／`NAME`へ写像し、保存時に同じmarkupへ直列化する。1992年CERNタグ一覧は`A`を、textをlinkの始点、終点、または両方にする要素として定義する。`A`という要素名または上流のmodelを選んだ理由までは記録しない。[CERN/W3C, *Features and Bug Fixes*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/NeXT/Implementation/Features.html) [*Anchor.h*](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.h) [*ParseHTML.h*](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h) [Berners-Lee, *HTML Tags*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

## HTML直前の祖先

未確認。ENQUIREや他のhypertext systemがWWWの設計比較に現れることは確認できるが、そのanchor modelまたはmarkupをHTMLの`A`へ採用したとする資料は確認できない。

## さらに上流の由来

### 証拠

Berners-LeeのWWW設計資料は、情報をnodeとlinkのwebとして扱い、linkをたどって情報へ到達するmodelを記録する。別の設計ノートはKMSとHyperCardのone-way link、ENQUIREのtwo-way linkを比較するが、HTML `A`の採用元は指定しない。[Berners-Lee, *Information Management: A Proposal*](https://www.w3.org/History/1989/proposal.html) [Berners-Lee, *Topology*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/Topology.html)

### 解釈

`A`はWWWのnode間linkをtextへ埋め込むHTML上の表現として導入されたと説明できる。特定の先行systemから要素単位で派生したとは説明できない。

## 系譜

WWWのnode／link設計（1989–1990）→ NeXT WorldWideWebのAnchor objectとHTML `A`の写像（1991年保存source）→ 現行HTML `<a>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1989-03 | *Information Management: A Proposal* | CERNでのWWW提案 | 情報をnodeとlinkからなるhypertextとして扱うWWWの設計要求を記録する。 | [W3C History](https://www.w3.org/History/1989/proposal.html) | 2026-08-09 |
| 1991-01-30 | *Features and Bug Fixes* | CERN/W3Cの公式実装履歴 | NeXT WorldWideWeb 0.4でanchor作成を実装済みだったことを記録する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/NeXT/Implementation/Features.html) | 2026-08-09 |
| 1991-09-04／09-27（HTTP Last-Modified） | *Anchor.h*／*ParseHTML.h* | W3C保存のWorldWideWeb実装source | node内のAnchor objectとHTML `A`の`HREF`／`NAME`を相互に写像する。 | [Anchor object](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.h)・[HTML parser／serializer](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h) | 2026-08-09 |
| 1992-11-13（更新日） | *HTML Tags* | CERN公式HTML資料のhistorical snapshot | `A`の`HREF`と`NAME`によりlinkの始点・終点を表す初期HTMLの機能を定義する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | anchorをlinkの始点・終点として定義し、`A`と属性をDTDへ収録する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**B**

WWWのhyperlink要求とHTMLでのanchorの設計・初期実装は確認できるが、具体的な先行技術から`A`への採用因果を確認できないため。

## 否定された仮説

ENQUIRE、NeXTのHyperText機能、KMS、HyperCard、SGML／HyTimeを、名称または機能の類似だけからHTML `A`の直接祖先とする説明。確認できる資料は比較対象または背景として言及するにとどまり、要素への採用を示さない。

## 未解決

- `A`という要素名と`HREF`／`NAME`のmarkupを選んだ判断を記録する1990年の設計資料またはsource historyは残っているか。
- ENQUIREまたはNeXT WorldWideWebの内部link modelからHTML serializationへの具体的な写像を示す資料はあるか。
