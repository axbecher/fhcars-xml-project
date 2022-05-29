

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            FIlter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.filter__gallery').length > 0) {
            var containerEl = document.querySelector('.filter__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 8200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    // My Modules
    
    if(document.querySelector('video')){
        const video = document.querySelector('video');
    video.playbackRate = 2;

    let status = document.getElementById('videoStatus');
    document.onclick = (e) => {
    if (e.target.id === '1x') {
        video.playbackRate = 1;
        status.innerHTML="Video status: 1x applied";
    }
    if (e.target.id === '15x') {
        video.playbackRate = 1.5;
        status.innerHTML="Video status: 1.5x applied";
    }
    if (e.target.id === '2x') {
        video.playbackRate = 2;
        status.innerHTML="Video status: 2x applied";
    }
    if (e.target.id === '3x') {
        video.playbackRate = 3;
        status.innerHTML="Video status: 3x applied";
    }
    if (e.target.id === 'stop') {
        video.pause();
        status.innerHTML="Video status: stop";
        
    }
    if (e.target.id === 'play') {
        
        video.play();
        status.innerHTML="Video status: resume";
    }
    if (e.target.id === 'reset') {
        video.load();
        video.play();
        status.innerHTML="Video status: reset";
    }
    if (e.target.id === 'video1') {
        video.src = 'videos/fh5-trailer1.mp4';
        video.load();
        video.play();
        video.playbackRate = 2;
        
        status.innerHTML="Video status: Cinematic played";
    }
    if (e.target.id === 'video2') {
        video.src = 'videos/fh5-trailer2.mp4';
        video.load();
        video.play();
        video.playbackRate = 2;
        video.currentTime = 45;
        status.innerHTML="Video status: Gameplay played";
    }
    }
    }
    
    console.log('Error');
    

    if(document.getElementById("menuNavigation")){
        document.getElementById("menuNavigation").innerHTML = `
        <li><a href="https://axbecher.com/portfolio/">Axbecher.com</a></li>
        <li><a href="https://axbecher.com/fhcars-xml-project/index.html">Home</a></li>
                                    <li ><a href="#">Queries <span class="arrow_carrot-down"></span></a>
                                        <ul class="dropdown">
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query1.html">Query 1</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query2.html">Query 2</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query3.html">Query 3</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query4.html">Query 4</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query5.html">Query 5</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query6.html">Query 6</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query7.html">Query 7</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query8.html">Query 8</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query9.html">Query 9</a></li>
                                            <li><a href="https://axbecher.com/fhcars-xml-project/queries/query10.html">Query 10</a></li>

                                            
                                        </ul>
                                    </li>
                                    <li class="active"><a href="https://axbecher.com/fhcars-xml-project/table.html">Table</a></li>
                                    
        `;
        }
    
        if(document.getElementById('myFooter')){
            document.getElementById('myFooter').innerHTML = `
            <div class="page-up">
            <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer__logo">
                        
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="footer__nav">
                        <ul>
                            <h5> v1.0.2 </h5>
                            <li><a href="https://axbecher.com/portfolio/">Axbecher.com</a></li>
                            <li><a href="https://axbecher.com/fhcars-xml-project/index.html">Home</a></li>
                                    
                                    <li class="active"><a href="https://axbecher.com/fhcars-xml-project/table.html">Table</a></li>
                                    
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <p class="copyRight">
                      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | by <a href="https://axbecher.com" target="_blank">Alexandru Becher</a>
                      </p>
    
                  </div>
              </div>
          </div>
            `;
        }

        /* Version Control:
        v1.0.2 - Put absolute path in href for all hyperlinks 
        v1.0.1 - change href for all hiperlinks
        */

    /*------------------
        Video Player
    --------------------*/
    const player = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'captions', 'settings', 'fullscreen'],
        seekTime: 25
    });

    /*------------------
        Niceselect
    --------------------*/
    $('select').niceSelect();

    /*------------------
        Scroll To Top
    --------------------*/
    $("#scrollToTopButton").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
     });

})(jQuery);