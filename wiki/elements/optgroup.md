---
status: 完成
---

# `<optgroup>`

## 概要

MegaZoneが長い`SELECT`のアクセシビリティを改善するため、ウィンドウシステムの入れ子のリストとNetscapeブックマークを具体例に`OPTGROUP`を提案し、WAIの提案としてHTML WGが検討してHTML 4へ採録した。

## 現在の意味

WHATWG HTML Living Standardでは、共通ラベルを持つ`option`要素のグループを表す。ユーザーエージェントはグループ内の選択肢の関連と他グループとの区別を示し、`disabled`でグループ全体を無効にできる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element)、2026-08-09確認）

## HTMLへの導入

1997年9月、MegaZoneは長い`SELECT`が視覚障害者に特に使いにくいという利用者意見を踏まえ、話題／下位話題へグループ化する`OPTGROUP`をWAIへ提案した。10月23日のHTML WG会議録は、WAI HCの提案として`SELECT`へ`OPTGROUP`を追加する案を記録する。10月24日草案への採録後、Dave Raggettは`label`と終了タグを持つ構文、および旧ブラウザーでは平坦リストとして読める代替内容を説明した。公開仕様で確認できる初出は11月7日のHTML 4.0 Proposed Recommendationである。[提案](../../raw/lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html)） [HTML WG会議録](../../raw/lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)） [仕様編集](../../raw/lists.w3.org/Archives/Public/www-html-editor/1997OctDec/0024.html)（[公開元](https://lists.w3.org/Archives/Public/www-html-editor/1997OctDec/0024.html)） [HTML 4.0 PR](../../raw/www.w3.org/TR/PR-html40-971107/interact/forms.html)（[公開元](https://www.w3.org/TR/PR-html40-971107/interact/forms.html#edef-OPTGROUP)）

## HTML直前の祖先

MegaZoneによるWAI `OPTGROUP`提案である。提案は、多くのウィンドウシステムの入れ子のリストと、右向き矢印から下位リストを開くNetscapeブックマークを、階層的な選択リストの具体的な設計例として挙げる。[提案](../../raw/lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html)）

## さらに上流の由来

### 証拠

提案者は、長い`SELECT`を話題／下位話題へ分ける要求を、視覚障害者を含む利用者意見と、ウィンドウシステムの入れ子のリスト／Netscapeブックマークの下位リストへ結び付けている。

### 解釈

既存GUIの階層的な選択リストを、旧ブラウザーでは平坦な`OPTION`一覧へ代替内容できるHTML構造として翻案したと解釈できる。特定ツールキットの実装を移植したとはしない。

## 系譜

ウィンドウシステムの入れ子のリスト／Netscapeブックマークの下位リスト

→（MegaZoneが具体例として提示）WAI `OPTGROUP`提案（1997年9月）

→（HTML WG会議録と編集者メールで採録を確認）HTML 4.0 `OPTGROUP`（1997年10月） → 現行HTML `<optgroup>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1997-07-08、1997-09-17 | HTML 4.0 Working Drafts：[7月版](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)・[9月版](../../raw/www.w3.org/TR/WD-html40-970917/interact/forms.html)（[公開元1](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)・[公開元2](https://www.w3.org/TR/WD-html40-970917/interact/forms.html)） | W3C Working Draft | `OPTGROUP`がまだ存在しない比較基準。 | 2026-08-09 |
| 1997-09-26（提案バージョン1は09-21、バージョン2は09-25） | [MegaZone, “FORM SELECT accessibility”](../../raw/lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-ig/1997JulSep/0031.html)） | WAIメーリングリスト・要素提案 | 長い`SELECT`の利用上・アクセシビリティ上の問題、話題／下位話題へのグループ化、ウィンドウシステムの入れ子のリストとNetscapeブックマーク、旧ブラウザーを壊さない`OPTGROUP`案。 | 2026-08-09 |
| 1997-10-23 | [W3C HTML WG minutes](../../raw/lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)） | 標準化会議録 | WAI HC提案として`SELECT`へ`OPTGROUP`を追加する案を検討したこと。 | 2026-08-09 |
| 1997-10-25 | [Dave Raggett, “WAI proposed enhancements”](../../raw/lists.w3.org/Archives/Public/www-html-editor/1997OctDec/0024.html)（[公開元](https://lists.w3.org/Archives/Public/www-html-editor/1997OctDec/0024.html)） | 仕様編集者メール | 10月24日草案の`OPTGROUP`構文、`label`、終了タグ、新旧ブラウザーでの階層／平坦なリスト表示。 | 2026-08-09 |
| 1997-11-07 | HTML 4.0 Proposed Recommendation：[forms](../../raw/www.w3.org/TR/PR-html40-971107/interact/forms.html)・[changes](../../raw/www.w3.org/TR/PR-html40-971107/appendix/changes.html)（[公開元1](https://www.w3.org/TR/PR-html40-971107/interact/forms.html#edef-OPTGROUP)・[公開元2](https://www.w3.org/TR/PR-html40-971107/appendix/changes.html)） | W3C Proposed Recommendation | `OPTGROUP`の初出、選択肢階層と非視覚UA上の導入理由。 | 2026-08-09 |
| 1999-12-24 | [HTML 4.01](../../raw/www.w3.org/TR/html401/appendix/changes.html)（[公開元](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9)） | W3C Recommendation | メニュー選択肢のグループ化をフォームアクセシビリティにとって特に重要と位置付ける。 | 2026-08-09 |

## 確度

**A**

要素単位の提案本文、具体的なUI上の参照例、WAIからHTML WGへの標準化経路、採録後の仕様編集を直接史料で連続して確認できるため。

## 否定された仮説

特定のOSまたはツールキットの実装をそのまま採用したという説明。提案が直接示すのは一般的なウィンドウシステムとNetscapeのブックマークを設計例にしたことまでである。`LABEL`等と同じ1997年7月初出とする説明も、当時の草案に反する。

## 未解決

なし。
