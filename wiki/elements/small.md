---
status: 完成
---

# `<small>`

## 概要

HTML 3.0草案でsmall printを小さいfontで表示するpresentational elementとして確認でき、HTML 3.2へ継承された。WHATWG sourceの最初の公開履歴時点では、legal restrictions等のsmall printまたはside commentsという現行のsemantic modelへ再定義済みだったが、その変更前の編集記録は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、small printのような短いside commentを表す。典型例は免責、注意、法的制限、著作権、帰属、license要件であり、単なる文字縮小やde-emphasis、複数段落に及ぶ本文には使わない。[一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element)（2026-08-09確認）

## HTMLへの導入

1995年3月のHTML 3.0草案“Font Style Elements”は、`SMALL (Small print)`を、囲んだtextを通常より小さいfontで可能なら表示する要素として定義した。[HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html)

HTML 3.2は`SMALL`をtext-level font style elementとして収録し、「small fontへ置く」と定義した。HTML 3.2は1996年初頭のrecommended practiceとwidely deployed featuresを取り込んだが、`SMALL`個別の提案者や採用元は明記しない。[HTML 3.2](https://www.w3.org/TR/REC-html32#font-style)

2006年3月2日のWHATWG source初回check-inでは、`small`をlegal restrictions、copyrights、disadvantages等のsmall printまたはother side commentsとして定義し、単なるde-emphasisではないと明記している。したがってsemantic reinterpretationは遅くともこの時点までに成立していたが、初回check-in以前の変更commitと判断理由はこの履歴から確認できない。[WHATWG初回source](https://github.com/whatwg/html/blob/c3550d90867392905edbd91c94fec8c89fbfe648/source#L4084-L4090)

## HTML直前の祖先

未確認。Netscapeの“Extensions to HTML 3.0”保存版にもほぼ同じ定義があるが、原文書の作成日、実装版、HTML 3.0草案との採用方向を確定できない。

## さらに上流の由来

### 証拠

HTML 3.0草案とHTML 3.2は、small printを小さいfontで表示するpresentational meaningを示す。Netscape保存資料も同様の定義を持つが、保存日は1997年で原公開日は確定できない。WHATWGの初回sourceはsmall printという語を維持しつつ、表示ではなくlegal restrictions等のside commentとして定義する。[HTML 3.0](https://www.w3.org/MarkUp/html3/emphasis.html) [Netscape保存版](https://web.archive.org/web/19970613212205id_/http://home.netscape.com:80/assist/net_sites/html_extensions_3.html) [WHATWG初回source](https://github.com/whatwg/html/blob/c3550d90867392905edbd91c94fec8c89fbfe648/source#L4084-L4090)

### 解釈

WHATWGは従来の“small print”を表示寸法ではなく、legal restrictions等を含むside commentというmedia-independentな意味へ再解釈した。初回source以前の判断過程は不明なので、このsemantic modelから1995年の導入理由は逆算しない。

## 系譜

HTML 3.0 `SMALL`（1995年） → HTML 3.2 `SMALL` → HTML 4 `SMALL`

→（遅くとも2006年3月までにsemantic reinterpretation）WHATWG `small` → 現行HTML `<small>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995-03 | HTML 3.0 draft “Font Style Elements” | W3C保存仕様草案 | `SMALL`をsmall printを小さいfontで表示する要素として定義。 | [一次資料](https://www.w3.org/MarkUp/html3/emphasis.html) | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | `SMALL`をsmall font用のfont-style elementとして収録。 | [一次資料](https://www.w3.org/TR/REC-html32#font-style) | 2026-08-09 |
| 日付未確定（1997-06-13保存） | *Extensions to HTML 3.0* | Netscape公式資料の保存版 | Navigator 2.0文脈の`SMALL`定義。HTML 3.0との採用方向は確定できない。 | [保存版](https://web.archive.org/web/19970613212205id_/http://home.netscape.com:80/assist/net_sites/html_extensions_3.html) | 2026-08-09 |
| 2006-03-02（WHATWG source初回check-in） | WHATWG, *Web Applications 1.0* source | 仕様source | `small`をlegal restrictions等のsmall printまたはother side commentsとし、de-emphasisではないと定義。 | [一次資料](https://github.com/whatwg/html/blob/c3550d90867392905edbd91c94fec8c89fbfe648/source#L4084-L4090) | 2026-08-09 |

## 確度

**B**

現行のsemantic design modelが遅くともWHATWG sourceの初回check-in時点で成立していたことは確認できるが、その変更理由、正確な変更時点、HTML 3.0以前の具体的祖先は確認できないため。

## 否定された仮説

Netscape `SMALL`からHTML 3.0へ入ったという説明。両資料の文言は近いが、Netscape資料は後代のsnapshotしか確認できず、作成日と採用方向を固定できない。出版上のsmall print慣習からの直接採用も、判断を示す史料がない。

## 未解決

- HTML 3.0 `SMALL`の最初の提案者、初出diff、mail、導入要求は確認できるか。
- Netscape資料の初版日、Navigatorでの初回実装版、HTML 3.0草案との編集関係は何か。
- presentational font-style elementから現行side-comment elementへ意味を変えた、2006年3月2日以前の編集記録と理由は確認できるか。
