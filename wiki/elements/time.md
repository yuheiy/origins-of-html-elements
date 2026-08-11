---
status: 完成
---

# `<time>`

## 概要

WHATWG草案の`<t>`を2006年に`<time>`へ改名した要素である。2011年に一度`data`へ置換された後、約3週間後に再導入され、現行の機械可読な日付・時刻・継続時間の設計へ続く。

## 現在の意味

WHATWG HTML Living Standardでは、内容とその機械可読な形式を`datetime`属性で表す。対象は仕様が定める形式の日付、時刻、タイムゾーンオフセット、継続時間に限られる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element)、2026-08-09確認）

## HTMLへの導入

2006年10月26日のIan HicksonによるWHATWG仕様コミットは`<t> element, draft the first`として、日付と時刻を表す`<t>`、機械可読な`datetime`、DOM属性、具体例を追加した。[`<t>`初稿コミット](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)

2006年11月23日のコミットは`<t> becomes <time>`と明記し、要素名、`datetime`、DOMインターフェース、例を一括して改名しつつ日付および時刻という意味を維持した。[改名コミット](https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)

2011年10月29日に`time`は一時`data`へ置換されたが、11月18日に再導入され、内容と`datetime`内の機械可読な形式、月、日付、年なし日付、時刻、タイムゾーンオフセット、継続時間等が規定された。[削除コミット](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d) [再導入コミット](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)

## HTML直前の祖先

WHATWG草案の`<t>`要素である。2006年コミットが`<t>`から`<time>`への改名を要素単位で直接明記し、意味と`datetime`を継承する。

## さらに上流の由来

### 証拠

2006年10月のコミットは、`<t>`を日付と時刻と機械可読な`datetime`の組として具体化した。HTML外のマークアップ語彙やマイクロフォーマットから採用した記述はない。[`<t>`初稿コミット](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)

### 解釈

確定系譜はWHATWG草案の`<t>`から始める。hCalendar、Atom、HTML 4 `INS`／`DEL`の`datetime`は関連候補だが、要素の採用元として接続しない。

## 系譜

WHATWG `<t>`（2006年） → `<time>`への改名 → `data`へ一時置換（2011-10） → `<time>`再導入（2011-11） → 現行HTML `<time>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2006-03-29 | [WHATWGコミット `f8514de7`](../../raw/github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)（[公開元](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)） | 仕様ソースのコミット | `<t>`を作業対象とし、日付と時刻要素の初期記述を含む。 | 2026-08-09 |
| 2006-10-26 | [WHATWGコミット `6bdcd9dc`](../../raw/github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)（[公開元](https://github.com/whatwg/html/commit/6bdcd9dc9da3f21cb61f0f8c123ed2d252cd2583)） | 仕様ソースのコミット | `<t>`初稿として意味、`datetime`、DOM、例を具体化。 | 2026-08-09 |
| 2006-11-23 | [WHATWGコミット `fdfe6548`](../../raw/github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)（[公開元](https://github.com/whatwg/html/commit/fdfe6548265125712520f3e1b72812235e9a8123)） | 仕様ソースのコミット | `<t>`から`time`への明示的改名。 | 2026-08-09 |
| 2011-10-29 | [WHATWGコミット `70b0ce45`](../../raw/github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)（[公開元](https://github.com/whatwg/html/commit/70b0ce45a26937a3f26eeb72b146261ff6210a1d)） | 仕様ソースのコミット | `time`を削除し`data`へ置換。 | 2026-08-09 |
| 2011-11-18 | [WHATWGコミット `92baa833`](../../raw/github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)（[公開元](https://github.com/whatwg/html/commit/92baa8333203ea5b97316bb1775331b216d55dab)） | 仕様ソースのコミット | `time`を機械可読日付と時刻／継続時間要素として再導入。 | 2026-08-09 |

## 確度

**A**

現行要素の具体的な前身`<t>`からの改名と設計継承を、WHATWGの仕様コミットが要素単位で直接明記するため。

## 否定された仮説

`data`を唯一の起源とする説明。`time`は2006年から存在し、`data`は2011年の短い置換区間である。hCalendar／Atom、HTML 4 `INS`／`DEL`の`datetime`からの直接採用も確認できない。

## 未解決

- `<t>`の最初の提案メール、提案者、利用例、単文字名を選んだ理由は何か。
- `<t> → time`改名を促した論点または議論はあるか。
- 2006年設計がMicroformatsや他のマークアップ語彙を参照したか。
- 2011年の削除と再導入を決定した全議論とトレードオフは何か。
