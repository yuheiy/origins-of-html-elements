# WHATWG revision r8000と`template`統合commitの対応

## 調査対象

[`template`要素ページ](../elements/template.md)に残る「WHATWG revision r8000に対応する現行Git履歴上のcommit hashはどれか」を調査した。対象はrevision番号とGit commitの同定に限定し、`template`より前の特定browser prototypeやtemplate mechanism、2013年以後の個別規則の変更履歴は扱わない。閲覧日は2026-08-09である。

## 結論

WHATWG revision r8000に対応する現行[`whatwg/html`](https://github.com/whatwg/html)履歴上のcommitは[`685a5e0b27e963f6b0a62a21cb95078171076e3b`](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)である。

これは日付や差分からの推定ではない。commit message自身が`git-svn-id: http://svn.whatwg.org/webapps@8000 340c8d12-0b0e-0410-8428-c7bf67bfef74`を保持し、同じmessageが`Integrate <template> into HTML`およびW3C Bug 17930を記録している。著者・committerはIan Hickson、日時は2013-06-28 22:44:17 UTCである。[WHATWG HTML commit `685a5e0b`](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)

## 証拠

W3C Bug 17930 comment 21でIan Hicksonは`template`をWHATWG仕様へmergeしたと明記し、統合時に行ったeditorial／normative changesを列挙した。直後のcomment 22はcheck-inをrevision r8000と記録し、check-in commentを`Integrate <template> into HTML`としている。[W3C Bug 17930 comments 21–22](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21)

WHATWG公式GitHub履歴のcommit `685a5e0b`は、messageに同じ統合文言とBug 17930への参照を持ち、末尾の`git-svn-id`でSVN revision `@8000`を直接保持する。したがって、W3C Bug上のr8000とGit hashの対応を一意に確認できる。[WHATWG HTML commit `685a5e0b`](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)

同commitの`source`差分は、`template`要素節、`HTMLTemplateElement`と`content`、template contentsとなる`DocumentFragment`、parserのtemplate insertion mode、`innerHTML`／fragment parsing、rendering規則を同じ変更で追加している。これはmetadataだけが一致する別変更ではなく、Bug commentが説明する統合内容そのものであることを確認できる。[WHATWG HTML commit `685a5e0b`の差分](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b)

ただし、この対応からW3C側のpatchをそのまま採用したとは解釈しない。Bug 17930 comment 18と21でHicksonは、Tony RossとRafael Weinsteinの文書を基にWHATWG仕様へ手作業で統合したと説明している。[W3C Bug 17930 comments 18–21](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c18)

同日23:15 UTCのIan Hicksonによる記録も、r8000がRafael WeinsteinとTony Rossの提案に基づく`template`統合だったと述べる。これは対応hashの主証拠には使わず、editor自身による同時代の照合資料として扱う。[Ian Hickson, “HTML 8000”, 2013-06-28](https://ln.hixie.ch/?count=1&start=1372461305)

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 2013-06-28 | W3C Bug 17930 comments 21–22 | WHATWG editorの統合記録／check-in記録 | `template`をWHATWG仕様へmergeし、そのcheck-inがr8000であること。 | [一次資料](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17930#c21) | 2026-08-09 |
| 2013-06-28 | `whatwg/html` commit `685a5e0b27e963f6b0a62a21cb95078171076e3b` | WHATWG公式Git履歴 | commit messageの`git-svn-id`が`webapps@8000`を直接保持し、`template`統合、Bug 17930、著者、日時を記録すること。差分が要素、DOM API、parser、fragment parsing、renderingを統合すること。 | [一次資料](https://github.com/whatwg/html/commit/685a5e0b27e963f6b0a62a21cb95078171076e3b) | 2026-08-09 |
| 2013-06-28 | “HTML 8000” | WHATWG editorによる同時代の記録 | r8000が`template`をHTMLへ統合した大規模変更だったこと。 | [一次資料](https://ln.hixie.ch/?count=1&start=1372461305) | 2026-08-09 |

## 個別ページへの反映案

- `HTMLへの導入`、`HTML直前の祖先`、`系譜`にある`WHATWG HTML merge r8000`へcommit `685a5e0b27e963f6b0a62a21cb95078171076e3b`のリンクを付ける。
- 証拠表へ2013-06-28のWHATWG公式Git commit行を追加し、`git-svn-id`が`@8000`を保持することと、要素・DOM API・parser・fragment parsing・renderingの統合を記録する。
- 未解決項目「WHATWG revision r8000に対応する現行Git履歴上のcommit hashはどれか」を削除する。
- この同定は既存の導入系譜と確度Aを直接補強するが、系譜または確度の変更を必要としない。残るbrowser prototype／先行mechanismと、2013年以後の中間変更履歴は別の未解決項目として維持する。

## 確度案

**Aを維持**する。r8000と現行Git hashの対応はcommit messageの`git-svn-id`で直接確認でき、同じcommitのmessageと差分が`template`統合を示すため、既存の要素単位の導入因果を弱める欠落はない。

## 調査記録

W3C Bug 17930 comments 18–22、WHATWG公式GitHub repositoryの2013-06-28前後のcommit一覧、commit `685a5e0b`のmetadataと`source`差分、Ian Hicksonの同日記録を照合した。GitHub commitの日時だけからr8000を推定せず、移行時に保持された`git-svn-id`を対応の主証拠とした。別の読み手によるcommit message、日時、差分、Bug記録の再照合でも矛盾は確認されなかった。
