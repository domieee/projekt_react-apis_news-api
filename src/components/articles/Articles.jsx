const Articles = (params) => {

    console.log(params);

    return (
        <> 
        <article className='articles'>
            <img src={params.imgSrc} alt="" />
            <h3>{params.title} - {params.publisher}</h3>
            <p>{params.description}</p>
            <p>{params.published}</p>
            <a href={params.articleSrc}>Read more</a>
        </article>
        </>
     );
}
 
export default Articles;