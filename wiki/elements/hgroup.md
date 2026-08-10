---
status: 完成
---

# `<hgroup>`

## 概要

2009年4月、WHATWG editor Ian Hicksonが当時のHTML5 `header`を`hgroup`へ改名し、subheadingを支える用途へ限定して導入した。その後意味は変更されたが、この要素単位の直接経路は仕様commitで確認できる。

## 現在の意味

WHATWG HTML Living Standardでは、見出しとそれに関連する内容を表す。`h1`〜`h6`を、副見出し、別題、taglineを表す一つ以上の`p`とgroup化できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/sections.html)（[公開版](https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element)、2026-08-09確認）

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

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2005-09-01 | [Web Applications 1.0](../../raw/whatwg.org/specs/web-apps/2005-09-01/index.html)（[公開元](https://whatwg.org/specs/web-apps/2005-09-01/#the-header)） | WHATWG保存Early Working Draft | 改名前の`header`とそのheading containerとしての意味。 | 2026-08-09 |
| 2009-04-30 | [WHATWG HTML commit `7e9b2d1b`](../../raw/github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)（[公開元](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)） | 仕様commit | `header`を`hgroup`へ改名し、subheading用へ限定した変更。 | 2026-08-09 |

## 確度

**A**

要素単位の直前祖先、改名、導入主体、設計変更を仕様commitで直接確認できるため。

## 否定された仮説

現行`header`から用途の類似だけで派生したという説明。確認できる祖先は2009年時点の旧`header`であり、commitが示す具体的改名に限定する。

2013年にW3C HTML 5系から削除されたことでWHATWG Living Standard上の`hgroup`も消滅し、後に同名要素として再導入されたという説明。削除はW3C分岐での決定であり、WHATWG系譜の断絶を示さない。[W3C HTML WG decision](https://lists.w3.org/Archives/Public/public-html-admin/2013Apr/0003.html)

## 未解決

- `hgroup`という名称を最初に提案した人物と議論は確認できるか。
- 2022年以降のoutline整理から現行の「heading and related content」までの意味変更をどう位置づけるべきか。
