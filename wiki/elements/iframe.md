---
status: 完成
---

# `<iframe>`

## 概要

Microsoft IE3は1996年3月のalphaでは通常フレームだけを実装し、同年7月のbeta 2までにリテラル`IFRAME`と浮動フレーム用の処理を実装した。Microsoftによるフレーム拡張集合のW3C提出と、後続するW3Cの`IFRAME`提案も確認できるが、提出集合に`IFRAME`が含まれ、W3C案がそれを採録したという要素単位の接続は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、その子ナビゲーション対象を表す。`src`はそこに含めるページのURLを、`srcdoc`は埋め込むページの内容を与え、`sandbox`などによって埋め込み文脈を制限できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/iframe-embed-object.html)（[公開版](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)、2026-08-09確認）

## HTMLへの導入

1996年3月9日付ビルドを含むIE3 alpha配布物は、リリースノートで通常のHTMLフレームと枠なしフレームだけを新機能として挙げ、`MSHTML.DLL`のタグ表にも`FRAMESET`と`NOFRAMES`はあるが`IFRAME`はない。[IE3 alpha配布物](../../raw/archive.org/download/msie-30-a-1/MSIE30A1.EXE)（[公開元](https://archive.org/download/msie-30-a-1/MSIE30A1.EXE)） [IE3 alpha release notes](../../raw/archive.org/download/msie-30-a-1/IE30.TXT)（[公開元](https://archive.org/download/msie-30-a-1/IE30.TXT)）

Microsoftは4月30日、IE3の表とフレーム向け新HTML拡張をW3Cへ提出したと発表し、5月29日のIE3ベータ発表で枠なしフレームと浮動フレームの対応を明記した。7月11日付`MSHTML.DLL`を含むIE3 beta 2配布物では、タグ表にリテラル`IFRAME`があり、浮動フレームの元内容へ戻るための文言と旧浮動フレーム構文への警告も実装されている。これによりIE3が`IFRAME`を実装したことは確認できるが、4月の提出集合の本文とW3Cによる採用判断は含まれない。[Microsoft 4月発表](../../raw/news.microsoft.com/source/1996/04/30/microsoft-previews-internet-explorer-3-0-with-innovative-support-for-sharing-of-voice-applications-over-the-world-wide-web/__index)（[公開元](https://news.microsoft.com/source/1996/04/30/microsoft-previews-internet-explorer-3-0-with-innovative-support-for-sharing-of-voice-applications-over-the-world-wide-web/)） [Microsoft 5月発表](../../raw/news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/__index)（[公開元](https://news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/)） [IE3 beta 2配布物](../../raw/archive.org/download/msie30b2-ja/Microsoft%20Internet%20Explorer%203.0%20For%20Windows%2095%20Beta%202%20%5BJapanese%5D%20%5B1996-7%5D%20%5BEXE%5D.rar)（[公開元](https://archive.org/download/msie30b2-ja/Microsoft%20Internet%20Explorer%203.0%20For%20Windows%2095%20Beta%202%20%5BJapanese%5D%20%5B1996-7%5D%20%5BEXE%5D.rar)）

W3Cは1997年3月31日の*Implementing HTML Frames*で、`IFRAME`を複合文書のための新要素として提案し、HTML Working GroupでCougarへの統合候補として審議中だと記した。7月8日のHTML 4.0 Working Draftがこれを収録し、12月18日のRecommendationが通常のテキスト内へ外部文書を置く行内子ウィンドウとして標準化した。[frames草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)） [HTML 4 WD](../../raw/www.w3.org/TR/WD-html40-970708/present/frames.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/present/frames.html)） [HTML 4 Recommendation](../../raw/www.w3.org/TR/REC-html40-971218/present/frames.html)（[公開元](https://www.w3.org/TR/REC-html40-971218/present/frames.html#edef-IFRAME)）

## HTML直前の祖先

1997年のW3Cフレーム草案は、`IFRAME`を`FRAME`に似ているが`FRAMESET`ではなく`BODY`内で使う要素とし、通常のフレームを文書の流れへ置き、`IMG`と同様に配置する設計を直接説明する。ただしMicrosoftの浮動フレーム実装からこのW3C要素へ採録された因果は示さない。[W3C frames草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)）

## さらに上流の由来

### 証拠

W3C草案では`IFRAME`の属性の大半を`FRAME`から取り、`ALIGN`は`IMG`と同じ値と意味を持たせている。一方、既存の`OBJECT`でも複合文書を作れるため`IFRAME`は不要だという代替案も併記する。[W3C frames草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)）

IE3 beta 2の`MSHTML.DLL`は、`IFRAME`を認識するタグ表と浮動フレームの元内容へ戻るための文言を同時に含むため、Microsoft実装内でリテラル`IFRAME`と浮動フレームを接続する。[IE3 beta 2配布物](../../raw/archive.org/download/msie30b2-ja/Microsoft%20Internet%20Explorer%203.0%20For%20Windows%2095%20Beta%202%20%5BJapanese%5D%20%5B1996-7%5D%20%5BEXE%5D.rar)（[公開元](https://archive.org/download/msie30b2-ja/Microsoft%20Internet%20Explorer%203.0%20For%20Windows%2095%20Beta%202%20%5BJapanese%5D%20%5B1996-7%5D%20%5BEXE%5D.rar)）

Microsoftの後代DHTML参照は`IFRAME`を浮動 `FRAME`と結び付ける一方、HTMLとスクリプトの双方でIE4から利用可能とする。IE3 beta 2の実装によってHTMLタグのIE3対応は確認できるが、後代参照がIE4とする理由は説明しない。[Microsoft DHTML reference保存複製](../../raw/documentation.help/HTMLREF/documentation.pdf)（[公開元](https://documentation.help/HTMLREF/documentation.pdf)）

### 解釈

W3C `IFRAME`は`FRAME`のナビゲーションモデルと`IMG`の文書の流れ内配置を組み合わせた要素である。Microsoft IE3 beta 2が先に同名の浮動フレームを実装し、フレーム拡張集合の提出も確認できるが、時間的先行と同名・同機能だけからW3C案への採用因果は推定しない。

## 系譜

Microsoft IE3通常フレーム（1996-03、`IFRAME`なし） → IE3浮動フレーム／`IFRAME`実装（1996-05〜07） → Microsoftフレーム拡張集合のW3C提出と同じ時期だが、W3C案への採用因果は未確認

`FRAME`モデル＋`IMG`型の文書の流れ内配置 → W3C `IFRAME`提案（1997-03-31） → HTML 4.0 Working Draft `IFRAME` → HTML 4.0 Recommendation `IFRAME` → 現行HTML `<iframe>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-03-09 | [IE3 alpha配布物](../../raw/archive.org/download/msie-30-a-1/MSIE30A1.EXE)（[公開元](https://archive.org/download/msie-30-a-1/MSIE30A1.EXE)） | ベンダー実装・配布物 | 同梱`MSHTML.DLL`のビルド日時は3月9日で、タグ表に`FRAMESET`と`NOFRAMES`はあるが`IFRAME`はない。 | 2026-08-12 |
| 1996-03 | [IE3 alpha release notes](../../raw/archive.org/download/msie-30-a-1/IE30.TXT)（[公開元](https://archive.org/download/msie-30-a-1/IE30.TXT)） | ベンダー同梱文書 | HTMLフレームと枠なしフレームを新機能として挙げるが、浮動フレームまたは`IFRAME`は挙げない。 | 2026-08-12 |
| 1996-04-30 | [Microsoft IE3 preview発表](../../raw/news.microsoft.com/source/1996/04/30/microsoft-previews-internet-explorer-3-0-with-innovative-support-for-sharing-of-voice-applications-over-the-world-wide-web/__index)（[公開元](https://news.microsoft.com/source/1996/04/30/microsoft-previews-internet-explorer-3-0-with-innovative-support-for-sharing-of-voice-applications-over-the-world-wide-web/)） | ベンダー公式製品発表 | IE3の表とフレーム向け新HTML拡張をMicrosoftがW3Cへ提出した。個別要素名はない。 | 2026-08-10 |
| 1996-05-29 | [Microsoft IE3 beta発表](../../raw/news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/__index)（[公開元](https://news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/)） | ベンダー公式製品発表 | IE3が枠なしフレームと浮動フレームを対応。ただし`IFRAME`名なし。 | 2026-08-10 |
| 1996-07-11 | [IE3 beta 2配布物](../../raw/archive.org/download/msie30b2-ja/Microsoft%20Internet%20Explorer%203.0%20For%20Windows%2095%20Beta%202%20%5BJapanese%5D%20%5B1996-7%5D%20%5BEXE%5D.rar)（[公開元](https://archive.org/download/msie30b2-ja/Microsoft%20Internet%20Explorer%203.0%20For%20Windows%2095%20Beta%202%20%5BJapanese%5D%20%5B1996-7%5D%20%5BEXE%5D.rar)） | ベンダー実装・配布物 | 同梱`MSHTML.DLL`のビルド日時は7月11日で、タグ表の`IFRAME`と、浮動フレームの元内容および旧構文に関する実装文字列を含む。 | 2026-08-12 |
| 1997-03-31 | [*Implementing HTML Frames*](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)） | W3C Working Draft | `IFRAME`をCougar統合候補の新要素として提案し、`FRAME`と`IMG`による設計モデル、`OBJECT`代替案、DTDを記録。 | 2026-08-10 |
| 1997-07-08 | [HTML 4.0 Working Draft](../../raw/www.w3.org/TR/WD-html40-970708/present/frames.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/present/frames.html)） | W3C Working Draft | `IFRAME`をHTML 4草案へ収録。 | 2026-08-10 |
| 1997-12-18 | [HTML 4.0 Recommendation §16.5](../../raw/www.w3.org/TR/REC-html40-971218/present/frames.html)（[公開元](https://www.w3.org/TR/REC-html40-971218/present/frames.html#edef-IFRAME)） | W3C Recommendation | 行内子ウィンドウ、代替内容、通常の文書の流れ内利用を標準化。 | 2026-08-10 |
| 1999著作権 | [Microsoft DHTML reference](../../raw/documentation.help/HTMLREF/documentation.pdf)（[公開元](https://documentation.help/HTMLREF/documentation.pdf)） | ベンダー文書の保存複製 | `IFRAME`を浮動 `FRAME`と呼ぶ一方、HTMLとスクリプトの双方でIE4から利用可能とする。 | 2026-08-11 |

## 確度

**A**

W3C草案が`FRAME`の属性とナビゲーションモデルを引き継ぎ、`IMG`と同じ文書の流れ内配置を与えて`IFRAME`を設計した要素単位の関係を直接説明するため。Microsoft実装からW3Cへの採録経路は別の未確認区間として残る。

## 否定された仮説

IE3の浮動フレーム機能をW3C `IFRAME`の直接祖先と確定する説明。IE3 beta 2の要素名と実装は確認できたが、W3Cによる採録記録がない。`OBJECT`からの改名または派生という説明も、W3C草案が両者を競合する代替案として比較するため採用しない。

## 未解決

- MicrosoftがW3Cへ提出したフレーム拡張集合に浮動フレームまたは`IFRAME`が含まれ、1997年W3C案がそれを採録したと示す資料はあるか。
- Microsoft内部の提案者と通常の`FRAME`からの派生過程を示す資料はあるか。
- IE3発表と後代参照のIE4表記が食い違う理由は何か。
