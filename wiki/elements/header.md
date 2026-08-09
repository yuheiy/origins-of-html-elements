# `<header>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。2004–2005年の旧要素と、2009年の`hgroup`分離・現行要素再導入を検証済み

## 概要

2004年11月までにWHATWGのsemantic element集合として提案され、2005年草案ではsectionのheadingを表すcontainerだった。2009年4月30日に旧`header`のheading group用途を`hgroup`へ移し、その直後に見出し、目次、検索form、logo、navigationをまとめる現行系統の`header`を新設した。

## 現在の意味

WHATWG HTML Living Standardでは、導入またはナビゲーションを支援する内容群を表す。通常は見出しを含むが必須ではなく、目次、検索form、logo等も含められる。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-header-element)（2026-08-09確認）

## HTMLへの導入

2004年11月10日のWHATWG議論で、汎用`div`では区別できないsemantic element集合の一つとして`header`が確認できる。2005年9月1日草案はsectionのheadingを表すcontainerとして定義した。2009年4月30日のcommit `7e9b2d1b`（r3039）はこの旧`header`を`hgroup`へ改名し、30分後のcommit `a729fd0c`（r3040）はsection header用の新しい`header`を導入した。後者は見出し、目次、検索form、logo、その他のintroductory／navigational aidsを典型的内容として列挙する。[2004年議論](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) [2005年草案](https://whatwg.org/specs/web-apps/2005-09-01/#the-header) [改名commit](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4) [再導入commit](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db)

同月7日のWHATWG mailは、当時の`header`では見出し、menu、検索formをまとめた`div id="header"`相当を表せず、`nav`も子にできない問題を提起した。Hicksonは変更後の返信で、`nav`を`header`内で許可して提示構造を可能にし、旧`header`を`hgroup`へ改名したと説明したため、再導入がこの要求への応答だったことを確認できる。[問題提起](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-April/061491.html) [編集者の返信](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)

## HTML直前の祖先

現行要素の直接の標準化上の前段は、page／section header相当を専用要素で表せないという2009年4月の要求と、それに応じたWHATWGの再設計である。旧`header`からの単純な連続ではなく、heading group用途を`hgroup`へ分離したうえで、より広いheader用途へ同じ名称を割り当てた。2005年12月のGoogle調査は既存class `title`, `header`, `top`と旧HTML5 `header`の対応を示すが、草案より後の公表であり採用因果は示さない。

## さらに上流の由来

### 証拠

2004年の議論はsemantic rolesを汎用`div`から区別する設計要求を示す。2009年のmailは`div id="header"`でまとめていた見出し、menu、検索formと`nav`を専用要素で表す具体的要求を示す。後発usage調査から既存class慣習との対応も観察できる。

### 解釈

既存Webで汎用containerとして表現されていたheader roleを専用要素で機械可読にする設計と解釈できる。ただし、usage調査中の個別classからの採用は確定しない。

## 系譜

旧WHATWG `header`提案（2004年まで） → Web Applications 1.0 `header`（2005年） → heading group用途を`hgroup`へ分離（2009年、r3039）

page／section headerを表す要求（2009年） → 新しいWHATWG `header`（2009年、r3040） → 現行HTML `<header>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2004-11-10 | Semantic elements and spec complexity | WHATWG mailing list | `header`を含むsemantic element集合と、汎用`div`との差に関する議論。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-November/date.html) | 2026-08-09 |
| 2005-09-01 | Web Applications 1.0 | WHATWG保存Early Working Draft | sectionのheadingを表す`header`。 | [一次資料](https://whatwg.org/specs/web-apps/2005-09-01/#the-header) | 2026-08-09 |
| 2005-12 | Web Authoring Statistics: Classes | Googleによる当時のusage調査（保存複製） | `title`, `header`, `top` classとHTML5 `header`の対応。 | [一次資料](https://web.archive.org/web/20060101000000id_/http://code.google.com/webstats/2005-12/classes.html) | 2026-08-09 |
| 2009-04-07 | “About Descendent Tags” | WHATWG mailing list | 当時の`header`では`nav`を子にできず、見出し、menu、検索formをまとめたpage header相当を表せないという要求。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-April/061491.html) | 2026-08-09 |
| 2009-04-30 | WHATWG HTML commit `7e9b2d1b` | 仕様commit | 旧`header`を`hgroup`へ改名しsubheading用へ限定。 | [一次資料](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4) | 2026-08-09 |
| 2009-04-30 | WHATWG HTML commit `a729fd0c` | 仕様commit | 新しい`header`をsection headerとして導入し、見出し、目次、検索form、logo、introductory／navigational aidsを内容例とした。 | [一次資料](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db) | 2026-08-09 |
| 2009-04-30 | “About Descendent Tags” | WHATWG editorの返信 | `nav`を`header`内で許可し、問題提起された構造を可能にし、旧`header`を`hgroup`へ改名したという変更理由。 | [一次資料](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html) | 2026-08-09 |

## 確度

**A**

汎用markupで表していたpage／section headerの具体例、専用要素で表せないという要素単位の要求、旧要素との役割分離、現行系統の再導入をmailと仕様commitで直接確認できるため。2004年の旧要素を最初に提案した人物と、さらに上流の祖先は未確認だが、現行要素の直前経路には欠落がない。

## 否定された仮説

既存class `header`から直接採用したという説明。usage調査は意味上の対応を示すが採用行為を述べない。2005年の旧`header`から現行`header`まで単純に連続したという説明も採用しない。2009年に旧要素のheading group用途を`hgroup`へ分離し、別の広い役割で新しい`header`を導入している。

## 未解決

- 2004年提案より前の具体的なmarkup祖先と個別提案者は確認できるか。

## 調査記録

2004年WHATWG mailing list、2005年保存草案、Google usage調査、2009年の問題提起・編集者返信・改名commit・再導入commitを確認した。横断比較は[HTML5 semantic elements調査ノート](../research/html5-semantic-elements.md)、再導入の詳細は[追加調査ノート](../research/header-reintroduction.md)を参照する。

2026-08-09の敵対的レビューでは、2004年のsemantic element議論、2005年仕様、既存`header` class調査、2009年の`header`→`hgroup`改名commitを比較し、旧要素と現行`header`の再導入を結ぶ記録を探索した。再導入経路は確認できず、二系列を分ける系譜とB判定を維持した。

2026-08-09の追加調査で、2009年4月7日の問題提起、4月30日の編集者返信、r3039の`hgroup`分離とr3040の新`header`導入を照合し、再導入commitと理由を確定した。これにより旧要素と現行要素を役割分離した二枝として記述し、確度をAへ変更した。

追加証拠反映後の別レビュー（2026-08-09）では、mailの日付・主体・要求、commit順序、r3040差分の定義と例を再確認した。旧`header`から現行`header`への単純な連続を避け、二枝の系譜、A判定、残る2004年以前の未解決点が証拠表と整合することを確認した。
