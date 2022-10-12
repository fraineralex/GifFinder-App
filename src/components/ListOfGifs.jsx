import React, { Fragment, useEffect, useState } from "react";
import Gif from './Gift'
import getGifs from "../services/getGifs";

export default function ListOfGifs( {keyword} ){

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
      getGifs({keyword}).then((gifs) => setGifs(gifs));
    }, [keyword]);

    return gifs.map(({id, title, url}) =>
        <Fragment>
            <Gif
                id={id} 
                key={id} 
                title={title} 
                url={url} 
            />
        </Fragment> 
    )
}