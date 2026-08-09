# HTML Element Origins Wiki

このWikiは、HTML要素がどの文書体系、ソフトウェア、メディア、UI慣習、または標準化活動から生まれたかを、史料に基づいて追跡する。現在の意味、HTMLへの導入、HTML直前の祖先、さらに上流の由来を分離し、証拠がない接続は未解決として残す。

調査と編集の規約は[AGENTS.md](../AGENTS.md)、変更履歴は[Wiki更新記録](log.md)を参照する。

## 収録範囲

最終確認日は2026年8月9日である。[WHATWG HTML Living StandardのElements index](https://html.spec.whatwg.org/multipage/indices.html#elements-3)にあるHTML名前空間の組み込み要素113件と、HTML構文で使用できる名前付きforeign rootの`math`と`svg`を合わせた115要素を収録する。この一覧は特定日のsnapshotではなく、Living Standardに追従して更新する。

- Elements indexの`h1, h2, h3, h4, h5, h6`は6要素として数え、共通史料と系譜は[`hx.md`](elements/hx.md)へまとめる。
- [HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#elements-2)がforeign elementsと定義するMathMLの`math`とSVGの`svg`はHTML名前空間要素と分けて数えるが、HTML文書内でforeign contentを開始する名前付きrootなので対象へ含める。
- [Custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-core-concepts)のうち、autonomous custom elementsは名前集合が開いており、customized built-in elementsは既存の組み込み要素名を使うため、どちらも追加の要素名として数えない。
- [Non-conforming features](https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features)でentirely obsoleteとされる要素は除外し、現行要素の系譜を説明する場合だけ歴史的要素として扱う。
- [`search`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)と[`selectedcontent`](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)は独立したnormative定義を持ち、公式索引に掲載されるため含める。実装状況や外部サイト上の`experimental`表示は収録判断に使わない。

## 現在の状態

- 対象要素数: 115
- 要素ページ: 110ファイルで全115要素を収録（`h1`〜`h6`は`hx.md`へ統合）
- 史料検証済み: 115件（A: 64件、A−: 17件、B: 30件、C: 4件）
- 史料未検証: 0件（未評価）
- 現在の意味を要約済み: 115件
- 共有系譜文書: 5件
- 敵対的検証済み: 115件

## 共有系譜

- [現行HTML要素の横断系譜](lineages/README.md)
- [HTML phrase要素とTexinfo](lineages/texinfo.md)
- [HTML+から現行要素への系譜](lineages/html-plus.md)
- [IETF HTML国際化草案の共有系譜](lineages/html-internationalization.md)
- [CALSとHTMLの表構造要素](lineages/cals-tables.md)

## 要素一覧

### A

[`<a>`](elements/a.md) · [`<abbr>`](elements/abbr.md) · [`<address>`](elements/address.md) · [`<area>`](elements/area.md) · [`<article>`](elements/article.md) · [`<aside>`](elements/aside.md) · [`<audio>`](elements/audio.md)

### B

[`<b>`](elements/b.md) · [`<base>`](elements/base.md) · [`<bdi>`](elements/bdi.md) · [`<bdo>`](elements/bdo.md) · [`<blockquote>`](elements/blockquote.md) · [`<body>`](elements/body.md) · [`<br>`](elements/br.md) · [`<button>`](elements/button.md)

### C

[`<canvas>`](elements/canvas.md) · [`<caption>`](elements/caption.md) · [`<cite>`](elements/cite.md) · [`<code>`](elements/code.md) · [`<col>`](elements/col.md) · [`<colgroup>`](elements/colgroup.md)

### D

[`<data>`](elements/data.md) · [`<datalist>`](elements/datalist.md) · [`<dd>`](elements/dd.md) · [`<del>`](elements/del.md) · [`<details>`](elements/details.md) · [`<dfn>`](elements/dfn.md) · [`<dialog>`](elements/dialog.md) · [`<div>`](elements/div.md) · [`<dl>`](elements/dl.md) · [`<dt>`](elements/dt.md)

### E

[`<em>`](elements/em.md) · [`<embed>`](elements/embed.md)

### F

[`<fieldset>`](elements/fieldset.md) · [`<figcaption>`](elements/figcaption.md) · [`<figure>`](elements/figure.md) · [`<footer>`](elements/footer.md) · [`<form>`](elements/form.md)

### H

[`<h1>〜<h6>`](elements/hx.md) · [`<head>`](elements/head.md) · [`<header>`](elements/header.md) · [`<hgroup>`](elements/hgroup.md) · [`<hr>`](elements/hr.md) · [`<html>`](elements/html.md)

### I

[`<i>`](elements/i.md) · [`<iframe>`](elements/iframe.md) · [`<img>`](elements/img.md) · [`<input>`](elements/input.md) · [`<ins>`](elements/ins.md)

### K

[`<kbd>`](elements/kbd.md)

### L

[`<label>`](elements/label.md) · [`<legend>`](elements/legend.md) · [`<li>`](elements/li.md) · [`<link>`](elements/link.md)

### M

[`<main>`](elements/main.md) · [`<map>`](elements/map.md) · [`<mark>`](elements/mark.md) · [`<math>`](elements/math.md) · [`<menu>`](elements/menu.md) · [`<meta>`](elements/meta.md) · [`<meter>`](elements/meter.md)

### N

[`<nav>`](elements/nav.md) · [`<noscript>`](elements/noscript.md)

### O

[`<object>`](elements/object.md) · [`<ol>`](elements/ol.md) · [`<optgroup>`](elements/optgroup.md) · [`<option>`](elements/option.md) · [`<output>`](elements/output.md)

### P

[`<p>`](elements/p.md) · [`<picture>`](elements/picture.md) · [`<pre>`](elements/pre.md) · [`<progress>`](elements/progress.md)

### Q

[`<q>`](elements/q.md)

### R

[`<rp>`](elements/rp.md) · [`<rt>`](elements/rt.md) · [`<ruby>`](elements/ruby.md)

### S

[`<s>`](elements/s.md) · [`<samp>`](elements/samp.md) · [`<script>`](elements/script.md) · [`<search>`](elements/search.md) · [`<section>`](elements/section.md) · [`<select>`](elements/select.md) · [`<selectedcontent>`](elements/selectedcontent.md) · [`<slot>`](elements/slot.md) · [`<small>`](elements/small.md) · [`<source>`](elements/source.md) · [`<span>`](elements/span.md) · [`<strong>`](elements/strong.md) · [`<style>`](elements/style.md) · [`<sub>`](elements/sub.md) · [`<summary>`](elements/summary.md) · [`<sup>`](elements/sup.md) · [`<svg>`](elements/svg.md)

### T

[`<table>`](elements/table.md) · [`<tbody>`](elements/tbody.md) · [`<td>`](elements/td.md) · [`<template>`](elements/template.md) · [`<textarea>`](elements/textarea.md) · [`<tfoot>`](elements/tfoot.md) · [`<th>`](elements/th.md) · [`<thead>`](elements/thead.md) · [`<time>`](elements/time.md) · [`<title>`](elements/title.md) · [`<tr>`](elements/tr.md) · [`<track>`](elements/track.md)

### U

[`<u>`](elements/u.md) · [`<ul>`](elements/ul.md)

### V

[`<var>`](elements/var.md) · [`<video>`](elements/video.md)

### W

[`<wbr>`](elements/wbr.md)
