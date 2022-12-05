/*
 * 5 punten
 */

const getRandomWord = async () => {
  return fetch("https://random-words-api.vercel.app/word").then((r) =>
    r.json()
  );
};

(async () => {
  const results = await getRandomWord();

  // Log het woord

  // Log het woord in hoofdletters

  // Log de definitie

  // Log de uitspraak
})();
