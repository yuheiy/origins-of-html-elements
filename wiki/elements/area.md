---
status: 完成
---

# `<area>`

## 概要

James L. Seidmanが1994年に`map`とともに提案した、client-side image mapの個々の領域を表す要素である。

## 現在の意味

WHATWG HTML Living Standardでは、image map上の対応領域を持つtext付きhyperlink、またはlinkでないdead areaを表す。親を持つ`area`には祖先`map`が必要であり、`href`がある場合はhyperlinkとなる。[HTML Living Standard](../../raw/html-living-standard/image-maps.html)（[公開版](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element)、2026-08-09確認）

## HTMLへの導入

James L. Seidman（Spyglass）は1994年10月20日、`IMG USEMAP`、`MAP NAME`、`AREA SHAPE/COORDS/HREF/NOHREF`を提案した。server-side image mapのHTTP依存、余分な通信、事前feedback不能、server依存形式を避けることが理由だった。[Seidman論文](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)

## HTML直前の祖先

HTML直前の祖先は、HTML+の`FIG ISMAP`と`FIG`内`A SHAPE`である。Seidman自身がHTML+のshaped linksを先行案として検討し、その制約を避けるため各hotzoneを空要素`AREA`として表す案を示した。[HTML+](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_37.html) [Seidman論文](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)

## さらに上流の由来

### 証拠

既存のserver-side image mapとHTML+ shaped linksを設計上の背景として直接確認できる。

### 解釈

`area`は`map`と同じ提案で、shape、coordinates、destinationを一つのhotzoneへまとめる構成要素として導入された。

## 系譜

HTML+ `FIG ISMAP`／`FIG`内`A SHAPE` → Seidman `MAP`＋`AREA`提案（1994年） → IETF draft／RFC 1980 → HTML 3.2 `<area>` → 現行HTML `<area>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | HTML+ image map sections：[server-side](../../raw/html-plus/7be80adace115156-htmlplus_36.html)・[client-side](../../raw/html-plus/7fbc940083a76f2e-htmlplus_37.html)（[公開元1](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html)・[公開元2](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_37.html)） | 失効したInternet-Draft | `FIG ISMAP`と`FIG`内`A SHAPE`による二つの先行案。 | 2026-08-09 |
| 1994-10-20 | [Seidman, “An HTML Extension to Support Client-Side Image Maps”](../../raw/client-side-image-maps/48a38927cb8b8945-seidman.html)（[公開元](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)） | 会議論文／当事者提案 | `AREA`の構文・役割、server-side方式の問題、HTML+案を変更した理由。 | 2026-08-09 |
| 1995-02-04相当（日付に内部矛盾） | [`draft-ietf-html-clientsideimagemap-00`](../../raw/client-side-image-maps/a47f86788ae0e1a8-draft-ietf-html-clientsideimagemap-00.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-html-clientsideimagemap-00.txt)） | IETF Internet-Draft | `MAP`／`AREA`／`USEMAP`をHTML extensionとして提案。 | 2026-08-09 |
| 1996-08 | [RFC 1980](../../raw/client-side-image-maps/4e701516260dab77-rfc1980.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1980.txt)） | Informational RFC | Seidman案の構文と目的をRFC化。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/html-3.2/index.html)（[公開元](https://www.w3.org/TR/REC-html32)） | W3C Recommendation | `MAP`内の`AREA`をhotzoneとURLの対応として採録。 | 2026-08-09 |

## 確度

**A**

提案者、導入理由、HTML+の具体的先行案との設計上の因果を当事者論文で確認できるため。HTML 3.2での個別採録決定記録は未確認として残す。

## 否定された仮説

HTML+の`A SHAPE`が名称も構造も変わらず`AREA`になったという説明。直接史料が示すのは、先行案の問題を避けるための再設計である。

## 未解決

- W3Cまたはvendor groupがSeidman案をHTML 3.2へ採録した会議・決定記録はあるか。
- Internet-Draftの表紙年とrunning header等の日付矛盾はなぜ生じたか。
