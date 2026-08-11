---
status: 完成
---

# CERN-SGMLから初期HTMLリスト群への共有系譜

## 集合単位の採録

1990年12月7日のHTTP保存日時を持つWorldWideWebのテストファイルは、承認済みHTMLタグの説明中で、CERNで使用・対応されていたSGMLタグ集合から一部のタグをHTMLへ含めたと明記する。同じファイルは`UL`、`OL`、`LI`、`DL`、`DT`、`DD`を実際に使うため、CERN-SGMLから初期HTMLへの採録とリスト六要素の初期HTMLでの存在を同じ一次資料で確認できる。[WorldWideWebのテストファイル](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)）

ただし、資料は採録した個々のCERN-SGMLタグを列挙せず、一対一の対応を示さない。確認できる系譜は次の集合単位に限る。

CERN-SGMLタグ →［集合単位、個別対応は不明］初期HTML承認済みタグ集合（`UL`／`OL`／`LI`／`DL`／`DT`／`DD`を含む）

## 初期実装の制約

1990年のファイルは`OL`を使う一方、順序付きリストを順序なしリストとして対応すると明記し、例を誤って`</UL>`で閉じる。1991年3月のテストファイルでは順序付きリスト例も`UL`へ置換され、1992年1月のHTML説明は`OL`を未使用とする。その後の設計ノートは順序なしリストと区別するため`OL`を戻すと記録するため、1990年のタグ名、当時の表示実装、後の順序付き意味を同一視しない。[1991年テストファイル](../../raw/www.w3.org/History/1991-WWW-NeXT/Implementation/test.html)（[公開元](https://www.w3.org/History/1991-WWW-NeXT/Implementation/test.html)） [1992年1月のHTML説明](../../raw/lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)（[公開元](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html)） [*Future plans for HTML*](../../raw/www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)（[公開元](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)）

## 接続しない境界

Waterloo SCRIPT GMLには同名の六要素が存在するが、WaterlooからCERN-SGMLまたはHTMLへの個別採用を示す資料は確認できないため接続しない。1992年2月の後続テストソースに`MENU`と`DIR`があることも、CERN-SGML採録文が対象を`some tags`としか記さず、より早いテストファイルと1991年パーサーには両要素がないため、両名のCERN-SGML由来を示さない。[Waterloo SCRIPT GML User’s Guide](../../raw/web.archive.org/web/20020504095301/http%3A/www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)（[公開元](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt)） [後続test source](../../raw/www.w3.org/Test/test_source.txt)（[公開元](https://www.w3.org/Test/test_source.txt)）
