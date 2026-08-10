# Rawリソース収録一覧

`raw/`はWikiの主張が遡る不変のスナップショットである。外部URLは来歴と公開アクセスのために保持し、配布アーカイブは展開済みのファイル群として収録する。取得、保存、更新の規約は[AGENTS.md](../AGENTS.md)を参照する。

取得種別、保存先、取得元URL、取得日、SHA-256は[`sources.tsv`](sources.tsv)に記録する。`./raw/fetch.sh`は既存fileのdigestを検証し、欠落した保存先だけを一時領域へ取得して記録済みdigestとの一致後に追加する。既存snapshotを更新、置換、削除しない。

各資料の取得日は`sources.tsv`の行を正本とする。

直下の名前付きディレクトリは、同じ仕様系列、配布物、repository、または保存corpusとして文脈を共有する資料群である。`items/`は単独で成立するmail、issue、記事、vendor資料などを取得元host別に置く。配置は資料の管理単位だけを表し、資料間の採用因果や証拠上の優劣を意味しない。

| ディレクトリ | 仕様・資料 | 正本 | 目的 |
|---|---|---|---|
| `aap-book-dtd/` | AAP Book DTDと保存元README | 各URLは`sources.tsv`に記録 | 初期HTML heading語彙との比較と保存資料の来歴・制約を確認する。 |
| `early-www/` | W3Cが保存する1989〜1992年のWWW設計・実装資料 | 各URLは`sources.tsv`に記録 | 初期HTML要素、WorldWideWeb実装、CERN設計資料を検証する。 |
| `html-living-standard/` | WHATWG HTML Living Standard multipage版 | https://html.spec.whatwg.org/multipage/ | 全115要素の現在の意味と対象集合を確認する共通基準。 |
| `draft-ietf-iiir-html-00/` | 1993年HTML Internet-Draft | https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00 | フレーズ要素の名称がTexinfoに由来することを示す、頻繁に参照される証拠。 |
| `html-2.0/` | HTML 2.0草案およびRFC 1866 | https://www.rfc-editor.org/rfc/rfc1866.html | 標準化前の草案と標準化された仕様を比較する。 |
| `html-plus/` | HTML+および設計論文 | https://www.w3.org/MarkUp/HTMLPlus/htmlplus_1.html | フォーム、表、フレーズマークアップの導入を検証する。 |
| `html-3.0/` | HTML 3.0草案 | https://www.w3.org/MarkUp/html3/ | 論理スタイルと強調関連要素の変遷を検証する。 |
| `html-3.2/` | HTML 3.2 Reference Specification | https://www.w3.org/TR/REC-html32 | HTML+の要素がW3C勧告へ入るまでを追跡する基準。 |
| `html-4-history/` | HTML 4.0のWorking Draft、Proposed Recommendation、公開Recommendation、HTML 4.01公開ページ | 各URLは`sources.tsv`に記録 | HTML 4標準化中の要素・内容model・変更記録を版間比較する。 |
| `cougar-forms/` | Cougar概要および1996〜1997年のform拡張草案 | [Cougar](https://www.w3.org/MarkUp/Cougar/)・[1996-03-08](https://www.w3.org/TR/WD-forms-960308.html)・[1997-02-03](https://www.w3.org/TR/WD-forms-970203.html)・[1997-04-02](https://www.w3.org/TR/WD-forms-970402) | `label`、`fieldset`、`legend`へ至るform labeling／grouping案とHTML 4への採録を検証する。 |
| `html-object-history/` | W3Cの`INSERT`／`OBJECT` Working Drafts | 各URLは`sources.tsv`に記録 | 汎用埋め込み要素の提案と改名を版間比較する。 |
| `html-scripting-history/` | W3CのHTML scripting Working Drafts | 各URLは`sources.tsv`に記録 | `SCRIPT`と`NOSCRIPT`の提案・変更を版間比較する。 |
| `html-style-history/` | IETF／W3CのHTML style草案 | 各URLは`sources.tsv`に記録 | HTMLへのstyle sheet統合案を版間比較する。 |
| `html-4.01/` | HTML 4.01公式ZIP配布物（展開済み） | https://www.w3.org/TR/html401/html40.zip | 仕様全体、DTD、変更点、付属資料を含む。 |
| `cals-table-model/` | OASIS Technical Research Paper 9501:1995およびTechnical Memorandum 9502:1995 | [TRP 9501:1995](https://www.oasis-open.org/specs/a501.htm)・[TM 9502:1995](https://www.oasis-open.org/specs/a502.htm) | CALS table modelの公開時期と`thead`、`tbody`、`tfoot`の構造、および1995年改訂時の意味を検証する。 |
| `client-side-image-maps/` | client-side image mapの提案、IETF草案、RFC 1980 | 各URLは`sources.tsv`に記録 | `map`／`area`の提案から標準化までを検証する。 |
| `rfc1942-html-tables/` | RFC 1942 HTML Tables | https://www.rfc-editor.org/rfc/rfc1942.html | 表関連要素の設計と標準化を検証する。 |
| `rfc2070-html-internationalization/` | RFC 2070 HTML Internationalization | https://www.rfc-editor.org/rfc/rfc2070.html | 国際化と双方向テキスト関連要素を検証する。 |
| `mathml/` | MathML 1.0とMathML Core | 各URLは`sources.tsv`に記録 | HTMLへ統合された`math` rootの定義と版差を確認する。 |
| `ruby-markup/` | W3CのRuby草案とRecommendation | 各URLは`sources.tsv`に記録 | `ruby`、`rt`、`rp`の上流語彙と標準化を検証する。 |
| `svg/` | SVG 1.0とSVG 2 | 各URLは`sources.tsv`に記録 | HTMLへ統合された`svg` rootの定義と版差を確認する。 |
| `texinfo-2.16/` | GNU Texinfo 2.16公式配布物（展開済み） | https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z | 1992年前後のマクロ名を確認する一次配布物。 |
| `texinfo-3.7/` | GNU Texinfo 3.7公式配布物（展開済み） | https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz | 後続版との比較とマクロ名の継続を確認する配布物。 |
| `w3c-html5-history/` | W3C HTML5／HTML 5.1 Working Draftsと差分資料 | 各URLは`sources.tsv`に記録 | WHATWG由来の要素がW3C草案へ入る過程を版間比較する。 |
| `wai-aria/` | XHTML roleとWAI-ARIA草案・Recommendation | 各URLは`sources.tsv`に記録 | landmark roleからHTML要素へ至る上流を確認する。 |
| `web-forms-2/` | HTML forms拡張案とWeb Forms 2.0 | 各URLは`sources.tsv`に記録 | XForms機能をHTML formsへ適応した要素群を検証する。 |
| `whatwg-html-history/` | WHATWG HTML repositoryのcommit、issue、pull request、source snapshot | 各URLは`sources.tsv`に記録 | Living Standardへの要素追加・変更を編集履歴から検証する。 |
| `whatwg-web-apps-history/` | WHATWG Web Applications 1.0の保存版とrevision | 各URLは`sources.tsv`に記録 | 初期WHATWG仕様の要素導入を版間比較する。 |
| `xforms/` | XForms Working DraftとRecommendation | 各URLは`sources.tsv`に記録 | HTML forms要素の上流候補と設計差を確認する。 |
| `items/` | 単独で成立する個別資料115件 | 各URLは`sources.tsv`に記録 | collectionを作る共有文脈のない資料を取得元host別に保持する。 |

## Living Standardの収録範囲

単一ページ版は保存しない。multipage版の入口を`html-living-standard/index.html`へ保存し、`wiki/`が参照するページと、対象集合および境界の検証に必要なページだけを保持する。

要素定義として、`canvas.html`、`edits.html`、`embedded-content.html`、`form-elements.html`、`forms.html`、`grouping-content.html`、`iframe-embed-object.html`、`image-maps.html`、`input.html`、`interactive-elements.html`、`media.html`、`scripting.html`、`sections.html`、`semantics.html`、`tables.html`、`text-level-semantics.html`を保持する。

対象集合と境界の根拠として、`indices.html`、`syntax.html`、`obsolete.html`、`custom-elements.html`を保持する。

各保存ページの正本URLは`https://html.spec.whatwg.org/multipage/{ファイル名}`とする。
