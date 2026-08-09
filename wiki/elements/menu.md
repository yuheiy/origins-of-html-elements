# `<menu>`

> 状態: 1992年HTMLでの出現とcompact list用途を検証済み（導入理由・名称の由来は未確認）

## 概要

1992年のCERNタグ一覧とConnolly DTDで、`MENU`は`LI`からなる、`UL`よりcompactで通常1 item 1 lineのlistとして確認できる。現行HTMLではcommandのunordered listを表す`ul`のsemantic alternativeだが、初期の表示別list分類から現行意味への再定義経路は未確認である。

## 現在の意味

WHATWG HTML Living Standardでは、利用者が実行・起動できるcommandを`li`で並べたunordered listとしてtoolbarを表し、`ul`のsemantic alternativeとされる。 [一次定義](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element)（2026-08-09確認）

## HTMLへの導入

今回確認できる最初期のHTML記録は1992年のCERNタグ一覧で、list開始tagを`UL`、`MENU`、`DIR`に分け、`MENU`を`UL`よりcompactな小さいparagraphのlist、典型的には1 item 1 lineと説明する。1992年7月15日のConnolly DTDも`MENU`を`UL`、`OL`、`DIR`と同じ`LI` list familyへ収録する。要素を別名で導入した理由と導入主体は記録されていない。[Berners-Lee, *HTML Tags*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) [Connolly, “HTML DTD enclosed”](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html)

## HTML直前の祖先

未確認。GUI menu、先行文書体系のlist、または特定browserの表示styleからHTML `MENU`へ採用したことを示す資料は確認できない。

## さらに上流の由来

### 証拠

1992年以後の直接史料が示すのはHTML内部で`UL`、`MENU`、`DIR`をitem長とcompactnessで分けたlist modelまでである。HTML+はこの表示別分類を拡張`UL`へ一般化する対象として扱った。[Dave Raggett, *A Review of the HTML+ Document Format*](https://www.w3.org/MarkUp/HTMLPlus/htmlplus-paper.html)

### 解釈

初期`MENU`はGUI widgetのmenuではなく、短いitemをcompactに表示するためのlist variantだったと説明できる。現行のcommand toolbar semanticsへの経路は別途調査が必要である。

## 系譜

確認できる時系列は、初期HTML `MENU` compact list（1992）、HTML 2.0 `MENU` menu list（1995）、現行HTML `<menu>` command toolbarである。意味の再定義経路は未確認のため矢印で接続しない。

## 証拠

| 年月日 | 資料 | 種別 | この資料から確認できる内容 | URL | 閲覧日 |
|---|---|---|---|---|---|
| 1992-07-15 | “HTML DTD enclosed” | DTD添付mail | `MENU`を`UL`、`OL`、`DIR`と同じ`LI` list familyとして宣言する。 | [W3C Mail Archive](https://lists.w3.org/Archives/Public/www-talk/1992JulAug/0020.html) | 2026-08-09 |
| 1992-11-13（更新日） | *HTML Tags* | CERN公式HTML資料のhistorical snapshot | `MENU`を`UL`よりcompactで、典型的には1 item 1 lineのlistと定義する。 | [W3C History](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) | 2026-08-09 |
| 1993-07-23（登録日） | *Hypertext Markup Language (HTML)* version 1.2 | IETF Internet-Draft | `MENU`をcompact listとして維持する。 | [W3C保存text](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt) | 2026-08-09 |
| 1994 | *A Review of the HTML+ Document Format* | HTML+設計論文 | 旧`MENU`と`DIR`を拡張`UL`へ置き換える表示分類の一般化を説明する。 | [W3C HTML+](https://www.w3.org/MarkUp/HTMLPlus/htmlplus-paper.html) | 2026-08-09 |
| 1995-11 | RFC 1866: *Hypertext Markup Language - 2.0* | IETF Standards Track RFC | `MENU`を通常1 item 1 lineで`UL`よりcompactなmenu listとして標準化する。 | [RFC Editor](https://www.rfc-editor.org/rfc/rfc1866#section-5.6.4) | 2026-08-09 |

## 確度

**C**

確認可能な初期出現と当時の意味は固定できるが、導入理由、導入主体、具体的祖先を確認できないため。

## 否定された仮説

名称または短いitemの外見だけからGUI menuをHTML `MENU`の直接祖先とする説明。初期資料はlist表示variantとして説明しており、GUI widgetからの採用を示さない。

## 未解決

- `MENU`を`UL`と別要素にした導入判断、名称のsource、最初期browser実装は確認できるか。
- 初期のcompact listから現行のcommand toolbar／`ul` semantic alternativeへ意味を再定義した仕様変更はどれか。

## 調査記録

1992年CERNタグ一覧、1992年Connolly DTD、1993年HTML Internet-Draft、HTML+ DTD・review、HTML 2.0を比較した。GUI menuとの類似は採用因果を確認できず、系譜へ接続しなかった。現行意味との断絶を未解決として残した。対象群全体は[初期hypertext／document control調査ノート](../research/early-hypertext-elements.md)を参照する。
