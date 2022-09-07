const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log("Bem vindo ao bot conversor de moedas");

async function robo(){
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    const moedaBase =  readlineSync.question('Informe uma moeda base: ') || 'dolar'; 
    const moedaFinal = readlineSync.question('Informe uma moeda final: ') || 'real';
    const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C1SQJL_pt-BRBR1011BR1011&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0i512l9.3793j1j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(qualquerUrl);
    await page.screenshot({path: 'example.png'});

    const resultado = await page.evaluate(() => {
      return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é de ${resultado}`)

    await browser.close();
  }
  
  robo();
