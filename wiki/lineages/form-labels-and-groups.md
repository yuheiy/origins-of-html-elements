---
status: 完成
---

# フォームのラベル付けとグループ化

## 共通要求

1996年のW3Cフォーム草案は、フォームコントロールとラベルテキストの関連、関連欄のグループ化、非視覚ユーザーエージェント向けの文脈と移動手段が不足するとし、`LABEL`と`LGROUP`／`IS`を提案した。1997年のCougar向け草案はこの要求を`LABEL`と`FIELDSET`／`CAPTION`で表し、HTML 4.0 First Public Working Draftが`LABEL`と`FIELDSET`／`LEGEND`として採録した。[1996年フォーム草案](../../raw/www.w3.org/TR/WD-forms-960308.html)（[公開元](https://www.w3.org/TR/WD-forms-960308.html)） [1997年2月フォーム草案](../../raw/www.w3.org/TR/WD-forms-970203.html)（[公開元](https://www.w3.org/TR/WD-forms-970203.html)） [Cougarフォーム草案](../../raw/www.w3.org/TR/WD-forms-970402)（[公開元](https://www.w3.org/TR/WD-forms-970402)） [HTML 4.0 FPWD](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)）

```text
ラベル関連付け要求 → LABEL草案 → HTML 4 LABEL
ラベル付きグループと音声移動の要求 → LGROUP / IS → FIELDSET / CAPTION → HTML 4 FIELDSET / LEGEND
```

対象: [`label`](../elements/label.md)、[`fieldset`](../elements/fieldset.md)、[`legend`](../elements/legend.md)

## 接続しない境界

HTML 4 FPWDのソースは、表と`FIELDSET`の双方に`CAPTION`を使う場合のエラー回復問題を避けるため`LEGEND`へ改名したと説明する。一方、`LGROUP`から`FIELDSET`への変更理由、`LEGEND`という語の選択、特定GUIツールキットからの採用は確認できない。[HTML 4.0 FPWDソース](../../raw/www.w3.org/TR/WD-html40-970708/interact/forms.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/interact/forms.html)）
