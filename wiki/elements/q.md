# `<q>`

> 状態: 完成（敵対的レビュー済み: 2026-08-09）。HTML+とHTML 3.0の集合レベルの関係、および国際化草案での導入理由を検証済み（HTML+ `Q`からの個別採用は未確認）

## 概要

HTML+とHTML 3.0に同名のinline short quotationがあり、HTML 3.0全体がHTML+に基づくことは確認できるが、`Q`個別の採用記録はない。1995年の国際化草案はlanguage-sensitiveなquotation renderingのため`Q`を導入すると明記する。

## 現在の意味

WHATWG HTML Living Standardでは、別の出典から引用したphrasing contentを表す。 [一次定義](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element)（2026-08-09確認）

## HTMLへの導入

1993年HTML+は`Q`をinline short quotationとして定義した。1995年3月のHTML 3.0も同名・同用途の`Q`を“New in 3.0”として定義し、W3Cの保存ページはHTML 3.0全体がHTML+に基づくと説明するが、`Q`個別の採用は述べない。1995年9月25日の`draft-ietf-html-i18n-01`は、言語やplatformによって異なるquotation markを適切にrenderするため`Q`を導入すると明記し、この改訂系列がRFC 2070へ至った。[HTML+ logical emphasis](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) [HTML 3.0](https://www.w3.org/MarkUp/html3/logical.html) [HTML 3.0保存ページ](https://www.w3.org/MarkUp/html3/) [国際化草案](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01) [RFC 2070](https://www.rfc-editor.org/rfc/rfc2070.html)

## HTML直前の祖先

HTML+ `Q`は有力な先行要素だが、HTML 3.0または国際化草案がこれを個別に採用したという直接史料は未確認である。確認できる因果はHTML 3.0全体がHTML+に基づくという集合レベルに限る。`draft-ietf-html-i18n-01`はlanguage-sensitive renderingのため`Q`を導入する理由を要素単位で示すが、その採用元をHTML+とはしていない。

## さらに上流の由来

### 証拠

HTML+以前のquotation markup祖先は今回の資料群では確認していない。

### 解釈

quotationという文化的概念の存在だけから、特定の出版・GML語彙を直接祖先とはしない。

## 系譜

HTML+（HTML 3.0全体の基礎）→ HTML 3.0

HTML+ `Q`とHTML 3.0 `Q`の個別接続は未確認。

`draft-ietf-html-i18n-01` `Q`（1995-09-25）→ RFC 2070 `Q`

HTML 4 `Q` → 現行HTML `<q>`

RFC 2070 `Q`からHTML 4 `Q`への個別採用因果は未確認。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1993-11-08 | HTML+ §5.6 | 一次仕様・提案 | `Q`をinline short quotationとして定義する。 | [一次資料](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_18.html) | 2026-08-09 |
| 1995-03 | HTML 3.0 Draft materials／Information Type Elements | W3C仕様草案・保存解説 | HTML 3.0全体をHTML+に基づくと説明し、`Q`を“New in 3.0”のshort quotationとして定義するが、個別採用は述べない。 | [保存ページ](https://www.w3.org/MarkUp/html3/)／[要素定義](https://www.w3.org/MarkUp/html3/logical.html) | 2026-08-09 |
| 1995-09-25 | `draft-ietf-html-i18n-01` | IETF Internet-Draft | 言語・platformごとに異なるquotation markの適切なrenderingのため`Q`を導入すると明記する。 | [IETF Datatracker](https://datatracker.ietf.org/doc/html/draft-ietf-html-i18n-01) | 2026-08-09 |
| 1997-01 | RFC 2070 §4.2.2 | 一次仕様・提案 | language-sensitiveなshort quotation要素として追加する。 | [一次資料](https://www.rfc-editor.org/rfc/rfc2070.html) | 2026-08-09 |

## 確度

**A−**

HTML 3.0全体がHTML+に基づく集合単位の因果と、国際化草案での`Q`の導入理由は直接確認できるが、HTML+ `Q`からの個別採用が明記されず、両区間の接続が欠けるため。

## 否定された仮説

HTML+ `Q`とHTML 3.0 `Q`の同名・同用途だけから個別の採用因果を断定すること。また、HTML+でのinline quotationという目的と国際化草案でのlanguage-sensitive renderingを同じ導入理由として圧縮すること。

## 未解決

- HTML+ `Q`をHTML 3.0または国際化草案へ個別に採用したことを示すmail、編集履歴、議事録はあるか。
- HTML+以前の具体的quotation markup祖先はあるか。

## 調査記録

HTML+、HTML 3.0、`draft-ietf-html-i18n-00`／`-01`、RFC 2070、HTML 4を比較した。`-00`に`Q`がなく`-01`で導入理由とDTDが加わること、HTML 3.0保存ページが示すHTML+との関係は仕様全体に限ることを確認した。横断比較は[HTML+調査ノート](../research/html-plus-elements.md)と[歴史的結論の敵対的レビュー](../research/adversarial-review.md)を参照する。

2026-08-09の敵対的レビューでは、HTML+、HTML 3.0、国際化草案`-00`／`-01`、RFC 2070の本文へ戻り、より早い出現、個別採用因果、言語依存の引用符という導入理由を再点検した。HTML+からの個別因果を示す資料は確認できなかったため確度をAからA−へ訂正し、未確認の個別矢印を外した後に再読して本文・証拠表・系譜・未解決点の整合を確認した。
