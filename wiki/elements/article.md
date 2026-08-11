---
status: 完成
---

# `<article>`

## 概要

2004年8月にWHATWG編集者Ian Hicksonが、セクションより大きくページより小さいテキスト単位の候補として`entry`、`post`、`article`を提示した。11月には既存の`div class="post"`を`article`へ置換できることを設計要求として明記し、2005年草案ではブログ投稿やフォーラム投稿等の独立したセクションと定義した。

## 現在の意味

WHATWG HTML Living Standardでは、文書、ページ、アプリケーション、サイト内で完全または自己完結し、原則として独立して配布または再利用できる構成を表す。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-article-element)、2026-08-10確認）

## HTMLへの導入

2004年8月29日のWHATWGスレッドで、Hicksonは`entry`、`post`、`article`をセクションより大きくページより小さいテキスト単位の候補として挙げ、目的を`div`の最も一般的な疑似意味的用途を減らすことだと説明した。11月12日には、既存マークアップの`div class="post"`を`article`へ置換できることをセクショニングモデルの要件として明記し、フォーラム投稿やブログ記事等をマークアップする要素を求めていると説明した。12月8日版の保存草案はWeblog投稿、雑誌記事、フォーラム投稿等として定義し、2005年9月1日版もブログ投稿等の独立したセクションとして定義する。[2004年8月の提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） [2004年11月の設計要求](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)） [役割の説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002363.html)） [2004年草案](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#article)） [2005年草案](../../raw/whatwg.org/specs/web-apps/2005-09-01/__index)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-article)）

## HTML直前の祖先

既存Webでブログやフォーラムの投稿を包んでいた`div class="post"`である。Hicksonはこのマークアップを`article`へ置換できることを設計要求として直接示した。2005年12月のGoogle調査も`text`, `content`, `main`, `body`, `post`等のクラスとHTML5 `article`の対応を示すが、公表時期は保存草案より後なので導入因果の根拠にはしない。[設計要求](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)） [usage調査](../../raw/web.archive.org/web/20060101000000id_/http%3A/code.google.com/webstats/2005-12/classes.html)（[公開元](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)）

## さらに上流の由来

### 証拠

2004年のメールで、既存マークアップを壊さずに`div class="post"`を専用のセクショニング要素へ置換する要求と、フォーラム投稿やブログ記事を表す用途を確認できる。2005年草案で独立したセクションという定義を確認できる。

### 解釈

既存Webで汎用コンテナーとクラスにより表していた投稿単位を、アウトラインに参加する専用要素へ置き換える試みと解釈できる。`post`以外のクラスとの個別対応と、`article`という最終名称を選んだ理由は確定しない。

## 系譜

既存Web `div class="post"` → WHATWG `article`提案（2004年） → Web Applications 1.0 `article`（2005年） → 現行HTML `article`

`text`、`content`、`main`、`body`等のクラスは後発利用状況調査との対応だけが確認できるため接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2004-08-29 | [`<section>` and headings](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/002134.html)） | WHATWGメーリングリスト | Hicksonが`entry`／`post`／`article`をセクションより大きくページより小さいテキスト単位の候補とし、一般的な`div`の疑似意味的用途を減らす目的を説明したこと。 | 2026-08-10 |
| 2004-11-12 | [Re: `<section>` and headings](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/002362.html)） | WHATWGメーリングリスト | `div class="post"`を`article`へ置換できることを設計要求とし、フォーラム投稿やブログ記事を対象用途としたこと。 | 2026-08-10 |
| 2004-12-08 | [Web Applications 1.0](../../raw/web.archive.org/web/20041210054847id_/http%3A/www.whatwg.org/specs/web-apps/current-work/__index)（[公開元](https://web.archive.org/web/20041210054847id_/http://www.whatwg.org/specs/web-apps/current-work/#article)） | WHATWG保存Working Draft | `article`をWeblog投稿、雑誌記事、フォーラム投稿等として定義したこと。 | 2026-08-10 |
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg.org/specs/web-apps/2005-09-01/__index)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-article)） | WHATWG保存Early Working Draft | `article`の存在と、独立したセクションという導入時の意味。 | 2026-08-09 |
| 2005-12 | [Web Authoring Statistics: Classes](../../raw/web.archive.org/web/20060101000000id_/http%3A/code.google.com/webstats/2005-12/classes.html)（[公開元](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)） | Googleによる当時の利用状況調査（保存複製） | 既存クラスとHTML5 `article`の対応。公表時期は保存草案より後。 | 2026-08-09 |
| 2008-01-22 | [HTML 5 differences from HTML 4](../../raw/www.w3.org/TR/2008/WD-html5-diff-20080122/__index)（[公開元](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements)） | W3C Working Draft | `article`をHTML 4にない文書マークアップとして列挙し、HTML5全体を実運用内容調査に基づく作業と説明。 | 2026-08-09 |

## 確度

**A**

既存Webの`div class="post"`を`article`へ置換可能にするという要素単位の設計要求を、WHATWG編集者の同時代メールで直接確認できるため。

## 否定された仮説

`content`、`main`、`body`等のクラスから個別に採用したという説明。後発利用状況調査は対応を示すだけで、採用行為を述べない。`article`の祖先を印刷物の記事だけに求める説明も、WHATWGの直接の設計要求が既存Webの`div class="post"`を指すため採用しない。

## 未解決

- 2004年8月29日以前のWHATWG草案または編集履歴に`article`の初出を特定できるか。
- 候補`entry`／`post`／`article`から`article`を最終名称に選んだ判断は確認できるか。
- `div class="post"`以外の既存クラスを個別に採用した記録はあるか。
