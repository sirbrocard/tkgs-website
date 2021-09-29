sidebarmenu_text = "<div class='sidebar menu sticky-top p-3' style='top:120px;font-size:13px;'>"
sidebarmenu_text += "<h5>About Us</h5><div class='nav flex-column'>"
sidebarmenu_text += "<a href='/index.html#latestnews' class='sidebarnav-link nav-link pl-0' >Latest News</a>"
sidebarmenu_text += "<a href='/about-us/principal-message.html' class='sidebarnav-link nav-link pl-0'>Principal's Message</a>"
sidebarmenu_text += "<a href='/about-us/admissions.html' class='sidebarnav-link nav-link pl-0'>Admissions</a>"


if (window.location.href.search("/about-us/admissions") + 1) {
sidebarmenu_text += "<ul id='scrollspy' class='nav nav-pills flex-column'>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#s1admissions' >Secondary 1 Admission</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#appeal'>Appeal Process for Admission</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#dsa'>Direct School Admission</a></li>"
sidebarmenu_text += "</ul>"
}
sidebarmenu_text += "<a href='/about-us/our-alumni.html' class='sidebarnav-link nav-link pl-0'>Our Alumni</a>"

if (window.location.href.search("/about-us/our-alumni") + 1) {
sidebarmenu_text +=  "<ul id='scrollspy' class='nav nav-pills flex-column'>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#activities' >Activities</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#newsletter'>Newsletter</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#joinus'>Join Us</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#committee'>Committee</a></li>"
sidebarmenu_text += "</ul>"
}
sidebarmenu_text += "<a href='/about-us/our-people.html' class='sidebarnav-link nav-link pl-0'>Our People</a>"

if (window.location.href.search("/about-us/our-people") + 1) {
  sidebarmenu_text += "<ul id='scrollspy' class='nav nav-pills flex-column'>"
  sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#smc' >School Management Committee</a></li>"
  sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#tnaeds'>Teachers & AEDs</a></li>"
  sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#nts'>Non-Teaching Staff</a></li>"
  sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#sac'>School Advisory Committee</a></li>"
  sidebarmenu_text += "</ul>"
}
sidebarmenu_text += "<a href='/about-us/our-school.html' class='sidebarnav-link nav-link pl-0'>Our School</a>"


if (window.location.href.search("/about-us/our-school") + 1) {
sidebarmenu_text += "<ul id='scrollspy' class='nav nav-pills flex-column'>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#values' >Our Values</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='nav-link' href='#milestones'>Milestones</a></li>"
sidebarmenu_text += "</ul>"

}

sidebarmenu_text += "<a href='/about-us/contact.html' class='sidebarnav-link nav-link pl-0'>Contact Us</a>"
sidebarmenu_text += "</div></div>"

$('.sidebar-navbar-menu').html(sidebarmenu_text)



//the one at the bottom

sidebarmenu_text_1 = "<div class='sidebar menu p-3'><h5>About Us</h5><div class='nav flex-column'>"
sidebarmenu_text_1 += "<a href='/index.html#latestnews' class='sidebarnav-link nav-link pl-0' >Latest News</a>"
sidebarmenu_text_1 += "<a href='/about-us/principal-message.html' class='sidebarnav-link nav-link pl-0'>Principal's Message</a>"
sidebarmenu_text_1 += "<a href='/about-us/admissions.html' class='sidebarnav-link nav-link pl-0'>Admissions</a>"
sidebarmenu_text_1 += "<a href='/about-us/our-alumni.html' class='sidebarnav-link nav-link pl-0'>Our Alumni</a>"
sidebarmenu_text_1 += "<a href='/about-us/our-people.html' class='sidebarnav-link nav-link pl-0'>Our People</a>"
sidebarmenu_text_1 += "<a href='/about-us/our-school.html' class='sidebarnav-link nav-link pl-0'>Our School</a>"
sidebarmenu_text_1 += "<a href='/about-us/contact.html' class='sidebarnav-link nav-link pl-0'>Contact Us</a>"
sidebarmenu_text_1 += "</div></div>"

$('.sidebar-navbar-menu-1').html(sidebarmenu_text_1)




//scrollspy
scrollspymenu_text = ""

scrollspymenu_text += "<ul class='nav nav-pills'>"

if (window.location.href.search("/about-us/admissions") + 1) {


  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#s1admissions' >Secondary 1 Admission</a></li>"
  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#appeal'>Appeal Process for Admission</a></li>"
  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#dsa'>Direct School Admission</a></li>"
  

}

  
if (window.location.href.search("/about-us/our-alumni") + 1) {
scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#activities'>Activities</a></li>"
scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#newsletter'>Newsletter</a></li>"
scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#joinus'>Join Us</a></li>"
scrollspymenu_text += "<li class= 'nav-item '><a class= 'nav-link' href= '#committee'>Committee</a></li>"

}  
if (window.location.href.search("/about-us/our-people") + 1) {
scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#smc' >School Management Committee</a></li>"
scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#tnaeds'>Teachers & AEDs</a></li>"
scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#nts'>Non-Teaching Staff</a></li>"
scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#sac'>School Advisory Committee</a></li>"

}
if (window.location.href.search("/about-us/our-school") + 1) {
  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#values' >Our Values</a></li>"
  scrollspymenu_text += "<li class='nav-item'><a class='nav-link' href='#milestones'>Milestones</a></li>"
  
}

scrollspymenu_text += "</ul>"
$('.scrollspy-block').html(scrollspymenu_text)