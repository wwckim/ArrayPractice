

      // THIS IS A SINGLE LINE COMMENT IN JavaScript

      //Fill in the question marks with what the output will be.
/*
GLOBAL VARS
*/

var clicked_id;


/*
FUNCTION DECLARATIONS
*/

    function resetTable(){
        $('#row1').replaceWith('<row id="row1"></row>');
          for (i=0; i<8; i++){
            document.getElementsByTagName("button")[i].removeAttribute('disabled');
            //selecting all elements of a specific tag, as above, returns the values in an Array.
            //Therefore, to perform an action on each item, you have to loop through the array.
          }
    }

    function buildTable(id){
        clicked_id = id;
        $('#row1').append( "<column><p>" + clicked_id + "</p></column>" );
        var buttonID = "#" + clicked_id;
        document.getElementById(clicked_id).disabled = true;
    }

    function continueBuild(newID){

    var oldID = clicked_id;

    switch(oldID) {

      case 'var':
        if (newID == "favoriteMovies") {
          buildTable(newID);
        }
        break;

      case 'favoriteMovies':
        if (newID == "=") {
          buildTable(newID);
        }
        break;
      case '=':
        if (newID == "[") {
          buildTable(newID);
        }
        break;
      case '[':
        if (newID == "Jaws") {
          buildTable(newID);
        }
        break;
      case 'Jaws':
        if (newID == ", Elf,") {
          buildTable(newID);
        }
        break;
      case ', Elf,':
        if (newID == "Titanic]") {
          buildTable(newID);
        }
        break;
      case 'Titanic]':
        if (newID == ";") {
          buildTable(newID);
          alert("YAY!! YOU COMPLETED AN ARRAY DECLARATION!");

        }
        break;



    default:
      alert("How do we start an array definition?");

    };

    }

    function checkAnswer(question){

      var clicked_btn = "#" + question ;
      console.log("This.id = " + question + ". clicked_btn = " + clicked_btn);

      $(clicked_btn).prop('disabled', true);

      switch(question) {
        case 'q1':
        {
          $('#q1answer').removeAttr('hidden');
        }
        break

        case ('q2'):
        {
          $('#q2').prop('disabled', true);
          $('#q2').addClass('rightAnswer');
        }

        case ('2q2'):
        {
          $('#2q2').prop('disabled', true);
          $('#q2').addClass('rightAnswer');
        }

        default: "That didn't work right.";
      }
    }
