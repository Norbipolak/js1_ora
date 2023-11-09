/* 
Vezérlési szerkezetek
    * elágazások
        - if 
        - switch 
    * ciklusok
        - elöltesztelő
        - hátultesztelő
        - számlálós
*/
var age = 16;

console.log(age < 18); // true

if (age < 18) {
    console.log("A felhasználó nem nagykorú!");
}

if (age >= 18) {
    console.log("A felhasználó nagykorú!");
} else {
    console.log("A felhasználó nem nagykorú!");
}

var homerseklet = 10;

/*
    Abba az elágazásba fut bele, amelyik 
    elöször igaznal bizonyul 
*/

if (homerseklet <= 0) {
    console.log("A víz szilárd halmazállapotú");
} else if (homerseklet > 0 && homerseklet < 100) {
    console.log("A víz folyékony halmazállapotú");
} else {
    console.log("A víz légnemű halmazállapotú");
}

/* 
    A switch egyetlen változó értékét 
    vizsgálja és pontos egyezőséget keres.

    Az a különbség a switch és az if között, hogy 
    az if csak abba az elágazásba fut bele amit igaznak talál,
    a switch egyenlőséget keres és belefut az összes elágazba
    majd a break-vel lehet kijönni belöle
*/

var kedvencSzin = "sárga";

switch (kedvencSzin) {
    case "kék":
        console.log("A felhasználó kedvenc színe a kék.");
        break; // kilépünk az elágazásból 

    case "zöld":
        console.log("A felhasználó kedvenc színe a zöld.");
        break;

    case "piros":
        console.log("A felhasználó kedvenc színe a piros.");
        break;

    default: // ha nem talált egyezőséget a case-ek között
        console.log("Nem ismerem a következő színt: " + kedvencSzin);
        break;
}

/* 
    Ciklusok
        * elöltesztelő ciklus 
        * hátultesztelő cilus 
        * számlálós ciklus 
*/

// elöltesztelő ciklus 
var counter = 0;

while (counter < 15) { // ciklusfej -> ellenörizzük a futási feltételt
    /* ciklusmag 
    a ciklus utasításait tartalmazza.
    */
    counter++;
    console.log("while counter: " + counter);
}

/* 
    a while counter elkezdi nullánál, megnézni, hogy igaz-e az állítás
    mivel 0 kisebb, mint 15 ezért a futási feltétel igaz és végbemehet a 
    ciklusmagban megadott utasítás. Itt hozzáad egyet és kiirja, egészen 14-ig 
    lesz igaz a ciklusfejben megadott feltétel, továbbmegy hozzáad egyet és kiirja a 15-t.
*/

//hátultesztelő ciklus 

counter = 0;
do {
    counter++;
    console.log("do-while counter: " + counter);
} while (counter < 15); // a ciklus végén található 

/* 
    A do-while counter mindig megcsinálja elöször, ami a ciklusmagban található,
    majd utána ellenőrzi, hogy igaz-e a feltétel amit megadtunk a while-ban.
    Ha 0-tól kezdjük akkor hozzáad egyet és megnézi hogy az 1 kisebb-e 
    mint 15, mivel igaz, igy az egyhez fogunk hozzadni egyet és megnézi, hogy
    a feltétel még igaz-e és igy tovább egészen 15-ig. 

    Mivel a do-while counterben elöször végbemegy a ciklusmagban megadott müvelet, 
    ezért ez a ciklus egyszer mindig végbe fog menni, attól függetlenül hogy a while-ban 
    mit adtunk meg feltételként. 

    lásd:

    counter = 100;

    do {
    counter++;
    console.log("do-while counter: " + counter);
    } while(counter < 15)

    eredmény: do-while counter: 101 -> csak itt megáll a ciklus, de egy mindig végbe megy 
    
    */

// számlálós ciklus 

for (var i = 0; i < 15; i++) {
    console.log("i = " + i);
}

/*
    A while-nál lévő ciklusfej és ciklusmag egy részben található, igy itt az utolsó eredmény nem 15 lesz
    hanem 14. var i = 0; i < 15; i++
*/

for(var i = -100; i <= 0; i++) {
    console.log("i = " + i);
}

/* 
    -100-tól 0-ig végigiterál az összes elemen.
    Első két feltétel, hogy mettöl meddig menjen a iteráció, 3. hogy milyen módon, feltétel alapján.
*/

for(var i = 15; i >= 0; i--) {
    console.log("i = " + i);
}

// Végtelen ciklus -> amikor a futási feltétel örökké tart 

for(var i = 15; i >= 0; i++) {
    if(i === 20)
    continue; // kihagyjuk az iterációt. Kihagyja az iterációnak azt az elemét, amit az if-ben meghatároztunk. 
                    // 19-et még kiirja megy tovább az iteráció a 20-t átugorja (nem irja ki) és ujra megy tovább egyesével a 21-töl

    console.log("i = " + i); 

    if(i === 40) {
        break; // kilépünk az iterációból, hogy nem menjen a végtelenségig
    }
}

/* 
    Alprogramok
        * A programunk jól elkülöníthető 
        funkcionális egységei 
            - eljárás
            - függvény 
*/

function hello() {
    console.log("Hello");
}

// az eljárás hívása (akárhányszor meg lehet hívni)
hello()

function greetings(name, partOfTheDay) {
    console.log(`Jó ${partOfTheDay} ${name}!`); // alt gr 7 -> ` 
}

greetings("Pista", "reggelt");
greetings("Moni", "estét");

function division (a, b) {
    /*
        Lokális változó, 
        csak a függvényen belülről 
        érhető el
    */
    var result = a / b;
    return result; // return value, visszatérési érték
}

var result1 = division(4, 2);  // külön változókban meg kell hívni a függvényt 
var result2 = division(40, 2); // és utána tudjuk őket ki console.log-ni
var result3 = division(45, 7);
console.log("result1 = " + result1);
console.log("result2 = " + result2);
console.log("result3 = " + result3);

function addition(a, b) {
    // var result = a + b;
    // return result 
    return a + b; 
}

var result4 = addition(4, 6);
console.log("result4 = " + result4);
/* 
    Matemmatikai függvényke
*/

console.log("************Matematikai fügvények*************")

//négyzetgyök

var szam = 16;
var negyzetgyok = Math.sqrt(szam);
console.log(`${szam}^0.5 = ${negyzetgyok}`);

//hatványozás 
var hatvany = Math.pow(2, 50); // elöször megadjuk azt a számot, amit négyzetre szeretnénk emelni, majd azt, hogy hányadik négyzetére
console.log(`2^50 = ${hatvany}`);

console.log(Math.PI);

var a = 55.32535254;
var kerekitettA = Math.round(a);
console.log("kerekitettA = " + kerekitettA);

var ketTizedesJegy = Math.round(a*100)/100;
console.log("ketTizedesJegy = " + ketTizedesJegy);

var otosreKerekites = Math.round(58/5)*5;
console.log("otosreKerekites: " + otosreKerekites);

//lefele kerekítés 
console.log(Math.floor(5.9));

//felfele kerekítés
console.log(Math.ceil(5.1));

/* 
    *Összefoglalás
        - Math.sqrt - négyzetgyök 
        - Math.pow - hatványozás
        - Math.round - kerekítés -> 5-től felfele 
        - Math.floor - kerekítés -> mindig lefele 
        - Math.ceil - kerekítés -> mindig felfele
*/















