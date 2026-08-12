---
status: 完成
---

# The origins of HTML elements

このWikiは、現行HTML要素がどの文書体系、ソフトウェア、メディア、UI慣習、標準化活動から生まれたかを、史料に基づいて追跡する。現在の意味や名称の類似から起源を推測せず、確認できない接続は未解決として残す。

## 読み方

- [要素](elements/)は、現行要素ごとに現在の意味、HTMLへの導入、直前の祖先、上流の由来、証拠、確度、否定された仮説、未解決点をまとめる。
- [共有系譜](lineages/)は、複数要素に共通する確認済みの採用経路や要求をまとめる。個別要素の結論と確度は要素ページを正本とする。
- [概観](overviews/README.md)は要素ページと共有系譜を横断する分類、比較、調査状況を扱う。
- [Rawソース](raw-source-index.md)は、保存されたすべてのRawファイルをパス順に並べた索引である。
- [ログ](log.md)は、Wikiに対する操作を追記専用で記録する。構造と運用のスキーマは[AGENTS.md](../AGENTS.md)を参照する。

## 収録範囲

最終確認日は2026年8月9日である。[WHATWG HTML Living Standardの要素索引](../raw/html.spec.whatwg.org/multipage/indices.html)（[公開版](https://html.spec.whatwg.org/multipage/indices.html#elements-3)）にあるHTML名前空間の組み込み要素113件と、HTML構文で使用できる名前付き外来要素のルートである`math`と`svg`を合わせた115要素を収録する。この一覧は特定日のスナップショットではなく、Living Standardに追従して更新する。

- 要素索引の`h1, h2, h3, h4, h5, h6`は6要素として数え、共通史料と系譜は[`h1-h6.md`](elements/h1-h6.md)へまとめる。
- HTML構文が[外来要素と定義する](../raw/html.spec.whatwg.org/multipage/syntax.html)（[公開版](https://html.spec.whatwg.org/multipage/syntax.html#elements-2)）ことに基づき、MathMLの`math`とSVGの`svg`はHTML名前空間要素と分けて数えるが、HTML文書内で外来要素の内容を開始する名前付きルートなので対象へ含める。
- [Custom elements](../raw/html.spec.whatwg.org/multipage/custom-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-core-concepts)）に基づき、自律型カスタム要素は名前集合が開いており、カスタマイズされた組み込み要素は既存の組み込み要素名を使うため、どちらも追加の要素名として数えない。
- [Non-conforming features](../raw/html.spec.whatwg.org/multipage/obsolete.html)（[公開版](https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features)）で完全に廃止済みとされる要素は除外し、現行要素の系譜を説明する場合だけ歴史的要素として扱う。
- [`search`](../raw/html.spec.whatwg.org/multipage/grouping-content.html)（[公開版](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)）と[`selectedcontent`](../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)）は独立した規範的定義を持ち、公式索引に掲載されるため含める。実装状況や外部サイト上の「試験的」という表示は収録判断に使わない。

## 要素

- [`<a>`](elements/a.md): 1991年のNeXT WorldWideWeb実装でHTML `A`とAnchorオブジェクトの対応を確認でき、Raggettらはアンカー／`HREF`をBerners-Lee独自の設計と回顧するが、`A` トークンの選択は未確認である。
- [`<abbr>`](elements/abbr.md): HTML 4初期草案の`ACRONYM`が1997年に`ABBR`へ改名されたが、HTML+ `ABBREV`の影響は未確認である。
- [`<address>`](elements/address.md): 1991年のNeXT WorldWideWebでエディターの`Address`段落スタイルとHTML `ADDRESS`の相互変換を確認できるが、直前祖先と命名理由は未確認である。
- [`<area>`](elements/area.md): James L. Seidmanが1994年に`map`とともに提案した、クライアント側イメージマップの個々の領域を表す要素である。
- [`<article>`](elements/article.md): 2004年に`entry`、`post`、`article`が検討され、既存の`div class="post"`を置換する独立セクションとして2005年のWHATWG草案へ入った。
- [`<aside>`](elements/aside.md): 2004年の`sidebar`案から、配置を脇へ限定する誤解を避けるため`aside`となり、本文に関連するが主たる流れから外れた内容を表した。
- [`<audio>`](elements/audio.md): `audio`は2007年3月23日、音声または音声ストリームを表し、`video`と共通のメディアAPIを持つ要素としてWHATWGへ追加された。
- [`<b>`](elements/b.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した物理的な文字強調要素で、同時代Texinfoの`@b`との対応を確認できる。
- [`<base>`](elements/base.md): 1991年の未使用のBase Addressタグ案、1992年の採用決定、1993年1月の`SAVEDAS`標準化意向から同年3月の`BASE HREF`へ至るが、最終構文と名称の具体化は未確認である。
- [`<bdi>`](elements/bdi.md): W3C国際化グループの双方向文字分離要求と`ubi`属性案を、WHATWGが2010年に新要素へ変更して採録したものである。
- [`<bdo>`](elements/bdo.md): 1995年の国際化草案が、埋め込みと上書きを兼ねた`BIDI`を`SPAN DIR`と`BDO`（BIDI override）へ分割し、RFC 2070が標準化した。
- [`<blockquote>`](elements/blockquote.md): HTMLより早いDocBook 1.0の同名要素と導入直前のDocBook検討は確認できるが、Connollyの後代の説明がUsenet説と競合するため直接祖先は未確定である。
- [`<body>`](elements/body.md): Tim Berners-Leeは1992年6月にヘッダー／本文分離案を示し、Dan Connollyの7月公開DTDは`BODY`を混在内容回避用の本文コンテナーとして宣言した。
- [`<br>`](elements/br.md): 1993年7月のHTML+で意味を持つ改行として提案され、同月末に基礎HTMLへの追加が決まったが、HTML+からの要素単位の採用因果は未確認である。
- [`<button>`](elements/button.md): `button`は1997年、既存の`input`による送信／リセット／スクリプト用ボタンと同じ動作を保ちながら、HTML内容を持つ豊かなボタンを作るためW3CのHTML 4へ導入された。
- [`<canvas>`](elements/canvas.md): Richard WilliamsonがDashboard向けにWebKitへ`CANVAS`を初めて実装し、その実装からWHATWGのキャンバス機能が設計されたことを、WebKit変更履歴とWHATWG自身の謝辞で確認できる。
- [`<caption>`](elements/caption.md): 技術出版の表題要求を受けたHTML+の`TT`案が共有`CAPTION`へ一般化され、RFC 1942を経て標準化された。
- [`<cite>`](elements/cite.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した論理的な文字強調要素で、同時代Texinfoの`@cite`との対応を確認できる。
- [`<code>`](elements/code.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した論理的な文字強調要素で、同時代Texinfoの`@code`との対応を確認できる。
- [`<col>`](elements/col.md): CALSの列指定要求をHTML向けの`TSPEC`等へ組み替えた後、1995年に逐次表示用の`COL`として現れたが、その中間編集記録は未確認である。
- [`<colgroup>`](elements/colgroup.md): 1995年のHTML Tables草案が、旧`COL`グループ化モデルでグループ内を異なる幅にできない制約を解くため内部で新設した。
- [`<data>`](elements/data.md): `time`の機械可読値という用途を日付・時刻以外へ一般化する案として2011年に提案され、WHATWG追加とHTML Working Groupの合意・決定を経て導入された。
- [`<datalist>`](elements/datalist.md): `datalist`は2004年のWeb Forms 2.0で、任意入力を許す`input`へ著者が指定した候補と、非対応UA向けの代替内容を与えるため導入された。
- [`<dd>`](elements/dd.md): CERN-SGMLから初期HTMLへ入ったリスト集合の一つだが、`DD`個別の対応は明記されない。
- [`<del>`](elements/del.md): HTML+ `REMOVED`からHTML 3.0 `DEL`、HTML 4への系列は集合単位で確認できるが、個別の改名と採録は未確認である。
- [`<details>`](elements/details.md): `details`は2006年、GUIの開閉三角形/ウィジェットをHTMLで表す要素としてWHATWGへ導入された。
- [`<dfn>`](elements/dfn.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した論理的な文字強調要素で、同時代Texinfoの`@dfn`との対応を確認できる。
- [`<dialog>`](elements/dialog.md): CSS、JavaScript、WAI-ARIA製モーダルの問題を解くネイティブな非同期機構として2012年に導入され、2009年に削除された会話用の同名要素とは断絶する。
- [`<div>`](elements/div.md): HTML 3.0草案で、`class`とともに章、セクション、要約、付録等を表す汎用コンテナーとして確認でき、HTML 3.2へ継承された。
- [`<dl>`](elements/dl.md): CERN-SGMLから初期HTMLへ入ったリスト集合の一つだが、`DL`個別の対応は明記されない。
- [`<dt>`](elements/dt.md): CERN-SGMLから初期HTMLへ入ったリスト集合の一つだが、`DT`個別の対応は明記されない。
- [`<em>`](elements/em.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した論理的な文字強調要素で、同時代Texinfoの`@emph`との対応を確認できる。
- [`<embed>`](elements/embed.md): NetscapeがNavigator 2.0のプラグイン機構のために提案・実装した空要素である。
- [`<fieldset>`](elements/fieldset.md): 当時一般的だったUIのラベル付きグループと音声ナビゲーション要求から`LGROUP`／`IS`、`FIELDSET`／`CAPTION`を経てHTML 4の`FIELDSET`／`LEGEND`へ至った。
- [`<figcaption>`](elements/figcaption.md): 2010年1月、HTML5草案の`figure` キャプションを`dt`／`dd`で表す方式が意味、構造、後方互換性の問題を指摘され、専用の`figcaption`へ変更された。
- [`<figure>`](elements/figure.md): 出版の図版・キャプション慣習を意味と名称の上流とし、HTML+ `FIG`／`CAPTION`と既存Webの実例調査・提案を受けて2006年に採用された。一般的な伝達路として文書変換ツール、個別の制作単位としてMediaWiki、ニュース発行テンプレート、学術誌の複数形式出版工程を確認できるが、各システムが参照した先行語彙は不明である。
- [`<footer>`](elements/footer.md): 2004年からWHATWGの意味的要素集合に現れ、典型的サイトマークアップからの集合単位の導入は確認できるが、`footer`個別の対応は不明である。
- [`<form>`](elements/form.md): `ISINDEX`とwww-talkの複数入力案、HyperCardに触発されたHP Protek Pilotの業務用フォーム経験からHTML+ `FORM`が形成され、HTML 2.0へ導出された。記入用紙は画面入力慣習の上流だが、特定様式からの直接移植は未確認である。
- [`<h1>`〜`<h6>`](elements/h1-h6.md): `h1`〜`h6`は、AAPタグセットの見出し定義がCERN SGMLガイドを経て初期HTMLへ保持された、共通の直接史料を持つ6段階の見出し要素群である。
- [`<head>`](elements/head.md): 1992年のヘッダー／本文分離案から`HEADING`案を経て1993年の`HEAD`へ至るが、最終トークンの選定記録は未回収である。
- [`<header>`](elements/header.md): 2005年の見出しグループ用`header`を2009年に`hgroup`へ移し、直後に見出し、検索、ナビゲーション等をまとめる現行系統を新設した。
- [`<hgroup>`](elements/hgroup.md): 2009年4月、WHATWGエディターIan Hicksonが当時のHTML5 `header`を`hgroup`へ改名し、副見出しを支える用途へ限定して導入した。
- [`<hr>`](elements/hr.md): 1993年7月末のWWW Workshopで、ハイフン列による区切りを置き換える水平罫線として基礎HTMLへの追加が決まり、LynxとNCSA Mosaicが実装した。
- [`<html>`](elements/html.md): Dan ConnollyがSGMLパーサーに最上位要素を推論させるため1992年に導入したが、HTML以前の具体的祖先は未確認である。
- [`<i>`](elements/i.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した物理的な文字強調要素で、同時代Texinfoの`@i`との対応を確認できる。
- [`<iframe>`](elements/iframe.md): Microsoft IE3 beta 2の`IFRAME`実装と後続するW3C案は確認できるが、Microsoft提出からW3C案への要素単位の採用は未確認である。
- [`<img>`](elements/img.md): Marc AndreessenがNCSA X Mosaicへ実装し、1993年に提案した行内画像要素である。
- [`<input>`](elements/input.md): HTML+のフォームからHTML 2.0へ導出された型付き入力欄で、各ウィジェット種別の由来は未確認である。
- [`<ins>`](elements/ins.md): HTML+ `ADDED`からHTML 3.0 `INS`、HTML 4への系列は集合単位で確認できるが、個別の改名と採録は未確認である。
- [`<kbd>`](elements/kbd.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した論理的な文字強調要素で、同時代Texinfoの`@kbd`との対応を確認できる。
- [`<label>`](elements/label.md): 1996年のW3Cフォーム草案が、フォームコントロールとラベルテキストを構造的に関連付け、グラフィック／音声ブラウザーでの操作と説明を改善するため`LABEL`を提案した。
- [`<legend>`](elements/legend.md): `LGROUP`／`IS`から`FIELDSET`／`CAPTION`を経て、表用`CAPTION`とのエラー回復実装上の衝突を避けるためHTML 4の`LEGEND`へ改名された。
- [`<li>`](elements/li.md): CERN-SGMLから初期HTMLへ入ったリスト集合の一つだが、`LI`個別の対応は明記されない。
- [`<link>`](elements/link.md): 1992年のCERN設計ノートは、テキストへ局所化されたアンカーと区別して文書全体の関係を表す空の`LINK`を新DTD向けに提案し、1993年1月6日版DTDに同要素が現れる。
- [`<main>`](elements/main.md): XHTML 2からWAI-ARIAへ続く`main`役割と既存Web慣習を2012年の提案が要素化し、2013年にWHATWGが汎用的な主要内容コンテナーとして統合した。`maincontent`からの正確な改名記録は未解決である。
- [`<map>`](elements/map.md): James L. Seidmanが1994年に`area`とともに提案したクライアント側イメージマップのコンテナーであり、HTML+のイメージマップ案を直接検討して設計された。
- [`<mark>`](elements/mark.md): 2005年4月2日後〜4月13日までに追加された`m`を、単文字名と`em`との混同を避ける2007年の提案に基づき2008年に`mark`へ改名した。
- [`<math>`](elements/math.md): MathML 1.0で定義済みのMathML名前空間のルートを、2008年にHTMLの`text/html`パーサーから生成できる外来要素のルートとして統合したものである。
- [`<menu>`](elements/menu.md): 1992年の短い項目用リストとして確認でき、2004年にWebアプリケーションのメニューと共有コマンド状態のため再利用されたが、初期二史料の時系列、担当者、具体的祖先、命名理由は未解決である。
- [`<meta>`](elements/meta.md): Roy Fieldingが1994年6月、専用HTML要素で定義されない名前/値型の文書メタデータと、必要に応じたHTTP応答ヘッダーへの写像を行う`META`を提案した。
- [`<meter>`](elements/meter.md): Matthew Thomasが2004年に非進捗の比率表示として提案した`gauge`を、WHATWGが綴りやすさから`meter`へ改名し、三領域の良否モデルとともに仕様化した。
- [`<nav>`](elements/nav.md): 2004年の`navigation`から2005年の`nav`へ続き、典型的サイトマークアップからの集合単位の導入は確認できるが、個別対応と改名理由は不明である。
- [`<noscript>`](elements/noscript.md): W3Cのクライアント側スクリプティング草案で、スクリプトまたはその言語に非対応のユーザーエージェントへ代替内容を示すため導入され、HTML 4へ入った要素である。
- [`<object>`](elements/object.md): 画像、アプレット、プラグイン等を別々の機構で扱う制約に対し、W3Cが汎用`INSERT`として提案し、1996年に`OBJECT`へ改名した要素である。
- [`<ol>`](elements/ol.md): CERN-SGML由来の集合に含まれ、当初は順序なしリストとして実装された後、1992年に順序なしリストとの区別のため戻された。
- [`<optgroup>`](elements/optgroup.md): 長い`SELECT`のアクセシビリティ改善策としてMegaZoneが入れ子のリスト型のグループ化を提案し、WAIとHTML WGの検討を経てHTML 4へ入った。
- [`<option>`](elements/option.md): HTML+のフォームからHTML 2.0へ導出された選択候補要素である。
- [`<output>`](elements/output.md): XFormsの非編集可能な値表示コントロールをHTMLフォームへ適応して2003年に提案され、Web Forms 2.0を経てHTML5へ統合された。
- [`<p>`](elements/p.md): 1992年1月のBerners-Leeメールで空の段落マークとして確認でき、SGML由来という回顧はあるが、具体的な元語彙は未確認である。
- [`<picture>`](elements/picture.md): 2007年の静止画用`picture`案を`video`型の複数ソース選択へ転用し、RICG、独立した`srcset`、`img`を描画主体とする構造を統合して2014年にWHATWG HTMLへ導入した。
- [`<pre>`](elements/pre.md): 初期HTML案`TYPEWRITER`を装置ではなく内容を記述する`PRE`へ改名し、Unixマニュアルページ向けに拡張した整形済みテキスト要素である。
- [`<progress>`](elements/progress.md): 2004年のProgressメータープレースホルダーを2006年に確定／不定なタスク完了要素へ具体化したが、それ以前のウィジェットからの採用は未確認である。
- [`<q>`](elements/q.md): 1995年のHTML国際化草案が言語に応じた引用符の描画のため導入したが、HTML+ `Q`からの個別採用は未確認である。
- [`<rp>`](elements/rp.md): ルビ非対応ユーザーエージェント向けの括弧を表す要素としてW3Cが提案・規範化し、既存Web上の`rp`を含む単純なルビマークアップとの互換性を保つため、2008年に`ruby`、`rt`とともにHTML5へ追加された。
- [`<rt>`](elements/rt.md): W3Cのルビ語彙で注釈テキストを表す要素として提案・規範化され、既存Web上の`rt`を含む単純なルビマークアップとの互換性を保つため、2008年に`ruby`、`rp`とともにHTML5へ追加された。
- [`<ruby>`](elements/ruby.md): W3Cのルビ語彙とIE実装が存在する中、既存Webとの互換性のため2008年に`rt`、`rp`とともにHTML5へ追加されたが、W3C語彙からの直接採用は未確認である。
- [`<s>`](elements/s.md): HTML+／HTML 3.0の表示上の `S`がHTML 4へ再採録され、HTML5で廃止された後、2010年に「もはや正確でない」内容の意味で再導入された。
- [`<samp>`](elements/samp.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した論理的な文字強調要素で、同時代Texinfoの`@samp`との対応を確認できる。
- [`<script>`](elements/script.md): Netscapeが定義しNavigator 2.0ベータへ実装した`SCRIPT`を、W3CのHTML3 Scripting草案が形式化した要素である。
- [`<search>`](elements/search.md): WAI-ARIA `search`ランドマークと`div role="search"`をネイティブHTMLで表すためWHATWGが採用し、2023年にLiving Standardへ入れたコンテナーである。
- [`<section>`](elements/section.md): 遅くとも2004年8月にはWHATWG Web Applications 1.0で定義され、見出しだけでは文書構造とアウトラインを確実に復元できない問題へのセクショニングモデルを担った。
- [`<select>`](elements/select.md): HTML+のフォームからHTML 2.0へ導出された簡潔選択リストである。
- [`<selectedcontent>`](elements/selectedcontent.md): Open UIの`selected-value`表示部をChromiumが子ノード複製用の`selectedoption`要素へ置き換え、二度の改名を経て2025年にHTMLへ統合した。
- [`<slot>`](elements/slot.md): Shadow DOM v0のセレクター式挿入点を、実在する部品ライブラリとGUI継承モデルを踏まえた名前付き割り当てへ再設計し、2015年の提案・実装後にWHATWGへ統合した。
- [`<small>`](elements/small.md): HTML 3.0の小さいフォント用要素を、WHATWGが2005年に細則や補足事項を表す意味へ再定義したが、最初の導入経路は未確認である。
- [`<source>`](elements/source.md): `source`は2007年3月23日、`video`でコーデック選択を行い複数の代替メディアリソースから選択する要素としてWHATWGへ追加された。
- [`<span>`](elements/span.md): 1995年のIETF HTML国際化草案が`BIDI DIR`の方向埋め込みを移し、`LANG`／`DIR`を置く適切な要素がない行内テキスト用の汎用コンテナーへ拡張した。
- [`<strong>`](elements/strong.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した論理的な文字強調要素で、同時代Texinfoの`@strong`との対応を確認できる。
- [`<style>`](elements/style.md): HTML 3.0 DTDは1995年2月9日に既存`STYLE`を単純化したと記録し、Arena実装とHTML WG要件を経て4月の公開草案が文書内のスタイル上書きとして規定した。
- [`<sub>`](elements/sub.md): HTML+のDTDが一般テキストでも許可した`SUB`をHTML 3.0へ引き継ぐ設計意図を、Dave Raggettの同時代メールで確認できる。
- [`<summary>`](elements/summary.md): `summary`は2010年、`details`のキャプションを`legend`または`dt`／`dd`で表す方式を専用要素へ置換して導入された。
- [`<sup>`](elements/sup.md): HTML+のDTDが一般テキストでも許可した`SUP`をHTML 3.0へ引き継ぐ設計意図を、Dave Raggettの同時代メールで確認できる。
- [`<svg>`](elements/svg.md): SVG 1.0で定義済みのSVG名前空間のルートを、2008年にHTMLパーサーへ統合し、一度削除した後、意見を受けて2009年に再導入したものである。
- [`<table>`](elements/table.md): 技術出版の表要求を集めてHTML+内で単純なブラウザー向けモデルとして設計され、後にCALSの交換要件を部分的に取り込んでRFC 1942へ至った。
- [`<tbody>`](elements/tbody.md): CALSの`TBODY`を1995年のRaggett案がHTMLへ取り込み、IETF草案とRFC 1942を経てHTML 4が標準化した。
- [`<td>`](elements/td.md): HTML+で新設されたデータセルが、後のモデルでCALS `ENTRY`のデータセル側にも対応し、RFC 1942を経て標準化された。
- [`<template>`](elements/template.md): 利用前のHTML断片を不活性DOM部分木として保持・複製するため2011年に提案され、Web Components作業を経て2013年にWHATWG HTMLへ統合された。
- [`<textarea>`](elements/textarea.md): 長い複数行値を`INPUT`属性へ置くSGML上の問題からHTML+で分離され、HTML 2.0へ採録された要素である。
- [`<tfoot>`](elements/tfoot.md): CALSの`TFOOT`を1995年のRaggett案がHTMLへ取り込み、IETF草案とRFC 1942を経てHTML 4が標準化した。
- [`<th>`](elements/th.md): HTML+で新設されたヘッダーセルが、後のモデルでCALS `ENTRY`のヘッダー側にも対応し、RFC 1942を経て標準化された。
- [`<thead>`](elements/thead.md): CALSの`THEAD`を1995年のRaggett案がHTMLへ取り込み、IETF草案とRFC 1942を経てHTML 4が標準化した。
- [`<time>`](elements/time.md): Microformats、CSS、出版等の要求から2006年に具体化された`<t>`を、可読性の提案に基づき改名し、2011年の`data`への置換と両要素の併存を経て現行設計へ続く。`<t>`の正確な追加記録と単文字名の理由は未解決である。
- [`<title>`](elements/title.md): SGMLのタグ対構文を用いつつ、ノードを文脈外で識別してウィンドウ名や履歴へ使うWWW固有のプロパティとして1991年に確認できる。
- [`<tr>`](elements/tr.md): HTML+作業中に行区切りから行コンテナーへ変化し、後のモデルでCALS `ROW`に対応してRFC 1942へ至った。
- [`<track>`](elements/track.md): `track`は2010年、メディア要素へ外部字幕、キャプション、説明、章、メタデータを関連づける時間指定トラック機構として導入された。
- [`<u>`](elements/u.md): 1993年のTexinfo由来とする集合記述に個別対応がなく、HTML 3.2での再出現と2011年の適合化の間にも系譜の欠落が残る。
- [`<ul>`](elements/ul.md): CERN-SGMLから初期HTMLへ入ったリスト集合の一つだが、`UL`個別の対応は明記されない。
- [`<var>`](elements/var.md): 1993年HTML草案がTexinfoのマクロ名由来と明記した論理的な文字強調要素で、同時代Texinfoの`@var`との対応を確認できる。
- [`<video>`](elements/video.md): `video`は2007年、Operaの実験実装と提案を受けてWHATWGへ導入された。
- [`<wbr>`](elements/wbr.md): Netscape Navigator 1.1の任意改行要素として確認でき、WHATWGが2010年に廃止扱いから適合要素へ変更したが、NetscapeからWHATWGへの因果は未確認である。

## 共有系譜

- [現行HTML要素の共有系譜](lineages/README.md): 共有された採用、要求、分岐、置換、共同変更を因果単位で案内する。
- [AAP／CERNからHTML見出し群へ](lineages/aap-cern-headings.md): AAPとCERN SGMLから`h1`〜`h6`へ至る集合単位の採用を扱う。
- [CERN-SGMLから初期HTMLリスト群への共有系譜](lineages/cern-sgml-lists.md): CERN-SGMLから初期HTMLのリスト六要素を含む集合への採用を扱う。
- [`head`と`body`への文書分割](lineages/document-structure.md): 文書情報と本文を分離する要求から`head`／`body`へ至る変更を扱う。
- [HTML句要素とTexinfo](lineages/texinfo.md): Texinfoのマクロ名からHTML句要素集合への命名経路を扱う。
- [HTML+フォームからHTML 2.0へ](lineages/html-plus-forms.md): HTML+のフォーム五要素からHTML 2.0への集合単位の採用を扱う。
- [フォームのラベル付けとグループ化](lineages/form-labels-and-groups.md): ラベル関連付けと欄のグループ化要求から`label`、`fieldset`、`legend`へ至る経路を扱う。
- [HTML+から基本表モデルへ](lineages/html-plus-tables.md): HTML+と初期HTML 3草案から基本表五要素へ至る採用を扱う。
- [CALSからHTML表の行グループへ](lineages/table-row-groups.md): CALSの三つの行グループをHTML向けに簡略化して採用した経路を扱う。
- [HTML表の列と列グループ](lineages/table-columns.md): 列機能の統合と`COLGROUP`新設の経路を扱う。
- [文書の削除と挿入](lineages/document-edits.md): HTML+の追加・削除から`del`／`ins`へ至る集合単位の経路を扱う。
- [図とキャプション](lineages/figures-and-captions.md): HTML+の図構造とWHATWG提案から`figure`／`figcaption`へ至る経路を扱う。
- [クライアント側イメージマップ](lineages/image-maps.md): 形状付きリンク要求から`map`／`area`へ至る経路を扱う。
- [双方向テキストの埋め込みと上書き](lineages/bidirectional-text.md): Unicode低水準機構に対応する`span`／`bdo`とスタイル用途の合流を扱う。
- [既存Webから意味的セクショニング要素へ](lineages/semantic-sectioning.md): `div`の疑似意味的用途からセクショニング要素群へ至る集合と個別枝を扱う。
- [旧`header`から`hgroup`と新`header`へ](lineages/header-and-hgroup.md): 旧見出しコンテナーの改名とページヘッダー用要素の新設を扱う。
- [ARIAランドマークからネイティブHTML要素へ](lineages/aria-landmarks.md): `main`と`search`のARIA役割を専用HTML要素へ置換した経路を扱う。
- [ルビ注釈語彙の共有系譜](lineages/ruby.md): W3C／XHTMLのルビ語彙と既存Web利用からHTML5の三要素へ至る枝を扱う。
- [MathMLとSVGのHTMLパーサー統合](lineages/foreign-content.md): 既存XML語彙の`math`と`svg`を`text/html`へ統合した経路を扱う。
- [`details`と`summary`の開閉UI系譜](lineages/details-summary.md): GUI開閉慣習から`details`へ、流用キャプションから`summary`へ至る経路を扱う。
- [WHATWGメディア要素の共有モデル](lineages/media-elements.md): `video`、`audio`、`source`が共通メディアモデルへ統合された経路を扱う。
- [レスポンシブ画像と`picture`／`source`](lineages/responsive-images.md): コミュニティ提案、実装、既存要素を画像選択モデルへ統合した経路を扱う。
- [`time`の一般化と`data`との併存](lineages/data-and-time.md): `time`から`data`への置換と再導入後の機能分担を扱う。
- [カスタマイズ可能な`select`](lineages/customizable-select.md): 四つの現行要素を一体で変更した標準化経路を扱う。

## 概観

- [概観ページ](overviews/README.md): 横断的な見取り図三ページの入口。
- [HTML要素の導入経路](overviews/introduction-paths.md): 現行115要素をHTMLへの導入経路で分類する。
- [HTML要素の由来を支える証拠](overviews/evidence-and-origins.md): 先行物、実装、既存Web、要求が由来を支える範囲を比較する。
- [系譜調査の到達点と再開条件](overviews/research-status.md): 確度、未解決点、調査の優先度と再開条件をまとめる。
