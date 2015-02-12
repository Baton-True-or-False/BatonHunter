
    //var user = {};

      var problems = [{
        pid: 1,
        title: "problem 1",
        content: "the answer is true !!Lorem ipsum , consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: true
      },{
        pid: 2,
        title: "problem 2",
        content: "the answer is false !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      },{
        pid: 3,
        title: "problem 3",
        content: "the answer is false !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      },{
        pid: 4,
        title: "problem 4",
        content: "the answer is true !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: true
      },{
        pid: 5,
        title: "problem 5",
        content: "the answer is false !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      }];

    function checkAnswer(problemAns, userAns){
      $('.btn').disabled=true
      if(String (problemAns) == String(userAns)){  
        return "true";
      }else{
        return "false";
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
      var problemAns = PopAProblem();
      var result;
      //var problem = problems.pop();
      // $('#problem .title').text(problem.title);
      // $('#problem .content').text(problem.content);
      $('#trueButton').click(function(){
        result = checkAnswer(problemAns, 'true');
        // document.write("result " + result);
        displayResult(result);
      })
      $('#falseButton').click(function(){
        var result;
        result = checkAnswer(problemAns, 'false');
        // document.write("result " + result);
        displayResult(result);
      });
    
    });
    function PopAProblem(){
        $('.btn').disabled=false
        var problem = problems.pop();
        $('#problem .title').text(problem.title);
        $('#problem .content').text(problem.content);
        // $('#problem .content').text(problem.id);
        return problem.answer;
    }