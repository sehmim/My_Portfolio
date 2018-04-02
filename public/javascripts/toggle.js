let musicOn =true;

let animation_switch = true;



// const boxOnHover = (circleId) => {
    
//     if (animation_switch) {
//         $(circleId).on('mouseover', () => {
//             $(this).css({
//                     'width': '110px',
//                     'height': '110px',
//                     'border': '5px solid #ccc'
    
//             })
//         })   
//     }
//     else if(!animation_switch){

//     }
// }



///// WHEN THE PAUSE BUTTON IS CLICKED //////

const  togglePlay = ()=> {
    if (musicOn) {
        $("#mysoundclip").animate({volume: 0},1000);
        $('#playPause').toggleClass("#fa fa-pause");
        $('#circleOne, #circleTwo, #circleThree, #circleFour').css({
            'animation-iteration-count': '1',
            'animation-fill-mode': 'forwards'
        })
        musicOn = false;
        console.log(musicOn);
    }
    else if (!musicOn) {
        $("#mysoundclip").animate({volume: 1},1000); 
        $('#playPause').toggleClass("#fa fa-pause");
        $('#circleOne, #circleTwo, #circleThree, #circleFour').css({
            'animation-iteration-count': 'infinite'
        })
        musicOn = true;
        console.log(musicOn);
    }
  };

const pauseMovementGeneral = () =>{
    togglePlay();

    }

const pauseMovement = ()=>{
    $('#circleCenter').click(()=>{
        event.preventDefault();
        pauseMovementGeneral();
    })    
}
////////////////////




/// SHOW THE DIVS WHEN HOVERED
const showThisOnhover = (circleId, emoji, divId) => {
    $(divId).hide();
        $( circleId + ' , ' + emoji).on('mouseover', ()=>{
            $(divId).show();
            $(this).mouseout(()=>{
                if (animation_switch) {
                    $(divId).hide();
                }
            });
        });
    }


// ELEMENTS IN THE DIVS //

// $('#buttonBackOne').hide();

// if (!animation_switch) {
//     $('#buttonBackOne').show();
// }




//////////////////////////////
/* POP UP FUNCTION!! A COMPLICATED ONE */ 
//////////////////////

const popUpDiv = (circleId, divId) =>{
    // When clicked a circle, if switch true, div gets bigger and turns switch false
    let div = $(divId); 
    $(circleId).click(()=>{
    // DIV POPS UP
        if (animation_switch) {
            animation_switch = false;
            console.log(animation_switch)
            $(divId).animate({
                width: 1200,
                height: 600,
            }).css({
                'z-index' : 3
            })
        }
        // ONCE DIV is BIG, CLICK TO GO AWAY
        div.click(()=>{
        animation_switch = true;
        $(divId).animate({
            'width': '25%',
            'height': '50%',
            })
        }) 

    })
}






//////////////////////////
$(document).ready(()=>{

    $("#mysoundclip").get(0).play();

    showThisOnhover('#circleOne', '#projects', '#displayProj');
    showThisOnhover('#circleTwo', '#about', '#displayAbout');
    showThisOnhover('#circleThree', '#education', '#displayEducation');
    showThisOnhover('#circleFour', '#social', '#displaySocial');

    popUpDiv('#circleOne', '#displayProj');
    popUpDiv('#circleTwo', '#displayAbout');
    popUpDiv('#circleThree', '#displayEducation');
    popUpDiv('#circleFour', '#displaySocial');
    
    pauseMovement();
});





