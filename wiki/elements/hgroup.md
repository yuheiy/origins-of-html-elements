# `<hgroup>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。2009年のHTML5 `header`からの改名を検証済み

## 概要

2009年4月、WHATWG editor Ian Hicksonが当時のHTML5 `header`を`hgroup`へ改名し、subheadingを支える用途へ限定して導入した。その後意味は変更されたが、この要素単位の直接経路は仕様commitで確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、見出しとそれに関連する内容を表す。`h1`〜`h6`を、副見出し、別題、taglineを表す一つ以上の`p`とgroup化できる。[一次定義](https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element)（2026-08-09確認）

## HTMLへの導入

2009年4月30日、Ian HicksonがWHATWG HTML sourceの旧`header`を`hgroup`へ改名した。commitはsubheadingのsupportへ用途を限定する変更だと明記する。[仕様commit](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)

## HTML直前の祖先

HTML5草案の旧`header`。仕様commitが要素の改名を直接明記する。この旧要素はsectionのheaderを表す現行`header`と同一視しない。

## さらに上流の由来

### 証拠

2005年草案の旧`header`はsectionのheadingを表すcontainerだった。2009年commitはこの要素を改名し、subheading用に絞った。

### 解釈

広いsection header containerから、主見出しと副見出しをgroup化する専用要素へ設計を分離した変更と解釈できる。

## 系譜

HTML5草案 `header`（2005年） → `hgroup`への改名とsubheading用途への限定（2009年） → 現行HTML `hgroup`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2005-09-01 | Web Applications 1.0 | WHATWG保存Early Working Draft | 改名前の`header`とそのheading containerとしての意味。 | [一次資料](https://whatwg.org/specs/web-apps/2005-09-01/#the-header) | 2026-08-09 |
| 2009-04-30 | WHATWG HTML commit `7e9b2d1b` | 仕様commit | `header`を`hgroup`へ改名し、subheading用へ限定した変更。 | [一次資料](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4) | 2026-08-09 |

## 確度

**A**

要素単位の直前祖先、改名、導入主体、設計変更を仕様commitで直接確認できるため。

## 否定された仮説

現行`header`から用途の類似だけで派生したという説明。確認できる祖先は2009年時点の旧`header`であり、commitが示す具体的改名に限定する。

## 未解決

- `hgroup`という名称を最初に提案した人物と議論は確認できるか。
- 2022年以降のoutline整理から現行の「heading and related content」までの意味変更をどう位置づけるべきか。

## 調査記録

2005年WHATWG保存草案と2009年の改名commitを確認した。名称の発案過程と後年の意味変更は追加調査が必要である。横断比較は[HTML5 semantic elements調査ノート](../research/html5-semantic-elements.md)を参照する。

2026-08-09の敵対的レビューでは、2005年`header`定義と2009年commitの要素名・意味の変更を再読し、2013年W3C HTML分岐での削除を競合資料として照合した。commitが改名を直接示し、W3C分岐の削除はWHATWG系譜の反例にならないため、A判定を維持した。
