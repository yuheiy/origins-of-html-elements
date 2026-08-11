---
status: 完成
---

# The origins of HTML elements

このWikiは、現行HTML要素がどの文書体系、ソフトウェア、メディア、UI慣習、標準化活動から生まれたかを、史料に基づいて追跡する。現在の意味や名称の類似から起源を推測せず、確認できない接続は未解決として残す。

## 読み方

- [要素](elements/)は、現行要素ごとに現在の意味、HTMLへの導入、直前の祖先、上流の由来、証拠、確度、否定された仮説、未解決点をまとめる。
- [共有系譜](lineages/)は、複数要素に共通する確認済みの採用経路や要求をまとめる。個別要素の結論と確度は要素ページを正本とする。
- [統合](syntheses/introduction-paths-and-origins.md)は比較や横断分析を扱う。
- [Raw resources](raw-index.md)は、保存された全Raw fileへのpath順のindexである。
- [操作Log](log.md)はWikiに対する操作をappend-onlyで記録する。構造と運用の規範は[AGENTS.md](../AGENTS.md)を参照する。

## 収録範囲

最終確認日は2026年8月9日である。[WHATWG HTML Living StandardのElements index](../raw/html.spec.whatwg.org/multipage/indices.html)（[公開版](https://html.spec.whatwg.org/multipage/indices.html#elements-3)）にあるHTML名前空間の組み込み要素113件と、HTML構文で使用できる名前付きforeign rootの`math`と`svg`を合わせた115要素を収録する。この一覧は特定日のsnapshotではなく、Living Standardに追従して更新する。

- Elements indexの`h1, h2, h3, h4, h5, h6`は6要素として数え、共通史料と系譜は[`h1-h6.md`](elements/h1-h6.md)へまとめる。
- HTML syntaxが[foreign elementsと定義する](../raw/html.spec.whatwg.org/multipage/syntax.html)（[公開版](https://html.spec.whatwg.org/multipage/syntax.html#elements-2)）ことに基づき、MathMLの`math`とSVGの`svg`はHTML名前空間要素と分けて数えるが、HTML文書内でforeign contentを開始する名前付きrootなので対象へ含める。
- [Custom elements](../raw/html.spec.whatwg.org/multipage/custom-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-core-concepts)）に基づき、autonomous custom elementsは名前集合が開いており、customized built-in elementsは既存の組み込み要素名を使うため、どちらも追加の要素名として数えない。
- [Non-conforming features](../raw/html.spec.whatwg.org/multipage/obsolete.html)（[公開版](https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features)）でentirely obsoleteとされる要素は除外し、現行要素の系譜を説明する場合だけ歴史的要素として扱う。
- [`search`](../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)）と[`selectedcontent`](../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)）は独立したnormative定義を持ち、公式索引に掲載されるため含める。実装状況や外部サイト上の`experimental`表示は収録判断に使わない。

## 要素

- [`<a>`](elements/a.md): 1991年のNeXT WorldWideWeb実装でHTML `A`とAnchor objectの対応を確認でき、Raggettらはanchor／`HREF`をBerners-Lee独自の設計と回顧するが、`A` tokenの選択は未確認である。
- [`<abbr>`](elements/abbr.md): HTML 4初期草案の`ACRONYM`が1997年に`ABBR`へ改名されたが、HTML+ `ABBREV`の影響は未確認である。
- [`<address>`](elements/address.md): 1991年のNeXT WorldWideWebでeditorの`Address` paragraph styleとHTML `ADDRESS`の相互変換を確認できるが、直前祖先と命名理由は未確認である。
- [`<area>`](elements/area.md): James L. Seidmanが1994年に`map`とともに提案した、client-side image mapの個々の領域を表す要素である。
- [`<article>`](elements/article.md): 2004年に`entry`、`post`、`article`が検討され、既存の`div class="post"`を置換する独立sectionとして2005年のWHATWG草案へ入った。
- [`<aside>`](elements/aside.md): 2004年の`sidebar`案から、配置をsideへ限定する誤解を避けるため`aside`となり、本文に関連するがflow外の内容を表した。
- [`<audio>`](elements/audio.md): `audio`は2007年3月23日、soundまたはaudio streamを表し、`video`と共通のmedia APIを持つ要素としてWHATWGへ追加された。
- [`<b>`](elements/b.md): 1993年HTML draftがTexinfo macro names由来と明記したphysical character highlighting要素で、同時代Texinfoの`@b`との対応を確認できる。
- [`<base>`](elements/base.md): 文書が取得元contextを失ってもrelative addressを解決する要求から1993年の`BASE`へ至るが、中間の具体化は未確認である。
- [`<bdi>`](elements/bdi.md): W3C i18n groupのbidi isolation要求と`ubi`属性案を、WHATWGが2010年に新要素へ変更して採録したものである。
- [`<bdo>`](elements/bdo.md): 文脈だけでは方向を解けないtextへUnicode directional overrideを指定するため、1995年の国際化草案が導入しRFC 2070が標準化した。
- [`<blockquote>`](elements/blockquote.md): Dan Connollyが1992年にHTML DTDへ追加し、後にUsenet newsの引用様式を有力な影響候補に挙げたが、同時代資料による祖先は未確認である。
- [`<body>`](elements/body.md): Tim Berners-Leeは1992年6月にheader／body分離案を示し、Dan Connollyの7月公開DTDは`BODY`をmixed content回避用の本文containerとして宣言した。
- [`<br>`](elements/br.md): 1993年9月のNCSA Mosaic 2.0 prerelease 3でline break tagとして確認できるが、HTML+案との前後関係と標準採用経路は未確認である。
- [`<button>`](elements/button.md): `button`は1997年、既存の`input`によるsubmit／reset／script用buttonと同じ動作を保ちながら、HTML内容を持つ豊かなbuttonを作るためW3CのHTML 4へ導入された。
- [`<canvas>`](elements/canvas.md): Richard WilliamsonがDashboard向けにWebKitへ`CANVAS`を初めて実装し、その実装からWHATWGのcanvas機能が設計されたことを、WebKit変更履歴とWHATWG自身の謝辞で確認できる。
- [`<caption>`](elements/caption.md): HTML+ table modelのcaptionからRFC 1942を経て標準化された要素で、HTML+のfigure用途とは区別する。
- [`<cite>`](elements/cite.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@cite`との対応を確認できる。
- [`<code>`](elements/code.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@code`との対応を確認できる。
- [`<col>`](elements/col.md): 1995年のHTML Tables草案がincremental display用のcolumn事前定義のため導入したが、`COL`自体のCALS由来は未確認である。
- [`<colgroup>`](elements/colgroup.md): 1995年のHTML Tables草案が、旧`COL` grouping modelでgroup内を異なるwidthにできない制約を解くため導入した。
- [`<data>`](elements/data.md): 人間向けの表示内容と機械可読な値を結び付けるため、HTML Working Groupのchange proposal、合意、決定を経て導入された。
- [`<datalist>`](elements/datalist.md): `datalist`は2004年のWeb Forms 2.0で、任意入力を許す`input`へauthor-specified suggestionsと非対応UA向けfallbackを与えるため導入された。
- [`<dd>`](elements/dd.md): CERN-SGMLから初期HTMLへ入ったlist集合の一つだが、`DD`個別の対応は明記されない。
- [`<del>`](elements/del.md): HTML+ `REMOVED`からHTML 3.0 `DEL`、HTML 4への系列は集合単位で確認できるが、個別の改名と採録は未確認である。
- [`<details>`](elements/details.md): `details`は2006年、GUIのdisclosure triangle/widgetをHTMLで表す要素としてWHATWGへ導入された。
- [`<dfn>`](elements/dfn.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@dfn`との対応を確認できる。
- [`<dialog>`](elements/dialog.md): CSS、JavaScript、WAI-ARIA製modalの問題を解くnativeな非同期機構として2012年に導入され、2009年に削除された会話用の同名要素とは断絶する。
- [`<div>`](elements/div.md): HTML 3.0草案で、`class`とともにchapter、section、abstract、appendix等を表す汎用containerとして確認でき、HTML 3.2へ継承された。
- [`<dl>`](elements/dl.md): CERN-SGMLから初期HTMLへ入ったlist集合の一つだが、`DL`個別の対応は明記されない。
- [`<dt>`](elements/dt.md): CERN-SGMLから初期HTMLへ入ったlist集合の一つだが、`DT`個別の対応は明記されない。
- [`<em>`](elements/em.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@emph`との対応を確認できる。
- [`<embed>`](elements/embed.md): NetscapeがNavigator 2.0のplug-in mechanismのために提案・実装した空要素である。
- [`<fieldset>`](elements/fieldset.md): modern UIのlabelled groupとspeech navigation要求から`LGROUP`／`IS`、`FIELDSET`／`CAPTION`を経てHTML 4の`FIELDSET`／`LEGEND`へ至った。
- [`<figcaption>`](elements/figcaption.md): 2010年1月、HTML5草案の`figure` captionを`dt`／`dd`で表す方式が意味、構造、後方互換性の問題を指摘され、専用の`figcaption`へ変更された。
- [`<figure>`](elements/figure.md): HTML+ `FIG`／`CAPTION`とWHATWGの実例調査・提案を受け、2006年に`figure`／`legend`として採用され、後に`figcaption`へ変化した。
- [`<footer>`](elements/footer.md): 2004年からWHATWGのsemantic element集合に現れ、典型的site markupからの集合単位の導入は確認できるが、`footer`個別の対応は不明である。
- [`<form>`](elements/form.md): HTML+ formsからHTML 2.0へ導出されたform containerで、特定GUI toolkitとの直接関係は未確認である。
- [`<h1>`〜`<h6>`](elements/h1-h6.md): `h1`〜`h6`は、AAP tag setのheading definitionがCERN SGML guideを経て初期HTMLへ保持された、共通の直接史料を持つ6段階の見出し要素群である。
- [`<head>`](elements/head.md): 1992年のheader／body分離案から`HEADING`案を経て1993年の`HEAD`へ至るが、最終tokenの選定記録は未回収である。
- [`<header>`](elements/header.md): 2005年のheading group用`header`を2009年に`hgroup`へ移し、直後に見出し、検索、navigation等をまとめる現行系統を新設した。
- [`<hgroup>`](elements/hgroup.md): 2009年4月、WHATWG editor Ian Hicksonが当時のHTML5 `header`を`hgroup`へ改名し、subheadingを支える用途へ限定して導入した。
- [`<hr>`](elements/hr.md): 1993年7月のCERN/IETF HTML draftにはなく、1993年9月5日に公開されたNCSA Mosaic 2.0 prerelease 3のchange logでhorizontal rule tagとして追加されたことを確認できる。
- [`<html>`](elements/html.md): Dan ConnollyがSGML parserにtop-level elementを推論させるため1992年に導入したが、HTML以前の具体的祖先は未確認である。
- [`<i>`](elements/i.md): 1993年HTML draftがTexinfo macro names由来と明記したphysical character highlighting要素で、同時代Texinfoの`@i`との対応を確認できる。
- [`<iframe>`](elements/iframe.md): Microsoft IE3のfloating-frame実装とW3Cの`IFRAME`案は確認できるが、Microsoft提出からW3C案への要素単位の採用は未確認である。
- [`<img>`](elements/img.md): Marc AndreessenがNCSA X Mosaicへ実装し、1993年に提案したinline image要素である。
- [`<input>`](elements/input.md): HTML+ formsからHTML 2.0へ導出されたtyped input fieldで、各widget typeの由来は未確認である。
- [`<ins>`](elements/ins.md): HTML+ `ADDED`からHTML 3.0 `INS`、HTML 4への系列は集合単位で確認できるが、個別の改名と採録は未確認である。
- [`<kbd>`](elements/kbd.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@kbd`との対応を確認できる。
- [`<label>`](elements/label.md): 1996年のW3C forms草案が、form controlとlabel textを構造的に関連付け、graphic／speech browserでの操作と説明を改善するため`LABEL`を提案した。
- [`<legend>`](elements/legend.md): `LGROUP`／`IS`から`FIELDSET`／`CAPTION`を経てHTML 4の`LEGEND`へ変化したが、最後の改名判断は未確認である。
- [`<li>`](elements/li.md): CERN-SGMLから初期HTMLへ入ったlist集合の一つだが、`LI`個別の対応は明記されない。
- [`<link>`](elements/link.md): 1992年のCERN設計ノートは、textへ局所化されたanchorと区別して文書全体の関係を表す空の`LINK`を新DTD向けに提案し、1993年1月6日版DTDに同要素が現れる。
- [`<main>`](elements/main.md): WAI-ARIA `main` landmarkと`div role="main"`、`id=main/content`等の既存Web慣習を、2012年の提案がnative HTML要素へ形式化したものである。
- [`<map>`](elements/map.md): James L. Seidmanが1994年に`area`とともに提案したclient-side image mapのcontainerであり、HTML+のimage map案を直接検討して設計された。
- [`<mark>`](elements/mark.md): 2005年WHATWG草案のhighlight用`m`を、2008年に`mark`へ改名して導入された。
- [`<math>`](elements/math.md): MathML 1.0で定義済みのMathML名前空間のrootを、2008年にHTMLの`text/html` parserから生成できるforeign rootとして統合したものである。
- [`<menu>`](elements/menu.md): 1992年のWorldWideWebとLine Mode Browserでcompact listとして確認できるが、両史料の時系列と現行command semanticsへの再定義経路は未解決である。
- [`<meta>`](elements/meta.md): Roy Fieldingが1994年6月、専用HTML要素で定義されないname/value型のdocument metadataと、必要に応じたHTTP response headerへの写像を行う`META`を提案した。
- [`<meter>`](elements/meter.md): `meter`は2006年、WHATWG Web Applications 1.0のWIP `gauge`を改名し、既知範囲のscalar measurementを表す要素として仕様化された。
- [`<nav>`](elements/nav.md): 2004年の`navigation`から2005年の`nav`へ続き、典型的site markupからの集合単位の導入は確認できるが、個別対応と改名理由は不明である。
- [`<noscript>`](elements/noscript.md): W3CのClient-side Scripting草案で、scriptまたはその言語に非対応のuser agentへ代替内容を示すため導入され、HTML 4へ入った要素である。
- [`<object>`](elements/object.md): 画像、applet、plug-in等を別々の機構で扱う制約に対し、W3Cが汎用`INSERT`として提案し、1996年に`OBJECT`へ改名した要素である。
- [`<ol>`](elements/ol.md): CERN-SGML由来の集合に含まれ、当初はunordered listとして実装された後、1992年にunordered listとの区別のため戻された。
- [`<optgroup>`](elements/optgroup.md): 長い`SELECT`のaccessibility改善策としてMegaZoneがnested list型のgroupingを提案し、WAIとHTML WGの検討を経てHTML 4へ入った。
- [`<option>`](elements/option.md): HTML+ formsからHTML 2.0へ導出されたselection candidate要素である。
- [`<output>`](elements/output.md): XFormsの非editableな値表示controlをHTML formsへ適応して2003年に提案され、Web Forms 2.0を経てHTML5へ統合された。
- [`<p>`](elements/p.md): 1992年1月のBerners-Lee mailで空のparagraph markとして確認でき、SGML由来という回顧はあるが、具体的な元vocabularyは未確認である。
- [`<picture>`](elements/picture.md): Responsive Images Community Groupの提案とPicturefillを、HTML Working Groupのextension draftを経てWHATWG HTMLへ統合した要素である。
- [`<pre>`](elements/pre.md): 初期HTMLのcomputer output表示から、Unix manual pagesのhypertext化要求による拡張を経たpreformatted text要素である。
- [`<progress>`](elements/progress.md): 2004年のProgress meters placeholderを2006年にdeterminate／indeterminateなtask completion要素へ具体化したが、それ以前のwidgetからの採用は未確認である。
- [`<q>`](elements/q.md): 1995年のHTML国際化草案がlanguage-sensitiveなquotation renderingのため導入したが、HTML+ `Q`からの個別採用は未確認である。
- [`<rp>`](elements/rp.md): ruby非対応user agent向けの括弧を表す要素としてW3Cが提案・規範化し、既存Web上の`rp`を含む単純なruby markupとの互換性を保つため、2008年に`ruby`、`rt`とともにHTML5へ追加された。
- [`<rt>`](elements/rt.md): W3Cのruby語彙でannotation textを表す要素として提案・規範化され、既存Web上の`rt`を含む単純なruby markupとの互換性を保つため、2008年に`ruby`、`rp`とともにHTML5へ追加された。
- [`<ruby>`](elements/ruby.md): W3Cのruby語彙とIE実装が存在する中、既存Webとの互換性のため2008年に`rt`、`rp`とともにHTML5へ追加されたが、W3C語彙からの直接採用は未確認である。
- [`<s>`](elements/s.md): HTML+／HTML 3.0のpresentational `S`がHTML 4へ再採録され、HTML5でのobsolete化後、2010年に「もはや正確でない」内容の意味で再導入された。
- [`<samp>`](elements/samp.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@samp`との対応を確認できる。
- [`<script>`](elements/script.md): Netscapeが定義しNavigator 2.0 betaへ実装した`SCRIPT`を、W3CのHTML3 Scripting草案がformalizeした要素である。
- [`<search>`](elements/search.md): WAI-ARIA `search` landmarkと`div role="search"`をnative HTMLで表すためWHATWGが採用し、2023年にLiving Standardへ入れたcontainerである。
- [`<section>`](elements/section.md): 遅くとも2004年8月にはWHATWG Web Applications 1.0で定義され、見出しだけでは文書構造とoutlineを確実に復元できない問題へのsectioning modelを担った。
- [`<select>`](elements/select.md): HTML+ formsからHTML 2.0へ導出されたcompact selection listである。
- [`<selectedcontent>`](elements/selectedcontent.md): customizable `select`の選択内容を宣言表示する`selectedoption`案を、名称の曖昧さから改名して2025年にHTMLへ統合した。
- [`<slot>`](elements/slot.md): Shadow DOM v0の`content` insertion pointをslotsとして再設計し、DOMのslot概念を参照するHTML要素として2016年に導入された。
- [`<small>`](elements/small.md): HTML 3.0の小さいfont用要素を、WHATWGが2005年にsmall printやside commentsを表す意味へ再定義したが、最初の導入経路は未確認である。
- [`<source>`](elements/source.md): `source`は2007年3月23日、`video`でcodec negotiationを行い複数の代替media resourceから選択する要素としてWHATWGへ追加された。
- [`<span>`](elements/span.md): 1995年9月のIETF HTML国際化草案が`LANG`／`DIR`を置く適切な要素がないinline textのために導入したgeneric containerである。
- [`<strong>`](elements/strong.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@strong`との対応を確認できる。
- [`<style>`](elements/style.md): 確認できる最初の`STYLE`は1995年4月25日のHTML 3.0草案にあり、文書内のstyle overridesを`HEAD`へ置く。
- [`<sub>`](elements/sub.md): HTML+のDTDが一般テキストでも許可した`SUB`をHTML 3.0へ引き継ぐ設計意図を、Dave Raggettの同時代メールで確認できる。
- [`<summary>`](elements/summary.md): `summary`は2010年、`details`のcaptionを`legend`または`dt`／`dd`で表す方式を専用要素へ置換して導入された。
- [`<sup>`](elements/sup.md): HTML+のDTDが一般テキストでも許可した`SUP`をHTML 3.0へ引き継ぐ設計意図を、Dave Raggettの同時代メールで確認できる。
- [`<svg>`](elements/svg.md): SVG 1.0で定義済みのSVG名前空間のrootを、2008年にHTML parserへ統合し、一度削除した後、feedbackを受けて2009年に再導入したものである。
- [`<table>`](elements/table.md): CALSの縮小移植ではなくbrowser向けの単純なHTML+案として選ばれ、RFC 1942を経て標準化されたtable containerである。
- [`<tbody>`](elements/tbody.md): CALSの`TBODY`を1995年のRaggett案がHTMLへ取り込み、IETF草案とRFC 1942を経てHTML 4が標準化した。
- [`<td>`](elements/td.md): HTML+ table modelのdata cellからRFC 1942を経て標準化された要素である。
- [`<template>`](elements/template.md): 利用前のHTML fragmentをinert DOM subtreeとして保持・複製するため2011年に提案され、Web Components作業を経て2013年にWHATWG HTMLへ統合された。
- [`<textarea>`](elements/textarea.md): 長いmulti-line値を`INPUT`属性へ置くSGML上の問題からHTML+で分離され、HTML 2.0へ採録された要素である。
- [`<tfoot>`](elements/tfoot.md): CALSの`TFOOT`を1995年のRaggett案がHTMLへ取り込み、IETF草案とRFC 1942を経てHTML 4が標準化した。
- [`<th>`](elements/th.md): HTML+ table modelのheader cellからRFC 1942を経て標準化された要素である。
- [`<thead>`](elements/thead.md): CALSの`THEAD`を1995年のRaggett案がHTMLへ取り込み、IETF草案とRFC 1942を経てHTML 4が標準化した。
- [`<time>`](elements/time.md): 2006年にWHATWG草案の`<t>`から改名され、2011年の`data`への置換と約3週間後の再導入を経て現行設計へ続く。
- [`<title>`](elements/title.md): SGMLのtag-pair構文を用いつつ、nodeを文脈外で識別してwindow名やhistoryへ使うWWW固有のpropertyとして1991年に確認できる。
- [`<tr>`](elements/tr.md): HTML+作業中にrow separatorからrow containerへ変化し、RFC 1942を経て標準化された要素である。
- [`<track>`](elements/track.md): `track`は2010年、media elementへ外部字幕、caption、description、chapter、metadataを関連づけるtimed track機構として導入された。
- [`<u>`](elements/u.md): 1993年のTexinfo由来とする集合記述に個別対応がなく、HTML 3.2での再出現と2011年のconforming化の間にも系譜の欠落が残る。
- [`<ul>`](elements/ul.md): CERN-SGMLから初期HTMLへ入ったlist集合の一つだが、`UL`個別の対応は明記されない。
- [`<var>`](elements/var.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@var`との対応を確認できる。
- [`<video>`](elements/video.md): `video`は2007年、Operaの実験実装と提案を受けてWHATWGへ導入された。
- [`<wbr>`](elements/wbr.md): Netscape Navigator 1.1の任意改行要素として確認できるが、HTML5への再採録経路とHTML以前の祖先は未確認である。

## 共有系譜

- [現行HTML要素の横断系譜](lineages/README.md): 確認済みの共有系統を一覧化し、個別採用を確認できない境界をまとめる。
- [CALSとHTMLの表構造要素](lineages/cals-tables.md): CALSのrow groupsと表のimport要求から、IETF table草案、RFC 1942、HTML 4へ至る表構造の経路をまとめる。
- [CERN-SGMLから初期HTML list群への共有系譜](lineages/cern-sgml-lists.md): CERN-SGML tagsetから初期HTMLのlist六要素を含む集合への採録と、個別対応を確認できない制約をまとめる。
- [IETF HTML国際化草案の共有系譜](lineages/html-internationalization.md): IETF国際化草案から`q`、`sub`、`sup`、`span`、`bdo`へ至る経路と、style要件が`span`へ合流した経路をまとめる。
- [HTML+から現行HTML要素への共有系譜](lineages/html-plus.md): HTML+からdocument amendments、forms、tables、figures、client-side image mapsの各要素群へ至る共有経路をまとめる。
- [HTML phrase elementsとTexinfo](lineages/texinfo.md): Texinfo macro namesからHTML phrase要素集合への命名経路と、`u`など個別対応を確認できない境界をまとめる。
- [初期WHATWG sectioning語彙の共有系譜](lineages/whatwg-sectioning.md): 典型的siteのmarkupと`div`のpseudo-semantic用途から初期WHATWG semantic element集合へ至る要求と、個別に確認できる枝をまとめる。

## 統合

- [HTML要素の導入経路と由来](syntheses/introduction-paths-and-origins.md): HTML+等を含む現行HTMLへの導入経路と、HTML内部の変遷を通して遡れる具体的な由来による分類を分け、現行115要素の主経路と根拠を示す。
