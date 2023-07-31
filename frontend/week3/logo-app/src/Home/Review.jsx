import React from "react"

export default function Review() {
    return (
        <section class="review">
            <h3 class="review-heading">
                What our clients say
            </h3>
            <div class="grid">
                <div class="img-bg">
                    <img src="assets/images/review-img.png" alt="customer image" class="review-img" />
                </div>
                <div class="quote">
                    <i class="fa-solid fa-quote-left quote-mark" style="color: #9aa1ac;"></i>
                    <p class="quote-info">
                        I bought a {product} from {brand} on {date} and the experience was amazing. There were a few
                        hiccups since I wasn&#8217t familiar with the process but {person} from Customer Service Department
                        was
                        there to help me at every step.
                    </p>
                    <p class="name">Jessie Pink</p>
                </div>
            </div>
        </section>
    )
}