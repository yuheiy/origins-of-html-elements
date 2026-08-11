# Wiki更新記録

このファイルはappend-onlyの作業記録である。各項目は `## [YYYY-MM-DD] 操作 | 対象` の形式で追加し、過去の記録は訂正せず、新しい項目から訂正内容を参照する。

## [2026-08-09] setup | 現行HTML要素集合

WHATWG HTML Living Standardの公式索引を基準に、HTML名前空間の組み込み要素113件とforeign rootの`math`・`svg`を合わせた115件を固定ページ対象とした。custom elementsは名前が開集合なので除外し、obsolete/non-conforming要素29件も除外した。[収録範囲](README.md#収録範囲)

115件の個別ページ、索引、調査方法、ページ雛形を作成し、各個別ページを現行仕様の一次定義へ接続した。この時点の歴史記述は、一次資料で再検証するまで未評価とした。

## [2026-08-09] ingest | HTML phrase elementsとTexinfo

1993年HTML Internet-Draftと、1992–1995年のGNU Texinfo公式配布物を照合した。`b`, `i`, `em`, `strong`, `code`, `samp`, `kbd`, `var`, `dfn`, `cite`の命名元をAとして検証した。[共有系譜](lineages/texinfo.md)

ハンドオフでAだった`u`はA−へ変更した。HTML draftは`U`を含む集合をTexinfo macro names由来と述べるが、同時代Texinfoにはunderline用`@u`を確認できず、`U → @u`の個別対応を否定された仮説とした。[`u`ページ](elements/u.md)

## [2026-08-09] research | HTML+要素群

forms、tables、追加phrase markupに属するHTML+要素候補について一次資料調査を開始した。単なるHTML+での初出と、現行要素への直接系譜または導入理由を区別して評価する。

## [2026-08-09] ingest | HTML+要素群

HTML+、RFC 1866、RFC 1942、RFC 2070、HTML 3.0、HTML 3.2、HTML 4を照合し、16要素へ統合した。[共有系譜](lineages/html-plus.md)

`form`, `input`, `select`, `option`, `textarea`, `table`, `caption`, `tr`, `th`, `td`, `q`, `sub`, `sup`, `pre`をA、`abbr`, `s`をA−とした。`pre`はHTML+初出ではなく既存HTML要素の拡張、1993年の`TR`はrow separator、HTML+の`S`はpresentation-onlyだったことを個別ページへ反映した。

対象16ページの現在の意味もWHATWG HTML Living Standard本文から要約した。歴史節とは分離し、各定義へ直接リンクした。

## [2026-08-09] update | 検証済みページの現在の意味

Texinfo系統11ページの現在の意味をWHATWG HTML Living Standard本文から要約した。これにより、検証済み27ページはすべて概要、現在の意味、歴史節、証拠表、確度を持つ状態になった。

## [2026-08-09] lint | 27検証済みページ

検証済み27ページについて、generic overview、未要約の現在定義、空の証拠表が残っていないことを確認した。全115ページの必須見出し、現行定義リンク、Wiki内相対リンクも継続して検査する。

## [2026-08-09] research | 初期SGML/GML要素群

文書構造、見出し、段落、list family、block quotationを調査した。

1992年CERN資料が、`h1`〜`h6`をCERN SGML guideから保持し、その定義をAAP tag set由来と明記することを確認した。この6要素をAとして統合した。

`address`, `body`, `head`, `title`, `html`, `p`, `ul`, `li`, `ol`, `dl`, `dt`, `dd`, `blockquote`は、先行語彙または初期HTMLでの存在だけでは採用因果を証明できないため、確度を変更しなかった。現在の意味だけをLiving Standardから要約し、歴史節は未検証のまま残した。

## [2026-08-09] lint | 33検証済みページ

全115ページの必須見出し、現行定義への接続、Wiki内相対リンクを検査した。検証済み33ページについては、generic overview、未要約の現在定義、空の証拠表が残っていないことも確認した。現行意味の要約は46ページまで完了している。

## [2026-08-09] update | Wiki運用文書

調査方法、要素ページの構造、Wikiの入口に分散していた運用規約を`AGENTS.md`へ再構成した。閲覧用の入口と115要素の一覧は`wiki/README.md`へ移し、役割が重複した`wiki/index.md`、`wiki/methodology.md`、`wiki/element-template.md`を廃止した。

## [2026-08-09] update | Wiki運用規約の敵対的検証

状態、完成、敵対的検証の関係と、A−とBの境界、進捗の算出規則を明文化した。史料の衝突処理と検証の合格・失効条件を追加し、重複していたページ構造の説明を統合した。可変なRaw収録一覧は`raw/README.md`へ分離した。

## [2026-08-09] research | Browser vendor由来要素群

`img`, `map`, `area`, `embed`, `wbr`, `canvas`, `iframe`について、当時のbrowser実装、vendor提案、標準化資料を照合した。

`img`, `map`, `area`, `embed`をA、`canvas`をA−、`wbr`, `iframe`をBとして個別ページへ統合した。`canvas`はAppleからWHATWGへの提案受領時点に資料間の矛盾があり、`iframe`は1996年Microsoft資料にliteral tag名がないため、欠落を推定で補わなかった。

対象7ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは40ページ、現在の意味の要約済みは53ページとなった。

## [2026-08-09] lint | 40検証済みページ

全115ページの確度集計を再計算し、A 34件、A− 4件、B 2件、未評価75件が`wiki/README.md`と一致することを確認した。Browser vendor系7ページについて、必須見出し、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。

## [2026-08-09] research | 国際化・アクセシビリティ関連要素群

`span`, `bdo`, `bdi`, `label`, `fieldset`, `legend`, `optgroup`, `main`, `search`について、RFC 2070、HTML 4草案、W3C i18n／ARIA資料、標準化議論、WHATWG issue／commitを照合した。[共有系譜](lineages/html-internationalization.md)

`span`, `bdo`, `bdi`, `main`, `search`をA、`label`, `fieldset`, `legend`, `optgroup`をBとして個別ページへ統合した。form系4要素はHTML 4が導入理由を明記する一方、具体的な先行toolkitまたはmarkupを確認できないためBとした。`optgroup`は1997年7月・9月草案にはなく、11月7日のProposed Recommendationを確認できる初出とした。

対象9ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは49ページ、現在の意味の要約済みは62ページとなった。

## [2026-08-09] lint | 49検証済みページ

全115ページの確度集計を再計算し、A 39件、A− 4件、B 6件、未評価66件が`wiki/README.md`と一致することを確認した。国際化・アクセシビリティ系9ページについて、必須見出し、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。現在の意味から歴史を逆算せず、ARIAとの類似を起源としたのは提案資料が採用関係を明記する`main`と`search`に限定した。

## [2026-08-09] update | Raw配布アーカイブ

HTML 4.01、GNU Texinfo 2.16、GNU Texinfo 3.7の配布アーカイブを展開済みのファイル群へ置き換えた。今後もZIP、tarなどは内部一覧を検査してから展開し、アーカイブ自体は`raw/`へ保存しない運用へ変更した。

## [2026-08-09] research | HTML5 semantic elements

`article`, `aside`, `section`, `header`, `footer`, `nav`, `hgroup`, `figure`, `figcaption`, `mark`, `dialog`について、2004–2005年WHATWG mailing list・保存草案、同時代usage調査、仕様commit、W3C差分草案を照合した。

`hgroup`, `figcaption`, `mark`をA、残る8要素をBとして個別ページへ統合した。HTML+ `FIG`／`CAPTION`から現行`figure`／`figcaption`への未確認接続、conversation用旧`dialog`からapplication UI用の現行`dialog`への同名だけの接続は採用しなかった。

対象11ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは60ページ、現在の意味の要約済みは73ページとなった。

## [2026-08-09] lint | 60検証済みページ

全115ページの確度集計を再計算し、A 42件、A− 4件、B 14件、未評価55件が`wiki/README.md`と一致することを確認した。HTML5 semantic elements系11ページについて、必須見出しの順序、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。既存Web classとの対応、同名のHTML+要素、旧conversation用`dialog`を、採用因果が確認できないまま系譜へ接続していないことも確認した。

## [2026-08-09] update | Rawリソース取得

取得元と保存先をマニフェストへ集約し、各URLの最新版を一時領域へ取得してから`raw/`を更新するスクリプトを追加した。以後の追加と再取得はこのスクリプトを経由する。

## [2026-08-09] research | Modern HTML要素とforeign root

`picture`, `template`, `slot`, `data`, `selectedcontent`, `ruby`, `rt`, `rp`, `math`, `svg`について、Responsive Images、Web Components、HTML Working Group、Open UI、W3C Internationalization、MathML、SVGの一次資料を照合した。

`picture`, `slot`, `data`, `selectedcontent`, `math`, `svg`をA、`ruby`, `rt`, `rp`をA−、`template`をBとして個別ページへ統合した。`template`はstandalone提案からWHATWG HTMLへの統合commitが未確認のためBに留め、`content → slot`は単純改名ではなくdistribution modelの再設計として記録した。`svg`は2008年の初回統合・削除・2009年の再導入を分離した。

対象10ページの現在の意味も各現行仕様から要約した。史料検証済みは70ページ、現在の意味の要約済みは83ページとなった。

## [2026-08-09] lint | 70検証済みページ

全115ページの確度集計を再計算し、A 48件、A− 7件、B 15件、未評価45件が`wiki/README.md`と一致することを確認した。Modern HTML／foreign root系10ページについて、必須見出しの順序、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。確認できない`template`の統合経路、ruby三要素の個別対応、外見が似たUI／template機構は系譜へ接続していない。

## [2026-08-09] update | Rawリソース分類

HTML 2.0のHTML版を誤って1993年資料として収録していた`html-1993/`を削除した。1993年資料は`draft-ietf-iiir-html-00`、HTML 2.0は草案とRFC 1866を正本として維持する。

## [2026-08-09] research | CALS／高度なtable model

`thead`, `tbody`, `tfoot`, `col`, `colgroup`について、HTML 3.0、RFC 1942、HTML 3.2、HTML 4、Living Standardを照合した。[共有系譜](lineages/cals-tables.md)

RFC 1942がCALSにならったrow groupingとして集合単位で明記する`thead`, `tbody`, `tfoot`をA−、導入理由は確認できるが具体的祖先を確認できない`col`, `colgroup`をBとして個別ページへ統合した。`COL`のCALS接続はrelative widthの`*`表記に限定し、`COLGROUP`をCALSから直接採用したとは扱わなかった。

対象5ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは75ページ、現在の意味の要約済みは88ページとなった。

## [2026-08-09] lint | 75検証済みページ

全115ページの確度集計を再計算し、A 48件、A− 10件、B 17件、未評価40件が`wiki/README.md`と一致することを確認した。CALS／高度なtable model系5ページについて、必須見出しの順序、現行定義の要約、空でない証拠表、相対リンク、generic placeholderの除去、Markdown whitespaceを検査した。

## [2026-08-09] research | 初期SGML/GML要素群（第2回）

`address`, `body`, `head`, `title`, `html`, `p`, `ul`, `li`, `ol`, `dl`, `dt`, `dd`, `blockquote`について、NeXT WorldWideWeb実装履歴、1991–1992年www-talk、CERN設計ノート、Connolly DTD、1993年HTML Internet-Draft、Waterloo SCRIPT/GMLを照合した。

HTML DTD内部の前身構造と欠落を確認できた`body`, `head`をA−、HTML側の導入理由または集合単位の設計モデルを確認できた10要素をB、最初期実装と意味までを固定した`address`をCとした。Waterloo／CERNの同名先行要素は、採用因果を確認できないため系譜へ接続していない。

## [2026-08-09] lint | 88検証済みページ

全115ページの確度集計を再計算し、A 48件、A− 12件、B 27件、C 1件、未評価27件が`wiki/README.md`と一致することを確認した。初期SGML/GML系13ページについて、必須見出し順、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。現在の意味の要約済みは88件のままである。

## [2026-08-09] research | 初期hypertext・文書制御要素群

`a`, `base`, `br`, `hr`, `link`, `menu`, `meta`について、WorldWideWeb source、1992年CERN資料とDTD、1993年HTML draft、NCSA Mosaic変更記録、HTML+、1994年`META`提案、HTML 2.0を照合した。

具体提案からHTML 2.0まで追跡できた`meta`をA、同名提案からDTDまでの中間記録が欠ける`link`をA−、HTML側の設計modelまたは導入理由を確認できた`a`, `base`をB、初期出現と意味までを固定した`br`, `hr`, `menu`をCとした。ENQUIRE、GUI menu、印刷上のruleなどは採用因果を確認できないため系譜へ接続していない。

対象7ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みは95ページ、現在の意味の要約済みは95ページとなった。

## [2026-08-09] lint | 95検証済みページ

全115ページの確度集計を再計算し、A 49件、A− 13件、B 29件、C 4件、未評価20件が`wiki/README.md`と一致することを確認した。初期hypertext・文書制御系7ページについて、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。`br`／`hr`のMosaic・HTML+・HTML 2.0間と、初期`menu`から現行意味への未確認接続は矢印で補っていない。

## [2026-08-09] research | detailsとsummary

`details`と`summary`について、WHATWG仕様commit、public-html mail、導入commitが参照するApple HIGとGNOME usability threadを照合した。

`details`はGUIのdisclosure triangle/widget慣習と`fieldset`／`legend`構造からの採用因果、`summary`は既存`details` caption機構からの置換を直接確認できたため、両方をAとした。対象2ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みと現在の意味の要約済みは97ページとなった。

## [2026-08-09] lint | 97検証済みページ

全115ページの確度集計を再計算し、A 51件、A− 13件、B 29件、C 4件、未評価18件が`wiki/README.md`と一致することを確認した。`details`と`summary`について、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。

## [2026-08-09] research | HTML media要素

`audio`, `video`, `source`, `track`について、WHATWG mailing list、2007年の保存草案、2010年のW3C video accessibility議論とWorking Draft、現行Living Standardを照合した。

Operaの実験実装・提案からWHATWGへの採用因果を確認できた`video`をA、導入理由または設計modelは確認できるが具体的祖先を確定できない`audio`, `source`, `track`をBとした。SMIL、plugin、各種timed-text format、同時代のchange proposalは、名称や用途の類似だけでは系譜へ接続していない。

対象4ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みと現在の意味の要約済みは101ページとなった。

## [2026-08-09] lint | 101検証済みページ

全115ページの確度集計を再計算し、A 52件、A− 13件、B 32件、C 4件、未評価14件が`wiki/README.md`と一致することを確認した。media系4ページについて、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。

## [2026-08-09] research | Forms/UI要素

`button`, `datalist`, `meter`, `output`, `progress`について、W3C forms提案、XForms、Web Forms 2.0、WHATWG仕様commitと保存草案、HTML 5 Working Draft、現行Living Standardを照合した。

既存`INPUT` controlから内容を持つ要素への拡張を確認した`button`と、`gauge`からの改名を確認した`meter`をA、XForms機能集合からHTML formsへの導入を確認した`output`をA−、導入理由は確認できるが具体的祖先を確定できない`datalist`, `progress`をBとした。GUI widgetや同じ要求を扱う先行案は、採用因果がないまま系譜へ接続していない。

対象5ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みと現在の意味の要約済みは106ページとなった。

## [2026-08-09] lint | 106検証済みページ

全115ページの確度集計を再計算し、A 54件、A− 14件、B 34件、C 4件、未評価9件が`wiki/README.md`と一致することを確認した。Forms/UI系5ページについて、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。

## [2026-08-09] research | Scripting / embedding要素

`script`, `noscript`, `style`, `object`について、Netscape Navigator資料、W3C scripting／style／insert／object草案、HTML 3.2、CSS1、HTML 4、現行Living Standardを照合した。

Netscape実装からW3Cによるformalizationを確認した`script`と、HTML3 `INSERT`からの改名を確認した`object`をA、W3C style草案からHTML 4への集合単位の接続を確認した`style`をA−、導入要求は確認できるが先行実装を確定できない`noscript`をBとした。

## [2026-08-09] research | Text/structure/edits要素

`div`, `small`, `ins`, `del`, `time`について、HTML 3.0、HTML 3.2、HTML 4、Netscape保存資料、WHATWG仕様commit、現行Living Standardを照合した。

WHATWG `<t>`からの改名を確認した`time`をA、導入目的を確認した`div`, `ins`, `del`をB、最初期の出現と当時の意味までを確認した`small`をCとした。`CENTER`, `S`／`STRIKE`, Netscape `SMALL`, 法律編集慣習、microformatsは、採用因果が確認できないまま系譜へ接続していない。

対象9ページの現在の意味もWHATWG HTML Living Standard本文から要約した。史料検証済みと現在の意味の要約済みは全115ページとなった。

## [2026-08-09] lint | 115検証済みページ

全115ページの確度集計を再計算し、A 57件、A− 15件、B 38件、C 5件、未評価0件が`wiki/README.md`と一致することを確認した。最後の9ページについて、必須見出し順、現行定義の要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。

## [2026-08-09] research | 全115要素の敵対的検証

全115個別ページについて、歴史的主張を一次資料へ戻し、因果、日付、主体、要素名、文脈、より早い版、競合資料、反例、系譜、確度を再点検した。

反証探索により、`thead`／`tbody`／`tfoot`の初出を1995年7月のIETF table草案、`col`を同年10月3日版、`colgroup`を同年10月27日版、`span`／`bdo`を同年9月25日のIETF国際化草案、`ins`／`del`をHTML 3.0へ訂正した。`span`には国際化語彙をstyle用途へ再利用した枝を追加した。未確認の採録因果を矢印で結んでいた`abbr`、`canvas`、`q`、`s`、`sub`、`sup`も訂正し、総合確度はA 54件、A− 15件、B 40件、C 6件となった。

歴史的結論を訂正したページは完成表示を一度失効させ、訂正後の別検証で本文、証拠表、系譜、確度、未解決の整合を確認した。全115ページの状態行と調査記録へ敵対的検証実施記録を追加した。

## [2026-08-09] update | 現行HTML要素の横断系譜

敵対的検証済みの個別ページから、複数要素が共有する確認済み関係だけを[横断系譜](lineages/README.md)へ統合した。集合レベルの関係を注記し、`ABBREV`／`ABBR`、旧`S`／現行`s`、Apple `CANVAS`／WHATWG `canvas`、HTML Templates草案／現行`template`などの未確認接続は矢印で結ばなかった。`wiki/README.md`へ索引を追加した。

## [2026-08-09] lint | 全115要素の敵対的検証完了

全115ページについて、確度集計、必須見出し順、完成表示と敵対的検証記録、現行定義要約、空でない証拠表、具体的な未解決点、相対リンク、generic placeholder、Markdown whitespaceを検査した。敵対的検証済み115件と実ページ数、A 54件、A− 15件、B 40件、C 6件、未評価0件の集計が`wiki/README.md`と一致することを確認した。

## [2026-08-09] research | 現行HTML要素の横断系譜の敵対的検証

[横断系譜](lineages/README.md)の16行と接続しない境界5項目を、個別ページ、横断ノート、ローカルraw、公開一次資料へ戻って独立検証した。9行を維持し7行を訂正対象と判定した。

`q`／`sub`／`sup`の版経路、media枝、Texinfo集合、Ruby枝、単独要素行、直接出典、共有系統の漏れを訂正した。W3C Bug 17930 comments 21–22が2013年のWHATWG `template`統合を明記するため、従来の未確認境界を撤回した。

## [2026-08-09] update | templateのWHATWG統合経路

2011年のWHATWG提案、W3C WebAppsWGのHTML Templates作業、2013年のWHATWG merge r8000を接続し、`template`の初出、直前祖先、系譜、証拠表、未解決点を訂正した。確度はBからAへ変更し、完成表示を一度失効させた後、訂正後の別検証で復帰した。

## [2026-08-09] lint | 横断系譜の敵対的検証完了

訂正後の横断系譜17行について、複数現行要素、直接一次資料、個別ページとの矢印・制約、境界5項目、相対リンク、Markdown whitespaceを再検査した。個別ページの確度集計はA 55件、A− 15件、B 39件、C 6件、未評価0件となり、`wiki/README.md`と一致することを確認した。

## [2026-08-09] research | templateのWHATWG revision r8000対応commit

W3C Bug 17930、WHATWG公式Git履歴、Ian Hicksonの同時代記録を照合し、revision r8000がcommit `685a5e0b27e963f6b0a62a21cb95078171076e3b`に対応することを確定した。commit messageの`git-svn-id`が`webapps@8000`を直接保持し、差分が`template`要素、DOM API、parser、fragment parsing、renderingを統合する。

## [2026-08-09] update | templateの未解決項目

`template`個別ページとModern HTML横断調査ノートへ現行Git commitを追加し、解決したr8000対応hashの問いを未解決から除いた。既存の導入系譜と確度Aは維持し、browser prototype／先行mechanismと2013年以後の規則変更経路は未解決として残した。

## [2026-08-09] lint | template追加調査

追加証拠反映後に`template`ページを独立して読み直し、Bug 17930のr8000記録、commit messageの`webapps@8000`、差分内容、系譜、確度A、残る未解決点の整合を確認した。全115ページの確度集計はA 55件、A− 15件、B 39件、C 6件、未評価0件、敵対的検証済み115件のままであり、`wiki/README.md`と一致する。

## [2026-08-09] research | AAP heading DTDと現行header再導入

全115ページの未解決252件を棚卸しし、複数ページへ波及するheading familyと、系譜が切断されていた`header`を優先調査した。AAP Book DTD BK-1の1991年RCS revision 1.1に`h|h1|h2|h3|h4`のheading familyがあることを確認し、`h1`〜`h6`へ集合単位の証拠と5対6の不一致を反映した。

WHATWG公式Git履歴と同時代mailから、旧`header`を`hgroup`へ分離したr3039の直後、r3040が広いpage／section header用途の新`header`を導入したことを確認した。具体的な汎用markup、問題提起、編集者返信、commit差分が再導入理由を直接示すため、`header`をBからAへ変更した。

## [2026-08-09] lint | AAP heading DTDと現行header再導入

変更した7個別ページと関連横断調査を一次資料へ戻って別検証し、AAPの5 identifiersをHTMLの6段階へ個別対応させていないこと、旧`header`と現行`header`を単純な連続系譜にしていないことを確認した。必須見出し、証拠表、未解決点、相対リンク、Markdown whitespace、確度集計を検査し、A 56件、A− 15件、B 38件、C 6件、未評価0件、敵対的検証済み115件が`wiki/README.md`と一致することを確認した。

## [2026-08-09] update | emとciteの1992年提案

1992年11月19日のwww-talkで、Dan Connollyが`HP1`〜`HP5`の代案として`em`, `tt`, `cite`を提案し、Tim Berners-Leeが番号式highlightingを退ける方向へ同意したことを確認した。`em`と`cite`の確認可能なHTML標準化上の提案を1993年草案以前へ遡らせ、解決した初出の問いを両ページの未解決から除いた。提案を実装初出または最終採用決定とは扱っていない。

## [2026-08-09] lint | emとciteの1992年提案

両mail、1993年draft、Texinfo 2.16を再照合し、日付、提案者、literal element names、応答の文脈を確認した。`em`と`cite`の証拠表、未解決点、調査記録を別検証し、確度Aと全体集計は変更しなかった。

## [2026-08-09] update | 1993年HTML DTDのphrase収録日

1993年HTML draftの埋込みDTDがRCS識別子`html.dtd,v 1.3 93/01/06`を持ち、`inline` entityにphrase／font要素群を列挙することをローカル保存資料で確認した。`b`, `i`, `strong`, `code`, `samp`, `kbd`, `var`, `dfn`, `u`のformal DTD収録を1993年1月6日まで遡らせ、解決した草案以前の初出問いを未解決から除いた。RCS日付を実装初出や、それ以前のprototype不在の証拠とは扱っていない。

## [2026-08-09] lint | 1993年HTML DTDのphrase収録日

埋込みDTDのRCS識別子、`inline` entity、個別のliteral namesを再照合し、変更した9ページの状態、導入、証拠表、未解決、調査記録を別検証した。確度と全体集計は変更せず、相対リンク、必須見出し、Markdown whitespaceの整合を確認した。今回の調査全体で未解決項目は252件から240件となった。

## [2026-08-09] update | h1〜h6要素ページの統合

`wiki/elements/h1.md`〜`h6.md`を削除し、共通の歴史、証拠、確度、未解決点を[`hx.md`](elements/h1-h6.md)へ統合した。対象集合は115要素のまま、要素ページは110ファイルとなった。索引、横断調査、AAP調査ノート、運用規約を同時更新した。

## [2026-08-09] lint | h1〜h6要素ページの統合

`hx.md`の必須見出し順、証拠表、相対リンク、完成表示、敵対的検証記録を確認した。旧`h1.md`〜`h6.md`への参照が残っていないこと、110ファイルで115要素を収録し、`hx.md`のA評価を6要素へ計上するとA 56件、A− 15件、B 38件、C 6件になることを確認した。

## [2026-08-09] update | Wiki正本文書の再構成

`wiki/research/`を廃止し、収録対象を`wiki/scope.md`、複数要素が共有する系譜を`wiki/lineages/`へ分離した。旧20文書は、収録範囲1件、横断系譜索引1件、詳細な共有系譜4件へ再構成し、要素固有の内容は個別ページを正本とした。

全110要素ページから`調査記録`と検証日付き状態を削除し、状態を現在の`完成`へ統一した。歴史的主張、証拠表、否定された仮説、未解決点は維持し、調査、訂正、検証の経緯はこの更新記録だけに残す運用へ変更した。

## [2026-08-09] lint | Wiki正本文書の再構成

旧`wiki/research/`への参照、要素ページの`調査記録`、検証日付き状態、必須見出し、相対リンク、要素ページ数、確度集計を検査した。110ファイルで115要素を収録し、A 56件、A− 15件、B 38件、C 6件、未評価0件の集計を維持している。

## [2026-08-09] update | 収録範囲とWiki入口の統合

`wiki/scope.md`を`wiki/README.md`へ統合した。収録対象、抽出規則、境界事例、根拠をREADMEの`収録範囲`へ再構成し、重複していた集計表と一次資料表は各判断へ付けた直接リンクへ置き換えた。

## [2026-08-09] lint | 収録範囲とWiki入口の統合

`scope.md`への参照、README内の対象数と進捗、要素索引、共有系譜、相対リンク、Markdown whitespaceを検査した。110ファイルで115要素を収録し、A 56件、A− 15件、B 38件、C 6件、未評価0件の集計を維持している。

## [2026-08-09] update | AGENTSとWiki入口の責務分離

現在の対象集合、抽出規則、境界事例、最終確認日の正本を`wiki/README.md`へ一本化した。`AGENTS.md`から対象件数と個別の収録判断を削除し、Living Standard変更時の更新規約だけを残した。

## [2026-08-09] lint | AGENTSとWiki入口の責務分離

`AGENTS.md`と`wiki/README.md`の対象集合記述を比較し、現在値がREADME、変更規約がAGENTSに分離されていることと、相対リンク、Markdown whitespaceを確認した。

## [2026-08-09] update | Wiki再構成の敵対的検証対応

共有系譜4文書を集合単位の接続と境界へ縮め、個別要素の現在の意味、確度、証拠表、未解決点の再掲を除いた。`template`の手作業によるWHATWG統合、AAP Book DTD保存コピーの来歴と版制約、`header`再導入直後のr3041／r3043、W3C分岐の削除をWHATWG `hgroup`の断絶としない反例を各要素ページへ反映した。

## [2026-08-09] lint | Wiki再構成の敵対的検証対応

変更した共有系譜と4要素ページを削除前資料へ戻って再照合し、歴史的主張と直接出典の配置、否定された仮説、資料来歴、共有系譜と個別ページの責務分離を確認した。全110要素ページの必須見出し、状態、証拠表、ローカルリンク、Markdown whitespaceを検査し、確度集計がA 56件、A− 15件、B 38件、C 6件、未評価0件のままであることを確認した。

## [2026-08-09] update | 敵対的検証への用語統一

規範、進捗表示、更新記録の用語を「検証」へ統一し、状態値も`要検証`へ変更した。同じ概念を指す過去の更新記録も表記を揃え、旧表現が残っていないこととMarkdown whitespaceを確認した。

## [2026-08-09] research | 確度B以下の未解決事項

確度BまたはCの44要素について、未解決事項のうちHTMLへの導入と直前系譜の確度向上に寄与しうる問いを棚卸しし、当時の仕様、標準化mail、会議録、bug、WHATWG Git履歴、WebKit実装履歴を調査した。

直接の提案、採録、置換、実装由来を確認できた`audio`、`canvas`、`datalist`、`dialog`、`optgroup`、`s`、`source`、`track`をAへ変更した。WAI recommendationsからHTML 4への集合単位の採録を確認できた`fieldset`と`legend`をA−へ変更した。WHATWG source初回check-inまでに現行semantic modelが成立していた`small`をCからBへ変更した。残るB／C要素は、具体的な先行物からの採用因果または導入判断を直接示す一次資料へ到達しなかったため確度を維持した。

## [2026-08-09] update | 未解決事項の調査結果

変更した11個別ページへ、解決した問い、直接史料、確認済み系譜、限定した未解決点、確度判定を反映した。横断系譜のWAI form controls、WHATWG media model、HTML+ `S`境界、Apple WebKit `CANVAS`境界を個別ページと整合させ、`wiki/README.md`の確度集計をA 64件、A− 17件、B 30件、C 4件へ更新した。

## [2026-08-09] lint | 確度B以下の未解決事項

変更した11個別ページを初回調査と分離して一次資料へ戻り、より早い版、競合案、反例、日付、主体、要素名、引用文脈、系譜の各矢印、確度、残る未解決点を再検証した。必須見出し順、空でない証拠表、相対リンク、generic placeholder、Markdown whitespace、全115要素の状態と確度集計を検査し、A 64件、A− 17件、B 30件、C 4件、未評価0件、敵対的検証済み115件が`wiki/README.md`と一致することを確認した。

## [2026-08-09] update | 共有系譜の範囲規約

`wiki/lineages/`の収録対象、接続しない関係、個別要素ページとの責務分離を`AGENTS.md`へ集約し、横断系譜5文書から重複する`範囲`節を削除した。

## [2026-08-09] lint | 共有系譜の範囲規約

`wiki/lineages/`に`範囲`見出しや個別ページとの責務を説明する重複が残っていないこと、削除した収録条件と接続条件が`AGENTS.md`に維持されていること、Markdown whitespaceに不整合がないことを確認した。

## [2026-08-09] update | 共有系譜の範囲規約の検証対応

直前のlint記録後の敵対的検証で、旧`wiki/lineages/README.md`にあった非網羅性、一次資料、代表的な系統という限定が集約時に弱まっていたことを確認した。`AGENTS.md`へ三つの限定を戻し、収録範囲が意図せず広がらないよう訂正した。

## [2026-08-09] lint | 共有系譜の範囲規約の敵対的検証

削除前の5文書と集約後の規約を再比較し、各文書固有の対象がタイトルと本文に残ること、共通する収録条件、除外条件、接続条件、個別ページとの責務分離に欠落や矛盾がないことを確認した。`範囲`見出しと責務説明の重複、相対リンク、Markdown whitespace、進捗集計への影響を検査し、合格とした。

## [2026-08-10] research | figureの未解決事項

2006年WHATWG image-caption議論、HTML+、DocBook、XHTML 2、仕様commit、2009年public-html、W3C Bug 7657／7669、ISSUE-83、変更提案を照合した。Simon PietersによるHTML+ `FIG`／`CAPTION`再利用案、Michel Fortinによる`figure`提案とuse cases、Ian Hicksonによる採用説明を確認し、[`figure`](elements/figure.md)をBからAへ変更した。DocBookとXHTML 2からの別系統の影響は未確認のままとした。

`legend`から`dt`／`dd`への変更は`details`向け構文案の同時適用、`figcaption`への変更は意味、構造、旧IEとの互換性問題を解決するISSUE-83の要求だったことを確認した。[`figcaption`](elements/figcaption.md)と[HTML+共有系譜](lineages/html-plus.md)へ同じ経路を反映し、確度集計をA 65件、A− 17件、B 29件、C 4件へ更新した。

## [2026-08-10] lint | figureとfigcaptionの敵対的検証

初回調査と分離して、2006年4月・5月の原提案、11月の導入説明、仕様commitと親diff、2009年の構文変更メール、Bug 7657／7669、ISSUE-83、2010年の変更提案と仕様commitへ戻り、日付、主体、要素名、引用文脈、各矢印を再照合した。DocBookへの言及がheading処理の別件であること、XHTML 2が`figure`ではなく`object`の子`caption`を定義することも反例として維持した。対象2ページの必須見出し、証拠表、相対リンク、確度、共有系譜、全体集計を検査して合格とし、状態を`完成`とした。

## [2026-08-10] update | 要素ページの状態管理

全110要素ページの状態を本文中の状態行からYAML frontmatterの`status`へ移し、`AGENTS.md`のページ契約と敵対的検証手順を新形式に揃えた。

## [2026-08-10] lint | 要素ページのfrontmatter

全110要素ページでfrontmatterがYAMLとして解釈でき、`status`が許可値であること、旧状態行が残っていないこと、Markdown whitespaceに不整合がないことを確認した。

## [2026-08-10] update | 見出し要素ページの改名

`wiki/elements/hx.md`を`wiki/elements/h1-h6.md`へ改名し、索引、共有系譜、運用規約の参照を更新した。

## [2026-08-10] research | CALS table群の未解決事項

1995年4月21日のDave Raggettによるtable proposalと4月29日のHarvey Binghamによる転載・批評を確認し、`THEAD`、`TBODY`、`TFOOT`がCALSから借用されたことと、CALSの`TGROUP`や局所`COLSPEC`を除いた構造差を特定した。`COL`は7月草案の`COLW`、`HSPEC`、`VSPEC`から9月25日のW3C Working Draftへ機能が再編されたことを確認したが、変更と命名の因果は未解決とした。`COLGROUP`は10月27日のrevision 03が旧`COL` grouping modelの同一幅制約を解くため導入したことを確認した。

OASIS TRP 9501:1995とTM 9502:1995を保存し、CALS table modelの1990年初公開、1993年baseline、三つの同名row group要素の構造と意味を照合した。HTML 3.2が対象5要素を含まないことと、HTML 4のtable DTD blockがRFC 1942のIETF table standardへ集合単位で帰属することも確認した。

## [2026-08-10] update | CALS table群の系譜と確度

`thead`、`tbody`、`tfoot`をA−からAへ、`colgroup`をBからAへ変更し、`col`は具体的祖先との因果が未確認のためBを維持した。5要素ページとCALS共有系譜、raw資料目録、取得元manifest、Wiki進捗を更新し、確度集計をA 69件、A− 14件、B 28件、C 4件とした。

## [2026-08-10] lint | CALS table群の敵対的検証

初回調査と分離してRaggett／Bingham mail、各IETF draft、W3C Working Draft、RFC 1942、OASIS資料、HTML 3.2、HTML 4 DTDと変更付録へ戻り、より早い版、構造差、日付、主体、要素名、各系譜の矢印を再照合した。CALSからの直接採用を三つのrow group要素に限定し、`COL`の機能再編とHTML 4への5要素の採録は因果を確認できる範囲を越えて接続していない。全110要素ページの必須見出し順、空でない証拠表、frontmatter、相対リンク、Markdown whitespace、確度集計、敵対的検証済み115件を検査して合格とし、対象5ページの状態を`完成`とした。

## [2026-08-10] research | HTML+／phrase／国際化群

`abbr`、`q`、`sub`、`sup`、`u`について、HTML+、HTML 3.0、HTML-WG mail、IETF国際化草案の版差、HTML 4草案、HTML 3.2、HTML WG decisionを照合した。HTML 4初期草案の`ACRONYM`からProposed Recommendationの`ABBR`への直接改名、HTML+ DTDの`SUB`／`SUP`をHTML 3.0へ継承する個別意図、国際化草案`-00`での`Q`導入と`-01`での`SUB`／`SUP`追加、2011年のW3C HTML5における`U`再適合化を確認した。

`ABBREV`から`ABBR`への採用、HTML 3.0系列からIETF国際化系列への採用、HTML 3.2での`U`再採録理由、W3C HTML5の決定から現行Living Standardへの編集経路は確認できなかったため接続しない。`abbr`をBからA、`sub`と`sup`をA−からAへ変更し、確度集計をA 72件、A− 12件、B 27件、C 4件とした。

## [2026-08-10] lint | HTML+／phrase／国際化群の敵対的検証

初回調査と分離してHTML+、HTML 3.0、HTML-WG mail、IETF国際化草案`-00`／`-01`、HTML 4 Working Draft／Proposed Recommendation／Recommendation、RFC 1866、HTML 3.2、2011年HTML WG decisionへ戻り、より早い版、別系統、日付、主体、要素名、引用文脈、各矢印を再照合した。`ABBR`と`ACRONYM`の最終的な併存、国際化草案`-00`での`SUB`／`SUP`不在、HTML 3.0系列とIETF系列の未接続、W3C HTML5とLiving Standardの編集経路の欠落を反例と制約へ反映した。

変更した5要素ページの必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespace、全115要素の確度集計を検査し、A 72件、A− 12件、B 27件、C 4件、未評価0件、敵対的検証済み115件が`wiki/README.md`と一致することを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | 初期HTMLのC要素

`address`、`br`、`hr`、`menu`について、CERN実装履歴とsource、Line Mode Browser履歴、www-talk mail、初期DTD、NCSA Mosaic公開記録とchange log、HTML+ draftを照合した。WorldWideWeb editorの`Address` paragraph styleとHTML `ADDRESS` tagの相互変換を実装上の設計モデルとして確認し、`address`をCからBへ変更した。`menu`は1992年の導入区間と初期用例を特定したが導入要求と具体的祖先を確認できず、`br`と`hr`はNCSA MosaicとHTML+の前後・因果関係を確定できないためCを維持した。確度集計をA 72件、A− 12件、B 28件、C 3件へ更新した。

## [2026-08-10] lint | 初期HTMLのC要素の敵対的検証

初回調査と分離して1991年WorldWideWeb change history、保存sourceとdirectory timestamp、Line Mode Browser履歴、1992年のHTML説明・用例・DTD議論、1993年のCERN/IETF draft、NCSA Mosaic公開mailとchange log、HTML+関連mailとdraftへ戻り、より早い出現、競合系列、日付、主体、要素名、引用文脈を再照合した。HTML+からNCSAへの未確認の接続、GUI menuや印刷上のruleからの類似推論、`Address` styleの先行性を系譜へ加えていないことを確認した。必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespace、全115要素の確度集計を検査し、A 72件、A− 12件、B 28件、C 3件、未評価0件、敵対的検証済み115件が`wiki/README.md`と一致することを確認して合格とし、対象4ページの状態を`完成`とした。

## [2026-08-10] research | 初期HTML core

初期HTMLのlist群、document wrapper群、hyperlink群について、1990〜1992年のWorldWideWeb test filesとsource、CERN設計資料、www-talk、Connollyの仕様旧版とDTDを照合した。1990年12月7日のHTTP保存日時を持つWorldWideWeb test fileが、CERN-SGML tagsetから一部のtagをHTMLへ含めたと明記し、`UL`、`OL`、`LI`、`DL`、`DT`、`DD`を同じaccepted tag集合で使うことを確認した。個々のCERN-SGML tagとの対応は列挙されないため、六要素を集合単位のA−とした。

1990年の`OL`はunordered表示で、1991年版では`UL`へ置換され、1992年1月には未使用とされた後、unordered listとの区別のため再収録された。1992年2月11日のHTTP保存日時を持つtest sourceには`MENU`があり、Line Mode Browser 1.2aの導入記録区間より早いため、`menu`の初出時系列を未解決へ戻した。document wrapper群とhyperlink群では、既存ページを上回る具体的祖先または欠落区間の直接史料へ到達せず、確度を維持した。

## [2026-08-10] update | CERN-SGMLと初期HTML list群

`ul`、`ol`、`li`、`dl`、`dt`、`dd`の初出、直前祖先、系譜、証拠、確度、否定された仮説、未解決点を更新し、CERN-SGMLからの集合単位採録を共有系譜へ追加した。六要素をBからA−へ変更し、`menu`には競合する1992年2月11日の保存資料を反映した。確度集計をA 72件、A− 18件、B 22件、C 3件、共有系譜文書を6件へ更新した。

## [2026-08-10] lint | 初期HTML coreの敵対的検証

初回調査と分離して1990年test backup、1991年test fileとparser source、1992年test source、Line Mode Browser change history、CERNの`OL`再導入ノート、www-talk、初期DTDへ戻り、保存日時、要素名、markup、表示実装、版差、引用文脈を再照合した。CERN-SGMLの個別tag対応、Waterlooとの接続、1990年`OL`のordered表示、`MENU`の2月11日実装・公開を断定していないことを確認した。変更した7ページと共有系譜について必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespaceを検査し、A 72件、A− 18件、B 22件、C 3件、未評価0件、敵対的検証済み115件が`wiki/README.md`と一致することを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | WAI／Cougar form群

1995年のRaman／Raggettによるspeech-form作業を伝える同時代mail、1996年3月の`LABEL`／`LGROUP`＋`IS`案、1997年2月・4月のCougar向け`LABEL`／`FIELDSET`＋`CAPTION`案、HTML 4 FPWDを照合した。WAI HTML & CSS Review GroupはFPWD後の1997年9月に設置され、10月のreview reportも三要素の導入を要求していないため、WAI recommendationsを起源とする従来の説明を訂正した。

## [2026-08-10] update | WAI／Cougar form群の系譜と確度

`label`、`fieldset`、`legend`の初出、導入要求、直前祖先、共有系譜、否定された仮説、未解決点を更新し、Cougar概要と1996〜1997年のforms草案をraw資料へ追加した。`label`をBからA、`fieldset`をA−からAへ変更し、改名判断が未確認の`legend`はA−を維持した。確度集計をA 74件、A− 17件、B 21件、C 3件へ更新した。本記録は2026-08-09のWAI form群に関するresearch／update記録の起源説明を訂正する。

## [2026-08-10] lint | WAI／Cougar form群の敵対的検証

初回調査と分離して1996年・1997年のforms草案、Cougar概要、Raman／Dardailler mail、WAI group設置mail、WAI review report、HTML 3.2、HTML 4 FPWDへ戻り、より早い版、日付、主体、要素名、引用文脈、各矢印を再照合した。`LGROUP`から`FIELDSET`への変更理由、`CAPTION`から`LEGEND`への改名判断、特定GUI toolkitを未解決として維持した。対象3ページの必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespace、全115要素の確度集計を検査し、A 74件、A− 17件、B 21件、C 3件、未評価0件、敵対的検証済み115件が`wiki/README.md`と一致することを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | 初期WHATWG sectioning群

`article`、`aside`、`footer`、`nav`、`section`について、2004年8月から2005年4月のWHATWG mail、2004年・2005年の保存草案、後続の編集者説明、既存Web usage調査、XHTML 2との比較を照合した。WHATWG編集者が、当時の語彙集合を典型的siteのmarkup、特に`div`濫用の調査から直接得たと説明したことを確認した。

要素単位では`div class="section"`から`section`、`div class="post"`から`article`への置換要求を確認した。`aside`は2004年の`sidebar`案と役割が連続し、pageのsideだけに用途を限定すると誤解されないため名称を変えたという編集者説明を確認した。`footer`と`nav`は個別markupとの対応が不明で、`navigation`から`nav`への名称変更判断も確認できなかった。

## [2026-08-10] update | 初期WHATWG sectioning群の系譜と確度

5要素の初出、導入要求、直前祖先、証拠、否定された仮説、未解決点を更新し、共通の`div`濫用調査とsectioning modelを共有系譜へ追加した。`article`、`aside`、`section`をBからAへ、`footer`と`nav`をBからA−へ変更し、確度集計をA 77件、A− 19件、B 16件、C 3件、共有系譜文書を7件へ更新した。2005年12月のGoogle調査を導入原因とせず、採用後の対応調査として限定した。

## [2026-08-10] lint | 初期WHATWG sectioning群の敵対的検証

初回調査と分離して2004年8月・11月、2005年4月のWHATWG mail、2004年9月・12月と2005年9月の保存草案、2008年の`aside`名称説明へ戻り、より早い版、日付、主体、旧名、現名、引用文脈、系譜の各矢印を再照合した。2005年Google調査が初期草案より後であること、XHTML 2の`section`／`nl`と出版上のasideに採用因果がないこと、`footer`と`nav`の個別対応および`navigation`から`nav`への名称変更判断が未確認であることを維持した。

対象5ページと共有系譜について必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespaceを検査した。全115要素の確度集計がA 77件、A− 19件、B 16件、C 3件、未評価0件で`wiki/README.md`と一致し、敵対的検証済み115件を維持できることを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | 初期WHATWGのprogressとsmall

`progress`と`small`について、2004年・2005年のWHATWG保存草案、同時代mail、WHATWG仕様commit、HTML 3.0、HTML+、XFormsを照合した。`progress`は2004年12月8日のProgress meters placeholderが2006年3月の正式要素へ具体化されたことを確認した。File upload progress要求はplaceholderより後で、編集者もpage側の機構として退けており、XUL／XAML等についても同じ草案が仕様の独立性を明記するため、直接祖先としなかった。

`small`はHTML 3.0が“New in 3.0”とする一方、導入以前の提案者と具体的祖先は確認できなかった。WHATWGのsemantic reinterpretationは保存草案上2005年4月6日後から13日以前に絞れ、4月12日の編集者回答からsmall printという表示非依存の意味、名称維持、legacy browser互換性という判断を確認した。

## [2026-08-10] update | 初期WHATWG残件の系譜と確度

`progress`の初出、直前祖先、系譜、証拠、否定された仮説、未解決点を更新し、2004年の具体的placeholderからの直接変更を確認できたためBからAへ変更した。`small`は2005年の意味変更時期と理由を更新したが、HTML 3.0への導入経路が未確認なのでBを維持した。新しい共有系譜は追加せず、確度集計をA 78件、A− 19件、B 15件、C 3件へ更新した。

## [2026-08-10] lint | progressとsmallの敵対的検証

初回調査と分離して2004年12月のWHATWG草案、file upload提案と編集者回答、2005年4月6日・13日の保存草案、4月12日の改名提案と編集者回答、HTML 3.0、WHATWG仕様commit、2009年の編集者説明へ戻り、より早い版、日付、主体、要素名、引用文脈、各矢印を再照合した。2009年mailの日付を原文表示の8月12日へ、file uploadへの回答日を12月16日PST（17日UTC）へ訂正した。XUL／XAML／XFormsおよびNetscapeとの未確認接続、placeholderとHTML 3.0より上流の欠落を維持した。

対象2ページについて必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespaceを検査した。全115要素の確度集計がA 78件、A− 19件、B 15件、C 3件、未評価0件で`wiki/README.md`と一致し、敵対的検証済み115件を維持できることを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | Vendor起源群

`iframe`、`noscript`、`wbr`について、Microsoft IE3発表、Netscape manualとHTML reference、W3C frames／scripting草案、IETF HTML-WG mail、WHATWG仕様commit、HTML5 First Public Working Draftを照合した。`iframe`のW3C初出を1997年3月31日へ前倒しし、`FRAME`の属性・navigation modelと`IMG`型の配置から`IFRAME`を設計した要素単位の関係を確認した。`noscript`はNavigator 3.0実装を確認したがW3C案との前後・因果は確定できず、`wbr`は遅くとも1995年4月25日にNetscapeの提案として認識されていたことと、HTML 3.0側の`&cbsp;`／`&shy;`競合案を確認した。

## [2026-08-10] update | Vendor起源群の系譜と確度

3要素の初出、導入要求、直前祖先、系譜、証拠、否定された仮説、未解決点を更新した。`iframe`はW3C草案が具体的な先行要素からの設計を直接示すためBからAへ変更し、`noscript`と`wbr`はvendor実装と標準化案の採録因果が未確認なのでBを維持した。確度集計をA 79件、A− 19件、B 14件、C 3件へ更新した。Microsoftのframes拡張提出集合を`IFRAME`へ対応付けず、Netscape `WBR`からWHATWGへの未確認接続も矢印で補っていない。

## [2026-08-10] lint | Vendor起源群の敵対的検証

初回調査と分離してMicrosoft IE3発表、Netscape manualとHTML reference、1995年HTML-WG mail、W3C frames／scripting草案、WHATWG仕様commit、HTML5 First Public Working Draftへ戻り、より早い出現、競合案、日付、主体、要素名、引用文脈、各矢印を再照合した。Microsoftの提出集合が`IFRAME`を含むとは確認できない一方、W3C草案が`FRAME`と`IMG`からの設計を明示することを確認した。`noscript`のNetscape実装とW3C案の時間順序、Netscape `WBR`からWHATWGへの再採録因果は未解決のまま維持した。HTML5 First Public Working Draftについては、確認できる主張をparserとserializationが`wbr`をempty elementとして扱う範囲へ限定した。

対象3ページについて必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespaceを検査した。全115要素の確度集計がA 79件、A− 19件、B 14件、C 3件、未評価0件で`wiki/README.md`と一致し、敵対的検証済み115件を維持できることを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | 初期document wrapper／metadata群

`head`、`body`、`link`、`style`について、1992年6月から12月のwww-talk、CERN設計ノート、初期DTD、HTML 3.0、IETF HTML style草案、HTML 3.2、HTML 4を照合した。1992年12月4日にConnollyがDTDの`HEAD/BODY`対応完了を報告した中間記録と、12月1日に`BODY`でmixed contentを避ける案を実施したと説明した記録を確認した。`STYLE`の初出を1996年から1995年4月25日のHTML 3.0へ訂正し、11月22日のIETF草案が既存`HEAD`／`LINK`をstyle sheet統合へ再利用した設計を確認した。

## [2026-08-10] update | 初期document wrapper／metadata群

4要素の初出、導入経路、直接祖先、系譜、証拠、否定された仮説、未解決点を更新した。`body`は1992年7月DTDが要素宣言とmixed content回避理由を直接示し、後の`DOCUMENT`からの再採録も当事者mailで確認できるためA−からAへ変更した。`head`は`HEADING`から`HEAD`へのtoken変更、`link`は提案からDTDへの個別採録、`style`はHTML 3.0から後続草案とHTML 4への個別経路が欠けるためA−を維持した。確度集計をA 80件、A− 18件、B 14件、C 3件とした。4要素を単一祖先へ束ねる共有系譜は追加しなかった。

## [2026-08-10] lint | 初期document wrapper／metadata群の敵対的検証

初回調査と分離して1992年6月のDTD議論、7月公開DTD、11月の`HEADING`／`DOCUMENT`再編案と採用支持、12月1日・4日の実装説明、1993年1月6日版DTD、HTML 3.0、1995年11月IETF style草案、HTML 3.2、HTML 4 DTDへ戻り、より早い出現、日付、主体、要素名、引用文脈、各矢印を再照合した。`HEADING`から`HEAD`への名称変更、`LINK`個別の採録、HTML 3.0 `STYLE`から後発草案への採用を未確認として維持し、HTML+ `RENDER`、CSS、DSSSL、Waterloo GML、先行hypertext systemを類似だけで接続していないことを確認した。

対象4ページについて必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespaceを検査した。全115要素の確度集計がA 80件、A− 18件、B 14件、C 3件、未評価0件で`wiki/README.md`と一致し、敵対的検証済み115件を維持できることを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | Ruby群

`ruby`、`rt`、`rp`について、1997年の属性案、W3C Ruby草案とRecommendation、JISとの協調記録、2007年WHATWG mail、2008年仕様commit、HTML WGによる独立corpus追試、Microsoftの適合性記録を照合した。1998年草案がDürstの`RUBY`属性案に大きく着想を得たこと、2007年に編集者が`ruby`のparserとsemanticsを調査して採録予定だったこと、2008年commitがIEの異常系より既存Webの三要素を含む単純構文との互換性を優先したことを確認した。

commit直後のDMOZ由来13万ページ標本は独立追試であり、編集者が使った元corpusではない。W3C RecommendationをHTML5の採用元として編集者が直接参照した記録、commitが例示した異常入力についてIEが生成した正確なDOM tree、1999年のW3C WG会合の詳細議事録は確認できなかった。

## [2026-08-10] update | Ruby群の上流系譜と確度

三要素の導入経路、HTML直前の実利用、Dürst案からW3C要素modelへの上流、JIS X 4052との協調、IE parserとの採否差分、否定された仮説、未解決点を更新した。既存Webの`ruby`、`rt`、`rp`を含む具体的構文からHTML5への因果を要素単位で確認できたため、三要素をA−からAへ変更し、確度集計をA 83件、A− 15件、B 14件、C 3件とした。W3C／XHTML枝からHTML5への未確認接続は矢印で補っていない。

## [2026-08-10] lint | Ruby群の敵対的検証

初回調査と分離して1997年Internet-Draft、1998年W3C草案、2001年Recommendation、2007年WHATWG mail、2008年仕様commitとparser comment、HTML WGの独立corpus追試、導入直後の反対意見、Microsoftの適合性記録へ戻り、日付、主体、要素名、引用文脈、各矢印を再照合した。独立追試を編集者の元corpusとせず、IE実装を直接祖先ではなく比較対象とし、W3C／XHTML枝からHTML5への直接採用を未確認のまま維持した。

対象3ページについて必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespaceを検査した。`h1-h6.md`を6要素として数え、全115要素の確度集計がA 83件、A− 15件、B 14件、C 3件、未評価0件で`wiki/README.md`と一致し、敵対的検証済み115件を維持できることを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | `ins`／`del`のHTML+ document amendments系譜

`ins`と`del`について、1993年HTML+ `ADDED`／`REMOVED`、1994年のRaggett mail、HTML 3.0 DTD履歴とInternet-Draft、W3CのHTML設計声明、HTML 4草案とWorking Group議事録を照合した。HTML+が法案修正の削除／追加表示に両要素を定義し、Raggettが表示用の`S`とlogical useを区別したこと、1995年2月22日に`INS`／`DEL`をlegal documents用に追加したことを確認した。

HTML+からHTML 3.0、後続のW3C HTML設計への継承は集合単位で直接記録される。`ADDED`→`INS`、`REMOVED`→`DEL`の個別改名、Cougar中間版、HTML 4への個別採録、`cite`／`datetime`の由来は未確認とした。HTML+ `CHANGED`、`S`／`STRIKE`、特定の法律編集標準は、類似だけで系譜へ接続していない。

## [2026-08-10] update | `ins`／`del`の上流系譜と確度

2要素の初出を1995年2月22日のDTD更新へ前倒しし、HTML+ `ADDED`／`REMOVED`からの集合単位の継承、HTML 4で版間差分へ広げたmodel、1997年10月23日の`%flow`決議、否定された仮説、未解決点を反映した。具体的な上流要素と集合単位の採用因果を確認できたため、両要素をBからA−へ変更し、確度集計をA 83件、A− 17件、B 12件、C 3件とした。既存のHTML+共有系譜と横断系譜索引を更新し、共有系譜文書数は7件のままとした。

## [2026-08-10] lint | `ins`／`del`の敵対的検証

初回調査と分離してHTML+ document amendmentsとDTD、Raggett mail、HTML 3.0 DTD履歴とInternet-Draft、W3C声明、HTML 4 First Public Working Draft、編集者告知、Working Group議事録、Proposed Recommendationへ戻り、より早い出現、日付、主体、要素名、引用文脈、各矢印を再照合した。集合単位の帰属を個別改名や個別採録とせず、HTML+のrevision history限定、Cougarの欠落、`cite`／`datetime`の未確認由来を維持した。

対象2ページと共有系譜について必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespaceを検査した。`h1-h6.md`を6要素として数え、全115要素の確度集計がA 83件、A− 17件、B 12件、C 3件、未評価0件で`wiki/README.md`と一致し、敵対的検証済み115件を維持できることを確認して合格とし、状態を`完成`とした。

## [2026-08-10] research | `output`のXForms／Web Forms系譜

`output`について、2000年と2001年のXForms草案、2003年9月と12月のHTML forms案、同時代のwww-formsとwww-archive、Web Forms 2.0を照合した。XFormsで確認できる出現を2000年12月19日へ前倒しし、2003年9月のHTML forms案には`output`がなく、12月4日案で追加されたことを確認した。

12月7日の編集者回答は、動的なboilerplate textをdata modelではなくcontentとして扱う境界判断を`output`への批判に答えて示していた。DOM値をscriptで更新する設計は、XFormsの宣言的機能の大半をscriptへ移す仕様全体の方針に位置付けた。9月案から12月案までの要素単位の採用判断と、`value`、`defaultValue`、resetを選んだ個別理由は確認できなかった。

## [2026-08-10] update | `output`の設計変更理由

XFormsで確認できる初期`output`、HTML版の追加時期、contentとdata modelの境界、script中心の設計方針、証拠、未解決点を更新した。XForms機能集合からHTML formsへの因果は確認できるが、`output`単独の採用判断は欠けるため、確度A−と全体集計を維持した。新しい共有系譜とraw資料は追加していない。

## [2026-08-10] lint | `output`の敵対的検証

初回調査と分離して2000年と2001年のXForms草案、2003年9月と12月のHTML forms案、12月5日の批判、7日の編集者回答、8日の再反論、Web Forms 2.0へ戻り、より早い出現、追加時期、主体、要素名、引用文脈、系譜の各矢印を再照合した。動的boilerplate textをcontentとする判断を、XFormsから`output`を採用した判断やHTML固有DOM modelの個別理由へ拡張せず、A−と二つの未解決点を維持した。

対象ページについて必須見出し順、空でない証拠表、frontmatter、相対リンク、generic placeholder、Markdown whitespaceを検査した。`h1-h6.md`を6要素として数え、全115要素の確度集計がA 83件、A− 17件、B 12件、C 3件、未評価0件で`wiki/README.md`と一致し、敵対的検証済み115件を維持できることを確認して合格とし、状態を`完成`とした。

## [2026-08-11] update | Rawリソースの保守ファイル

Rawリソースの取得スクリプトとマニフェストを`raw/`直下へ移し、配置に合わせて`fetch.sh`と`sources.tsv`へ改名した。`raw/README.md`の複数の正本URLは裸URLから明示的なMarkdownリンクへ変更し、GitHub Previewで区切りがリンクに取り込まれる表示崩れを解消した。

## [2026-08-11] schema | LLM Wiki Scheme

`AGENTS.md`をRaw sources、Wiki、Schemeの三層とIngest、Query、Research、Lintの基本操作で再構成した。証拠区分、確度、状態、要素ページ契約、敵対的検証をドメイン固有の制約として維持し、4操作のshortcutを`.agents/skills/`へ追加した。生成Indexの契約と標準ライブラリだけの生成器も追加した。

既存Wikiには移行が必要である。Rawのappend-only化と全根拠資料の収録、任意のsourceページとsynthesis体系、frontmatterの`summary`、`wiki/index.md`への切り替え、`wiki/README.md`の廃止、Scheme適用後の一操作一Log項目への移行は、この変更では実施していない。過去のLogはappend-onlyの履歴として維持する。

## [2026-08-11] lint | 新SchemeへのWiki移行

全110 elementページ、7 lineageページ、収録範囲を新Schemeへ移行した。全ページへ一行summaryと状態を設定し、elementの証拠表を7列へ統一して、現在定義と歴史的根拠の全行へローカルRawと公開一次資料を併記した。収録範囲の正本を`scope.md`へ移し、旧`wiki/README.md`を廃止して生成物`wiki/index.md`へ切り替えた。再利用上の追加解釈を必要とする資料がなかったため、任意のsourceページは作成していない。

Raw manifestを取得種別、保存先、取得元URL、取得日、SHA-256の316件へ移行し、268件のsnapshotを含む全保存対象をmanifestへ対応付けた。既存Rawを置換しない`fetch.sh`へ変更し、保存済みfileのdigestと三つの配布archiveのdigest・展開内容を検証した。壊れていた`datalist` commit、HTML+ DTD／論文、Microsoft DHTML referenceの参照先を回収または訂正した。敵対的検証ではMicrosoft referenceの`IFRAME`がHTML・scriptともIE4からとする記述を確認し、IE3のfloating-frame機能との要素単位の接続を未確認として維持した。

全110 elementページの必須見出し順、空でない7列証拠表、現在定義のRaw・公開定義・確認日、各証拠行のRaw・外部URL・閲覧日、frontmatter、相対リンク、重複title、generic placeholder、孤立snapshot、manifest重複、Index再現性、状態、集計を検査した。取得途中の失敗でRawへ一部だけ追加されないことを回帰テストで確認した。全118ページと115要素を`完成`とし、確度A 83件、A− 17件、B 12件、C 3件、未評価0件が独立集計と生成Indexで一致することを確認した。

## [2026-08-11] schema | 生成Indexの廃止

Wikiの規模とディレクトリ構造では生成Indexが探索のための独立した価値を持たないとの判断に基づき、`wiki/index.md`、生成器、生成器テストを削除した。Indexの表示にだけ使っていた`summary`を全WikiページのfrontmatterとSchemeから削除し、各操作はWiki内検索から関連ページを選ぶ形へ戻した。検証状態を管理する`status`はIndexと独立した既存契約のため維持した。全118ページのstatus、summaryの不在、相対リンクを検査し、Raw検証と残存テストに合格した。

## [2026-08-11] schema | Scope、Raw配置、資料リンク

収録範囲は横断分析ではなくWiki全体の境界を定める正本であるため、`wiki/syntheses/scope.md`から`wiki/scope.md`へ移した。旧`raw/snapshots/`の268資料を個別に見直し、同じ仕様系列、配布物、repository、または保存corpusとして文脈を共有する153件を20の名前付きcollectionへ、単独で成立する115件を`raw/items/{取得元host}/`へ移した。collectionはWHATWG HTML履歴42件、HTML 4履歴18件、初期WWW 15件、WHATWG Web Applications履歴10件、W3C HTML5履歴10件、HTML 3.0 8件、RFC 1942系列6件、client-side image maps 5件、RFC 2070系列5件、HTML style履歴4件、WAI-ARIA 4件、HTML scripting履歴4件、Web Forms 2.0 4件、AAP Book DTD 3件、ruby markup 3件、HTML+ 3件、HTML object履歴3件、MathML 2件、SVG 2件、XForms 2件とした。取得元hostや話題が同じだけの資料はまとめず、配置が採用因果や証拠上の優劣を意味しない境界をSchemeとRaw READMEへ明記した。

全110 elementページの証拠表を`年月日`、`資料`、`種別`、`この資料から確認できる内容`、`閲覧日`の5列へ変更した。ローカルRawを固定された検証対象として資料名へ直接リンクし、その直後に`公開元`を置く表記へ、現在定義は同じ形の`公開版`表記へ統一した。複数資料は保存資料ごとのlink labelと公開元を対応させ、同一配布物の複数ファイルだけは公開元を共有できる契約とした。

全118正本ページ、554証拠行、316 manifest項目、Raw参照、内部相対リンク、frontmatter、必須見出し順、115要素の確度集計を検査した。`raw/fetch.sh`による全digest検証と取得失敗時の原子性テストに合格し、Rawの内容は変更していない。

## [2026-08-11] schema | Wiki README

`wiki/README.md`をWikiの入口と収録範囲の正本として作成し、`wiki/scope.md`の抽出規則、境界事例、確認日、根拠を統合して同ページを削除した。READMEにはWikiの目的と読み方、全110 elementページ、7 lineageページ、Logへの案内を収録し、elementの概要は各ページの`概要`を再利用した。sourceとsynthesisは現存しないことを明記した。

README用のfrontmatter summaryや生成器は追加せず、ページの追加、削除、改名、主要結論の変更時に対応する一行概要を更新する契約とした。全110 elementページ、7 lineageページ、554証拠行、READMEのページ網羅性と概要、必須見出し順、frontmatter、Raw参照、内部相対リンク、重複title、115要素の確度集計を検査した。Raw digest検証と取得失敗時の原子性テストに合格し、Researchへ送る新しい問題はなかった。

## [2026-08-11] lint | READMEの見出し

READMEの一覧見出しを`要素ページ`と`共有系譜ページ`から`要素`と`共有系譜`へ変更し、案内リンクのlabelも`要素`へ揃えた。ページ網羅数、相対リンク、Markdown whitespaceを検査し、内容と構造に影響がないことを確認した。

## [2026-08-11] schema | Raw snapshot配置

資料間の関係を物理配置へ重ねていた名前付きcollectionと`items/`の区分を廃止した。個別に取得した313件のfile snapshotを`raw/{取得元host}/{取得元URLのSHA-256先頭16桁}-{識別可能なファイル名}`へ移し、HTML 4.01 ZIP、GNU Texinfo 2.16 tar、GNU Texinfo 3.7 tarの三つは一体として取得したtreeのためartifact識別子と内部構造を維持した。資料系列はRaw READMEの収録案内とWikiで扱い、取得単位と保存先は`sources.tsv`を正本とするSchemeへ変更した。

316 manifest出力、313 fileのdigest、三つのarchive tree、全ローカルMarkdownリンクを検査し、`raw/fetch.sh`の全Raw検証と取得失敗時の原子性テストに合格した。Rawの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw運用の集約とURL path配置

Rawの運用規則を唯一のSchemeである`AGENTS.md`へ集約し、重複する収録一覧を持っていた`raw/README.md`を削除した。`wiki/sources/`の任意page層も廃止し、資料の書誌情報と証拠上の役割は使用するWikiページ、取得記録は`sources.tsv`を正本とした。取得失敗時の原子性を確認していた単独の回帰テストは、明示指示により削除した。

個別取得した313件のfile snapshotを`raw/{取得元host}/{URL path}`へ移し、末尾`/`は`index.html`、query付き8件はbasenameへ取得元URLのSHA-256先頭16桁を付け、ファイルシステムで安全に扱えないpath文字をpercent-encodeする規則へ変更した。HTML 4.01とGNU Texinfo 2版の三つのarchive treeは配置と内部構造を維持した。316 manifest出力、313 fileのdigest、三つのarchive tree、URL path規則、全ローカルMarkdownリンクを検査し、`raw/fetch.sh`の全Raw検証に合格した。Rawの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Query URLのhash suffix

Query付きURLの衝突回避hashをbasenameのprefixから拡張子直前のsuffixへ変更し、8件のfile snapshot、manifest、Wiki参照を移行した。313 fileのdigest、URL path規則、全ローカルMarkdownリンクを検査し、Rawの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Manifest outputの導出

`raw/sources.tsv`から保存先の`output`列を削除し、取得種別、取得元URL、取得日、内容識別子の4列へ簡素化した。保存先は取得元URLから一意に導出し、同一URLの複数snapshotを許さない契約とした。内容が変わるresourceは公式のversioned URLまたは信頼できるarchive URLを別の取得元として記録する。

URL解析とarchive処理を安全に扱うため、shell scriptをNode標準ライブラリだけの`raw/fetch.mjs`へ置き換えた。fileは導出先へ保存し、archiveはURL path自体をディレクトリとして内部treeを変更せず展開する形に統一して、HTML 4.01 ZIPとGNU Texinfo 2版のtreeおよびWiki参照を移行した。316 manifest項目の4列形式とURL一意性、313 fileのdigest、三つのarchive tree、全119 Markdown fileのローカルリンク、取得器の構文と実行を検査した。明示指示に従い、独立したテストは追加していない。

## [2026-08-11] schema | Query hashの拡張子後suffix

Query付きURLの衝突回避hashを拡張子直前からURL path全体の末尾へ移し、`file.cgi-{hash}`形式へ変更した。8件のfile snapshotとWiki参照を移行し、取得器の構文、313 fileのdigest、旧path参照の不在、全119 Markdown fileのローカルリンクを検査した。Rawの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw manifestの正規化

取得記録の役割を明確にするため、`raw/sources.tsv`を`raw/manifest.tsv`へ改名した。schemaを`url`、`kind`、`retrieved_on`、`sha256`へ変更し、主キーのURLを先頭へ置いてlocaleに依存しない昇順に統一した。SHA-256 algorithmは列名で固定し、各値から重複する`sha256:`prefixを削除した。

取得器、Scheme、Wiki READMEの参照を移行し、manifestのheader、4列形式、316 URLの一意性と順序、313 fileのdigest、三つのarchive tree、全Markdownのローカルリンクを検査した。Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw差分検出のGit集約

Raw内容の変更はGitで検出できるため、`raw/manifest.tsv`から`sha256`列を削除し、`url`、`kind`、`retrieved_on`の3列へ簡素化した。取得器からfileとdownloadのdigest検査を削除し、manifestと保存先の構造検査および欠落resourceの取得だけを担わせた。Query URLの保存先を決定論的に導出するSHA-256 suffixは内容検査と独立しているため維持した。

SchemeではGitをRaw内容差分と展開済みarchive treeの正本とした。manifestのheader、3列形式、316 URLの一意性と順序、313 fileと三つのarchive treeの存在と種別、全Markdownのローカルリンク、取得器の構文と実行を検査した。Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw manifestの2列化

取得日をGitの追加履歴とWiki証拠表の閲覧日に集約し、`raw/manifest.tsv`から`retrieved_on`列を削除した。manifestは主キーで検索と一意性を管理する`url`を先頭、取得処理を指定する`kind`を二列目とするURL昇順の2列構成へ簡素化した。

取得器とSchemeを移行し、manifestのheader、2列形式、316 URLの一意性と順序、313 fileと三つのarchive treeの存在と種別、全Markdownのローカルリンク、取得器の構文と実行を検査した。Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw取得器のNode 24化

取得器の処理内容は実行可能なscript自体を正本とし、`AGENTS.md`から実行コマンドと欠落resource取得の実装説明を削除した。SchemeにはURLからの保存先導出、Rawの不変性、archive treeの維持、一時領域からの追加など、実装を変更しても維持する制約だけを残した。

`raw/fetch.mjs`をNode.js 24.0.0以上の実行へ限定し、`fileURLToPath`を`import.meta.dirname`へ、外部`curl`を標準`fetch`へ置き換えた。Node 24.0では組み込みTypeScriptのtype strippingがstableではなく型検査も行わないため、追加の価値がないTypeScript化は見送った。取得器の構文と実行、標準`fetch`、manifestの316 URLと保存先、全Markdownのローカルリンクを検査した。Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw取得器のNode 24.12化

`raw/fetch.mjs`の実行要件をNode.js 24.12.0以上へ引き上げ、`fs.mkdtempDisposableSync()`と`using`による一時領域の自動破棄へ変更して、手動の`try/finally` cleanupを削除した。Node 24.12でtype strippingはstableになったが型検査は行わず、このscriptではruntime validationを置き換えないためTypeScript化は見送った。`fetch.mjs`は欠落resourceの取得という主操作を直接表し、`sync`のように既存Rawを更新する誤解も生まないためファイル名を維持した。

Node 24.19環境で取得器の構文と実行、一時領域の自動削除、標準`fetch`、manifestの316 URLと保存先、全Markdownのローカルリンクを検査した。Raw snapshotの内容、Scheme、Wikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw取得器のjs extension

人間が追加した`raw/package.json`の`"type": "module"`によりpackage内の`.js`をES moduleとして明示できるため、`raw/fetch.mjs`を`raw/fetch.js`へ改名した。package.jsonのNode.js 24.12系runtime指定とscript自身のversion guardは維持し、追加のpackage設定や依存関係は導入していない。

`node raw/fetch.js`と実行可能fileとしての直接実行、取得器の構文、manifestの316 URLと保存先、全Markdownのローカルリンクを検査した。Raw snapshotの内容、Scheme、Wikiの歴史的結論は変更していない。

## [2026-08-11] schema | URL指定Raw取得と生成index

既存Rawを再取得せず内容差分をGitへ委ねる運用では永続manifestとmanifest materializerの独立した価値が不足するため、`raw/manifest.tsv`と`raw/fetch.js`を削除した。代わりに、LLMが指定した単一URLを決定論的な保存先へ追加する`raw/add.js`を作成した。CLIは通常fileに加えて明示指定されたZIPとtarを扱い、既存targetを拒否し、一時領域で取得とarchive path検査を完了してからRawへ追加する。

Raw rootのtoolingを除く取得元host directory以下の全fileをpath順に列挙する`raw/generate-index.js`と生成物`wiki/raw-index.md`を追加した。indexは各fileへのlinkと、先頭256 KiB内のHTML `title`要素から抽出したdocument titleを持ち、確認できないtitleは推測せず`—`とする。Scheme、Ingest、Lint、READMEをURL指定CLIと生成indexへ移行した。

local HTTP serverを使ったCLIのfile取得、query hash suffix、重複拒否、518 Raw fileと327 document titleの列挙、indexの決定論的再生成、取得器と生成器の構文、全Markdownのローカルリンクを検査した。既存Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] lint | Raw indexのdocument title判定

