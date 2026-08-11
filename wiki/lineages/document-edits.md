---
status: 完成
---

# 文書の削除と挿入

## 共有された要求と採用

HTML+は法律文書や法案修正で削除部分と追加部分を示す要求に対して`REMOVED`と`ADDED`を定義した。HTML 3.0 DTDは1995年2月22日に`INS`と`DEL`を法律文書用に追加したと記し、後続のW3C HTML設計もHTML+とHTML 3.0を基礎とする。[HTML+ Document Amendments](../../raw/www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)（[公開元](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_22.html)） [HTML 3.0 DTD](../../raw/www.w3.org/MarkUp/html3/html3.dtd)（[公開元](https://www.w3.org/MarkUp/html3/html3.dtd)） [W3C声明](../../raw/www.w3.org/press-releases/1996/html-leadership/__index)（[公開元](https://www.w3.org/press-releases/1996/html-leadership/)）

HTML 4は両要素を一般の文書版間差分へ広げ、`cite`と`datetime`を加えた。内容モデルの不整合は1997年10月に`%flow`へ修正された。[HTML 4 FPWD](../../raw/www.w3.org/TR/WD-html40-970708/struct/text.html)（[公開元](https://www.w3.org/TR/WD-html40-970708/struct/text.html#h-7.3.4)） [HTML WG議事録](../../raw/lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)（[公開元](https://lists.w3.org/Archives/Public/w3c-wai-hc/1997OctDec/0160.html)）

```text
[集合単位] HTML+ REMOVED / ADDED
  → HTML 3.0 DEL / INS
  → W3C HTML設計
  → HTML 4 DEL / INS
```

対象: [`del`](../elements/del.md)、[`ins`](../elements/ins.md)

## 境界

`ADDED`から`INS`、`REMOVED`から`DEL`への個別改名、Cougar中間版、HTML 4への個別採録は未確認である。
