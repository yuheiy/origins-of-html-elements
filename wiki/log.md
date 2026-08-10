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
