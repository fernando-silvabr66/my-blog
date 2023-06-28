import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentsForm from '../components/AddCommentsForm';
import articles from './article-content';

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const { articleId } = useParams();
    //console.log(articleId);

    /*
    useEffect(() => {
        const loadArticleinfo = async () => {
            //setArticleInfo({ upvotes: Math.ceil(Math.random() * 10), comments: [] });
            const response = await axios.get(`/api/articles/${articleId}`)
                .then(function (response) {
                    // handle success
                    const newArticleInfo = response.data;
                    setArticleInfo(newArticleInfo);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

        loadArticleinfo();

    }, []);
    */

    
    useEffect(() => {
        //setArticleInfo({ upvotes: 3, comments: [] });
        //setArticleInfo({ upvotes: Math.ceil(Math.random() * 10), comments: [] });

        const loadArticleinfo = async () => {
            const response = await axios.get(`http://localhost:8080/api/articles/${articleId}`)
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        };

        loadArticleinfo();

    }, []);
    

    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
        const response = await axios.put(`http://localhost:8080/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>        
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                <button onClick={addUpvote}>Upvote</button>
                <p>This article has {articleInfo.upvotes} upvote(s).</p>
            </div>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
            <AddCommentsForm
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            <CommentsList comments={articleInfo.comments} />
        </>
    );
}

export default ArticlePage;
