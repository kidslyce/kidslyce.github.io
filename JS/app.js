//==========================
// THE PLANETS OF A GALAXY FAR, FAR AWAY...
//==========================
//the planets (on the mouse click) will pull a request for the certain attributes of the planet and post it in a modal...




const $modal = $('.modal');
const $closeBtn = $('#close');

//planet modal calls
const $alderannBtn = $('.alderaan')
const $dagobahBtn = $('.dagobah')
const $endorMoonBtn = $('.endor-moon')
const $tatooinenBtn = $('.tatooine')
const $yavinBtn = $('.yavin')



const openModal = (id) => {

        $(id).css('display', 'block');
        // show modal
    }
    // event listeners 


$alderannBtn.on('click', () => { openModal('#alderaan-modal') });

$dagobahBtn.on('click', () => { openModal('#dagobah-modal') });

$endorMoonBtn.on('click', () => { openModal('#endor-modal') });

$tatooinenBtn.on('click', () => { openModal('#tatooine-modal') });

$yavinBtn.on('click', () => { openModal('#yavin-modal') });







const getPlanetData = ((id, num) => {

    $.ajax({
        url: `http://swapi.dev/api/planets/${num}/`,
        type: 'Get',
        success: (data) => {
            $(id).append($(`<p>Name: ${data.name}</p>`))
            $(id).append($(`<p>Climate: ${data.climate}</p>`))
            $(id).append($(`<p>Terrain: ${data.terrain}</p>`))
            $(id).append($(`<p>Population: ${data.population}</p>`))

            // .html : SETS the inner html for the selected element

            console.log(data);



        }

    })

})

getPlanetData('#alderaan-modal', 2)
getPlanetData('#dagobah-modal', 5)
getPlanetData('#endor-modal', 7)
getPlanetData('#tatooine-modal', 1)
getPlanetData('#yavin-modal', 3)



// const dagobah = (() => {


//     $.ajax({
//         url: 'http://swapi.dev/api/planets/5/',
//         type: 'Get',
//         success: (data) => {
//             $('.modal').html($(`<p>${"Name: " + data.name}</p>`))
//             $('.modal').html($(`<p>${"Climate: " + data.climate}</p>`))
//             $('.modal').html($(`<p>${"Terrain: " + data.terrain}</p>`))
//             $('.modal').html($(`<p>${"Population: " + data.population}</p>`))

//             console.log(data);

//         }

//     })

// })

// dagobah()



// const endor = (() => {


//     $.ajax({
//         url: 'http://swapi.dev/api/planets/7/',
//         type: 'Get',
//         success: (data) => {
//             $('.modal').html($(`<p>${"Name: " + data.name}</p>`))
//             $('.modal').html($(`<p>${"Climate: " + data.climate}</p>`))
//             $('.modal').html($(`<p>${"Terrain: " + data.terrain}</p>`))
//             $('.modal').html($(`<p>${"Population: " + data.population}</p>`))

//             console.log(data);

//         }

//     })

// })

// endor()


// const tatooine = (() => {


//     $.ajax({
//         url: 'http://swapi.dev/api/planets/1/',
//         type: 'Get',
//         success: (data) => {
//             $('.modal').html($(`<p>${"Name: " + data.name}</p>`))
//             $('.modal').html($(`<p>${"Climate: " + data.climate}</p>`))
//             $('.modal').html($(`<p>${"Terrain: " + data.terrain}</p>`))
//             $('.modal').html($(`<p>${"Population: " + data.population}</p>`))

//             console.log(data);

//         }

//     })

// })

// tatooine()

// const yavin = (() => {


//     $.ajax({
//         url: 'http://swapi.dev/api/planets/3/',
//         type: 'Get',
//         success: (data) => {
//             $('.modal').html($(`<p>${"Name: " + data.name}</p>`))
//             $('.modal').html($(`<p>${"Climate: " + data.climate}</p>`))
//             $('.modal').html($(`<p>${"Terrain: " + data.terrain}</p>`))
//             $('.modal').html($(`<p>${"Population: " + data.population}</p>`))

//             console.log(data);

//         }

//     })

// })

// yavin()





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