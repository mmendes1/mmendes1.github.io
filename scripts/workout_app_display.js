var file = document.getElementsById("myFile").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var textArea = document.getElementById("myTextArea");
        textArea.value = e.target.result;
    };
    reader.readAsText(file);