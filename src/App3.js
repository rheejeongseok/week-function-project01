import React, {useState, useEffect, useCallback, useMemo, Fragment, memo} from 'react';
import axios from 'axios';

function App3(){

    const [data, setData] = useState([]);
    const [ss,setSs] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/music.json")
            .then((rs) => {
                setData(rs.data)
            })
    }, []) /*componentDidMount*/

    const handlerInput =  useCallback((ss) => {
        setSs(ss);
    }, [ss]) /* 변경될 변수만 지정하여 변경될때 마다 호출한다*/

    return(
        <div className="row">
            <H2 />
            <div style={{"height":"30px"}}></div>
            <SearchBar ss={ss} onUserInput={handlerInput}/>
            <MusicTable music={data} ss={ss} />
        </div>
    )
}
/*
*   Callback : 함수의 주소를 가짐
*   Memo : 함수의 리턴형을 가짐
* */
/* function에서 속성은 props가 받는다 중요~체크~ */
function MusicTable(props){

    let row = [];
    props.music.forEach((m) => {
        if(m.title.indexOf(props.ss) == -1){
            return ;
        }
        row.push(<MusicRow music={m}/>)
    })

    return (
        <table className="table">
            <thead>
                <tr className="danger">
                    <th>순위</th>
                    <th></th>
                    <th>노래</th>
                    <th>가수</th>
                </tr>
            </thead>
            <tbody>
            {row}
            </tbody>
        </table>
    )
}

function MusicRow(props){

    return(
        <tr>
            <td>{props.music.rank}</td>
            <td><img src={props.music.poster} style={{"width":"35px","height":"35px"}} alt=""/></td>
            <td>{props.music.title}</td>
            <td>{props.music.singer}</td>
        </tr>
    )

}

function SearchBar(props){
    //  useCallback

    const onChange = (e) => {
        props.onUserInput(e.target.value)
    }

    return (
        <table className="table">
            <tbody>
                <tr>
                    <td>
                        <input type="text" className="input-sm" size="25" placeholder="Search~" onChange={onChange} value={props.ss}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const H = () => {

    const color = ["red", "orange", "pink", "yellow", "blue"];
    const no = parseInt(Math.random()*5);
    return (
        <h1 className="text-center" style={{"color":color[no]}}>MUSIC TOP50</h1>
    )
}

const H2 = memo(() => {
    //  useMemo

    const color = ["red", "orange", "pink", "yellow", "blue"];
    const no = parseInt(Math.random()*5);
    return (
        <h1 className="text-center" style={{"color":color[no]}}>MUSIC TOP50</h1>
    )


})


export default App3;