---
status: 完成
---

# `<iframe>`

## 概要

Microsoft IE3のfloating-frame機能とW3C HTML 4のinline frameを確認できるが、1996年Microsoft一次資料に`IFRAME`という要素名がなく、その間の採録経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、そのcontent navigableを表す。`src`はそこに含めるpageのURLを、`srcdoc`は埋め込むpageの内容を与え、`sandbox`などによって埋め込み文脈を制限できる。[一次定義](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)（2026-08-09確認）

## HTMLへの導入

Microsoftは1996年5月29日のIE3 beta発表でfloating framesのsupportを明記したが、`IFRAME`というtag名は記していない。W3Cは1997年7月のHTML 4.0 Working Draftで`IFRAME`を公開し、同年12月のRecommendationで通常のtext内へ外部documentを置くinline subwindowとして標準化した。[Microsoft発表](https://news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/) [HTML 4 WD](https://www.w3.org/TR/WD-html40-970708/present/frames.html) [HTML 4 Recommendation](https://www.w3.org/TR/REC-html40-971218/present/frames.html#edef-IFRAME)

## HTML直前の祖先

通常のframes／floating-frame featureが設計モデルである。ただしMicrosoftのfeatureからW3Cの`IFRAME`要素へ採録された因果を直接示す資料は未確認であり、両者を系譜の矢印で結ばない。

## さらに上流の由来

### 証拠

Microsoftの後代DHTML referenceは`IFRAME`をfloating `FRAME`と結び付けるが、HTMLとscriptでIE4から利用可能と記し、IE3発表と版が食い違う。[Microsoft DHTML reference保存複製](https://documentation.help/HTMLREF/iframe.htm)

### 解釈

Microsoft IE3のfloating framesとW3C `IFRAME`の機能的一致は強いが、要素単位の導入因果と採録記録がないため同一系譜とは確定しない。

## 系譜

Microsoft IE3 floating-frame feature（1996年、`IFRAME`名は未確認）

W3C HTML 4.0 Working Draft `IFRAME`（1997年） → HTML 4.0 Recommendation `IFRAME` → 現行HTML `<iframe>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1996-05-29 | Microsoft IE3 beta発表 | vendor公式製品発表 | IE3がborderless and floating framesをsupport。ただし`IFRAME`名なし。 | [一次資料](https://news.microsoft.com/source/1996/05/29/microsoft-internet-explorer-3-0-beta-now-available/) | 2026-08-09 |
| 1997-07-08 | HTML 4.0 Working Draft | W3C Working Draft | `IFRAME`を名前付き要素として公開仕様に定義。 | [一次資料](https://www.w3.org/TR/WD-html40-970708/present/frames.html) | 2026-08-09 |
| 1997-12-18 | HTML 4.0 Recommendation §16.5 | W3C Recommendation | inline subwindow、fallback、通常のdocument flow内利用を標準化。 | [一次資料](https://www.w3.org/TR/REC-html40-971218/present/frames.html#edef-IFRAME) | 2026-08-09 |
| 1999 copyright | Microsoft DHTML reference | vendor文書の保存複製 | `IFRAME`とfloating `FRAME`を結ぶがIE4から利用可能と記し、IE3発表と矛盾。 | [保存複製](https://documentation.help/HTMLREF/iframe.htm) | 2026-08-09 |

## 確度

**B**

floating-frameという導入要求とW3Cでの要素定義は確認できるが、Microsoftによる要素単位の導入因果とW3Cへの採録経路を固定できないため。

## 否定された仮説

IE3のfloating-frame機能を、資料なしに`IFRAME`要素そのものと同定する説明。後代Microsoft referenceのIE4表記を、根拠なくscript supportだけの開始時期と読み替える説明も採用しない。

## 未解決

- IE3のMicrosoft HTML reference等に`<IFRAME>`というliteral tagを示す1996年一次資料はあるか。
- Microsoft内部の提案者、通常の`FRAME`からの派生、W3Cへの提出時期を示す資料はあるか。
- IE3発表と後代referenceのIE4表記が食い違う理由は何か。
