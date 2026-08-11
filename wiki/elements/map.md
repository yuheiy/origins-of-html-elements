---
status: 完成
---

# `<map>`

## 概要

James L. Seidmanが1994年に`area`とともに提案したクライアント側イメージマップのコンテナーであり、HTML+のイメージマップ案を直接検討して設計された。

## 現在の意味

WHATWG HTML Living Standardでは、`img`および子孫の`area`と組み合わせてイメージマップを定義し、要素自体はその子を表す。`name`属性によって参照可能な名前を与える。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/image-maps.html)（[公開版](https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element)、2026-08-09確認）

## HTMLへの導入

James L. Seidman（Spyglass）は1994年10月20日、`IMG USEMAP`、`MAP NAME`、`AREA`を提案した。サーバー側イメージマップのHTTP依存、余分なサーバー通信、クリック前に行き先を判断できないこと、サーバー依存形式を避け、マップの記述をHTMLとしてクライアントへ置くことが理由だった。[Seidman論文](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)

## HTML直前の祖先

HTML直前の祖先は、HTML+の`FIG ISMAP`によるサーバー側方式と、`FIG`内`A SHAPE`によるクライアント側の形状付きリンクである。Seidman自身が後者を先行案として検討し、処理負担、代替内容、マップ配置の制約から短期解として変更した。[HTML+ Active Areas](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html) [HTML+ Hypertext Buttons](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_37.html) [Seidman論文](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)

## さらに上流の由来

### 証拠

既存のサーバー側イメージマップとHTML+の形状付きリンクを設計上の背景として直接確認できる。

### 解釈

`map`と`area`は同じ問題設定から一組として導入された。HTML+案をそのまま採用したのではなく、その制約を避ける新構文として作られた。

## 系譜

HTML+ `FIG ISMAP`／`FIG`内`A SHAPE` → Seidman `MAP`＋`AREA`＋`IMG USEMAP`提案（1994年） → IETF草案／RFC 1980 → HTML 3.2 `<map>` → 現行HTML `<map>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | HTML+のイメージマップ節：[サーバー側](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html)・[クライアント側](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_37.html)（[公開元1](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html)・[公開元2](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_37.html)） | 失効したInternet-Draft | `FIG ISMAP`と`FIG`内`A SHAPE`による二つの先行案。 | 2026-08-09 |
| 1994-10-20 | [Seidman, “An HTML Extension to Support Client-Side Image Maps”](../../raw/archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)（[公開元](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)） | 会議論文／当事者提案 | `MAP`／`AREA`構文、サーバー側方式の問題、HTML+案を変更した理由。 | 2026-08-09 |
| 1995-02-04相当（日付に内部矛盾） | [`draft-ietf-html-clientsideimagemap-00`](../../raw/www.ietf.org/archive/id/draft-ietf-html-clientsideimagemap-00.txt)（[公開元](https://www.ietf.org/archive/id/draft-ietf-html-clientsideimagemap-00.txt)） | IETF Internet-Draft | `MAP`／`AREA`／`USEMAP`をHTML拡張として提案。 | 2026-08-09 |
| 1996-08 | [RFC 1980](../../raw/www.rfc-editor.org/rfc/rfc1980.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1980.txt)） | Informational RFC | Seidman案の構文と目的をRFC化。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） | W3C Recommendation | `MAP`と`AREA`をクライアント側イメージマップとして採録。 | 2026-08-09 |

## 確度

**A**

提案者、導入理由、HTML+の具体的先行案との設計上の因果を当事者論文で確認できるため。HTML 3.2での個別採録決定記録は未確認として残す。

## 否定された仮説

HTML+の`FIG`／`A SHAPE`が同じ構文のまま採録されたという説明。Seidmanは先行案を検討したうえで制約を指摘し、`MAP`／`AREA`へ再構成した。

## 未解決

- W3CまたはベンダーグループがSeidman案をHTML 3.2へ採録した会議・決定記録はあるか。
- Internet-Draftの表紙年と実行中ヘッダー等の日付矛盾はなぜ生じたか。
