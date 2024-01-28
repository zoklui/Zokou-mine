// import("node-fetch")


const {zokou} = require('../framework/zokou');
const gis = require('g-i-s');


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
  gis(searchTerm,envoiImage);

  function envoiImage(e,r)
   {
      if(e)
      {repondre("*Ooups une erreur s'est produite*
                )}
    else{
        repondre("*Téléchargement des images en cour ...*")
     for(var a=0;a<5;a++){
         zk.sendMessage(dest,{image:{url:r.url[i]}},{quoted:ms});
     }
    }
   }

 
      
});
