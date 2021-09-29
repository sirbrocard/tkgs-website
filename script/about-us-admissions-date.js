let appealDate = [
"22-12-2020" ,
"23-12-2020" ,
"24-12-2020"
]

let appealHours = [
"11am - 5pm",
"9 am – 5 pm",
"9 am – 12 pm"
]




weekArr= [
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
]

monthsArr = [
'January', 
'February', 
'March', 
'April', 
'May', 
'June', 
'July', 
'August', 
'September', 
'October', 
'November', 
'December'];




var text = "<thead>"
text += "<tr>"
text += "<th>Application Dates</th><th colspan='3'>"
// 22 December
text += appealDate[0].split('-')[0] + " " +  monthsArr[parseInt(appealDate[0].split('-')[1]) - 1] 
// - 
text += " - " 
//24 December
text += appealDate[appealDate.length - 1].split('-')[0] + " " + monthsArr[parseInt(appealDate[0].split('-')[1]) - 1] + " "
//2020
text +=appealDate[0].split('-')[2]
text+= "</th>"
text+= "</tr>"
text+= "</thead>"
text+= "<tbody>"
text+= "<tr>"
text += "<th rowspan='2'>Application Hours</th>"
for (i=0; i< appealDate.length; i++) {
date = new Date()
ddmmyyyy = appealDate[i].split('-')
dd = ddmmyyyy[0]
mm = ddmmyyyy[1] - 1
yyyy = ddmmyyyy[2]
date.setFullYear(yyyy)
date.setMonth(mm)
date.setDate(dd)
day = date.getDay()

text += "<td>" + dd + " " +  monthsArr[mm] + " " + yyyy
text += "<br/>(" + weekArr[day] + ")</td>"

}
text += "</tr>"
text+= "<tr>"

for (i=0; i<appealHours.length ; i++) {
    text += "<td>" + appealHours[i] + "</td>"
}
text+= "</tr>"
text+= "</tbody>"

$("#appealdates").html(text);