//Creamos div donde añadir los resultados
results=document.createElement('div');
br=document.createElement('br');
results.appendChild(br);
body=document.body;

links=document.querySelectorAll('a')
numLinks=links.length;
pLinks=document.createElement('p');
pLinks.textContent='Número de enlaces:'+numLinks;
results.appendChild(pLinks);

penLink=links[numLinks-2];
pPenLink=document.createElement('p');
pPenLink.textContent='Dirección a la que enlaza el penúltimo enlace: '+penLink.href;
results.appendChild(pPenLink);

linksPrueba=document.querySelectorAll('a[href="http://prueba"],a[href="http://prueba/"]');
pLinksPrueba=document.createElement('p');
pLinksPrueba.textContent='Número de enlaces que enlazan a http://prueba: '+linksPrueba.length;
results.appendChild(pLinksPrueba);

thirdP=document.querySelector('p:nth-child(3)')
linksThirdP=thirdP.querySelectorAll('a').length;
pThirdP=document.createElement('p');
pThirdP.textContent='Número de enlaces del tercer parráfo: '+linksThirdP;
results.appendChild(pThirdP);

body.appendChild(results);
