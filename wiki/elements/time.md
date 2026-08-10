---
status: 完成
---

# `<time>`

## 概要

WHATWG草案の`<t>`を2006年に`<time>`へ改名した要素である。2011年に一度`data`へ置換された後、約3週間後に再導入され、現行のmachine-readableな日付・時刻・durationの設計へ続く。

## 現在の意味

WHATWG HTML Living Standardでは、内容とそのmachine-readable formを`datetime`属性で表す。対象は仕様が定める形式の日付、時刻、time-zone offset、durationに限られる。[HTML Living Standard](../../raw/html-living-standard/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element)、2026-08-09確認）

## HTMLへの導入

2006年10月26日のIan HicksonによるWHATWG仕様commitは`<t> element, draft the first`として、date/timeを表す`<t>`、machine-readableな`datetime`、DOM attributes、具体例を追加した。[`<t>`初稿commit](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)

2006年11月23日のcommitは`<t> becomes <time>`と明記し、要素名、`datetime`、DOM interface、例を一括して改名しつつdate and/or timeという意味を維持した。[改名commit](https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)

2011年10月29日に`time`は一時`data`へ置換されたが、11月18日に再導入され、内容と`datetime`内のmachine-readable form、month、date、yearless date、time、time-zone offset、duration等が規定された。[削除commit](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d) [再導入commit](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)

## HTML直前の祖先

WHATWG草案の`<t>`要素である。2006年commitが`<t>`から`<time>`への改名を要素単位で直接明記し、意味と`datetime`を継承する。

## さらに上流の由来

### 証拠

2006年10月のcommitは、`<t>`をdate/timeとmachine-readableな`datetime`の組として具体化した。HTML外のmarkup vocabularyやmicroformatから採用した記述はない。[`<t>`初稿commit](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)

### 解釈

確定系譜はWHATWG草案の`<t>`から始める。hCalendar、Atom、HTML 4 `INS`／`DEL`の`datetime`は関連候補だが、要素の採用元として接続しない。

## 系譜

WHATWG `<t>`（2006年） → `<time>`への改名 → `data`へ一時置換（2011-10） → `<time>`再導入（2011-11） → 現行HTML `<time>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2006-03-29 | [WHATWG commit `f8514de7`](../../raw/whatwg-html-history/139e75f85d07a740-f8514de7d2d2f408e0f695dd1af3dc110f5.html)（[公開元](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)） | 仕様source commit | `<t>`を作業対象とし、date/time elementの初期記述を含む。 | 2026-08-09 |
| 2006-10-26 | [WHATWG commit `6bdcd9dc`](../../raw/whatwg-html-history/e3a5503173cded5e-6bdcd9dc9da3f21cb61f0f8c123ed2d252c.html)（[公開元](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)） | 仕様source commit | `<t>`初稿として意味、`datetime`、DOM、例を具体化。 | 2026-08-09 |
| 2006-11-23 | [WHATWG commit `fdfe6548`](../../raw/whatwg-html-history/a57454266000a01f-fdfe6548265125712520f3e1b72812235e9.html)（[公開元](https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)） | 仕様source commit | `<t>`から`time`への明示的改名。 | 2026-08-09 |
| 2011-10-29 | [WHATWG commit `70b0ce45`](../../raw/whatwg-html-history/d0424350d05c22ec-70b0ce45a26937a3f26eeb72b146261ff62.html)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)） | 仕様source commit | `time`を削除し`data`へ置換。 | 2026-08-09 |
| 2011-11-18 | [WHATWG commit `92baa833`](../../raw/whatwg-html-history/7119347824c33ec2-92baa8333203ea5b97316bb1775331b216d.html)（[公開元](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)） | 仕様source commit | `time`をmachine-readable date/time/duration要素として再導入。 | 2026-08-09 |

## 確度

**A**

現行要素の具体的な前身`<t>`からの改名と設計継承を、WHATWGの仕様commitが要素単位で直接明記するため。

## 否定された仮説

`data`を唯一の起源とする説明。`time`は2006年から存在し、`data`は2011年の短い置換区間である。hCalendar／Atom、HTML 4 `INS`／`DEL`の`datetime`からの直接採用も確認できない。

## 未解決

- `<t>`の最初の提案mail、提案者、use cases、単文字名を選んだ理由は何か。
- `<t> → time`改名を促したissueまたは議論はあるか。
- 2006年設計がmicroformatsや他のmarkup vocabularyを参照したか。
- 2011年の削除と再導入を決定した全議論とtrade-offは何か。
