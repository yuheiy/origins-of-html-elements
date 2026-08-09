# `<samp>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML直前の祖先を検証済み（後続標準への採録経路は未解決）

## 概要

1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@samp`との対応を確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、別のprogramまたはcomputing systemからのsample outputまたはquoted outputを表す。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element)（2026-08-09確認）

## HTMLへの導入

1993年6月のHTML Internet-Draftはcharacter highlighting elementとして `<samp>` を列挙し、その集合の要素名をTexinfo macro namesから派生したと明記した。この史料は命名元を示すが、要素の最初の実装時期や採用理由の全体は示さない。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

## HTML直前の祖先

HTML側の直接史料は、列挙した要素名の派生元をTexinfoと明記している。同時代のGNU Texinfo 2.16マニュアルは `@samp` を文字列などのliteral sampleとして定義しており、個別の対応も確認できる。[1993年HTML Internet-Draft](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)

## さらに上流の由来

### 証拠

Texinfoはソフトウェアマニュアルを単一ソースから印刷物とInfo文書へ出力する文書システムであり、`@samp` はその語彙の一部だった。[GNU Texinfo 2.16公式配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)

### 解釈

直接の命名元はTexinfoである。そのさらに上流にコンピュータ技術文書文化を位置づけられるが、この文化からHTMLへ直接採用されたという主張にはしない。

## 系譜

Texinfo `@samp` → 1993年HTML draft `<samp>` → 後続HTML `<samp>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992-10-06 | *Texinfo — The GNU Documentation Format*, Edition 2.16 | GNU公式配布物内マニュアル | `@samp` の当時の定義を確認できる。 | [GNU archive](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) | 2026-08-09 |
| 1993-06 | *Hypertext Markup Language (HTML)*, draft-ietf-iiir-html-00 | IETF Internet-Draft | `<samp>` を含むcharacter highlighting要素名をTexinfo macro names由来と明記する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |

## 確度

**A**

HTML側が命名元を明示し、Texinfo側でも対応する同時代マクロと用途を確認できるため。

## 否定された仮説

なし。ハンドオフで撤回済みの説明がある場合は、個別調査時に理由とともに移記する。

## 未解決

- 1993年draft以前のHTMLにおける初出を確認する。
- 1993年案から後続標準への採録経路を確認する。

## 調査記録

1993年HTML draft、RFC 1866、GNU Texinfo 2.16および3.7を確認した。Texinfo系統全体の照合は[調査ノート](../research/texinfo-phrase-elements.md)を参照する。

敵対的レビュー（2026-08-09）では、1993年draftのTexinfo由来文と同時代Texinfoの`@samp`定義をローカル保存資料で再照合し、名称と用途の個別対応を確認した。より早いHTML初出と後続採録の欠落は系譜上の未解決として残し、Aを維持した。
