import React from "react";
import CV from "../../assets/cv.pdf";

function CTA() {
    return(
        <div className="cta">
            <a href={ CV } download className="btn">Download CV</a>
            <a href="mailto:tiagordebarros@gmail.com?subject=Contato Portfólio Web" className="btn btn-primary">Let's Talk</a>
        </div>
    );
}

export default CTA;
