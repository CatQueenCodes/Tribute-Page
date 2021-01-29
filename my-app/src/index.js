import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function MainInfo(props){
    return (
        <div id='head'>
            <h1 id='name'>{props.name}</h1>
            <h2 id='about'>{props.about}</h2>
        </div>
    )
}

function Photo(props){
    return(
        <div id='img-div'>
            <img id='picture' src={props.img} alt="Queen Lizzo" height="320px" width="455px" />
            <p id='img-caption'>{props.caption}</p>
        </div>
    )
}

function App(props){
    return(
        <div id="App">
            <MainInfo name={props.name} about= {props.about}></MainInfo>
            <Photo img={props.img} caption={props.caption}></Photo>
        </div>
    )
}

const lizzo = {
    name: "Lizzo",
    about: "100% That Bitch",
    img: "https://media.vogue.co.uk/photos/5d544ca4c877eb00080974ea/master/pass/original",
    caption: "I know I’m a queen but I don’t need no crown.",
    listTitle: "History of Lizzo",
    songs: ['Truth Hurts', 'Batches & Cookies', "Good As Hell", "Better in Color", "Juice", "Worship", "Boys", "Tempo (ft. Missy Elliot)", "My Skin", "Jerome"],
    quote: "My movement is for everybody. My movement celebrates diversity. It’s all about inclusion. It’s all about getting our flowers and giving each person their own space to be an individual and speak up for that individuality. – Lizzo",
    link: "https://www.instagram.com/lizzobeeating/?hl=en"
}

ReactDOM.render(
    <App
        name={lizzo.name}
        about={lizzo.about}
        img={lizzo.img}
        caption={lizzo.caption} />,
    document.getElementById('root')
  );
  