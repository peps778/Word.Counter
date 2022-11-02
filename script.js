window.onload = function() 
{
    alert("Hi there! Thanks for viewing my code.\n\nJust copy and paste text into text box or type text into it yourself to see the program display the number of words inputted. Thanks\n\n- Paul");
    
    var $ = document.getElementById.bind(document);
    
    countWords = function()
    {
        /*Variable replaces every extra white space with
        just one space => " " which is used as the 
        counter ;)*/
        var string = $("string").value.replace(/\s+/g, 
                " ");
            strlen = string.length;
        
        
        /* Counter script: count if the i'th character 
        of string var is == " " */
        
        for (i=1, count=0; i<strlen; i++)
        {
            if (string[i] == " " && strlen > 1) count++;
        }
        
        if (string.trim() != "")
        {    
            if (string[strlen-1] != " " && count == 0)
            {
                $("result").innerHTML = "User inputting "+
                    "word..."
            }
            else if (string[strlen-1] != " " && count >= 1)
            {
                count++;
                $("result").innerHTML = "User inputted "+
                    "\"" + count + "\" word(s) in text "+
                    "box.";
            } 
            else if (string[strlen-1] == " " && count >= 1)
            {
                $("result").innerHTML = "User inputted \"" 
                    + count + "\" word(s) in text box.";
            }
        }
        else
        {
            $("result").innerHTML = "User inputted no "+
                "texts yet. Text box blank.";
        }
        $("result").style.display = "block";
    };

    $("string").oninput = countWords;
    $("string").onfocus = countWords;
};

