# 現行HTML要素の固定一覧（2026-08-09）

## 結論

2026年8月9日時点のWHATWG HTML Living Standardから確定できる組み込みHTML namespace要素は113件である。このWikiでは、HTML構文中で適合する名前付きforeign rootsの`math`と`svg`も個別ページの対象とし、固定一覧を115件とする。

autonomous custom elementsは仕様の適合要素索引にカテゴリとして掲載されるが、要素名が著者定義の開集合なので固定一覧には数えない。obsolete/non-conforming要素も含めない。

## 抽出基準

1. [WHATWG HTML Living StandardのElements index](https://html.spec.whatwg.org/multipage/indices.html#elements-3)を母集合とした。この索引を含む章は「以下の節ではconformingな要素と機能のみを扱う」と明記している。索引自体はnon-normativeだが、現行仕様が提供する適合要素の公式索引として使い、各行からnormativeな要素定義へ遡れることを確認した。
2. 調査日の2026年8月9日に取得した仕様表紙は「Living Standard — Last Updated 20 July 2026」と表示していた。[仕様表紙](https://html.spec.whatwg.org/)
3. 索引の`h1, h2, h3, h4, h5, h6`は6個の固定要素名へ展開した。
4. 索引の`MathML math`と`SVG svg`はHTML namespace要素とは別集計にした。[HTML syntaxの定義](https://html.spec.whatwg.org/multipage/syntax.html#elements-2)は、foreign elementsをMathML namespaceまたはSVG namespaceの要素と定義する。
5. [Non-conforming features](https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features)で「entirely obsolete, and must not be used by authors」とされる要素は除外した。
6. `search`と`selectedcontent`は現行索引に掲載され、normativeな要素定義も存在するため含めた。実装状況を示す外部サイト上の「experimental」等の表示は、Living Standard上のconformance集合を変更する根拠には使わない。

## 集計

| 区分 | 件数 | Wikiの固定一覧 |
|---|---:|---|
| 組み込みHTML namespace要素 | 113 | 含める |
| 名前付きforeign roots（`math`, `svg`） | 2 | 含める |
| autonomous custom elementsカテゴリ | 1カテゴリ、名前数は開集合 | 含めない |
| obsolete/non-conforming要素 | 29 | 含めない |
| 合計 | 115 | 個別ページ対象 |

## 固定要素一覧

以下のリンクは、各要素について索引が指す一次仕様の定義である。`math`と`svg`の定義先は、WHATWG索引が参照するMathML CoreおよびSVG 2の一次仕様である。

- A: [`a`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element), [`abbr`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element), [`address`](https://html.spec.whatwg.org/multipage/sections.html#the-address-element), [`area`](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element), [`article`](https://html.spec.whatwg.org/multipage/sections.html#the-article-element), [`aside`](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element), [`audio`](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)
- B: [`b`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element), [`base`](https://html.spec.whatwg.org/multipage/semantics.html#the-base-element), [`bdi`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element), [`bdo`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element), [`blockquote`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element), [`body`](https://html.spec.whatwg.org/multipage/sections.html#the-body-element), [`br`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element), [`button`](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)
- C: [`canvas`](https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element), [`caption`](https://html.spec.whatwg.org/multipage/tables.html#the-caption-element), [`cite`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element), [`code`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element), [`col`](https://html.spec.whatwg.org/multipage/tables.html#the-col-element), [`colgroup`](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element)
- D: [`data`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element), [`datalist`](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element), [`dd`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element), [`del`](https://html.spec.whatwg.org/multipage/edits.html#the-del-element), [`details`](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element), [`dfn`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element), [`dialog`](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element), [`div`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element), [`dl`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element), [`dt`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element)
- E: [`em`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element), [`embed`](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element)
- F: [`fieldset`](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element), [`figcaption`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element), [`figure`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element), [`footer`](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element), [`form`](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)
- H: [`h1`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [`h2`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [`h3`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [`h4`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [`h5`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [`h6`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [`head`](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element), [`header`](https://html.spec.whatwg.org/multipage/sections.html#the-header-element), [`hgroup`](https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element), [`hr`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element), [`html`](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)
- I: [`i`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element), [`iframe`](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element), [`img`](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element), [`input`](https://html.spec.whatwg.org/multipage/input.html#the-input-element), [`ins`](https://html.spec.whatwg.org/multipage/edits.html#the-ins-element)
- K: [`kbd`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element)
- L: [`label`](https://html.spec.whatwg.org/multipage/forms.html#the-label-element), [`legend`](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element), [`li`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element), [`link`](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)
- M: [`main`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element), [`map`](https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element), [`mark`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element), [`math`](https://w3c.github.io/mathml-core/#the-top-level-math-element), [`menu`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element), [`meta`](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element), [`meter`](https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element)
- N: [`nav`](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element), [`noscript`](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element)
- O: [`object`](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element), [`ol`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element), [`optgroup`](https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element), [`option`](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element), [`output`](https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element)
- P: [`p`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element), [`picture`](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element), [`pre`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element), [`progress`](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element)
- Q: [`q`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element)
- R: [`rp`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element), [`rt`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element), [`ruby`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element)
- S: [`s`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element), [`samp`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element), [`script`](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element), [`search`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element), [`section`](https://html.spec.whatwg.org/multipage/sections.html#the-section-element), [`select`](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element), [`selectedcontent`](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element), [`slot`](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element), [`small`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element), [`source`](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element), [`span`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element), [`strong`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element), [`style`](https://html.spec.whatwg.org/multipage/semantics.html#the-style-element), [`sub`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements), [`summary`](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element), [`sup`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements), [`svg`](https://w3c.github.io/svgwg/svg2-draft/struct.html#elementdef-svg)
- T: [`table`](https://html.spec.whatwg.org/multipage/tables.html#the-table-element), [`tbody`](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element), [`td`](https://html.spec.whatwg.org/multipage/tables.html#the-td-element), [`template`](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element), [`textarea`](https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element), [`tfoot`](https://html.spec.whatwg.org/multipage/tables.html#the-tfoot-element), [`th`](https://html.spec.whatwg.org/multipage/tables.html#the-th-element), [`thead`](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element), [`time`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element), [`title`](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element), [`tr`](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element), [`track`](https://html.spec.whatwg.org/multipage/media.html#the-track-element)
- U: [`u`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element), [`ul`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- V: [`var`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-var-element), [`video`](https://html.spec.whatwg.org/multipage/media.html#the-video-element)
- W: [`wbr`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element)

### 機械可読一覧（115件、JSON）

```json
["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","selectedcontent","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]
```

## 除外したobsolete/non-conforming要素

[WHATWGのNon-conforming features](https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features)が列挙する次の29件を除外した。

```text
applet acronym bgsound dir frame frameset noframes isindex keygen listing menuitem nextid noembed param plaintext rb rtc strike xmp basefont big blink center font marquee multicol nobr spacer tt
```

`Obsolete but conforming features`節が列挙するのは、この調査時点では現行要素の一部属性・属性値に対する警告であり、固定要素一覧からさらに除外する要素名はない。[Obsolete but conforming features](https://html.spec.whatwg.org/multipage/obsolete.html#obsolete-but-conforming-features)

## 曖昧点と判断

### `math`と`svg`

公式Elements indexは`MathML math`と`SVG svg`をconformingな項目として載せる一方、HTML構文仕様は両者をforeign elementsと定義する。このため「組み込みHTML namespace要素数」は113、「このWikiが個別ページ化する現行の固定名」は115と明示的に呼び分ける。HTML文書中で使える全MathML/SVG子要素をHTML要素一覧へ展開することはしない。

### Custom elements

公式索引の`autonomous custom elements`は固定local nameではない。[Custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-core-concepts)では著者が要素を定義でき、autonomous custom elementsとcustomized built-in elementsを区別する。前者の名前集合は開いており、後者は既存の組み込み要素local nameを使うため、いずれも固定ページ一覧へ新しい名前を追加しない。必要なら個別要素ページではなく横断ページで扱う。

### `search`と`selectedcontent`

`search`は[独立したnormative要素定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)を持ち、公式索引にも掲載される。`selectedcontent`も[独立したnormative要素定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)を持ち、公式索引にも掲載される。したがって両方を固定一覧に含める。

Living Standardは更新され続けるため、この一覧は2026年8月9日の調査スナップショットである。個別ページ生成後に要素が追加・削除された場合は、公式索引との差分を再確認する必要がある。

## 一次資料

| 主張 | 一次資料 |
|---|---|
| conforming要素の母集合と各要素定義へのリンク | [WHATWG HTML — Index of elements](https://html.spec.whatwg.org/multipage/indices.html#elements-3) |
| 取得時のLiving Standard更新日 | [WHATWG HTML — Living Standard](https://html.spec.whatwg.org/) |
| HTML要素とforeign elementsのnamespace上の区別 | [WHATWG HTML — The HTML syntax: Elements](https://html.spec.whatwg.org/multipage/syntax.html#elements-2) |
| obsolete/non-conforming要素の除外 | [WHATWG HTML — Non-conforming features](https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features) |
| obsoleteだがconformingな機能の扱い | [WHATWG HTML — Obsolete but conforming features](https://html.spec.whatwg.org/multipage/obsolete.html#obsolete-but-conforming-features) |
| custom elementsを固定名一覧へ含めない判断 | [WHATWG HTML — Custom elements: Core concepts](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-core-concepts) |
| `search`の現行要素定義 | [WHATWG HTML — The search element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element) |
| `selectedcontent`の現行要素定義 | [WHATWG HTML — The selectedcontent element](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element) |
| `math`の定義 | [MathML Core — The top-level math element](https://w3c.github.io/mathml-core/#the-top-level-math-element) |
| `svg`の定義 | [SVG 2 — The svg element](https://w3c.github.io/svgwg/svg2-draft/struct.html#elementdef-svg) |
