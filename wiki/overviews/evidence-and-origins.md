---
status: 完成
---

# HTML要素の由来を支える証拠

HTML外の先行物、既存Web、実装、UI慣習、標準化要求が、どの範囲で要素の由来を支えるかを横断的に比較する。個別の歴史的結論は要素ページ、複数要素を結ぶ因果は共有系譜ページを正本とする。

## 設計背景

この節ではHTML+、IETF／W3C草案、WHATWG内部変更を独立した起源とせず、確認できる設計背景を整理する。現行115要素のすべてに、HTML以前またはHTML内部の先行語彙、設計材料、要求、実装、慣習のいずれかに関する史料がある。ただし、史料が設計時の参照や採用因果を示さず、導入後の互換性経路または同名の先行語彙だけを示す場合も含むため、この数を起源判明数として使えない。従来唯一の例外としていた`blockquote`には、HTMLより早いファイル時刻を持つDocBook 1.0の同名要素と、導入者が直前にDocBook語彙を検討した記録が見つかったが、DocBookからの採用因果はUsenet説と競合して未確認のままである。八つの大分類は探索用の主題索引であり、複数の背景を持つ要素も便宜上一度だけ置く。

下位節では表に示した設計背景と、HTML内部の派生を確認した根拠を詳述する。矢印は個別ページで確認できる範囲だけを要約し、外部材料から要素への採用が未確認な箇所を直接祖先として扱わない。

