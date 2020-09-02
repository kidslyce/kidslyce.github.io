//==========================
// THE PLANETS OF A GALAXY FAR, FAR AWAY...
//==========================
//the planets (on the mouse click) will pull a request for the certain attributes of the planet and post it in a modal...




const alderaan = (() => {


        $(".alderaan").on('click', event => {

                event.preventDefault()


                $.ajax({
                    url: 'http://swapi.dev/api/planets/2/',
                    type: 'Get',
                    data: {
                        'name': Name,
                        'climate': Climate,
                        'terrain': Terrain,
                        'surface_water': Surface + Water,
                        'population': Population,

                    },

                }).then(

                    (data) => { //success callback
                        $('#name').text(data.Name);
                        $('#climate').text(data.Climate);
                        $('#terrain').text(data.Terrain);
                        $('#surface_water').text(data.Surface + Water);
                        $('#population').text(data.Population);
                    },



                    (error) => { //fail callback
                        console.log(error);
                    })

            }

        })

}







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