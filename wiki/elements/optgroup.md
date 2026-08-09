# `<optgroup>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML 4での導入理由を検証済み（具体的な先行技術は未確認）

## 概要

HTML 4が長い選択肢一覧を論理groupへ分け、特に非視覚user agentで理解しやすくするため導入した。特定menu widgetからの採用は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、共通labelを持つ`option`要素のgroupを表す。user agentはgroup内の選択肢の関連と他groupとの区別を示し、`disabled`でgroup全体を無効にできる。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element)（2026-08-09確認）

## HTMLへの導入

確認できる初出は1997年11月7日のHTML 4.0 Proposed Recommendationである。7月8日と9月17日の草案には存在しない。同仕様は、多数のoptionsをflat listで提示すると非視覚UA利用者が覚えにくいため、choicesをhierarchyへgroup化し、detailを展開・折り畳みできるようにすることを理由とした。[HTML 4.0 PR forms](https://www.w3.org/TR/PR-html40-971107/interact/forms.html#edef-OPTGROUP) [changes](https://www.w3.org/TR/PR-html40-971107/appendix/changes.html)

## HTML直前の祖先

未確認。choice hierarchyという要求は確認できるが、特定OSやGUI toolkitのhierarchical menuから採用したとは記録されていない。

## さらに上流の由来

### 証拠

長いmenuを関連するchoice groupsへ分けるUI／accessibility要求が背景だが、具体的先行物は未確認である。

### 解釈

視覚的なmenu groupingだけでなく、非視覚UAが長い選択肢集合を段階的に理解できる構造として導入されたと解釈できる。

## 系譜

[具体的祖先は未確認] HTML 4.0 PR `OPTGROUP`（1997年11月） → HTML 4.0 Recommendation → 現行HTML `<optgroup>`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1997-07-08、1997-09-17 | HTML 4.0 Working Drafts | W3C Working Draft | `OPTGROUP`がまだ存在しない比較基準。 | [7月版](https://www.w3.org/TR/WD-html40-970708/interact/forms.html) / [9月版](https://www.w3.org/TR/WD-html40-970917/interact/forms.html) | 2026-08-09 |
| 1997-11-07 | HTML 4.0 Proposed Recommendation | W3C Proposed Recommendation | `OPTGROUP`の初出、choice hierarchyと非視覚UA上の導入理由。 | [forms](https://www.w3.org/TR/PR-html40-971107/interact/forms.html#edef-OPTGROUP) / [changes](https://www.w3.org/TR/PR-html40-971107/appendix/changes.html) | 2026-08-09 |
| 1999-12-24 | HTML 4.01 | W3C Recommendation | menu optionsのgroup化をform accessibilityへ特に重要と位置付ける。 | [一次資料](https://www.w3.org/TR/html401/appendix/changes.html#h-A.3.9) | 2026-08-09 |

## 確度

**B**

導入理由とhierarchical choice modelは確認できるが、その一段上の具体的祖先を確認できないため。

## 否定された仮説

特定OSのhierarchical menuから採用したという説明。HTML 4が明記するのは非視覚UAでのchoice hierarchyの要求までである。`LABEL`等と同じ1997年7月初出とする説明も、当時の草案に反する。

## 未解決

- 1997年9月17日版から11月7日版の間に追加された会議、mail、change requestは何か。
- 具体的menu widget、accessibility API、既存markupからの影響を示す資料はあるか。

## 調査記録

HTML 3.0 forms、HTML 3.2、HTML 4.0の1997年7月・9月・11月版、HTML 4.01を比較した。特定menu widgetからの採用記録は見つからなかった。横断比較は[国際化・アクセシビリティ調査ノート](../research/internationalization-accessibility-elements.md)を参照する。

2026-08-09の敵対的レビューでは、HTML 4.0の7月・9月版での不在と11月Proposed Recommendationでの初出、choice hierarchyと非視覚UAの説明を比較した。特定menu widgetからの採用記録は見つからず、導入理由を確定するB判定を維持した。
