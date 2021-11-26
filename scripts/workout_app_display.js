









/**$.get('../workoutApp_data/Workout_Data.txt', function(textData, status) {
    var aLines = textData.split("\n")

    alert(textData + '\nStatus = ' + status);   // this works, all lines

    $.each(aLines, function(n, sLine) {
       $('#textFromFile').append('<div>' + sLine + '</div>'); // ?????
       alert(n + ' - ' + aLines[n]);      // this also work
    });
    alert("File read OK");
 }, 'text');

 Source: https://forum.jquery.com/topic/how-to-read-the-text-file-and-show-the-information-on-the-page
 **/
