# Rawリソース収録一覧

`raw/`は外部資料の検証用スナップショットであり、外部の正式URLを正本とする。配布アーカイブは展開済みのファイル群として収録する。取得、保存、更新の規約は[AGENTS.md](../AGENTS.md)を参照する。

取得元と保存先は[`tools/raw-sources.tsv`](../tools/raw-sources.tsv)に記録する。`./tools/fetch-raw.sh`を実行すると各URLの最新版を一時領域へ取得し、すべて成功した場合だけ`raw/`へ反映する。

既存資料の取得日は2026-08-09である。

| ディレクトリ | 仕様・資料 | 正本 | 目的 |
|---|---|---|---|
| `html-living-standard/` | WHATWG HTML Living Standard multipage版 | https://html.spec.whatwg.org/multipage/ | 全115要素の現在の意味と対象集合を確認する共通基準。 |
| `draft-ietf-iiir-html-00/` | 1993年HTML Internet-Draft | https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00 | フレーズ要素の名称がTexinfoに由来することを示す、頻繁に参照される証拠。 |
| `html-1993/` | Hypertext Markup Language (HTML) | https://www.w3.org/MarkUp/html-spec/html-spec.html | 初期HTMLの要素集合と意味を確認する基準。 |
| `html-2.0/` | HTML 2.0草案およびRFC 1866 | https://www.rfc-editor.org/rfc/rfc1866.html | 標準化前の草案と標準化された仕様を比較する。 |
| `html-plus/` | HTML+および設計論文 | https://www.w3.org/MarkUp/HTMLPlus/htmlplus_1.html | フォーム、表、フレーズマークアップの導入を検証する。 |
| `html-3.0/` | HTML 3.0草案 | https://www.w3.org/MarkUp/html3/ | 論理スタイルと強調関連要素の変遷を検証する。 |
| `html-3.2/` | HTML 3.2 Reference Specification | https://www.w3.org/TR/REC-html32 | HTML+の要素がW3C勧告へ入るまでを追跡する基準。 |
| `html-4.01/` | HTML 4.01公式ZIP配布物（展開済み） | https://www.w3.org/TR/html401/html40.zip | 仕様全体、DTD、変更点、付属資料を含む。 |
| `rfc1942-html-tables/` | RFC 1942 HTML Tables | https://www.rfc-editor.org/rfc/rfc1942.html | 表関連要素の設計と標準化を検証する。 |
| `rfc2070-html-internationalization/` | RFC 2070 HTML Internationalization | https://www.rfc-editor.org/rfc/rfc2070.html | 国際化と双方向テキスト関連要素を検証する。 |
| `texinfo-2.16/` | GNU Texinfo 2.16公式配布物（展開済み） | https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z | 1992年前後のマクロ名を確認する一次配布物。 |
| `texinfo-3.7/` | GNU Texinfo 3.7公式配布物（展開済み） | https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz | 後続版との比較とマクロ名の継続を確認する配布物。 |

## Living Standardの収録範囲

単一ページ版は保存しない。multipage版の入口を`html-living-standard/index.html`へ保存し、`wiki/`が参照するページと、対象集合および境界の検証に必要なページだけを保持する。

要素定義として、`canvas.html`、`edits.html`、`embedded-content.html`、`form-elements.html`、`forms.html`、`grouping-content.html`、`iframe-embed-object.html`、`image-maps.html`、`input.html`、`interactive-elements.html`、`media.html`、`scripting.html`、`sections.html`、`semantics.html`、`tables.html`、`text-level-semantics.html`を保持する。

対象集合と境界の根拠として、`indices.html`、`syntax.html`、`obsolete.html`、`custom-elements.html`を保持する。

各保存ページの正本URLは`https://html.spec.whatwg.org/multipage/{ファイル名}`とする。
