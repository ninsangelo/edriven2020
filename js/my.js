var startm = prompt("Month (1 - 12)");
var startd = prompt("Day (1 - 7)");

const dayspermonth = [31,28,31,30,31,30,31,31,30,31,30,31]
emptybox = startd - 1
let displaymonth = ''

if (startm == 1)
    displaymonth = 'January'
else if (startm == 2)
    displaymonth = 'February'
else if (startm == 3)
    displaymonth = 'March'
else if (startm == 4)
    displaymonth = 'April'
else if (startm == 5)
    displaymonth = 'May'
else if (startm == 6)
    displaymonth = 'June'
else if (startm == 7)
    displaymonth = 'July'
else if (startm == 8)
    displaymonth = 'August'
else if (startm == 9)
    displaymonth = 'September'
else if (startm == 10)
    displaymonth = 'October'
else if (startm == 11)
    displaymonth = 'November'
else if (startm == 12)
    displaymonth = 'December'
        
        let Calendar = '<table><tr><td colspan = "7" align = "center" id = "month">'+displaymonth+'</td></tr><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></table>'
        let dpm = dayspermonth[startm-1] + emptybox
        let box = 0
        let amountD = 1
    if (startm > 12 || startd > 7 || startm == 0 || startd == 0)
    {
        calendar.innerHTML = ("Invalid Input")
        
    }
    else
    {
    for (i =0; i < dpm; i++){
        if (box == 0){
            Calendar+= '<tr>'
        }
        if (i < emptybox){
            if (box == 0){
                Calendar+='<td style ="background-color:#FFFFFF"></td>'
            }
            else{
                Calendar+='<td></td>'
            }
            box++
        }
        else {
            if (box == 0){
                Calendar+='<td style ="background-color:#FFFFFF">'+amountD+'</td>'
            }
            else{
            Calendar += '<td>'+amountD+'</td>'
            }
            box++
            amountD++
        }
        if (box == 7){
            Calendar+='</tr>'
            box = 0
        }

        }

        if (box > 0){
            for (i = box; i < 7; i++){
                Calendar += '<td></td>'   
            }
         }
         calendar.innerHTML = Calendar;
        }
       
 

    
