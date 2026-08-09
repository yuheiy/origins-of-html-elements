# Wiki更新記録

このファイルはappend-onlyの作業記録である。各項目は `## [YYYY-MM-DD] 操作 | 対象` の形式で追加し、過去の記録は訂正せず、新しい項目から訂正内容を参照する。

## [2026-08-09] setup | 現行HTML要素集合

WHATWG HTML Living Standardの公式索引を基準に、HTML名前空間の組み込み要素113件とforeign rootの`math`・`svg`を合わせた115件を固定ページ対象とした。custom elementsは名前が開集合なので除外し、obsolete/non-conforming要素29件も除外した。[調査ノート](research/current-html-elements.md)

115件の個別ページ、索引、調査方法、ページ雛形を作成し、各個別ページを現行仕様の一次定義へ接続した。この時点の歴史記述は、一次資料で再検証するまで未評価とした。

## [2026-08-09] ingest | HTML phrase elementsとTexinfo

1993年HTML Internet-Draftと、1992–1995年のGNU Texinfo公式配布物を照合した。`b`, `i`, `em`, `strong`, `code`, `samp`, `kbd`, `var`, `dfn`, `cite`の命名元をAとして検証した。[調査ノート](research/texinfo-phrase-elements.md)

ハンドオフでAだった`u`はA−へ変更した。HTML draftは`U`を含む集合をTexinfo macro names由来と述べるが、同時代Texinfoにはunderline用`@u`を確認できず、`U → @u`の個別対応を否定された仮説とした。[`u`ページ](elements/u.md)

## [2026-08-09] research | HTML+要素群

forms、tables、追加phrase markupに属するHTML+要素候補について一次資料調査を開始した。単なるHTML+での初出と、現行要素への直接系譜または導入理由を区別して評価する。

## [2026-08-09] ingest | HTML+要素群

HTML+、RFC 1866、RFC 1942、RFC 2070、HTML 3.0、HTML 3.2、HTML 4を照合し、16要素へ統合した。[調査ノート](research/html-plus-elements.md)

`form`, `input`, `select`, `option`, `textarea`, `table`, `caption`, `tr`, `th`, `td`, `q`, `sub`, `sup`, `pre`をA、`abbr`, `s`をA−とした。`pre`はHTML+初出ではなく既存HTML要素の拡張、1993年の`TR`はrow separator、HTML+の`S`はpresentation-onlyだったことを個別ページへ反映した。

対象16ページの現在の意味もWHATWG HTML Living Standard本文から要約した。歴史節とは分離し、各定義へ直接リンクした。

## [2026-08-09] update | 検証済みページの現在の意味

Texinfo系統11ページの現在の意味をWHATWG HTML Living Standard本文から要約した。これにより、検証済み27ページはすべて概要、現在の意味、歴史節、証拠表、確度を持つ状態になった。

## [2026-08-09] lint | 27検証済みページ

検証済み27ページについて、generic overview、未要約の現在定義、空の証拠表が残っていないことを確認した。全115ページの必須見出し、現行定義リンク、Wiki内相対リンクも継続して検査する。

## [2026-08-09] research | 初期SGML/GML要素群

文書構造、見出し、段落、list family、block quotationを調査した。[調査ノート](research/early-sgml-elements.md)

1992年CERN資料が、`h1`〜`h6`をCERN SGML guideから保持し、その定義をAAP tag set由来と明記することを確認した。この6要素をAとして統合した。

`address`, `body`, `head`, `title`, `html`, `p`, `ul`, `li`, `ol`, `dl`, `dt`, `dd`, `blockquote`は、先行語彙または初期HTMLでの存在だけでは採用因果を証明できないため、確度を変更しなかった。現在の意味だけをLiving Standardから要約し、歴史節は未検証のまま残した。

## [2026-08-09] lint | 33検証済みページ

全115ページの必須見出し、現行定義への接続、Wiki内相対リンクを検査した。検証済み33ページについては、generic overview、未要約の現在定義、空の証拠表が残っていないことも確認した。現行意味の要約は46ページまで完了している。

## [2026-08-09] update | Wiki運用文書

調査方法、要素ページの構造、Wikiの入口に分散していた運用規約を`AGENTS.md`へ再構成した。閲覧用の入口と115要素の一覧は`wiki/README.md`へ移し、役割が重複した`wiki/index.md`、`wiki/methodology.md`、`wiki/element-template.md`を廃止した。

