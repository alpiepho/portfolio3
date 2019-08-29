
var site = require('./siteConfig');

console.log("Converting data from project-portfolio2...");

console.log(site.jobs)




// Want carreer details like:

{/* <ul class="timeline">
<li>
    <div class="timeline-image">
        <img class="img-circle img-responsive" src="img/about/1.jpg" alt="">
    </div>
    <div class="timeline-panel">
        <div class="timeline-heading">
            <h4>2009-2011</h4>
            <h4 class="subheading">Our Humble Beginnings</h4>
        </div>
        <div class="timeline-body">
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
        </div>
    </div>
</li>
<li class="timeline-inverted">
    <div class="timeline-image">
        <img class="img-circle img-responsive" src="img/about/2.jpg" alt="">
    </div>
    <div class="timeline-panel">
        <div class="timeline-heading">
            <h4>March 2011</h4>
            <h4 class="subheading">An Agency is Born</h4>
        </div>
        <div class="timeline-body">
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
        </div>
    </div>
</li>
<li>
    <div class="timeline-image">
        <img class="img-circle img-responsive" src="img/about/3.jpg" alt="">
    </div>
    <div class="timeline-panel">
        <div class="timeline-heading">
            <h4>December 2012</h4>
            <h4 class="subheading">Transition to Full Service</h4>
        </div>
        <div class="timeline-body">
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
        </div>
    </div>
</li>
<li class="timeline-inverted">
    <div class="timeline-image">
        <img class="img-circle img-responsive" src="img/about/4.jpg" alt="">
    </div>
    <div class="timeline-panel">
        <div class="timeline-heading">
            <h4>July 2014</h4>
            <h4 class="subheading">Phase Two Expansion</h4>
        </div>
        <div class="timeline-body">
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
        </div>
    </div>
</li>
<li class="timeline-inverted">
    <div class="timeline-image">
        <h4>Be Part
            <br>Of Our
            <br>Story!</h4>
    </div>
</li>
</ul> */}


// Want project sto be like:

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
