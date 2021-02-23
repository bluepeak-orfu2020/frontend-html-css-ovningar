1. Skapa ett formulär som registrerar en person på ett evenemang.
   Formuläret ska skickas som en POST till https://http-echo-server.azurewebsites.net/api/HttpEchoDemo
   Formuläret ska innehålla
   * För- och efternamn
   * Telefonnummer
   * E-postadress
   * Personen ska kunna ange en eller flera matallergier (bestäm själv vilka som ska vara valbara)
   * Personen ska kunna välja till VIP-paketet (det ska alltså finnas en input där personen kan ange detta)
   * På evenemanget ska det finnas ett lotteri. Personen ska därför välja ett nummer mellan 1 och 100. Under evenemangets gång kommer ett nummer att slumpas och personen ha en chans att vinna ett pris (tävlingsmomentet är INTE del av uppgiften, du ska bara göra det möjligt för personen att välja en siffra)
   * En textyta där personen kan ange ytterligare information

   Tänkt på vilken typ av input du använder för varje fält. Poängen med uppgiften är att prova på olika fälttyper. Var också noga med att använda labels på rätt sätt.