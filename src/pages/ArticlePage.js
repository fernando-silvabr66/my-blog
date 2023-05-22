import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";

const ArticlePage = () => {
    //const params = useParams();
    //const articleId = params.articleId;
    // using destructuring it can be written as:
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    //if ("article" === undefined) return (<NotfoundPage />);
    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
        <div>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </div>
        </>
    );
}

export default ArticlePage;
