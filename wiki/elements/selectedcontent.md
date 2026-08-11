---
status: 完成
---

# `<selectedcontent>`

## 概要

カスタマイズ可能な`select`で選択中の`option`内容を宣言的に表示するOpen UI／WHATWGの`selectedoption`案を、名称の曖昧さから`selectedcontent`へ改名し、2025年にHTMLへ統合した要素である。

## 現在の意味

WHATWG HTML Living Standardでは、`select`で現在選択されている`option`の内容を反映する。`select`の最初の子である`button`内に置き、選択肢の内容を宣言的に表示できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)、2026-08-09確認）

## HTMLへの導入

2024年7月のWHATWG論点は旧名`selectedoption`の複製モデルを前提に更新時機を議論し、同年9月の仕様PRはカスタマイズ可能な`select`のボタン内で選択中選択肢の内容を宣言的に複製する目的を明記した。Open UIでの名称議論を受けて11月に`selectedcontent`へ改名され、2025年7月21日のWHATWGコミットがカスタマイズ可能な`select`の一部としてHTMLへ追加した。[旧名issue](../../raw/github.com/whatwg/html/issues/10520)（[公開元](https://github.com/whatwg/html/issues/10520)） [仕様PR](../../raw/github.com/whatwg/html/pull/10633)（[公開元](https://github.com/whatwg/html/pull/10633)） [改名PR](../../raw/github.com/openui/open-ui/pull/1124)（[公開元](https://github.com/openui/open-ui/pull/1124)） [統合コミット](../../raw/github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)（[公開元](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)）

## HTML直前の祖先

Open UI／WHATWGの`selectedoption`提案である。Open UI論点とPRが名称変更を、WHATWGコミットが現行名でのHTML統合を直接示す。

## さらに上流の由来

### 証拠

確認した資料はカスタマイズ可能な`select`の要求を示すが、特定のデスクトップGUIウィジェットまたは独自の選択用ライブラリから採用したとは述べない。

### 解釈

なし。

## 系譜

Open UI／WHATWG `selectedoption`提案（2024年） → Open UI `selectedcontent`への改名（2024年） → カスタマイズ可能な`select`とHTML Standardへ統合（2025年） → 現行HTML `selectedcontent`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2024-07-25 | [WHATWG HTML issue 10520](../../raw/github.com/whatwg/html/issues/10520)（[公開元](https://github.com/whatwg/html/issues/10520)） | 標準化論点 | 旧名`selectedoption`の複製モデルと更新時機。 | 2026-08-09 |
| 2024-09-18 | [WHATWG HTML PR 10633](../../raw/github.com/whatwg/html/pull/10633)（[公開元](https://github.com/whatwg/html/pull/10633)） | 仕様PR | 選択中選択肢の内容をボタン内へ宣言的に複製する要求。 | 2026-08-09 |
| 2024-11-05 | [Open UI PR 1124](../../raw/github.com/openui/open-ui/pull/1124)（[公開元](https://github.com/openui/open-ui/pull/1124)） | 仕様PR | `selectedoption`から`selectedcontent`への改名。 | 2026-08-09 |
| 2025-07-21 | [WHATWG HTML commit `172cccf4`](../../raw/github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)（[公開元](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)） | 仕様コミット | カスタマイズ可能な`select`と`selectedcontent`のHTML Standard統合。 | 2026-08-09 |

## 確度

**A**

旧名の要素提案、改名理由、現行名でのHTML統合を要素単位の論点、PR、コミットで直接確認できるため。

## 否定された仮説

デスクトップGUIの選択値表示または特定の独自選択UIライブラリを直接祖先とする説明。外見や機能は探索仮説になるが、採用記録はない。

## 未解決

- `selectedoption`を最初に提案したOpen UI論点、コミット、またはChromium試作はどれか。
- Open UI案、Chromium実装、WHATWG PRのどれが複製モデルを最初に記述したか。
- 特定のUIツールキットまたはWebライブラリが設計へ採用された記録はあるか。
