
var site = require('./siteConfig')
const fs = require('fs')

// console.log("")
// console.log("site.jobs: ")
// console.log("<ul class=\"timeline\">")
// let i 
// for (i=0; i<site.jobs.length; i++) {
//     let job = site.jobs[i]
//     console.log("<li" + (i%2 ? " class=\"timeline-inverted\"" : "" ) + ">")
//     // console.log("<div class=\"timeline-image\">")
//     // console.log("    <img class=\"img-circle img-responsive\" src=\"img/about/1.jpg\" alt=\"\">")
//     // console.log("</div>")
//     console.log("<div class=\"timeline-panel\">")
//     console.log("    <div class=\"timeline-heading\">")
//     console.log("        <h4>" + job.company + "</h4>")
//     console.log("        <h4>" + job.begin.month.toUpperCase() + " " + job.begin.year + "</h4>")
//     console.log("        <h4>" + (job.duration ? job.duration.toUpperCase() : "PRESENT") + "</h4>")
//     console.log("        <h4 class=\"subheading\">" + job.occupation + "</h4>")
//     console.log("    </div>")
//     console.log("    <div class=\"timeline-body\">")
//     console.log("        <p class=\"text-muted\">" + job.description + "</p>")
//     console.log("    </div>")
//     console.log("</div>")
//     console.log("</li>")
// }
// // console.log("<li class=\"timeline-inverted\">")
// // console.log("    <div class=\"timeline-image\">")
// // console.log("        <h4>The")
// // console.log("            <br>Next")
// // console.log("            <br>Chapter?</h4>")
// // console.log("    </div>")
// // console.log("</li>")
// console.log("</ul>")
// console.log("")





// let fake_day = 1
// function getMonthNumber(s) {
//     if (s === 'jan') return '01'
//     if (s === 'feb') return '02'
//     if (s === 'mar') return '03'
//     if (s === 'apr') return '04'
//     if (s === 'may') return '05'
//     if (s === 'jun') return '06'
//     if (s === 'jul') return '07'
//     if (s === 'aug') return '08'
//     if (s === 'sep') return '09'
//     if (s === 'oct') return '10'
//     if (s === 'nov') return '11'
//     if (s === 'dec') return '12'
//     return '01'
// }

// for (i=0; i<site.projects.length; i++) {
//     let project = site.projects[i]

//     let filename = ''
//     let datestring = ''
//     datestring += project.begin.year
//     datestring += '-'
//     datestring += getMonthNumber(project.begin.month)
//     datestring += '-'
//     datestring += fake_day
//     filename += datestring
//     fake_day += 1
//     filename += '-project-'
//     filename += i+1
//     filename += '.markdown'

//     let content = ''
//     content += '---\n'
//     content += 'type: project\n'
//     content += 'title: ' + project.title + '\n'
//     content += 'subtitle: ' + project.type + '\n'
//     content += 'layout: default\n'
//     content += 'modal-id: ' + (i+100) + '\n'
//     content += 'date: ' + datestring + '\n'
//     let image = project.image.replace('./images/', '')
//     console.log('cp ~/Projects/gatsby/project-portfolio2/static/images/' + image + ' ../img/portfolio')
//     let thumb = image
//     thumb = thumb.replace('.jpeg', '--thumbnail.jpeg')
//     thumb = thumb.replace('.jpg', '--thumbnail.jpg')
//     thumb = thumb.replace('.png', '--thumbnail.png')

//     console.log('cp ~/Projects/gatsby/project-portfolio2/static/images/' + image + ' ../img/portfolio/' + thumb)

//     content += 'img: ' + image + '\n'
//     content += 'thumbnail: ' + thumb + '\n'
//     content += 'alt: image-alt\n'

//     content += 'project-date: ' + datestring + '\n'

//     content += 'client: '
//     content += 'Start Bootstrap'
//     content += '\n'

//     content += 'category: Web Development\n'


//     content += 'description: ' + project.description + '\n'

//     content += 'link: ' + project.link + '\n'

//     content += '---\n'
 

//     //console.log('# ' + filename + '...')
//     fs.writeFileSync(filename, content)
// }


let fake_day = 1
function getMonthNumber(s) {
    if (s === 'jan') return '01'
    if (s === 'feb') return '02'
    if (s === 'mar') return '03'
    if (s === 'apr') return '04'
    if (s === 'may') return '05'
    if (s === 'jun') return '06'
    if (s === 'jul') return '07'
    if (s === 'aug') return '08'
    if (s === 'sep') return '09'
    if (s === 'oct') return '10'
    if (s === 'nov') return '11'
    if (s === 'dec') return '12'
    return '01'
}

for (i=0; i<site.podcasts.length; i++) {
    let podcast = site.podcasts[i]

    let filename = ''
    let datestring = ''
    datestring += '2019' //podcast.begin.year
    datestring += '-'
    datestring += '01' //getMonthNumber(podcast.begin.month)
    datestring += '-'
    datestring += fake_day
    filename += datestring
    fake_day += 1
    filename += '-podcast-'
    filename += i+1
    filename += '.markdown'

    let content = ''
    content += '---\n'
    content += 'type: podcast\n'
    content += 'title: ' + podcast.title + '\n'
    content += 'subtitle: ' + podcast.type + '\n'
    content += 'layout: default\n'
    content += 'modal-id: ' + (i+200) + '\n'
    content += 'date: ' + datestring + '\n'
    let image = podcast.image.replace('./images/', '')
    console.log('cp ~/Projects/gatsby/project-portfolio2/static/images/' + image + ' ../img/portfolio')
    let thumb = image
    thumb = thumb.replace('.jpeg', '--thumbnail.jpeg')
    thumb = thumb.replace('.jpg', '--thumbnail.jpg')
    thumb = thumb.replace('.png', '--thumbnail.png')

    console.log('cp ~/Projects/gatsby/project-portfolio2/static/images/' + image + ' ../img/portfolio/' + thumb)

    content += 'img: ' + image + '\n'
    content += 'thumbnail: ' + thumb + '\n'
    content += 'alt: image-alt\n'

    content += 'project-date: ' + datestring + '\n'

    content += 'client: '
    content += 'Start Bootstrap'
    content += '\n'

    content += 'category: Web Development\n'


    content += 'description: ' + podcast.description + '\n'

    content += 'link: ' + podcast.link + '\n'

    content += '---\n'
 

    //console.log('# ' + filename + '...')
    fs.writeFileSync(filename, content)

}


// type: 'history',
// title: 'Commandline Heros',
// description: 'An original podcast about the people who transform technology from the command line up.',
// image: 'https://alpiepho.github.io/project-portfolio2/images/screenshot-commandline-heros.png',
// link: 'https://www.redhat.com/en/command-line-heroes'
