---
status: 完成
---

# `<html>`

## 概要

1992年6月のConnolly DTDでdocument elementとして確認できる。ConnollyはSGML parserがtop-level elementを推論できるよう自ら導入したと説明するが、HTML以前の具体的祖先は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、HTML文書のrootを表す。 [一次定義](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)（2026-08-09確認）

## HTMLへの導入

Dan Connollyが1992年6月6日に送ったDTDは`html` document elementを宣言する。Connollyは11月19日のmailで、公開WWW実装以外のSGML parserがtop-level elementを推論できるよう`HTML` tagを自ら導入し、start/end tagを省略可能にしたと説明する。[Connolly, “MIME as a hypertext architecture”](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0020.html) [Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)

## HTML直前の祖先

未確認。SGMLのdocument elementという一般構造だけでは、特定の先行DTDからの採用因果を示さない。

## さらに上流の由来

### 証拠

1992年以前のCERN資料は通常のSGML framing tagsを送信せず、含めてもparserが無視すると記録しており、特定の直前祖先は示さない。[CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

### 解釈

なし。

## 系譜

Connolly DTD `html`（1992-06-02生成）→ 現行HTML `<html>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992-06-06（DTDは1992-06-02生成） | “MIME as a hypertext architecture” | www-talkへの当事者投稿とDTD | `html` document elementを宣言し、DTD化の目的を説明する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992MayJun/0020.html) | 2026-08-09 |
| 1992-11-19 | “HTML DTD issues” | www-talkへの当事者投稿 | Connollyが`HTML` top-level tagをSGML parserの推論のため自ら導入したと説明する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | DTDで`HTML`をdocument elementとして宣言し、そのcontent modelを示す。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**B**

HTMLへの導入主体と理由は当事者資料で確認できるが、具体的な先行要素からの採用因果を確認できないため。

## 否定された仮説

現行文書のroot構造、または一般的なSGML document elementだけから、特定の直前祖先を推定する説明。

## 未解決

- `HTML`要素の具体的な先行DTDは確認できるか。
