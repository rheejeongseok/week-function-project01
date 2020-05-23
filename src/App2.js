import React, {useEffect, useState} from 'react';
import axios from 'axios';

/*
*   const [변수, 메소드(setter)] = useState("변수형태")
*
*   const [music, setMusic]
*
*
*   useEffect(()=>{
*       각종 처리 데이터 가져오든가 뭐든~
*   }) - componentDidUpdate
*
*   useEffect(()=>{
*
*   }, []) - componentDidMount
*
*
* */

function App2(){

    let [music, setMusic] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/music.json").then((rs) => {
            setMusic(rs.data)
            console.log(rs.data)
        })
    }, [])

    const html = music.map((m) =>
        <tr>
            <td>{m.rank}</td>
            <td>
                {
                    m.state === "상승" && <span style={{"color":"red"}}>△ {m.idcrement}</span>
                }
                {
                    m.state === "하강" && <span style={{"color":"blue"}}>▽ {m.idcrement}</span>
                }
                {
                    m.state === "유지" && <span style={{"color":"gray"}}>-</span>
                }
            </td>
            <td><img src={m.poster} alt="" width="35" height="35"/></td>
            <td>{m.title}</td>
            <td>{m.singer}</td>
        </tr>
    )

    return(
        <div className="row">
            <H2 />
            <div style={{"height":"32px"}}></div>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <input type="text" className="input-sm" size="25"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                    <tr className="success">
                        <td>순위</td>
                        <td>증폭</td>
                        <td></td>
                        <td>노래</td>
                        <td>가수</td>
                    </tr>
                </thead>
                <tbody>
                {html}
                </tbody>
            </table>
        </div>
    )
}

function H1(){
    return(
        <div>
            <h1 className="text-center">MUSIC TOP50</h1>
        </div>
    )
}

const H2 = () => {

    const color = ["red","orange","pink","yellow","blue"];
    const no = parseInt(Math.random()*5);

    return(
        <div>
            <h1 className="text-center" style={{"color":color[no]}}>MUSIC TOP50</h1>
        </div>
    )
}

const H3 = function(){
    return(
        <div>
            <h1 className="text-center">MUSIC TOP50</h1>
        </div>
    )
}

export default App2;