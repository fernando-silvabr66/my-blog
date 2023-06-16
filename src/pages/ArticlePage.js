import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const { articleId } = useParams();

    useEffect(() => {
        const loadArticleinfo = async () => {

            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            // setArticleInfo({ upvotes: 3, comments: [] });
            setArticleInfo(newArticleInfo);
        }

        loadArticleinfo();

    }, []);

    //const params = useParams();
    //const articleId = params.articleId;
    // using destructuring it can be written as:
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
