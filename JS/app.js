$(() => {

    $('form').on('submit', (event) => {
        event.preventDefault();

        const userInput = $('input[type="text"]').val();


        $.ajax({
            url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
        }).then(
            (data) => { //success callback
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            (error) => { //fail callback
                console.log(error);
            }
        )


    })


})

//========================================
//work with this code - the rest is graveyard
//========================================


// let myData = []
// let rockets = []


// for (let i = 1; i < 34; i++) {
//     let settings = {
//         url: "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?page=" + i + "&per_page=100",
//         method: "GET",
//         crossDomain: true,
//         dataType: 'jsonp',
//         "timeout": 0,

//     };



//     // async function asyncCall() {
//     $.ajax(settings).done(function(response) {
//         // let response = await asyncCall()

//         console.log(response)
//     });

// }




// let houston = response.data.filter(obj => obj.team.city == "Houston")
// rockets.concat(houston)

// console.log("here all the rockets");
// console.log(rockets);


//========================================
//work with this code - the rest is graveyard
//========================================


// let myData = []
// let rockets = []
// console.log('hello world');
// for (let i = 1; i < 34; i++) {
//     let settings = {
//         "url": "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?page=" + i + "&per_page=100",
//         "method": "GET",
//         crossDomain: true,
//         dataType: 'jsonp',
//         "timeout": 0,
//     };
//     $.ajax(settings).done(function(response) {
//         console.log(response)
//         for (let j = 0; j < response.data.length; j++) {
//             myData.push(response.data[j])
//         }
//     });
// }




// $(() => {
//     $('form').on('submit', (event) => {
//         event.preventDefault();
//         const userInput = $('input[type="text"]').val()

//     })

// })

// let rockets = []

// i =

//     $.ajax(settings).done(function(response) {

//         console.log(response);
//         rockets = response.data[j].filter()




// for (let i = 0; i < 34; i++) {


//     let settings = {
//         "url": "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?page=" + i + "&per_page=100",
//         "method": "GET",
//         "timeout": 0,
//     };

//     $.ajax(settings).done(function(response) {
//         console.log(response);
//         for (let j = 0; j < response.data.length; j++) {
//             const element = array[j];



//             rockets = response.data[j].filter()
//         }

//     });

// }








// });






// $(() => {
//     $.ajax({
//         url: "https://balldontlie.io/api/v1/players" + userInput
//     }).then(
//         (data) => {
//             $('#points').html(data.pts);
//             $('#assists').html(data.ast);
//             $('#rebounds').html(data.reb);
//         },
//         () => {
//             console.log('bad request');
//         }
//     );
// })



// for (let j = 0; j < response.data.length; j++) {
//     const element = array[j];



//     let myData = []
// let rockets = []


// for (let i = 1; i < 34; i++) {
//     let settings = {
//         url: "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?page=" + i + "&per_page=100",
//         method: "GET",
//         // crossDomain: true,
//         // dataType: 'jsonp',
//         // "timeout": 0,

//     };



//     async function asyncCall() {
//         $.ajax(settings).done(function(response) {

//         });

//     }
//     let response = await asyncCall()

//     console.log(response)

//      // for (let j = 0; j < response.data.length; j++) {
//             //     myData.push(response.data[j])

//             let houston = response.data.filter(obj => obj.team.city == "Houston")
//             rockets.concat(houston)

//     console.log("here all the rockets");
//     console.log(rockets);