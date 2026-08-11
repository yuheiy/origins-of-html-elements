---
status: 完成
---

# `<iframe>`

## 概要

Microsoft IE3の浮動フレーム機能、Microsoftによるフレーム拡張集合のW3C提出、W3Cの`IFRAME`提案を確認できる。ただし、Microsoftの提出集合に`IFRAME`が含まれ、W3C案がそれを採録したという要素単位の接続は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、その子ナビゲーション対象を表す。`src`はそこに含めるページのURLを、`srcdoc`は埋め込むページの内容を与え、`sandbox`などによって埋め込み文脈を制限できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/iframe-embed-object.html)（[公開版](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)、2026-08-09確認）

## HTMLへの導入

Microsoftは1996年4月30日、IE3の表とフレーム向け新HTML拡張をW3Cへ提出したと発表し、5月29日のIE3ベータ発表で枠なしフレームと浮動フレームの対応を明記した。ただし、どちらも`IFRAME`という要素名を記していない。[Microsoft 4月発表](../../raw/news.microsoft.com/source/1996/04/30/microsoft-previews-internet-explorer-3-0-with-innovative-support-for-sharing-of-voice-applications-over-the-world-wide-web/index.html)（[公開元](https://news.microsoft.com/source/1996/04/30/microsoft-previews-internet-explorer-3-0-with-innovative-support-for-sharing-of-voice-applications-over-the-world-wide-web/)） [Microsoft 5月発表](../../raw/news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/index.html)（[公開元](https://news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/)）

W3Cは1997年3月31日の*Implementing HTML Frames*で、`IFRAME`を複合文書のための新要素として提案し、HTML Working GroupでCougarへの統合候補として審議中だと記した。7月8日のHTML 4.0 Working Draftがこれを収録し、12月18日のRecommendationが通常のテキスト内へ外部文書を置く行内子ウィンドウとして標準化した。[frames草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)） [HTML 4 WD](../../raw/www.w3.org/TR/WD-html40-970708/present/frames.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/present/frames.html)） [HTML 4 Recommendation](../../raw/www.w3.org/TR/REC-html40-971218/present/frames.html)（[公開元](https://www.w3.org/TR/REC-html40-971218/present/frames.html#edef-IFRAME)）

## HTML直前の祖先

1997年のW3Cフレーム草案は、`IFRAME`を`FRAME`に似ているが`FRAMESET`ではなく`BODY`内で使う要素とし、通常のフレームを文書の流れへ置き、`IMG`と同様に配置する設計を直接説明する。ただしMicrosoftの浮動フレーム実装からこのW3C要素へ採録された因果は示さない。[W3C frames草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)）

## さらに上流の由来

### 証拠

W3C草案では`IFRAME`の属性の大半を`FRAME`から取り、`ALIGN`は`IMG`と同じ値と意味を持たせている。一方、既存の`OBJECT`でも複合文書を作れるため`IFRAME`は不要だという代替案も併記する。[W3C frames草案](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)）

Microsoftの後代DHTML参照は`IFRAME`を浮動 `FRAME`と結び付ける一方、HTMLとスクリプトの双方でIE4から利用可能とする。この記述はIE3の浮動フレーム機能とリテラル `IFRAME`を接続せず、IE3発表との不一致を残す。[Microsoft DHTML reference保存複製](../../raw/documentation.help/HTMLREF/documentation.pdf)（[公開元](https://documentation.help/HTMLREF/documentation.pdf)）

### 解釈

W3C `IFRAME`は`FRAME`のナビゲーションモデルと`IMG`の文書の流れ内配置を組み合わせた要素である。Microsoft IE3の浮動フレームとの機能的一致とフレーム拡張集合の提出は確認できるが、提出集合から`IFRAME`への対応は推定しない。

## 系譜

Microsoft IE3フレーム拡張集合（1996年、浮動フレームを含む。W3Cへ集合単位で提出。`IFRAME`との対応は未確認）

`FRAME`モデル＋`IMG`型の文書の流れ内配置 → W3C `IFRAME`提案（1997-03-31） → HTML 4.0 Working Draft `IFRAME` → HTML 4.0 Recommendation `IFRAME` → 現行HTML `<iframe>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1996-04-30 | [Microsoft IE3 preview発表](../../raw/news.microsoft.com/source/1996/04/30/microsoft-previews-internet-explorer-3-0-with-innovative-support-for-sharing-of-voice-applications-over-the-world-wide-web/index.html)（[公開元](https://news.microsoft.com/source/1996/04/30/microsoft-previews-internet-explorer-3-0-with-innovative-support-for-sharing-of-voice-applications-over-the-world-wide-web/)） | ベンダー公式製品発表 | IE3の表とフレーム向け新HTML拡張をMicrosoftがW3Cへ提出した。個別要素名はない。 | 2026-08-10 |
| 1996-05-29 | [Microsoft IE3 beta発表](../../raw/news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/index.html)（[公開元](https://news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/)） | ベンダー公式製品発表 | IE3が枠なしフレームと浮動フレームを対応。ただし`IFRAME`名なし。 | 2026-08-10 |
| 1997-03-31 | [*Implementing HTML Frames*](../../raw/www.w3.org/TR/WD-frames-970331)（[公開元](https://www.w3.org/TR/WD-frames-970331)） | W3C Working Draft | `IFRAME`をCougar統合候補の新要素として提案し、`FRAME`と`IMG`による設計モデル、`OBJECT`代替案、DTDを記録。 | 2026-08-10 |
| 1997-07-08 | [HTML 4.0 Working Draft](../../raw/www.w3.org/TR/WD-html40-970708/present/frames.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/present/frames.html)） | W3C Working Draft | `IFRAME`をHTML 4草案へ収録。 | 2026-08-10 |
| 1997-12-18 | [HTML 4.0 Recommendation §16.5](../../raw/www.w3.org/TR/REC-html40-971218/present/frames.html)（[公開元](https://www.w3.org/TR/REC-html40-971218/present/frames.html#edef-IFRAME)） | W3C Recommendation | 行内子ウィンドウ、代替内容、通常の文書の流れ内利用を標準化。 | 2026-08-10 |
| 1999著作権 | [Microsoft DHTML reference](../../raw/documentation.help/HTMLREF/documentation.pdf)（[公開元](https://documentation.help/HTMLREF/documentation.pdf)） | ベンダー文書の保存複製 | `IFRAME`を浮動 `FRAME`と呼ぶ一方、HTMLとスクリプトの双方でIE4から利用可能とする。 | 2026-08-11 |

## 確度

**A**

W3C草案が`FRAME`の属性とナビゲーションモデルを引き継ぎ、`IMG`と同じ文書の流れ内配置を与えて`IFRAME`を設計した要素単位の関係を直接説明するため。Microsoft実装からW3Cへの採録経路は別の未確認区間として残る。

## 否定された仮説

IE3の浮動フレーム機能を、要素名と採録記録なしにW3C `IFRAME`の直接祖先と確定する説明。`OBJECT`からの改名または派生という説明も、W3C草案が両者を競合する代替案として比較するため採用しない。

## 未解決

- IE3のMicrosoft HTML参照、SDK、テスト文書等にリテラル `<IFRAME>`を示す1996年一次資料はあるか。
- MicrosoftがW3Cへ提出したフレーム拡張集合に浮動フレームまたは`IFRAME`が含まれ、1997年W3C案がそれを採録したと示す資料はあるか。
- Microsoft内部の提案者と通常の`FRAME`からの派生過程を示す資料はあるか。
- IE3発表と後代参照のIE4表記が食い違う理由は何か。
