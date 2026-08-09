# `<selectedcontent>`

> 状態: Open UIの`selectedoption`提案から改名・HTML統合までを検証済み

## 概要

customizable `select`で選択中の`option`内容を宣言的に表示するOpen UI／WHATWGの`selectedoption`案を、名称の曖昧さから`selectedcontent`へ改名し、2025年にHTMLへ統合した要素である。

## 現在の意味

WHATWG HTML Living Standardでは、`select`で現在選択されている`option`の内容を反映する。`select`の最初の子である`button`内に置き、選択肢の内容を宣言的に表示できる。[一次定義](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)（2026-08-09確認）

## HTMLへの導入

2024年7月のWHATWG issueは旧名`selectedoption`のclone modelを前提に更新timingを議論し、同年9月の仕様PRはcustomizable `select`のbutton内で選択中optionの内容を宣言的にcloneする目的を明記した。Open UIでの名称議論を受けて11月に`selectedcontent`へ改名され、2025年7月21日のWHATWG commitがcustomizable `select`の一部としてHTMLへ追加した。[旧名issue](https://github.com/whatwg/html/issues/10520) [仕様PR](https://github.com/whatwg/html/pull/10633) [改名PR](https://github.com/openui/open-ui/pull/1124) [統合commit](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)

## HTML直前の祖先

Open UI／WHATWGの`selectedoption`提案である。Open UI issueとPRが名称変更を、WHATWG commitが現行名でのHTML統合を直接示す。

## さらに上流の由来

### 証拠

確認した資料はcustomizable `select`の要求を示すが、特定のdesktop GUI widgetまたはcustom select libraryから採用したとは述べない。

### 解釈

なし。

## 系譜

Open UI／WHATWG `selectedoption`提案（2024年） → Open UI `selectedcontent`への改名（2024年） → customizable `select`とHTML Standardへ統合（2025年） → 現行HTML `selectedcontent`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2024-07-25 | WHATWG HTML issue 10520 | 標準化issue | 旧名`selectedoption`のclone modelと更新timing。 | [一次資料](https://github.com/whatwg/html/issues/10520) | 2026-08-09 |
| 2024-09-18 | WHATWG HTML PR 10633 | 仕様PR | 選択中optionの内容をbutton内へ宣言的にcloneする要求。 | [一次資料](https://github.com/whatwg/html/pull/10633) | 2026-08-09 |
| 2024-11-05 | Open UI PR 1124 | 仕様PR | `selectedoption`から`selectedcontent`への改名。 | [一次資料](https://github.com/openui/open-ui/pull/1124) | 2026-08-09 |
| 2025-07-21 | WHATWG HTML commit `172cccf4` | 仕様commit | customizable `select`と`selectedcontent`のHTML Standard統合。 | [一次資料](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b) | 2026-08-09 |

## 確度

**A**

旧名の要素提案、改名理由、現行名でのHTML統合を要素単位のissue、PR、commitで直接確認できるため。

## 否定された仮説

desktop GUIのselected-value表示または特定のcustom select libraryを直接祖先とする説明。外見や機能は探索仮説になるが、採用記録はない。

## 未解決

- `selectedoption`を最初に提案したOpen UI issue、commit、またはChromium prototypeはどれか。
- Open UI案、Chromium実装、WHATWG PRのどれがclone modelを最初に記述したか。
- 特定のUI toolkitまたはWeb libraryが設計へ採用された記録はあるか。

## 調査記録

WHATWGのissue／PR／統合commitとOpen UIの改名issue／PRを確認した。最初のprototypeは確定できなかった。横断比較は[Modern HTML要素とforeign rootの調査ノート](../research/modern-html-foreign-roots.md)を参照する。