## [2026-08-09] update | Wiki運用規約の敵対的レビュー

状態、完成、敵対的レビューの関係と、A−とBの境界、進捗の算出規則を明文化した。史料の衝突処理とレビューの合格・失効条件を追加し、重複していたページ構造の説明を統合した。可変なRaw収録一覧は`raw/README.md`へ分離した。

## [2026-08-09] research | Browser vendor由来要素群

`img`, `map`, `area`, `embed`, `wbr`, `canvas`, `iframe`について、当時のbrowser実装、vendor提案、標準化資料を照合した。[調査ノート](research/browser-vendor-elements.md)

`img`, `map`, `area`, `embed`をA、`canvas`をA−、`wbr`, `iframe`をBとして個別ページへ統合した。`canvas`はAppleからWHATWGへの提案受領時点に資料間の矛盾があり、`iframe`は1996年Microsoft資料にliteral tag名がないため、欠落を推定で補わなかった。

対象7ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは40ページ、現在の意味の要約済みは53ページとなった。

## [2026-08-09] lint | 40検証済みページ

全115ページの確度集計を再計算し、A 34件、A− 4件、B 2件、未評価75件が`wiki/README.md`と一致することを確認した。Browser vendor系7ページについて、必須見出し、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。

## [2026-08-09] research | 国際化・アクセシビリティ関連要素群

`span`, `bdo`, `bdi`, `label`, `fieldset`, `legend`, `optgroup`, `main`, `search`について、RFC 2070、HTML 4草案、W3C i18n／ARIA資料、標準化議論、WHATWG issue／commitを照合した。[調査ノート](research/internationalization-accessibility-elements.md)

`span`, `bdo`, `bdi`, `main`, `search`をA、`label`, `fieldset`, `legend`, `optgroup`をBとして個別ページへ統合した。form系4要素はHTML 4が導入理由を明記する一方、具体的な先行toolkitまたはmarkupを確認できないためBとした。`optgroup`は1997年7月・9月草案にはなく、11月7日のProposed Recommendationを確認できる初出とした。

対象9ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは49ページ、現在の意味の要約済みは62ページとなった。

## [2026-08-09] lint | 49検証済みページ

全115ページの確度集計を再計算し、A 39件、A− 4件、B 6件、未評価66件が`wiki/README.md`と一致することを確認した。国際化・アクセシビリティ系9ページについて、必須見出し、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。現在の意味から歴史を逆算せず、ARIAとの類似を起源としたのは提案資料が採用関係を明記する`main`と`search`に限定した。

## [2026-08-09] update | Raw配布アーカイブ

HTML 4.01、GNU Texinfo 2.16、GNU Texinfo 3.7の配布アーカイブを展開済みのファイル群へ置き換えた。今後もZIP、tarなどは内部一覧を検査してから展開し、アーカイブ自体は`raw/`へ保存しない運用へ変更した。

## [2026-08-09] research | HTML5 semantic elements

`article`, `aside`, `section`, `header`, `footer`, `nav`, `hgroup`, `figure`, `figcaption`, `mark`, `dialog`について、2004–2005年WHATWG mailing list・保存草案、同時代usage調査、仕様commit、W3C差分草案を照合した。[調査ノート](research/html5-semantic-elements.md)

`hgroup`, `figcaption`, `mark`をA、残る8要素をBとして個別ページへ統合した。HTML+ `FIG`／`CAPTION`から現行`figure`／`figcaption`への未確認接続、conversation用旧`dialog`からapplication UI用の現行`dialog`への同名だけの接続は採用しなかった。

対象11ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは60ページ、現在の意味の要約済みは73ページとなった。

## [2026-08-09] lint | 60検証済みページ

全115ページの確度集計を再計算し、A 42件、A− 4件、B 14件、未評価55件が`wiki/README.md`と一致することを確認した。HTML5 semantic elements系11ページについて、必須見出しの順序、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。既存Web classとの対応、同名のHTML+要素、旧conversation用`dialog`を、採用因果が確認できないまま系譜へ接続していないことも確認した。

## [2026-08-09] update | Rawリソース取得

取得元と保存先をマニフェストへ集約し、各URLの最新版を一時領域へ取得してから`raw/`を更新するスクリプトを追加した。以後の追加と再取得はこのスクリプトを経由する。

## [2026-08-09] research | Modern HTML要素とforeign root

