import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
             
        <div className="social-container">
            <a href="https://www.facebook.com/20011hs"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="4x" />
                
            </a>
            <a href="https://mobile.twitter.com/hala_salhab" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
            <a href="https://www.instagram.com/halosh_salhab/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
            <a href="https://github.com/Halasalhab"
                className="instagram social">
                <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
        </div>
           
    );
}