`raw/generate-index.js`がC sourceやplain-text仕様中のHTML例をdocument titleと誤認していたため、先頭の空白とHTML commentを除いた後にHTML文書の開始を確認してから`title`要素を抽出するよう修正した。`ParseHTML.h`とplain-text仕様4件を`—`へ訂正し、`.txt`として保存されたHTML文書を含む既存322 titleは維持した。

518 Raw fileの網羅、誤認5件の除外、拡張子に依存しないHTML title抽出、indexの決定論的再生成を検査した。Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw indexの生成物表示

`wiki/raw-index.md`は知識ページではなく決定論的な生成indexであるため、`status` frontmatterを削除した。代わりに、`raw/generate-index.js`による生成物であり、直接編集せず再生成することを本文へ明記した。

生成器とSchemeを同期し、518 Raw fileの網羅とindexの決定論的再生成を検査した。Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw indexの導入文簡素化

`wiki/raw-index.md`の生成物に関する注意書きをblockquoteへ変更し、resource件数とtitle抽出規則を説明する導入文を削除した。生成規則の正本はSchemeとscriptに維持した。

518 Raw fileの網羅とindexの決定論的再生成を検査した。Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | Raw toolingの分離

`raw/`をsnapshot専用にするため、CLIを`scripts/add-raw.js`と`scripts/generate-raw-index.js`へ移動し、用途が名前だけで判別できるよう改名した。ES moduleとNode.js 24.12.0以上の実行要件を定義する`package.json`もrepository rootへ移し、各scriptは自身の位置から`raw/`と`wiki/`を解決する構成へ変更した。

