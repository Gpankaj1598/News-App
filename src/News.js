import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{

    const myStyle = {
      border: '10px solid red'
    }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
      console.log("update news");
        props.setProgress(10);


        // const api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
        //              &pageSize=${props.pageSize}`;

        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${props.apiKey}`;


        

        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        props.setProgress(60);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        

        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${props.apiKey}`;
        // const api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
        //              &pageSize=${props.pageSize}`;

        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '70px' }}>App-News - Top
                {" "+capitalizeFirstLetter(props.category)+" "}Headlines</h1>

                {loading && <Spinner />}
                <InfiniteScroll style={{myStyle}} dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} 
                  loader={<Spinner/>}> 
                      <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ?
                                       element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                                        date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                      </div> 
                </InfiniteScroll>
                
            </>
        )
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News