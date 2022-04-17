import { useEffect, useState } from "react";

const CustomData = () => {
   const [photos, setPhotos]=useState([])
    useEffect(() =>{
        fetch("Photos.json")
        .then(res => res.json())
        .then(data => setPhotos(data))
    } ,[])
    return photos
};

export default CustomData;