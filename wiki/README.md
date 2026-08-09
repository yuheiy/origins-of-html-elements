# HTML Element Origins Wiki

このWikiは、HTML要素がどの文書体系、ソフトウェア、メディア、UI慣習、または標準化活動から生まれたかを、史料に基づいて追跡する。現在の意味、HTMLへの導入、HTML直前の祖先、さらに上流の由来を分離し、証拠がない接続は未解決として残す。

調査と編集の規約は[AGENTS.md](../AGENTS.md)、調査履歴は[Wiki更新記録](log.md)を参照する。

## 対象と現在の状態

- 対象基準日: 2026-08-09
- 対象要素数: 115
- 要素ページ: 110ファイルで全115要素を収録（`h1`〜`h6`は`hx.md`へ統合）
- 史料検証済み: 115件（A: 56件、A−: 15件、B: 38件、C: 6件）
- 史料未検証: 0件（未評価）
- 現在の意味を要約済み: 115件
- 横断系譜ページ: 完成（敵対的レビュー済み: 2026-08-09）
- 敵対的レビュー済み: 115件

対象要素数は、WHATWG HTML Living Standardの組み込みHTML名前空間要素113個に、HTML文書で使用できるforeign rootの`math`と`svg`を加えた数である。custom elementsは名前集合が開いているため対象へ含めない。抽出根拠と境界事例は[現行HTML要素一覧の調査ノート](research/current-html-elements.md)を参照する。

## 横断調査

- [現行HTML要素の横断系譜](research/cross-element-lineage.md)
- [現行HTML要素の横断系譜に対する敵対的レビュー](research/cross-element-lineage-adversarial-review.md)
- [歴史的結論の敵対的レビュー](research/adversarial-review.md)
- [現行HTML要素の固定一覧](research/current-html-elements.md)
- [HTML phrase elementsとTexinfo](research/texinfo-phrase-elements.md)
- [HTML+から現行要素への系譜](research/html-plus-elements.md)
- [CALSと高度なtable model](research/cals-table-elements.md)
- [初期SGML/GML系統](research/early-sgml-elements.md)
- [AAP Book DTDとHTML heading family](research/aap-heading-dtd.md)
- [初期hypertext・文書制御要素](research/early-hypertext-elements.md)
- [Browser vendor由来要素](research/browser-vendor-elements.md)
- [国際化・アクセシビリティ関連要素](research/internationalization-accessibility-elements.md)
- [HTML5 semantic elementsと既存Web慣習](research/html5-semantic-elements.md)
- [現行`header`要素の再導入](research/header-reintroduction.md)
- [Modern HTML要素とforeign root](research/modern-html-foreign-roots.md)
- [WHATWG revision r8000とtemplate統合commitの対応](research/template-r8000-git-mapping.md)
- [HTML media要素の導入](research/media-elements.md)
- [Forms/UI要素の導入](research/forms-ui-elements.md)
- [Scripting / embedding要素の起源](research/scripting-embedding-elements.md)
- [Text/structure/edits要素の導入](research/text-structure-edits-elements.md)

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
