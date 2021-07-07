import React from "react";

var date = new Date();
const current = date.getFullYear();

function Footer() {
    return <footer><p>copyright {current} </p></footer>;
}

export default Footer;