# 現行HTML要素の横断系譜に対する敵対的レビュー

## 結論

2026-08-09に[`cross-element-lineage.md`](cross-element-lineage.md)の16行と「接続しない境界」5項目を、対応する個別ページ、横断調査ノート、ローカルraw資料、公開一次資料へ戻って独立に検証した。9行は現状のまま維持できるが、7行は修正が必要である。また境界5項目のうち`template`の境界は反証され、Waterloo／GMLの境界は範囲を限定する必要がある。この状態では横断系譜ページ自体を敵対的レビュー合格とは判定しない。

最も重大な問題は、`q`をHTML 3.2経路へ含むように読める版経路の混同、Opera `video`から`source`までを一本の矢印にした個別因果の過剰化、単一要素しかない`bdi`と`slot`を「複数の現行要素が共有する系統」へ収録した範囲違反、そして`template`についてWHATWGへの統合記録がないとした境界が一次資料で反証される点である。

横断系譜ページの各歴史的主張は個別ページへの相対リンクしか持たず、一次資料URLを同じ行に置いていない。個別ページを証拠の正本とする方針は参照先の選択として妥当だが、作業規約の「歴史的な各主張には、それを直接支える出典を同じ段落または証拠表の同じ行に置く」を満たさない。修正時は本レビュー表のように各行へ直接一次資料を付ける必要がある。

## 判定基準

- **維持**: 個別ページの系譜より強くなく、集合レベルと個別因果を区別し、対象要素、日付、主体、用語が一次資料と整合する。
- **限定修正**: 系譜の核は維持できるが、版の分岐、欠落区間、対象範囲、または用語を明示する必要がある。
- **要修正**: 現在の矢印または境界が個別ページより強い、対象範囲に反する、または一次資料に反証される。

## 「確認済みの共有系統」全行の検証

