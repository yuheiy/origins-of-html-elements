---
status: 完成
---

# The origins of HTML elements

このWikiは、現行HTML要素がどの文書体系、ソフトウェア、メディア、UI慣習、標準化活動から生まれたかを、史料に基づいて追跡する。現在の意味や名称の類似から起源を推測せず、確認できない接続は未解決として残す。

## 読み方

- [要素](elements/)は、現行要素ごとに現在の意味、HTMLへの導入、直前の祖先、上流の由来、証拠、確度、否定された仮説、未解決点をまとめる。
- [共有系譜](lineages/)は、複数要素に共通する確認済みの採用経路や要求をまとめる。個別要素の結論と確度は要素ページを正本とする。
- sourceページは複数ページで文脈を再利用する必要があるRaw sourceを要約し、synthesisページは比較や横断分析を扱う。現在、この二種に該当するページはない。
- [操作Log](log.md)はWikiに対する操作をappend-onlyで記録する。構造と運用の規範は[AGENTS.md](../AGENTS.md)、保存資料の一覧と来歴は[Raw README](../raw/README.md)を参照する。

## 収録範囲

最終確認日は2026年8月9日である。[WHATWG HTML Living StandardのElements index](../raw/html-living-standard/indices.html)（[公開版](https://html.spec.whatwg.org/multipage/indices.html#elements-3)）にあるHTML名前空間の組み込み要素113件と、HTML構文で使用できる名前付きforeign rootの`math`と`svg`を合わせた115要素を収録する。この一覧は特定日のsnapshotではなく、Living Standardに追従して更新する。

- Elements indexの`h1, h2, h3, h4, h5, h6`は6要素として数え、共通史料と系譜は[`h1-h6.md`](elements/h1-h6.md)へまとめる。
- HTML syntaxが[foreign elementsと定義する](../raw/html-living-standard/syntax.html)（[公開版](https://html.spec.whatwg.org/multipage/syntax.html#elements-2)）ことに基づき、MathMLの`math`とSVGの`svg`はHTML名前空間要素と分けて数えるが、HTML文書内でforeign contentを開始する名前付きrootなので対象へ含める。
- [Custom elements](../raw/html-living-standard/custom-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-core-concepts)）に基づき、autonomous custom elementsは名前集合が開いており、customized built-in elementsは既存の組み込み要素名を使うため、どちらも追加の要素名として数えない。
- [Non-conforming features](../raw/html-living-standard/obsolete.html)（[公開版](https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features)）でentirely obsoleteとされる要素は除外し、現行要素の系譜を説明する場合だけ歴史的要素として扱う。
- [`search`](../raw/html-living-standard/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)）と[`selectedcontent`](../raw/html-living-standard/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)）は独立したnormative定義を持ち、公式索引に掲載されるため含める。実装状況や外部サイト上の`experimental`表示は収録判断に使わない。

## 要素

- [`<a>`](elements/a.md): NeXT WorldWideWebの1991年1月の実装履歴と1992年のCERNタグ一覧で、linkの始点・終点となるanchorを確認できる。WWWがnode間のlinkを必要としたことは一次資料に明記されるが、ENQUIRE、NeXTのHyperText機能、HyTimeなどからHTMLの`A`へ採用した因果関係は確認できない。
- [`<abbr>`](elements/abbr.md): HTML+／HTML 3.0には`ABBREV`と`ACRONYM`が別要素としてあり、HTML 4初期草案は`ACRONYM`だけを採録した。1997年11月のHTML 4 Proposed Recommendationは、この要素を`ABBR`へ改名したと明記する。HTML 3.0の`ABBREV`がこの変更へ影響したかは未確認である。
- [`<address>`](elements/address.md): 1991年2月のNeXT WorldWideWeb change historyと保存sourceから、editorの`Address` paragraph styleとHTML `ADDRESS` tagを相互変換する設計モデルを確認できる。具体的な直前祖先と`ADDRESS`という語彙の選択理由は確認できない。
- [`<area>`](elements/area.md): James L. Seidmanが1994年に`map`とともに提案した、client-side image mapの個々の領域を表す要素である。
- [`<article>`](elements/article.md): 2004年8月にWHATWG編集者Ian Hicksonが、sectionより大きくpageより小さいtext unitの候補として`entry`、`post`、`article`を提示した。11月には既存の`div class="post"`を`article`へ置換できることを設計要求として明記し、2005年草案ではblog postやforum post等の独立したsectionと定義した。
- [`<aside>`](elements/aside.md): 2004年8月にWHATWG編集者Ian Hicksonが`sidebar`を提案し、11月には本文に関連するが本文のflow外にある内容と説明した。2005年草案までに`aside`となり、Hicksonは後に、pageのsideだけに用途を限定すると誤解されないため`sidebar`を採らなかったと説明した。
- [`<audio>`](elements/audio.md): `audio`は2007年3月23日、soundまたはaudio streamを表し、`video`と共通のmedia APIを持つ要素としてWHATWGへ追加された。翌月、従来の独立したWHATWG `Audio` interfaceは`HTMLAudioElement`へ置換され、`new Audio()`も同要素を作るAPIとして残された。
- [`<b>`](elements/b.md): 1993年HTML draftがTexinfo macro names由来と明記したphysical character highlighting要素で、同時代Texinfoの`@b`との対応を確認できる。
- [`<base>`](elements/base.md): 1992年CERNタグ一覧は、mail送信や複数addressでの参照により文書が取得時のcontextを失ってもrelative addressを解決するため、base addressが必要だと説明する。同年の設計ノートには`SAVEDAS`案、1993年1月6日版DTDには`BASE`があるが、その間の具体化記録は回収できていない。
- [`<bdi>`](elements/bdi.md): W3C i18n groupのbidi isolation要求と`ubi`属性案を、WHATWGが2010年に新要素へ変更して採録したものである。
- [`<bdo>`](elements/bdo.md): 1995年9月のHTML internationalization draftが、文脈だけでは方向を一意に解けないtextのため、Unicodeのdirectional overrideをHTML markupとして導入し、RFC 2070が標準化した要素である。
- [`<blockquote>`](elements/blockquote.md): Dan Connollyが1992年12月4日のmailで、新しいparagraph styleとしてHTML DTDへ追加すると説明し、1993年1月6日版DTDで確認できる。HTML以前の具体的祖先は確認できない。
- [`<body>`](elements/body.md): Tim Berners-Leeは1992年6月にheader／body分離案を示し、Dan Connollyの7月公開DTDは`BODY`をmixed content回避用の本文containerとして宣言した。11月には内部版の`DOCUMENT`を`BODY`へ戻す具体案が支持され、1993年1月6日版DTDへ続いた。`DOCUMENT`を含む内部版DTDは回収できていない。
- [`<br>`](elements/br.md): 1993年7月のCERN/IETF HTML draftにはない。1993年9月5日公開のNCSA Mosaic 2.0 prerelease 3ではline break tagとして実装され、同月10日にDave Raggettが既存HTML+ draftの`BR`を`L`へ置き換える案を示した。両系列の前後関係、発案理由、発案者、HTML 2.0への採用経路は確認できない。
- [`<button>`](elements/button.md): `button`は1997年、既存の`input`によるsubmit／reset／script用buttonと同じ動作を保ちながら、HTML内容を持つ豊かなbuttonを作るためW3CのHTML 4へ導入された。
- [`<canvas>`](elements/canvas.md): Richard WilliamsonがDashboard向けにWebKitへ`CANVAS`を初めて実装し、その実装からWHATWGのcanvas機能が設計されたことを、WebKit変更履歴とWHATWG自身の謝辞で確認できる。提案本文、正式な提出日、採録時の編集記録は未確認であり、Dave HyattとIan Hicksonの同時代説明も提出時点について食い違う。
- [`<caption>`](elements/caption.md): HTML+ table modelのcaptionからRFC 1942を経て標準化された要素で、HTML+のfigure用途とは区別する。
- [`<cite>`](elements/cite.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@cite`との対応を確認できる。
- [`<code>`](elements/code.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@code`との対応を確認できる。
- [`<col>`](elements/col.md): tableの一つ以上のcolumnを表す空要素である。1995年9月25日のHTML3 Tables Working Draftはincremental displayに必要なcolumn widthとcolumn-based defaultsをdataより先に指定するため提案し、RFC 1942を経てHTML 4.0が標準化した。`COL`要素自体をCALSから採用した証拠は確認できない。
- [`<colgroup>`](elements/colgroup.md): tableの一つ以上のcolumnsをgroupingする要素である。1995年10月27日のHTML Tables draft revision 03が、旧`COL` grouping modelではgroup内を異なるwidthにできない制約を解く新要素として導入し、RFC 1942を経てHTML 4.0が標準化した。
- [`<data>`](elements/data.md): 人間向けの表示内容と機械可読な値を結び付けるため、HTML Working Groupのchange proposal、合意、決定を経て導入された。
- [`<datalist>`](elements/datalist.md): `datalist`は2004年のWeb Forms 2.0で、任意入力を許す`input`へauthor-specified suggestionsと非対応UA向けfallbackを与えるため導入された。書き込み可能な`select`へ統合する案は後方互換性を理由に検討・棄却され、Web Forms 2.0からHTML5への要素単位の統合差分も確認できる。
- [`<dd>`](elements/dd.md): 1990年12月のWorldWideWeb test fileは、CERN-SGML tagsetから一部をHTMLへ含めたと明記し、`DL`、`DT`、`DD`をaccepted tag集合の実例として使う。個々のtagの対応は明記されないため、CERN-SGMLからの採録は集合単位で確認できる。
- [`<del>`](elements/del.md): HTML+は1993年に法案修正の削除部分を表す`REMOVED`を定義し、Dave Raggettは1995年2月22日に法律文書用の`DEL`をHTML 3.0 DTDへ追加した。HTML+からHTML 3.0、その先行作業からHTML 4への継承は集合単位で確認できるが、`REMOVED`から`DEL`への個別改名とHTML 4への個別採録は未確認である。
- [`<details>`](elements/details.md): `details`は2006年、GUIのdisclosure triangle/widgetをHTMLで表す要素としてWHATWGへ導入された。初期captionには`legend`を使い、2009年に`dt`／`dd`、2010年に専用`summary`へ変更された。
- [`<dfn>`](elements/dfn.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@dfn`との対応を確認できる。
- [`<dialog>`](elements/dialog.md): 現行`dialog`は、CSS、JavaScript、WAI-ARIAで実装されていたin-page modal dialogとbrowserのblocking promptが抱える問題を、customizableで非同期なnative HTML機構にするため2012年4月に導入された。2009年に削除された同名の会話用要素とは断絶している。
- [`<div>`](elements/div.md): HTML 3.0草案で、`class`とともにchapter、section、abstract、appendix等を表す汎用containerとして確認でき、HTML 3.2へ継承された。HTML外の特定DTDや文書処理systemから採用した因果は確認できない。
- [`<dl>`](elements/dl.md): 1990年12月のWorldWideWeb test fileは、CERN-SGML tagsetから一部をHTMLへ含めたと明記し、`DL`、`DT`、`DD`をaccepted tag集合の実例として使う。個々のtagの対応は明記されないため、CERN-SGMLからの採録は集合単位で確認できる。
- [`<dt>`](elements/dt.md): 1990年12月のWorldWideWeb test fileは、CERN-SGML tagsetから一部をHTMLへ含めたと明記し、`DL`、`DT`、`DD`をaccepted tag集合の実例として使う。個々のtagの対応は明記されないため、CERN-SGMLからの採録は集合単位で確認できる。
- [`<em>`](elements/em.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@emph`との対応を確認できる。
- [`<embed>`](elements/embed.md): NetscapeがNavigator 2.0のplug-in mechanismのために提案・実装した空要素である。1993年の同名link relationshipや後続のcontainer案とは区別する。
- [`<fieldset>`](elements/fieldset.md): 1996年のW3C forms草案がmodern UIのlabelled group慣習とspeech navigation要求を`LGROUP`／`IS`としてHTMLへ提案し、1997年のCougar form草案が`FIELDSET`／`CAPTION`へ改めた。HTML 4 WGは`FIELDSET`／`LEGEND`として採録した。特定GUI toolkitからの採用は未確認である。
- [`<figcaption>`](elements/figcaption.md): 2010年1月、HTML5草案の`figure` captionを`dt`／`dd`で表す方式が意味、構造、後方互換性の問題を指摘され、専用の`figcaption`へ変更された。さらに上流では、HTML+ `FIG`／`CAPTION`をWHATWGの`figure` caption構造へ採用した因果を確認できる。
- [`<figure>`](elements/figure.md): 2006年11月、Ian Hicksonがembedded contentとcaptionからなるparagraphとしてWHATWG HTMLへ追加した。Michel Fortinによる`figure`提案と実例調査、Simon Pietersが示したHTML+ `FIG`／`CAPTION`を受け、HTML+案の`fig`を`figure`、parser上再利用できない`caption`を`legend`へ変えて採用したことをHickson自身が同時代メールで説明している。caption構造はその後`dt`／`dd`を経て専用`figcaption`へ変わり、各変更理由も公開議論とissueで確認できる。
- [`<footer>`](elements/footer.md): 2004年8月にWHATWGのsemantic element候補として確認でき、2005年草案ではsectionに関する著者・著作権等の情報を表した。編集者はこの語彙集合が典型的siteのmarkup、特に`div`濫用の調査から直接得られたと説明したが、`footer`個別の先行markupとの対応は不明である。
- [`<form>`](elements/form.md): HTML+ formsからHTML 2.0へ導出されたform containerで、特定GUI toolkitとの直接関係は未確認である。
- [`<h1>`〜`<h6>`](elements/h1-h6.md): `h1`〜`h6`は、AAP tag setのheading definitionがCERN SGML guideを経て初期HTMLへ保持された、共通の直接史料を持つ6段階の見出し要素群である。
- [`<head>`](elements/head.md): 1992年6月のheader／body分離案、CERNのheader wrapper計画、11月の`HEADING`提案と採用支持を経て、1993年1月6日版DTDの`HEAD`へ至る。wrapper採用の因果は当事者資料で確認できるが、`HEAD`という最終tokenを選んだ記録は回収できていない。
- [`<header>`](elements/header.md): 2004年11月までにWHATWGのsemantic element集合として提案され、2005年草案ではsectionのheadingを表すcontainerだった。2009年4月30日に旧`header`のheading group用途を`hgroup`へ移し、その直後に見出し、目次、検索form、logo、navigationをまとめる現行系統の`header`を新設した。
- [`<hgroup>`](elements/hgroup.md): 2009年4月、WHATWG editor Ian Hicksonが当時のHTML5 `header`を`hgroup`へ改名し、subheadingを支える用途へ限定して導入した。その後意味は変更されたが、この要素単位の直接経路は仕様commitで確認できる。
- [`<hr>`](elements/hr.md): 1993年7月のCERN/IETF HTML draftにはなく、1993年9月5日に公開されたNCSA Mosaic 2.0 prerelease 3のchange logでhorizontal rule tagとして追加されたことを確認できる。同年11月のHTML+ draftにも収録されるが、発案理由、発案者、標準採用までの因果は確認できない。
- [`<html>`](elements/html.md): 1992年6月のConnolly DTDでdocument elementとして確認できる。ConnollyはSGML parserがtop-level elementを推論できるよう自ら導入したと説明するが、HTML以前の具体的祖先は確認できない。
- [`<i>`](elements/i.md): 1993年HTML draftがTexinfo macro names由来と明記したphysical character highlighting要素で、同時代Texinfoの`@i`との対応を確認できる。
- [`<iframe>`](elements/iframe.md): Microsoft IE3のfloating-frame機能、Microsoftによるframe拡張集合のW3C提出、W3Cの`IFRAME`提案を確認できる。ただし、Microsoftの提出集合に`IFRAME`が含まれ、W3C案がそれを採録したという要素単位の接続は未確認である。
- [`<img>`](elements/img.md): Marc AndreessenがNCSA X Mosaicへ実装し、1993年に提案したinline image要素である。提案以前の画像埋込みsystemからの直接系譜は未確認である。
- [`<input>`](elements/input.md): HTML+ formsからHTML 2.0へ導出されたtyped input fieldで、各widget typeの上流は未確認である。
- [`<ins>`](elements/ins.md): HTML+は1993年に法案修正の追加部分を表す`ADDED`を定義し、Dave Raggettは1995年2月22日に法律文書用の`INS`をHTML 3.0 DTDへ追加した。HTML+からHTML 3.0、その先行作業からHTML 4への継承は集合単位で確認できるが、`ADDED`から`INS`への個別改名とHTML 4への個別採録は未確認である。
- [`<kbd>`](elements/kbd.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@kbd`との対応を確認できる。
- [`<label>`](elements/label.md): 1996年のW3C forms草案が、form controlとlabel textを構造的に関連付け、graphic／speech browserでの操作と説明を改善するため`LABEL`を提案した。Cougar form草案を経てHTML 4が採録した。RamanとRaggettによる1995年のspeech-form作業との接続も同時代mailで確認できる。
- [`<legend>`](elements/legend.md): 1996年のW3C forms草案がlabelled groupを`LGROUP`／`IS`として提案し、1997年のCougar form草案が`FIELDSET`用`CAPTION`へ改めた。HTML 4 First Public Working Draftは同じcaption slotを`LEGEND`へ置換したが、その判断と提案者は未確認である。
- [`<li>`](elements/li.md): 1990年12月のWorldWideWeb test fileは、CERN-SGML tagsetから一部をHTMLへ含めたと明記し、`LI`を`OL`と`UL`のaccepted tag集合の実例として使う。個々のtagの対応は明記されないため、CERN-SGMLからの採録は集合単位で確認できる。
- [`<link>`](elements/link.md): 1992年のCERN設計ノートは、textへ局所化されたanchorと区別して文書全体の関係を表す空の`LINK`を新DTD向けに提案し、1993年1月6日版DTDに同要素が現れる。個別の採録記録と、HTML以前の具体的なlink mechanismから採用した因果関係は確認できない。
- [`<main>`](elements/main.md): WAI-ARIA `main` landmarkと`div role="main"`、`id=main/content`等の既存Web慣習を、2012年の提案がnative HTML要素へ形式化したものである。
- [`<map>`](elements/map.md): James L. Seidmanが1994年に`area`とともに提案したclient-side image mapのcontainerであり、HTML+のimage map案を直接検討して設計された。
- [`<mark>`](elements/mark.md): 2005年WHATWG草案のhighlight用`m`を、2008年に`mark`へ改名して導入された。改名とrelevanceを中心とする意味の詳述は仕様commitで確認できる。
- [`<math>`](elements/math.md): MathML 1.0で定義済みのMathML名前空間のrootを、2008年にHTMLの`text/html` parserから生成できるforeign rootとして統合したものである。
- [`<menu>`](elements/menu.md): 1992年2月11日のHTTP保存日時を持つWorldWideWeb test sourceで`MENU`と`LI`の実例を確認できる。一方、CERN Line Mode Browser change historyは2月12日より後、3月27日より前のversion 1.2aで`MENU`と`DIR`を将来利用のため導入したと記録し、両資料の時系列は解消できていない。同年5月には検索結果生成に`MENU`が使われ、後続資料は`UL`よりcompactで通常1 item 1 lineのlistとする。初期の表示別list分類から現行のcommand semanticsへの再定義経路は未確認である。
- [`<meta>`](elements/meta.md): Roy Fieldingが1994年6月、専用HTML要素で定義されないname/value型のdocument metadataと、必要に応じたHTTP response headerへの写像を行う`META`を提案した。同月のHTML 2.0仕様patchとRFC 1866まで同じ属性modelを追跡できる。
- [`<meter>`](elements/meter.md): `meter`は2006年、WHATWG Web Applications 1.0のWIP `gauge`を改名し、既知範囲のscalar measurementを表す要素として仕様化された。
- [`<nav>`](elements/nav.md): 2004年11月のWHATWG sectioning element集合では`navigation`、2005年草案では`nav`として確認できる。編集者はこの語彙集合が典型的siteのmarkup、特に`div`濫用の調査から直接得られたと説明したが、個別対応と`navigation`から`nav`への変更判断は不明である。
- [`<noscript>`](elements/noscript.md): W3CのClient-side Scripting草案で、scriptまたはその言語に非対応のuser agentへ代替内容を示すため導入され、HTML 4へ入った要素である。Netscape Navigator 3.0の実装も確認できるが、W3C案との前後関係と採録因果は未確認である。
- [`<object>`](elements/object.md): 画像、applet、plug-in等を別々の機構で扱う制約に対し、W3Cが汎用`INSERT`として提案し、1996年に`OBJECT`へ改名した要素である。`INSERT → OBJECT`は直接確認できるが、個々のvendor要素からの派生は確認できない。
- [`<ol>`](elements/ol.md): 1990年12月のWorldWideWeb test fileは、CERN-SGML tagsetから一部をHTMLへ含めたと明記し、`OL`をaccepted tag集合の実例として使う。ただし当時はunordered listとして実装され、個々のCERN-SGML tagとの対応も明記されない。1992年には一時未使用だったが、unordered listとの区別のため戻す設計判断を確認できる。
- [`<optgroup>`](elements/optgroup.md): MegaZoneが長い`SELECT`のaccessibilityを改善するため、windowing systemのnested listとNetscape bookmarksを具体例に`OPTGROUP`を提案し、WAIの提案としてHTML WGが検討してHTML 4へ採録した。
- [`<option>`](elements/option.md): HTML+ formsからHTML 2.0へ導出されたselection candidate要素である。
- [`<output>`](elements/output.md): `output`はXFormsの非editableな値表示controlを含む機能集合を既存HTML forms modelへ適応する過程で、2003年にHTML form controlとして提案され、Web Forms 2.0を経てHTML5へ統合された。
- [`<p>`](elements/p.md): 1992年1月のBerners-Lee mailで、新しいparagraphを示す空のmarkとして確認できる。styled paragraph列へ往復できるflat document modelの一部だが、具体的祖先は未確認である。
- [`<picture>`](elements/picture.md): Responsive Images Community Groupの提案とPicturefillを、HTML Working Groupのextension draftを経てWHATWG HTMLへ統合した要素である。
- [`<pre>`](elements/pre.md): 初期HTMLのcomputer output表示から、Unix manual pagesのhypertext化要求による拡張を経たpreformatted text要素である。
- [`<progress>`](elements/progress.md): `progress`は2004年12月のWHATWG Web Applications 1.0にあったProgress meters placeholderを、2006年3月にtask completionをdeterminate／indeterminateの二状態で表す要素へ具体化したものである。さらに古いGUI widget等からplaceholderへの採用経路は未確認である。
- [`<q>`](elements/q.md): HTML+とHTML 3.0に同名のinline short quotationがあり、HTML 3.0全体がHTML+に基づくことは確認できるが、`Q`個別の採用記録はない。1995年8月の最初の国際化草案はlanguage-sensitiveなquotation renderingのため`Q`を導入すると明記する。
- [`<rp>`](elements/rp.md): ruby非対応user agent向けの括弧を表す要素としてW3Cが提案・規範化し、既存Web上の`rp`を含む単純なruby markupとの互換性を保つため、2008年に`ruby`、`rt`とともにHTML5へ追加された。
- [`<rt>`](elements/rt.md): W3Cのruby語彙でannotation textを表す要素として提案・規範化され、既存Web上の`rt`を含む単純なruby markupとの互換性を保つため、2008年に`ruby`、`rp`とともにHTML5へ追加された。
- [`<ruby>`](elements/ruby.md): W3C Internationalization Working GroupがHTML拡張として提案した語彙とIE実装が既に存在する中、既存Web上のruby markupを保つため2008年に`rt`、`rp`とともにHTML5へ追加された。W3C語彙からHTML5への直接採用記録は未確認である。
- [`<s>`](elements/s.md): HTML+とHTML 3.0にpresentational strike-throughの`S`が存在し、HTML 3.2で欠落した後、HTML 4がdeprecatedな`S`を採録した。HTML5では一度obsoleteとされたが、2010年のW3C bugで再採録が提案され、現行の「もはや正確でない、または関係しない」という意味を定めて`S`が再導入された。
- [`<samp>`](elements/samp.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@samp`との対応を確認できる。
- [`<script>`](elements/script.md): Netscapeが定義しNavigator 2.0 betaへ実装した`SCRIPT`を、W3CのHTML3 Scripting草案がformalizeした要素である。HTML 3.2では将来のclient-side scripting用placeholderとして収録され、HTML 4で本格的に規定された。
- [`<search>`](elements/search.md): WAI-ARIA `search` landmarkと`div role="search"`をnative HTMLで表すためWHATWGが採用し、2023年にLiving Standardへ入れたcontainerである。
- [`<section>`](elements/section.md): 遅くとも2004年8月にはWHATWG Web Applications 1.0で定義され、見出しだけでは文書構造とoutlineを確実に復元できない問題へのsectioning modelを担った。2004年11月に編集者は、既存の`div class="section"`を`section`へ置換できることを設計要求として明記した。
- [`<select>`](elements/select.md): HTML+ formsからHTML 2.0へ導出されたcompact selection listである。
- [`<selectedcontent>`](elements/selectedcontent.md): customizable `select`で選択中の`option`内容を宣言的に表示するOpen UI／WHATWGの`selectedoption`案を、名称の曖昧さから`selectedcontent`へ改名し、2025年にHTMLへ統合した要素である。
- [`<slot>`](elements/slot.md): Shadow DOM v0の`content` insertion pointをslotsとして再設計し、DOMのslot概念を参照するHTML要素として2016年に導入された。
- [`<small>`](elements/small.md): HTML 3.0草案でsmall printを小さいfontで表示する新要素として確認でき、HTML 3.2以降へ継承された。WHATWGは2005年4月に、legacy browserとの互換性から名称を維持しつつ、legal restrictions等のsmall printまたはside commentsという表示非依存の意味へ再定義した。HTML 3.0への最初の導入経路は未確認である。
- [`<source>`](elements/source.md): `source`は2007年3月23日、`video`でcodec negotiationを行い複数の代替media resourceから選択する要素としてWHATWGへ追加された。2014年には`picture`内の画像候補にも拡張された。
- [`<span>`](elements/span.md): 1995年9月のIETF HTML国際化草案が`LANG`／`DIR`を置く適切な要素がないinline textのために導入したgeneric containerである。同年12月にはstyle草案の新`C`要素を廃して既存`SPAN`をstyle用途にも再利用する提案があり、国際化とstyleの要求を合流させてRFC 2070とHTML 4へ至った。
- [`<strong>`](elements/strong.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@strong`との対応を確認できる。
- [`<style>`](elements/style.md): 確認できる最初の`STYLE`は1995年4月25日のHTML 3.0草案にあり、文書内のstyle overridesを`HEAD`へ置く。11月22日のIETF HTML WG草案は既存`LINK`による外部sheetと新しい`STYLE`による文書内rulesの設計理由を説明するが、4月のHTML 3.0案からこの草案への個別採用経路は確認できない。
- [`<sub>`](elements/sub.md): HTML+のDTDが一般テキストでも許可した`SUB`をHTML 3.0へ引き継ぐ設計意図を、Dave Raggettの同時代メールで確認できる。別枝の1995年国際化草案は一般組版上の要求から`SUB`を導入し、RFC 2070へ至る。
- [`<summary>`](elements/summary.md): `summary`は2010年、`details`のcaptionを`legend`または`dt`／`dd`で表す方式を専用要素へ置換して導入された。
- [`<sup>`](elements/sup.md): HTML+のDTDが一般テキストでも許可した`SUP`をHTML 3.0へ引き継ぐ設計意図を、Dave Raggettの同時代メールで確認できる。別枝の1995年国際化草案は一般組版上の要求から`SUP`を導入し、RFC 2070へ至る。
- [`<svg>`](elements/svg.md): SVG 1.0で定義済みのSVG名前空間のrootを、2008年にHTML parserへ統合し、一度削除した後、feedbackを受けて2009年に再導入したものである。
- [`<table>`](elements/table.md): HTML+の単純table modelからRFC 1942を経て標準化されたtable containerである。
- [`<tbody>`](elements/tbody.md): 表のdata rowsを一つ以上のbody sectionへまとめる要素である。CALS table modelの同名`TBODY`要素を1995年4月のRaggett proposalがHTMLへ取り込み、7月のIETF table草案、RFC 1942を経てHTML 4.0が標準化した。
- [`<td>`](elements/td.md): HTML+ table modelのdata cellからRFC 1942を経て標準化された要素である。
- [`<template>`](elements/template.md): dynamic pageが利用前のHTML fragmentを保持する要求に対し、inert DOM subtreeを宣言して複製できる仕組みとして2011年にWHATWGへ提案された。Web Components／HTML Templates作業を経て、2013年にWHATWG HTMLへ統合された。
- [`<textarea>`](elements/textarea.md): 長いmulti-line値を`INPUT`属性へ置くSGML上の問題からHTML+で分離され、HTML 2.0へ採録された要素である。
- [`<tfoot>`](elements/tfoot.md): 表のcolumn summariesを含むfooter rowsをまとめる要素である。CALS table modelの同名`TFOOT`要素を1995年4月のRaggett proposalがHTMLへ取り込み、7月のIETF table草案、RFC 1942を経てHTML 4.0が標準化した。
- [`<th>`](elements/th.md): HTML+ table modelのheader cellからRFC 1942を経て標準化された要素である。
- [`<thead>`](elements/thead.md): 表のheader rowsをまとめる要素である。CALS table modelの同名`THEAD`要素を1995年4月のRaggett proposalがHTMLへ取り込み、7月のIETF table草案、RFC 1942を経てHTML 4.0が標準化した。
- [`<time>`](elements/time.md): WHATWG草案の`<t>`を2006年に`<time>`へ改名した要素である。2011年に一度`data`へ置換された後、約3週間後に再導入され、現行のmachine-readableな日付・時刻・durationの設計へ続く。
- [`<title>`](elements/title.md): 1991年10月のTim Berners-Leeのmailで、nodeを文脈外で識別しwindow nameやhistory listに使うため設計された要素として確認できる。具体的な直前祖先は確認できない。
- [`<tr>`](elements/tr.md): HTML+作業中にrow separatorからrow containerへ変化し、RFC 1942を経て標準化された要素である。
- [`<track>`](elements/track.md): `track`は2010年、media elementへ外部字幕、caption、description、chapter、metadataを関連づけるtimed track機構として導入された。編集者はSilvia Pfeifferの`itext`提案が「現在の`track`とほぼ同じ」と説明し、採用・改名した属性と見送った機能を項目別に記録している。
- [`<u>`](elements/u.md): 1993年HTML draftは集合としてTexinfo由来と述べるが、underline用の対応マクロを同時代Texinfoで確認できない。HTML 2.0での不採録後、HTML 3.2で再出現した個別理由は未確認である。W3C HTML5でnonconformingだった`U`をconformingにする2011年のHTML WG決定は確認できるが、現行Living Standardまでの編集経路は未確認である。
- [`<ul>`](elements/ul.md): 1990年12月のWorldWideWeb test fileは、CERN-SGML tagsetから一部をHTMLへ含めたと明記し、`UL`と`LI`をaccepted tag集合の実例として使う。個々のtagの対応は明記されないため、CERN-SGMLからの採録は集合単位で確認できる。
- [`<var>`](elements/var.md): 1993年HTML draftがTexinfo macro names由来と明記したlogical character highlighting要素で、同時代Texinfoの`@var`との対応を確認できる。
- [`<video>`](elements/video.md): `video`は2007年、Operaの実験実装と提案を受けてWHATWGへ導入された。video固有のsemantics、timed mediaの共通API、fallbackを汎用`object`やpluginに依存せず提供することが目的だった。
- [`<wbr>`](elements/wbr.md): Netscape Navigator 1.1の独自要素として記録された任意改行機会であり、遅くとも1995年4月25日にはHTML標準化議論でNetscapeの提案として認識されていた。導入要求は確認できるが、HTML5への再採録経路とHTML以前の具体的祖先は未確認である。

## 共有系譜

- [現行HTML要素の横断系譜](lineages/README.md): 確認済みの共有系統を一覧化し、個別採用を確認できない境界をまとめる。
- [CALSとHTMLの表構造要素](lineages/cals-tables.md): CALSのrow groupsと表のimport要求から、IETF table草案、RFC 1942、HTML 4へ至る表構造の経路をまとめる。
- [CERN-SGMLから初期HTML list群への共有系譜](lineages/cern-sgml-lists.md): CERN-SGML tagsetから初期HTMLのlist六要素を含む集合への採録と、個別対応を確認できない制約をまとめる。
- [IETF HTML国際化草案の共有系譜](lineages/html-internationalization.md): IETF国際化草案から`q`、`sub`、`sup`、`span`、`bdo`へ至る経路と、style要件が`span`へ合流した経路をまとめる。
- [HTML+から現行HTML要素への共有系譜](lineages/html-plus.md): HTML+からdocument amendments、forms、tables、figures、client-side image mapsの各要素群へ至る共有経路をまとめる。
- [HTML phrase elementsとTexinfo](lineages/texinfo.md): Texinfo macro namesからHTML phrase要素集合への命名経路と、`u`など個別対応を確認できない境界をまとめる。
- [初期WHATWG sectioning語彙の共有系譜](lineages/whatwg-sectioning.md): 典型的siteのmarkupと`div`のpseudo-semantic用途から初期WHATWG semantic element集合へ至る要求と、個別に確認できる枝をまとめる。
