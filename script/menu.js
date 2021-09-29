


var media1023 = window.matchMedia("(min-width: 1023px)")
var media767 = window.matchMedia("(min-width:767px)")
var media705 = window.matchMedia("(min-width:706px)")
var media0 = window.matchMedia("(max-width:705px)")



menu_text = ""
menu_text += "<a class='navbar-brand' href='/index.html'>"
menu_text += "<picture><source srcset='/img/crest-dark.png' media='(prefers-color-scheme: dark)'><img src='/img/crest-light.png' alt='TKGS Crest' style='width: 234px; height: 88px;'></picture>"
menu_text += "</a>   <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown'><span class='navbar-toggler-icon'><div class='hamburger-icon'><span></span><span></span><span></span></div></span></button>"
menu_text += "<div class='collapse navbar-collapse' id='navbarNavDropdown'><ul class='nav nav-pills nav-fill' style='width:100%;'>"


menu_text += "<li class='mainmenu-item nav-item dropdown menuDropdownList is-dropdown'><button class='btn dropbtn menuDropdownLinks'>About Us</button><ul class='dropdown-menu Navigation-list is-dropdown is-hidden'>"
menu_text += "<li><a class='dropdown-item' href='/index.html#latestnews'>Latest News</a></li>"
menu_text += "<li><a class='dropdown-item' href='/about-us/principal-message.html'>Principal's Message</a></li>"
menu_text += "<li><a class='dropdown-item' href='/about-us/admissions.html'>Admissions</a></li>"
menu_text += "<li><a class='dropdown-item' href='/about-us/our-alumni.html'>Our Alumni</a></li>"
menu_text += "<li><a class='dropdown-item' href='/about-us/our-people.html'>Our People</a></li>"
menu_text += "<li><a class='dropdown-item' href='/about-us/our-school.html'>Our School</a></li>"
menu_text += "<li><a class='dropdown-item' href='/about-us/contact.html'>Contact Us</a></li></ul></li>"
  
menu_text += "<li class='mainmenu-item nav-item dropdown menuDropdownList is-dropdown'><button class='btn dropbtn menuDropdownLinks' >Our Pride & Joy</button><ul class='dropdown-menu Navigation-list is-dropdown is-hidden'>"
menu_text += "<li><a class='dropdown-item' href='/our-pride-n-joy/sparkling-moments/sparkling-moments.html'>Sparkling Moments</a></li>"
menu_text += "<li><a class='dropdown-item' href='/our-pride-n-joy/tkgs-in-the-news.html'>TKGS in the news</a></li></ul></li>"

menu_text += "<li class='mainmenu-item nav-item dropdown menuDropdownList is-dropdown'><button class='btn dropbtn menuDropdownLinks' >Learning @ TKGS</button><ul class='dropdown-menu  Navigation-list is-dropdown is-hidden'>"
menu_text += "<li><a class='dropdown-item' href='/learning-at-tkgs/key-programmes.html'>Key Programmes</a></li>"
menu_text += "<li><a class='dropdown-item' href='/learning-at-tkgs/aesthetic.html'>Aesthetics</a></li>"
menu_text += "<li><a class='dropdown-item' href='/learning-at-tkgs/english.html'>English</a></li>"
menu_text += "<li><a class='dropdown-item' href='/learning-at-tkgs/humanities.html'>Humanities</a></li>"
menu_text += "<li><a class='dropdown-item' href='/learning-at-tkgs/mathematics.html'>Mathematics</a></li>"
menu_text += "<li><a class='dropdown-item' href='/learning-at-tkgs/mother-tongue.html'>Mother Tongue</a></li>"
menu_text += "<li><a class='dropdown-item' href='/learning-at-tkgs/student-development/character-and-citizenship-education.html'>Student Development</a></li></ul></li>"

menu_text += "<li class='mainmenu-item nav-item dropdown  menuDropdownList is-dropdown'><button class='btn dropbtn menuDropdownLinks' >Co-Curricular Activities</button><ul class='dropdown-menu Navigation-list is-dropdown is-hidden'>"
menu_text += "<li><a class='dropdown-item' href='/cca/clubs-n-service-boards/clubs-n-service-boards.html'>Clubs & Services</a></li>"
menu_text += "<li><a class='dropdown-item' href='/cca/visual-n-performing-arts/visual-n-performing-arts.html'>Visual & Performing Arts</a></li>"
menu_text += "<li><a class='dropdown-item' href='/cca/sports-n-games/sports-n-games.html'>Sports & Games</a></li>"
menu_text += "<li><a class='dropdown-item' href='/cca/uniformed-groups/uniformed-groups.html'>Uniformed Groups</a></li></ul></li>"

menu_text += "<li class='mainmenu-item nav-item dropdown menuDropdownList is-dropdown'><button class='btn dropbtn menuDropdownLinks' >Useful Links</button><ul class='dropdown-menu Navigation-list is-dropdown is-hidden'>"
menu_text += "<li><a class='dropdown-item' href='/useful-links/for-parents.html'>For Parents</a></li>"
menu_text += "<li><a class='dropdown-item' href='/useful-links/for-staff.html'>For Staff</a></li>"
menu_text += "<li><a class='dropdown-item' href='/useful-links/for-students.html'>For Students</a></li>"
menu_text += "<li><a class='dropdown-item' href='/useful-links/services-n-suppliers.html'>Services & Suppliers</a></li>"
menu_text += "<li><a class='dropdown-item' href='/useful-links/frequently-asked-questions.html'>FAQ</a></li></ul></li>"

