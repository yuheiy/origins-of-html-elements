---
status: 完成
---

# `<style>`

## 概要

確認できる最初の`STYLE`は1995年4月25日のHTML 3.0草案にあり、文書内のスタイル上書きを`HEAD`へ置く。11月22日のIETF HTML WG草案は既存`LINK`による外部シートと新しい`STYLE`による文書内規則の設計理由を説明するが、4月のHTML 3.0案からこの草案への個別採用経路は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、CSSスタイルシートを文書へ埋め込む。`media`で適用メディアを制限し、`blocking`で描画を妨げる処理の扱いを指定できる。利用者向け内容自体は表さない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-style-element)、2026-08-09確認）

## HTMLへの導入

1995年4月25日のHTML 3.0草案は、外部スタイルシートを`LINK REL=StyleSheet`で参照し、文書固有の上書きを`HEAD`内の`STYLE`へ置くと規定する。確認できる最初の出現はこの草案だが、提案者と採用以前の経路は確認できない。[HTML 3.0 introduction](../../raw/www.w3.org/MarkUp/html3/intro.html)（[公開元](https://www.w3.org/MarkUp/html3/intro.html)） [HTML 3.0 document head](../../raw/www.w3.org/MarkUp/html3/dochead.html)（[公開元](https://www.w3.org/MarkUp/html3/dochead.html)）

11月22日のIETF HTML WG Internet-Draft *HTML and Style Sheets*は、HTMLを新しい`STYLE`要素と同名属性で拡張すると明記し、文書内スタイルシート用の`STYLE`を`HEAD`へ置いた。同草案はHTML 2.0の`LINK`を基礎に`REL=stylesheet`を定義し、描画指示を個別要素、文書ヘッド内のグループ、または外部スタイルシートへ置いて、新しい描画フォームのたびにHTML自体を拡張しないことを目的とした。ただし、この説明はHTML 3.0草案より後であり、4月の導入原因を単独では証明しない。[IETF draft-ietf-html-style-00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-style-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-style-00)）

1996年1月版は`STYLE`を文書内行内スタイルシート用の新要素とし、属性名を`NOTATION`から`TYPE`へ変更した。HTML 3.2は将来のスタイルシート導入用プレースホルダーとして収録し、1997年のCougar向け草案を経てHTML 4が`HEAD`内のスタイル規則として規定した。[IETF draft-ietf-html-style-01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-style-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-style-01)） [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） [HTML 4.01](../../raw/www.w3.org/TR/html401/present/styles.html)（[公開元](https://www.w3.org/TR/html401/present/styles.html#style-group)）

## HTML直前の祖先

HTML 3.0 `STYLE`より前の具体的な要素、実装、または提案は未確認である。後発のIETF HTML WG草案は既存のHTML 2.0 `HEAD`／`LINK`を文書内の規則と外部スタイルシートの二つの経路に再利用する設計を明記するが、HTML 3.0からの採用を述べない。

## さらに上流の由来

### 証拠

HTML 3.0導入は、HTMLへの表現機能追加を抑え、利用者の好みやリソースの制約を考慮した描画をスタイルシートへ分離する要求を示す。1994年のCascading HTML Style Sheets提案は著者と読者のスタイルをカスケードするモデルと、外部シートを`LINK REL="style"`で結ぶ構文を提案した。[HTML 3.0 introduction](../../raw/www.w3.org/MarkUp/html3/intro.html)（[公開元](https://www.w3.org/MarkUp/html3/intro.html)） [CSS proposal](../../raw/www.w3.org/People/howcome/p/cascade.html)（[公開元](https://www.w3.org/People/howcome/p/cascade.html)）

### 解釈

スタイルシート一般とカスケードは設計背景だが、1994年案は外部`LINK`を示すだけで`STYLE`要素の起源を直接説明しない。要素として確認できる系譜は1995年4月のHTML 3.0から始める。

## 系譜

表現をHTMLから分離する要求 → HTML 3.0 `STYLE`（1995-04-25）

HTML 2.0 `HEAD`／`LINK`を再利用するスタイルシート統合案 → IETF HTML WG `STYLE`草案（1995-11-22）→ W3Cスタイル草案群（1996年）

HTML 3.2の`STYLE`プレースホルダー

Cougar `STYLE`草案

HTML 4 `STYLE` → 現行HTML `<style>`

HTML 3.0から1995年11月草案、1996年草案群からHTML 3.2／Cougar、HTML 3.2／CougarからHTML 4への要素単位の接続は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-04-25 | HTML 3.0：[IETF Datatracker](../../raw/datatracker.ietf.org/doc/draft-ietf-html-specv3/index.html)・[introduction](../../raw/www.w3.org/MarkUp/html3/intro.html)・[document head](../../raw/www.w3.org/MarkUp/html3/dochead.html)（[公開元1](https://datatracker.ietf.org/doc/draft-ietf-html-specv3/)・[公開元2](https://www.w3.org/MarkUp/html3/intro.html)・[公開元3](https://www.w3.org/MarkUp/html3/dochead.html)） | 失効したIETF Internet-Draftの仕様本文 | `LINK REL=StyleSheet`と`HEAD`内の`STYLE`を規定する、確認できる最初の出現。 | 2026-08-10 |
| 1995-11-22 | [*HTML and Style Sheets* draft-00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-style-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-style-00)） | IETF HTML WG Internet-Draft | HTMLへ新しい`STYLE`要素を追加し、`HEAD`内の規則とHTML 2.0 `LINK`による外部シートを一体として定義する。 | 2026-08-10 |
| 1996-01-23 | [*HTML and Style Sheets* draft-01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-style-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-style-01)） | IETF HTML WG Internet-Draft | `STYLE`を維持し、スタイル言語指定を`TYPE`へ変更する。 | 2026-08-10 |
| 1996-12-17 | [CSS1 §1.1](../../raw/www.w3.org/TR/REC-CSS1-961217)（[公開元](https://www.w3.org/TR/REC-CSS1-961217#containment-in-html)） | W3C Recommendation | HTMLとスタイルシートの四つの結合方式、`STYLE`の使用例。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） | W3C Recommendation | 将来のスタイルシート導入用プレースホルダーとしての`STYLE`。 | 2026-08-09 |
| 1997-03-24 | [*HTML and Style Sheets*](../../raw/www.w3.org/TR/WD-style-970324)（[公開元](https://www.w3.org/TR/WD-style-970324)） | W3C Working Draft | Cougar向け`STYLE`定義、言語非依存、ヘッド内グループ化。 | 2026-08-09 |
| 1995〜1997 | [*Cougar — The next version of HTML*](../../raw/www.w3.org/MarkUp/Cougar/index.html)（[公開元](https://www.w3.org/MarkUp/Cougar/)） | W3C標準化ページ | 列挙された草案がHTML 4.0の基礎を形成したという集合単位の関係。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01 §14.2.3](../../raw/www.w3.org/TR/html401/present/styles.html)（[公開元](https://www.w3.org/TR/html401/present/styles.html#style-group)） | W3C Recommendation | `STYLE`を`HEAD`内のスタイル規則として本格的に規定。 | 2026-08-09 |

## 確度

**A−**

具体的なHTML 3.0 `STYLE`と導入要求を確認でき、後発IETF／W3C草案、HTML 3.2、HTML 4まで同じ要素を追跡できるが、HTML 3.0から1995年11月草案、およびCougar／HTML 3.2からHTML 4への要素単位の採録記録が欠けるため。

## 否定された仮説

1995年11月22日のIETFスタイル草案が`STYLE`要素を初めて導入したという説明。HTML 3.0草案が同年4月25日にすでに`STYLE`を収録する。CSSが`STYLE`要素を発明してHTMLへ移植したという説明も、CSS1が`STYLE`をHTML側の結合機構として参照し、1994年CSS案が`LINK`しか示さないため採用しない。DSSSLの特定要素からの派生も確認できない。

## 未解決

- 1995年4月25日のHTML 3.0草案以前に`STYLE`要素構文を提案した資料はあるか。
- HTML 3.0 `STYLE`と1995年11月22日のIETF HTML WG草案を結ぶ採用・継承記録はあるか。
- HTML 3.2プレースホルダーへ収録した個別の編集・合意記録はあるか。
- Cougar草案からHTML 4 `STYLE`へ採録した際の要素単位の変更記録はあるか。