| # | 行 | 判定 | 敵対的確認と修正提案 | 一次資料 |
|---|---|---|---|---|
| 1 | AAP tag setのheading語彙 | 維持 | CERN資料自身が6段階のheading tagsをCERN SGML guideから保持し、そのheading definitionsをAAP tag set由来と説明する。六要素の個別ページと同じ集合単位の矢印であり、Waterloo SCRIPT GMLは同名の先行例にとどめている。 | [CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) |
| 2 | GNU Texinfo macro names | 限定修正 | 1993年草案は列挙したcharacter highlighting要素名をTexinfo macro names由来と明記し、`b`、`i`、`em`、`strong`、`code`、`samp`、`kbd`、`var`、`dfn`、`cite`の対応マクロも同時代Texinfoで確認できる。ただし`dfn`個別ページは1993年草案から現行要素までの途中の再採録経路を未確認としているため、「→ 後続HTML」を全十要素へ一律に適用すると個別ページより強い。さらに`u`は個別対応マクロが未確認でも、草案がTexinfo由来とする同じ列挙集合に含まれるため、集合レベルの現行要素としては漏れている。経路を「[集合単位] Texinfo macro names → 1993年draftのcharacter highlighting集合」に止めて`u`をA−相当の制約付きで含め、対応マクロを確認できた十要素だけ個別枝に分ける。`dfn`には現行までの再採録欠落も注記する。 | [IETF `draft-ietf-iiir-html-00`](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)、[GNU Texinfo 2.16配布物](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) |
| 3 | HTML+ forms | 維持 | RFC 1866はRaggettがforms materialをHTML+から導出したと集合単位で明記し、同RFCに5要素すべてがある。制約欄が集合単位であることを明示しており、個別のGUI widget祖先まで主張していない。 | [HTML+ forms](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)、[RFC 1866 §§8, 12](https://www.rfc-editor.org/rfc/rfc1866.html) |
| 4 | HTML+の単純table model | 限定修正 | RFC 1942はmodelがearly HTML+ workとinitial HTML3 draftから発展したとし、HTML 3.2はRFC 1942のwidely deployed subsetを採録する。現在の「HTML 3／RFC 1942」という斜線表記は、HTML 3とRFC 1942が同じ版または直列の一段であるかのように曖昧である。「HTML+ table work＋initial HTML 3 draft → RFC 1942 → HTML 3.2」と書き換える。`TR`のseparatorからcontainerへの変更と、CALS拡張との分離は維持できる。 | [HTML+ tables](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_39.html)、[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)、[HTML 3.2 tables](https://www.w3.org/TR/REC-html32#table) |
| 5 | CALSのhead／body／foot row grouping | 維持 | 1995年7月7日のIETF table草案ですでに`THEAD`、`TBODY`、`TFOOT`が存在し、RFC 1942はhead/body/foot section groupingをCALS modelの影響として集合単位で説明する。CALS側の個別要素名へ接続せずA−相当へ限定しているため、三個別ページより強くない。 | [`draft-ietf-html-tables-00`](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)、[RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html) |
| 6 | HTML+からHTML 3へのphrase作業とIETF国際化要求 | 要修正 | 現在の「RFC 2070／HTML 3.2・4」は三要素に共通する一本の後続経路として読めるが、HTML 3.2には`SUB`と`SUP`はあり`Q`はない。さらに`q`個別ページはRFC 2070 `Q`からHTML 4 `Q`への個別採用因果も未確認としている。`q`を「1995年国際化草案 `Q` → RFC 2070 `Q`」と「HTML 4 `Q` → 現行`q`」の切れた枝へ分離し、`sub`／`sup`だけを「国際化草案 → RFC 2070／HTML 3.2 → 後続HTML」とする。HTML+からHTML 3への関係は三要素とも集合単位のまま維持できる。 | [HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)、[HTML+ math](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)、[`draft-ietf-html-i18n-01`](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)、[RFC 2070 §4.2](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2)、[HTML 3.2](https://www.w3.org/TR/REC-html32) |
| 7 | Unicode bidirectional mechanism | 維持 | `SPAN`はUnicode directional embeddingと`LANG`／`DIR`保持用container要求、`BDO`はUnicode directional overrideを直接表すため1995年草案へ入った。両者をembedding／overrideの別対応として記し、`SPAN`だけにstyle草案の`C`廃止・再利用枝があると制約しているため、集合と個別を混同していない。 | [`draft-ietf-html-i18n-01`](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)、[RFC 2070 §4.2.4](https://www.rfc-editor.org/rfc/rfc2070.html#section-4.2.4)、[1995年style提案](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)、[W3C style草案](https://www.w3.org/TR/WD-style-960115) |
| 8 | bidi isolation要求 | 要修正（範囲） | `ubi`属性案から`bdi`要素を選んだ因果自体は直接確認でき、`bdo`からの派生でないという境界も正しい。しかし現行要素欄は`bdi`一つだけであり、「複数の現行要素が共有する上流または標準化経路だけ」というページの宣言範囲に反する。この行は表から外し、「`bdi`と`bdo`を接続しない境界」へ移す。 | [W3C Bug 10807](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10807)、[W3C *Additional Requirements for Bidi*](https://www.w3.org/TR/html-bidi/#bidi-isolation) |
| 9 | HTML+ client-side image map案 | 維持 | SeidmanがHTML+の`FIG ISMAP`と`FIG`内`A SHAPE`を先行案として明示的に検討し、`MAP`、`AREA`、`IMG USEMAP`へ組み替えた。`map` containerと`area` regionの両方について要素単位の因果があり、RFC 1980、HTML 3.2への経路も一致する。 | [HTML+ Active Areas](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html)、[Seidman, client-side image maps](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)、[RFC 1980](https://www.rfc-editor.org/rfc/rfc1980.html) |
| 10 | XHTML Role／WAI-ARIA landmarkと既存ARIA markup | 維持 | `main`提案はARIA `main`、`div role=main`、`id`／`class`使用実態を根拠とし、`search`提案はARIA landmarksのうちnative analogueがない`search`を`div role=search`から置換する。両導入提案が置換関係を明記するため、現行ARIA mappingからの逆算ではない。 | [XHTML Role 2006](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/)、[`maincontent`提案](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)、[`main` FPWD](https://www.w3.org/TR/2012/WD-html-main-element-20121217/)、[WHATWG issue #5811](https://github.com/whatwg/html/issues/5811)、[WHATWG PR #7320](https://github.com/whatwg/html/pull/7320) |
| 11 | W3C Ruby vocabularyと既存Web利用 | 限定修正 | W3C Ruby案からXHTML Ruby moduleへの語彙継承と、2008年WHATWG commitが`ruby`、`rt`、`rp`を同時追加して既存Web利用との互換性を採用判断にしたことは確認できる。しかしcommitはW3C Ruby、XHTML Ruby、IEの各系統からHTML5へ採ったとは個別に述べず、現在の一続きの矢印は制約文を読まなければ三系統すべての採用因果を示す。`W3C Ruby案 → XHTML Ruby`を一枝、`IE実装・既存Web利用 → [集合単位] HTML5三要素`を別枝とし、W3C／XHTML枝からHTML5への接続は未確認と明記する。 | [W3C Ruby WD 1998](https://www.w3.org/TR/1998/WD-ruby-19981221/)、[XHTML Ruby 2001](https://www.w3.org/TR/2001/REC-ruby-20010531/)、[WHATWG commit `f4efc736`](https://github.com/whatwg/html/commit/f4efc73617bb37e721828ba03fe3da1642ce40c9) |
| 12 | 既存XML vocabularyのforeign root | 維持 | MathML 1.0の`math` rootとSVG 1.0の`svg` rootを、2008年HTML parser commitが各foreign namespaceのrootとして生成する。`svg`の削除と2009年の再導入も制約欄に残しており、新しいHTML名前空間要素と誤記していない。 | [MathML 1.0](https://www.w3.org/TR/1998/REC-MathML-19980407/)、[SVG 1.0](https://www.w3.org/TR/2001/REC-SVG-20010904/)、[初回parser commit](https://github.com/whatwg/html/commit/1ff9688ab0090e646f69d64e57c814ca44f584b7)、[`svg`再導入commit](https://github.com/whatwg/html/commit/f6a4d7fed33cd6ebcd2f2188302ed00b7aac1465) |
| 13 | Shadow DOM insertion point | 要修正（範囲） | Shadow DOM v0 `content`からslot modelへの再設計、DOM slot概念、HTML `slot`という因果自体は維持できる。しかし現行要素欄は`slot`一つだけで、ページの複数要素要件を満たさない。単一要素の詳細は個別ページに委ね、この行は削除する。`content`からの単純改名ではないという注意が必要なら「接続しない境界」へ短く移す。 | [Shadow DOM 2012](https://www.w3.org/TR/2012/WD-shadow-dom-20120522/)、[WICG issue #92](https://github.com/WICG/webcomponents/issues/92)、[DOM commit `a2b04df5`](https://github.com/whatwg/dom/commit/a2b04df51b4342d7617c128e80e5aa892889d2e0)、[HTML commit `3c157377`](https://github.com/whatwg/html/commit/3c157377135d05fbdd74f8c69199b47408bc6a9a) |
| 14 | disclosure widgetと`details` caption構造 | 維持 | 2006年commitがApple・GNOMEのdisclosure widget資料を参照して`details`を導入し、先頭`legend`、`dt`／`dd`、専用`summary`への置換は仕様commitで追跡できる。GUI慣習は`details`だけの上流、`summary`は内部caption構造の後続要素と区別されている。 | [`details`導入commit](https://github.com/whatwg/html/commit/f98736ae6caf9250ffaed0df557e214f0bf5aebd)、[`summary`導入commit](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f) |
| 15 | HTML5 `figure`のcaption構造 | 維持 | 2006年の`figure`＋`legend`から`dt`／`dd`を経て2010年に`figcaption`へ置換した仕様内経路は直接確認できる。HTML+ `FIG`／`CAPTION`との採用因果を切っており、名称・構造の類似を上流へ広げていない。 | [`figure`導入commit](https://github.com/whatwg/html/commit/32bff0ac1cc9a040ec4d45fdea206b4e9ce09059)、[`figcaption`導入commit](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)、[HTML+ DTD](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html) |
| 16 | Operaのmedia提案とWHATWG media model | 要修正 | Opera実験`video`からWHATWG `video`への採用は直接確認でき、WHATWG `video`の単一`src`から`source`を追加した仕様内経路も直接確認できる。しかし二つを一本にするとOpera実験を`source`の具体的なHTML外祖先とする推移を生み、`source`個別ページのB判定より強い。さらに2014年の同じcommitで`picture`と画像用`source`が統合されたのに`picture`が現行要素欄から漏れ、`audio`が導入時から`video`のmedia modelと`source`を再利用した確認済み経路も「具体的祖先がない」という別問題を理由に除外されている。「Opera実験`video` → WHATWG `video`」と「WHATWG `video`の単一`src` → media用`source`」を別枝にし、別行で「WHATWG共通media model → `video`／`audio`、media用`source`」と「RICG `picture` → HTML統合＋既存`source`の画像用途拡張」を記す。`track`はmedia elementへ追加されたことまでは確認済みなので、具体的祖先ではなく共有標準化経路として含めるか、除外理由を「個別祖先未確認」ではなくページの収録基準に合わせて再説明する。 | [Opera `video`提案](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html)、[編集者の採用説明](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/052433.html)、[`source`追加commit](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)、[`audio`追加commit](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)、[`track`追加commit](https://github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31)、[`picture`統合commit](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204) |

## 「接続しない境界」全項目の検証

### `ABBREV`と`abbr`

**維持。** HTML+とHTML 3.0には`ABBREV`があり、HTML 4変更付録は`ABBR`をHTML 3.2以後のnew elementとするが、改名または採用を結ぶ記録は確認できない。[HTML+ `ABBREV`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)、[HTML 3.0 `ABBREV`](https://www.w3.org/MarkUp/html3/logical.html)、[HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

### HTML+／HTML 3.0の`S`とHTML 4以降の`s`

**維持。** HTML 3.2は`S`でなく`STRIKE`を採録し、HTML 4は`S`をnew elementとして再登場させるが、HTML+／HTML 3.0からの再採録判断を示す資料は確認できない。[HTML+ `S`](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html)、[HTML 3.2](https://www.w3.org/TR/REC-html32)、[HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

### Apple WebKit `CANVAS`とWHATWG `canvas`

**維持。** Appleによる実装とDashboard要求、2004年8月時点で正式提案が未提出だったこと、2005年3月までにWHATWG草案へbitmap canvasが存在したことは確認できるが、今回の再探索でも提案の受領または採録を要素単位で記録した資料は得られなかった。2005年4月のWHATWG議論はAppleで発明された要素がWA1に存在するという同時代認識を示すが、編集者による採用記録ではないため境界を越える証拠にはしない。[WebKit changeset 6693のtimeline](https://trac.webkit.org/timeline?authors=&daysback=4&from=2004-05-30)、[Ian Hickson, “Canvas tag”](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/043985.html)、[WHATWG, “Canvas element” thread](https://lists.w3.org/Archives/Public/public-whatwg-archive/2005Apr/0353.html)、[Apple IP書簡](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/010129.html)

### W3C WebAppsWG HTML Templates草案と現行`template`

**要修正・現在の境界は反証された。** 2011年11月17日にRafael WeinsteinがWHATWG mailing listへinert DOM用`template`要素を提案し、2012年には同じ設計のparser統合がWHATWGとpublic-webappsで議論された。W3C Bug 17930ではIan Hicksonが2013年6月28日に`template`をWHATWG仕様へmergeしたと明記し、統合時の変更点まで列挙している。したがって「WHATWG HTMLへの統合記録を確認できないため接続しない」は誤りであり、境界から削除して、`2011年WHATWG提案／W3C WebAppsWG HTML Templates作業 → 2013年WHATWG HTML merge → 現行template`という確認済み系譜へ訂正すべきである。個別`template`ページの初出、直前祖先、系譜、証拠表、確度、状態も同時訂正が必要である。[Rafael Weinstein, “Declarative Inert DOM”, 2011-11-17](https://lists.w3.org/Archives/Public/public-whatwg-archive/2011Nov/0140.html)、[WHATWG parser議論, 2012-01-18](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-January/076690.html)、[W3C Bug 17930, comment 21](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930)、[HTML Templates FPWD](https://www.w3.org/TR/2013/WD-html-templates-20130214/)

### Waterloo SCRIPT／GML等の同名要素

**限定修正。** 個別ページでWaterloo SCRIPT GMLを競合候補として確認した`a`、`address`、`b`、`blockquote`、`body`、`br`、`cite`、`code`、`col`、`colgroup`、`dd`、`del`、`dfn`、`div`、`dl`、`dt`、`em`、`head`、`html`、`ins`、`li`、`menu`、`noscript`、`ol`、`p`、`q`、`textarea`、`title`、`ul`、`wbr`等について、名称一致だけでWaterlooからHTMLへの採用因果を結ばない判断は妥当である。ただし「GML等」という開いた語は未列挙のあらゆる文書体系について検証済みと読めるため、確認した候補群を列挙するか「個別ページで競合候補として確認したWaterloo SCRIPT GMLの同名要素」に限定する。heading群だけはCERN資料がAAPとCERN SGMLを通る直接経路を明記する。[Waterloo SCRIPT GML User’s Guide保存版](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)、[CERN, *Tags used in HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

## 共有系統の漏れ

次の関係は複数の現行要素を直接結ぶ一次資料が個別ページにあり、現在の収録基準なら追加候補になる。すべてを載せない方針を採る場合は、ページを非網羅的な代表例集と明記し、選定規則を追加する必要がある。

| 優先度 | 追加候補 | 確認済みの関係 | 制約 | 一次資料 |
|---|---|---|---|---|
| 高 | `col`／`colgroup` | revision 02までの`COL` grouping modelの同一幅制約を解くため、revision 03が新container `COLGROUP`を導入した。 | CALSから`COLGROUP`を個別採用したとはしない。HTML 4への個別採録判断は未確認。 | [`draft-ietf-html-tables-02`](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-02.txt)、[`draft-ietf-html-tables-03`](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03.txt) |
| 高 | `fieldset`／`legend` | HTML 4.0 FPWDが関連controlsをgroup化する`FIELDSET`とそのcaption `LEGEND`を一体として導入し、speech browserでgroup contextを伝える要求を説明する。 | 具体的なGUIまたは他markup語彙の祖先は未確認。 | [HTML 4.0 FPWD forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)、[HTML 4.0 changes](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html) |
| 高 | `picture`／`source` | 2014年WHATWG commitがRICG由来の`picture`を統合し、既存`source`を画像候補へ拡張した。 | `video`／`audio`の`source`から`picture`自体が派生したとはしない。 | [RICG Picturefill](https://www.w3.org/community/respimg/2012/02/21/a-sample-picture-implementation/)、[HTML `picture` FPWD](https://www.w3.org/TR/2013/WD-html-picture-element-20130226/)、[WHATWG統合commit](https://github.com/whatwg/html/commit/a7716b7a2463323c7f25176f4b3768008d170204) |
| 高 | `video`／`audio`／`source`／`track` | `audio`は導入時に既存`video` media modelと`source`を再利用し、`track`は後にmedia elementのexternal timed trackとして追加された。 | 共有media modelは確認済みだが、`audio`、`source`、`track`のHTML外個別祖先は未確認。 | [`video`本格導入commit](https://github.com/whatwg/html/commit/753f385d6eb176f4cc7075ba9f41ed3190848b10)、[`source` commit](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)、[`audio` commit](https://github.com/whatwg/html/commit/37bbc4fa05ac4f5a9401e8f2bc7b7e4b7a2fd08c)、[`track` commit](https://github.com/whatwg/html/commit/a183c8997eb6f5647f9db27a9d3a52da86476d31) |
| 中 | `ins`／`del` | HTML 3.0に両要素があり、HTML 4は版間の挿入・削除をmark upする一対の変更要素として標準化した。 | HTML 3.0からHTML 4への個別採用因果は未確認なので、二つの版の間は接続しない。 | [HTML 3.0 logical styles](https://www.w3.org/MarkUp/html3/logical.html)、[HTML 4.01 edits](https://www.w3.org/TR/html401/struct/text.html#h-9.4) |
| 中 | `script`／`noscript` | W3C scripting草案はscriptまたは言語に非対応のUAへalternate contentを与えるため`NOSCRIPT`を追加した。 | Netscapeの`NOSCRIPT`実装からW3C案への採用は未確認。 | [W3C scripting WD 1996-07-09](https://www.w3.org/TR/WD-script-960709.html)、[HTML 4.01 scripts](https://www.w3.org/TR/html401/interact/scripts.html#edef-NOSCRIPT) |
| 中 | `input`／`button` | 1997年forms草案は`INPUT`のsubmit／reset／buttonより豊かな内容を持てる要素として`BUTTON`を導入した。 | 特定GUI toolkitのbuttonを祖先としない。 | [*Enhancing HTML Forms*](https://www.w3.org/TR/WD-forms-970402)、[HTML 4.0 FPWD forms](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) |
| 中 | `select`／`selectedcontent` | 2025年commitがcustomizable `select`の一部として`selectedcontent`をHTML Standardへ統合した。 | `select`自体の1993年以来の全系譜と、新しいcustomizable branchを同一視しない。 | [WHATWG PR #10633](https://github.com/whatwg/html/pull/10633)、[Open UI改名PR #1124](https://github.com/openui/open-ui/pull/1124)、[WHATWG統合commit](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b) |
| 低 | `meter`／`progress` | 2006年revision 15が両要素を同時に具体化し、scalar measurementとtask completionを明示的に分離した。 | 共通祖先を示すものではなく、共有標準化経路と設計上の対比に限定する。 | [WHATWG初回Git収録](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)、[revision 15 commit](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00) |

## より早い版と反例の探索結果

- `template`: 個別ページの2012-01-09より早い2011-11-17のWHATWG公開提案を確認し、2013-06-28のWHATWG仕様merge記録を発見した。現在の境界を直接反証する。
- `thead`／`tbody`／`tfoot`: 1995-07-07の`draft-ietf-html-tables-00`より早い公開版は今回のIETF revision列では確認できず、RFC 1942初出説へ戻す根拠はない。
- `span`／`bdo`: revision 00と01を比較し、`SPAN`と`BDO`を含む公開版は1995-09-25のrevision 01であるという個別ページの訂正を維持した。
- `canvas`: 2004-08-13時点で正式提案未提出という編集者回答に対し、2005-04にはWHATWG草案中の要素として議論されているが、その間の採録記録は確認できなかった。
- `source`: 2007-03-16の単一`src`版`video`と2007-03-23の`source`追加commitを比較し、仕様内の直接変更は確認した。一方、Operaの提案を`source`のHTML外祖先とする記録はない。
- `q`: HTML 3.2本文を確認し、`SUB`と`SUP`はあるが`Q`要素はないことを再確認した。

## 合格に必要な修正

1. `template`境界を削除し、2011年提案から2013年WHATWG mergeへの確認済み系譜へ訂正する。個別`template`ページも同じ変更で再レビューする。
2. `q`と`sub`／`sup`の後続経路を分け、`q`をHTML 3.2へ含めず、RFC 2070からHTML 4への未確認区間を切る。
3. media行を別枝へ分解し、Opera `video`から`source`への過剰な推移を止め、`picture`と共有media modelの確認済み関係を反映する。
4. 単一要素の`bdi`と`slot`を共有系統表から外すか、ページの範囲を「複数要素」に限定しない定義へ変更する。現在の目的には削除または境界への移動が最小である。
5. Texinfo行へ集合レベルの`u`を含めて個別対応マクロの有無を分け、`dfn`再採録欠落を注記する。Ruby行はW3C／XHTML枝と既存WebからHTML5への枝を分ける。HTML+ table行はHTML 3とRFC 1942の分岐を明記する。
6. 各歴史的主張の同じ表行へ直接一次資料URLを追加する。
7. 漏れの高優先度4群を追加するか、横断ページが非網羅的な選集であることと選定規則を明記する。
8. 修正後、全行の相対リンク、各矢印と個別ページの`系譜`・`確度`、対象要素集合、更新記録を再照合する。

## 調査記録

対象ページの16行と境界5項目について、リンクされた全個別ページの`HTMLへの導入`、`HTML直前の祖先`、`系譜`、`証拠`、`確度`、`未解決`を照合した。横断ノートは`html-plus-elements.md`、`cals-table-elements.md`、`internationalization-accessibility-elements.md`、`media-elements.md`、`modern-html-foreign-roots.md`、`forms-ui-elements.md`、`text-structure-edits-elements.md`を確認した。ローカルrawではHTML+、HTML 3.0、HTML 3.2、RFC 1866、RFC 1942、RFC 2070、1993年HTML draft、Texinfo 2.16、HTML 4.01を検索した。追加反証探索ではWHATWG、W3C、IETF、仕様Git履歴、標準化mailing listに限定し、一般解説は結論の根拠に使わなかった。