URL追加CLIのusageと保存先解決、518 Raw fileの網羅、322 document title、indexの決定論的再生成、Scheme内の現行参照を検査した。Raw snapshotの内容とWikiの歴史的結論は変更していない。

## [2026-08-11] schema | AGENTS契約の簡素化

資料選定の権限を、人間が調査対象と重要な判断を選び、LLMがその範囲内で資料と探索経路を選ぶ契約へ統一した。対象Lintの検査閉包と`合格|修正済み|Research必要`の終了条件、`h1-h6.md`を共通の確度と状態で扱える条件、Log本文のappend-only例外を明文化した。Raw取得の来歴として取得元URL、redirect後の最終URL、取得日をLogへ残す契約を追加し、`scripts/add-raw.js`がそれらを出力するようにした。

elementの概要は各elementページだけを正本とし、`wiki/README.md`の110ページ分の要約をlinkだけへ移行した。lineageとsynthesisの一行概要は横断ページの選択に必要なため維持した。Raw配置規則をRaw source maintenanceへ集約し、Ingestの重複した完了条件とValidationのLint規則再掲を削除した。

対象Lintは、必須項目、READMEの110 elementページ（115要素）と7 lineageページの網羅、117知識ページのタイトル一意性、1,645ローカルMarkdown link、518 Raw fileのindex再現性、script構文、whitespaceを`合格`、契約の矛盾とREADMEの重複を`修正済み`、`Research必要`はなしと確認した。Wikiの歴史的結論とRaw snapshotは変更していない。

