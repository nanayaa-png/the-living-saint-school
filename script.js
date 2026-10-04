/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("show");
    });
}

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        if (navigation) {
            navigation.classList.remove("show");
        }
    });
});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(element => {

        if (
            element.getBoundingClientRect().top <
            window.innerHeight - 80
        ) {
            element.classList.add("visible");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* =========================================
   FAQ
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector(".faq-icon");

        const wasOpen =
            answer.classList.contains("open");

        document
            .querySelectorAll(".faq-answer")
            .forEach(item => {
                item.classList.remove("open");
            });

        document
            .querySelectorAll(".faq-icon")
            .forEach(item => {
                item.textContent = "+";
            });

        if (!wasOpen) {

            answer.classList.add("open");

            if (icon) {
                icon.textContent = "−";
            }

        }

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   ADMISSION WHATSAPP FORM
========================================= */

const enquiryForm =
    document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const parentName =
                document
                    .getElementById("parentName")
                    .value
                    .trim();

            const parentPhone =
                document
                    .getElementById("parentPhone")
                    .value
                    .trim();

            const childName =
                document
                    .getElementById("childName")
                    .value
                    .trim();

            const schoolLevel =
                document
                    .getElementById("schoolLevel")
                    .value;

            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();

            const whatsappText =
`Hello The Living Saint International School.

I would like to make an admission enquiry.

Parent/Guardian Name: ${parentName}

Phone Number: ${parentPhone}

Child's Name: ${childName}

Level: ${schoolLevel}

Message:
${message}`;

            const whatsappURL =
                "https://wa.me/233592205032?text=" +
                encodeURIComponent(whatsappText);

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}

/* =========================================
   ACTIVE NAVIGATION
========================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document
    .querySelectorAll(".navigation a")
    .forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

    
    