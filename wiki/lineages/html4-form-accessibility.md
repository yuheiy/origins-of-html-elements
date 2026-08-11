---
status: 完成
---

# HTML 4のフォームラベルとグループ化

## 共通要求

1996年のW3Cフォーム草案は、既存HTMLではフォームコントロールとラベルテキストの関連、関連欄のグループ化、非視覚ユーザーエージェント向けの文脈と移動手段が不足するとし、`LABEL`と`LGROUP`／`IS`を提案した。1997年のCougar向け草案はこの要求を`LABEL`と`FIELDSET`／`CAPTION`で表し、HTML 4.0 First Public Working Draftが`LABEL`と`FIELDSET`／`LEGEND`として採録した。[1996年フォーム草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） [1997年2月フォーム草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [Cougarフォーム草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） [HTML 4.0 FPWD](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)）

対象: [`label`](../elements/label.md)、[`fieldset`](../elements/fieldset.md)、[`legend`](../elements/legend.md)

## 確認済みの経路

```text
フォームコントロールとラベルの関連付け要求
  → W3Cフォーム草案 LABEL
  → Cougarフォーム草案 LABEL
  → HTML 4 LABEL

一般的なラベル付きグループUI＋音声ナビゲーション要求
  → W3Cフォーム草案 LGROUP / IS
  → Cougarフォーム草案 FIELDSET / CAPTION
  → HTML 4 FIELDSET / LEGEND
```

HTML 4 FPWDの仕様ソース内コメントは、表と`FIELDSET`の双方に`CAPTION`を使うと大手ベンダーのエラー回復実装に支障が出るため、グループのキャプションを`LEGEND`へ改名したと説明する。[HTML 4.0 FPWDソース](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)）

## 接続しない境界

RamanとRaggettが1995年に音声インターフェース向けフォーム拡張を作業し、その多くがCougarへ入ったという同時代の当事者説明はあるが、1996年3月草案への編集経路は未確認である。`LGROUP`から`FIELDSET`への変更理由、`LEGEND`という語の選択、特定GUIツールキットからの採用も確認できない。[Ramanの説明](../../raw/www.w3.org/mid/199706102148.OAA08302@labrador;list=w3c-wai-wg)（[公開元](https://www.w3.org/mid/199706102148.OAA08302@labrador;list=w3c-wai-wg)） [Dardaillerの説明](../../raw/www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)（[公開元](https://www.w3.org/mid/199706120733.JAA07828@www47.inria.fr;list=w3c-wai-wg)）
