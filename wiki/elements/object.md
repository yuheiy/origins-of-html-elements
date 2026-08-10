---
status: 完成
---

# `<object>`

## 概要

画像、applet、plug-in等を別々の機構で扱う制約に対し、W3Cが汎用`INSERT`として提案し、1996年に`OBJECT`へ改名した要素である。`INSERT → OBJECT`は直接確認できるが、個々のvendor要素からの派生は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは外部resourceを表し、resource typeに応じてimageまたはchild navigableとして扱われる。`data`がresourceのURLを、`type`がMIME typeを指定し、resourceを表示できない場合はchildrenがfallback contentになる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/iframe-embed-object.html)（[公開版](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)、2026-08-09確認）

## HTMLへの導入

1995年12月20日のW3C Working Draft *Inserting multimedia objects into HTML3*は、HTML 2.0 `IMG`、Microsoft `DYNSRC`、Netscape `EMBED`、Sun `APP`／`APPLET`の各案では要求全体を満たせないとして、`IMG`の役割を包摂し、新mediaへ拡張可能でfallbackを持つ汎用`INSERT`を提案した。[INSERT草案](https://www.w3.org/TR/WD-insert-951220.html)

1996年3月8日の後続草案は、旧`INSERT`草案のelementsを各方面からのinputを受けて2月13日にrenameし、文書名もWD-objectへ変えたと記録する。`OBJECT`はJava applets、COM/OLE objects、plug-ins等を一つの一般機構で扱った。HTML 4はgeneric object inclusionのall-purpose solutionとして導入した。[OBJECT草案](https://www.w3.org/TR/WD-object-960308.html) [HTML 4.01](https://www.w3.org/TR/html401/struct/objects.html)

## HTML直前の祖先

1995年のHTML3 `INSERT`である。後続草案が要素群の改名日を明記し、目的、attributes、fallback modelも連続する。

## さらに上流の由来

### 証拠

`INSERT`草案はHTML 2.0 `IMG`のmedia restrictionを出発点とし、`DYNSRC`、`EMBED`、`APP`、`APPLET`をnew mediaへ対処した既存案として列挙する。その上で各案が要求全体を満たさないため、単一で将来拡張可能なextensionを提案した。[INSERT草案](https://www.w3.org/TR/WD-insert-951220.html)

### 解釈

`IMG`とvendor別案は`INSERT`／`OBJECT`が解こうとした問題領域を示すが、草案は各syntaxや実装から`INSERT`を派生させたとは述べない。確定系譜は`INSERT → OBJECT`から始める。

## 系譜

HTML3 `INSERT`（1995年） → `OBJECT`への改名（1996-02-13） → W3C `OBJECT`草案 → HTML 4 `OBJECT` → 現行HTML `<object>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-12-20 | [*Inserting multimedia objects into HTML3*](../../raw/www.w3.org/TR/WD-insert-951220.html)（[公開元](https://www.w3.org/TR/WD-insert-951220.html)） | W3C Working Draft | `IMG`とvendor別案の限界、汎用`INSERT`、data／code／parameters／fallback model。 | 2026-08-09 |
| 1996-02-13（決定）、1996-03-08（公開版） | [*Inserting objects into HTML*](../../raw/www.w3.org/TR/WD-object-960308.html)（[公開元](https://www.w3.org/TR/WD-object-960308.html)） | W3C Working Draft | `INSERT` elementsを`OBJECT`へrenameした直接記録と継続する設計。 | 2026-08-09 |
| 1996-04-22 | [*Inserting objects into HTML*](../../raw/www.w3.org/TR/WD-object-960422)（[公開元](https://www.w3.org/TR/WD-object-960422)） | W3C Working Draft | editor／authors、複数vendorのmedia mechanismを一般化する目的、fallback。 | 2026-08-09 |
| 1995〜1997 | [*Cougar — The next version of HTML*](../../raw/www.w3.org/MarkUp/Cougar/index.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)） | W3C標準化ページ | object草案を含むlisted draftsがHTML 4.0のbasisを形成した集合単位の関係。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01 §13](../../raw/www.w3.org/TR/html401/struct/objects.html)（[公開元](https://www.w3.org/TR/html401/struct/objects.html)） | W3C Recommendation | generic object inclusion、限定的ancestorとしての`IMG`／`APPLET`、nested fallback。 | 2026-08-09 |

## 確度

**A**

具体的な先行要素`INSERT`から`OBJECT`への改名と設計継承を、後続W3C草案が日付付きで直接記録するため。

## 否定された仮説

Netscape `EMBED`を`OBJECT`へ改名したという説明。改名前は`INSERT`であり、`EMBED`は統合対象の一つである。HTML 2.0 `IMG`の単純改名、後続container型`EMBED`からの派生も採らない。

## 未解決

- 1996年2月13日に`INSERT`から`OBJECT`へ名称を変えた議論本文はあるか。
- `INSERT`のattributesやnested fallbackへ各vendor案のどの設計が採用されたか。
- object草案からHTML 4本文へ統合した要素単位の編集・合意記録はあるか。
