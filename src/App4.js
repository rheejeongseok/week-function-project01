import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function App4(){

    const [news, setNews] = useState([]);
    const [pop, setPop] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3355/movie_news').then((rs) => {
            setNews(rs.data)
        })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3355/movie_pop').then((rs) => {
            setPop(rs.data)
        })
    }, [])

    const movie_news = news.map((news) =>
        <table className="row">
            <tbody>
                <tr>
                    <td width="30%" className="text-center" rowSpan="3">
                        <img src={news.poster.substring(0,news.poster.lastIndexOf(")"))} width="100%" alt=""/>
                    </td>
                    <td width="70%">
                        <a href={news.link}><b>{news.title}</b></a>
                    </td>
                </tr>
                <tr>
                    <td width="70%">{news.content}</td>
                </tr>
                <tr>
                    <td width="70%" className="text-right">{news.author}</td>
                </tr>
            </tbody>
        </table>
    )

    const movie_pop = pop.map((p) => {
        return (
            <tr>
                <td><img src={p.poster.substring(0,p.poster.indexOf(')'))} alt="" width="30" height="30"/></td>
                <td>{p.title}</td>
            </tr>
        )
    })

    return(
        <div className="row">
            <div className="col-sm-6">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                {movie_news}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-sm-4">
                <table className="table">
                    <tbody>
                        {movie_pop}
                    </tbody>
                </table>
            </div>
        </div>
    )

}