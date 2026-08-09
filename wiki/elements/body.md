# `<body>`

> 状態: 完成

## 概要

Dan Connollyの1992年7月公開DTDはすでに`BODY`を宣言する。同年11月、Connollyは当時の内部版で本文containerを`DOCUMENT`と呼んでいると説明して`BODY`へ戻す案を示し、Tim Berners-LeeがmailのHeader/Body用語に合うと支持した。`DOCUMENT`を含む内部版DTDは回収できていない。

## 現在の意味

WHATWG HTML Living Standardでは、文書のcontentsを表す。 [一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)（2026-08-09確認）

## HTMLへの導入

Dan Connollyが1992年7月15日にwww-talkへ送ったDTDは`BODY`を本文のcontainerとして宣言し、`HTML`のmixed contentを避ける必要性をcommentに記す。Connollyは11月19日のmailで、当時のDTDでは同じ役割のcontainerを`DOCUMENT`と呼んでいると説明し、これを`BODY`へ戻す案を示した。Tim Berners-LeeはHeader/Bodyがmail nomenclatureに合うとして案を支持した。[Connolly, “HTML DTD enclosed”](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) [Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [Berners-Lee, “Re: HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)

## HTML直前の祖先

1993年DTDの`BODY`直前にあった可能性があるのは、Connollyが1992年11月に説明した内部版DTDの`DOCUMENT`である。当事者mailは`BODY`へ戻す案を明記するが、`DOCUMENT`を含むDTD本体と変更後の中間版は回収できていない。[Connolly, “HTML DTD issues”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)

## さらに上流の由来

### 証拠

Waterloo GMLにも`BODY`／`eBODY`があるが、HTMLへの採用因果は示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)

### 解釈

なし。

## 系譜

HTML `BODY`（1992-07-15公開DTD）→ 内部版DTD `DOCUMENT`（1992-11-19の説明、DTD本体は未回収）→ `BODY`へ戻す提案（同日）→ HTML DTD `BODY`（1993-01-06）→ 現行HTML `<body>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1988-10-18 | *SCRIPT GML User’s Guide* | Waterloo公式文書の保存版 | 先行GMLに`BODY`／`eBODY`が存在する。HTMLへの採用因果は示さない。 | [Internet Archive](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) | 2026-08-09 |
| 1992-07-15 | “HTML DTD enclosed” | www-talkへの当事者投稿とDTD | `BODY`を宣言し、`HTML`のmixed content問題を避けるという必要性をcommentに記す。後の`DOCUMENT`より早い`BODY`の公開例である。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) | 2026-08-09 |
| 1992-11-19 | “HTML DTD issues”／“Re: HTML DTD issues” | www-talkへの当事者投稿 | Connollyが当時の内部版の`DOCUMENT`を`BODY`へ戻す案を示し、Berners-LeeがHeader/Body用語を支持する。 | [提案](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[応答](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | DTDで`BODY`とそのcontent modelを宣言する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**A−**

1992年7月の`BODY`、11月時点の内部版`DOCUMENT`から`BODY`へ戻す提案、1993年1月の`BODY`を確認できるが、内部版DTDと変更diffを回収できず経路の一部が欠けるため。

## 否定された仮説

Waterloo GMLなどの同名`BODY`からHTMLへ採用されたとする説明。確認できる直前関係はHTML DTD内部の`DOCUMENT`からの改名である。

## 未解決

- `DOCUMENT`を含む内部版DTDと`BODY`へ戻した変更diffを回収できるか。
- HTML DTD以前の具体的な先行文書体系は確認できるか。
