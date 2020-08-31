$(() => {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-nba-v1.p.rapidapi.com/statistics/players/gameId/%7Bgameid%7D",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key": "901fd91217msh0b1f27268261f5cp15609bjsn43ebf977350c"
        }
    }

    $.ajax(settings).done(function(response) {
        console.log(response);
    });

})






// $(() => {
//     $.ajax({
//         url: 'https://api-nba-v1.p.rapidapi.com/statistics/players/gameId/%7Bgameid%7D'
//     }).then(
//         (data) => {
//             console.log(data);
//         },
//         () => {
//             console.log('bad request');
//         }
//     );
// })