## [2026-08-11] schema | READMEの人間向け要素概要

`wiki/README.md`の要素概要は、人間が一覧から調査済みの起点、経路、主要な未解決点を判断して読むページを選ぶために必要だという指示を受け、Page contractへ戻した。同期負担とのtrade-offとして、elementページの`概要`を全文複製せず、確認済みの起点または経路と、解釈を左右する未解決点だけを一行に編集する契約とした。主要な結論の変更で概要が不正確になる場合は同じ変更で更新し、Lintでも正確性を確認する。

全110 elementページの現行`概要`を旧README文と突き合わせて再検討し、73件を索引用に書き直し、既に短く役割を満たす37件を維持した。複数文の`概要`をそのまま再掲した項目はない。対象Lintは、110 element概要と7 lineage概要の網羅、115要素の集計、1,645ローカルMarkdown link、518 Raw fileのindex再現性、script構文、whitespaceを`合格`、人間向け概要を失ったREADME契約を`修正済み`、`Research必要`はなしと確認した。Wikiの歴史的結論とRaw snapshotは変更していない。

## [2026-08-11] query | HTML要素の由来別分類

HTML直前の供給源とさらに上流の祖先を軸に、代表的な現行要素を、既成markup語彙、HTML実験枝、browser実装、既存Web慣習、GUI部品、外部標準、HTML内部再設計の七型へ整理するsynthesisを追加した。分類は排他的な系譜や確度評価ではなく、既存element／lineageページを横断して読むための解釈とし、初期Web基礎語彙など収まりの悪い要素は無理に含めなかった。

