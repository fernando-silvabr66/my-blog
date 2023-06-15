import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        setArticleInfo({ upvotes: 3, comments: [] });
    }, []);

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
            <p>This article has {articleInfo.upvotes} upvote(s).</p>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </div>
        </>
    );
}

export default ArticlePage;
