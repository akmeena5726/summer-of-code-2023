import React from "react"

export default function HowItWorks() {
    return (
        <section class="help">
            <h3 class="help-heading">
                How it works
            </h3>
            <div class="container">
                <div class="help-card">
                    <img src="assets/images/create-account.png" alt="create account" />
                    <p class="help-info">Create an account</p>
                </div>
                <div class="help-card">
                    <img src="assets/images/verify.png" alt="create account" />
                    <p class="help-info">Get authorization</p>
                </div>
                <div class="help-card">
                    <img src="assets/images/emoji.png" alt="create account" />
                    <p class="help-info">Enjoy the app</p>
                </div>
            </div>
        </section>
    )
}