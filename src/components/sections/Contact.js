import React from "react";



function Contact() {
    return (
    <section className="section" id="contact">
        <div className="container contactform">
            <h1 className="title">Contact Me</h1>
            <form action="https://formspree.io/f/xnqlpnke" className="contactform" method="POST" class="form-horizontal" role="form">
                <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" name="Name" placeholder="" required/>
                </div>
                </div>

                <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" name="Email" placeholder="" required/>
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
                <label class="label">Subject</label>
                <div class="control">
                    <input class="input" type="text" placeholder="" name="Subject"/>
                </div>
                </div>

                <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="" name="Message"></textarea>
                </div>
                </div>

                <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" type="submit">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light" type="reset">Clear</button>
                </div>
                </div>
            </form>
        </div>
    </section>
    );
}

export default Contact;