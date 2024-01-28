const {zokou} = require('../framework/zokou');
const gis = require('async-g-i-s');
const fetch = await import("node-fetch")

zokou({
  nomCom: "img",
  categorie: "Recherche",
  reaction: "📷"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Veuillez fournir un terme de recherche pour les images !');
    return;
  }

  const searchTerm = arg.join(" ");
  repondre("termes " +searchTerm);

  try {
    const results = await gis(searchTerm);
    console.log("rrr "+results);

    // Envoyer les 5 premières images trouvées
    for (let i = 0; i < 5; i++) {
      console.log("termes " +searchTerm);
      console.log("ii "+results);
      zk.sendMessage(dest, { image: { url: results[i].url } }, { quoted: ms });
    }
  } catch (error) {
    console.error('Erreur lors de la recherche d\'images :', error);
    repondre('Erreur lors de la recherche d\'images.',error);
  }
});
