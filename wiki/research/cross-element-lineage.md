# 現行HTML要素の横断系譜

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。17系統と5境界を独立検証済み。

## 範囲

このページは、2026-08-09に敵対的レビューを通過した個別ページのうち、複数の現行要素が共有する上流、要求、または標準化経路を統合する。個別ページの証拠表を正本とし、集合レベルの関係はその旨を注記する。名称・用途・外見の類似、未確認の改名・再採録・統合は矢印で補わない。

この表は網羅的な全関係一覧ではなく、共通祖先からの採用、複数要素を一体として導入した要求、または現行要素間の直接変更を一次資料で確認できる代表的な系統を収録する。同じ仕様に共存するだけの要素、単一要素だけで完結する系譜、機能上の対比だけの関係は個別ページへ委ねる。

## 確認済みの共有系統

| 共通の上流または要求 | 確認済みの経路 | 現行要素 | 制約 | 主な一次資料 |
|---|---|---|---|---|
| AAP tag setのheading語彙 | AAP headings → CERN SGML guide → 初期HTML | [`h1`〜`h6`](../elements/hx.md) | AAP BK-1は5 identifiers、HTMLは6段階であり、個別番号対応ではなく集合単位の関係である。 | [AAP DTD調査](aap-heading-dtd.md) / [CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) |
| GNU Texinfo macro names | ［集合単位］Texinfo macro names → 1993年HTML draftのcharacter highlighting集合。対応macroを確認できた十要素は個別枝を持つ。 | [`b`](../elements/b.md)、[`i`](../elements/i.md)、[`em`](../elements/em.md)、[`strong`](../elements/strong.md)、[`code`](../elements/code.md)、[`samp`](../elements/samp.md)、[`kbd`](../elements/kbd.md)、[`var`](../elements/var.md)、[`dfn`](../elements/dfn.md)、[`cite`](../elements/cite.md)、[`u`](../elements/u.md) | `u`の対応macroは未確認。`dfn`と`u`は1993年草案から現行要素までの再採録経路にも欠落がある。 | [1993年IETF草案](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)、[GNU Texinfo 2.16](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) |
| HTML+ forms | HTML+ forms → HTML 2.0 forms → 後続HTML | [`form`](../elements/form.md)、[`input`](../elements/input.md)、[`select`](../elements/select.md)、[`option`](../elements/option.md)、[`textarea`](../elements/textarea.md) | RFC 1866がforms materialのHTML+由来を集合として明記する。 | [HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)、[RFC 1866](https://www.rfc-editor.org/rfc/rfc1866.html) |
| HTML+の単純table model | HTML+ table work＋initial HTML 3 draft → RFC 1942 → HTML 3.2 → 後続HTML | [`table`](../elements/table.md)、[`caption`](../elements/caption.md)、[`tr`](../elements/tr.md)、[`th`](../elements/th.md)、[`td`](../elements/td.md) | `tr`はHTML+作業中にrow separatorからrow containerへ変わった。CALS由来の後続拡張と混同しない。 | [HTML+ tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)、[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)、[HTML 3.2](https://www.w3.org/TR/REC-html32#table) |
| CALSのhead／body／foot row grouping | ［集合単位］CALS grouping → 1995年IETF table草案 → RFC 1942 → HTML 4 | [`thead`](../elements/thead.md)、[`tbody`](../elements/tbody.md)、[`tfoot`](../elements/tfoot.md) | CALS側の個別要素名は未確認。 | [IETF table draft-00](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)、[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) |
| IETF table draftのcolumn grouping | 旧`COL` groupingの同一幅制約 → new `COLGROUP` container | [`col`](../elements/col.md)、[`colgroup`](../elements/colgroup.md) | CALSから`COLGROUP`を個別採用したとはしない。HTML 4への個別採録判断は未確認。 | [draft-02](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt)、[draft-03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) |
| HTML+からHTML 3へのphrase作業とIETF国際化要求 | ［集合単位］HTML+ → HTML 3.0。別枝として国際化草案`Q`／`SUB`／`SUP` → RFC 2070、`SUB`／`SUP` → HTML 3.2 → 後続HTML。 | [`q`](../elements/q.md)、[`sub`](../elements/sub.md)、[`sup`](../elements/sup.md) | HTML+から各要素への個別採用は未確認。`Q`はHTML 3.2になく、RFC 2070 `Q`からHTML 4 `Q`への個別採用も未確認のため、HTML 4 `Q` → 現行`q`は分離する。 | [HTML+ `Q`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)、[HTML+ `SUB`／`SUP`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)、[IETF i18n draft-01](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)、[RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html)、[HTML 3.2](https://www.w3.org/TR/REC-html32) |
| Unicode bidirectional mechanism | Unicode embedding＋`LANG`／`DIR` container要求 → IETF `SPAN` → RFC 2070 `SPAN`。Unicode override → IETF `BDO` → RFC 2070 `BDO`。両枝 → HTML 4。 | [`span`](../elements/span.md)、[`bdo`](../elements/bdo.md) | `span`にはstyle草案の`C`を廃して既存`SPAN`を再利用した別枝も合流する。 | [IETF i18n draft-01](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)、[RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html)、[style提案](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)、[W3C style草案](https://www.w3.org/TR/WD-style-960115) |
| HTML+ client-side image map案 | HTML+ `FIG` mapping → `MAP`／`AREA`提案 → RFC 1980 → HTML 3.2 | [`map`](../elements/map.md)、[`area`](../elements/area.md) | `map` containerと`area` regionの要素単位の経路を確認済み。 | [HTML+ Active Areas](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html)、[Seidman案](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)、[RFC 1980](https://www.rfc-editor.org/rfc/rfc1980.html) |
| XHTML Role／WAI-ARIA landmarkと既存ARIA markup | role → `<div role=...>` → native HTML要素提案 | [`main`](../elements/main.md)、[`search`](../elements/search.md) | 現在のARIA mappingからの逆算ではなく、各導入提案が置換関係を明記する。 | [XHTML Role](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/)、[`main`提案](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)、[`search` issue](https://github.com/whatwg/html/issues/5811)、[`search` PR](https://github.com/whatwg/html/pull/7320) |
| grouped form controlsとcaption要求 | 関連controlsをgroup化する要求 → HTML 4 `FIELDSET`＋caption `LEGEND` | [`fieldset`](../elements/fieldset.md)、[`legend`](../elements/legend.md) | speech browserでgroup contextを伝える要求は確認できるが、具体的なGUIまたは他markup語彙の祖先は未確認。 | [HTML 4.0 FPWD forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)、[HTML 4.0 changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) |
| W3C Ruby vocabularyと既存Web利用 | W3C Ruby案 → XHTML Ruby。別枝としてIE実装・既存Web利用 → ［集合単位］HTML5 `ruby`／`rt`／`rp`。 | [`ruby`](../elements/ruby.md)、[`rt`](../elements/rt.md)、[`rp`](../elements/rp.md) | W3C／XHTML枝からHTML5への直接採用は未確認。HTML5 commitは三要素の同時追加と既存Web利用を示す。 | [W3C Ruby案](https://www.w3.org/TR/1998/WD-ruby-19981221/)、[XHTML Ruby](https://www.w3.org/TR/2001/REC-ruby-20010531/)、[WHATWG commit](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9) |
| 既存XML vocabularyのforeign root | MathML／SVG root → `text/html` parser統合 | [`math`](../elements/math.md)、[`svg`](../elements/svg.md) | 新しいHTML名前空間要素ではない。`svg`は2008年の削除と2009年の再導入を含む。 | [MathML 1.0](https://www.w3.org/TR/1998/REC-MathML-19980407/)、[SVG 1.0](https://www.w3.org/TR/2001/REC-SVG-20010904/)、[parser統合commit](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)、[`svg`再導入commit](https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465) |
| disclosure widgetと`details` caption構造 | GUI disclosure慣習＋`fieldset`／`legend` → `details`。caption構造の置換 → `summary`。 | [`details`](../elements/details.md)、[`summary`](../elements/summary.md) | GUI慣習からの因果は`details`導入資料が明記し、`summary`は後続の内部置換である。 | [`details`導入commit](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)、[`summary`導入commit](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f) |
| HTML5 `figure`のcaption構造 | `figure`＋`legend` → `dt`／`dd` → `figcaption` | [`figure`](../elements/figure.md)、[`figcaption`](../elements/figcaption.md) | HTML+ `FIG`／`CAPTION`との採用因果は未確認。 | [`figure`導入commit](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)、[`figcaption`導入commit](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f) |
| WHATWG共通media model | Opera実験`video` → WHATWG `video`。別枝として単一`src`版`video` → media用`source`、共通media model → `audio`、media elementのtimed track要求 → `track`。 | [`video`](../elements/video.md)、[`audio`](../elements/audio.md)、[`source`](../elements/source.md)、[`track`](../elements/track.md) | Opera実験を`audio`、`source`、`track`のHTML外祖先とはしない。三要素は共有標準化経路のみを示し、具体的なHTML外祖先は未確認。 | [Opera `video`提案](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)、[`video` commit](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)、[`source` commit](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)、[`audio` commit](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)、[`track` commit](https://github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31) |
| responsive imagesと`source`拡張 | RICG `picture`提案／Picturefill → HTML `picture`仕様 → WHATWG統合＋既存`source`の画像用途拡張 | [`picture`](../elements/picture.md)、[`source`](../elements/source.md) | media用`source`から`picture`自体が派生したとはしない。 | [Picturefill](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)、[HTML `picture` FPWD](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)、[WHATWG統合commit](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204) |

## 接続しない境界

- HTML+／HTML 3.0の`ABBREV`とHTML 4の[`abbr`](../elements/abbr.md)は、改名・採用因果を確認できないため接続しない。[HTML+ `ABBREV`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)
- HTML+／HTML 3.0の`S`とHTML 4以降の[`s`](../elements/s.md)は、HTML 3.2での欠落後に再採録した因果を確認できないため接続しない。[HTML+ `S`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html) [HTML 3.2](https://www.w3.org/TR/REC-html32) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)
- Apple WebKitの`CANVAS`実装とWHATWGの[`canvas`](../elements/canvas.md)は、提案・採録の直接記録を確認できないため時系列上の候補として分離する。[WebKit timeline](https://trac.webkit.org/timeline?authors=&daysback=4&from=2004-05-30) [Ian Hickson, “Canvas tag”](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/043985.html)
- CSS isolation／W3C `ubi`案から[`bdi`](../elements/bdi.md)への採用は確認できるが、override用の[`bdo`](../elements/bdo.md)から派生したとは接続しない。[W3C Bug 10807](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807) [W3C bidi requirements](https://www.w3.org/TR/html-bidi/#bidi-isolation)
- 個別ページで競合候補として確認したWaterloo SCRIPT GMLの同名要素は、heading群を除き名称一致だけで初期HTMLへ接続しない。

前三項はそれぞれ比較した一次資料を個別ページに置く。Waterloo境界の比較資料は[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)と[CERN *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)である。

## 敵対的レビュー

2026-08-09の独立レビューでは全16行と境界5項目を、個別ページ、横断ノート、ローカルraw、公開一次資料へ戻って検証した。16行中9行を維持し7行を訂正対象と判定した。詳細は[横断系譜に対する敵対的レビュー](cross-element-lineage-adversarial-review.md)を参照する。

反証により、`q`と`sub`／`sup`の版経路、media枝、Texinfo集合、Ruby枝、単独要素行、直接出典、共有系統の高優先度漏れを訂正した。また、`template`の未確認境界は2013年の明示的なWHATWG merge記録により撤回した。

訂正後の別レビュー（2026-08-09）では、17行すべてが複数の現行要素を含むこと、各行に直接一次資料があること、個別ページで切られた接続を越えていないこと、5境界と相対リンクが整合することを確認した。

AAP DTD追加後の別レビュー（2026-08-09）では、heading行をAAP BK-1、CERN資料、`h1`〜`h6`の記述へ再照合した。AAP側の5 identifiersとHTML側の6段階を個別対応させず、集合単位の経路と制約が整合することを確認した。

## 調査記録

全115要素の`系譜`、`証拠`、`確度`、2026-08-09の敵対的レビュー記録を照合した。複数要素へ共有できる関係だけを抽出し、要素ページで切られている接続はこのページでも切った。横断反証の詳細は[歴史的結論の敵対的レビュー](adversarial-review.md)と[横断系譜に対する敵対的レビュー](cross-element-lineage-adversarial-review.md)を参照する。