対象Lintは、synthesisのfrontmatter、証拠と解釈の分離、READMEのページ案内と概要、Raw参照、内部相対リンク、Markdown whitespace、Raw indexの再現性を`合格`、`修正済み`と`Research必要`はなしと確認した。Raw snapshot、element／lineageの歴史的結論、確度集計は変更していない。

## [2026-08-11] query | 由来別分類の要素展開

由来別分類の代表例欄を、系譜をおおよそ置ける現行要素をできるだけ省略しない一覧へ拡張した。Texinfo系列は構造や意味全体の移植ではなくmacro namesからの命名借用であるため、既成markup語彙の移植から独立させ、分類を八型へ更新した。複数経路を持つ要素は重複掲載し、接続に欠落があるものは表内で注記し、上流を置けない初期Web語彙等は分類外に列挙した。

対象Lintは、synthesisの証拠と解釈の分離、README概要との整合、現行115要素名との照合、Raw参照、内部相対リンク、Markdown whitespace、Raw indexの再現性を`合格`、`修正済み`と`Research必要`はなしと確認した。Raw snapshot、element／lineageの歴史的結論、確度集計は変更していない。

## [2026-08-11] query | 供給源と上流文化の分離

由来別分類で一つの表へ混在していたHTML直前の供給源とさらに上流の文化を、独立した二つの分類へ分離した。供給源表はTexinfo、HTML+、vendor実装、既存Web markup、外部仕様、HTML内部機構等の主経路に現行115要素を一度ずつ配置し、文化表は構造化文書、技術執筆、編集、hypertext、GUI、multimedia、国際化、Web authoring、platform自己修正等への重複所属を許した。

