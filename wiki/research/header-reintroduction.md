# 現行`header`要素の再導入

## 調査対象

[`header`要素ページ](../elements/header.md)に残る「2009年に旧`header`を`hgroup`へ改名した後、現行`header`を再導入した正確なcommitと理由は何か」を調査した。対象は2009年4月のWHATWG仕様履歴と、その変更に対応する同時代のWHATWG mailing listに限定する。閲覧日は2026-08-09である。

## 結論

現行`header`を再導入したcommitは、Ian Hicksonによる2009-04-30 18:07:19 UTCの[`a729fd0c57b9a8cc7ed783a03e72cfc74549c9db`](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db)である。commit messageは`Introduce a new <header> element.`、保持されたSVN revisionはr3040である。この変更は、旧`header`を`hgroup`へ改名した[`7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4`](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)（r3039、同日17:37:30 UTC）の直後にある。[WHATWG HTML commit `7e9b2d1b`](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4) [WHATWG HTML commit `a729fd0c`](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db)

Hicksonは同日18:40 UTCにW3C HTML Working Groupへ、feedbackを受けて`header`を`hgroup`へ改名し、新しい`header`を導入したと告知した。この同時代の告知も、r3039とr3040が一組の分離・再導入変更であり、再導入がfeedbackへの応答だったことを明記する。[Ian Hickson, “Re: Naming of &lt;header&gt;”, 2009-04-30](https://lists.w3.org/Archives/Public/public-html/2009Apr/0285.html)

再導入の理由は、旧`header`がsection headingとsubheadingのgroup専用だったため表現できなかった、見出し、menu、検索form、`nav`等をまとめるページまたはsectionのheaderを表現可能にすることだった。2009-04-07にDiego Eisは、`div id="header"`で見出し、menu、検索formをまとめる構造をHTML5 `header`では表現できず、`nav`も子にできないと問題提起した。Ian Hicksonは変更後の2009-04-30の返信で、`nav`を`header`内で許可したこと、提示された構造が可能になったこと、旧`header`を`hgroup`へ改名したことを明記した。[Diego Eis, “About Descendent Tags”, 2009-04-07](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-April/061491.html) [Ian Hickson, “About Descendent Tags”, 2009-04-30](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)

## 仕様履歴

r3039に対応するcommit `7e9b2d1b`は、旧`header`を`hgroup`へ改名し、subheadingを支える用途へ限定するとcommit messageに明記する。この時点で、section headingを構成する`h1`–`h6`のgroupは`hgroup`が担うものとして分離された。[WHATWG HTML commit `7e9b2d1b`](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4)

30分後のr3040に対応するcommit `a729fd0c`は、新しい`header`節を追加し、sectionに適用されるheaderとして定義した。差分は、典型的内容として`h1`–`h6`または`hgroup`、table of contents、search form、logo、その他のintroductoryまたはnavigational aidsを列挙し、`header`内に`nav`を置く例も有効化した。したがって、このcommitの`header`は改名前のheading groupを同名で復元したものではなく、より広い導入・navigation内容のcontainerとして新設された。[WHATWG HTML commit `a729fd0c`](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db)

32分後のr3041に対応するcommit[`b3e77f6f1a15c5cc7fedc9e16b4a480426b2e07e`](https://github.com/whatwg/html/commit/b3e77f6f1a15c5cc7fedc9e16b4a480426b2e07e)は、`header`をintroductoryまたはnavigational aidsのgroupと表現し直し、`header`自体はsectioning contentではなく新しいsectionを導入しないと明記した。さらにr3043に対応するcommit[`77883ac94547e66273da7450487ac298b6bb625d`](https://github.com/whatwg/html/commit/77883ac94547e66273da7450487ac298b6bb625d)は、headingとheaderの用語混同を整理した。これらはr3040の再導入を置き換える別の導入commitではなく、同日直後の意味と用語の明確化である。[WHATWG HTML commit `b3e77f6f`](https://github.com/whatwg/html/commit/b3e77f6f1a15c5cc7fedc9e16b4a480426b2e07e) [WHATWG HTML commit `77883ac9`](https://github.com/whatwg/html/commit/77883ac94547e66273da7450487ac298b6bb625d)

## 理由を示す同時代の議論

Eisの2009-04-07のmailは、当時の`header`では`nav`を子にできず、見出し、menu、検索formをまとめた`div id="header"`相当の構造を専用要素で表せないと具体的に指摘した。同じthreadでKristof Zelechovskiは、当時の`header`はpage headerではなくsection headingsのgroup用であり、要素名が誤解を招くと述べた。[Diego Eis, “About Descendent Tags”, 2009-04-07](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-April/061491.html) [Ian Hicksonの返信に保存された引用, 2009-04-30](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)

Hicksonの2009-04-30の返信は、Eisの`nav`とcontainer用途への問いに対して`nav`を`header`内で許可し、提示された構造を「いまは可能」と回答し、Zelechovskiの指摘に対して旧`header`を`hgroup`へ改名したと回答する。この返信は、r3039とr3040が、heading groupと広いpage／section header containerを別要素へ分離して両方の要求を満たした変更であることを、編集者自身が同時代に説明した直接証拠である。[Ian Hickson, “About Descendent Tags”, 2009-04-30](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html)

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2009-04-07 | “About Descendent Tags” | WHATWG mailing listの問題提起 | 当時の`header`では`nav`を子にできず、見出し、menu、検索formをまとめたpage header相当を表せないという具体的要求。 | [一次資料](https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-April/061491.html) | 2026-08-09 |
| 2009-04-30 | `whatwg/html` commit `7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4` | WHATWG公式Git履歴 | 旧`header`を`hgroup`へ改名し、subheading用途へ限定したこと。`git-svn-id`はr3039。 | [一次資料](https://github.com/whatwg/html/commit/7e9b2d1b87f50e2da6d6a8cb8fe2d6fcbae6cae4) | 2026-08-09 |
| 2009-04-30 | `whatwg/html` commit `a729fd0c57b9a8cc7ed783a03e72cfc74549c9db` | WHATWG公式Git履歴 | 新しい`header`の正確な再導入commit。section header、見出し、目次、検索form、logo、introductory／navigational aidsという定義と`nav`を含む例。`git-svn-id`はr3040。 | [一次資料](https://github.com/whatwg/html/commit/a729fd0c57b9a8cc7ed783a03e72cfc74549c9db) | 2026-08-09 |
| 2009-04-30 | `whatwg/html` commit `b3e77f6f1a15c5cc7fedc9e16b4a480426b2e07e` | WHATWG公式Git履歴 | `header`をintroductory／navigational aidsのgroupと明確化し、sectioning contentではないと追記したこと。`git-svn-id`はr3041。 | [一次資料](https://github.com/whatwg/html/commit/b3e77f6f1a15c5cc7fedc9e16b4a480426b2e07e) | 2026-08-09 |
| 2009-04-30 | `whatwg/html` commit `77883ac94547e66273da7450487ac298b6bb625d` | WHATWG公式Git履歴 | headingとheaderの用語混同を整理したこと。`git-svn-id`はr3043。 | [一次資料](https://github.com/whatwg/html/commit/77883ac94547e66273da7450487ac298b6bb625d) | 2026-08-09 |
| 2009-04-30 | “Re: Naming of &lt;header&gt;” | WHATWG editorからW3C HTML Working Groupへの変更告知 | feedbackを受け、旧`header`を`hgroup`へ改名し、新しい`header`を導入したこと。 | [一次資料](https://lists.w3.org/Archives/Public/public-html/2009Apr/0285.html) | 2026-08-09 |
| 2009-04-30 | “About Descendent Tags” | WHATWG editorの返信 | `nav`を`header`内で許可し、Eisの提示した構造を可能にし、旧`header`を`hgroup`へ改名したという変更理由と結果。 | [一次資料](https://lists.w3.org/Archives/Public/public-whatwg-archive/2009Apr/0423.html) | 2026-08-09 |

## 個別ページへの反映案

- `HTMLへの導入`に、現行`header`は2009-04-30のcommit `a729fd0c`（r3040）で再導入され、旧`header`を`hgroup`へ分離した直後の新要素であることを記す。
- `HTML直前の祖先`では、2005年の旧`header`から現行`header`へ連続する単純な改名系列とせず、「旧`header`のheading group用途を`hgroup`へ分離し、新しい広いheader用途を`header`へ割り当てた」と、r3039、r3040、同時代mailで確認できる範囲に限定する。
- `系譜`を「旧`header`（heading group）→ `hgroup`」と「2009年の要求への応答 → 新`header`」の二枝として示し、r3039からr3040を要素の直接改名矢印で結ばない。
- 証拠表へcommit `a729fd0c`と2009-04-30のeditor返信を追加し、再導入commitに関する未解決項目を削除する。

## 未確認事項

commit `a729fd0c`のmessage自体にはmailing list message IDやissue番号がない。ただし、Hicksonが同じthreadへの返信で変更内容を各質問への回答として直接説明しているため、再導入の要求と編集判断は確認できる。Eisの提案以前に、広いpage／section header containerを独立要素として再導入する決定が別の非公開議論で成立していたかは確認できない。

## 調査記録

WHATWG公式Git履歴の2009-04-29から2009-05-31までを確認し、r3039、r3040、r3041、r3043のcommit metadataと`source`差分を照合した。WHATWG mailing listの2009-04-07の問題提起、2009-04-30のIan Hicksonによる返信、同日のW3C HTML Working Groupへの変更告知を確認した。commit日時や要素名の類似だけで理由を推定せず、変更されたcontent model、例、editorの回答が一致する範囲だけを結論とした。
