// import("node-fetch")


const {zokou} = require('../framework/zokou');
var gis = require('g-i-s');


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
  //gis(searchTerm,envoiImage);

  function envoiImage(e,r)
   {
      
    
   }

 gis(searchTerm,envoiImage);
      
});
