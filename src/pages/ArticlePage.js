import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () => {
    //const params = useParams();
    //const articleId = params.articleId;
    // using destructuring it can be written as:
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return (
        <>
        <div>
            <h1>{article.title}</h1>
            {article.content.map(paragraph => (
                <p>{paragraph}</p>
            ))}
        </div>
        </>
    );
}

export default ArticlePage;
