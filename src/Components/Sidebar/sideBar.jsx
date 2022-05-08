import React from "react";
import {useHistory} from 'react-router-dom';
import styles from "./style.module.scss"

export default function SideBar(){
    const history = useHistory();
    const hanldemove =()=>{
        history.push("/Need_Help");
    }
    return(
        <div className={`d-sm-none d-md-none d-xl-block ${styles.SideBar}`}>
            <div className={styles.help} onClick={hanldemove}>
            Need Help?
            </div>
            <div className={styles.list}>
                <ul>
                    <li>IT</li>
                    <li>|</li>
                    <li>EN</li>
                </ul>
            </div>
        </div>
    )
}