---
status: 完成
---

# カスタマイズ可能な`select`

## 現行要素間の共同変更

Open UIとWHATWGの作業は、既存の`select`と`option`を保ちながら、`select`内の最初の`button`と、その中で選択中`option`の内容を複製する`selectedcontent`を組み合わせるモデルを設計した。2025年7月21日の仕様コミットが、この四要素にまたがるカスタマイズ可能な`select`をHTML Standardへ統合した。[WHATWG HTML PR 10633](../../raw/github.com/whatwg/html/pull/10633)（[公開元](https://github.com/whatwg/html/pull/10633)） [WHATWG HTML commit `172cccf4`](../../raw/github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)（[公開元](https://github.com/whatwg/html/commit/172cccf47e97bee64f690347e0f303be31b7c67b)）

```text
既存select / option
  ＋ select内部のbutton
  ＋ 選択内容を複製するselectedcontent
  → カスタマイズ可能なselect
```

対象: [`select`](../elements/select.md)、[`option`](../elements/option.md)、[`button`](../elements/button.md)、[`selectedcontent`](../elements/selectedcontent.md)

## 境界

これは四要素の起源を一つにする系譜ではなく、現行要素間で確認できる2025年の共同変更である。`select`と`option`の初期フォーム系譜、`button`のHTML 4導入、`selectedcontent`のOpen UI／Chromium系譜は各要素ページを正本とする。
