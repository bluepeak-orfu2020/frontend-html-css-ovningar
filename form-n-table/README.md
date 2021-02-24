1. Skapa ett formulär där användaren kan registrera ordrar.
   En order ska ha en kundreferens (text), ett datum (date), ett belopp (number) och en kategori (hitta på egna alternativ). Det ska även vara möjligt att ange om ordern ska skickas med express-leverans eller ej.

2. Skriv JavaScript-kod som tar emot formuläret och lägger in informationen i tabellerna enligt nedan.
   
   A. Skapa en tabell som listar alla orders som lagts in via formuläret. Varje rad ska innehålla all information som angivits för 1 order i formuläret. Det ska alltså finnas en kolumn för varje input du skapat i uppgift 1.

   Gruppera kolumnerna för express-leverans och kategori i en grupp som heter "extra info". Med gruppering menas att det ska finnas två nivåer av headers i tabellen.

   Uppgiften är alltså att du ska i JavaScript skapar upp en rad i tabeller för varje gång formuläret submit:as.


   B. Skapa en tabell som innehåller en sammanfattning av alla orders. Den ska innehålla två kolumner: totalsumma och antal orders. Det ska finnas 12 rader i tabellen, 1 för varje månad.

   För varje order som läggs in via formuläret i uppgift 1 så ska totalsumman och antal orders räknas om för den månad där ordern gjordes.

Kom ihåg: Du kan skapa HTML-element i JavaScript med document.createElement('[element-name]'). Sen kan du lägga in det skapade element med appendChild(element). appendChild ska anropas på det element du vill lägga in ditt nya element i.