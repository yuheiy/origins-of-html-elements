---
status: 完成
---

# ARIAランドマークからネイティブHTML要素へ

## 共有される役割語彙

XHTML Role ModuleとWAI-ARIAは`main`と`search`を文書内の領域を識別する標準役割として定義した。後のHTML提案は、著者が`div`へこれらの役割を付ける慣習を、ユーザーエージェントが暗黙に認識できる専用要素へ置き換えることをそれぞれ明記する。[XHTML Role Module](../../raw/www.w3.org/TR/2006/WD-xhtml-role-20060725/__index)（[公開元](https://www.w3.org/TR/2006/WD-xhtml-role-20060725/)） [WAI-ARIA 1.0 FPWD](../../raw/www.w3.org/TR/2008/WD-wai-aria-20080204/__index)（[公開元](https://www.w3.org/TR/2008/WD-wai-aria-20080204/)）

対象: [`main`](../elements/main.md)、[`search`](../elements/search.md)

## 個別のHTML導入

```text
XHTML Role main → WAI-ARIA main → div role=main＋既存id/class
  → W3C maincontent / main提案 → HTML main

XHTML Role search → WAI-ARIA search → div role=search
  → WHATWG issue / PR → HTML search
```

`main`は2012年の提案と実態調査を経てW3C草案へ入り、2013年にWHATWGが統合した。`search`はARIAランドマークのうち対応HTML要素がないことを理由に2020年に提案され、2023年にLiving Standardへ統合された。[`main`提案](../../raw/lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)（[公開元](https://lists.w3.org/Archives/Public/public-html/2012Sep/0086.html)） [`main`統合コミット](../../raw/github.com/whatwg/html/commit/7761b993b22765dbd26ca229d8d89bcb5044392c)（[公開元](https://github.com/whatwg/html/commit/7761b993b22765dbd26ca229d8d89bcb5044392c)） [`search` issue](../../raw/github.com/whatwg/html/issues/5811)（[公開元](https://github.com/whatwg/html/issues/5811)） [`search`統合コミット](../../raw/github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec)（[公開元](https://github.com/whatwg/html/commit/c598ff023f081dd3f03b2e43177a632fb7dc92ec)）

## 接続しない境界

二要素は同じ時期に一体としてHTMLへ導入されたのではない。共有するのはXHTML／ARIAの役割語彙と`div role=...`をネイティブ要素へ置き換える設計経路であり、`search`を`main`から派生したとは扱わない。`maincontent`から`main`への名称決定と、XHTML Roleで各役割を発案した人物も未確認である。
