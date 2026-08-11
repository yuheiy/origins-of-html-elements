---
status: 完成
---

# `<object>`

## 概要

画像、アプレット、プラグイン等を別々の機構で扱う制約に対し、W3Cが汎用`INSERT`として提案し、1996年に`OBJECT`へ改名した要素である。`INSERT → OBJECT`は直接確認できるが、個々のベンダー要素からの派生は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは外部リソースを表し、リソース種別に応じて画像または子ナビゲーション可能領域として扱われる。`data`がリソースのURLを、`type`がMIMEタイプを指定し、リソースを表示できない場合は子が代替内容になる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/iframe-embed-object.html)（[公開版](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)、2026-08-09確認）

## HTMLへの導入

1995年12月20日のW3C Working Draft *Inserting multimedia objects into HTML3*は、HTML 2.0 `IMG`、Microsoft `DYNSRC`、Netscape `EMBED`、Sun `APP`／`APPLET`の各案では要求全体を満たせないとして、`IMG`の役割を包摂し、新メディアへ拡張可能で代替内容を持つ汎用`INSERT`を提案した。[INSERT草案](../../raw/www.w3.org/TR/WD-insert-951220.html)（[公開元](https://www.w3.org/TR/WD-insert-951220.html)）

1996年3月8日の後続草案は、旧`INSERT`草案の要素を各方面からの入力を受けて2月13日に改名し、文書名もWD-オブジェクトへ変えたと記録する。`OBJECT`はJavaアプレット、COM/OLEオブジェクト、プラグイン等を一つの一般機構で扱った。HTML 4は汎用オブジェクト包含の解決策として導入した。[OBJECT草案](../../raw/www.w3.org/TR/WD-object-960308.html)（[公開元](https://www.w3.org/TR/WD-object-960308.html)） [HTML 4.01](../../raw/www.w3.org/TR/html401/struct/objects.html)（[公開元](https://www.w3.org/TR/html401/struct/objects.html)）

## HTML直前の祖先

1995年のHTML3 `INSERT`である。後続草案が要素群の改名日を明記し、目的、属性、代替内容モデルも連続する。

## さらに上流の由来

### 証拠

`INSERT`草案はHTML 2.0 `IMG`のメディア上の制約を出発点とし、`DYNSRC`、`EMBED`、`APP`、`APPLET`を新しいメディアへ対処した既存案として列挙する。その上で各案が要求全体を満たさないため、単一で将来拡張可能な拡張を提案した。[INSERT草案](../../raw/www.w3.org/TR/WD-insert-951220.html)（[公開元](https://www.w3.org/TR/WD-insert-951220.html)）

### 解釈

`IMG`とベンダー別案は`INSERT`／`OBJECT`が解こうとした問題領域を示すが、草案は各構文や実装から`INSERT`を派生させたとは述べない。確定系譜は`INSERT → OBJECT`から始める。

## 系譜

HTML3 `INSERT`（1995年） → `OBJECT`への改名（1996-02-13） → W3C `OBJECT`草案 → HTML 4 `OBJECT` → 現行HTML `<object>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-12-20 | [*Inserting multimedia objects into HTML3*](../../raw/www.w3.org/TR/WD-insert-951220.html)（[公開元](https://www.w3.org/TR/WD-insert-951220.html)） | W3C Working Draft | `IMG`とベンダー別案の限界、汎用`INSERT`、データ／コード／パラメーター／代替内容モデル。 | 2026-08-09 |
| 1996-02-13（決定）、1996-03-08（公開版） | [*Inserting objects into HTML*](../../raw/www.w3.org/TR/WD-object-960308.html)（[公開元](https://www.w3.org/TR/WD-object-960308.html)） | W3C Working Draft | `INSERT`要素を`OBJECT`へ改名した直接記録と継続する設計。 | 2026-08-09 |
| 1996-04-22 | [*Inserting objects into HTML*](../../raw/www.w3.org/TR/WD-object-960422)（[公開元](https://www.w3.org/TR/WD-object-960422)） | W3C Working Draft | エディター／著者、複数ベンダーのメディア仕組みを一般化する目的、代替内容。 | 2026-08-09 |
| 1995〜1997 | [*Cougar — The next version of HTML*](../../raw/www.w3.org/MarkUp/Cougar/index.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)） | W3C標準化ページ | オブジェクト草案を含む列挙された草案がHTML 4.0の基礎を形成した集合単位の関係。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01 §13](../../raw/www.w3.org/TR/html401/struct/objects.html)（[公開元](https://www.w3.org/TR/html401/struct/objects.html)） | W3C Recommendation | 汎用オブジェクト包含、限定的祖先としての`IMG`／`APPLET`、入れ子代替内容。 | 2026-08-09 |

## 確度

**A**

具体的な先行要素`INSERT`から`OBJECT`への改名と設計継承を、後続W3C草案が日付付きで直接記録するため。

## 否定された仮説

Netscape `EMBED`を`OBJECT`へ改名したという説明。改名前は`INSERT`であり、`EMBED`は統合対象の一つである。HTML 2.0 `IMG`の単純改名、後続コンテナー型`EMBED`からの派生も採らない。

## 未解決

- 1996年2月13日に`INSERT`から`OBJECT`へ名称を変えた議論本文はあるか。
- `INSERT`の属性や入れ子代替内容へ各ベンダー案のどの設計が採用されたか。
- オブジェクト草案からHTML 4本文へ統合した要素単位の編集・合意記録はあるか。
