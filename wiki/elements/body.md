# `<body>`

> 状態: `DOCUMENT`から`BODY`への改名を検証済み（公開中間DTDは未回収）

## 概要

Dan Connollyが`HTML` document elementのmixed content問題を避けるため作った`DOCUMENT`を`BODY`へ改名すると説明し、Tim Berners-LeeがmailのHeader/Body用語に合うと支持した。改名前の公開DTDを回収できず、中間経路には欠落がある。

## 現在の意味

WHATWG HTML Living Standardでは、文書のcontentsを表す。 [一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)（2026-08-09確認）

## HTMLへの導入

Dan Connollyが1992年7月15日にwww-talkへ送ったDTDは`BODY`を本文のcontainerとして宣言する。Connollyは11月19日のmailで、mixed content問題を避けるため`DOCUMENT`を作り、これを`BODY`へ改名できると説明した。Tim Berners-LeeはHeader/Bodyがmail nomenclatureに合うと支持した。[Connolly, “HTML DTD enclosed”](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) [Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [Berners-Lee, “Re: HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)

## HTML直前の祖先

直前の設計上の祖先はConnollyのHTML DTD draftにあった`DOCUMENT`である。当事者mailが改名関係を明記するが、`DOCUMENT`を含む公開中間DTDは回収できていない。[Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)

## さらに上流の由来

### 証拠

Waterloo GMLにも`BODY`／`eBODY`があるが、HTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

なし。

## 系譜

HTML DTD draft `DOCUMENT` →［公開中間DTDは未回収］→ HTML `BODY`（1992-07-15公開DTDで確認）→ 現行HTML `<body>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1988-10-18 | *SCRIPT GML User’s Guide* | Waterloo公式文書の保存版 | 先行GMLに`BODY`／`eBODY`が存在する。HTMLへの採用因果は示さない。 | [Internet Archive](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) | 2026-08-09 |
| 1992-07-15 | “HTML DTD enclosed” | www-talkへの当事者投稿とDTD | `BODY`を宣言し、`HTML`のmixed content問題を避けるという必要性をcommentに記す。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) | 2026-08-09 |
| 1992-11-19 | “HTML DTD issues”／“Re: HTML DTD issues” | www-talkへの当事者投稿 | Connollyが`DOCUMENT`から`BODY`への改名を提案し、Berners-LeeがHeader/Body用語を支持する。 | [提案](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[応答](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | DTDで`BODY`とそのcontent modelを宣言する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**A−**

HTML DTD内の`DOCUMENT`から`BODY`への改名を当事者資料で確認できるが、その中間DTDを回収できず経路の一部が欠けるため。

## 否定された仮説

Waterloo GMLなどの同名`BODY`からHTMLへ採用されたとする説明。確認できる直前関係はHTML DTD内部の`DOCUMENT`からの改名である。

## 未解決

- `DOCUMENT`を含む公開中間DTDを回収できるか。
- HTML DTD以前の具体的な先行文書体系は確認できるか。

## 調査記録

1988年Waterloo SCRIPT GML、1992年7月Connolly DTD、1992年CERN HTMLタグ一覧、1993年HTML Internet-Draftを確認した。先行する同名構造と採用因果は分離した。対象群全体は[初期SGML/GML調査ノート](../research/early-sgml-elements.md)を参照する。
