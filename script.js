const Polska = ['pierogi','kasza','kluski','gołąbki','kotlet schabowy'];
const Nepal = ['Dhal', 'warzywa w sosie curry', 'lassi'];
const Gruzja = ['Chaczapuri', 'Chinkali', 'Satsivi', 'Lobio'];
const Hawaje = ['Hawaiian Plate', 'Saimin', 'Taro Ko Farm Chips', 'Poke'];
const Japonia = ['Sushi', 'okonomiyaki', 'tayaki'];
const Chiny = ['Sweet and sour pork','hot pot','dim sum','Peking Roasted Duck'];
const Wietnam = ['Cao lau', 'pho', 'goi cuon', 'cha ca'];
const Bulgaria = ['banitsa', 'kebapche', 'shopska salata '];

const daniePolska = document.querySelector('.polish-dish');
const polskaButton = document.querySelector('div.polish');
const spanPolska = document.querySelector('span.polish');
const paragrafPolska = document.querySelector('p.polish-dish')

console.log(paragrafPolska);

const danieWietnam = document.querySelector('.wietnamese-dish');
const wietnamButton = document.querySelector('div.wietnamese');
const spanWietnamese = document.querySelector('span.wietnamese');
const paragrafWietnam = document.querySelector('p.wietnamese-dish')

const danieJaponia = document.querySelector('.japanese-dish');
const japoniaButton = document.querySelector('div.japanese');
const spanJapanese = document.querySelector('span.japanese');
const paragrafJaponia = document.querySelector('p.japanese-dish')

const danieNepal = document.querySelector('.nepalese-dish');
const nepalButton = document.querySelector('div.nepalese');
const spanNepalese = document.querySelector('span.nepalese');
const paragrafNepal = document.querySelector('p.nepalese-dish')

const danieBulgaria = document.querySelector('.bulgarian-dish');
const bulgariaButton = document.querySelector('div.bulgarian');
const spanBulgarian = document.querySelector('span.bulgarian');
const paragrafBulgaria = document.querySelector('p.bulgarian-dish')

const danieHawaje = document.querySelector('.hawaiian-dish');
const hawajeButton = document.querySelector('div.hawaiian');
const spanHawaiian = document.querySelector('span.hawaiian');
const paragrafHawaje = document.querySelector('p.hawaiian-dish')

const danieChiny = document.querySelector('.chinese-dish');
const chinyButton = document.querySelector('div.chinese');
const spanChinese = document.querySelector('span.chinese');
const paragrafChiny = document.querySelector('p.chinese-dish')


const danieGruzja = document.querySelector('.georgian-dish');
const gruzjaButton = document.querySelector('div.georgian');
const spanGeorgian = document.querySelector('span.georgian');
const paragrafGruzja = document.querySelector('p.georgian-dish')



// const funkcjadaniowaChiny = () => {
// 	danieChiny.textContent = Chiny[0];
// 	spanChinese.classList.add('hidename');
// };



const funkcjadaniowaChiny = () => {
    let number = Math.floor(Math.random() * Chiny.length)
	danieChiny.textContent = Chiny[number];
	spanChinese.classList.add('hidename');
    paragrafChiny.classList.add('afterclick')
};







const funkcjadaniowaHawaje = () => {
    let number = Math.floor(Math.random() * Hawaje.length)
	danieHawaje.textContent = Hawaje[number];
	spanHawaiian.classList.add('hidename');
    paragrafHawaje.classList.add('afterclick')
};



const funkcjadaniowaNepal = () => {
    let number = Math.floor(Math.random() * Nepal.length)
	danieNepal.textContent = Nepal[number];
	spanNepalese.classList.add('hidename');
    paragrafNepal.classList.add('afterclick')
};



const funkcjadaniowaBulgaria = () => {
    let number = Math.floor(Math.random() * Bulgaria.length)
	danieBulgaria.textContent = Bulgaria[number];
	spanBulgarian.classList.add('hidename');
    paragrafBulgaria.classList.add('afterclick')
};



const funkcjadaniowaJaponia = () => {
    let number = Math.floor(Math.random() * Japonia.length)
	danieJaponia.textContent = Japonia[number];
	spanJapanese.classList.add('hidename');
    paragrafJaponia.classList.add('afterclick')
};



const funkcjadaniowaWietnam = () => {
    let number = Math.floor(Math.random() * Wietnam.length)
	danieWietnam.textContent = Wietnam[number];
	spanWietnamese.classList.add('hidename');
    paragrafWietnam.classList.add('afterclick')
};



const funkcjadaniowaPolska = () => {
    let number = Math.floor(Math.random() * Polska.length)
	daniePolska.textContent = Polska[number];
	spanPolska.classList.add('hidename');
    paragrafPolska.classList.add('afterclick')
};



const funkcjadaniowaGruzja = () => {
    let number = Math.floor(Math.random() * Gruzja.length)
	danieGruzja.textContent = Gruzja[number];
	spanGeorgian.classList.add('hidename');
    paragrafGruzja.classList.add('afterclick')
   
};



polskaButton.addEventListener('click', funkcjadaniowaPolska);
hawajeButton.addEventListener('click', funkcjadaniowaHawaje);
wietnamButton.addEventListener('click', funkcjadaniowaWietnam);
japoniaButton.addEventListener('click', funkcjadaniowaJaponia);
bulgariaButton.addEventListener('click', funkcjadaniowaBulgaria);
nepalButton.addEventListener('click', funkcjadaniowaNepal);
chinyButton.addEventListener('click', funkcjadaniowaChiny);
gruzjaButton.addEventListener('click', funkcjadaniowaGruzja);