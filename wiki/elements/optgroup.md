---
status: 完成
---

# `<optgroup>`

## 概要

MegaZoneが長い`SELECT`のaccessibilityを改善するため、windowing systemのnested listとNetscape bookmarksを具体例に`OPTGROUP`を提案し、WAIの提案としてHTML WGが検討してHTML 4へ採録した。

## 現在の意味

WHATWG HTML Living Standardでは、共通labelを持つ`option`要素のgroupを表す。user agentはgroup内の選択肢の関連と他groupとの区別を示し、`disabled`でgroup全体を無効にできる。[HTML Living Standard](../../raw/html-living-standard/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element)、2026-08-09確認）

## HTMLへの導入

1997年9月、MegaZoneは長い`SELECT`が視覚障害者に特に使いにくいという利用者feedbackを踏まえ、topics／subtopicsへgroup化する`OPTGROUP`をWAIへ提案した。10月23日のHTML WG会議録は、WAI HCの提案として`SELECT`へ`OPTGROUP`を追加する案を記録する。10月24日草案への採録後、Dave Raggettは`label`と終了tagを持つ構文、および旧browserではflat listとして読めるfallbackを説明した。公開仕様で確認できる初出は11月7日のHTML 4.0 Proposed Recommendationである。[提案](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html) [HTML WG会議録](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html) [仕様編集](https://lists.w3.org/Archives/Public/www-html-editor/1997OctDec/0024.html) [HTML 4.0 PR](https://www.w3.org/TR/PR-html40-971107/interact/forms.html#edef-OPTGROUP)

## HTML直前の祖先

MegaZoneによるWAI `OPTGROUP`提案である。提案は、most windowing systemsのnested listと、右向き矢印からsublistを開くNetscape bookmarksを、hierarchical pick listの具体的な設計例として挙げる。[提案](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html)

## さらに上流の由来

### 証拠

提案者は、長い`SELECT`をtopics／subtopicsへ分ける要求を、視覚障害者を含む利用者feedbackと、windowing systemのnested list／Netscape bookmarksのsublistへ結び付けている。

### 解釈

既存GUIのhierarchical pick listを、旧browserではflatな`OPTION`一覧へfallbackできるHTML構造として翻案したと解釈できる。特定toolkitの実装を移植したとはしない。

## 系譜

windowing systemのnested list／Netscape bookmarksのsublist

→（MegaZoneが具体例として提示）WAI `OPTGROUP`提案（1997年9月）

→（HTML WG会議録と編集者mailで採録を確認）HTML 4.0 `OPTGROUP`（1997年10月） → 現行HTML `<optgroup>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1997-07-08、1997-09-17 | HTML 4.0 Working Drafts：[7月版](../../raw/html-4-history/3398c72a13f7d7ac-forms.html)・[9月版](../../raw/html-4-history/36a75b6864fb9aaf-forms.html)（[公開元1](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)・[公開元2](https://www.w3.org/TR/WD-html40-970917/interact/forms.html)） | W3C Working Draft | `OPTGROUP`がまだ存在しない比較基準。 | 2026-08-09 |
| 1997-09-26（提案version 1は09-21、version 2は09-25） | [MegaZone, “FORM SELECT accessibility”](../../raw/items/lists.w3.org/0440c3635b90eb9c-0031.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html)） | WAI mailing list・要素提案 | 長い`SELECT`の利用上・accessibility上の問題、topics／subtopicsへのgroup化、windowing systemのnested listとNetscape bookmarks、旧browserを壊さない`OPTGROUP`案。 | 2026-08-09 |
| 1997-10-23 | [W3C HTML WG minutes](../../raw/items/lists.w3.org/8d89cba28440552d-0160.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)） | 標準化会議録 | WAI HC proposalとして`SELECT`へ`OPTGROUP`を追加する案を検討したこと。 | 2026-08-09 |
| 1997-10-25 | [Dave Raggett, “WAI proposed enhancements”](../../raw/items/lists.w3.org/450e15592b7e5777-0024.html)（[公開元](https://lists.w3.org/Archives/Public/www-html-editor/1997OctDec/0024.html)） | 仕様編集者mail | 10月24日草案の`OPTGROUP`構文、`label`、終了tag、新旧browserでのhierarchy／flat-list表示。 | 2026-08-09 |
| 1997-11-07 | HTML 4.0 Proposed Recommendation：[forms](../../raw/html-4-history/5f86fa2178bb46cb-forms.html)・[changes](../../raw/html-4-history/e0184020eceffed4-changes.html)（[公開元1](https://www.w3.org/TR/PR-html40-971107/interact/forms.html#edef-OPTGROUP)・[公開元2](https://www.w3.org/TR/PR-html40-971107/appendix/changes.html)） | W3C Proposed Recommendation | `OPTGROUP`の初出、choice hierarchyと非視覚UA上の導入理由。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01](../../raw/html-4-history/8956e5bf2cd33e94-changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9)） | W3C Recommendation | menu optionsのgroup化をform accessibilityへ特に重要と位置付ける。 | 2026-08-09 |

## 確度

**A**

要素単位の提案本文、具体的なUI上の参照例、WAIからHTML WGへの標準化経路、採録後の仕様編集を直接史料で連続して確認できるため。

## 否定された仮説

特定OSまたはtoolkitの実装をそのまま採用したという説明。提案が直接示すのは一般的なwindowing systemとNetscape bookmarksを設計例にしたことまでである。`LABEL`等と同じ1997年7月初出とする説明も、当時の草案に反する。

## 未解決

なし。
