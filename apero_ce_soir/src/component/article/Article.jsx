import React from "react";

const Article = ({ data }) => {
    // Utilisez useState pour définir l'état initial des données
    const [articleData, setArticleData] = React.useState(data);

    React.useEffect(() => {
        data = [
            {
                item: "http://www.wikidata.org/entity/Q582563",
                itemLabel:
                    "réserve naturelle régionale des marais et landes du Rothmoos",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/R%C3%A9serve%20naturelle%20r%C3%A9gionale%20des%20landes%20et%20marais%20de%20Rothmoos%20%28la%20roseli%C3%A8re%20du%20Moos%29.jpg",
            },
            {
                item: "http://www.wikidata.org/entity/Q1426466",
                itemLabel: "réserve naturelle de Scandola",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/0%20Scandola%20Osani%20JPG03.jpg",
            },
            {
                item: "http://www.wikidata.org/entity/Q2052005",
                itemLabel: "parc national d'Oka",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/NKN%20D70%20parc%20national%20OKA%20restaurent%20sur%20la%20plage.jpg",
                articleLink: "http://www.sepaq.com/pq/oka/fr/",
            },
            {
                item: "http://www.wikidata.org/entity/Q2370187",
                itemLabel:
                    "réserve naturelle régionale du plan d'eau de Reichshoffen",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Plan%20d%27eau%20de%20Wolfartshoffen.jpg",
            },
            {
                item: "http://www.wikidata.org/entity/Q2370614",
                itemLabel:
                    "réserve naturelle régionale de l'étang du pont de fer",
            },
            {
                item: "http://www.wikidata.org/entity/Q2386489",
                itemLabel:
                    "réserve naturelle régionale des marais de Cambrin, Annequin, Cuinchy et Festubert",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/CambrinWetland2007.jpg",
                articleLink:
                    "http://www.cen-npdc.org/sites-proteges/site-protege.html?protar_id=qBIqrQh",
            },
            {
                item: "http://www.wikidata.org/entity/Q2390159",
                itemLabel: "réserve naturelle régionale du domaine de Gioux",
            },
            {
                item: "http://www.wikidata.org/entity/Q3364513",
                itemLabel: "parc national du Fjord-du-Saguenay",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Vue%20du%20Cap%20trinit%C3%A9%20pr%C3%A8s%20de%20la%20Statue.jpg",
                articleLink: "http://www.sepaq.com/pq/sag/fr/",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457180",
                itemLabel: "parc national Tursujuq",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Nastapoka%20River%20Waterfall.jpg",
                articleLink: "http://www.nunavikparks.ca/en/parks/tursujuq",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457180",
                itemLabel: "parc national Tursujuq",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Nastapoka%20River%20Waterfall.jpg",
                articleLink: "http://www.nunavikparks.ca/fr/parcs/tursujuq",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457181",
                itemLabel: "parc national Ulittaniujalik",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/1362%20LK%20George%20River%20%28pano%29.jpg",
                articleLink:
                    "http://www.nunavikparks.ca/en/parks/ulittaniujalik",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457181",
                itemLabel: "parc national Ulittaniujalik",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/1362%20LK%20George%20River%20%28pano%29.jpg",
                articleLink:
                    "http://www.nunavikparks.ca/fr/parcs/ulittaniujalik",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457386",
                itemLabel: "réserve naturelle de l'Étang de Biguglia",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Etang%20de%20Biguglia.jpg",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457411",
                itemLabel: "réserve naturelle des Bouches de Bonifacio",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Teresa%20Gallura%20-%20Bocche%20di%20Bonifacio%20%2804%29.JPG",
                articleLink: "http://www.rnbb.fr/",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457427",
                itemLabel:
                    "réserve naturelle régionale des Riez de Nœux-les-Auxi",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Riez%20de%20Boffles.jpg",
                articleLink:
                    "http://www.cen-npdc.org/decouvrir-csn/www.conservatoiresitesnpc.org/sites-proteges/site-protege.html?protar_id=pAaicgC",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457431",
                itemLabel: "réserve naturelle des Tre Padule de Suartone",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/TrePadule%2001.jpg",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457433",
                itemLabel: "réserve naturelle des îles Cerbicale",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/%C3%8Eles%20Cerbicale.png",
                articleLink: "http://www.parcmarin.com/",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457435",
                itemLabel: "réserve naturelle des îles du Cap Corse",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Iles%20Finocchiarola.jpg",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457452",
                itemLabel: "réserve naturelle régionale du marais de Larchant",
                image: "http://commons.wikimedia.org/wiki/Special:FilePath/Larchant%20Marais%20P01%20JPM.JPG",
            },
            {
                item: "http://www.wikidata.org/entity/Q3457524",
                itemLabel: "réserve naturelle régionale Fretigne et Vallette",
            },
        ];

        setArticleData(data);
    }, [data]);

    if (!articleData || !Array.isArray(articleData)) {
        return <div>Aucune donnée à afficher</div>;
    }

    return (
        <div className="container-article">
            {articleData.map((item, index) => (
                <div className="article-content" key={index}>
                    <img src={item.image} alt={item.itemLabel} />
                    <h2>WikiMedia</h2>
                    <hr />
                    <div className="link-article">
                        <p>{item.itemLabel}</p>
                        {item.articleLink && (
                            <a
                                href={item.articleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Voir l&apos;article
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Article;
