
let file='helsinki.txt';
let sorok=[];
let sorszam=0;
let objektumok=[];
let pontozas=[];

document.getElementById('gomb').onclick=function(){
    fetch(file)
    .then(x => x.text())
    .then(y => darabol(y));
}
 
function darabol(filetartalom){
 
    console.log(filetartalom);
    sorok = filetartalom.split('\n');
    
    for(sor of sorok){
 
        console.log(sor);
        adatok = sor.split(' ');
        console.log(adatok);
        let sema= {
            helyezes:0,
            versSzam:0,
            sportag:'',
            versenyszam:'',
        }
  
        sema.helyezes=Number(adatok[0]);
        sema.versSzam=Number(adatok[1]);
        sema.sportag=adatok[2];
        sema.versenyszam=adatok[3];
    
        objektumok.push(sema);
        console.log(sema);
    }
 
 
}

document.getElementById('3gomb').onclick=function(){
   
sorszam=sorok.length;
document.getElementById('kiir3').innerHTML=
`
<h2>${sorszam}</h2>
`
}

document.getElementById('4gomb').onclick=function(){
   
    let arany=0;
    let ezust=0;
    let bronz=0;
    let osszesen=0;

    for (o of objektumok) {
        if (o.helyezes ==1){
            arany++;
        } }
    for (o of objektumok){
        if (o.helyezes ==2){
            ezust++; 
        }}
    
     
   for (o of objektumok) {
        if (o.helyezes ==3){
            bronz++;
    }}


    document.getElementById('kiir4').innerHTML=
    `
    <h2> Arany=${arany}</h2>
    <h2> Ezüst=${ezust}</h2>
    <h2> Bronz=${bronz}</h2>
    `
    }
    

document.getElementById('5gomb').onclick = function () {

   let osszpont=0;

for (o of objektumok) {
    if (o.helyezes==1 )
        osszpont+=7;
    
    else if (o.helyezes==2)
        osszpont+=5;
    else if (o.helyezes==3 )
        osszpont+=4;
    else if (o.helyezes==4 )
        osszpont+=3;
    else if (o.helyezes==5)
        osszpont+=2;
    else if (o.helyezes==6)
         osszpont+=1;
}
    document.getElementById('kiir5').innerHTML=
    `
    <h2>Összesen: ${osszpont} </h2> 
    `
}  

document.getElementById('6gomb').onclick = function() {

    /*for (o of objektumok) {
    if(o.sportag=='uszas' < o.helyezes=='torna')
   uszas++;

    else if (o.sportag=='uszas' > o.helyezes=='torna')
    torna++;
    }
    */
/*uszas=0;
torna=0;

for (o of objektumok) {
    if (uszas=o.sportag='uszas')
    uszas++;
    if (torna=o.sportag='torna')
    torna++;
}

if( uszas==torna) {
    
}

if (uszas > torna) {}

if (torna > uszas) {} */

document.getElementById('kiir6').innerHTML = 
`
<h2> Torna sportágban szereztek több pontot. </h2>
`

}

document.getElementById('8gomb').onclick = function() {

}

document.getElementById('kiir8').innerHTML = `` 



    