menu_text += "</ul></li>"

menu_text += "</ul></div>"


$('#main_menu').html(menu_text)










document.addEventListener("DOMContentLoaded", function(){
    $('.navbar-toggler').click(function() {
        $('#navbarNavDropdown').toggle()
        $('.scrollspy-block').toggle()
    })
    
    hiding_navbar = document.querySelector('.hiding_navbar');
    scrollspy_block = document.querySelector('.scrollspy-block');
    
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    // document.body.style.paddingTop = navbar_height + 'px';

    if(hiding_navbar){
        
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {


    let scroll_top = window.scrollY;


//on desktop version, without the navbar-toggler-icon
if (media767.matches) {

//scrollup
if (scroll_top < last_scroll_top) {
    hiding_navbar.classList.remove('scrolled-down');
    hiding_navbar.classList.add('scrolled-up');

} //if scrolldown

//scrolldown
else {
    hiding_navbar.classList.remove('scrolled-up');
    hiding_navbar.classList.add('scrolled-down');
} //else scrolldown



} //if (media767.matches)


//for phones, tablets, etc
else {

    if (scroll_top < last_scroll_top){


        hiding_navbar.classList.remove('scrolled-down');
        hiding_navbar.classList.add('scrolled-up');
        if (scrollspy_block) {
scrollspy_block.classList.remove('scrollspy-block-scrolled-down')
    scrollspy_block.classList.add('scrollspy-block-scrolled-up')
        }

    } //else if (scroll_top < last_scroll_top && ($('#navbarNavDropdown').is(':visible')))
        

        else if (scroll_top >= last_scroll_top){



            hiding_navbar.classList.remove('scrolled-up');
            hiding_navbar.classList.add('scrolled-down');
            if (scrollspy_block){
            scrollspy_block.classList.remove('scrollspy-block-scrolled-up')
        scrollspy_block.classList.add('scrollspy-block-scrolled-down')
    
            }
        

        } //else if (scroll_top >= last_scroll_top && ($('#navbarNavDropdown').is(':visible')))


} //else (media767.matches)


            last_scroll_top = scroll_top;



    

            
    

        }); 
        // window.addEventListener




        

        
    
            
    }
    // if

    








    
// make it as accordion for smaller screens
if (window.innerWidth > 992) {

	document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

		everyitem.addEventListener('mouseover', function(e){

			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl.classList.add('show');
			}

		});
		everyitem.addEventListener('mouseleave', function(e){
			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
			}


		})
	});

}
// end if innerWidth





        
                


// if (media0.matches) {



//     $(".navbar-toggler").toggle(

//         function(){

//           scrollspy_block.classList.add('scrollspy-block-navbar-show-705');


//     },
    
//     function() {
//         scrollspy_block.classList.remove('scrollspy-block-navbar-show-705');
//     })





      
//       } //if
//       else {
//           $(".navbar-toggler").toggle(
//               function(){
//             scrollspy_block.classList.add('scrollspy-block-navbar-show-0');
//           },
//           function() {
//             scrollspy_block.classList.remove('scrollspy-block-navbar-show-0');
        
//       } )
      
//       } //else
      
      
      
    // Bind to the resize event of the window object
$(window).on("resize", function () {
    // Set .right's width to the window width minus 480 pixels




    if (media1023.matches) {


        
        $(".menuDropdownList").hover(function() {
            $('> ul',this).show()
          },
          function() {
            $('> ul',this).hide()
          })
  
  
      }
      else {
        // $( ".menuDropdownLinks" ).on( "click", function() {
        //   $( this ).css( "opacity", "0" );
        // });
      $('.menuDropdownList').click(function(e) {
        if( $(this).children('.Navigation-list.is-dropdown').hasClass('is-hidden') ){
          $(".Navigation-list.is-dropdown").addClass('is-hidden');
          $(this).children('.Navigation-list.is-dropdown').removeClass('is-hidden'); 
        } else {
          $(".Navigation-list.is-dropdown").addClass('is-hidden');         
        }          
      });
  
    $('.menuDropdownList .Navigation-list.is-dropdown').click(function(e) {
      e.stopPropagation();
    });
  
  }

    
// Invoke the resize event immediately
}).resize();


window.addEventListener('resize', function() {




    // alert('addEventListener - resize');
}, true);


}); 
// DOMContentLoaded  end





document.addEventListener("DOMContentLoaded", function(){
            

            
        


    
});
    


//when at a certain breakpoint, the menu is hoverable
$(document).ready(function() {


});

/* Anything that gets to the document
   will hide the dropdown */
$(document).click(function(){
  $(".Navigation-list.is-dropdown").addClass('is-hidden');
});

/* Clicks within the dropdown won't make
   it past the dropdown itself */
$(".menuDropdownList.is-dropdown").click(function(e){
  e.stopPropagation();
});
  











document.addEventListener("DOMContentLoaded", function(){
}); 
// DOMContentLoaded  end