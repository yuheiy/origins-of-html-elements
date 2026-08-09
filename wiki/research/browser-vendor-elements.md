# Browser vendor由来候補の現行HTML要素

## 調査範囲と判定方法

このノートは`img`, `map`, `area`, `embed`, `wbr`, `canvas`, `iframe`について、HTMLへの初出、導入主体、導入理由、HTML直前の祖先を一次資料から検証する。実装上の初出と標準仕様への採録を分離し、同名要素の存在や機能の類似だけでは因果関係を認定しない。閲覧日はすべて2026-08-09である。

## 結論

| 要素 | 確認できたHTML上の入口 | HTML直前の祖先 | 確度候補 | 主な制約 |
|---|---|---|---|---|
| `img` | 1993年2月のMarc Andreessenによる提案とNCSA X Mosaic実装 | Andreessenの`IMG`提案・X Mosaic実装 | A | Midas `ICON`等は先行存在だが採用因果を確認できない。 |
| `map` | 1994年のJames L. Seidmanによるclient-side image map提案 | HTML+ `FIG`内のshaped linkとserver-side image maps | A | HTML 3.2での採録決定記録は未確認。 |
| `area` | 1994年のJames L. Seidmanによるclient-side image map提案 | HTML+ `FIG`内のshaped linkとserver-side image maps | A | `map`と同じ集合単位の導入で、HTML 3.2での採録決定記録は未確認。 |
| `embed` | 1995年のNetscapeによるHTML拡張提案とNavigator plug-in実装 | Netscape Navigator 2.0 plug-in mechanism | A | 1993年の`REL=EMBED`は競合案であり要素の祖先とは確認できない。 |
| `wbr` | 1995年のNetscape Navigator拡張 | 未確認 | B | 導入要求は確認できるが、正確な公開日、対象版、具体的な先行物は未確認。 |
| `canvas` | 2004年5月のApple WebKit実装、2005年のWHATWG Web Applications 1.0 | Dashboard用WebKit `CANVAS`実装 | A− | AppleからWHATWGへの具体的な提案受領時点について同時代資料が矛盾する。QuartzはAPIの類似までしか確認できない。 |
| `iframe` | 1996年のMicrosoft IE3におけるfloating frames、1997年のHTML 4.0 draft `IFRAME` | 通常のframes／floating-frame feature | B | 1996年Microsoft資料は`IFRAME`という要素名を記さず、後代Microsoft文書はIE4から利用可能として版が矛盾する。 |

## `img`

### 証拠

Marc Andreessenは1993年2月25日に`www-talk`で、新しい任意HTML tagとして`<IMG SRC="url">`を提案した。取得したbitmapまたはpixmapをtag位置のtextへinlineに埋め込み、anchor内ではactivation可能とし、X Mosaicで既に動作する必須機能だと明記した。[Marc Andreessen, “proposed new tag: IMG”, 25 February 1993（Web History Project保存）](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html)