対象Lintは、二分類の役割分離、供給源表による115要素の一意な網羅、文化表と要素索引の語彙照合、synthesisの証拠と解釈の分離、README概要、Raw参照、内部相対リンク、Markdown whitespace、Raw indexの再現性を`合格`、`修正済み`と`Research必要`はなしと確認した。Raw snapshot、element／lineageの歴史的結論、確度集計は変更していない。

## [2026-08-11] query | HTML以前の由来への再編

CERNの初期HTML、HTML+、IETF／W3CのHTML草案、WHATWGを別々の供給源とせず、一続きのHTML内部史として分類を再編した。第一表はAAP／CERN-SGML／CALS、Texinfo、外部仕様、vendor実装、既存Web利用、GUI慣習というHTML以前・HTML外の具体的供給源と、そこまで接続できないHTML内生要素へ115要素を一度ずつ配置した。第二表はHTML内部の標準化段階を除き、文書、技術執筆、編集、hypertext、GUI、multimedia、国際化、Web authoring等の上流文化だけを扱う形へ限定した。

対象Lintは、HTML内部史と外部供給源の分離、供給源表による115要素の一意な網羅、文化表による115要素の網羅、README概要、synthesisの証拠と解釈の分離、Raw参照、内部相対リンク、Markdown whitespace、Raw indexの再現性を`合格`、`修正済み`と`Research必要`はなしと確認した。Raw snapshot、element／lineageの歴史的結論、確度集計は変更していない。