`picture`, `template`, `slot`, `data`, `selectedcontent`, `ruby`, `rt`, `rp`, `math`, `svg`について、Responsive Images、Web Components、HTML Working Group、Open UI、W3C Internationalization、MathML、SVGの一次資料を照合した。[調査ノート](research/modern-html-foreign-roots.md)

`picture`, `slot`, `data`, `selectedcontent`, `math`, `svg`をA、`ruby`, `rt`, `rp`をA−、`template`をBとして個別ページへ統合した。`template`はstandalone提案からWHATWG HTMLへの統合commitが未確認のためBに留め、`content → slot`は単純改名ではなくdistribution modelの再設計として記録した。`svg`は2008年の初回統合・削除・2009年の再導入を分離した。

対象10ページの現在の意味も各現行仕様から要約した。史料検証済みは70ページ、現在の意味の要約済みは83ページとなった。

## [2026-08-09] lint | 70検証済みページ

全115ページの確度集計を再計算し、A 48件、A− 7件、B 15件、未評価45件が`wiki/README.md`と一致することを確認した。Modern HTML／foreign root系10ページについて、必須見出しの順序、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。確認できない`template`の統合経路、ruby三要素の個別対応、外見が似たUI／template機構は系譜へ接続していない。

## [2026-08-09] update | Rawリソース分類

HTML 2.0のHTML版を誤って1993年資料として収録していた`html-1993/`を削除した。1993年資料は`draft-ietf-iiir-html-00`、HTML 2.0は草案とRFC 1866を正本として維持する。

## [2026-08-09] research | CALS／高度なtable model

`thead`, `tbody`, `tfoot`, `col`, `colgroup`について、HTML 3.0、RFC 1942、HTML 3.2、HTML 4、Living Standardを照合した。[調査ノート](research/cals-table-elements.md)

RFC 1942がCALSにならったrow groupingとして集合単位で明記する`thead`, `tbody`, `tfoot`をA−、導入理由は確認できるが具体的祖先を確認できない`col`, `colgroup`をBとして個別ページへ統合した。`COL`のCALS接続はrelative widthの`*`表記に限定し、`COLGROUP`をCALSから直接採用したとは扱わなかった。

対象5ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは75ページ、現在の意味の要約済みは88ページとなった。

## [2026-08-09] lint | 75検証済みページ

全115ページの確度集計を再計算し、A 48件、A− 10件、B 17件、未評価40件が`wiki/README.md`と一致することを確認した。CALS／高度なtable model系5ページについて、必須見出しの順序、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。

## [2026-08-09] research | 初期SGML/GML要素群（第2回）

`address`, `body`, `head`, `title`, `html`, `p`, `ul`, `li`, `ol`, `dl`, `dt`, `dd`, `blockquote`について、NeXT WorldWideWeb実装履歴、1991–1992年www-talk、CERN設計ノート、Connolly DTD、1993年HTML Internet-Draft、Waterloo SCRIPT/GMLを照合した。[調査ノート](research/early-sgml-elements.md)

HTML DTD内部の前身構造と欠落を確認できた`body`, `head`をA−、HTML側の導入理由または集合単位の設計モデルを確認できた10要素をB、最初期実装と意味までを固定した`address`をCとした。Waterloo／CERNの同名先行要素は、採用因果を確認できないため系譜へ接続していない。

## [2026-08-09] lint | 88検証済みページ

全115ページの確度集計を再計算し、A 48件、A− 12件、B 27件、C 1件、未評価27件が`wiki/README.md`と一致することを確認した。初期SGML/GML系13ページについて、必須見出し順、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。現在の意味の要約済みは88件のままである。

## [2026-08-09] research | 初期hypertext・文書制御要素群

`a`, `base`, `br`, `hr`, `link`, `menu`, `meta`について、WorldWideWeb source、1992年CERN資料とDTD、1993年HTML draft、NCSA Mosaic変更記録、HTML+、1994年`META`提案、HTML 2.0を照合した。[調査ノート](research/early-hypertext-elements.md)

具体提案からHTML 2.0まで追跡できた`meta`をA、同名提案からDTDまでの中間記録が欠ける`link`をA−、HTML側の設計modelまたは導入理由を確認できた`a`, `base`をB、初期出現と意味までを固定した`br`, `hr`, `menu`をCとした。ENQUIRE、GUI menu、印刷上のruleなどは採用因果を確認できないため系譜へ接続していない。

対象7ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは95ページ、現在の意味の要約済みは95ページとなった。

