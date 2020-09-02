//==========================
// THE PLANETS OF A GALAXY FAR, FAR AWAY...
//==========================
//the planets (on the mouse click) will pull a request for the certain attributes of the planet and post it in a modal...



// const $openBtn = $('#openModal');
const $modal = $('.modal');
// const $closeBtn = $('#close');

//planet modal calls
const $alderannBtn = $('.alderaan')
const $dagobahBtn = $('.dagobah')
const $endorMoonBtn = $('.endor-moon')
const $tatooinenBtn = $('.tatooine')
const $yavinBtn = $('.yavin')



const openModal = () => {

    className.css('display', 'block');
    // show modal
}

// const closeModal = () => {
//     $modal.css('display', 'none');
//     // hide modal
// }

// event listeners 
$alderannBtn.on('click', openModal($modal));
// $closeBtn.on('click', closeModal);

// setTimeout(openModal, 5000);


const alderaan = (() => {


    // $(".alderaan").on('click', event => {
    //     event.preventDefault()

    $.ajax({
        url: 'http://swapi.dev/api/planets/2/',
        type: 'Get',
        success: (data) => {
                $('.modal').html($(`<p>${data.name}</p>`))
                    // $('#name').text(data.name);
                    // $('#climate').text(data.Climate);
                    // $('#terrain').text(data.Terrain);
                    // $('#surface_water').text(data.Surface + Water);
                    // $('#population').text(data.Population);
                console.log(data);

            }
            //         }).then(

        //             (data) => { //success callback
        //                 $('#name').text(data.Name);
        //                 $('#climate').text(data.Climate);
        //                 $('#terrain').text(data.Terrain);
        //                 $('#surface_water').text(data.Surface + Water);
        //                 $('#population').text(data.Population);
        //                 console.log(data);
        //             },
        //             append(data.html('.modal-content'))

        //         )

    })

})

alderaan()

// const dagobah = (() => {


//     $(".dagobah").on('click', event => {
//         event.preventDefault()

//         $.ajax({
//             url: 'http://swapi.dev/api/planets/5/',
//             type: 'Get',
//             data: {
//                 'name': Name,
//                 'climate': Climate,
//                 'terrain': Terrain,
//                 'surface_water': Surface + Water,
//                 'population': Population,
//             },
//             success: event(result),
//         }).then(

//             (data) => { //success callback
//                 $('#name').text(data.Name);
//                 $('#climate').text(data.Climate);
//                 $('#terrain').text(data.Terrain);
//                 $('#surface_water').text(data.Surface + Water);
//                 $('#population').text(data.Population);
//                 console.log(data);
//             },
//             append(data.html('.modal-content'))

//         )

//     })

// })

// const endorMooon = (() => {


//     $(".endor-moon").on('click', event => {
//         event.preventDefault()

//         $.ajax({
//             url: 'http://swapi.dev/api/planets/7/',
//             type: 'Get',
//             data: {
//                 'name': Name,
//                 'climate': Climate,
//                 'terrain': Terrain,
//                 'surface_water': Surface + Water,
//                 'population': Population,
//             },
//             success: event(result),
//         }).then(

//             (data) => { //success callback
//                 $('#name').text(data.Name);
//                 $('#climate').text(data.Climate);
//                 $('#terrain').text(data.Terrain);
//                 $('#surface_water').text(data.Surface + Water);
//                 $('#population').text(data.Population);
//                 console.log(data);
//             },
//             append(data.html('.modal-content'))

//         )

//     })

// })


// const tatooine = (() => {


//     $(".tatooine").on('click', event => {
//         event.preventDefault()

//         $.ajax({
//             url: 'http://swapi.dev/api/planets/1/',
//             type: 'Get',
//             data: {
//                 'name': Name,
//                 'climate': Climate,
//                 'terrain': Terrain,
//                 'surface_water': Surface + Water,
//                 'population': Population,
//             },
//             success: event(result),
//         }).then(

//             (data) => { //success callback
//                 $('#name').text(data.Name);
//                 $('#climate').text(data.Climate);
//                 $('#terrain').text(data.Terrain);
//                 $('#surface_water').text(data.Surface + Water);
//                 $('#population').text(data.Population);
//                 console.log(data);
//             },
//             append(data.html('.modal-content'))

//         )

//     })

// })

// const yavin = (() => {


//     $(".yavin").on('click', event => {
//         event.preventDefault()

//         $.ajax({
//             url: 'http://swapi.dev/api/planets/3/',
//             type: 'Get',
//             data: {
//                 'name': Name,
//                 'climate': Climate,
//                 'terrain': Terrain,
//                 'surface_water': Surface + Water,
//                 'population': Population,
//             },
//             success: event(result),
//         }).then(

//             (data) => { //success callback
//                 $('#name').text(data.Name);
//                 $('#climate').text(data.Climate);
//                 $('#terrain').text(data.Terrain);
//                 $('#surface_water').text(data.Surface + Water);
//                 $('#population').text(data.Population);
//                 console.log(data);
//             },
//             append(data.html('.modal-content'))

//         )

//     })

// })






//=======graveyard==================


// $(() => {

//     // GRABBING ALL ELEMENTS
//     // open button
//     const $openBtn = $('#openModal');
//     // modal
//     const $modal = $('#modal');
//     // close
//     const $closeBtn = $('#close');

//     // EVENT HANDLERS
//     const openModal = () => {
//         $modal.css('display', 'block');
//         // $modal.show();
//     }

//     const closeModal = () => {
//         $modal.css('display', 'none');
//         // $modal.hide();
//     }

//     // EVENT LISTENERS
//     $openBtn.on('click', openModal);
//     $closeBtn.on('click', closeModal);

//     setTimeout(openModal, 5000);
// });
//IN theory I would like to add an audio clip of star wars noises 
// const audio = document.getElementById("mySoundClip");
// audio.play();
//

///Really wanted to try and use on mouse hover but realizing it may be to complicarted 
// $(document).ready(alderaan); {
//     $('[data-toggle="alderaan"]').popover({
//         placement: 'top',
//         trigger: 'hover'
//     });
// }
//=======================
//first things first create a function that when on the link click it opens a modal

//
//=======
//audio
//=======
// const yoda = 'https://www.myinstants.com/instant/yoda-laugh/?utm_source=copy&utm_medium=share'

// function playSound(yoda) {
//     document.getElementById(yoda).play();
// };
//======
//======