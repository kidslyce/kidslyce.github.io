//==========================
// THE PLANETS OF A GALAXY FAR, FAR AWAY...
//==========================
//the planets (on the mouse click) will pull a request for the certain attributes of the planet and post it in a modal...







//====================
//planet modal calls
//====================

const $alderannBtn = $('.alderaan')
const $dagobahBtn = $('.dagobah')
const $endorMoonBtn = $('.endor')
const $tatooinenBtn = $('.tatooine')
const $yavinBtn = $('.yavin')

//================
// show modal -  by passing an iteration through the openModal function Im able to 
// create even listenes that I can assign to the class of the images. 
//================

const openModal = (id) => {

    $(id).css('display', 'block');

}

//=================
// event listeners 
//==================

$alderannBtn.on('click', () => { openModal('#alderaan-modal') });

$dagobahBtn.on('click', () => { openModal('#dagobah-modal') });

$endorMoonBtn.on('click', () => { openModal('#endor-modal') });

$tatooinenBtn.on('click', () => { openModal('#tatooine-modal') });

$yavinBtn.on('click', () => { openModal('#yavin-modal') });




//============================================================================
//Using template literals Im able to create a function that I can invoke the
//information from the API and assign it by the class of the planets
//============================================================================
const getPlanetData = ((id, num) => {

    $.ajax({
        url: `http://swapi.dev/api/planets/${num}/`,
        type: 'Get',
        success: (data) => {
            $(id).append($(`<p>Name: ${data.name}</p>`))
            $(id).append($(`<p>Climate: ${data.climate}</p>`))
            $(id).append($(`<p>Terrain: ${data.terrain}</p>`))
            $(id).append($(`<p>Population: ${data.population}</p>`))

            // .append : SETS the html for the selected element

            console.log(data);



        }

    })

})

getPlanetData('#alderaan-modal', 2)
getPlanetData('#dagobah-modal', 5)
getPlanetData('#endor-modal', 7)
getPlanetData('#tatooine-modal', 1)
getPlanetData('#yavin-modal', 3)

//using the getPlanet Data function