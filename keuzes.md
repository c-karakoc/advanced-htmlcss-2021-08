welke kies je wanneer?

=> <input type="button">/<input type="submit"> vs <button>
   - een button voelt niet echt als "input" vragen van een gebruiker zoals <input> verder doet
   - meer vrijheid met content op <button>

=> svg vs canvas
   - canvas volledige artistieke vrijheid
   - svg ondersteunt animaties en interactie met JavaScript
   - svg-elementen zijn eventueel vanaf de pagina te manipuleren, canvas-circeltjes niet

=> float
   - nog handig voor waar hij oorspronkelijk voor is bedoeld: een afbeelding naast een stukje tekst tonen

=> flex vs grid
   - grid is niet handig met dynamische items, flexbox meer
   - flex werkt buggy op IE11, maar het werkt in ieder geval wel een beetje
   - grid kan elementen over elkaar heen positioneren

=> welk CSS-framework?
   - welke features heeft je webapp nodig?
   - ergonomie van CSS-framework: welke werkt fijn?

=> websockets puur gebruiken voor pingen of echt data meesturen? hangt van situatie af.
   - data die meegestuurd wordt kan incompleet zijn (denk aan related entities)
   - met een ping kan het langer duren om de data te bemachtigen (het uit de local storage halen is lekker snel, maar een GET-request naar de server duurt alweer een stuk langer)

=> app bouwen
   - native? twee development teams, dubbele kosten
   - compile-to-native/hybride? 1 dev team, maar is vaak net-niet-native. wel 1 project. maar wel weer een platform aan kennis om te leren
   - web? 1 dev team, webkennis. mogelijk nog wat leren over het tussenlaagje (ionic bijv.). Maar voelt lang niet altijd even goed aan als een native app. mogelijk beperkte APIs beschikbaar
   - pwa? 1 dev team, nagenoeg volledig webkennis + service workers en manifest. maar is ook lang niet altijd een native app. mogelijk ook beperkt qua APIs




