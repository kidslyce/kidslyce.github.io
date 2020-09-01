let myData = []
let rockets = []
for (let i = 1; i < 34; i++) {
    let settings = {
        "url": "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?page=" + i + "&per_page=100",
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(function(response) {
        console.log(response)
        for (let j = 0; j < response.data.length; j++) {
            myData.push(response.data[j])
        }
    });
}




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