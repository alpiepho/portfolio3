
var site = require('./siteConfig');

console.log("Converting data from project-portfolio2...");
console.log("")
console.log("site.jobs: ")
console.log("<ul class=\"timeline\">")

let i 
for (i=0; i<site.jobs.length; i++) {
    let job = site.jobs[i]
    console.log("<li" + (i%2 ? " class=\"timeline-inverted\"" : "" ) + ">")
    // console.log("<div class=\"timeline-image\">")
    // console.log("    <img class=\"img-circle img-responsive\" src=\"img/about/1.jpg\" alt=\"\">")
    // console.log("</div>")
    console.log("<div class=\"timeline-panel\">")
    console.log("    <div class=\"timeline-heading\">")
    console.log("        <h4>" + job.company + "</h4>")
    console.log("        <h4>" + job.begin.month.toUpperCase() + " " + job.begin.year + "</h4>")
    console.log("        <h4>" + (job.duration ? job.duration.toUpperCase() : "PRESENT") + "</h4>")
    console.log("        <h4 class=\"subheading\">" + job.occupation + "</h4>")
    console.log("    </div>")
    console.log("    <div class=\"timeline-body\">")
    console.log("        <p class=\"text-muted\">" + job.description + "</p>")
    console.log("    </div>")
    console.log("</div>")
    console.log("</li>")
}

// console.log("<li class=\"timeline-inverted\">")
// console.log("    <div class=\"timeline-image\">")
// console.log("        <h4>The")
// console.log("            <br>Next")
// console.log("            <br>Chapter?</h4>")
// console.log("    </div>")
// console.log("</li>")

console.log("</ul>")
console.log("")





// title: "Simple Score VB (PWA)",
// begin: {
//   month: 'aug',
//   year: '2019'
// },
// type: "personal",
// image: "./images/screenshot-vb-pwa.png",
// link: "https://github.com/alpiepho/simple-score-volleyball-pwa/",
// description: "A Gatsby-based PWA to score Volleyball with and option to send text message, using Netlify Lambda and Twilio on the backend."


// Want project to be like:

// ls -1 _posts
// 2014-07-13-project-6.markdown
// 2014-07-14-project-5.markdown
// 2014-07-15-project-4.markdown
// 2014-07-16-project-3.markdown
// 2014-07-17-project-2.markdown
// 2014-07-18-project-1.markdown

// and contents of 2014-07-18-project-1.markdown:
// ---
// title: Dreams
// subtitle: Website Design
// layout: default
// modal-id: 1
// date: 2014-07-18
// img: dreams.png
// thumbnail: dreams-thumbnail.png
// alt: image-alt
// project-date: April 2014
// client: Start Bootstrap
// category: Web Development
// description: Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.

// ---
