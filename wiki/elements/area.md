# `<area>`

> 状態: 完成

## 概要

James L. Seidmanが1994年に`map`とともに提案した、client-side image mapの個々の領域を表す要素である。

## 現在の意味

WHATWG HTML Living Standardでは、image map上の対応領域を持つtext付きhyperlink、またはlinkでないdead areaを表す。親を持つ`area`には祖先`map`が必要であり、`href`がある場合はhyperlinkとなる。[一次定義](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element)（2026-08-09確認）

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

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ image map sections | 失効したInternet-Draft | `FIG ISMAP`と`FIG`内`A SHAPE`による二つの先行案。 | [server-side](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html) / [client-side](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_37.html) | 2026-08-09 |
| 1994-10-20 | Seidman, “An HTML Extension to Support Client-Side Image Maps” | 会議論文／当事者提案 | `AREA`の構文・役割、server-side方式の問題、HTML+案を変更した理由。 | [一次資料](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html) | 2026-08-09 |
| 1995-02-04相当（日付に内部矛盾） | `draft-ietf-html-clientsideimagemap-00` | IETF Internet-Draft | `MAP`／`AREA`／`USEMAP`をHTML extensionとして提案。 | [一次資料](https://www.ietf.org/archive/id/draft-ietf-html-clientsideimagemap-00.txt) | 2026-08-09 |
| 1996-08 | RFC 1980 | Informational RFC | Seidman案の構文と目的をRFC化。 | [一次資料](https://www.rfc-editor.org/rfc/rfc1980.txt) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | `MAP`内の`AREA`をhotzoneとURLの対応として採録。 | [一次資料](https://www.w3.org/TR/REC-html32) | 2026-08-09 |

## 確度

**A**

提案者、導入理由、HTML+の具体的先行案との設計上の因果を当事者論文で確認できるため。HTML 3.2での個別採録決定記録は未確認として残す。

## 否定された仮説

HTML+の`A SHAPE`が名称も構造も変わらず`AREA`になったという説明。直接史料が示すのは、先行案の問題を避けるための再設計である。

## 未解決

- W3Cまたはvendor groupがSeidman案をHTML 3.2へ採録した会議・決定記録はあるか。
- Internet-Draftの表紙年とrunning header等の日付矛盾はなぜ生じたか。
