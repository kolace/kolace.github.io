const context = {
 termSK: 'štatistický výraz',
 termEN: 'výraz v anglickom jazyku',
 synonym: 'synonymické výrazy',
 description: 'Vysvetlenie štatistického výrazu.',
 category: '1. kategória, 2. kategória',
 source: 'kniha...',
 terms: [
 {
  termSK:'strojové učenie',
  termEN:'machine learning',
  description:'...',
  category:'modelovanie, strojové učenie',
  source:'kniha...'
 },
 {
  termSK:'učenie sa bez dohľadu',
  termEN:'unsupervised learning',
  synonym:'učenie bez učiteľa, neriadené učenie',
  description:'Typ metódy induktívneho učenia sa, pri ktorej do učiaceho sa systému vstupujú len hodnoty vstupných premenných prípadov. Cieľom tohto typu učenia je objaviť "prirodzenú" štruktúru vstupných údajov - spoznať údaje, nové trendy a vzorce v nich. Touto metódou sa riešia úlohy ako je regresia, klasifikácia a modelovanie závislostí.',
  category:'modelovanie, strojové učenie',
  source:'Terek, M., Horníková, A. & Labudová, V., 2010. Hĺbková analýza údajov, Bratislava: Iura Edition'
 },
 {
  termSK:'učenie sa pod dohľadom',
  termEN:'supervised learning',
  synonym:'učenie s učiteľom, riadené učenie',
  description:'Typ metódy induktívneho učenia sa, pri ktorej do učiaceho sa systému vstupujú hodnoty vstupných premenných a hodnoty výstupnej premennej. Používa sa pri odhadovaní neznámej závislosti medzi vstupnými premennými a výstupnou premennou. Touto metódou sa riešia úlohy ako je zhlukovanie, sumarizácia a modelovanie zisťovanie odchýlok a zmien.....',
  category:'modelovanie, strojové učenie',
  source:'Terek, M., Horníková, A. & Labudová, V., 2010. Hĺbková analýza údajov, Bratislava: Iura Edition'
 },
 {
  termSK:'strojové učenie',
  termEN:'machine learning',
  description:'...',
  category:'modelovanie, strojové učenie',
  source:'kniha...'
 },
 {
  termSK:'učenie sa bez dohľadu',
  termEN:'unsupervised learning',
  synonym:'učenie sa bez učiteľa, neriadené učenie',
  description:'Typ metódy induktívneho učenia sa, pri ktorej do učiaceho sa systému vstupujú len hodnoty vstupných premenných prípadov. Cieľom tohto typu učenia je objaviť "prirodzenú" štruktúru vstupných údajov - spoznať údaje, nové trendy a vzorce v nich. Touto metódou sa riešia úlohy ako je regresia, klasifikácia a modelovanie závislostí.',
  category:'modelovanie, strojové učenie',
  source:'Terek, M., Horníková, A. & Labudová, V., 2010. Hĺbková analýza údajov, Bratislava: Iura Edition'
 },
 {
  termSK:'učenie sa pod dohľadom',
  termEN:'supervised learning',
  synonym:'učenie s učiteľom, riadené učenie',
  description:'Typ metódy induktívneho učenia sa, pri ktorej do učiaceho sa systému vstupujú hodnoty vstupných premenných a hodnoty výstupnej premennej. Používa sa pri odhadovaní neznámej závislosti medzi vstupnými premennými a výstupnou premennou. Touto metódou sa riešia úlohy ako je zhlukovanie, sumarizácia a modelovanie zisťovanie odchýlok a zmien.....',
  category:'modelovanie, strojové učenie',
  source:'Terek, M., Horníková, A. & Labudová, V., 2010. Hĺbková analýza údajov, Bratislava: Iura Edition'
 },
 {
  termSK:'umelá inteligencia',
  termEN:'artificial intelligence',
  synonym: 'AI',
  description:'...',
  category:'modelovanie, umelá inteligencia...',
  source:'kniha...'
 },
 {
  termSK:'hĺbková analýza údajov',
  termEN:'data mining',
  synonym:'dolovanie údajov...',
  description:'...',
  category:'modelovanie, umelá inteligencia...',
  source:'kniha...'
 },
 {
  termSK:'graf reziduí',
  termEN:'residual plot',
  description:'...',
  category:'modelovanie, grafy, vyhodnotenie modelu',
  source:'kniha...'
 },
 {
  termSK:'klasifikácia',
  termEN:'classification',
  description:'...',
  category:'modelovanie',
  source:'kniha...'
 },
 {
  termSK:'p-hodnota',
  termEN:'p-value',
  description:'   ',
  category:'modelovanie, vyhodnotenie modelu, testy',
  source:'web...'
 },
 {
  termSK:'odľahlé pozorovnanie',
  termEN:'outlier',
  synonym:'extrémne pozorovanie',
  description:'...',
  category:'vyhodnotenie modelu, dáta',
  source:'kniha...'
 },
 {
  termSK:'údaje',
  termEN:'data',
  synonym:'dáta',
  description:'...',
  category:'dáta',
  source:'kniha...'
 }
  ]
};
const templateElement=document.getElementById("templateHB");
const templateSource=templateElement.innerHTML;
const template=Handlebars.compile(templateSource);
const compiledHtml=template(context);
document.getElementById("information").innerHTML=compiledHtml;
