---
status: 完成
---

# `<base>`

## 概要

1991年10月のBerners-Leeのメールは未使用のBase Addressタグに言及し、1992年のCERNタグ一覧は文書が取得時の文脈を失っても相対アドレスを解決する要求を説明する。同年11月にBerners-Leeは`BaseAddress`を採用すべきだと回答し、1993年1月14日には`SAVEDAS`を標準として入れる意向を示した。その後のrevision 1.4 DTDにはまだ基底アドレス要素がないが、同年3月の保存仕様は`BASE HREF`を本文とDTDに収録し、3月10日のメールは改訂版HTML仕様の配布を告知する。最終的な構文と名称を決めた記録は回収できていない。

## 現在の意味

WHATWG HTML Living Standardでは、URL解析に使う文書基準URLと、ハイパーリンクナビゲーションおよびフォーム送信に使う既定のナビゲーション対象名を指定する。要素自体はそれ以外の内容を表さない。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/semantics.html#the-base-element)、2026-08-09確認）

## HTMLへの導入

Berners-Leeは1991年10月29日のメールでBase Addressタグは未使用だと述べており、この時点で名称付きのタグ案が存在したことを確認できる。1992年11月のCERNタグ一覧は形式を未定・未使用としつつ、文書がメールされた場合や複数のアドレスで見える場合にも相対アドレスを正しく解決するという要素固有の要求を記録する。11月19日にConnollyが`BaseAddress`タグの扱いを問い、Berners-Leeは採用すべきだと回答した。Berners-Leeの*Future plans for HTML*は、文書を保存したアドレスを持たせるタグ名として`SAVEDAS`を提案し、1993年1月14日のメールでは、文書内容だけから相対アドレスを解決する`SAVEDAS`アドレスを標準として入れる意向を述べる。[Berners-Lee, “Re: status. Re: X11 BROWSER for WWW”](../../raw/lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)） [Berners-Lee, *HTML Tags*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） [Connolly, “HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)） [Berners-Lee, “Re: HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)） [Berners-Lee, *Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） [Berners-Lee, “Re: HTML todo list”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0070.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0070.html)）

W3Cが保存するrevision 1.4 DTDは、埋め込まれた`$Id`を1993年1月20日とし、`HEAD`に`TITLE`、`ISINDEX`、`NEXTID`、`LINK`を宣言するが、`BASE`も`SAVEDAS`も含まない。RCS ChangeLogは同revisionの日付を2月3日としており、保存資料間で日付表現に差がある。1993年3月の保存仕様はURLの参照文脈となる`BASE HREF`を本文と付録DTDへ収録する。3月10日にBerners-Leeは、最近改訂したHTML仕様のPostScript版とテキスト版をCERNから配布すると告知した。6月のInternet-Draftも同じ要素を収録するが、付録の`$Id`はrevision 1.3の1993年1月6日を残している。この識別子は1月14日の採用意向やrevision 1.4より前であるため、`BASE HREF`の成立日には使えない。[Connolly, *HTML DTD* revision 1.4](../../raw/www.w3.org/History/1993/WWW/LibHTML/src/hypertext/HTML.dtd.html)（[公開元](https://www.w3.org/History/1993/WWW/LibHTML/src/hypertext/HTML.dtd.html)） [*html.dtd RCS ChangeLog*](../../raw/www.w3.org/MarkUp/html-spec/ChangeLog)（[公開元](https://www.w3.org/MarkUp/html-spec/ChangeLog)） [Berners-Lee and Connolly, *Hypertext Markup Language*](../../raw/suika.suikawiki.org/www/2005/pre-id/html-spec-199303.pdf)（[公開元](https://suika.suikawiki.org/www/2005/pre-id/html-spec-199303.pdf)） [Berners-Lee, “World-Wide Web documentation in paper form”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0245.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0245.html)） [1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）

## HTML直前の祖先

未確認。HTML内部のBase Addressタグ案、採用決定、`SAVEDAS`を標準化する意向は確認できるが、`BASE HREF`という最終構文と名称を選んだ記録、およびHTML外の具体的祖先は回収できていない。

## さらに上流の由来

### 証拠

1991年から1992年の資料が直接示す背景は、相対アドレスが文書の取得URLを文脈として必要とし、メールや複数アドレスによりその文脈を失いうるというURL処理上の問題である。

### 解釈

`BASE`は文書を移送・再保存しても相対URLの解決基準を文書内に保持するための文書コントロール要素として成立したと説明できる。

## 系譜

HTMLのBase Addressタグ案（1991）→ 採用決定／`SAVEDAS`標準化意向（1992–1993-01-14）→［`BASE HREF`への具体化記録は未回収］→ HTML仕様 `BASE HREF`（1993-03）→ 現行HTML `<base>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1991-10-29 | [“Re: status. Re: X11 BROWSER for WWW”](../../raw/lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html)） | www-talkへの当事者投稿 | Base Addressタグは未使用だと記し、この時点で名称付きのタグ案が存在したことを示す。 | 2026-08-11 |
| 1992-11-13（更新日） | [*HTML Tags*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | 文脈から切り離された文書で相対アドレスを解決するため基底アドレスが必要だと説明し、タグ形式は未定・未使用と記す。 | 2026-08-09 |
| 1992-11-19 | [“HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[“Re: HTML DTD issues”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)（[公開元1](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)・[公開元2](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)） | www-talkでのDTD編集者とHTML設計者の議論 | Connollyが`BaseAddress`タグの扱いを問い、Berners-Leeが採用すべきだと回答する。 | 2026-08-11 |
| 1992-12-02（更新日） | [*Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)） | CERN設計ノート | 保存時の文書アドレスを記録するタグとして`SAVEDAS`を提案する。 | 2026-08-09 |
| 1993-01-14 | [“Re: HTML todo list”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0070.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0070.html)） | www-talkへの設計者投稿 | 文書内容だけから相対アドレスを解決する`SAVEDAS`アドレスを標準として入れる意向を記す。 | 2026-08-11 |
| 1993-01-20（DTD `$Id`）／1993-02-03（RCS ChangeLog） | [*HTML DTD* revision 1.4](../../raw/www.w3.org/History/1993/WWW/LibHTML/src/hypertext/HTML.dtd.html)（[公開元1](https://www.w3.org/History/1993/WWW/LibHTML/src/hypertext/HTML.dtd.html)）・[*html.dtd RCS ChangeLog*](../../raw/www.w3.org/MarkUp/html-spec/ChangeLog)（[公開元2](https://www.w3.org/MarkUp/html-spec/ChangeLog)） | W3C保存のDTDと改訂履歴 | revision 1.4の二つの日付表現を示す。保存DTDは`HEAD`要素群と`A`の`HREF`を宣言するが、`BASE`も`SAVEDAS`も含まない。 | 2026-08-11 |
| 1993-03（保存仕様）／1993-03-10（配布告知） | [*Hypertext Markup Language*](../../raw/suika.suikawiki.org/www/2005/pre-id/html-spec-199303.pdf)（[公開元1](https://suika.suikawiki.org/www/2005/pre-id/html-spec-199303.pdf)）・[“World-Wide Web documentation in paper form”](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0245.html)（[公開元2](http://1997.webhistory.org/www.lists/www-talk.1993q1/0245.html)） | 保存されたHTML仕様とwww-talkへの設計者投稿 | 3月の仕様は`BASE HREF`を本文とDTDに収録し、3月10日の投稿は最近改訂したHTML仕様のPostScript版とテキスト版をCERNから配布すると告知する。 | 2026-08-12 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | 本文と付録DTDでURLの参照文脈となる`BASE HREF`を定義する。付録の古いrevision 1.3 `$Id`だけから構文の成立日を1月6日とは判定できない。 | 2026-08-11 |
| 1995-11 | [RFC 1866: *Hypertext Markup Language - 2.0*](../../raw/www.rfc-editor.org/rfc/rfc1866.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1866#section-5.2.2)） | IETF Standards Track RFC | 文脈から切り離された文書の相対URLを解釈する基底アドレスとして標準化する。 | 2026-08-09 |

## 確度

**B**

HTMLへの導入理由、名称付きのタグ案、採用決定と標準化意向は直接史料で確認できるが、HTML外の具体的な先行要素または`BASE HREF`への具体化過程を確認できないため。

## 否定された仮説

SGMLの同名概念または後代のURL仕様から`BASE`の起源を逆算する説明。確認できる直接の背景は初期HTMLにおける文脈外文書の相対アドレス解決要求である。

## 未解決

- 1993年1月20日／2月3日のrevision 1.4から同年3月の保存仕様までの間に、`SAVEDAS`案を`BASE HREF`へ具体化したメール、DTDリビジョン、ソース変更は残っているか。
- 基底アドレス機構を既存のハイパーテキストシステムまたは文書形式から採用したことを示す資料はあるか。
