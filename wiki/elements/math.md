# `<math>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。MathML rootからHTML `text/html` parserへの統合を検証済み

## 概要

MathML 1.0で定義済みのMathML名前空間のrootを、2008年にHTMLの`text/html` parserから生成できるforeign rootとして統合したものである。

## 現在の意味

MathML Coreでは、文書内のMathML markupの各instanceを包む唯一のtop-levelまたはroot要素であり、他のすべてのMathML contentは`math`内に置く。[一次定義](https://w3c.github.io/mathml-core/#the-top-level-math-element)（2026-08-09確認）

## HTMLへの導入

2008年4月5日のWHATWG commitは、MathMLとSVGを`text/html`で扱うforeign content parsing infrastructureを追加し、`math` start tagからMathML名前空間の要素を生成する規則を導入した。[仕様commit](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)

## HTML直前の祖先

MathML名前空間の`math` rootである。1998年MathML 1.0がtop-level要素として定義し、HTML commitが同じrootをforeign namespace elementとして生成する因果を直接示す。[MathML 1.0](https://www.w3.org/TR/1998/REC-MathML-19980407/)

## さらに上流の由来

### 証拠

MathML 1.0は数学のnotation、structure、contentをWebで扱うXML applicationとしてMathMLを定義する。

### 解釈

新しいHTML名前空間要素を発明したのではなく、独立したMathML語彙のrootをHTML syntaxとparserへ接続した統合点と解釈できる。

## 系譜

MathML 1.0 `math` root（1998年） → HTML `text/html` parserで生成されるMathML `math` root（2008年） → 現行HTML文書内のforeign root `math`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1998-04-07 | MathML 1.0 | W3C Recommendation | MathML XML applicationとtop-level `math`の定義。 | [一次資料](https://www.w3.org/TR/1998/REC-MathML-19980407/) | 2026-08-09 |
| 2008-04-05 | WHATWG HTML commit `1ff9688a` | 仕様commit | `math` start tagをMathML名前空間rootとして`text/html` parserへ統合。 | [一次資料](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7) | 2026-08-09 |

## 確度

**A**

既存MathML `math` rootからHTML parser統合への要素単位の因果を仕様とcommit差分で直接確認できるため。

## 否定された仮説

HTML名前空間の新要素として2008年に発明されたという説明。parserが生成するのは既存MathML名前空間のrootである。

## 未解決

- HTML parserへの統合を要求したissueまたはmailing-list議論はどれか。
- 採用時に想定したMathML版と互換性範囲は何か。
- XML／XHTML埋込みから`text/html`統合へ至る設計議論は確認できるか。

## 調査記録

MathML 1.0 Recommendationと2008年WHATWG parser統合commitを確認した。導入要求の議論は確定できなかった。横断比較は[Modern HTML要素とforeign rootの調査ノート](../research/modern-html-foreign-roots.md)を参照する。

2026-08-09の敵対的レビューでは、MathML 1.0のroot `math`と2008年WHATWG parser commitのforeign-content統合・後続修正を再照合した。MathML語彙から`text/html` parserへ統合する因果はcommitで直接確認でき、導入要求の議論が欠けるという限定の下でA判定を維持した。
