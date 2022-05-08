import React from 'react'
import ReactPlayer from 'react-player'
import styles from "./style.module.scss"

const Video =()=>{
    return(
        <div className={styles.videoSection}>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
        </div>
    )
}

export default Video;