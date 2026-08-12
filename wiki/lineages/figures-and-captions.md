---
status: 完成
---

# 図とキャプション

## 共有された設計経路

Simon PietersはHTML+の`FIG`／`CAPTION`を明示してHTML5向けの再利用を提案し、Michel Fortinは`figure`／`caption`構造と実在する発行者の利用例を提示した。Ian Hicksonは、`CAPTION`の表パーサー上の問題から`legend`を使い、`fig`を`figure`へ変えた点を除いてHTML+案に同意した。キャプションは後に`dt`／`dd`を経て専用`figcaption`へ置換された。[HTML+ Figures](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)） [Pieters案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0109.html)） [Fortin案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006May/0002.html)） [Hicksonの総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)） [`figcaption`導入コミット](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)）

Fortinは、科学・技術出版物で画像とキャプションをfigureとして扱う慣習が自身の`figure`提案名の理由だと明記している。したがって出版の図版・キャプション慣習は意味と名称の上流として確認できる。HTMLへの直接の設計材料になったのは、ニュースサイト、科学・技術出版物、Wikipedia等のWebページで、制作者が画像とキャプションを一組にして配置・マークアップしていた実例である。Hicksonは、`div class="image-caption"`に画像と段落を置く提案例を、仕様の構造と基本的に同じだがクラス名を要素名へ変えたものだと説明している。[Hicksonの総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)）

出版からWebへの一般的な伝達路は初期HTMLの時点で確認できる。Raggettは、HTML+が情報提供者の要求に応えて浮動図の回り込みを追加し、FrameMaker、Microsoft Word、LaTeXからのフィルターとSGML制作・変換ツールによってHTML文書を作成できたと説明した。1996年のW3C草案も、キャプション付きで浮動するfigureを長く実証された文書レイアウトの慣用と明記した。[A Review of the HTML+ Document Format](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） [Inserting objects into HTML](../../raw/www.w3.org/TR/WD-object-960311.html)（[公開元](https://www.w3.org/TR/WD-object-960311.html)）

Fortinが列挙した個別Web実践についても、伝達を担った制作単位の一部は確認できる。MediaWikiでは2003年に画像キャプションを保存し、キャプション付き画像をブロックレベルの`div`として生成する案が議論され、2006年のWikipedia保存ページでは`thumb`／`thumbcaption`構造として出力されている。CNNは発行者固有の右寄せコンテナーと`cnnStoryCaption`を出力し、PLOSは番号付き図・キャプションと本文参照を結び、図一覧、印刷用／画面用PDF、XMLを同じ記事から提供していた。したがって、Wikiプラットフォーム、ニュース発行テンプレート、学術誌の複数形式出版工程が具体的な媒体だった。ただし、各システムがどの先行する印刷・SGML・HTML+設計を参照したかは確認できない。[MediaWiki設計議論](../../raw/meta.wikimedia.org/w/index.php__q__title=Image_pages%252FData_syntax&oldid=153854)（[公開元](https://meta.wikimedia.org/w/index.php?title=Image_pages%2FData_syntax&oldid=153854)） [Wikipedia保存ページ](../../raw/web.archive.org/web/20060822150415id_/http%3A/en.wikipedia.org/wiki/Amerindians)（[公開元](https://web.archive.org/web/20060822150415/http://en.wikipedia.org/wiki/Amerindians)） [CNN保存ページ](../../raw/web.archive.org/web/20060630125301id_/http%3A/www.cnn.com%3A80/2006/WORLD/meast/06/27/iran.us.reut/index.html)（[公開元](https://web.archive.org/web/20060630125301/http://www.cnn.com/2006/WORLD/meast/06/27/iran.us.reut/index.html)） [PLOS保存ページ](../../raw/web.archive.org/web/20060427035338id_/http%3A/medicine.plosjournals.org%3A80/perlserv/__index__q__request=get-document%2526doi=10.1371%2Fjournal.pmed.0020228)（[公開元](https://web.archive.org/web/20060427035338/http://medicine.plosjournals.org/perlserv/?request=get-document%26doi=10.1371/journal.pmed.0020228)）

```text
HTML+ FIG / CAPTION＋WHATWGの図とキャプション要求
  → figure / legend
  → figure / dt / dd
  → figure / figcaption
```

対象: [`figure`](../elements/figure.md)、[`figcaption`](../elements/figcaption.md)

## 境界

表用の現行[`caption`](../elements/caption.md)はこの系譜の対象ではない。DocBookへの同時代の言及は、図キャプションに`h6`を使いDocBook `simplesect`のような末端見出しとして扱う提案だが、Hicksonが見出し処理を複雑にするとして退けた。[fantasaiの提案](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0040.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Apr/0040.html)） [Hicksonの総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)）。XHTML 2 `object`／`caption`も図キャプション議論、総括、導入差分に設計材料として現れず、いずれからも採用因果を確認できない。[XHTML 2 Object Module](../../raw/www.w3.org/TR/2006/WD-xhtml2-20060726/mod-object.html)（[公開元](https://www.w3.org/TR/2006/WD-xhtml2-20060726/mod-object.html)） [導入差分](../../raw/github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)（[公開元](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)）
