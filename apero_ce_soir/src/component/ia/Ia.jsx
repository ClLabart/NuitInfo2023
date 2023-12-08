import { useState, useEffect } from "react";

const Ia = () => {
  const [iframeSrc, setIframeSrc] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Mettez à jour l'URL de l'iframe après le délai de 5 secondes
      setIframeSrc("https://widget.writesonic.com/CDN/index.html?service-base-url=https://api.botsonic.ai&token=ec9be5f1-0e73-453e-80b7-57016f61db3c&base-origin=https://bot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https://bot.writesonic.com/bc2d534c-1c4b-4f42-9648-bfd17cbaa324?t=share&workspace_id=c5f02ce8-232c-4844-bd33-e50720e3648e");
    }, 0);

    // Nettoyez le timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, []); // Le tableau de dépendances vide signifie que cela ne dépend d'aucune variable, donc cela ne s'exécute qu'une fois au montage du composant

  return (
    <div className="ia-container">
      <h2>Posez des questions à notre IA ! </h2> <br />
      {iframeSrc && <iframe  scrolling="no" src={iframeSrc}></iframe>}
    </div>
  );
};

export default Ia;
