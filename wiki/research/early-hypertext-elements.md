# 初期hypertext・文書制御要素の調査

## 結論

`base`、`link`、`meta`は、現在の用途から逆算せずとも、当時の資料から解決しようとした要求を要素単位で確認できる。`base`は文書をmailやlocal copyとして取得時の文脈外で読む場合の相対URL解決、`link`は局所的なanchorと区別した文書全体の関係、`meta`は既存の専用要素では表せないname/value型メタ情報とHTTP response header生成のために提案された。[Tim Berners-Lee, *HTML Tags*, 1992](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) [Tim Berners-Lee, *Future plans for HTML*, 1992](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) [Roy T. Fielding, “Re: meta information”, 1994-06-01](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)

`a`は1991年のWorldWideWeb実装と1992年のHTML説明で、hypertext node内の領域をlinkの始点・終点とする設計を確認できる。しかし、ENQUIRE、NeXTの一般的なhypertext機能、SGML、HyTimeなどからHTMLの`A`要素を採ったという因果関係は確認できない。[CERN/W3C, *Anchor.h*, 1991-09-04保存版](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.h) [Tim Berners-Lee, *HTML Tags*, 1992](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

`br`と`hr`は1993年6–7月のHTML Internet-Draftに存在せず、NCSA Mosaic 2.0 prerelease 3の変更記録で同時に追加されたことを確認できる。ただし変更記録は実装への追加と表示上の意味だけを示し、HTML語彙への導入理由や先行物からの採用を述べない。[Berners-Lee and Connolly, *Hypertext Markup Language (HTML)*, version 1.2, 1993-07-23登録](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) [NCSA Mosaic, *CHANGES*, 2.0 prerelease 2 to 3](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L700)

`menu`は1992年のHTML説明ですでに、`UL`よりcompactで通常1 item 1 lineのlistとして記録される。しかし個別の導入理由、名称の由来、GUI menuまたは先行文書体系との採用関係は確認できない。[Tim Berners-Lee, *HTML Tags*, 1992](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

| 要素 | 確認可能なHTML初出または導入段階 | 当時の意味または要求 | HTML直前の祖先 | 確度候補 |
|---|---|---|---|---|
| `a` | 1991-09-04以前のNeXT WorldWideWeb実装 | node内の領域を、同一または別nodeのanchorへ結ぶlinkの始点・終点として扱う | 未確認 | B |
| `base` | 1992年CERN Tagsでは形式未定・未使用、1992-11-19にBerners-Leeが収録を支持、1993-01-06 DTDで確認 | 文書がmailやlocal copyとして文脈外に置かれても相対URLを解決できるよう、保存時のURLを記録する | 未確認 | B |
| `br` | NCSA Mosaic 2.0 prerelease 3で追加、1993-11-08 HTML+ DTDで確認 | normal text内の強制line break | 未確認 | C |
| `hr` | NCSA Mosaic 2.0 prerelease 3で追加、1993-11-08 HTML+ DTDで確認 | horizontal rule | 未確認 | C |
| `link` | 1992年Future plansのnew feature提案、1993-01-06 DTDで確認 | anchorと区別したdocument-wide relationship | 1992年Berners-Leeの`LINK`提案。提案からDTD採録までのchange recordは未回収 | A− |
| `menu` | 1992年CERN Tags | `LI`からなる、`UL`よりcompactなlist | 未確認 | C |
| `meta` | 1994-06-01 Fielding提案、1994-06-12 HTML 2.0 patch | 任意のname/valueメタ情報と、必要に応じたHTTP response headerへの写像 | Fieldingの`META`提案 | A |

## 1991年: WorldWideWebのanchor model

1991-09-04のHTTP `Last-Modified`を持つWorldWideWebの`Anchor.h`は、anchorをhypertext node内の領域であり、同じnodeまたは別nodeの別anchorへlinkされるものと定義する。`Anchor.m`はnode全体のanchorとnamed sub-anchorを分け、source一覧、destination、linkの追跡を実装する。[CERN/W3C, *Anchor.h*, 1991-09-04](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.h) [CERN/W3C, *Anchor.m*, 1991-09-04](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.m)

1991-09-27のHTTP `Last-Modified`を持つHTML parserは`A`の`HREF`と`NAME`を読み、`HREF`があれば現在のnode addressを基準に解決してdestination anchorへlinkし、保存時にはtext runのanchor情報を`<A NAME=... HREF=...>`として直列化する。したがって、HTMLの`A`がWorldWideWeb自身のanchor object modelを表す実装関係は直接観察できる。[CERN/W3C, *ParseHTML.h*, 1991-09-27](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h)

1992年のCERN Tagsは`A`の内容をlinkの始点または終点、`HREF`を選択可能な始点、`NAME`を宛先と説明し、他文書への相対参照は文書addressまたは指定されたbase addressに対して解決するとする。[Tim Berners-Lee, *HTML Tags*, 1992](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

これらの資料はHTML内の実装と設計モデルを強く示すが、そのmodelをどのHTML以前のsystemから選んだかは述べない。ENQUIREやNeXTの一般機能にもnode、link、anchorに似た概念があるというだけでは、HTML `A`への矢印を結ばない。

## 1992–1993年: `base`と`link`

### `base`

1992年のCERN Tagsは、通常browserは文書取得に使ったaddressを知る一方、文書をmailした場合や複数addressで見える場合には外部文書addressを正しく導くbase addressが必要だと説明する。同時点ではtag形式を未指定かつ“NOT CURRENTLY USED”としており、要求の記述と実装済み機能を区別できる。[Tim Berners-Lee, *HTML Tags*, 1992](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html)

1992-11-19にDan Connollyは`BaseAddress`への意見を求め、Berners-LeeはFuture plansに記したうえで収録すべきだと回答した。[Dan Connolly, “HTML DTD issues”, 1992-11-19](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) [Tim Berners-Lee, “Re: HTML DTD issues”, 1992-11-19](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html)

1993年draftのRCS idが1993-01-06であるDTDは`BASE`をHEAD内の省略可能なempty elementとして宣言する。本文は、文書をcontext外で読む状況で文書自身のURLを記録し、文書内のpartial URLをそのbase addressへ相対化すると説明する。[Berners-Lee and Connolly, *Hypertext Markup Language (HTML)*, June 1993](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

1994年のHTML+ reviewはbrowserがlocal copyを作るとき`BASE`を挿入してoriginal URLを記録し、local copyからlinkを辿る際の相対URL解決に使うと説明する。これは初期要求の具体例だが、`BASE`の初出ではない。[Dave Raggett, *A Review of the HTML+ Document Format*, 1994](https://www.w3.org/MarkUp/HTMLPlus/htmlplus-paper.html)

### `link`

1992年のFuture plansは`LINK`をnew featureとして、localized anchorと異なるdocument-wide link、empty element、anchorと同じattributesと提案する。用途にはrelated index、glossary、parent、author、印刷時または複製時に伴わせるobjectを挙げる。[Tim Berners-Lee, *Future plans for HTML*, 1992](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)

1993年draftのRCS idが1993-01-06であるDTDはHEAD内に複数の`LINK`を許し、本文はauthorship、関連index・glossary、版関係、parent／next／previousによる文書treeを典型用途とする。[Berners-Lee and Connolly, *Hypertext Markup Language (HTML)*, June 1993](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00)

提案者自身の要素固有proposalと直後のDTD実体を確認できるため、`link`は少なくともA−候補である。ただしFuture plansから1993-01-06 DTDへ採用したことを明記するmailまたはcommitは未回収であり、この欠落を注記する。

## 1992–1995年: `menu`

1992年のCERN Tagsはlist開始tagを`UL`、`MENU`、`DIR`に分け、`MENU`を`UL`よりcompactで通常1 item 1 lineの小さなparagraphのlistと定義する。1992-07-15のConnolly DTDも`MENU|UL|OL|DIR`を`LI`列として宣言する。[Tim Berners-Lee, *HTML Tags*, 1992](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) [Dan Connolly, “HTML DTD enclosed”, 1992-07-15](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)

1993年draftも同じcompact list modelを維持する。HTML+ DTDは`MENU`をplain single-column listとする一方、HTML+ reviewは`MENU`と`DIR`を拡張`UL`へ置き換えたと説明するため、HTML+では旧HTMLの表示別list分類を一般化する対象だった。[Berners-Lee and Connolly, *Hypertext Markup Language (HTML)*, version 1.2, 1993-07-23登録](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) [Dave Raggett, *HTML+ DTD*, 1993-11-08](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html) [Dave Raggett, *A Review of the HTML+ Document Format*, 1994](https://www.w3.org/MarkUp/HTMLPlus/htmlplus-paper.html)

RFC 1866は`MENU`をmenu list、`COMPACT`付きならcompact styleと標準化したが、初期HTMLへの導入理由や名称のsourceは示さない。[Berners-Lee and Connolly, RFC 1866, 1995-11](https://www.rfc-editor.org/rfc/rfc1866.html)

GUI menuとの名称・外見の一致は探索仮説にとどめる。初期のcompact listから、現行HTMLで`ul`のsemantic alternativeとされる`menu`までの再定義経路も、この初期資料だけでは連続させない。

## 1993–1995年: `br`と`hr`

1993-07-23にIETFへ登録されたversion 1.2のHTML draftは1993年6月付で、DTDに`BR`と`HR`を含まない。[Berners-Lee and Connolly, *Hypertext Markup Language (HTML)*, version 1.2](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) [IETF Datatracker, draft history](https://datatracker.ietf.org/doc/draft-ietf-iiir-html/history/)

NCSA Mosaicの原配布由来`CHANGES`は2.0 prerelease 2から3への変更として、new HTML widgetへ`BR`と`HR`を追加し、それぞれlinebreakとhorizontal ruleだと記録する。この項目は追加主体と実装上の意味を示すが、日付、採用元、必要になった理由を示さない。[NCSA Mosaic, *CHANGES*, 2.0 prerelease 2 to 3](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L700)

1993-11-08のHTML+ DTDは`BR`をnormal text内のline break、`HR`をhorizontal ruleとして宣言する。1994年のHTML+ reviewは`BR`をHTML+のinnovationとしてforced line breakを可能にしたと説明する一方、`HR`はlist itemにも入れられる既存要素のように扱う。この差は、両要素が常にHTML+から同時にHTMLへ採用されたことを意味しない。[Dave Raggett, *HTML+ DTD*, 1993-11-08](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html) [Dave Raggett, *A Review of the HTML+ Document Format*, 1994](https://www.w3.org/MarkUp/HTMLPlus/htmlplus-paper.html)

RFC 1866は`BR`をwords間のline break、`HR`をtext section間のdividerで通常horizontal ruleとして標準化した。[Berners-Lee and Connolly, RFC 1866, 1995-11](https://www.rfc-editor.org/rfc/rfc1866.html)

安全に確認できる系列は「1993年6月draftには不在 → Mosaic 2.0 prerelease 3で実装追加 → 1993-11-08 HTML+ DTD → HTML 2.0」である。ただしMosaic、HTML+、HTML 2.0間の採用因果を示す資料がなく、確認済みの系譜として矢印では結ばない。両要素とも初出候補と当時の意味を固定できるためCを推奨する。

## 1994–1995年: `meta`

1993年6–7月のHTML draftと1993-11-08のHTML+ DTDには`META`がない。[Berners-Lee and Connolly, *Hypertext Markup Language (HTML)*, version 1.2](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) [Dave Raggett, *HTML+ DTD*, 1993-11-08](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html)

1994年のHTML+ reviewは、HEADの`META`からserverが`Expires`などのHTTP headerを生成し、cache維持に使う案を説明する。ただし文書自体はこの段落を既存HTMLとHTML+のどちらへ属するか明確に区分せず、保存DTDにも`META`がないため、この資料だけを初出または採用根拠にしない。[Dave Raggett, *A Review of the HTML+ Document Format*, 1994](https://www.w3.org/MarkUp/HTMLPlus/htmlplus-paper.html)

Roy Fieldingは1994-06-01に、他のHTML+要素で定義されないdocument metainformationをserver/clientが抽出できるよう、emptyな`META`と`NAME`／`VALUE`、HTTP header生成を指示する`HEADER`属性を提案した。本人がwww-talkへ書いた原案をwww-htmlへ移したmailであり、`Expires`、非HTTPの`IndexType`、`Keywords`等の具体例を含む。[Roy T. Fielding, “Re: meta information”, 1994-06-01](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html)

Fieldingは1994-06-12、従来obsoleteなHTTP wrapperとされていた`META`を一般的なdocument metainformation mechanismとしてHTML 2.0仕様へ入れるpatchを提示した。DTD案は`HTTP-EQUIV`、`NAME`、`CONTENT`を持ち、仕様案は専用要素のない情報の識別・index・catalog、HTTP response header生成、既存`TITLE`や`LINK`と競合させない制約を明記する。[Roy T. Fielding, “Re: HTML 2.0 spec and the META element”, 1994-06-12](https://lists.w3.org/Archives/Public/www-html/1994Jun/0041.html)

RFC 1866はFieldingを共著者に含み、この`HTTP-EQUIV`／`NAME`／`CONTENT` modelを採用して、specialized document meta-informationとHTTP header field生成を標準化した。[Berners-Lee and Connolly, RFC 1866, 1995-11](https://www.rfc-editor.org/rfc/rfc1866.html)

`meta`は要素単位の具体的proposal、そのHTML 2.0 patch、同じ設計のRFC収録を一次資料で追えるためAを推奨する。1994-06-01以前のwww-talk原投稿は現在の公開archiveで回収できなかったが、Fielding自身が原案全文を同日www-html mailへ転載しているため、proposal内容の確認には影響しない。

## 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1991-09-04 | *Anchor.h*／*Anchor.m* | WorldWideWeb実装source | node内の領域としてのanchor、source・destination・named sub-anchor・link追跡model | [W3C保存header](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.h) / [implementation](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Anchor.m) | 2026-08-09 |
| 1991-09-27 | *ParseHTML.h* | WorldWideWeb実装source | HTML `A`の`HREF`／`NAME`をanchor objectへ写像し、保存時に`A`として直列化する | [W3C保存source](https://www.w3.org/History/1991-WWW-NeXT/Implementation/ParseHTML.h) | 2026-08-09 |
| 1992（HTTP Last-Modified 1992-11-13） | *HTML Tags* | CERN HTML説明 | `A`、未使用`Base Address`、compact listとしての`MENU`の意味と要求 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1992-07-15 | “HTML DTD enclosed” | DTD添付mail | `A`と`MENU`を宣言する一方、`BASE`と`LINK`はまだ含まない | [W3C mail archive](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) | 2026-08-09 |
| 1992（HTTP Last-Modified 1992-12-02） | *Future plans for HTML* | CERN設計文書 | localized anchorと異なるdocument-wide `LINK`をnew featureとして提案 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html) | 2026-08-09 |
| 1992-11-19 | “HTML DTD issues”／reply | 設計mail | `BaseAddress`を検討課題に挙げ、Berners-Leeが収録を支持 | [Connolly](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0068.html) / [Berners-Lee](https://lists.w3.org/Archives/Public/www-talk/1992NovDec/0072.html) | 2026-08-09 |
| 1993-01-06（DTD RCS id） | *Hypertext Markup Language (HTML)* | DTD・仕様草案 | `BASE`と`LINK`の収録、文脈外URL解決とdocument-wide relationshipの意味 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-iiir-html-00) | 2026-08-09 |
| 1993-07-23登録 | *Hypertext Markup Language (HTML)* version 1.2 | Internet-Draft | `BR`、`HR`、`META`がDTDにまだ存在しない比較基準 | [W3C保存text](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) | 2026-08-09 |
| 1993（日付未確認、2.0 prerelease 3） | NCSA Mosaic *CHANGES* | 実装変更記録 | new HTML widgetへ`BR`と`HR`をlinebreak／horizontal ruleとして追加 | [source mirror](https://github.com/alandipert/ncsa-mosaic/blob/master/CHANGES#L660-L700) | 2026-08-09 |
| 1993-11-08 | HTML+ DTD | 提案DTD | `BR`をnormal textのline break、`HR`をhorizontal ruleとして宣言 | [W3C HTML+](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_58.html) | 2026-08-09 |
| 1994 | *A Review of the HTML+ Document Format* | 設計論文 | `BR`をHTML+ innovation、`MENU`／`DIR`を一般化対象、`BASE`と`META`の運用案として説明 | [W3C HTML+](https://www.w3.org/MarkUp/HTMLPlus/htmlplus-paper.html) | 2026-08-09 |
| 1994-06-01 | “Re: meta information” | 提案mail | Fieldingが一般メタ情報とHTTP header生成のため`META`を具体提案 | [W3C mail archive](https://lists.w3.org/Archives/Public/www-html/1994Jun/0002.html) | 2026-08-09 |
| 1994-06-12 | “Re: HTML 2.0 spec and the META element” | 仕様patch mail | `HTTP-EQUIV`／`NAME`／`CONTENT`を持つ`META`のHTML 2.0 patch | [W3C mail archive](https://lists.w3.org/Archives/Public/www-html/1994Jun/0041.html) | 2026-08-09 |
| 1995-11 | RFC 1866 | IETF標準 | 7要素のHTML 2.0上の定義、とくにFielding提案と同型の`META` | [RFC Editor](https://www.rfc-editor.org/rfc/rfc1866.html) | 2026-08-09 |

## 否定された仮説と未解決

- `a`: 「ENQUIRE、NeXT、Dexter、SGML、HyTimeのanchorがHTML `A`の直接祖先」は未確認である。HTML実装内部のanchor objectとの対応は確認できるが、その上流からの採用を示す同時代資料が必要である。
- `base`: 名称または仕組みの直前祖先と、未使用proposalから1993-01-06 DTDへ収録したchange recordが未解決である。
- `br`: Mosaicの追加以前のproposalまたは実装、強制改行を新要素にした要求、Mosaic／HTML+／HTML 2.0間の採用関係が未解決である。
- `hr`: Mosaicの追加以前のproposalまたは実装、導入理由、horizontal ruleという印刷慣習または別markupからの採用関係が未解決である。
- `link`: Future plansの提案から1993-01-06 DTDへの採録を明記するmailまたはcommitが未回収である。
- `menu`: compact listを別要素とした理由と名称のsource、最初期browser実装、初期表示分類から現行semantic alternativeへの再定義経路が未解決である。
- `meta`: 1994-06-01にFieldingが転載したwww-talk原投稿のarchive URLと、1994 HTML+ reviewの`NAME`／`VALUE`案との具体的な前後関係が未解決である。

## 史料探索の範囲と成果がなかった探索

- 既存の[`early-sgml-elements.md`](early-sgml-elements.md)を先に確認し、1991–1993年CERN Tags、Future plans、Connolly DTD、Internet-Draftの共通探索を再実行せず、対象7要素の該当箇所と差分だけを確認した。
- 保存済み1993 draft、HTML 2.0 draft・RFC 1866、HTML+ DTD・reviewを比較した。
- W3C保存の1991年WorldWideWeb NeXT sourceで`Anchor` objectとHTML parser／serializerを確認したが、HTML以前の具体的systemから`A`を採用した記録は見つからなかった。
- W3C www-talk／www-html archiveで1992年の`BASE`議論と1994年6月の`META` proposal／HTML 2.0 patchを確認した。Fieldingが転載元としたwww-talk原投稿は公開archiveから回収できなかった。
- NCSA Mosaic原配布由来の`CHANGES`で`BR`／`HR`追加を確認したが、2.0 prerelease 3項目自体の日付と、追加要求を議論したmailは確認できなかった。
- HTML+より前の`BR`／`HR`提案をW3C mail件名索引とNCSA資料候補で探索したが、採用理由または先行祖先を示す一次資料は確認できなかった。

## 推奨確度

- A: `meta`
- A−: `link`
- B: `a`, `base`
- C: `br`, `hr`, `menu`

`link`は要素固有のproposalと直後のDTDを結ぶ中間記録が欠けるためA−とする。`meta`は提案者本人による具体案、HTML 2.0仕様patch、同じ属性modelのRFC収録を追えるためAとする。`br`と`hr`はNCSA実装追加を確認できても、その記録だけではHTMLへの採用理由または具体的祖先を証明しない。
