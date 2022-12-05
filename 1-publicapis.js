/*
 * 7 punten
 */

const getAllPublicApis = async () => {
  return fetch("https://api.publicapis.org/entries").then((r) => r.json());
};

(async () => {
  const result = await getAllPublicApis();

  // Log hoeveel API's er zijn

  // Maak een array met alle API namen, log de eerste 3 resultaten

  // Log alle API's die HTTPS ondersteunen, log de eerste 3 resultaten

  /*
   * Log alle API's die HTTPS ondersteunen,
   * waarbij er geen Auth nodig is en
   * waarbij de API niet CORS ondersteund,
   *
   * log de eerste 3 resultaten
   *
   * Tip: Cors bevat de string "no" als het niet ondersteund wordt
   * Tip: Auth is een lege string als er geen auth nodig is
   */
})();
