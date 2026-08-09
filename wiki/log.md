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