| 設計背景の主題分類 | 関連が確認できる先行語彙・材料・要求・実装・慣習 | 現行要素 |
|---|---|---|
| 構造化文書・出版 | AAP／CERN-SGMLの見出し・リスト語彙、CALS行グループ、SGMLによる文書形式化、表・出版ツール、WorldWideWebエディターのAddressスタイル、クラス付き文書区分、逐次受信中のヘッダー境界 | `address`、`body`、`caption`、`col`、`colgroup`、`dd`、`div`、`dl`、`dt`、`h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`head`、`html`、`li`、`ol`、`p`、`table`、`tbody`、`td`、`tfoot`、`th`、`thead`、`title`、`tr`、`ul` |
| 技術文書・編集・組版 | GNU Texinfoのマクロ名、DocBookの同名語彙候補、端末／Unixマニュアル、法律・編集実務、LaTeXと数式組版、略語マークアップと発音要件、文脈依存の強調 | `abbr`、`b`、`blockquote`、`cite`、`code`、`del`、`dfn`、`em`、`i`、`ins`、`kbd`、`mark`、`pre`、`s`、`samp`、`small`、`strong`、`sub`、`sup`、`u`、`var` |
| ハイパーテキスト・ナビゲーション・メタデータ | WWWのハイパーテキストモデル、イメージマップ運用、HTTPメタデータ、ノード単位の関係、簡潔な選択肢リスト | `a`、`area`、`base`、`link`、`map`、`menu`、`meta` |
| フォーム・データ入力・GUI | デスクトップのフォームUI、フォームのアクセシビリティと階層UI、SGML属性値の上限、開閉UI、進捗バー、スカラー量の測定、XForms／Open UI、既存Webのダイアログ実装 | `button`、`datalist`、`details`、`dialog`、`fieldset`、`form`、`input`、`label`、`legend`、`meter`、`optgroup`、`option`、`output`、`progress`、`select`、`selectedcontent`、`summary`、`textarea` |
| ブラウザー実装・複合文書・マルチメディア | ブラウザーベンダーの画像・埋め込み・フレーム・メディア実装、既成のMathML／SVG語彙、ベンダー別埋め込み内容、WHATWG `Audio`API、時間指定テキスト、レスポンシブ画像実装 | `audio`、`canvas`、`embed`、`iframe`、`img`、`math`、`object`、`picture`、`source`、`svg`、`track`、`video` |
| スクリプティング・スタイル・Webアプリケーション・コンポーネント | ブラウザーベンダーのクライアント側スクリプティング、非対応時の代替内容、スタイルシート、機械可読データ、Web Componentsのテンプレート／スロット | `data`、`noscript`、`script`、`slot`、`style`、`template`、`time` |
| 国際化・文字方向・東アジア組版 | Unicode国際化、双方向文字関連仕様、ルビの既存Web実装、言語依存の引用符 | `bdi`、`bdo`、`q`、`rp`、`rt`、`ruby`、`span` |
| 既存Web制作・コミュニティ・互換性 | 実サイトのセクショニングマークアップ、画像とキャプションを一組にするマークアップ・表示慣習、ARIA役割、コミュニティ提案、ポリフィル、初期Webの意味を持つ改行とハイフン列による区切り、ブラウザー互換マークアップ | `article`、`aside`、`br`、`figcaption`、`figure`、`footer`、`header`、`hgroup`、`hr`、`main`、`nav`、`search`、`section`、`wbr` |

`figure`と`figcaption`は、HTML標準化の直接の材料を優先して「既存Web制作・コミュニティ・互換性」へ一度だけ置いた。ただしFortinは、科学・技術出版物で画像とキャプションをfigureとして扱う慣習が`figure`という提案名の理由だと明記しているため、「構造化文書・出版」も`figure`の意味と名称、`figcaption`のキャプション概念の上流背景である。初期HTMLではワードプロセッサー、LaTeX、SGMLツールからの変換が一般的な伝達路となり、2000年代の個別例ではMediaWiki、ニュース発行テンプレート、学術誌の複数形式出版工程が図とキャプションをWebへ出力した。各個別システムが先行する出版・SGML語彙を参照した因果は未確認である。[HTML+解説](../../raw/www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)（[公開元](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)） [WHATWGフィードバック総括](../../raw/lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)（[公開元](https://lists.w3.org/Archives/Public/public-whatwg-archive/2006Nov/0422.html)） [`figure`要素ページ](../elements/figure.md)

以下の三節は八つの大分類の下位分類ではない。第二表への割り当て根拠を、背景の確認経路ごとに整理する。

### HTML外に確認できる先行物と設計材料

AAP／CERN-SGMLから見出し・リスト群、Texinfoのマクロ名から句要素群、CALSから表行グループ群へ至る関係は、[共有系譜索引](../lineages/README.md)、[CERN-SGMLリスト群](../lineages/cern-sgml-lists.md)、[Texinfo](../lineages/texinfo.md)、[CALS行グループ](../lineages/table-row-groups.md)で確認している。Texinfoは構造や意味の移植ではなく命名借用であるため、構造語彙の採用とは分ける。[AAP Book DTD](../../raw/ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)（[公開元](https://ftp.sunet.se/mirror/archive/ftp.sunet.se/pub/text-processing/sgml/AAP/aapbook.dtd)）、[1993年HTML Internet-Draft](../../raw/www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)）、[IETF 表草案](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-tables-00.txt)）、[GNU Texinfo 2.16](../../raw/ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z/texinfo-2.16/texinfo2.texi)（[公開元](https://ftp.gnu.org/gnu/texinfo/texinfo-2_16.tar_z)）

HTML+はフォーム、単純表、図、文書修正機能、クライアント側イメージマップを後続HTMLへ渡した。ほかに、ブラウザー実装から`img`、`embed`、`canvas`、`video`、既存Web／ARIA／コミュニティ実装から`main`、`ruby`群、GUI慣習から`details`、外部仕様から`bdo`、`output`等へ至る枝を確認している。共有する経路は[HTML+](../lineages/README.md)、[メディア要素](../lineages/media-elements.md)、[ARIAランドマーク](../lineages/aria-landmarks.md)、[ルビ](../lineages/ruby.md)、[開閉UI](../lineages/details-summary.md)、[外来要素](../lineages/foreign-content.md)へ分けた。`picture`は2007年の同名案と`video`型構造を合成したコミュニティ提案へ、独立した`srcset`と既存`img`の処理を統合した複合経路であり、[レスポンシブ画像の共有系譜](../lineages/responsive-images.md)で扱う。`slot`は実在するWeb ComponentsライブラリとGUI継承モデルの調査から、Shadow DOM v0のセレクター式挿入点を名前付き割り当てへ再設計した。[Andreessenの`IMG`提案](../../raw/1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)）、[WebKit `CANVAS`実装](../../raw/github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)（[公開元](https://github.com/WebKit/WebKit/commit/048bd7c65c2595ed5c905c4e35431aec5d85897c)）、[`main`提案](../../raw/lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)）、[Lawsonの`picture`草案](../../raw/brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/__index)（[公開元](https://brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/)）、[名前付きスロット提案](../../raw/lists.w3.org/Archives/Public/public-webapps/2015AprJun/0184.html)（[公開元](https://lists.w3.org/Archives/Public/public-webapps/2015AprJun/0184.html)）、[Apple HIGの開閉用の三角形](../../raw/web.archive.org/web/20060701000000id_/http%3A/developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)（[公開元](https://web.archive.org/web/20060701000000id_/http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/XHIGControls/chapter_18_section_7.html)）、[RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）、[XForms UI](../../raw/www.w3.org/TR/2000/WD-xforms-20001219/ui.html)（[公開元](https://www.w3.org/TR/2000/WD-xforms-20001219/ui.html)）

直接採用まで確認できないHTML外の先行語彙または設計入力は、次の16群に分かれる。

次表の38要素の根拠は、ハイパーテキストについては[Raggettらの回顧](../../raw/www.w3.org/People/Raggett/book4/ch02.html)（[公開元](https://www.w3.org/People/Raggett/book4/ch02.html)）、イメージマップについては[Seidmanの提案](../../raw/archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)（[公開元](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)）、SGML形式化については[ConnollyのDTD議論](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)）、表については[技術出版関係者への要求照会](../../raw/1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)（[公開元](http://1997.webhistory.org/www.lists/www-talk.1993q2/0271.html)）、[最初のHTML+表提案](../../raw/ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/WWW-TALK/www-talk-1993q2.messages/548.html)）、[CALSとの対応と差異](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q2.messages/0432.html)）、[RFC 1942](../../raw/www.rfc-editor.org/rfc/rfc1942.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc1942.html)）に置く。DocBook候補については、[DocBook 1.0 DTD](../../raw/www.oasis-open.org/docbook/sgml/1.0/docbk10.zip/docbook.dtd)（[公開元](https://www.oasis-open.org/docbook/sgml/1.0/docbk10.zip)）、[導入直前のDocBook検討](../../raw/lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html)）、[導入者を含む再探索](../../raw/lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)（[公開元](https://lists.w3.org/Archives/Public/www-archive/2017Aug/0006.html)）を対応させる。

フォームとSGML制約は[HTML+ Forms](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_41.html)）と[W3Cフォーム草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)）、編集・技術文書・数式は[HTML+ Amendments](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)）、[HTML+ Preformatted Text](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_44.html)）、[HTML+ Mathematics](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_45.html)）、[HTML 3数学案の設計議論](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-archive.messages/361.html)）が直接説明する。略語と文書区分については、[`ACRONYM`の一般化要求](../../raw/lists.w3.org/Archives/Public/www-html-editor/1997OctDec/0003.html)（[公開元](https://lists.w3.org/Archives/Public/www-html-editor/1997OctDec/0003.html)）と[`DIV`競合案の整理](../../raw/ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0681.html)（[公開元](https://ksi.cpsc.ucalgary.ca/archives/HTML-WG/html-wg-95q1.messages/0681.html)）までを確認し、採択因果や外部DTDとの接続は保留している。HTTP、オブジェクト、Unicode、スタイル、進捗の背景はそれぞれ[`META`提案](../../raw/lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)（[公開元](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)）、[`INSERT`草案](../../raw/www.w3.org/TR/WD-insert-951220.html)（[公開元](https://www.w3.org/TR/WD-insert-951220.html)）、[RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）、[HTML 3.0 document head](../../raw/www.w3.org/MarkUp/html3/dochead.html)（[公開元](https://www.w3.org/MarkUp/html3/dochead.html)）、[`progress`の目的に関する説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-August/064204.html)）で確認できる。

| 由来のまとまり | 確認できる内容 | 現行要素 |
|---|---|---|
| DocBookの同名語彙候補 | HTMLより早いファイル時刻を持つDocBook 1.0の`BlockQuote`と、導入者が直前にDocBook語彙をHTMLの候補として検討した事実。要素単位の採用記録はなく、後代のUsenet説と競合する | `blockquote` |
| WWWのハイパーテキストモデル | ノード間リンクを文中へ置くBerners-Lee独自のアンカー／`HREF`設計と、取得URLを失った文書の相対URL基準 | `a`、`base` |
| イメージマップ運用 | サーバー側イメージマップとHTML+の形状付きリンクの制約を、クライアント側の領域と行き先へ分離 | `area`、`map` |
| SGMLによるHTML文書の形式化 | SGMLパーサー用の文書要素、混在内容を避ける本文、SGML由来と回顧される段落、SGMLタグ対構文を用いたタイトル。個別の元DTDは不明 | `html`、`body`、`p`、`title` |
| 技術出版とCALS交換要件 | 出版関係者へ要求を問い、HTML+内で新設した単純な基本表モデル。後の列・行・セルモデルはCALSの交換要件を部分的に取り込んだが、CALSの縮小移植ではない | `table`、`caption`、`tr`、`th`、`td`、`col`、`colgroup` |
| 業務用ハイパーテキストとフォームUI | HyperCardに触発されたProtek Pilotの豊富なフォーム、初期Web検索、プラットフォーム上のフォーカス移動、テキスト欄、チェックボックス、ラジオボタン、一つ選択・複数選択メニューをHTML+のフォーム群へ組み替えた経路 | `form`、`input`、`select`、`option` |
| フォームのアクセシビリティと階層UI | 音声インターフェース、ラベル付きグループ、ウィンドウシステムの入れ子のリスト、ブックマークの下位リスト、自由入力と候補提示 | `label`、`fieldset`、`legend`、`optgroup`、`datalist` |
| SGML属性値の上限 | 複数行値を`INPUT`属性へ置く方式を、内容を持つ専用要素へ分離 | `textarea` |
| 法律・編集・細則 | 法案修正の追加・削除、法律文書の取り消し線、実在Webの法的説明／著作権表示 | `del`、`ins`、`s`、`small` |
| HTTPメタデータ | 専用要素を増やさない名前/値メタデータとHTTP応答ヘッダーへの写像 | `meta` |
| ベンダー別埋め込み内容 | `IMG`、`DYNSRC`、`EMBED`、`APP`、`APPLET`の分断を汎用挿入機構へ統合 | `object` |
| 端末・Unixマニュアル | コンピューター出力用整形済みテキストを、Unixマニュアルページのハイパーテキスト化に合わせて拡張 | `pre` |
| Web上の進捗バー | 画像等による非アクセシブルな表示を、プラットフォーム固有で意味を持つタスクの進捗へ置換 | `progress` |
| Unicode国際化 | 行内範囲へ言語／方向を付け、Unicode機構へ変換できるコンテナー | `span` |
| スタイルシート | 表現をHTML構造から分離し、著者と読者のスタイルを調停する仕組み | `style` |
| LaTeXと数式組版 | LaTeX・TeXのマニュアルと変換要求を直接の設計材料とし、`_`／`^`短縮記法も検討したHTML+の数式を、一般テキストでも使える上下付きへ拡張 | `sub`、`sup` |

### 確認できる背景まで遡ったHTML内部派生12要素

第二表では、`audio`をWHATWG `Audio`APIとゲーム音声、`button`をJavaScript互換の単純ボタンとデスクトップのフォームUI、`data`と`time`を機械可読データ、`figcaption`を既存Webで画像とキャプションを一組にするマークアップ・表示慣習、`hgroup`を既存Webマークアップ、`iframe`と`source`をブラウザーベンダーの実装・提案、`mark`を文脈依存の強調、`meter`をスカラー量の測定、`noscript`をクライアント側スクリプティングの代替内容、`summary`を開閉UIに関連するものとして配置した。次表は、その配置までに確認できるHTML内部の前身と変更を示す。

内部派生の根拠は、[`audio`統合前後](../../raw/platform.html5.org/history/webapps/r699.html)（[公開元](https://platform.html5.org/history/webapps/r699.html)）、[最初期のrich `button`草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)）、[`data`一般化提案](../../raw/www.w3.org/Bugs/Public/show_bug.cgi__q__id=13240)（[公開元](https://www.w3.org/Bugs/Public/show_bug.cgi?id=13240)）と[初回追加コミット](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)）、[`figcaption`導入コミット](../../raw/github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)（[公開元](https://github.com/whatwg/html/commit/c397495115b089ec52dbec45021159051134445f)）、[`hgroup`改名コミット](../../raw/github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)（[公開元](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)）に置く。

残る枝は、[`iframe`草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)）、[`m`の名称議論](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-February/056266.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-February/056266.html)）と[`mark`への変更](../../raw/github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)（[公開元](https://github.com/whatwg/html/commit/a1b2ff77457cf198c77975b98f245985d3ba5635)）、[`gauge`提案](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044484.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-September/044484.html)）と[`meter`初稿の報告](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048383.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-March/048383.html)）、[`NOSCRIPT`草案](../../raw/www.w3.org/TR/WD-script-960709.html)（[公開元](https://www.w3.org/TR/WD-script-960709.html)）、[`source`導入コミット](../../raw/github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)（[公開元](https://github.com/whatwg/html/commit/61af426a3ae6d68ffa00505b6883cbf870481b52)）、[`summary`導入コミット](../../raw/github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)（[公開元](https://github.com/whatwg/html/commit/9c490f21ae094de128e5bc6d3111640014a195c7)）、[`t`の用途説明](../../raw/lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049786.html)（[公開元](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2006-October/049786.html)）と[`time`改名コミット](../../raw/github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)（[公開元](https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)）で確認できる。

| 要素 | HTML内で確認できる前身と変更 |
|---|---|
| `audio` | スクリプト専用の`Audio`オブジェクトを、文書内にも置ける`video`共通メディアAPIへ統合 |
| `button` | JavaScript互換の単純な`input type=button`と送信／リセットボタンを、画像とテキストを内容に持てる要素へ拡張 |
| `data` | `time`の表示内容と機械可読値を結ぶ用途を、日付・時刻以外へ汎用化 |
| `figcaption` | HTML+以来の図のキャプションを、`legend`、`dt`／`dd`流用から専用要素へ変更 |
| `hgroup` | セクション見出し用だった旧`header`を改名し、主見出しと副見出しのグループへ限定 |
| `iframe` | `FRAME`のナビゲーションモデルと`IMG`型の文書の流れ内配置を組み合わせた浮動フレーム |
| `mark` | 2005年4月2日後〜4月13日までに追加された文脈依存の強調用`m`を、単文字名と`em`との混同を避ける提案に基づき改名 |
| `meter` | 非進捗の比率表示として提案された`gauge`を、綴りやすさから改名し、良否を表す三領域モデルとともに具体化 |
| `noscript` | クライアント側の`script`を実行できないUA向けの代替内容 |
| `source` | `video`の単一`src`を、コーデック等が異なる複数候補からの選択へ分離 |
| `summary` | `details`のキャプションに`legend`や`dt`を流用する方式を専用要素へ置換 |
| `time` | Microformats、CSS、出版、既存Webの要求から具体化した単文字`<t>`を、ソース上の可読性を理由に`time`へ改名 |

### 個別の設計要求・実装との関係を確認できる8要素

次の8要素は、[HTML+ logical roles](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)）、[WorldWideWeb style file](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/WorldWideWeb.app/default.style)）、[HTML 3.0 divisions](../../raw/www.w3.org/MarkUp/html3/divisions.html)（[公開元](https://www.w3.org/MarkUp/html3/divisions.html)）、[HTML+ Figures](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html)）、[ヘッダーラッパー計画](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)）、[Link Types](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/DesignIssues/LinkTypes.html)）、[Line Mode Browser履歴](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/LineMode/Defaults/Features.html)）、[IETF国際化草案](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01.txt)）でHTML内の要求まで確認できるが、外部の個別語彙またはシステムからの採用は確認できない。次表に、要素ごとに確認できる設計要求または実装上の背景を示す。

| 要素 | 確認できる設計要求または実装上の背景 |
|---|---|
| `abbr` | 標準役割を索引化する`ABBREV`系と、頭字語より広い自然言語上の略語カテゴリを求めた改名直前の公開コメント。採択因果は未確認 |
| `address` | NeXT WorldWideWebエディターの`Address`段落スタイルとHTMLへの直列化の対応 |
| `div` | `DIVn`、見出し必須区分、`DIV`／`SECT`分離等の候補から、`class`で章、セクション、要約等を区別する単一の汎用コンテナーを選んだ内部設計 |
| `figure` | 出版の図版・キャプション慣習を意味と名称の上流に持つHTML+の`FIG`と、既存Webで画像とキャプションを結び主たる流れから分離する利用例 |
| `head` | 既存のヘッダー部分を包み、ストリーム受信中でもヘッダー終端を判定するラッパー要求 |
| `link` | テキスト範囲へ局所化されない著者情報、部分／全体、索引等のノード単位の関係 |
| `menu` | 検索結果の選択肢や短い項目を簡潔に並べる初期リストの変種。2004年にWebアプリケーションのメニューと共有コマンド状態の要求へ再利用された |
| `q` | 言語・プラットフォーム別の引用符と入れ子規則を内容から分離して描画する行内引用 |
