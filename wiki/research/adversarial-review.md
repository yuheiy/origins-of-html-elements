# 歴史的結論の敵対的レビュー

## 範囲

2026-08-09時点の`wiki/research/*.md`と`wiki/elements/*.md`を横断し、特に複数ページへ波及する初出、採用因果、系譜の矢印、確度A／A−を再点検した。ローカルの`raw/`にあるHTML 2.0、HTML 3.0、HTML 3.2、HTML 4.01、HTML+、RFC 1942、RFC 2070、Texinfo 2.16／3.7と、各ページが参照するIETF、W3C、WHATWG、WebKit、Appleの一次資料を比較した。閲覧日はすべて2026-08-09である。

このノートは問題を発見した箇所と、反例を探したが既存の限定を覆せなかった範囲を分ける。名称の一致、同じ機能の時系列上の出現、後代の仕様への収録だけでは採用因果としない。

## 要修正1: table row／column grouping 5要素の初出はRFC 1942ではない

### 証拠

IETF Datatrackerの改訂履歴は、`draft-ietf-html-tables-00`を1995-07-07、`-01`を1995-10-03、`-02`を1995-10-10、`-03`を1995-10-27としている。[IETF, “History for draft-ietf-html-tables”](https://datatracker.ietf.org/doc/draft-ietf-html-tables/history/)

1995-07-07の`-00`は、abstractでCALS table modelの一部としてrowsを`thead`、`tbody`、`tfoot`へgroup化する能力を取り込んだと述べ、本文とDTDで三要素を定義する。CALSではrowsをhead、body、footへ分け、HTML proposalも必要時に同じ区分を許すという因果説明もRFC化以前から存在する。[IETF, `draft-ietf-html-tables-00`, 1995-07-07](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00)

同じ`-00`はcolumn width用に`COLW`を定義する。1995-10-03の`-01`ではtable content modelが`caption?, col*, thead?, tfoot?, tbody+`となり、`COL`をcolumn-based defaultsと、一つ以上のcolumnsへ適用するwidth／alignment propertiesの空要素として定義する。したがって`COL`の確認可能な初出は少なくとも`-01`まで前倒しでき、直前版の`COLW`も比較対象になる。[IETF, `draft-ietf-html-tables-01`, 1995-10-03](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-01)

1995-10-27の`-03`はRecent Changesで`COLGROUP`をnew elementとして導入したと明記する。本文は、従来の`COL`では`SPAN`対象の各columnを同じwidthにする必要があるという制約を示し、その制約を避け、group内の各columnへ異なるwidthとalignment propertiesを与えるcontainerとして`COLGROUP`を導入する。これは`COL`による旧group modelから`COLGROUP`への要素単位の設計因果である。[IETF, `draft-ietf-html-tables-03`, 1995-10-27](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-03)

RFC 1942はこれらの改訂系列をRFC化した資料であり、5要素の初出ではない。[RFC 1942, 1996-05](https://www.rfc-editor.org/rfc/rfc1942.html)

### 判定と影響

`wiki/research/cals-table-elements.md`と`wiki/elements/thead.md`、`tbody.md`、`tfoot.md`、`col.md`、`colgroup.md`にある「最初の確認可能な公開仕様はRFC 1942」という記述は反証された。未解決欄にある「RFC 1942より前の初出版」も解決済みに移す必要がある。

三row-group要素のCALS由来という集合単位のA−判定自体は`-00`によってむしろ補強されるが、証拠の起点を1995-07-07へ修正すべきである。

`col.md`はHTML 3.0の`COLSPEC`だけでなく、直前改訂の`COLW`と`-01`の`COL`を比較すべきである。`COLW → COL`という改名理由は今回の本文には明記されないので、diff上の置換だけから確定矢印にはしない。

`colgroup.md`の「HTML直前の祖先は未確認」は再評価が必要である。`-03`は旧`COL` group modelの具体的制約と、その解決としてのnew `COLGROUP`を直接結ぶ。ただし`-03`からHTML 4への個別採録因果とHTML外の具体的祖先はなお欠けるため、総合確度はBを維持するのが安全である。`col`も`COLW`からの採用・改名を述べる資料とHTML 4への個別採録記録がないためBを維持する。

## 要修正2: `span`と`bdo`の初出はRFC 2070より早く、`span`にはi18nとstyleの合流記録がある

### 証拠

1995-08-15の`draft-ietf-html-i18n-00`には`SPAN`と`BDO`がない。1995-09-25の`-01`は、文脈から方向を解決できない文字列のためのnew elementとして`BDO`を導入し、他の要素が適切でない箇所で`LANG`とBIDI attributesを保持するgeneric containerとして`SPAN`を導入すると明記する。本文の例とDTDも両要素を定義する。[IETF, `draft-ietf-html-i18n-00`, 1995-08-15](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00) [IETF, `draft-ietf-html-i18n-01`, 1995-09-25](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)

1995-12-05のMichael J Hannahによる標準化mailは、style draftの新`C`要素を廃し、internationalization proposalですでに定義された`SPAN`へ`STYLE`属性を加えて使うことを明示的に提案する。[Michael J Hannah, “draft-ietf-html-style-00.txt”, 1995-12-05](https://lists.w3.org/Archives/Public/www-style/1995Dec/0039.html)

1996-01-15のW3C Working Draft *HTML3 and Style Sheets*は`DIV`と`SPAN`をbody用のtwo new elementsと説明し、`SPAN`をparagraph内で`EM`等の既存要素が当てはまらない部分へstyleを適用するため定義する。この資料はRFC 2070より早いが、上のmailとi18n draftより後である。[W3C, *HTML3 and Style Sheets*, 1996-01-15](https://www.w3.org/TR/WD-style-960115)

RFC 2070は1997年1月にこの国際化modelをStandards Track RFCとしてまとめたが、両要素の最初の公開導入資料ではない。[RFC 2070, 1997-01](https://www.rfc-editor.org/rfc/rfc2070.html)

### 判定と影響

`wiki/research/internationalization-accessibility-elements.md`と`wiki/elements/span.md`、`bdo.md`のHTMLへの導入日・主体・証拠表は、RFC 2070起点から1995-09-25のi18n draft `-01`起点へ修正すべきである。RFC 2070は後続の標準化・完成版として残す。

`span`を「CSS styling専用に発明した」とする説明は引き続き否定できる。ただし「CSS系統とは無関係」とも書けない。一次資料が`C`を廃して既存i18n `SPAN`をstyle用途にも再利用する合流を示すため、安全な系譜は「i18n draftのgeneric `SPAN` → style proposalによる再利用 → RFC 2070／HTML 4」のように二つの要求を分離して記すべきである。

`span`と`bdo`のA判定は、i18n draftがUnicode bidi機構・属性保持要求と各要素を直接結ぶため維持可能である。問題は確度ではなく、初出をRFCまで遅らせたことと、`span`のstyle系統を落としたことである。

## 要修正3: `canvas`のApple実装からWHATWG採録への矢印とA−は、現在の証拠基準では強すぎる

### 証拠

WebKit履歴とDave Hyattの同時代説明は、AppleがDashboard向けに`CANVAS`と2D drawing APIを実装したこと、SVG/XHTMLではなく短期間で実装できるHTML extensionを選んだことを直接支える。[WebKit Timeline, 2004-05-26](https://trac.webkit.org/timeline?authors=&daysback=4&from=2004-05-30) [Dave Hyatt, “Introducing the Canvas”, 2004-07-05](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005913) [Dave Hyatt, “On Extending HTML”, 2004-07-07](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005928)

一方、Hyattは2004-07-07にAppleのextensionsをWHATWGへ提出したと述べるが、Ian Hicksonは2004-08-13に`canvas` proposalはまだ提出されておらず準備を相談中だと述べる。[Ian Hickson, “[whatwg] Canvas tag”, 2004-08-13](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/043985.html)

2005年のWHATWG snapshotに同名・同種のbitmap canvasがあることと、Appleがその節に関係するIP rightsを表明したことは関係の強い状況証拠だが、Appleの特定実装・提案をWHATWGが採用したという編集記録ではない。[WHATWG, *Web Applications 1.0*, 2005-09-01](https://web.archive.org/web/20050901000000/http://www.whatwg.org/specs/web-apps/2005-09-01/) [Apple IPR letter, 2007-03-14](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/010129.html)

### 判定と影響

`wiki/research/browser-vendor-elements.md`と`wiki/elements/canvas.md`は矛盾を記録しているのに、系譜では`Apple WebKit CANVAS → WHATWG canvas`を確定矢印で結んでいる。これは「未確認の接続は矢印で補わない」という契約と整合しない。

A−は因果関係自体を直接史料で確認できる場合の等級である。現在の資料はApple側の実装理由とWHATWG側の後続仕様をそれぞれ確認するが、採用行為そのものが欠けるため、提案本文、採録commit、編集者mailのいずれかが見つかるまでは矢印を切り、BまたはCへ下げるのが安全である。Apple側の起源候補は強い出発仮説として残せる。

## 要再評価4: `q`、`sub`、`sup`のHTML+からの個別因果は直接確認されていない

### 証拠

HTML+は1993年に`Q`、`SUB`、`SUP`を定義し、HTML 3.0は1995年に同名・近い役割の三要素を“New in 3.0”とする。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML+ math](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html) [HTML 3.0 logical elements](https://www.w3.org/MarkUp/html3/logical.html) [HTML 3.0 font style elements](https://www.w3.org/MarkUp/html3/emphasis.html)

W3CのHTML 3.0保存ページはHTML 3.0全体をearlier work on HTML+に基づくと説明するが、三要素の個別採用を述べない。[W3C, “HTML 3.0 Draft (Expired!) Materials”](https://www.w3.org/MarkUp/html3/)

1995-09-25のi18n draft `-01`は、language-dependent quotation renderingのため`Q`を、各言語のsuperscript／subscript表現のため`SUP`／`SUB`を導入すると明記するが、HTML+から採用したとは述べない。[IETF, `draft-ietf-html-i18n-01`, 1995-09-25](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01)

### 判定と影響

`wiki/research/html-plus-elements.md`と`wiki/elements/q.md`、`sub.md`、`sup.md`は、同名・近い役割の連続と集合レベルの「HTML+に基づく」という後代説明から、HTML+を個別の直前祖先として確定矢印で結びAとしている。これは個別因果を名称・機能の一致だけで補わないという基準に対して強すぎる。

HTML+からHTML 3.0への集合レベルの関係を採るならA−が上限であり、確認済み区間と欠落を明記すべきである。より厳密には、1995年i18n draftが示す導入理由までをBとして、HTML+との接続を未確認にする選択もある。少なくとも現状のAと無注記の矢印は維持できない。

## 要再評価5: `abbr`の改名と`s`の再採録は未確認区間を矢印で結んでいる

### 証拠

HTML+とHTML 3.0は`ABBREV`を定義し、HTML 4は`ABBR`をHTML 3.2以後のnew elementとして定義する。しかし確認した一次資料は`ABBREV`を`ABBR`へ改名・採用したとは述べず、改名理由も記録しない。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML 3.0 logical elements](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

HTML+とHTML 3.0の`S`はpresentational strike-throughだが、HTML 3.2は`S`ではなく`STRIKE`を収録し、HTML 4でdeprecatedな`S`がnew elementとして再登場する。HTML 4がHTML+／HTML 3.0の`S`を再採録したという決定記録は確認されていない。[HTML+ presentation-only tags](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_16.html) [HTML 3.0 font style elements](https://www.w3.org/MarkUp/html3/emphasis.html) [HTML 3.2](https://www.w3.org/TR/REC-html32) [HTML 4.01 changes](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.1)

### 判定と影響

`wiki/research/html-plus-elements.md`は両方の欠落を認めながら、`HTML+ ABBREV → HTML 3.0 ABBREV → HTML 4 ABBR`と`HTML+ S → HTML 3.0 S → [欠落] → HTML 4 S`を「安全な系譜」としA−にしている。A−も因果関係そのものの直接証拠を要するため、未確認区間を矢印で結べない。

`abbr`は少なくともB以下へ再判定し、`ABBREV`と`ABBR`を未確認接続として分離すべきである。`s`もHTML 4での再採録因果が見つかるまではA−を外し、BまたはCへ再判定すべきである。

## 追加訂正: `ins`と`del`はHTML 3.0に先行例がある

HTML 3.0の“Information Type Elements”は`INS`をinserted text、`DEL`をdeleted text用の“New in 3.0”要素として定義する。HTML 4は両者をHTML 3.2からのnew elementsとして標準化するが、確認した資料はHTML 3.0案からの個別採用を述べない。このため初出をHTML 3.0へ前倒しし、HTML 3.0からHTML 4への未確認区間は矢印で結ばず、導入目的を確認できるBを維持した。[HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 4.0 changes](https://www.w3.org/TR/REC-html40-971218/appendix/changes.html#h-A.1.1)

## 反例を探したが既存の限定を覆せなかった範囲

- 初期heading群: 1992年CERN公式`HTML Tags`は`H1`〜`H6`をCERN SGML guideから保持し、その定義がAAP tag setに由来すると明記する。`h1`〜`h6`のA判定を覆す反例は確認しなかった。[Tim Berners-Lee, *HTML Tags*, 1992 snapshot](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)
- Texinfo phrase群: 1993年HTML draftの集合由来記述と、ローカルのGNU Texinfo 2.16／3.7で`@t`、`@b`、`@i`、`@emph`、`@strong`、`@code`、`@samp`、`@kbd`、`@var`、`@dfn`、`@cite`を再確認した。underline用`@u`を確認できないという既存の限定は妥当であり、`u`だけを個別対応させる反例は見つからなかった。[IETF, `draft-ietf-iiir-html-00`, 1993-06](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) [GNU Texinfo 2.16](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z) [GNU Texinfo 3.7](https://ftp.gnu.org/gnu/texinfo/texinfo37.tar-gz)
- HTML+のforms／basic tables: RFC 1866がforms materialをHTML+から導出したこと、RFC 1942がtable model全体をHTML+とinitial HTML 3 draftから発展させたことを再確認した。`form`、`input`、`select`、`option`、`textarea`とbasic table 5要素の既存結論を覆す反例は確認しなかった。[RFC 1866 §12](https://www.rfc-editor.org/rfc/rfc1866.html#section-12) [RFC 1942](https://www.rfc-editor.org/rfc/rfc1942.html)
- `pre`: HTML+自身が、preformatted textはHTMLでcomputer output表示として始まり、Unix manual pagesのhypertext化要求がcharacter emphasisとembedded linksへの再設計を強いたと説明する。既存ページがこの記述を後代の用途類似ではなく当事者資料として限定している点は妥当だった。[HTML+ “Literal and Preformatted Text”, 1993-11-08](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)
- CALS由来の範囲: 1995年table draft `-00`もRFC 1942も、CALSのhead/body/foot groupingとHTML row groupsの因果を明記する一方、CALS側の同名要素や`COL`／`COLGROUP`要素そのものの借用は示さない。既存ノートが名称借用まで広げない限定は維持すべきである。
- `hgroup`: W3C HTML WGは2013年にW3C HTML 5系から`hgroup`を削除したが、これはWHATWG Living Standard上の2009年要素が消滅し2022年に同名要素として再導入された証拠ではない。W3C分岐の削除をWHATWG系譜の断絶へ誤用しない。[W3C HTML WG decision, 2013-04-02](https://lists.w3.org/Archives/Public/public-html-admin/2013Apr/0003.html)

## 優先順位

1. table 5要素の初出と未解決欄を改訂系列に合わせて直し、`colgroup`の直前設計を補う（row-group 3要素はA−、`col`／`colgroup`はBを維持）。
2. `span`／`bdo`の導入をi18n draft `-01`へ前倒しし、`span`へstyle系統との合流を追加する。
3. `canvas`の未確認接続から矢印を外し、確度を再判定する。
4. `q`／`sub`／`sup`の個別因果をAからA−以下へ再判定する。
5. `abbr`の改名と`s`の再採録の未確認矢印を外し、A−をB以下へ再判定する。

これらの歴史的結論、系譜、確度を変更するページは、既存の敵対的レビュー済み表示がある場合、その表示を失効させて再レビューする必要がある。
