import React from "react";
import sun from "../../images/sun.jpg.png"
function Footer() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return (
        <footer>   
            <p ><span>Summareasy &copy; 2022 </span>
            <img
                alt=""
                src={sun}
                width="50"
                style={{ padding: "10px" }}
            ></img>
            <span>Today is { month }/{day}/{ year }</span></p> 
        </footer>
    )
}

export default Footer;