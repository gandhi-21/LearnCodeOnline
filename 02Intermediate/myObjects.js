let myYoutubeVideoOne = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoDesciption: 'this is video description and a long one',
    videoCreator: 'Gandhi'
}

let myYoutubeVideoTwo = {
    title: 'Functions in javascript',
    videoLength: 10,
    videoDesciption: 'this is video description and a long one',
    videoCreator: 'Gandhi'
}

// console.log(myYoutubeVideo)
//
// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)


let myJSCourse = {
    title : 'Javascript basics',
    author: 'Gandhi',
    price: '120',
    description: 'Basics of js'
}

 // console.log(`Hey there's a new course on ${myJSCourse.title} by ${myJSCourse.author} priced at ${myJSCourse.price} with the description ${myJSCourse.description}`)

// myYoutubeVideo.title = 'ForEach loop in JS'
//
// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)
//
// console.log(myYoutubeVideo)


let changeVideoLength = function(myObject) {
    return {
      formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
      formatTwo: `Time of this video is: ${myObject.videoLength + 1}`
    }
}

let adOne = changeVideoLength(myYoutubeVideoOne)

console.log(adOne.formatOne)
