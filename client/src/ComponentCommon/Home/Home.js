import React, { useEffect } from 'react';
import Card from '../Card/Card'
import Banner from '../Banner/Banner';
import Fullreport from '../creport/Fullreport';


const Home=()=>{

    const call=async ()=>{
        console.log("home")
        const res=await fetch('https://servicely-backend.onrender.com',{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
            })
        })
    
        const data=await res.json();
        if(data.status===400 || !data){
            console.log("Fail to Sign Up");
        }else{
            console.log("Home Page");
        }
    }

    useEffect(()=>{
        call();
    },[])
    
    return (
        <>
        <div>
        <Banner/>
        <Fullreport/>
        <Card type="Home Repairs"/>
        <Card type="Cleaning"/>
        <Card type="Designing"/>
        <Card type="Beauty"/>
        </div>
        </>
    )
}

export default Home;