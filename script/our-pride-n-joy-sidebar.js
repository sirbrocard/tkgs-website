sidebarmenu_text = "<div class='sidebar menu sticky-top p-3' style='top:120px;font-size:13px;'>"
sidebarmenu_text += "<h5>Our Pride & Joy</h5><div class='nav flex-column'>"
sidebarmenu_text += "<a href='/our-pride-n-joy/sparkling-moments/sparkling-moments.html' class='sidebarnav-link nav-link pl-0'>Sparkling Moments</a>"





if (window.location.href.search('/our-pride-n-joy/sparkling-moments/sparkling-moments') + 1) {

  currentyear = new Date().getFullYear();
    sidebarmenu_text += "<ul class='our-pride-n-joy-sidebarnav-child nav nav-pills flex-column'>"
    // sidebarmenu_text += "<a href='sparkling-moments.html'>Sparkling Moments</a>"
    sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='"+currentyear +".html' >" +currentyear+"</a></li>"
    sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='"+ (currentyear - 1)+".html' >" + (currentyear - 1) +"</a></li>"
    sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='"+(currentyear - 2)+".html' >" +(currentyear - 2)+"</a></li>"
    sidebarmenu_text += "</ul>"
    } 

    

sidebarmenu_text += "<a href='/our-pride-n-joy/tkgs-in-the-news.html' class='sidebarnav-link nav-link pl-0' >TKGS in the News</a>"

if (window.location.href.search("/our-pride-n-joy/tkgs-in-the-news") + 1) {
sidebarmenu_text += "<ul id='scrollspy' class='nav nav-pills flex-column'>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#students-academic' >Academic</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#students-cca'>CCA & Activities</a></li>"
// sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#students-via'>Values in Action</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#our-alumni'>Our Alumni</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#our-staff'>Our Staff</a></li>"
sidebarmenu_text += "</ul>"
}
sidebarmenu_text += "</div></div>"

$('.sidebar-navbar-menu').html(sidebarmenu_text)



//the one at the bottom
sidebarmenu_text_1 = "<div class='sidebar menu sticky-top p-3' style='font-size:13px;'>"
sidebarmenu_text_1 += "<h5>Our Pride & Joy</h5><div class='nav flex-column'>"
sidebarmenu_text_1 += "<a href='/our-pride-n-joy/sparkling-moments/sparkling-moments.html' class='sidebarnav-link nav-link pl-0'>Sparkling Moments</a>"

sidebarmenu_text_1 += "<a href='/our-pride-n-joy/tkgs-in-the-news.html' class='sidebarnav-link nav-link pl-0' >TKGS in the News</a>"
sidebarmenu_text_1 += "</div></div>"

$('.sidebar-navbar-menu-1').html(sidebarmenu_text_1)




//scrollspy
scrollspymenu_text = ""

scrollspymenu_text += "<ul class='nav nav-pills'>"

if (window.location.href.search("/our-pride-n-joy/tkgs-in-the-news") + 1) {
  scrollspymenu_text += "<ul id='scrollspy' class='nav nav-pills '>"
  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#students-academic' >Academic</a></li>"
  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#students-cca'>CCA & Activities</a></li>"
  // scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#students-via'>Values in Action</a></li>"
  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#our-alumni'>Our Alumni</a></li>"
  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#our-staff'>Our Staff</a></li>"
  scrollspymenu_text += "</ul>"
}

scrollspymenu_text += "</ul>"
$('.scrollspy-block').html(scrollspymenu_text)