## [2026-08-11] query | HTML内部の直接供給源の併記

HTML以前の由来へ再編する前に用いていた、CERN初期HTML、HTML+、IETF／W3C草案、WHATWG内部変更等を独立した供給源として扱う分類を復元した。既存のHTML外供給源表と上流文化表は維持し、標準化経路、HTML外の祖先、文化的背景をそれぞれ読む三表構成とした。

対象Lintは、三分類の役割分離、直接供給源表とHTML外供給源表による現行115要素の一意な網羅、文化表による115要素の網羅、README概要、synthesisの証拠と解釈の分離、Raw参照、内部相対リンク、Markdown whitespace、Raw indexの再現性を`合格`、`修正済み`と`Research必要`はなしと確認した。Raw snapshot、element／lineageの歴史的結論、確度集計は変更していない。

## [2026-08-11] research | HTML内生要素の外部設計入力

HTML外の具体的供給源へ接続できなかった58要素を、個別elementページと保存済み一次資料へ戻って再調査した。RFC 1942が表設計に既存SGML table、word processor、紙媒体を、HTML+がformsにplatform conventionsとSGML制約、`PRE`にUnix manual pages、文書変更markupに法律文書と法案修正、数学proposalにLaTeXを明記し、W3C forms草案がlabelled groupにmodern UIとspeech navigationを明記することを再確認した。新規Rawは不要だった。

外部の語彙・構造からの採用が確認できる「供給源」と、設計時に明示的に参照されたが採用因果を結べない「設計材料」を分離した。58要素を、外部の設計材料まで確認できる33要素、既存HTML／Web機構から内部派生した12要素、HTML固有の要求・用途まで確認できる7要素、上流の具体物が未確認の6要素へ四分割した。GML、SGML、出版語彙に同名・同用途の候補がある`blockquote`、`body`、`html`、`p`、`title`等は、採用記録がないため供給源へ昇格させなかった。

敵対的検証では、最下段の候補について保存済み初期HTML、HTML+、IETF／W3C草案、RFCを横断検索し、類似語彙からの採用を示す記録と分類を覆す早い系譜がないことを確認した。対象Lintは、直接供給源表とHTML外供給源表による現行115要素の一意な網羅、四分類内の58要素の一意性、文化表による115要素の網羅、README概要、frontmatter、Raw参照、内部相対リンク、Markdown whitespace、Raw indexの518 resourceでの再現性を`合格`、`修正済み`と`Research必要`はなしと確認した。element／lineageの歴史的結論、確度、Raw snapshotは変更していない。

## [2026-08-11] research | HTML内生四分類の上流

HTML内生とした58要素を四分類ごとにさらに遡り、synthesisへ全要素を省略しない上流表を追加した。外部材料群はhypertext、image map、SGML形式化、表、forms、法律・編集、HTTP metadata、embedded content、Unix manual、progress UI、Unicode、style sheet、LaTeXへ分解し、内部派生12要素と固有要求8要素は要素ごとの起点と変更を記録した。保存済みLiving Standardで現行定義が変わらないことも確認した。

Raggettらの回顧から、`a`のanchor／`HREF`がBerners-Lee独自の設計であること、`P`が初期HTMLで用いられたSGML要素に含まれること、`TITLE`がSGML tag-pair構文の例であることを追加した。Raggett本人の回顧とRFC 1942を合わせ、HTML+の単純tableは複雑なCALSの縮小移植ではなく別案として選ばれ、後のHTML 3／RFC段階でCALS要求を取り込んだ二段階として限定した。`html`、`body`はSGML処理を具体的材料とし、`head`はHTML固有のstreaming wrapper要求へ移した結果、四分類は外部材料37、内部派生12、固有要求8、上流未確認1となった。

`blockquote`はConnollyによる1992年12月4日の導入よりDocBook 1.1 betaが後発で、Texinfo、LaTeX、FrameMaker MML、MidasWWWも直接祖先として確定しなかった。Connollyが後に挙げたUsenet news style quotingは有力仮説として残したが、後代の不確かな回想なので系譜へ昇格させなかった。反証探索では、`P`／`TITLE`を特定DTDへ結ぶ同時代資料、HTML+単純tableをCALS派生とする資料、`blockquote`を先行語彙へ結ぶ資料を探し、結論を覆す証拠は得られなかった。

追加Rawは、`https://www.w3.org/People/Raggett/book4/ch02.html`（final同一、retrieved `2026-08-10T23:19:21.237Z`）、`https://www.w3.org/People/Raggett/the-early-days-of-the-Web.html`（final同一、retrieved `2026-08-10T23:19:21.554Z`）、`https://lists.w3.org/Archives/Public/public-webhistory/2017Sep/0000.html`（final同一、retrieved `2026-08-10T23:19:49.964Z`）、`https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html`（final同一、retrieved `2026-08-10T23:26:11.980Z`）の4件である。

対象Lintは、変更した5 elementページの見出し順、frontmatter、証拠表、確度、README概要、synthesisの証拠と解釈、直接供給源表とHTML外供給源表の115要素一意網羅、四分類の58要素一意性、文化表の115要素網羅、ローカルリンク、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、`修正済み`と`Research必要`はなしと確認した。新資料を加えたページは敵対的検証後に`完成`へ戻し、確度は変更していない。

## [2026-08-11] query | 由来別分類synthesisの再構成

追加調査後に重複していた証拠の概説、HTML内生四分類の要約、詳細表を統合し、読み順を「HTML内の直接供給段階」「HTML外まで遡れる供給源」「HTML内で成立した58要素の上流」「さらに上流の文化」へ再構成した。分類軸の違いを冒頭へ集約し、確認済み供給源の根拠を供給源表の直後へ移し、重複していたstyle sheetの行を一行へ整理した。歴史的結論、要素の所属、根拠は変更していない。README概要は新構成とも整合するため変更しなかった。

対象Lintは、frontmatter、章立て、直接供給源表とHTML外供給源表の各115要素一意網羅、HTML内生四分類の37・12・8・1要素と58要素の一意性、文化表の115要素網羅、1,718ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、重複説明と重複行を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 「HTML内で成立」分類の解体

追加調査で58要素の由来を四分できたことを反映し、「HTML内で成立」を共通の由来を表す親分類から外した。HTML外まで遡った分類を、外部の語彙・構造・実装から直接採用した57要素、外部材料をHTML独自の要素へ具体化した37要素、既存HTML／Web機構から内部派生した12要素、HTML固有の要求から新規設計した8要素、上流未確認の1要素という並列の五分類へ変更した。「HTML内で成立」は、後四群が外部からの直接採用ではないという証拠状態の説明にだけ残した。README概要も五分類へ同期した。

対象Lintは、frontmatter、章立て、直接供給段階表と由来表の各115要素一意網羅、五分類の57・37・12・8・1要素の一意性、文化表の115要素網羅、1,718ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、分類階層を`修正済み`、`Research必要`はなしと確認した。歴史的結論、要素の所属、Raw snapshot、確度は変更していない。

## [2026-08-11] query | 二つの供給源表の粒度統一

「HTML内の直接供給段階」と「HTML外まで遡った由来」の間で、分類軸と無関係に生じていた供給源の結合と名称差を解消した。第二表のAAP／CERN-SGML／CALSをAAP／CERN-SGMLとCALS table modelへ、外部仕様の集合を既成のXML vocabularyと外部・隣接仕様の提案へ分離し、GUI分類の名称も統一した。両表に共通する八つのHTML外供給源は、名称、粒度、要素集合を同一にした。HTML内部の供給段階を第二表で上流由来へ組み替える差だけは、分類軸に由来するため維持した。README概要はこの粒度変更後も正確なため変更しなかった。

対象Lintは、共通八分類の要素集合がAAP／CERN-SGML 12、GNU Texinfo 11、CALS table model 3、既成のXML vocabulary 2、browser vendor 8、既存Web 13、外部・隣接仕様7、GUI 1で表間一致すること、合計57要素、両表の115要素一意網羅、1,718ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、表間の不要な粒度差を`修正済み`、`Research必要`はなしと確認した。歴史的結論、要素の所属、Raw snapshot、確度は変更していない。

## [2026-08-11] query | HTML内部史を畳んだ由来別分類

