---
status: 完成
---

# `<style>`

## 概要

HTML 3.0 DTDの変更履歴は、1995年2月9日に既存`STYLE`を特定のスタイル言語から切り離して単純化したと記録する。3月10日にはArenaが提案中のHTML3 `STYLE`を実装し、4月5日のHTML WG議題がスタイルシート方向の拡張要件として`STYLE`を挙げ、4月25日のHTML 3.0草案が文書内のスタイル上書きを`HEAD`へ置く要素として公開した。後続草案は`NOTATION`を`TYPE`へ変更し、複数シートとメディア指定を整えてHTML 4へ採録した。2月9日以前の原案と命名者は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、CSSスタイルシートを文書へ埋め込む。`media`で適用メディアを制限し、`blocking`で描画を妨げる処理の扱いを指定できる。利用者向け内容自体は表さない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-style-element)、2026-08-09確認）

## HTMLへの導入

Dave RaggettによるHTML 3.0 DTDの変更履歴は、1995年2月9日に`STYLE`を特定のスタイル言語との結合から切り離して単純化したと記録する。したがって要素は遅くともこの日に存在したが、変更前の定義を含む公開版は確認できない。3月10日にHåkon W. Lieは、W3CのHTML3テストベッドArenaのプレリリースが「提案中のHTML3 `<STYLE>`」を使って利用者と著者の表示設定を扱うと報告した。4月5日のHTML WG議題は、スタイルシート自体をHTMLの範囲外とする一方、HTML 3.0の要件候補に`ID`、`CLASS`、`STYLE`による拡張性を明記した。4月25日の公開草案は、外部スタイルシートを`LINK REL=StyleSheet`で参照し、文書固有の上書きを`HEAD`内の`STYLE`へ置いた。[HTML 3.0 DTD](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） [Arena実装報告](../../raw/www.w3.org/mid/9503102018.AA03218@www4.cern.ch;list=www-html)（[公開元](https://www.w3.org/mid/9503102018.AA03218@www4.cern.ch;list=www-html)） [HTML WG議題](../../raw/www.w3.org/mid/9504060201.AA02364@www18.w3.org;list=www-html)（[公開元](https://www.w3.org/mid/9504060201.AA02364@www18.w3.org;list=www-html)） [HTML 3.0 introduction](../../raw/www.w3.org/MarkUp/html3/intro.html)（[公開元](https://www.w3.org/MarkUp/html3/intro.html)） [HTML 3.0 document head](../../raw/www.w3.org/MarkUp/html3/dochead.html)（[公開元](https://www.w3.org/MarkUp/html3/dochead.html)）

11月22日にBert Bos、Dave Raggett、Håkon Lieが公開したW3C Working Draft *HTML3 and Style Sheets*は、HTMLを新しい`STYLE`要素と同名属性で拡張すると明記し、文書内スタイルシート用の`STYLE`を`HEAD`へ置いた。同草案はHTML 2.0の`LINK`を基礎に`REL=stylesheet`を定義し、描画指示を個別要素、文書ヘッド内のグループ、または外部スタイルシートへ置いて、新しい描画形式のたびにHTML自体を拡張しないことを目的とした。対応するIETF revision 00と1996年1月15日のW3C版は`NOTATION`を使い、1月23日のIETF revision 01はこれを`TYPE`へ変更した。[W3C Working Draft](../../raw/www.w3.org/TR/WD-style-951122)（[公開元](https://www.w3.org/TR/WD-style-951122)） [IETF revision 00](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-style-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-style-00)） [1996年W3C版](../../raw/www.w3.org/TR/WD-style-960115)（[公開元](https://www.w3.org/TR/WD-style-960115)） [IETF revision 01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-style-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-style-01)）

HTML 3.2は将来のスタイルシート導入用プレースホルダーとして`STYLE`を収録した。1997年3月24日のCougar草案は複数`STYLE`、`TYPE`、`MEDIA`、`TITLE`を定義し、7月8日のHTML 4.0 First Public Working Draftは`TYPE`を必須としてこの要素を採録した。FPWDのRCS識別子は`styles.src,v 1.34`、9月17日版は`1.48`であり、後者も同じ要素と属性を維持する。この経路がHTML 4 Recommendationへ続く。[HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） [Cougar草案](../../raw/www.w3.org/TR/WD-style-970324)（[公開元](https://www.w3.org/TR/WD-style-970324)） [HTML 4.0 FPWD](../../raw/www.w3.org/TR/WD-html40-970708/present/styles.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/present/styles.html#h-8.1.1.3)） [HTML 4.0 1997年9月草案](../../raw/www.w3.org/TR/WD-html40-970917/present/styles.html)（[公開元](https://www.w3.org/TR/WD-html40-970917/present/styles.html#h-15.1.3)） [HTML 4.01](../../raw/www.w3.org/TR/html401/present/styles.html)（[公開元](https://www.w3.org/TR/html401/present/styles.html#style-group)）

## HTML直前の祖先

公開HTML 3.0草案の直前に確認できる祖先は、HTML 3.0 DTDの変更履歴に残る2月9日以前の`STYLE`原案である。3月10日のArena実装報告は、同じ提案中のHTML3 `STYLE`が実装試験されていたことを独立に確認する。HTML WGは4月5日に`STYLE`をHTML 3.0の拡張要件候補として扱い、同じ月の公開草案が正式なDTDと説明を与えた。変更前のDTD版は確認できないため、2月9日の単純化以前にどのスタイル言語へ結合していたかは未解決である。[HTML 3.0 DTD](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） [Arena実装報告](../../raw/www.w3.org/mid/9503102018.AA03218@www4.cern.ch;list=www-html)（[公開元](https://www.w3.org/mid/9503102018.AA03218@www4.cern.ch;list=www-html)） [HTML WG議題](../../raw/www.w3.org/mid/9504060201.AA02364@www18.w3.org;list=www-html)（[公開元](https://www.w3.org/mid/9504060201.AA02364@www18.w3.org;list=www-html)）

## さらに上流の由来

### 証拠

HTML 3.0導入は、HTMLへの表現機能追加を抑え、利用者の好みやリソースの制約を考慮した描画をスタイルシートへ分離する要求を示す。1994年のCascading HTML Style Sheets提案は著者と読者のスタイルをカスケードするモデルと、外部シートを`LINK REL="style"`で結ぶ構文を提案した。[HTML 3.0 introduction](../../raw/www.w3.org/MarkUp/html3/intro.html)（[公開元](https://www.w3.org/MarkUp/html3/intro.html)） [CSS proposal](../../raw/www.w3.org/People/howcome/p/cascade.html)（[公開元](https://www.w3.org/People/howcome/p/cascade.html)）

### 解釈

スタイルシート一般とカスケードは設計背景だが、1994年案は外部`LINK`を示すだけで`STYLE`要素の起源を直接説明しない。要素として確認できる系譜は、HTML 3.0 DTDが2月9日に単純化したと記録する原案から始める。

## 系譜

表現をHTMLから分離する要求 → HTML 3.0 DTDの`STYLE`原案（1995-02-09以前）→ 単純化されたHTML 3.0 DTD `STYLE` → HTML 3.0 `STYLE`（1995-04-25）

提案中のHTML3 `STYLE` → Arena実装（1995-03-10）

HTML 2.0 `HEAD`／`LINK`を再利用する*HTML3 and Style Sheets* `STYLE`（1995-11-22）→ IETF revision 01 `STYLE TYPE`（1996-01-23）

HTML 3.2の`STYLE`プレースホルダー

Cougar `STYLE`草案 → HTML 4.0 FPWD `STYLE` → HTML 4 `STYLE` → 現行HTML `<style>`

HTML 3.0から1995年11月草案、およびスタイル草案群からHTML 3.2プレースホルダーへの個別接続は未確認である。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1995-02-09 | [HTML 3.0 DTD](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） | W3CのHTML 3.0 DTD | 変更履歴が`STYLE`を特定のスタイル言語との結合から切り離して単純化したと記録し、要素がこの日以前に存在したことを示す。 | 2026-08-12 |
| 1995-03-10 | [Håkon W. Lie, “Style sheets in Arena”](../../raw/www.w3.org/mid/9503102018.AA03218@www4.cern.ch;list=www-html)（[公開元](https://www.w3.org/mid/9503102018.AA03218@www4.cern.ch;list=www-html)） | W3C公開メーリングリスト | HTML3テストベッドArenaが提案中のHTML3 `STYLE`を実装し、利用者と著者の表示設定を扱った。 | 2026-08-12 |
| 1995-04-05 | [Dan Connolly, “HTML VWG Agenda”](../../raw/www.w3.org/mid/9504060201.AA02364@www18.w3.org;list=www-html)（[公開元](https://www.w3.org/mid/9504060201.AA02364@www18.w3.org;list=www-html)） | IETF HTML WG議題 | スタイルシート自体をHTMLの範囲外とする一方、HTML 3.0の拡張要件候補として`ID`、`CLASS`、`STYLE`を列挙。 | 2026-08-12 |
| 1995-04-25 | HTML 3.0：[IETF Datatracker](../../raw/datatracker.ietf.org/doc/draft-ietf-html-specv3/__index)・[introduction](../../raw/www.w3.org/MarkUp/html3/intro.html)・[document head](../../raw/www.w3.org/MarkUp/html3/dochead.html)（[公開元1](https://datatracker.ietf.org/doc/draft-ietf-html-specv3/)・[公開元2](https://www.w3.org/MarkUp/html3/intro.html)・[公開元3](https://www.w3.org/MarkUp/html3/dochead.html)） | 失効したIETF Internet-Draftの仕様本文 | `LINK REL=StyleSheet`と`HEAD`内の`STYLE`を規定する、確認できる最初の公開仕様。 | 2026-08-10 |
| 1995-11-22 | [*HTML3 and Style Sheets*](../../raw/www.w3.org/TR/WD-style-951122)（[公開元](https://www.w3.org/TR/WD-style-951122)） | W3C Working Draft | Bos、Raggett、LieがHTMLへ新しい`STYLE`要素を追加し、`HEAD`内の規則とHTML 2.0 `LINK`による外部シートを一体として定義する。 | 2026-08-12 |
| 1996-01-23 | [*HTML and Style Sheets* draft-01](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-style-01)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-style-01)） | IETF HTML WG Internet-Draft | `STYLE`を維持し、スタイル言語指定を`TYPE`へ変更する。 | 2026-08-10 |
| 1996-12-17 | [CSS1 §1.1](../../raw/www.w3.org/TR/REC-CSS1-961217)（[公開元](https://www.w3.org/TR/REC-CSS1-961217#containment-in-html)） | W3C Recommendation | HTMLとスタイルシートの四つの結合方式、`STYLE`の使用例。 | 2026-08-09 |
| 1997-01-14 | [HTML 3.2](../../raw/www.w3.org/TR/REC-html32)（[公開元](https://www.w3.org/TR/REC-html32)） | W3C Recommendation | 将来のスタイルシート導入用プレースホルダーとしての`STYLE`。 | 2026-08-09 |
| 1997-03-24 | [*HTML and Style Sheets*](../../raw/www.w3.org/TR/WD-style-970324)（[公開元](https://www.w3.org/TR/WD-style-970324)） | W3C Working Draft | Cougar向け`STYLE`定義、言語非依存、ヘッド内グループ化。 | 2026-08-09 |
| 1995〜1997 | [*Cougar — The next version of HTML*](../../raw/www.w3.org/MarkUp/Cougar/__index)（[公開元](https://www.w3.org/MarkUp/Cougar/)） | W3C標準化ページ | 列挙された草案がHTML 4.0の基礎を形成したという集合単位の関係。 | 2026-08-09 |
| 1997-07-08〜09-17 | HTML 4.0 Working Draft：[FPWD](../../raw/www.w3.org/TR/WD-html40-970708/present/styles.html)・[9月版](../../raw/www.w3.org/TR/WD-html40-970917/present/styles.html)（[公開元1](https://www.w3.org/TR/WD-html40-970708/present/styles.html#h-8.1.1.3)・[公開元2](https://www.w3.org/TR/WD-html40-970917/present/styles.html#h-15.1.3)） | W3C Working Draft | RCS revisions 1.34と1.48が`STYLE`、必須`TYPE`、`MEDIA`、`TITLE`を連続して定義し、HTML 4への要素単位の採録を確認できる。 | 2026-08-12 |
| 1999-12-24 | [HTML 4.01 §14.2.3](../../raw/www.w3.org/TR/html401/present/styles.html)（[公開元](https://www.w3.org/TR/html401/present/styles.html#style-group)） | W3C Recommendation | `STYLE`を`HEAD`内のスタイル規則として本格的に規定。 | 2026-08-09 |

## 確度

**A**

HTML 3.0 DTDの変更履歴、提案中のHTML3 `STYLE`を実装したArena、HTML WGの要件候補、公開HTML 3.0草案が要素単位で連続し、導入直前の具体的な原案・実装からHTMLへの採録を直接確認できるため。後続のCougarからHTML 4への採録も連続草案とRCS識別子で確認できる。

## 否定された仮説

1995年4月25日のHTML 3.0公開草案または11月22日のスタイル草案が`STYLE`要素を初めて導入したという説明。HTML 3.0 DTDは2月9日に既存要素を単純化したと記録し、Arenaは3月10日に提案中のHTML3 `STYLE`を実装済みだった。CSSが`STYLE`要素を発明してHTMLへ移植したという説明も、CSS1が`STYLE`をHTML側の結合機構として参照し、1994年CSS案が`LINK`しか示さないため採用しない。DSSSLの特定要素からの派生も確認できない。

## 未解決

- 1995年2月9日に単純化される以前の`STYLE`定義、結合対象のスタイル言語、要素名を選んだ人物と議論。
- HTML 3.0 `STYLE`と1995年11月22日のIETF HTML WG草案を結ぶ採用・継承記録はあるか。
- HTML 3.2プレースホルダーへ収録した個別の編集・合意記録はあるか。