Andreessenは2月26日、各browserが独自実装を始める前に一貫した構文を得ることが提案理由だと説明した。3月12日には、一般的な`INCLUDE`／`EMBED`は循環埋込み等の問題を生み、`ICON`は大きな画像に適さないため`IMG SRC`を選んだと説明した。[Marc Andreessen, “Re: proposed new tag: IMG”, 26 February 1993](http://1997.webhistory.org/www.lists/www-talk.1993q1/0197.html) [Marc Andreessen, “Re: proposed new tag: IMG”, 12 March 1993](http://1997.webhistory.org/www.lists/www-talk.1993q1/0257.html)

NCSA Mosaic for X 0.10の1993年3月14日公開告知は、`IMG`によるHTML文書内inline画像、GIF/XBM、URL取得、画像をanchorにする例を変更点として列挙する。同年6月のHTML Internet-Draftは“Embedded Images”節とDTDへ`IMG`を収録した。[Marc Andreessen and Eric Bina, “NCSA Mosaic for X 0.10 released”, 14 March 1993](http://1997.webhistory.org/www.lists/www-talk.1993q1/0262.html) [Berners-Lee and Connolly, *Hypertext Markup Language (HTML)*, June 1993](https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)

同じ議論ではTony JohnsonがMidas 2.0の`ICON`を先行する類似機能として報告し、Tim Berners-Leeは`A REL="EMBED, PRESENT"`案を示した。しかし前者はAndreessen提案への返信であり、後者は競合案である。`IMG`がいずれかから派生したとは述べない。[Tony Johnson, “Re: proposed new tag: IMG”, 26 February 1993](http://1997.webhistory.org/www.lists/www-talk.1993q1/0183.html) [Tim Berners-Lee, “Re: proposed new tag: IMG”, 26 February 1993](http://1997.webhistory.org/www.lists/www-talk.1993q1/0186.html)

### 解釈

安全なHTML直前の祖先は、Andreessenによる`IMG`提案と同時に存在したX Mosaic実装である。提案者、構文、導入要求、実装公開、HTML draftへの収録が要素単位で連続するためA候補とする。Midas `ICON`、ViolaWWW等のinline画像、`A REL`は因果を示す資料がないため上流の確定系譜へ置かない。

```text
NCSA X Mosaic IMG implementation / Andreessen IMG proposal (1993-02)
→ HTML Internet-Draft IMG (1993-06)
→ current HTML img
```

### 未解決

- Andreessenが`IMG`を考案する際に参照した、さらに上流の画像埋込みsystem。
- Midas `ICON`、ViolaWWW等の先行実装と`IMG`の因果関係。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-02-25 | Marc Andreessen, “proposed new tag: IMG” | 当事者の同時代投稿 | `IMG SRC`、inline画像、anchor内利用、X Mosaicで実装済みという提案。 | http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html | 2026-08-09 |
| 1993-02-26 | Tony Johnson / Tim Berners-Lee replies | 同時代投稿 | Midas `ICON`という先行存在と`A REL="EMBED, PRESENT"`という競合案。 | http://1997.webhistory.org/www.lists/www-talk.1993q1/0183.html / http://1997.webhistory.org/www.lists/www-talk.1993q1/0186.html | 2026-08-09 |
| 1993-02-26、1993-03-12 | Marc Andreessen replies | 当事者の同時代投稿 | 構文統一の必要、一般化した`EMBED`や`ICON`を採らなかった理由。 | http://1997.webhistory.org/www.lists/www-talk.1993q1/0197.html / http://1997.webhistory.org/www.lists/www-talk.1993q1/0257.html | 2026-08-09 |
| 1993-03-14 | NCSA Mosaic for X 0.10 release | 公式実装公開告知 | `IMG`、GIF/XBM inline画像、URL取得、anchor内利用を実装。 | http://1997.webhistory.org/www.lists/www-talk.1993q1/0262.html | 2026-08-09 |
| 1993-06 | HTML Internet-Draft | IETF Internet-Draft | `IMG`をHTML語彙とDTDへ収録。 | https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt | 2026-08-09 |

## `map`と`area`

### 証拠

James L. Seidman（Spyglass）は1994年10月20日の第二回WWW会議Developer’s Day論文で、`IMG USEMAP`、`MAP NAME`、`AREA SHAPE/COORDS/HREF/NOHREF`を提案した。既存server-side image mapsのHTTP依存、リンク先決定だけに必要なserver transaction、click前のfeedback不能、server依存のmap形式を問題として列挙し、map descriptionをHTMLとしてclientへ置く解決を示した。[James L. Seidman, “An HTML Extension to Support Client-Side Image Maps”, 20 October 1994](https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html)

SeidmanはHTML+ `FIG`内のhypertext buttonsを先行案として明示的に検討し、完全な`FIG`対応の処理負担、非対応browserへのfallback不足、map記述位置の制約から短期解として退けた。HTML+は別途、`FIG ISMAP`によるserver-side方式と、`FIG`内`A SHAPE`によるclient-side shaped linksを定義している。[Dave Raggett, HTML+ “Active Areas”, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html) [Dave Raggett, HTML+ “Placing Hypertext Buttons on Images”, 8 November 1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_37.html)

IETF draftは`MAP`、`AREA`、`IMG USEMAP`を将来のHTML revisionへ含めるよう提案し、1996年8月のRFC 1980が同じ構文と理由を継承した。draft表紙の日付は1994年2月4日だが、running headerは1995年2月4日、参照文献は1994年11月のHTML 2.0 draft、保存serverのLast-Modifiedは1995年1月31日であり内部矛盾があるため、日付は「1995-02-04相当」と注記する。[Seidman, *A Proposed Extension to HTML: Client-Side Image Maps*, date internally inconsistent](https://www.ietf.org/archive/id/draft-ietf-html-clientsideimagemap-00.txt) [RFC 1980, August 1996](https://www.rfc-editor.org/rfc/rfc1980.txt)

HTML 3.2は`MAP`をclient-side image map、内部の`AREA`をhotzoneとURLの対応としてRecommendationへ収録した。ただし本文はSeidman、Spyglass、RFC 1980を個別にcreditせず、採録決定の議事録は今回確認できなかった。[HTML 3.2, 14 January 1997](https://www.w3.org/TR/REC-html32)

### 解釈

`map`と`area`は同じ問題設定と提案から同時に導入された。Seidman論文がHTML+の二方式を直接検討して新構文を提案するため、名称類似ではなく設計上の因果を確認できる。提案、理由、具体的祖先が要素集合単位で直接確認できるため両要素をA候補とし、HTML 3.2の個別採録決定記録の欠落を注記する。

```text
HTML+ FIG ISMAP / FIG with A SHAPE (1993)
→ Seidman MAP + AREA + IMG USEMAP proposal (1994)
→ IETF draft / RFC 1980
→ HTML 3.2 map + area
→ current HTML map + area
```

### 未解決

- W3Cまたはvendor groupがSeidman案をHTML 3.2へ採録した会議・決定記録。
- Internet-Draft `-00`の表紙年とrunning header等の日付矛盾の発生理由。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ image maps sections | 失効したInternet-Draft | `FIG ISMAP`と`FIG`内`A SHAPE`による二つの先行案。 | https://www.w3.org/MarkUp/HTMLPlus/htmlplus_36.html / https://www.w3.org/MarkUp/HTMLPlus/htmlplus_37.html | 2026-08-09 |
| 1994-10-20 | Seidman, “An HTML Extension to Support Client-Side Image Maps” | 会議論文／当事者提案 | `MAP`／`AREA`構文、server-side方式の問題、HTML+案を変更した理由。 | https://archives.iw3c2.org/www2/Proceedings/DDay/seidman/seidman.html | 2026-08-09 |
| 1995-02-04相当（日付に内部矛盾） | `draft-ietf-html-clientsideimagemap-00` | IETF Internet-Draft | `MAP`／`AREA`／`USEMAP`をHTML extensionとして提案し、DTDとfallbackを定義。 | https://www.ietf.org/archive/id/draft-ietf-html-clientsideimagemap-00.txt | 2026-08-09 |
| 1996-08 | RFC 1980 | Informational RFC | Seidman案の構文と目的をRFC化し、1994年会議論文を参照。 | https://www.rfc-editor.org/rfc/rfc1980.txt | 2026-08-09 |
| 1997-01-14 | HTML 3.2 | W3C Recommendation | `MAP`と`AREA`をclient-side image mapsとして採録。 | https://www.w3.org/TR/REC-html32 | 2026-08-09 |

## `embed`

### 証拠

NetscapeのAlex Edelsteinは1995年9月19日、John Giannandrea名義の“A Proposed Extension to HTML: Embed”をW3CとIETF HTML WGへ投稿した。提案は`EMBED`によって任意objectをHTML pageへ直接挿入し、application-specific plug-inがobjectを支えると定義する。また`A`の`REL`を使う代案より、平均的content developerが理解・実装しやすいという選択理由と、Navigator 2.0実装への参照を明記する。[Alex Edelstein / John Giannandrea, “A Proposed Extension to HTML: Embed”, 19 September 1995](https://lists.w3.org/Archives/Public/www-html/1995Sep/0048.html)

1996年の*Compound Documents in HTML* draftは“Netscape initially implemented `<EMBED>` as an empty element”と記し、任意属性をplug-in parametersとして渡した初期実装を説明する。同draft自身のcontainer型`EMBED`はDave Raggettの`FIG`とSunの`APPLET`に強く影響された後続再設計であり、Netscape初期empty elementの祖先とは扱わない。[Paul Burchard and Dave Raggett, *Compound Documents in HTML*, 1996](https://www.ietf.org/archive/id/draft-ietf-html-cda-00.txt)

1993年HTML Internet-Draftの`EMBED`は要素でなく、link先nodeをsource document表示へ埋め込むlink relationshipである。1995年Netscape提案も`A REL`をalternativeとして比較するだけで、そこから`EMBED`要素を派生させたとは述べない。[HTML Internet-Draft, June 1993](https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt)

### 解釈

現行の空要素`embed`へ続く直接祖先はNetscape Navigator 2.0のplug-in mechanismと、そのためのempty `EMBED`実装である。Netscape自身の要素提案が導入主体、要求、実装との接続を要素単位で明示するためA候補とする。

```text
Netscape Navigator 2.0 plug-in mechanism + empty EMBED implementation (1995)
→ current HTML embed
```

### 未解決

- Netscapeの提案からWHATWG／HTML5で現行要素として仕様化されるまでの具体的な編集・採録記録。
- Navigator 2.0以前にplug-in embedding modelへ影響した具体的system。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-06 | HTML Internet-Draft | IETF Internet-Draft | 要素ではなくlink relationshipとしての`EMBED`。 | https://www.ietf.org/archive/id/draft-ietf-iiir-html-00.txt | 2026-08-09 |
| 1995-09-19 | Netscape, “A Proposed Extension to HTML: Embed” | vendor提案／標準化投稿 | 任意object、plug-in mechanism、`A REL`案よりauthorに容易という理由、Navigator実装。 | https://lists.w3.org/Archives/Public/www-html/1995Sep/0048.html | 2026-08-09 |
| 1996（保存file Last-Modified 1996-03-02） | *Compound Documents in HTML* | IETF Internet-Draft | Netscape初期`EMBED`がempty elementだったことと後続container案との差。 | https://www.ietf.org/archive/id/draft-ietf-html-cda-00.txt | 2026-08-09 |

## `wbr`

### 証拠

Copyright 1995のNetscape Communications文書“Extensions to HTML”は、文書全体をNetscape Navigator extensionsと位置づけ、`WBR`をnew elementとして説明する。`NOBR`区間内で例外的に改行してよい位置、または長い語で改行可能な位置をNavigatorへ知らせるための要素であり、`BR`のように改行を強制しないと明記する。[Netscape Communications, “Extensions to HTML”, 1995（保存複製）](https://marc.merlins.org/htmlearn/netscape/html_extensions.html)

### 解釈

`wbr`はNavigatorの通常の空白位置での改行と、`NOBR`による改行禁止の間へ任意改行機会を設けるため導入された。ただし資料は`NOBR`が時間的に先行し、そこから`WBR`が派生したとは述べない。具体的祖先が確認できないためB候補とする。

### 未解決

- Netscape文書の正確な公開日と対象Navigator版。
- `NOBR`との実装順序と設計議論。
- desktop publishing、word processor、SGML語彙、soft hyphen等の先行機構から採用したことを示す因果資料。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1995（正確な日付不明） | Netscape Communications, “Extensions to HTML” | vendor公式文書の保存複製 | `WBR`をNavigatorのnew elementとし、任意改行位置を指定する導入要求を説明。 | https://marc.merlins.org/htmlearn/netscape/html_extensions.html | 2026-08-09 |

## `canvas`

### 証拠

WebKit公式timelineは、2004年5月26日のchangeset 6693を「new `<CANVAS>` tag implementation」のPart 2と記録し、`<canvas>`、`getContext("context-2d")`、path、transform、stroke/fill等を実装したことを示す。少なくともこの日までにAppleのWebKit系HTML実装へ`CANVAS`と2D drawing contextが入っていた。[WebKit Timeline, 26 May 2004](https://trac.webkit.org/timeline?authors=&daysback=4&from=2004-05-30)

AppleのSafari開発者Dave Hyattは2004年7月5日、AppleがHTMLへ加えた新要素として`canvas`を紹介し、programmatic drawingを持つimage elementに相当し、Dashboardの時計の針をHTMLで描くために使うと説明した。これは導入主体、当初の製品上の用途、既存`img`との設計上の比較を同時代の当事者が明記した資料である。[Dave Hyatt, “Introducing the Canvas”, 5 July 2004（Internet Archive保存版）](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005913)

Hyattは2004年7月7日、Dashboardを構築するためHTML拡張の機能が必要だったと述べ、`canvas`はDashboard専用だったと説明した。SVGを選ばなかった理由として、XHTMLを必要とすること、当時のSafariとMozillaではHTMLよりXHTMLの実装が遅く不安定だったこと、SVG実装には数か月かかる一方でCanvasは数日で実装できたことを挙げる。これは「現在のcanvas用途」からの推測ではなく、Apple側が明記した導入理由である。[Dave Hyatt, “On Extending HTML”, 7 July 2004（Internet Archive保存版）](https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005928)

同じ7月7日の記事はAppleが「all of our extensions」をWHATWGへ提出したとする。しかしIan Hicksonは、7月13日の質問へ8月13日に答えたWHATWGメールで、`canvas`提案はまだ誰からも提出されておらず、Hyattを含む複数人と提案準備について話していると述べた。したがって、Apple実装からWHATWG仕様へ至る方向性は確認できても、具体的な提出日や受領済み提案の内容はこの二資料だけでは確定できない。[Ian Hickson, “[whatwg] Canvas tag”, 13 August 2004](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/043985.html)

WHATWG公式の歴史スナップショット一覧はWeb Applications 1.0の保存版を2005年9月1日から掲げる。その保存版は`canvas`をresolution-dependent bitmap canvasとして定義し、`getContext`でdrawing contextを取得するモデルとfallback contentを規定する。これにより、Appleの先行実装後にWHATWG仕様へ採録されたことは確認できる。[WHATWG Wiki, “HTML snapshots”](https://wiki.whatwg.org/wiki/HTML_snapshots) [WHATWG, *Web Applications 1.0*, 1 September 2005（Internet Archive保存版）](https://web.archive.org/web/20050901000000/http://www.whatwg.org/specs/web-apps/2005-09-01/)

AppleのSenior Patent Counselは、2007年に公開された書簡でAppleが2005年3月24日版Web Applications 1.0の“Graphics: The bitmap canvas”に関係する知的財産権を持つと表明した。この書簡はAppleの技術とWHATWGのcanvas節の密接な関係を示すが、仕様文をAppleの特定提案から採用した日時や編集手順までは説明しない。[Helene Plotka Workman / David Hyatt, “[whatwg] Web Applications 1.0 Draft”, 14 March 2007（書簡が参照する仕様日は24 March 2005）](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/010129.html)

Appleの公式WebKit DOM文書は、Safari、Dashboard、WebKit-based applicationsがcanvas objectを支え、World Clock widgetを例に、drawing APIがQuartzのdrawing systemに似た機能を持つと説明する。文書の初版日は2004年11月2日である。ただし「似た機能」は観察されたAPIモデルの説明であり、Quartzからcanvasを派生させたという設計上の因果を明記してはいない。[Apple, “Drawing Content”, *WebKit DOM Programming Topics*](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Canvas.html) [Apple, “Document Revision History”](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RevisionHistory.html)

### 解釈

安全に確認できるHTML直前の祖先は、Dashboardの時計等を描くためAppleがWebKitへ実装した`CANVAS`と2D drawing contextである。Appleの製品内HTML拡張がWHATWG Web Applications 1.0へ採録され、その後のHTML `canvas`になった系譜は強い。一方、2004年7月の「提出済み」と8月の「未提出」が矛盾するため、Appleのどの文書またはコードがいつWHATWG編集稿へ渡されたかは欠落している。この一段を明示してA−候補とする。

Quartzについて史料が直接示すのはdrawing featuresの類似だけである。`Quartz → canvas`という派生関係は確認できないため、さらに上流の確定系譜へは置かない。

```text
Apple WebKit CANVAS implementation for Dashboard (2004-05)
→ WHATWG Web Applications 1.0 canvas (遅くとも2005-09、具体的な提案受領経路は未解決)
→ current HTML canvas
```

### 未解決

- WebKit changeset 6693より前のPart 1 changesetの正確な番号、著者、日付。
- AppleからWHATWGへ渡されたcanvas提案の本文、提出日、採録時の編集記録。
- 2004年7月7日のHyattの「全拡張を提出済み」と、8月13日のHicksonの「canvas提案は未提出」の差が、非公開草案、口頭相談、または語の使い方の違いのどれによるか。
- Quartzの具体的APIまたは実装からcanvasを派生させたと明記する当時の設計資料があるか。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-05-26 | WebKit Timeline / changeset 6693 | 公式実装履歴 | 新しい`CANVAS`実装Part 2としてHTML tag、2D context、drawing operationsを実装。 | https://trac.webkit.org/timeline?authors=&daysback=4&from=2004-05-30 | 2026-08-09 |
| 2004-07-05 | Dave Hyatt, “Introducing the Canvas” | 当事者による同時代説明 | AppleがHTMLへ`canvas`を追加し、Dashboard時計の針を描くために使用。 | https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005913 | 2026-08-09 |
| 2004-07-07 | Dave Hyatt, “On Extending HTML” | 当事者による同時代説明 | Dashboardの要求、HTMLを拡張した理由、SVG/XHTMLを採らなかった実装上の理由、WHATWGへの提出というApple側の認識。 | https://web.archive.org/web/20040708074642/http://weblogs.mozillazine.org/hyatt/archives/2004_07.html#005928 | 2026-08-09 |
| 2004-08-13 | Ian Hickson, “[whatwg] Canvas tag” | 標準化メーリングリスト | 7月13日の質問に対し、canvas提案は未提出で、Hyattを含む複数人が提案準備中と回答。 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/043985.html | 2026-08-09 |
| 2004-11-02 | Apple, *Safari JavaScript Programming Topics*初版 | 公式実装文書 | WebKit canvas、Dashboard World Clock、Quartzに似たdrawing features。 | https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Canvas.html | 2026-08-09 |
| 2005-09-01 | WHATWG, *Web Applications 1.0* | 仕様スナップショット | bitmap canvas、drawing context、fallback contentを仕様化。 | https://web.archive.org/web/20050901000000/http://www.whatwg.org/specs/web-apps/2005-09-01/ | 2026-08-09 |
| 2007-03-14（書簡が参照する仕様日は2005-03-24） | Apple Senior Patent Counsel書簡 | 当事者の公式書簡／標準化メーリングリスト | AppleがWHATWG draftのbitmap canvas節に関係するIP rightsを持つと表明。 | https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-March/010129.html | 2026-08-09 |

## `iframe`

### 証拠

Microsoftは1996年5月29日のInternet Explorer 3.0 beta発表で、HTML enhancementsがborderless and floating framesをsupportすると明記した。これはIE3にfloating-frame featureがあったことを示すMicrosoft一次資料だが、`IFRAME`というliteral tag名は記さない。[Microsoft, “Microsoft Internet Explorer 3.0 Beta Now Available”, 29 May 1996](https://news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/)

確認できたW3Cの公開仕様では、1997年7月8日版HTML 4.0 Working Draftに“Inline frames: the IFRAME element”節があり、`src`でinline挿入する情報とfallback contentを定義する。1997年12月18日のRecommendationは`IFRAME`をinline subwindowとして定義し、通常のtext内へ外部documentを置く例、fallback、`OBJECT`による代替を規定した。[HTML 4.0 Working Draft, 8 July 1997](https://www.w3.org/TR/WD-html40-970708/present/frames.html) [HTML 4.0 Recommendation §16.5, 18 December 1997](https://www.w3.org/TR/REC-html40-971218/present/frames.html#edef-IFRAME)

Microsoft DHTML referenceの保存複製は`IFRAME`を“inline floating frames”およびdocument within a document／floating `FRAME`として定義する一方、HTMLとscriptでInternet Explorer 4.0から利用可能と記す。これは1996年IE3発表のfloating framesと版が食い違う。IE3ではHTML syntaxのみでIE4からscript objectが使えたという区別か、文書上の誤りかは資料から判定できず、本文を都合よくscript限定とは読み替えない。[Microsoft, “IFRAME Element | IFRAME Object”, copyright 1999（保存複製）](https://documentation.help/HTMLREF/iframe.htm)

### 解釈

通常のframes／floating-frame featureが`iframe`の設計モデルであることはW3CとMicrosoft文書から確認できる。しかし1996年Microsoft一次資料には要素名がなく、Microsoftが`IFRAME`要素を導入したという要素単位の因果を固定できない。HTMLへの導入理由またはdesign modelまでを確認したB候補とし、A／A−には上げない。

```text
Microsoft IE3 floating-frame feature (1996、IFRAME tag名は未確認)

W3C HTML 4.0 WD IFRAME (1997)
→ HTML 4.0 Recommendation IFRAME
→ current HTML iframe
```

上の二つの段落を矢印で結ばない。Microsoft featureからW3C要素への採録経路が未確認だからである。

### 未解決

- IE3 betaまたは正式版のMicrosoft HTML reference、SDK、配布CD内sample等で`<IFRAME>`というliteral tagと導入理由を同時に示す1996年一次資料。
- Microsoft内部の提案者、通常の`FRAME`からfloating frameへの派生記録、W3Cへの提出時期と提案文書。
- IE3発表と後代referenceのIE4表記が食い違う理由。

### 証拠表

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-05-29 | Microsoft IE3 beta発表 | vendor公式製品発表 | IE3のHTML enhancementとしてborderless and floating framesをsupport。ただし`IFRAME`名なし。 | https://news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/ | 2026-08-09 |
| 1997-07-08 | HTML 4.0 Working Draft | W3C Working Draft | `IFRAME`を名前付き要素として公開仕様に定義。 | https://www.w3.org/TR/WD-html40-970708/present/frames.html | 2026-08-09 |
| 1997-12-18 | HTML 4.0 Recommendation §16.5 | W3C Recommendation | inline subwindow、fallback、通常のdocument flow内利用を標準化。 | https://www.w3.org/TR/REC-html40-971218/present/frames.html#edef-IFRAME | 2026-08-09 |
| 1999 copyright | Microsoft DHTML reference | vendor文書の保存複製 | `IFRAME`とfloating `FRAME`を結ぶがIE4から利用可能と記し、IE3発表と矛盾。 | https://documentation.help/HTMLREF/iframe.htm | 2026-08-09 |

## 横断的な否定された仮説

- Browser vendorが先に実装したというだけで、その実装と後続標準の個別要素を無条件に矢印で結ばない。名称、属性、処理モデル、採録の説明を要素ごとに確認する。
- 後代のHTML仕様が互換性のため旧要素を定義していることを、当初の導入理由の証拠にしない。
- 製品文書が既存技術との類似を述べる場合も、派生、採用、移植を明記しなければ直接祖先としない。

## 調査記録

既存の`wiki/README.md`、`wiki/research/current-html-elements.md`、`wiki/research/early-sgml-elements.md`、`wiki/research/html-plus-elements.md`、対象7要素の個別ページを確認した。WebKit公式timeline、Apple Developer Documentation Archive、WHATWGの仕様スナップショットとメーリングリスト、当時のbrowser vendor文書を中心に探索した。

成果がなかった探索として、`img`より前のinline image systemからの採用記録、`wbr`のNetscape内設計記録と具体的先行語彙、IE3の`IFRAME` literal tagを示すMicrosoft一次reference、AppleからWHATWGへ渡されたcanvas提案本文を探した。先行存在、機能の一致、後代の一般的説明だけで欠落を補わなかった。
