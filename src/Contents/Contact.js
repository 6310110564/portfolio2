import React, {Component} from "react";

import Social from "../Components/Social";

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtitle">Contact Me</h1>
                <h4>Email</h4>
                <p className="p-contact">aritsara.me2545@gmail.com</p>
                <h4>instagram</h4>
                <p className="p-contact">@pt.nutt</p>
                <h4>github</h4>
                <p className="p-contact">https://github.com/6310110564</p>
                <Social />
            </div>
        );
    }
}

export default Contact;