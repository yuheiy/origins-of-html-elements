# `<small>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML 3.0での初期出現と意味を検証済み（導入理由と採用元は未解決）

## 概要

HTML 3.0草案でsmall printを小さいfontで表示するpresentational elementとして確認でき、HTML 3.2へ継承された。提案者、導入理由、Netscape資料との採用方向は確定できない。

## 現在の意味

WHATWG HTML Living Standardでは、small printのような短いside commentを表す。典型例は免責、注意、法的制限、著作権、帰属、license要件であり、単なる文字縮小やde-emphasis、複数段落に及ぶ本文には使わない。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element)（2026-08-09確認）

## HTMLへの導入

1995年3月のHTML 3.0草案“Font Style Elements”は、`SMALL (Small print)`を、囲んだtextを通常より小さいfontで可能なら表示する要素として定義した。[HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html)

HTML 3.2は`SMALL`をtext-level font style elementとして収録し、「small fontへ置く」と定義した。HTML 3.2は1996年初頭のrecommended practiceとwidely deployed featuresを取り込んだが、`SMALL`個別の提案者や採用元は明記しない。[HTML 3.2](https://www.w3.org/TR/REC-html32#font-style)

## HTML直前の祖先

未確認。Netscapeの“Extensions to HTML 3.0”保存版にもほぼ同じ定義があるが、原文書の作成日、実装版、HTML 3.0草案との採用方向を確定できない。

## さらに上流の由来

### 証拠

HTML 3.0草案とHTML 3.2は、small printを小さいfontで表示するpresentational meaningを示す。Netscape保存資料も同様の定義を持つが、保存日は1997年で原公開日は確定できない。[HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html) [Netscape保存版](https://web.archive.org/web/19970613212205id_/http://home.netscape.com:80/assist/net_sites/html_extensions_3.html)

### 解釈

現行side-comment semanticsは当初の“small print”と語義上の連続性があるが、現在の意味から1995年の導入理由を逆算しない。

## 系譜

HTML 3.0 `SMALL`（1995年） → HTML 3.2 `SMALL` → HTML 4 `SMALL` → 現行HTML `<small>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-03 | HTML 3.0 draft “Font Style Elements” | W3C保存仕様草案 | `SMALL`をsmall printを小さいfontで表示する要素として定義。 | [一次資料](https://www.w3.org/MarkUp/html3/emphasis.html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | `SMALL`をsmall font用のfont-style elementとして収録。 | [一次資料](https://www.w3.org/TR/REC-html32#font-style) | 2026-08-09 |
| 日付未確定（1997-06-13保存） | *Extensions to HTML 3.0* | Netscape公式資料の保存版 | Navigator 2.0文脈の`SMALL`定義。HTML 3.0との採用方向は確定できない。 | [保存版](https://web.archive.org/web/19970613212205id_/http://home.netscape.com:80/assist/net_sites/html_extensions_3.html) | 2026-08-09 |

## 確度

**C**

確認可能な最初期の出現と当時のpresentational meaningは特定できるが、導入理由と具体的祖先を確認できないため。

## 否定された仮説

Netscape `SMALL`からHTML 3.0へ入ったという説明。両資料の文言は近いが、Netscape資料は後代のsnapshotしか確認できず、作成日と採用方向を固定できない。出版上のsmall print慣習からの直接採用も、判断を示す史料がない。

## 未解決

- HTML 3.0 `SMALL`の最初の提案者、初出diff、mail、導入要求は確認できるか。
- Netscape資料の初版日、Navigatorでの初回実装版、HTML 3.0草案との編集関係は何か。
- presentational font-style elementから現行side-comment elementへ意味を変えたcommitと理由は何か。

## 調査記録

HTML 3.0、HTML 3.2、Netscape資料の保存版、現行Living Standardを確認した。横断比較は[Text/structure/edits要素の調査ノート](../research/text-structure-edits-elements.md)を参照する。

敵対的レビュー（2026-08-09）では、HTML 3.0と3.2の定義、日付未確定のNetscape保存文書を再確認した。Netscape実装とHTML 3.0草案の先後・採用方向を確定できず、現行semanticsも初期理由へ逆算しないためCを維持した。
