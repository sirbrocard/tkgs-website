var titles = [
'School Management Commitee',
'2021 TKGS Sec 1 Form Teachers',
'2021 TKGS  Student Development Team',
'Our School Day',
'2021 Orientation',
'Proper School Attire',
'Useful Links',
'Contact Us'
];

var links = [
'',
'',
'',
'https://drive.google.com/file/d/16JYQWH36CSnqIK1qANzg44q0nMw5_VGV/view',
'https://drive.google.com/file/d/11OCdILYhV63ey7CX4vlUFt2JDBpZISti/view',
'https://drive.google.com/file/d/1Z1FbjdJ4RibMAlgxsW83cJMW5sPmtOxV/view',
'',
'',
];

var text = ''
for (var i=0 ; i<titles.length; i++) {
text += "<div class='col'><a href='" + links[i]
text+= "' class='defaultButton btn' role='button' aria-pressed='true' style='font-size:12px;display:block;margin:10px auto;'>"
text += titles[i] + "</a></div>"
}
document.getElementById('admissions-links').innerHTML = text