

      var problems = [{
        pid: 1,
        title: "problem 1",
        content: "the answer is true !!Lorem ipsum , consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: true
      },{
        pid: 2,
        title: "problem 2",
        content: "the answer is false !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      },{
        pid: 3,
        title: "problem 3",
        content: "the answer is false !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      },{
        pid: 4,
        title: "problem 4",
        content: "the answer is true !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: true
      },{
        pid: 5,
        title: "problem 5",
        content: "the answer is true !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: true
      },{
        pid: 6,
        title: "problem 6",
        content: "the answer is false !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
        answer: false
      }];
    var ans;
    $(function(){
      PopAProblem();
    });
    function PopAProblem(){
        $('#answer .btn').attr("disabled", false);
        var problem = problems.pop();
        ans = problem.answer;
        $('#problem .title').text(problem.title);
        $('#problem .content').text(problem.content);
    }

    function checkAnswer(problemAns, userAns){
      $('#answer .btn').attr("disabled", true);
      if(String (problemAns) == String(userAns)){  
        return "true";
      }else{
        return "false";
      }        
    }

    function displayResult(result){
      if(result == 'true'){
        $('.true-signal').show();
      }
      else if(result == 'false'){
        $('.false-signal').show();
      }
      $('#result').toggle();
      setTimeout(PopAProblem,1000);
      setTimeout(function(){
        $('#result').toggle();
        $('.false-signal').hide();
        $('.true-signal').hide();
      },1000);
    }

    function ansClick(value){
      var result = checkAnswer(ans, value);
      displayResult(result);
    }