## [2026-08-09] lint | 95検証済みページ

全115ページの確度集計を再計算し、A 49件、A− 13件、B 29件、C 4件、未評価20件が`wiki/README.md`と一致することを確認した。初期hypertext・文書制御系7ページについて、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。`br`／`hr`のMosaic・HTML+・HTML 2.0間と、初期`menu`から現行意味への未確認接続は矢印で補っていない。

## [2026-08-09] research | detailsとsummary

`details`と`summary`について、WHATWG仕様commit、public-html mail、導入commitが参照するApple HIGとGNOME usability threadを照合した。[調査ノート](research/html5-semantic-elements.md)

`details`はGUIのdisclosure triangle/widget慣習と`fieldset`／`legend`構造からの採用因果、`summary`は既存`details` caption機構からの置換を直接確認できたため、両方をAとした。対象2ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みと現在の意味の要約済みは97ページとなった。

## [2026-08-09] lint | 97検証済みページ

全115ページの確度集計を再計算し、A 51件、A− 13件、B 29件、C 4件、未評価18件が`wiki/README.md`と一致することを確認した。`details`と`summary`について、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。

## [2026-08-09] research | HTML media要素

`audio`, `video`, `source`, `track`について、WHATWG mailing list、2007年の保存草案、2010年のW3C video accessibility議論とWorking Draft、現行Living Standardを照合した。[調査ノート](research/media-elements.md)

Operaの実験実装・提案からWHATWGへの採用因果を確認できた`video`をA、導入理由または設計modelは確認できるが具体的祖先を確定できない`audio`, `source`, `track`をBとした。SMIL、plugin、各種timed-text format、同時代のchange proposalは、名称や用途の類似だけでは系譜へ接続していない。

対象4ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みと現在の意味の要約済みは101ページとなった。

## [2026-08-09] lint | 101検証済みページ

全115ページの確度集計を再計算し、A 52件、A− 13件、B 32件、C 4件、未評価14件が`wiki/README.md`と一致することを確認した。media系4ページについて、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。

## [2026-08-09] research | Forms/UI要素

`button`, `datalist`, `meter`, `output`, `progress`について、W3C forms提案、XForms、Web Forms 2.0、WHATWG仕様commitと保存草案、HTML 5 Working Draft、現行Living Standardを照合した。[調査ノート](research/forms-ui-elements.md)

既存`INPUT` controlから内容を持つ要素への拡張を確認した`button`と、`gauge`からの改名を確認した`meter`をA、XForms機能集合からHTML formsへの導入を確認した`output`をA−、導入理由は確認できるが具体的祖先を確定できない`datalist`, `progress`をBとした。GUI widgetや同じ要求を扱う先行案は、採用因果がないまま系譜へ接続していない。

対象5ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みと現在の意味の要約済みは106ページとなった。

## [2026-08-09] lint | 106検証済みページ

全115ページの確度集計を再計算し、A 54件、A− 14件、B 34件、C 4件、未評価9件が`wiki/README.md`と一致することを確認した。Forms/UI系5ページについて、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。

## [2026-08-09] research | Scripting / embedding要素

`script`, `noscript`, `style`, `object`について、Netscape Navigator資料、W3C scripting／style／insert／object草案、HTML 3.2、CSS1、HTML 4、現行Living Standardを照合した。[調査ノート](research/scripting-embedding-elements.md)

Netscape実装からW3Cによるformalizationを確認した`script`と、HTML3 `INSERT`からの改名を確認した`object`をA、W3C style草案からHTML 4への集合単位の接続を確認した`style`をA−、導入要求は確認できるが先行実装を確定できない`noscript`をBとした。

## [2026-08-09] research | Text/structure/edits要素

`div`, `small`, `ins`, `del`, `time`について、HTML 3.0、HTML 3.2、HTML 4、Netscape保存資料、WHATWG仕様commit、現行Living Standardを照合した。[調査ノート](research/text-structure-edits-elements.md)

WHATWG `<t>`からの改名を確認した`time`をA、導入目的を確認した`div`, `ins`, `del`をB、最初期の出現と当時の意味までを確認した`small`をCとした。`CENTER`, `S`／`STRIKE`, Netscape `SMALL`, 法律編集慣習、microformatsは、採用因果が確認できないまま系譜へ接続していない。

対象9ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みと現在の意味の要約済みは全115ページとなった。

