---
status: 完成
---

# `<q>`

## 概要

HTML+とHTML 3.0に同名の行内短い引用があり、HTML 3.0全体がHTML+に基づくことは確認できるが、`Q`個別の採用記録はない。1995年8月の最初の国際化草案は言語に応じた引用符の描画のため`Q`を導入すると明記する。

## 現在の意味

WHATWG HTML Living Standardでは、別の出典から引用した句内容を表す。 [HTML Living Standard](../../raw/html.spec.whatwg.org/multipage/text-level-semantics.html)（[公開版](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element)、2026-08-09確認）

## HTMLへの導入

1993年HTML+は`Q`を行内短い引用として定義した。1995年3月のHTML 3.0も同名・同用途の`Q`を“New in 3.0”として定義し、W3Cの保存ページはHTML 3.0全体がHTML+に基づくと説明するが、`Q`個別の採用は述べない。1995年8月15日の`draft-ietf-html-i18n-00`は、言語やプラットフォームによって異なる引用符を適切に描画するため`Q`を導入すると明記し、この改訂系列がRFC 2070へ至った。[HTML+ logical emphasis](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)） [HTML 3.0](../../raw/www.w3.org/MarkUp/html3/logical.html)（[公開元](https://www.w3.org/MarkUp/html3/logical.html)） [HTML 3.0保存ページ](../../raw/www.w3.org/MarkUp/html3/index.html)（[公開元](https://www.w3.org/MarkUp/html3/)） [国際化草案](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00)） [RFC 2070](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)）

## HTML直前の祖先

HTML+ `Q`は有力な先行要素だが、HTML 3.0または国際化草案がこれを個別に採用したという直接史料は未確認である。確認できる因果はHTML 3.0全体がHTML+に基づくという集合レベルに限る。`draft-ietf-html-i18n-00`は言語に応じた描画のため`Q`を導入する理由を要素単位で示すが、その採用元をHTML+とはしていない。

## さらに上流の由来

### 証拠

HTML+以前の引用マークアップ祖先は確認できない。

### 解釈

引用という文化的概念の存在だけから、特定の出版・GML語彙を直接祖先とはしない。

## 系譜

HTML+（HTML 3.0全体の基礎）→ HTML 3.0

HTML+ `Q`とHTML 3.0 `Q`の個別接続は未確認。

`draft-ietf-html-i18n-00` `Q`（1995-08-15）→ 後続国際化草案 → RFC 2070 `Q`

HTML 4 `Q` → 現行HTML `<q>`

RFC 2070 `Q`からHTML 4 `Q`への個別採用因果は未確認。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | 閲覧日 |
|---|---|---|---|---|
| 1993-11-08 | [HTML+ §5.6](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html)） | 一次仕様・提案 | `Q`を行内短い引用として定義する。 | 2026-08-09 |
| 1995-03 | HTML 3.0 Draft資料／Information Type Elements：[保存ページ](../../raw/www.w3.org/MarkUp/html3/index.html)・[要素定義](../../raw/www.w3.org/MarkUp/html3/logical.html)（[公開元1](https://www.w3.org/MarkUp/html3/)・[公開元2](https://www.w3.org/MarkUp/html3/logical.html)） | W3C仕様草案・保存解説 | HTML 3.0全体をHTML+に基づくと説明し、`Q`を“New in 3.0”の短い引用として定義するが、個別採用は述べない。 | 2026-08-09 |
| 1995-08-15 | [`draft-ietf-html-i18n-00`](../../raw/datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00)（[公開元](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-00)） | IETF Internet-Draft | 言語・プラットフォームごとに異なる引用符の適切な描画のため`Q`を導入し、DTDへ追加する。 | 2026-08-10 |
| 1997-01 | [RFC 2070 §4.2.2](../../raw/www.rfc-editor.org/rfc/rfc2070.txt)（[公開元](https://www.rfc-editor.org/rfc/rfc2070.html)） | 一次仕様・提案 | 言語に応じた短い引用要素として追加する。 | 2026-08-09 |

## 確度

**A−**

HTML 3.0全体がHTML+に基づく集合単位の因果と、国際化草案での`Q`の導入理由は直接確認できるが、HTML+ `Q`からの個別採用が明記されず、両区間の接続が欠けるため。

## 否定された仮説

HTML+ `Q`とHTML 3.0 `Q`の同名・同用途だけから個別の採用因果を断定すること。また、HTML+での行内引用という目的と国際化草案での言語に応じた描画を同じ導入理由として圧縮すること。

## 未解決

- HTML+ `Q`をHTML 3.0または国際化草案へ個別に採用したことを示すメール、編集履歴、議事録はあるか。
- HTML+以前の具体的引用マークアップ祖先はあるか。
