---
status: 完成
---

# `<blockquote>`

## 概要

Dan Connollyが1992年12月4日のメールで、新しい段落スタイルとしてHTML DTDへ追加すると説明し、1993年1月6日版DTDで確認できる。Connollyは後にUsenetニュースの引用様式から影響された可能性を挙げたが、HTML以前の具体的祖先は確定できない。

## 現在の意味

WHATWG HTML Living Standardでは、別の出典から引用されたセクションを表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element)、2026-08-09確認）

## HTMLへの導入

Dan Connollyは1992年12月4日のメールで、既存コードを大きく変えず`html.dtd`へ加えられる新しい段落スタイルの例として`BLOCKQUOTE`を挙げる。1993年6月草案収録のRCS id `93/01/06`のDTDは、他のソースを引用する要素として宣言する。[Connolly, “Re: The spec evolves...”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)） [1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）

## HTML直前の祖先

未確認。同名または類似用途のSGML/GML要素からHTMLへ採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

Connollyは2017年、DocBook等からの影響を問われ、よりありそうなのはUsenetニューススタイル引用の影響だと回想した。ただし自身も当時のアーカイブを探索中で、確定的な記憶または同時代記録としては提示していない。[Connolly, “Re: Provenance of the blockquote element”](../../raw/lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)（[公開元](https://lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)）同じ探索の記録では、DocBook 1.1ベータの`blockquote`は1993年1月19日でHTML側の初出後、Texinfoには`@quotation`等があるが同名ではなく、LaTeX、FrameMaker MML、MidasWWWも候補を確定できなかった。[Palmer, “The Origin of Blockquote”](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)）

### 解釈

Usenetの返信引用は有力な出発仮説だが、同時代資料または具体的なマークアップから`BLOCKQUOTE`への採用を確認できない。DocBook、SGML Annex E系の`LQ`、LaTeX、Texinfo、CERN SGMLは候補として比較されているが、Connolly自身の回顧もいずれかを確定しない。

## 系譜

HTML DTDへの`BLOCKQUOTE`追加説明（1992-12-04）→ HTML DTD `BLOCKQUOTE`（1993-01-06）→ 現行HTML `<blockquote>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1992-11-13（更新日） | [*Tags used in HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)） | CERN公式HTML資料の歴史的スナップショット | 当時のHTMLタグ一覧に`BLOCKQUOTE`を確認できない。 | 2026-08-09 |
| 1992-12-04 | [“Re: The spec evolves...”](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html)） | www-talkへの当事者投稿 | Connollyが新しい段落スタイルとして`BLOCKQUOTE`をDTDへ追加すると説明する。 | 2026-08-09 |
| 1993-06 | [*Hypertext Markup Language (HTML)*](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)） | IETF Internet-Draft | `BLOCKQUOTE`の引用用途、典型的な描画、例、DTD宣言を記録する。 | 2026-08-09 |
| 2017-08-28 | [Sean B. Palmer, “The Origin of Blockquote”](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)） | 導入者を含む史料再探索ログ | HTML側の初出、後発のDocBookベータ、Texinfo、LaTeX、FrameMaker MML、MidasWWWを比較するが、先行する直接祖先を確定できない。 | 2026-08-11 |
| 2017-09-11 | [Dan Connolly, “Re: Provenance of the blockquote element”](../../raw/lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)（[公開元](https://lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html)） | 導入者による回顧 | Usenetニューススタイル引用の影響を有力候補として挙げるが、当時の記録による確定ではない。 | 2026-08-11 |

## 確度

**B**

HTMLへ加えた主体と設計意図は当事者資料で確認できるが、HTML以前の具体的祖先を確認できないため。

## 否定された仮説

名称と引用用途の類似だけから、DocBook、SGML Annex E系、CERN SGML、LaTeX、Texinfoまたは印刷上のブロック引用を直接祖先とする説明。Usenetニュース式の引用も導入者の後代の推測としては残すが、確定系譜にはしない。

## 未解決

- 1992年タグ一覧から1993年草案までの提案、変更記録、www-talk議論に`BLOCKQUOTE`の導入判断は残っているか。
- Usenetの返信引用、DocBook、SGML Annex E系、LaTeX、TexinfoまたはCERN SGMLからの採用因果を示す同時代資料はあるか。
