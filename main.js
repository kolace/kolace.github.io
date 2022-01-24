const context = {
 title: 'Vitaj na stránke projektu Štatistický slovník online!',
 body: 'Štatistický slovník online bol vyvinutý v dôsledku frustrácie autora z nedostatku slovenských zdrojov na internete, ktoré by obsahovali komplexný zoznam slovenských štatistických výrazov, ich výkladu a anglických ekvivalentov. Jedná sa o voľnočasový projekt 1 človeka, preto prosím o zľutovanie ak nájdeš nejaké chyby. Ako autor však ocením, ak mi o nich dáš vedieť!'
 terms: [
 {
  termSK:'umelá inteligencia',
  termEN:'artificial intelligence, AI',
  synonym:,
  description:'jiosafjfjd',
  category:,
  source:''
 },
 {
  termSK:'hĺbková analýza údajov',
  termEN:'data mining',
  synonym:,
  description:'...',
  category:,
  source:''
 },
 {
  termSK:'graf reziduí',
  termEN:'residual plot',
  synonym:,
  description:'',
  category:,
  source:''
 },
 {
  termSK:'klasifikácia',
  termEN:'classification',
  synonym:'',
  description:' ',
  category:'',
  source:''
 },
 {
  termSK:'p-hodnota',
  termEN:'p-value',
  synonym:'',
  description:'',
  category:'',
  source:''
 },
 {
  termSK:'odľahlé pozorovnanie',
  termEN:'outlier',
  synonym:'',
  description:'',
  category:'',
  source:''
 },
 {
  termSK:'strojové učenie',
  termEN:'machine learning',
  synonym:'',
  description:'',
  category:'',
  source:''
 },
 {
  termSK:'neriadené učenie',
  termEN:'unsupervised learning',
  synonym:'učenie bez učiteľa',
  description:' ',
  category:'',
  source:''
 },
 {
  termSK:'riadené učenie',
  termEN:'supervised learning',
  synonym:'učenie s učiteľom',
  description:'',
  category:'',
  source:''
 },
 {
  termSK:'',
  termEN:'',
  synonym:'',
  description:'',
  category:'',
  source:''
 }
  ]
};
const templateElement=document.getElementById("templateHB");
const templateSource=templateElement.innerHTML;
const template=Handlebars.compile(templateSource);
const compiledHtml=template(context);
document.getElementById("dictionary").innerHTML=compiledHtml;
