import React from "react";
import Card from "../Card/index"
import styles from "./style.module.scss"

const FeatureDesign = ()=>{
    return(
        <div className="row mx-0 my-5">
            <div className="col-lg-12 text-center">
                <h2>FEATURED DESIGNER</h2>
            </div>
            <div className={styles.featurecard}>
            <div className="row">
            <div className="col-lg-3">
                <Card />
            </div>
            <div className="col-lg-3">
                <Card />
            </div>
            <div className="col-lg-3">
                <Card />
            </div>
            </div>
            </div>
        </div>
    )
}

export default FeatureDesign;