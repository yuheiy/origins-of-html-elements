# `<header>`

> 状態: 2004–2005年WHATWGでの導入と設計モデルを検証済み（現行要素の再導入経路は未確認）

## 概要

2004年11月までにWHATWGのsemantic element集合として提案され、2005年草案ではsectionのheadingを表すcontainerだった。2009年に旧`header`が`hgroup`へ改名された後、現行`header`が再導入された正確な経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、導入またはナビゲーションを支援する内容群を表す。通常は見出しを含むが必須ではなく、目次、検索form、logo等も含められる。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-header-element)（2026-08-09確認）

## HTMLへの導入

2004年11月10日のWHATWG議論で、汎用`div`では区別できないsemantic element集合の一つとして`header`が確認できる。2005年9月1日草案はsectionのheadingを表すcontainerとして定義した。2009年4月30日にこの旧`header`はsubheading用の`hgroup`へ改名されたが、section header用の現行`header`を再導入したcommitは確認できない。[2004年議論](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-header)

## HTML直前の祖先

未確認。2005年12月のGoogle調査は既存class `title`, `header`, `top`とHTML5 `header`の対応を示すが、草案より後の公表であり採用因果は示さない。

## さらに上流の由来

### 証拠

2004年の議論は、semantic rolesを汎用`div`から区別する設計要求を示す。後発usage調査から既存class慣習との対応も観察できる。

### 解釈

既存Webでclass付きcontainerとして表現されていたheader roleを専用要素で機械可読にする設計と解釈できるが、個別classからの採用は確定しない。

## 系譜

WHATWG `header`提案（2004年まで） → Web Applications 1.0 `header`（2005年） → `hgroup`への改名（2009年）

現行HTML `header`への再導入経路は未確認のため矢印で接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-11-10 | Semantic elements and spec complexity | WHATWG mailing list | `header`を含むsemantic element集合と、汎用`div`との差に関する議論。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) | 2026-08-09 |
| 2005-09-01 | Web Applications 1.0 | WHATWG保存Early Working Draft | sectionのheadingを表す`header`。 | [一次資料](https://whatwg.org/specs/web-apps/2005-09-01/#the-header) | 2026-08-09 |
| 2005-12 | Web Authoring Statistics: Classes | Googleによる当時のusage調査（保存複製） | `title`, `header`, `top` classとHTML5 `header`の対応。 | [一次資料](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html) | 2026-08-09 |
| 2009-04-30 | WHATWG HTML commit `7e9b2d1b` | 仕様commit | 旧`header`を`hgroup`へ改名しsubheading用へ限定。 | [一次資料](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4) | 2026-08-09 |

## 確度

**B**

導入時の設計要求と意味は確認できるが具体的祖先は未確認であり、2009年の改名後に現行`header`を再導入した経路も欠けるため。

## 否定された仮説

既存class `header`から直接採用したという説明。usage調査は意味上の対応を示すが採用行為を述べない。2005年の旧`header`から現行`header`まで連続していたという説明も、2009年の`hgroup`への改名があるため採用しない。

## 未解決

- 現行`header`を旧`header → hgroup`の後に再導入した正確なcommitと理由は何か。
- 2004年提案より前の具体的なmarkup祖先と個別提案者は確認できるか。

## 調査記録

2004年WHATWG mailing list、2005年保存草案、Google usage調査、2009年改名commitを確認した。現行`header`の再導入commitは確認できなかった。横断比較は[HTML5 semantic elements調査ノート](../research/html5-semantic-elements.md)を参照する。
