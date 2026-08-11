---
status: 完成
---

# `<selectedcontent>`

## 概要

Open UIの`selected-value`表示部を、Chromiumが`selectedoption`要素へ置き換え、選択中の`option`の子ノードを複製する機構へ発展させた。名称の曖昧さから`selectedcontent`へ改名され、2025年にHTMLへ統合された。

## 現在の意味

WHATWG HTML Living Standardでは、`select`で現在選択されている`option`の内容を反映する。`select`の最初の子である`button`内に置き、選択肢の内容を宣言的に表示できる。[HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/form-elements.html)（[公開版](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)、2026-08-09確認）

## HTMLへの導入

Open UIは2020年に、選択変更時に選択値のテキストを`selected-value`スロットへ表示する部品モデルを記録した。2023年3月の設計論点は、カスタム要素用の`slot`／`part`と、親の文脈だけで意味を持つ汎用的な`behavior`属性はネイティブHTMLに不適切だとして、専用の子要素への置換を求めた。同年8月19日の命名論点では、この`behavior=selected-value`を置き換える要素を、旧機構に合わせて`selectedvalue`と名付けたと説明している。[Open UIの初期イベント提案](../../raw/github.com/openui/open-ui/commit/0feb63d9eef0c1f755b228b3ec5cf803b0a9dd74)（[公開元](https://github.com/openui/open-ui/commit/0feb63d9eef0c1f755b228b3ec5cf803b0a9dd74)） [子要素化の論点](../../raw/github.com/openui/open-ui/issues/702)（[公開元](https://github.com/openui/open-ui/issues/702)） [命名論点](../../raw/github.com/openui/open-ui/issues/808)（[公開元](https://github.com/openui/open-ui/issues/808)）

Joseph Arharは2023年8月29日に、選択中の`option`の子をブラウザーが`selectedoption`へ`cloneNode()`する案とChromiumでの試作をOpen UIへ提示した。同日のChromiumコミットは`behavior=selected-value`を置き換える`selectedoption`要素を実装したが、最初の版が複製したのはテキスト内容だけだった。9月4日のコミットが全子ノードの深い複製へ変更し、9月14日にOpen UI文書も`selectedvalue`から`selectedoption`へ追随した。[Open UI設計コメント](../../raw/api.github.com/repos/openui/open-ui/issues/571/comments__q__per_page=100)（[公開元](https://github.com/openui/open-ui/issues/571#issuecomment-1696637459)） [Chromium初回実装](../../raw/github.com/chromium/chromium/commit/b4a390a758ddbef7de1d864eab7823d44d1c8c95)（[公開元](https://github.com/chromium/chromium/commit/b4a390a758ddbef7de1d864eab7823d44d1c8c95)） [Chromium複製実装](../../raw/github.com/chromium/chromium/commit/235b09a98c3b53c49e977df7a32fb851ee224936)（[公開元](https://github.com/chromium/chromium/commit/235b09a98c3b53c49e977df7a32fb851ee224936)） [Open UI改名コミット](../../raw/github.com/openui/open-ui/commit/c136064d27e9e43dd9a6f620b149d32e22482d74)（[公開元](https://github.com/openui/open-ui/commit/c136064d27e9e43dd9a6f620b149d32e22482d74)）

2023年8月31日のCSSWG論点は、同じ内容を一覧と選択表示の二箇所で異なるスタイルにより描画する要求を整理し、複製方式を有力案として記録した。2024年7月のWHATWG論点は複製の更新時機を、同年9月の仕様PRはカスタマイズ可能な`select`のボタン内で選択中選択肢の内容を宣言的に複製する仕様を扱った。Open UIでの名称議論を受けて11月に`selectedcontent`へ改名され、2025年7月21日のWHATWGコミットがカスタマイズ可能な`select`の一部としてHTMLへ追加した。[CSSWG論点](../../raw/github.com/w3c/csswg-drafts/issues/9284)（[公開元](https://github.com/w3c/csswg-drafts/issues/9284)） [更新時機の論点](../../raw/github.com/whatwg/html/issues/10520)（[公開元](https://github.com/whatwg/html/issues/10520)） [仕様PR](../../raw/github.com/whatwg/html/pull/10633)（[公開元](https://github.com/whatwg/html/pull/10633)） [改名PR](../../raw/github.com/openui/open-ui/pull/1124)（[公開元](https://github.com/openui/open-ui/pull/1124)） [統合コミット](../../raw/github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)（[公開元](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)）

## HTML直前の祖先

Open UIの`selected-value`表示部と、それを専用要素へ置き換えたChromiumの`selectedoption`実装である。Chromiumの連続するコミットが、テキスト表示部から子ノード複製要素への変更を直接示し、Open UIとWHATWGの履歴が`selectedcontent`への改名とHTML統合を示す。

## さらに上流の由来

### 証拠

Open UIの議論は、選択肢の一覧では詳細を、選択後のボタンでは要約を表示する要求や、国旗、アバター、フォント等を含む選択UIの事例を挙げた。一方、確認した資料は特定のデスクトップGUIウィジェット、Webサイト、UIフレームワーク、または選択用ライブラリから機構を採用したとは述べない。[Open UI設計議論](../../raw/api.github.com/repos/openui/open-ui/issues/571/comments__q__per_page=100)（[公開元](https://github.com/openui/open-ui/issues/571)）

### 解釈

なし。

## 系譜

Open UI `selected-value`表示部（2020年） → `behavior=selected-value`を置き換えるChromium `selectedoption`のテキスト複製実装（2023年） → 子ノードの深い複製へ変更（2023年） → Open UI `selectedvalue`から`selectedoption`へ改名（2023年） → `selectedcontent`へ改名（2024年） → カスタマイズ可能な`select`とHTML Standardへ統合（2025年） → 現行HTML `selectedcontent`

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 2020-06-10 | [Open UI commit `0feb63d9`](../../raw/github.com/openui/open-ui/commit/0feb63d9eef0c1f755b228b3ec5cf803b0a9dd74)（[公開元](https://github.com/openui/open-ui/commit/0feb63d9eef0c1f755b228b3ec5cf803b0a9dd74)） | 提案コミット | 選択変更時に`selected-value`スロットのテキスト内容を更新する初期部品モデル。 | 2026-08-11 |
| 2023-03-31 | [Open UI issue 702](../../raw/github.com/openui/open-ui/issues/702)（[公開元](https://github.com/openui/open-ui/issues/702)） | 設計論点 | `slot`／`part`と`behavior`属性の再利用を避け、ネイティブHTMLらしい専用子要素へ置き換える要求。 | 2026-08-11 |
| 2023-08-19 | [Open UI issue 808](../../raw/github.com/openui/open-ui/issues/808)（[公開元](https://github.com/openui/open-ui/issues/808)） | 命名論点 | `behavior=selected-value`を置き換える要素の初稿名が`selectedvalue`であり、旧機構との一致を理由に選ばれたこと。 | 2026-08-11 |
| 2023-08-29 | [Open UI issue 571のコメント](../../raw/api.github.com/repos/openui/open-ui/issues/571/comments__q__per_page=100)（[公開元](https://github.com/openui/open-ui/issues/571#issuecomment-1696637459)） | 設計提案 | `option`の子を`selectedoption`へ複製する案、代案、Chromium試作、宣言的解決の要求。 | 2026-08-11 |
| 2023-08-29 | [Chromium commit `b4a390a7`](../../raw/github.com/chromium/chromium/commit/b4a390a758ddbef7de1d864eab7823d44d1c8c95)（[公開元](https://github.com/chromium/chromium/commit/b4a390a758ddbef7de1d864eab7823d44d1c8c95)） | 実装コミット | `behavior=selected-value`を置き換える`selectedoption`を追加し、当初は選択値のテキストを複製したこと。 | 2026-08-11 |
| 2023-08-31 | [CSSWG issue 9284](../../raw/github.com/w3c/csswg-drafts/issues/9284)（[公開元](https://github.com/w3c/csswg-drafts/issues/9284)） | 標準化論点 | 同じ選択肢内容を一覧と選択表示で異なるスタイルにより描画する要求と、`cloneNode()`を有力案としたこと。 | 2026-08-11 |
| 2023-09-04 | [Chromium commit `235b09a9`](../../raw/github.com/chromium/chromium/commit/235b09a98c3b53c49e977df7a32fb851ee224936)（[公開元](https://github.com/chromium/chromium/commit/235b09a98c3b53c49e977df7a32fb851ee224936)） | 実装コミット | `selectedoption`をテキスト複製から全子ノードの深い複製へ変更したこと。 | 2026-08-11 |
| 2023-09-14 | [Open UI commit `c136064d`](../../raw/github.com/openui/open-ui/commit/c136064d27e9e43dd9a6f620b149d32e22482d74)（[公開元](https://github.com/openui/open-ui/commit/c136064d27e9e43dd9a6f620b149d32e22482d74)） | 提案コミット | Chromium試作に合わせ、Open UI文書の`selectedvalue`を`selectedoption`へ改名したこと。 | 2026-08-11 |
| 2024-07-25 | [WHATWG HTML issue 10520](../../raw/github.com/whatwg/html/issues/10520)（[公開元](https://github.com/whatwg/html/issues/10520)） | 標準化論点 | 旧名`selectedoption`の複製モデルと更新時機。 | 2026-08-09 |
| 2024-09-18 | [WHATWG HTML PR 10633](../../raw/github.com/whatwg/html/pull/10633)（[公開元](https://github.com/whatwg/html/pull/10633)） | 仕様PR | 選択中選択肢の内容をボタン内へ宣言的に複製する要求。 | 2026-08-09 |
| 2024-11-05 | [Open UI PR 1124](../../raw/github.com/openui/open-ui/pull/1124)（[公開元](https://github.com/openui/open-ui/pull/1124)） | 仕様PR | `selectedoption`から`selectedcontent`への改名。 | 2026-08-09 |
| 2025-07-21 | [WHATWG HTML commit `172cccf4`](../../raw/github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)（[公開元](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)） | 仕様コミット | カスタマイズ可能な`select`と`selectedcontent`のHTML Standard統合。 | 2026-08-09 |

## 確度

**A**

Open UIの表示部からChromiumの専用要素と子ノード複製機構への置換、二度の改名、現行名でのHTML統合を要素単位の論点、PR、コミットで直接確認できるため。

## 否定された仮説

デスクトップGUIの選択値表示または特定の独自選択UIライブラリを直接祖先とする説明。外見や機能は探索仮説になるが、採用記録はない。

## 未解決

- 特定のUIツールキットまたはWebライブラリが設計へ採用された記録はあるか。
