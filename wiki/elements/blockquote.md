# `<blockquote>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。1992年の追加主体と設計意図を検証済み（直前祖先は未確認）

## 概要

Dan Connollyが1992年12月4日のmailで、新しいparagraph styleとしてHTML DTDへ追加すると説明し、1993年1月6日版DTDで確認できる。HTML以前の具体的祖先は確認できない。

## 現在の意味

WHATWG HTML Living Standardでは、別の出典から引用されたsectionを表す。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element)（2026-08-09確認）

## HTMLへの導入

Dan Connollyは1992年12月4日のmailで、既存codeを大きく変えず`html.dtd`へ加えられる新しいparagraph styleの例として`BLOCKQUOTE`を挙げる。1993年6月draft収録のRCS id `93/01/06`のDTDは、他のsourceを引用する要素として宣言する。[Connolly, “Re: The spec evolves...”](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html) [1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

未確認。同名または類似用途のSGML/GML要素からHTMLへ採用したことを示す史料は確認できない。

## さらに上流の由来

### 証拠

今回確認した資料からは、HTMLより前の具体的な系譜を結べない。

### 解釈

なし。

## 系譜

HTML DTDへの`BLOCKQUOTE`追加説明（1992-12-04）→ HTML DTD `BLOCKQUOTE`（1993-01-06）→ 現行HTML `<blockquote>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992-11-13（更新日） | *Tags used in HTML* | CERN公式HTML資料のhistorical snapshot | 当時のHTML tag一覧に`BLOCKQUOTE`を確認できない。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1992-12-04 | “Re: The spec evolves...” | www-talkへの当事者投稿 | Connollyが新しいparagraph styleとして`BLOCKQUOTE`をDTDへ追加すると説明する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0159.html) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)* | IETF Internet-Draft | `BLOCKQUOTE`の引用用途、typical rendering、例、DTD宣言を記録する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**B**

HTMLへ加えた主体と設計意図は当事者資料で確認できるが、HTML以前の具体的祖先を確認できないため。

## 否定された仮説

名称と引用用途の類似だけから、先行SGML/GMLの`BLOCKQUOTE`または印刷上のblock quotationを直接祖先とする説明。

## 未解決

- 1992年タグ一覧から1993年draftまでの提案、change record、www-talk議論に`BLOCKQUOTE`の導入判断は残っているか。
- 同名または対応する先行要素からの採用因果を示す資料はあるか。

## 調査記録

1992年CERN HTMLタグ一覧、1992年Connolly版仕様の公開告知、1993年HTML Internet-Draftの本文とDTD、www-talkの同時期archiveを探索した。1992年資料での不在と1993年での出現を固定したが、間の導入記録は確認できなかった。対象群全体は[初期SGML/GML調査ノート](../research/early-sgml-elements.md)を参照する。

2026-08-09の敵対的レビューでは、1992年12月4日のConnolly mailを全文脈で再読し、11月のタグ一覧、1993年1月DTD、1993年draftと照合した。先行SGML/GMLの同名要素とより早いHTML版を反例候補として探索したが採用因果はなく、系譜と確度Bを維持した。
