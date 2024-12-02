import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

export default function Pokemon (props) {
    const url = "https://pokeapi.co/api/v2/pokemon-form/" + props.number;
    //type = data.types[0].type.name
    const [id,setID] = useState(null);
    useEffect(() => {
        fetch(url).then((response) => response.json()).then((data) => {
            setID(data.id);
            console.log(data);
        }).catch((error) => console.log(error));
    }, []);

    const [name,setName] = useState(null);
    useEffect(() => {
        fetch(url).then((response) => response.json()).then((data) => {
            setName(data.name.toUpperCase());
            console.log(data);
        }).catch((error) => console.log(error));
    }, []);

    const [type1,setType1] = useState(null);
    useEffect(() => {
        fetch(url).then((response) => response.json()).then((data) => {
            setType1(data.types[0].type.name);
            console.log(data);
        }).catch((error) => console.log(error));
    }, []);

    const [type2,setType2] = useState(null);
    useEffect(() => {
        fetch(url).then((response) => response.json()).then((data) => {
            setType2(data.types[1].type.name);
            console.log(data);
        }).catch((error) => console.log(error));
    }, []);

    const [image,setImage] = useState(null);
    useEffect(() => {
        fetch(url).then((response) => response.json()).then((data) => {
            setImage(data.sprites.front_default);
            console.log(data);
        }).catch((error) => console.log(error));
    }, []);

    const [front_image,setFrontImage] = useState(null);
    useEffect(() => {
        fetch(url).then((response) => response.json()).then((data) => {
            setFrontImage(data.sprites.front_default);
            console.log(data);
        }).catch((error) => console.log(error));
    }, []);

    const [back_image,setBackImage] = useState(null);
    useEffect(() => {
        fetch(url).then((response) => response.json()).then((data) => {
            setBackImage(data.sprites.back_default);
            console.log(data);
        }).catch((error) => console.log(error));
    }, []);

    const [picstate, setPicState] = useState(0);
    function changePic () {
        console.log("works");
        if (picstate == 0) {
            setImage(back_image);
            setPicState(1);
        }
        else if (picstate == 1) {
            setImage(front_image);
            setPicState(0);
        }
    }

    return(
        <>
        <div className='poke' onClick={changePic}>
            <p>#{id} <strong>{name}</strong></p>
            <p>{type1 != null && <span>{type1}</span>} {type2 != null && <span>{type2}</span>}</p>
            <img src={image} className='pokepic'/>
        </div>
        </>
    )
}

Pokemon.propTypes = {
    number: PropTypes.string
}