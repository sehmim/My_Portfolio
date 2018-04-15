let musicOn =true;

let animation_switch = true;
let infoInDiv = true;

$('.my-wrapper').hide();

const showHideDiv = ()=>{
    $('.my-wrapper').toggle();
}

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

// to prevent default this function is used
const pauseMovement = ()=>{
    $('#circleCenter').click(()=>{
        event.preventDefault();
        togglePlay();
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
            });
            $('.my-wrapper').show();
            $('.page-header').hide();
        }
        // ONCE DIV is BIG, CLICK TO GO AWAY
        div.click(()=>{
        animation_switch = true;
        $(divId).animate({
            'width': '25%',
            'height': '50%',
            })
        $('.my-wrapper').hide();
        $('.page-header').show();
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





