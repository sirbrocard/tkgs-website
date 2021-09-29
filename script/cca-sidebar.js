sidebarmenu_text = "<div class='sidebar menu sticky-top p-3' style='top:110px;font-size:13px;'><h5>Co-Curricular Activities</h5><div class='nav flex-column'>"

sidebarmenu_text += "<a href='/cca/clubs-n-service-boards/clubs-n-service-boards.html' class='sidebarnav-link nav-link pl-0'>Clubs & Service Boards</a>"


if (window.location.href.search('/clubs-n-service-boards') + 1) {
sidebarmenu_text += "<ul class='cca-sidebarnav-child nav nav-pills flex-column'>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='interact-club.html' >Interact Club</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='library-board.html' >Library Board</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='literary-n-debating-society.html' >Literary & Debating Society</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='media-club.html' >Media Club</a></li></ul>"
} 

sidebarmenu_text += "<a href='/cca/sports-n-games/sports-n-games.html' class='sidebarnav-link nav-link pl-0'>Sports & Games</a>"

if (window.location.href.search('/sports-n-games') + 1) {
sidebarmenu_text += "<ul class='cca-sidebarnav-child nav nav-pills flex-column'>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='badminton.html' >Badminton</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='basketball.html' >Basketball</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='floorball.html' >Floorball</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='netball.html' >Netball</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='sailing.html' >Sailing</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='softball.html' >Softball</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='tennis.html' >Tennis</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='tenpin-bowling.html' >Tenpin Bowling</a></li></ul>"

}
sidebarmenu_text += "<a href='/cca/uniformed-groups/uniformed-groups.html' class='sidebarnav-link nav-link pl-0'>Uniformed Groups</a>"

if (window.location.href.search('/uniformed-groups') + 1) {
sidebarmenu_text += "<ul class='cca-sidebarnav-child nav nav-pills flex-column'>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='girl-guides.html' >Girl Guides</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='national-police-cadet-corps.html' >National Police Cadet Corps</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='red-cross.html' >Red Cross</a></li></ul>"
}


sidebarmenu_text += "<a href='/cca/visual-n-performing-arts/visual-n-performing-arts.html' class='sidebarnav-link nav-link pl-0'>Visual & Performing Arts</a>"

if (window.location.href.search('/visual-n-performing-arts') + 1) {
sidebarmenu_text += "<ul class='cca-sidebarnav-child nav nav-pills flex-column'>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='art-club.html' >Art Club</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='choir.html' >Choir</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='dance-modern.html' >Dance (Modern)</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='string-ensemble.html' >String Ensemble</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='symphonic-band.html' >Symphonic Band</a></li>"
sidebarmenu_text += "<li class='nav-item'><a class='sidebarnav-link nav-link' href='tk-thespians-drama.html' >TK Thespians (Drama)</a></li></ul>"
}
sidebarmenu_text += "</div></div>"

$('.sidebar-navbar-menu').html(sidebarmenu_text)