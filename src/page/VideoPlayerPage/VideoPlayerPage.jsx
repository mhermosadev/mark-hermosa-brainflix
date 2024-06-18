import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"
import { useParams, Navigate } from "react-router-dom"
import { useState } from "react"

const   VideoPlayerPage = () => { //DISPLAYES SELECTED VIDEO//
const { id }  = useParams ();

    return (
        <>
        <Header
        homePageLink='/'
        uploadPageLink='/uploadpage'
        />
        <Main
        id={id}
        />
        </>
    )
}   

export default VideoPlayerPage