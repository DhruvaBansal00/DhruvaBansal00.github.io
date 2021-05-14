import React from "react";
import Resume from "../../resume.json"


function Contact() {
    let active = window.screen.width < 768;
    let widthValue = active ? "90%" : "50%";
    return (
    <section className="section contactform has-bg-gt" id="contact">
        <div className="container">
            <h1 className="title" style={{color: "white"}}>Contact Me</h1>
            <p className="is-mobile has-text-centered" style={{color: "white"}}>
            If you like my work and have cool projects to work on, feel free to reach out via the contact form below or through social sites and email!
            </p>
            <br></br>
            <div className="columns is-mobile is-centered">
            <form action="https://formspree.io/f/xnqlpnke" method="POST" class="form-horizontal" role="form" style={{width: widthValue}}>
                <div class="field">
                <label class="label" style={{color: "white"}}>Name</label>
                <div class="control" >
                    <input class="input" type="text" name="Name" placeholder="" required style={{backgroundColor: "rgba(0, 0, 0, 0)", color: "white"}}/>
                </div>
                </div>

                <div class="field">
                <label class="label" style={{color: "white"}}>Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" name="Email" placeholder="" required style={{backgroundColor: "rgba(0, 0, 0, 0)", color: "white"}}/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    {/* <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                    </span> */}
                </div>
                {/* <p class="help is-danger">This email is invalid</p> */}
                </div>

                <div class="field">
                <label class="label" style={{color: "white"}}>Subject</label>
                <div class="control">
                    <input class="input" type="text" placeholder="" name="Subject" style={{backgroundColor: "rgba(0, 0, 0, 0)", color: "white"}}/>
                </div>
                </div>

                <div class="field">
                <label class="label" style={{color: "white"}}>Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="" name="Message" style={{backgroundColor: "rgba(0, 0, 0, 0)", color: "white"}}></textarea>
                </div>
                </div>

                <div class="field is-grouped">
                <div class="control">
                    <button class="button" type="submit" style={{backgroundColor:"rgb(0,0,0,0)", color:"white", borderColor:"white"}}>Submit</button>
                </div>
                <div class="control">
                    <button class="button" type="reset" style={{backgroundColor:"rgb(0,0,0,0)", color:"white", borderColor:"white"}}>Clear</button>
                </div>
                </div>
                <br></br>
                <p className="is-mobile has-text-centered" style={{color: "white"}}>
                You can find my email address and links to my Linkedin, GitHub, and Devpost accounts below:
                </p>
                <br></br>
                <div className="hero-foot" style={{ paddingBottom: "20px", zIndex: "10"}}>
                <div className="columns is-mobile">
                <div className="column"></div>
                {Resume.basics.profiles.map((value, index) => {
                    return (
                    <div key={index} className="column has-text-centered">
                        <a
                        href={value.url}
                        target="blank"
                        className="is-hovered"
                        title={value.network}
                        >
                        <span className="icon is-medium is-" style={{color:"white"}}>
                            <i className={value.x_icon}></i>
                        </span>
                        </a>
                    </div>
                    );
                })}
                {/* <p className="is-mobile has-text-centered" style={{color: "white"}}>
                    <i>bdhruva [at] stanford [dot] edu</i>
                </p> */}
                <div className="column"></div>
                </div>
                </div>
            </form>
            </div>
        </div>
    </section>
    );
}

export default Contact;