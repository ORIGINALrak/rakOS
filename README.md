# rakOS
Sulis projekt

Egy windows szerű felület, standard web-et használva azaz:
-html
-css (meg valamiért egy scss, mert van egy különcünk)
-javascript

A startup.html-lel kell kezdeni, ami szimulál egy betöltést, 10 másodpercig, ilyenkor a weboldal semmit nem csinál a háttérben, (az ESC megnyomásával lehet skippelni)

Ezután autómatikusan átküld a login.html-re ahol beégetett névvel és jelszóval be lehet lépni
A név: admin1
A jelszó: admin1

Ezt át lehet írni a login mappán belüli login.json ben ha valaki mással akar bejelentkezni
Ez nem változtat a projekt működésén, mindig ugyanarra van jogosultság
A bejelentkezés gombbal és az enter megnyomásával is tovább lehet jutni

Ez után átkerülünk a rakos.html-re, ahol kezdődik a program
A felület egy windows szerüen kinéző felület

Funkciói

lehet mappát megnyitni, amibe előre beállított placeholderek vannak
lehet képet megnyitni
lehet notepad-et megnyitni, amiből lehet menteni, és letölti mint txt, a bele írt dolgokat
lehet a jobb click-el újat, ikonokat csinálni, az elöbbi funkciókból
lehet aktiválni a "rakos"-t, a jobb click-es menüben ami nem csinál funkcionálisan semmit, csak eltünteti a jobb alsó sarokból hogy aktiválni kell, viszont megjelenít egy eléggé menő személyt, aki örül ennek, hogy aktiváltad
lehet a refresh-el ujratölteni, ami ujratölti az oldalt, ami meghív egy beépített javascript functiont (reload) ami refresheli az oldalt
lehet random háttérképet beállítani, ami az internetről leszed egy random képet, imádkozni kell elötte hogy ne legyen 18+

lehet a megnyitott programokat:
-lerakni tálcára
-beállítani teljesképernyőre
-és bezárni a programokat, amitől a tálcáról is eltünnek

minden megnyitott ikon megjelenik a tálcán, és ha rányomsz, akkor megnyitja őket
(majdnem) mindig mutatja, hogy mi van aktuálisan a fókuszban

írja, hogy mennyi az idő
ki lehet kapcsolni
ki lehet jelentkezni