## [2026-08-09] lint | 115検証済みページ

全115ページの確度集計を再計算し、A 57件、A− 15件、B 38件、C 5件、未評価0件が`wiki/README.md`と一致することを確認した。最後の9ページについて、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。

## [2026-08-09] research | 全115要素の敵対的レビュー

全115個別ページについて、歴史的主張を一次資料へ戻し、因果、日付、主体、要素名、文脈、より早い版、競合資料、反例、系譜、確度を再点検した。[横断監査ノート](research/adversarial-review.md)

反証探索により、`thead`／`tbody`／`tfoot`の初出を1995年7月のIETF table草案、`col`を同年10月3日版、`colgroup`を同年10月27日版、`span`／`bdo`を同年9月25日のIETF国際化草案、`ins`／`del`をHTML 3.0へ訂正した。`span`には国際化語彙をstyle用途へ再利用した枝を追加した。未確認の採録因果を矢印で結んでいた`abbr`、`canvas`、`q`、`s`、`sub`、`sup`も訂正し、総合確度はA 54件、A− 15件、B 40件、C 6件となった。

歴史的結論を訂正したページは完成表示を一度失効させ、訂正後の別レビューで本文、証拠表、系譜、確度、未解決の整合を確認した。全115ページの状態行と調査記録へ敵対的レビュー実施記録を追加した。

## [2026-08-09] update | 現行HTML要素の横断系譜

敵対的レビュー済みの個別ページから、複数要素が共有する確認済み関係だけを[横断系譜](research/cross-element-lineage.md)へ統合した。集合レベルの関係を注記し、`ABBREV`／`ABBR`、旧`S`／現行`s`、Apple `CANVAS`／WHATWG `canvas`、HTML Templates草案／現行`template`などの未確認接続は矢印で結ばなかった。`wiki/README.md`へ索引を追加した。

## [2026-08-09] lint | 全115要素の敵対的レビュー完了

全115ページについて、確度集計、必須見出し順、完成表示と敵対的レビュー記録、現行定義要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。敵対的レビュー済み115件と実ページ数、A 54件、A− 15件、B 40件、C 6件、未評価0件の集計が`wiki/README.md`と一致することを確認した。

## [2026-08-09] research | 現行HTML要素の横断系譜の敵対的レビュー

[横断系譜](research/cross-element-lineage.md)の16行と接続しない境界5項目を、個別ページ、横断ノート、ローカルraw、公開一次資料へ戻って独立検証した。9行を維持し7行を訂正対象と判定した。[レビュー記録](research/cross-element-lineage-adversarial-review.md)

`q`／`sub`／`sup`の版経路、media枝、Texinfo集合、Ruby枝、単独要素行、直接出典、共有系統の漏れを訂正した。W3C Bug 17930 comments 21–22が2013年のWHATWG `template`統合を明記するため、従来の未確認境界を撤回した。

## [2026-08-09] update | templateのWHATWG統合経路

2011年のWHATWG提案、W3C WebAppsWGのHTML Templates作業、2013年のWHATWG merge r8000を接続し、`template`の初出、直前祖先、系譜、証拠表、未解決点を訂正した。確度はBからAへ変更し、完成表示を一度失効させた後、訂正後の別レビューで復帰した。

## [2026-08-09] lint | 横断系譜の敵対的レビュー完了

訂正後の横断系譜17行について、複数現行要素、直接一次資料、個別ページとの矢印・制約、境界5項目、相対リンク、Markdown whitespaceを再検査した。個別ページの確度集計はA 55件、A− 15件、B 39件、C 6件、未評価0件となり、`wiki/README.md`と一致することを確認した。

## [2026-08-09] research | templateのWHATWG revision r8000対応commit

W3C Bug 17930、WHATWG公式Git履歴、Ian Hicksonの同時代記録を照合し、revision r8000がcommit `685a5e0b27e963f6b0a62a21cb95078171076e3b`に対応することを確定した。commit messageの`git-svn-id`が`webapps@8000`を直接保持し、差分が`template`要素、DOM API、parser、fragment parsing、renderingを統合する。[調査ノート](research/template-r8000-git-mapping.md)

## [2026-08-09] update | templateの未解決項目

`template`個別ページとModern HTML横断調査ノートへ現行Git commitを追加し、解決したr8000対応hashの問いを未解決から除いた。既存の導入系譜と確度Aは維持し、browser prototype／先行mechanismと2013年以後の規則変更経路は未解決として残した。

