# `<footer>`

> 状態: 完成

## 概要

2004年11月までにWHATWGのsemantic element集合として提案され、2005年草案ではsectionに関する著者・著作権等の情報を表した。既存`footer` classからの採用因果は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、最も近い祖先sectioning content、該当する祖先がなければ`body`のfooterを表す。通常は著者、関連文書、著作権等、そのsectionについての情報を含む。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element)（2026-08-09確認）

## HTMLへの導入

2004年11月10日のWHATWG議論で、汎用`div`では区別できないsemantic element集合の一つとして確認できる。2005年9月1日草案は、sectionに関する情報を表し、通常は末尾に置く要素として定義した。[2004年議論](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-footer)

## HTML直前の祖先

未確認。2005年12月のGoogle調査は既存class `footer`とHTML5 `footer`の対応を示すが、草案より後の公表であり採用因果は示さない。

## さらに上流の由来

### 証拠

2004年の議論はsemantic rolesを汎用`div`から区別する設計要求を示し、後発usage調査は既存Webに`footer` classが広く存在したことを示す。

### 解釈

既存Webでclass付きcontainerとして表現されていたfooter roleを専用要素で機械可読にする設計と解釈できるが、個別の採用経路は確定しない。

## 系譜

WHATWG `footer`提案（2004年まで） → Web Applications 1.0 `footer`（2005年） → 現行HTML `footer`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-11-10 | Semantic elements and spec complexity | WHATWG mailing list | `footer`を含むsemantic element集合と汎用`div`との差。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) | 2026-08-09 |
| 2005-09-01 | Web Applications 1.0 | WHATWG保存Early Working Draft | sectionに関する著者・著作権等の情報を表す`footer`。 | [一次資料](https://whatwg.org/specs/web-apps/2005-09-01/#the-footer) | 2026-08-09 |
| 2005-12 | Web Authoring Statistics: Classes | Googleによる当時のusage調査（保存複製） | 既存`footer` classとHTML5 `footer`の対応。 | [一次資料](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html) | 2026-08-09 |

## 確度

**B**

HTMLへの導入要求と設計モデルは確認できるが、具体的な既存classまたは語彙からの採用因果は確認できないため。

## 否定された仮説

既存`footer` classから直接採用したという説明。usage調査は対応を示すが、採用行為を述べない。

## 未解決

- 2004年提案の個別提案者と正確な初出は確認できるか。
- usage調査のdatasetが草案編集前に使われたことを示す記録はあるか。
