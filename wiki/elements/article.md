# `<article>`

> 状態: 完成

## 概要

2004年11月までにWHATWGのsemantic element集合として提案され、2005年草案ではblog postやforum post等の独立したsectionと定義された。既存Webの`post`等との対応は後発usage調査で確認できるが、そこから採用した因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、文書、ページ、アプリケーション、サイト内で完全または自己完結し、原則として独立して配布または再利用できる構成を表す。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-article-element)（2026-08-09確認）

## HTMLへの導入

2004年11月10日のWHATWG議論でsemantic element集合の一つとして確認でき、2005年9月1日版Web Applications 1.0はblog post、forum post、newspaper article等の独立したsectionとして定義する。`article`個別の提案者と正確な初出は確認できない。[2004年議論](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-article)

## HTML直前の祖先

未確認。2005年12月のGoogle調査は`text`, `content`, `main`, `body`, `post`等のclassとHTML5 `article`の対応を示すが、保存草案より後に公表されており、個別classからの採用因果は示さない。[usage調査](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html)

## さらに上流の由来

### 証拠

2005年草案で、独立したsectionとしての導入時の設計モデルを確認できる。後発のusage調査から、既存Web markupとの意味上の対応を観察できる。

### 解釈

HTML5のdocument semanticsを、既存のgeneric containerとclassで表していた構造へ専用要素を与える試みの一部と解釈できる。ただし`article`個別の採用経路は確定しない。

## 系譜

WHATWG `article`提案（2004年まで） → Web Applications 1.0 `article`（2005年） → 現行HTML `article`

`post`等の既存class慣習は対応関係だけが確認でき、矢印では接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-11-10 | Semantic elements and spec complexity | WHATWG mailing list | `article`を含むsemantic element集合と汎用`div`との差。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) | 2026-08-09 |
| 2005-09-01 | Web Applications 1.0 | WHATWG保存Early Working Draft | `article`の存在と、独立したsectionという導入時の意味。 | [一次資料](https://whatwg.org/specs/web-apps/2005-09-01/#the-article) | 2026-08-09 |
| 2005-12 | Web Authoring Statistics: Classes | Googleによる当時のusage調査（保存複製） | 既存classとHTML5 `article`の対応。公表時期は保存草案より後。 | [一次資料](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html) | 2026-08-09 |
| 2008-01-22 | HTML 5 differences from HTML 4 | W3C Working Draft | `article`をHTML 4にないdocument markupとして列挙し、HTML5全体をdeployed content調査に基づく作業と説明。 | [一次資料](https://www.w3.org/TR/2008/WD-html5-diff-20080122/#new-elements) | 2026-08-09 |

## 確度

**B**

導入時の意味とHTML5全体の設計背景は確認できるが、特定の既存classまたは語彙から`article`を採用した因果は確認できないため。

## 否定された仮説

`post`や`content`というclassから直接採用したという説明。usage調査は対応を示すが、保存草案より後に公表され、採用行為を述べない。

## 未解決

- 2004年から2005年9月までの提案者、正確な初出、採用理由を示す編集履歴は残っているか。
- usage調査のdatasetまたは予備調査が草案編集前に使われたことを示す記録はあるか。
- `article`の具体的な先行markup語彙はあるか。
