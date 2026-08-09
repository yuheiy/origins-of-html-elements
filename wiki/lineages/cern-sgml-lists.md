# CERN-SGMLから初期HTML list群への共有系譜

## 集合単位の採録

1990年12月7日のHTTP保存日時を持つWorldWideWeb test fileは、accepted HTML tagsの説明中で、CERNで使用・supportされていたSGML tagsetから一部のtagをHTMLへ含めたと明記する。同じfileは`UL`、`OL`、`LI`、`DL`、`DT`、`DD`を実際に使うため、CERN-SGMLから初期HTMLへの採録とlist六要素の初期HTMLでの存在を同じ一次資料で確認できる。[WorldWideWeb test file](https://www.w3.org/History/1991-WWW-NeXT/Implementation/Test/backup_of_test.html)

ただし、資料は採録した個々のCERN-SGML tagを列挙せず、一対一の対応を示さない。確認できる系譜は次の集合単位に限る。

CERN-SGML tags →［集合単位、個別対応は不明］初期HTML accepted tag集合（`UL`／`OL`／`LI`／`DL`／`DT`／`DD`を含む）

## 初期実装の制約

1990年のfileは`OL`を使う一方、ordered listをunordered listとしてsupportすると明記し、例を誤って`</UL>`で閉じる。1991年3月のtest fileではordered list例も`UL`へ置換され、1992年1月のHTML説明は`OL`を未使用とする。その後の設計ノートはunordered listと区別するため`OL`を戻すと記録するため、1990年のtag名、当時の表示実装、後のordered semanticsを同一視しない。[1991年test file](https://www.w3.org/History/1991-WWW-NeXT/Implementation/test.html) [1992年1月のHTML説明](https://lists.w3.org/Archives/Public/www-talk/1992JanFeb/0000.html) [*Future plans for HTML*](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Future.html)

## 接続しない境界

Waterloo SCRIPT GMLには同名の六要素が存在するが、WaterlooからCERN-SGMLまたはHTMLへの個別採用を示す資料は確認できないため接続しない。1992年2月の後続test sourceに`MENU`と`DIR`があることも、CERN-SGML採録文が対象を`some tags`としか記さず、より早いtest fileと1991年parserには両要素がないため、両名のCERN-SGML由来を示さない。[Waterloo SCRIPT GML User’s Guide](https://web.archive.org/web/20020504095301/http://www.uga.edu/~ucns/stddocs/script-gmlref-tso.txt) [後続test source](https://www.w3.org/Test/test_source.txt)
