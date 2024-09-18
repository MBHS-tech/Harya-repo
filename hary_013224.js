const testimonials = [
    {
        img: "med.jpg",
        name: "John Doe",
        title: "Software Engineer",
        quote: "“Harya helped me find my dream job! The platform is intuitive and the job matches were spot-on.”"
    },
    {
        img: "prof.png",
        name: "Moses Sesay",
        title: "Graphic Designer",
        quote: "“Harya helped me find my dream job! The platform is intuitive and the job matches were spot-on.”"
    },
    {
        img: "gen.jpg",
        name: "Peter Komba",
        title: "Marketer",
        quote: "“Harya helped me find my dream job! The platform is intuitive and the job matches were spot-on.”"
    },
    {
        img: "yo.jpg",
        name: "Ibrahim Sesay",
        title: "UI/UX Designer",
        quote: "“Harya helped me find my dream job! The platform is intuitive and the job matches were spot-on.”"
    },
    {
        img: "hi.jpg",
        name: "James Manna",
        title: "Software Engineer",
        quote: "“Harya helped me find my dream job! The platform is intuitive and the job matches were spot-on.”"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    document.getElementById('testimonial-img').src = testimonial.img;
    document.getElementById('testimonial-name').innerText = testimonial.name;
    document.getElementById('testimonial-title').innerText = testimonial.title;
    document.getElementById('testimonial-quote').innerText = testimonial.quote;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

window.onload = updateTestimonial;