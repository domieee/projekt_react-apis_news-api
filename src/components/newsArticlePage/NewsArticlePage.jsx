import { useEffect, useState } from "react";
import Articles from '../articles/Articles.jsx'


const NewsArticlePage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://newsapi.org/v2/everything?q=Tesla&apiKey=44a6a73f818d4cd584e9f5db383a017f')
            .then(res => res.json())
            .then(data => {
                setPosts(data.articles)
            })
    }, []);

    console.log(posts);

    return (
        <>
            <h2>Latest News</h2>
            <section className="articleContainer">
            {posts && posts.map((post, i) => {
                return <Articles
                    key={i}
                    title={post.title}
                    publisher={post.source.name}
                    description={post.description}
                    published={post.publishedAt}
                    articleSrc={post.url}
                    imgSrc={post.urlToImage}
                />
            })}
            </section>
        </>
    );
}

export default NewsArticlePage;