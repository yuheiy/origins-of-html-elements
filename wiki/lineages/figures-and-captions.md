---
status: 完成
---

# 図とキャプション

## 共有された設計経路

Simon PietersはHTML+の`FIG`／`CAPTION`を明示してHTML5向けの再利用を提案し、Michel Fortinは`figure`／`caption`構造と実在する発行者の利用例を提示した。Ian Hicksonは、`CAPTION`の表パーサー上の問題から`legend`を使い、`fig`を`figure`へ変えた点を除いてHTML+案に同意した。キャプションは後に`dt`／`dd`を経て専用`figcaption`へ置換された。[HTML+ Figures](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)） [Pieters案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)） [Fortin案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html)） [Hicksonの総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)） [`figcaption`導入コミット](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)）

Fortinは、科学・技術出版物で画像とキャプションをfigureとして扱う慣習が自身の`figure`提案名の理由だと明記している。したがって出版の図版・キャプション慣習は意味と名称の上流として確認できる。HTMLへの直接の設計材料になったのは、ニュースサイト、科学・技術出版物、Wikipedia等のWebページで、制作者が画像とキャプションを一組にして配置・マークアップしていた実例である。Hicksonは、`div class="image-caption"`に画像と段落を置く提案例を、仕様の構造と基本的に同じだがクラス名を要素名へ変えたものだと説明している。ただし、出版慣習から個々のWeb実践へ伝わった具体的な経路と、文書ソフトウェアから構造や名称を採用した因果は確認できない。[Hicksonの総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)）

```text
HTML+ FIG / CAPTION＋WHATWGの図とキャプション要求
  → figure / legend
  → figure / dt / dd
  → figure / figcaption
```

対象: [`figure`](../elements/figure.md)、[`figcaption`](../elements/figcaption.md)

## 境界

表用の現行[`caption`](../elements/caption.md)はこの系譜の対象ではない。DocBookへの同時代の言及は、図キャプションに`h6`を使いDocBook `simplesect`のような末端見出しとして扱う提案だが、Hicksonが見出し処理を複雑にするとして退けた。[fantasaiの提案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0040.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0040.html)） [Hicksonの総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)）。XHTML 2 `object`／`caption`も図キャプション議論、総括、導入差分に設計材料として現れず、いずれからも採用因果を確認できない。[XHTML 2 Object Module](../../raw/www.w3.org/TR/2006/WD-xhtml2-20060726/mod-object.html)（[公開元](https://www.w3.org/TR/2006/WD-xhtml2-20060726/mod-object.html)） [導入差分](../../raw/github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)（[公開元](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)）