## [2026-08-09] lint | template追加調査

追加証拠反映後に`template`ページを独立して読み直し、Bug 17930のr8000記録、commit messageの`webapps@8000`、差分内容、系譜、確度A、残る未解決点の整合を確認した。全115ページの確度集計はA 55件、A− 15件、B 39件、C 6件、未評価0件、敵対的レビュー済み115件のままであり、`wiki/README.md`と一致する。

## [2026-08-09] research | AAP heading DTDと現行header再導入

全115ページの未解決252件を棚卸しし、複数ページへ波及するheading familyと、系譜が切断されていた`header`を優先調査した。AAP Book DTD BK-1の1991年RCS revision 1.1に`h|h1|h2|h3|h4`のheading familyがあることを確認し、`h1`〜`h6`へ集合単位の証拠と5対6の不一致を反映した。[AAP DTD調査](research/aap-heading-dtd.md)

WHATWG公式Git履歴と同時代mailから、旧`header`を`hgroup`へ分離したr3039の直後、r3040が広いpage／section header用途の新`header`を導入したことを確認した。具体的な汎用markup、問題提起、編集者返信、commit差分が再導入理由を直接示すため、`header`をBからAへ変更した。[`header`再導入調査](research/header-reintroduction.md)

## [2026-08-09] lint | AAP heading DTDと現行header再導入

変更した7個別ページと関連横断調査を一次資料へ戻って別レビューし、AAPの5 identifiersをHTMLの6段階へ個別対応させていないこと、旧`header`と現行`header`を単純な連続系譜にしていないことを確認した。必須見出し、証拠表、未解決点、相対リンク、Markdown whitespace、確度集計を検査し、A 56件、A− 15件、B 38件、C 6件、未評価0件、敵対的レビュー済み115件が`wiki/README.md`と一致することを確認した。

## [2026-08-09] update | emとciteの1992年提案

1992年11月19日のwww-talkで、Dan Connollyが`HP1`〜`HP5`の代案として`em`, `tt`, `cite`を提案し、Tim Berners-Leeが番号式highlightingを退ける方向へ同意したことを確認した。`em`と`cite`の確認可能なHTML標準化上の提案を1993年草案以前へ遡らせ、解決した初出の問いを両ページの未解決から除いた。提案を実装初出または最終採用決定とは扱っていない。

## [2026-08-09] lint | emとciteの1992年提案

両mail、1993年draft、Texinfo 2.16を再照合し、日付、提案者、literal element names、応答の文脈を確認した。`em`と`cite`の証拠表、未解決点、調査記録を別レビューし、確度Aと全体集計は変更しなかった。

## [2026-08-09] update | 1993年HTML DTDのphrase収録日

1993年HTML draftの埋込みDTDがRCS識別子`html.dtd,v 1.3 93/01/06`を持ち、`inline` entityにphrase／font要素群を列挙することをローカル保存資料で確認した。`b`, `i`, `strong`, `code`, `samp`, `kbd`, `var`, `dfn`, `u`のformal DTD収録を1993年1月6日まで遡らせ、解決した草案以前の初出問いを未解決から除いた。RCS日付を実装初出や、それ以前のprototype不在の証拠とは扱っていない。

## [2026-08-09] lint | 1993年HTML DTDのphrase収録日

埋込みDTDのRCS識別子、`inline` entity、個別のliteral namesを再照合し、変更した9ページの状態、導入、証拠表、未解決、調査記録を別レビューした。確度と全体集計は変更せず、相対リンク、必須見出し、Markdown whitespaceの整合を確認した。今回の調査全体で未解決項目は252件から240件となった。

## [2026-08-09] update | h1〜h6要素ページの統合

`wiki/elements/h1.md`〜`h6.md`を削除し、共通の歴史、証拠、確度、未解決点を[`hx.md`](elements/hx.md)へ統合した。対象集合は115要素のまま、要素ページは110ファイルとなった。索引、横断調査、AAP調査ノート、運用規約を同時更新した。

## [2026-08-09] lint | h1〜h6要素ページの統合

`hx.md`の必須見出し順、証拠表、相対リンク、完成表示、敵対的レビュー記録を確認した。旧`h1.md`〜`h6.md`への参照が残っていないこと、110ファイルで115要素を収録し、`hx.md`のA評価を6要素へ計上するとA 56件、A− 15件、B 38件、C 6件になることを確認した。
