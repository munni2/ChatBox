/* Custom Script */
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

    $(document).ready(function() {
        $("#textbox").emojioneArea({
            pickerPosition: "top",
            events: {
                keyup: function (editor, event) {
                    if(event.which == 13){
                        
                        if(event.shiftKey) {
                            // With shift
                        }else {
                            // event.preventDefault(); 
                            sendMessage();
                        }
                    }
                }
            }
        });
    });
    function sendMessage() {
        var newMessage = document.createElement("span");
        newMessage.setAttribute('class', 'list');


        var hour = document.createElement("span");
        hour.setAttribute('class', 'c-hour');
        var d = new Date();
        var n = d.getHours();
        var m = d.getMinutes();
        hour.innerHTML = n + ":" + m;
        messages.appendChild(hour);

        newMessage.innerHTML = $('#textbox').data("emojioneArea").getText().trim();
        messages.appendChild(newMessage);
       $(newMessage).wrapAll( "<div class='new'></div>" );
        $('#textbox').data("emojioneArea").setText('');
        $('.chat-area').scrollTop($('.chat-area')[0].scrollHeight);//for bottom scrollbar
    }



    function myFunction(){
        var x = document.getElementById("myFile");
        var txt = "";
        if ('files' in x) {
            if (x.files.length == 0) {
                txt = "Select one or more files.";
            } else {
                for (var i = 0; i < x.files.length; i++) {
                    // txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                    var file = x.files[i];
                    if ('name' in file) {
                        txt += "File Name: " + file.name + "<br>";
                    }
                    // if ('size' in file) {
                    //     txt += "size: " + file.size + " bytes <br>";
                    // }
                }
            }
        } 
        else {
            if (x.value == "") {
                txt += "Select one or more files.";
            } else {
                txt += "The files property is not supported by your browser!";
                txt  += "<br>The path of the selected file: " + x.value;  
            }
        }
        var newMessage = document.createElement("div");
        newMessage.setAttribute('id', 'file-list');
        newMessage.innerHTML = txt;
        messages.appendChild(newMessage);
    }


