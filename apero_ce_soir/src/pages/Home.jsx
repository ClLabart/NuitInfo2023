
import Header from '../component/header/header';
import Ia from "../component/ia/Ia";
import Article from '../component/article/Article';

import "../component/header/header.css";
import "../component/ia/Ia.css";
import "../component/article/article.css";

const HomePage = () => {
    return (
        <>
            <header id="header">
                <Header />
            </header>
            <section id="ia">
                <Ia />
            </section>
            <section id="articles">
                <Article />
            </section>
        </>
    );
}

export default HomePage;
