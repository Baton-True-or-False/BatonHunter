
    //var user = {};
    var problems =  [{
      id: 1,
      title: "problem 1",
      content: "what is agile?\n",
      answer: true
    },{
      id: 2,
      title: "problem 2",
      content: "what is JQuery?\n",
      answer: false
    },{
      id: 3,
      title: "problem 3",
      content: "what is JQuery?\n",
      answer: false
    },{
      id: 4,
      title: "problem 4",
      content: "what is JQuery?\n",
      answer: true
    },{
      id: 5,
      title: "problem 5",
      content: "what is JQuery?\n",
      answer: false
    }];
    var problems = getProblem();

    function getProblem(){
      return problems;
    }

    function checkAnswer(problemId, userAns){
      //
      for(var i=0; i<problems.length; i++){
        if(problems[i].id == problemId){
          if(problems[i].answer == userAns)
            return true;
          else
            return false;
        }
      }
    }
    function gameLogic(result){
      
        
      
    }
    function displayResult(result){
      if(result == true){
        $('.true-signal').show();
        $('.false-signal').hide();
      }
      else{
        $('.true-signal').hide();
        $('.false-signal').show();
      }
      $('#result').toggle();
      //$('#answer').toggle();
      setTimeout(displayProblem,1000);
      setTimeout(function(){
        $('#result').toggle();
        //$('#answer').toggle();
      },1000);
      // displayProblem();
    }


    $(function(){

      // var problems = getProblem();
      displayProblem(problems);
      //var problem = problems.pop();
      // $('#problem .title').text(problem.title);
      // $('#problem .content').text(problem.content);
      $('#answer button').click(function(){ 
        var result;
        if($(this).attr('id') == 'trueButton'){
          result = checkAnswer(problem.id, true);
        }
        else if($(this).attr('id') == 'falseButton')
          result = checkAnswer(problem.id, false);
        
        gameLogic(result);
        displayResult(result);
      });
    
    });
    function displayProblem(){
        var problem = problems.pop();
        $('#problem .title').text(problem.title);
        $('#problem .content').text(problem.content);
    }
    
    