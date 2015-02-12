
    //var user = {};

      var problems = [{
        pid: 1,
        title: "problem 1",
        content: "Lorem ipsum , consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: true
      },{
        pid: 2,
        title: "problem 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      },{
        pid: 3,
        title: "problem 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      },{
        pid: 4,
        title: "problem 4",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: true
      },{
        pid: 5,
        title: "problem 5",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      }];

    function checkAnswer(problemId, userAns){

      for(var i=0; i<=problems.length; i++){
        // document.write("userAns = " + userAns + " problemID = " + problemId + " problems[i].id = " + problems[i].id + " String (problems[i].answer) = " + String (problems[i].answer));
        document.write(" i : " + i);
        document.write(" id : " + problemId);
        document.write(" pid : " + problems[i].pid);
        
        if(problems[i].pid == problemId){
            document.write("2 - ");
          if(String (problems[i].answer) == String(userAns)){
            document.write("problems[i].id " + String (problems[i].answer) + "String (problems[i].answer)" + String(problems[i].answer));
            return "true";
          }else{
            return "false";
          }
        }
      }
    }
    
    function gameLogic(result){      
    }
    function displayResult(result){
      if(result == 'true'){
        $('.true-signal').show();
      }
      else if(result == 'false'){
        $('.false-signal').show();
      }
      $('#result').toggle();
      //$('#answer').toggle();
      setTimeout(PopAProblem,1000);
      setTimeout(function(){
        $('#result').toggle();
        $('.false-signal').hide();
        $('.true-signal').hide();
        //$('#answer').toggle();
      },1000);
      // displayProblem();
    }


    $(function(){
      // var problems = getProblem();
      var problemID = PopAProblem();
      //var problem = problems.pop();
      // $('#problem .title').text(problem.title);
      // $('#problem .content').text(problem.content);
      $('#trueButton').click(function(){
        var result;
        result = checkAnswer(problemID, 'true');
        // document.write("result " + result);
        displayResult(result);
      });
    
    });
    function PopAProblem(){
        var problem = problems.pop();
        $('#problem .title').text(problem.title);
        $('#problem .content').text(problem.content);
        // $('#problem .content').text(problem.id);
        return problem.pid;
    }