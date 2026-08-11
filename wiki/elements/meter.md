---
status: 完成
---

# `<meter>`

## 概要

`meter`は2006年、WHATWG Web Applications 1.0のWIP `gauge`を改名し、既知範囲のscalar measurementを表す要素として仕様化された。

## 現在の意味

WHATWG HTML Living Standardでは、既知範囲内のscalar measurementまたはfractional valueを表す。task progressには使わない。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element)、2026-08-09確認）

## HTMLへの導入

WHATWG公式Gitの初回収録である2006年3月2日のsourceにはWIP `gauge`が存在した。Ian Hicksonは3月29日のrevision 15で同じ節を`meter`へ改名し、`min`, `max`, `value`, `low`, `high`, `optimum`とDOM interfaceを具体化した。[初回Git収録](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648) [仕様化commit](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)

## HTML直前の祖先

WHATWG Web Applications 1.0の`gauge`要素。Git差分が同じ節の改名と、既知範囲のmeasurementという意味の継承を直接示す。

## さらに上流の由来

### 証拠

初回Git収録の`gauge`はdisk usageとquery result relevanceを例示し、fraction、quota usage、vote share、good／bad rangeの表現を検討していた。

### 解釈

一般的な計器の外見ではなく、値の範囲と望ましい領域をmachine-readableに表す要求が`gauge`から`meter`へ引き継がれた。

## 系譜

WHATWG Web Applications 1.0 `gauge` → 2006年revision 15 `meter` → HTML5 `meter` → 現行HTML `meter`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2006-03-02 | [WHATWG HTML commit `c3550d90`](../../raw/github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)（[公開元](https://github.com/whatwg/html/commit/c3550d90867392905edbd91c94fec8c89fbfe648)） | 仕様source・初回Git収録 | WIP `gauge`の初期意味と検討中の処理 | 2026-08-09 |
| 2006-03-29 | [WHATWG HTML commit `f8514de7`（revision 15）](../../raw/github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)（[公開元](https://github.com/whatwg/html/commit/f8514de7d2d2f408e0f695dd1af3dc110f556c00)） | 仕様commit | `gauge`から`meter`への改名、意味・属性・DOM modelの具体化 | 2026-08-09 |
| 2006-03-28 | [*Web Applications 1.0*, revision 15](../../raw/platform.html5.org/history/webapps/r15.html)（[公開元](https://platform.html5.org/history/webapps/r15.html#the-meter)） | WHATWG保存仕様 | `meter`の同時代定義と`progress`との役割分離 | 2026-08-09 |
| 2026-08-09 | [*HTML Living Standard: The meter element*](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開元](https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element)） | 現行仕様 | `meter`の現行定義 | 2026-08-09 |

## 確度

**A**

同じ仕様節の`gauge`から`meter`への改名と設計の継承を要素単位のGit差分で確認できる。

## 否定された仮説

特定OSのmeter widget、CSS progress bar、または計器一般から直接採用されたとは確認できないため、外見と名称だけで由来へ結ばない。

## 未解決

- 初回Git収録より前に`gauge`を追加した草案、提案者、議論は確認できるか。
- `gauge`から`meter`へ改名した理由は何か。
- `low`, `high`, `optimum`の三領域modelを提案した一次資料はあるか。
