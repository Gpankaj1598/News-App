import React from 'react'

const NewsItem = (props)=> {

    const myStyle = {
        border: '2px solid blue',
        fontFamily: 'Arial',
        color: '#fff',
        background: '#000',
    }

    const myBadge = {
        padding: '10px',
        fontsize: '10px',
        fontFamily: 'Arial',
        margin : '4px',
    }

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                    <span className="badge rounded-pill bg-primary"  style={myBadge}> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-secondary">{description}</p>
                        <p className="card-text"><small className="text-primary">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