第二表の分類軸から、外部材料の具体化、HTML内部派生、HTML固有要求という関係分類を外し、HTML+、IETF／W3C草案、WHATWG内部変更を経路として畳んだ後に確認できる最上流の供給源、実務、UI、設計要求、実装上の制約で全要素を整理した。既存の具体的供給源群に加え、15の設計入力群、WHATWG `Audio` API、scripting fallback、machine-readable data、画像とcaption、contextual highlight、scalar measurement、8要素の個別要求を起点として独立させた。内部派生12要素は確認済みの経路に従って各起点へ配置し、起点を特定できない`blockquote`だけを例外として明示した。README概要を新しい分類軸へ同期し、歴史的結論、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、synthesisのfrontmatterと章立て、直接供給段階表と内部史を畳んだ由来表による現行115要素の一意な網羅と要素集合の一致、README概要、ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、関係分類と起点分類の混在を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 由来別分類の大分類化

第二表の37の具体的起点を、構造化文書・出版、技術文書・編集・組版、hypertext・navigation・metadata、form・data entry・GUI、browser実装・compound document・multimedia、scripting・style・Web application・component、国際化・文字方向・東アジア組版、既存Web authoring・community・互換性の八大分類へ集約した。具体的な供給源、実務、UI、設計要求、実装上の制約は中央列と第三節に維持し、第四節の文化表と異なり、各要素は導入を最も直接説明する大分類へ一度だけ配置した。起点未特定の`blockquote`は独立行を維持し、README概要を新しい粒度へ同期した。歴史的結論、具体的起点、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、synthesisのfrontmatterと章立て、直接供給段階表12行と内部史を畳んだ由来表9行による現行115要素の一意な網羅と要素集合の一致、README概要、ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、細分化されすぎた第二表を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 由来別分類と根拠の役割分離

第二表の八大分類が上流領域の一覧を兼ねるため、同じ領域を重複所属で再分類していた「さらに上流の文化」表と「分類間の関係」を削除した。第三節は独立した分類ではなく第二表の根拠であることを明確にし、確認済み供給源の概説を移して、HTML外の具体的起点、HTML内部派生の畳み込み、個別の要求・実装上の起点、起点未特定の順に整理した。ページタイトルを「HTML要素の供給段階と由来」へ変更し、冒頭を二軸の説明へ限定してREADME概要を同期した。歴史的結論、第二表の所属、具体的起点、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、synthesisのfrontmatter、見出し構造、直接供給段階表12行と内部史を畳んだ由来表9行による現行115要素の一意な網羅と要素集合の一致、READMEのtitleと概要、ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、重複する文化分類と第三節の役割不明瞭を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 分類表の導入と根拠の統合

第一表と第二表の後に置いていた分類方針と網羅範囲の説明を、各節の冒頭で表の読み方を先に示す導入文へ再構成した。独立していた「第二表の根拠と経路」は第二節へ統合し、HTML外の具体的起点、HTML内部派生の畳み込み、個別の要求・実装上の起点、起点未特定を`2.1`から`2.4`の下位節にした。分類、具体的起点、歴史的結論、README概要、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、synthesisのfrontmatter、二つの大見出しと第二節の下位見出し構造、各表直前の導入、直接供給段階表12行と内部史を畳んだ由来表9行による現行115要素の一意な網羅と要素集合の一致、README概要、ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、表後に残っていた説明と第二・第三節の分離を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 導入経路と由来への用語統一

日本語として馴染みにくかった「供給段階」「供給源」「起点」「畳み込む」を、文脈に応じて「導入経路」「導入元」「由来」「遡る」「前身」「引き継ぐ」へ置き換えた。ページタイトルを「HTML要素の導入経路と由来」とし、第一節を現行HTMLまでの導入経路、第二節をHTML内の変遷を遡った由来として区別した。表見出し、導入文、下位見出し、README概要も同じ語彙へ同期した。分類、要素の所属、具体的な由来、歴史的結論、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、synthesisのfrontmatter、見出しと本文の用語整合、導入経路表12行と由来表9行による現行115要素の一意な網羅と要素集合の一致、READMEのtitleと概要、ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、不自然な比喩語を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] lint | Wiki全体の系譜用語

Raw、生成Raw index、過去Logを除くWikiを対象に、「供給」「起点」「畳み込む」と、同種の比喩として通常文に現れる「上流」を検査した。完全一致する前三語は由来分類synthesisとREADME以外に残っていなかった。29 elementページ、README、共有系譜索引の通常文にあった「上流」を、文脈に応じて「由来」「背景」「以前」「先行する祖先」「さらに遡ると」へ変更した。Schemeがelementページへ要求する`## さらに上流の由来`見出しと、それを案内するREADMEの説明は規範との整合のため維持した。歴史的結論、系譜、確度、状態、Raw snapshotは変更していない。

対象Lintは、変更した29 elementページのfrontmatterと必須見出し順、synthesisの見出しと用語、共有系譜索引、導入経路表12行と由来表9行による現行115要素の一意な網羅と要素集合の一致、README概要、ローカルMarkdown link、Markdown whitespace、Raw indexの522 resourceでの再現性を`合格`、通常文の比喩的な系譜用語を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 導入経路と由来のsynthesisファイル名

内容が由来別分類だけでなくHTMLへの導入経路も扱うことを明示するため、`wiki/syntheses/origin-based-classification.md`を`wiki/syntheses/introduction-paths-and-origins.md`へ改名し、READMEの案内と統合一覧のリンクを更新した。本文、分類、歴史的結論、状態は変更していない。

対象Lintは、新旧path、READMEの参照、synthesisのfrontmatterとtitle、Markdown whitespaceを`合格`、内容より狭かったファイル名を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 導入経路と由来の説明明確化

第二表が八つの由来そのものではなく、複数の具体的な由来を束ねた八つの大分類であることを明記した。冒頭と第二節の見出しでは、HTML内部だけを由来とするように読めた表現を、HTML内部の変遷を通して確認できる文書体系、実務、UI、設計要求、実装上の制約まで遡る表現へ改め、README概要も同期した。タイトル、分類、要素の所属、歴史的結論、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、synthesisのfrontmatter、見出しと本文の用語整合、第二表の八大分類と起点未確認の例外、READMEのtitleと概要、ローカルMarkdown link、Markdown whitespaceを`合格`、説明上の曖昧さを`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 第二表と分類根拠の役割整理

第二表に続く2.1〜2.3が八つの大分類の下位分類ではなく、各要素を第二表へ割り当てた根拠を由来の確認経路ごとに整理する節であることを明記した。単一要素の結論を再掲していた2.4を削除し、第二表の例外行から正本の`blockquote` elementページへリンクした。分類、要素の所属、歴史的結論、README概要、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、synthesisのfrontmatter、第二表と2.1〜2.3の役割、八大分類と`blockquote`の例外、element正本へのリンク、Markdown whitespaceを`合格`、単一要素の重複説明を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | synthesis概要の簡略化

READMEのsynthesis概要から、分類数と由来未確認の個別要素名を削除した。概要は導入経路と由来による分類という二軸、現行115要素の主経路と根拠に限定し、詳細はsynthesis本文を正本とした。本文、分類、歴史的結論、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、READMEのtitle、概要とsynthesis本文の整合、synthesisへのローカルリンク、Markdown whitespaceを`合格`、詳細すぎる概要を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] query | 第二表の根拠節を導入先行へ再構成

第二表の割り当て根拠を示す2.1〜2.3で、表の後にあった分類説明と出典段落を表の前へ移し、各表が何を示すかを先に読める導入へ再構成した。2.1は37要素の外部設計入力、2.2は12要素のHTML内部派生と第二表への配置、2.3は8要素の個別要求について、それぞれ説明と根拠から表へ進む順序に統一した。表、分類、要素の所属、歴史的結論、README概要、Raw snapshot、element／lineageの確度は変更していない。

対象Lintは、synthesisのfrontmatter、2.1〜2.3の説明・根拠・表の順序、表の内容と要素数、ローカルMarkdown link、Markdown whitespaceを`合格`、表後に置かれていた導入相当段落を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] schema | AGENTS.mdとWikiの日本語表現

AGENTS.mdの英語見出しと和英混在の運用用語を自然な日本語へ改め、意味と操作要件を変えずに文を整理した。WikiではREADME、要素ページ、共有系譜、統合ページに繰り返し現れる不自然な直訳調の複合語を日本語へ統一した。Raw索引は生成スクリプトの表題、説明、列名を日本語化して再生成した。歴史的結論、証拠、系譜、確度、状態、Raw資料、過去のログ項目は変更していない。

全体Lintでは、要素ページ115件の行数と必須見出し、フロントマター、ローカルMarkdownリンク、Markdownの空白、READMEのページ網羅性、Raw索引の522資料での再現性を`合格`、不自然な和英混在と生成索引の英語表記を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] schema | 和欧文間の空白とLLM Wiki用語

AGENTS.mdとWiki本文から全角文字と半角英数字の間の空白を除去した。llm-wiki.mdから借用したRaw sources、source of truth、persistent wiki、schema、cross-references、Ingest、Query、Lint、index、log、append-onlyは原表記へ戻し、一般的な対訳がないその他の語はカタカナ表記に統一した。Raw indexの資料行はdocument titleを改変しないため生成値を維持し、過去のlog項目はappend-only契約に従って変更していない。歴史的結論、証拠、系譜、確度、状態、Raw資料は変更していない。

全体Lintでは、AGENTS.mdと知識ページの和欧文間の空白、要素ページ115件の必須見出しとフロントマター、ローカルMarkdownリンク、READMEのページ網羅性、Raw indexの522資料での再現性を`合格`、借用語の意訳と一般的な対訳がない語の英語表記を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] schema | LLM Wiki借用語の表記方針

直前のschema項目に記録した「借用概念を原表記へ戻す」という方針を訂正した。llm-wiki.mdから借用した概念は意味を維持しつつ、Raw sourcesを「Rawソース」、source of truthを「信頼できる唯一の情報源」、persistent wikiを「永続的なWiki」、cross-referencesを「相互参照」、schemaを「スキーマ」、Ingestを「インジェスト」、Queryを「クエリー」、Lintを「リント」、indexを「索引」、logを「ログ」、append-onlyを「追記専用」とした。`schema`などログ形式で意味を持つ操作識別子と、ファイル名、正式名称は変更していない。節番号と見出し本文を区切る空白は適切な表記として維持した。歴史的結論、証拠、系譜、確度、状態、Raw資料は変更していない。

全体リントでは、借用概念の表記、和欧文間の不要な空白、要素ページ115件の必須見出しとフロントマター、ローカルMarkdownリンク、READMEのページ網羅性、Raw索引の522ファイルでの再現性を`合格`、意味を歪める英語表記を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] schema | 操作スキルの日本語表記

`.agents/skills`のインジェスト、クエリー、調査、リント用スキルについて、説明と実行指示をAGENTS.mdの表記方針へ揃えた。Raw sourceは「Rawソース」、health checkは「ヘルスチェック」とし、操作名は「インジェスト」「クエリー」「調査」「リント」に統一した。呼び出し互換性を維持するため、フロントマターの`name`とディレクトリ名は変更していない。歴史的結論、証拠、系譜、確度、状態、Raw資料は変更していない。

対象リントでは、4スキルのフロントマター、`name`とディレクトリ名の一致、AGENTS.mdの操作見出しへの参照、和欧文間の不要な空白、差分形式を`合格`、不自然な英語表記を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] schema | Rawソース用スクリプトの使い方

LLMが実装を読まずにRawソース用スクリプトを実行できるよう、AGENTS.mdへコマンド構文、引数の選び方、既存保存先の扱い、ログへ転記する出力、Raw索引の再生成方法を追加した。実装と既存のRaw保守規約を重複して詳述せず、呼び出し時に必要な契約だけを記録した。既存の操作要件、歴史的結論、証拠、系譜、確度、状態、Raw資料は変更していない。

対象リントでは、二つのコマンド構文と実装の一致、`file|zip|tar`の選択、引数の有無、既存保存先の拒否、標準出力、Raw索引の再現性、Markdown whitespaceを`合格`、不足していた利用契約を`修正済み`、`Research必要`はなしと確認した。

## [2026-08-11] schema | Rawソース保守手順へのCLI契約の統合

独立した「スクリプト」節を削除し、`add-raw.js`の呼び出し方をRawスナップショットの取得手順へ、標準出力と`generate-raw-index.js`の呼び出し方を取得後の記録・再生成手順へ統合した。CLI契約は維持し、操作の順序と各コマンドを使う場面が既存の保守規約から直接読める配置へ改めた。歴史的結論、証拠、系譜、確度、状態、Raw資料は変更していない。

対象リントでは、Rawソース保守手順の順序、二つのコマンド構文と実装の一致、重複記述の除去、Raw索引の再現性、Markdown whitespaceを`合格`、CLI契約の配置を`修正済み`、`Research必要`はなしと確認した。
