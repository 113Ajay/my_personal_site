    var score=0;
    var que_count=0;
    var questions=[
		{
			que:" JavaScript is a _______________ language.",
		    a:"a) Object-Oriented",
		    b:"b) High-level",
		    c:"c) Assembly-language",
		    d:"d) Object-Based",
		    ans:"d) Object-Based"
		},
	    {
		    que:" Which of the following is not considered as an error in JavaScript?",
		    a:"a) Syntax error",
		    b:"b) Missing of semicolons",
		    c:"c) Division by zero",
		    d:"d) Missing of Bracket",
		    ans:"c) Division by zero"
	    },
	    {
	    	que:" JavaScript can be written __________",
	    	a:"a) directly into JS file and included into HTML",
	    	b:"b) directly on the server page",
	    	c:"c) directly into HTML pages",
	    	d:"d) directly into the css file",
	    	ans:"a) directly into JS file and included into HTML"
	    },
	    {
	    	que:" What is a block statement in JavaScript?",
	    	a:"a) conditional block",
	    	b:"b) block that contains a single statement",
	    	c:"c) both conditional block and a single statement",
	    	d:"d) block that combines multiple statements into a single compound statement",
	    	ans:"d) block that combines multiple statements into a single compound statement"
	    },
	    {
	    	que:" Which character in JavaScript code will be interpreted as XML markup?",
	    	a:"a) !",
	    	b:"b) >",
	    	c:"c) &",
	    	d:"d) .",
	    	ans:"c) &"
	    },
	    {
	    	que:" Which of the following for loop declaration is not valid?",
	    	a:"a) for ( int i = 99; i >= 0; i / 9 )",
	    	b:"b) for ( int i = 7; i <= 77; i += 7 )",
	    	c:"c) for ( int i = 20; i >= 2; - -i )",
	    	d:"d) for ( int i = 2; i <= 20; i = 2* i )",
	    	ans:"a) for ( int i = 99; i >= 0; i / 9 )"
	    },
	    {
	    	que:" Which of the following is true about the anonymous inner class?",
	    	a:"a) It has only methods",
	    	b:"b) Objects can't be created",
	    	c:"c) It has a fixed class name",
	    	d:"d) It has no class name",
	    	ans:"d) It has no class name"
	    },
	    {
	    	que:" Which of the following is a mutable class in java?",
	    	a:"a) java.lang.String",
	    	b:"b) java.lang.Byte",
	    	c:"c) java.lang.Short",
	    	d:"d) java.lang.StringBuilder",
	    	ans:"d) java.lang.StringBuilder"
	    },
	    {
	    	que:" What is serialization?",
	    	a:"a) Turning object in memory into stream of bytes",
	    	b:"b) Turning stream of bytes into an object in memory",
	    	c:"c) Turning object in memory into stream of bits",
	    	d:"d) Turning stream of bits into an object in memory",
	    	ans:"b) Turning stream of bytes into an object in memory"
	    },
	    {
	    	que:" What type of members are not serialized?",
	    	a:"a) Private",
	    	b:"b) Protected",
	    	c:"c) Static",
	    	d:"d) Throwable",
	    	ans:"c) Static"
	    }
	];
    var submit_btn=document.querySelector("#submit_btn");
	submit_btn.addEventListener('click',nextQuestion);
	var state=document.getElementsByClassName('q-state')[0];
	var container=document.getElementsByClassName('container')[0];
	var q_txt=$(".q_txt");
	var btn1=$('.btn1');
	var btn2=$(".btn2");
	var btn3=$(".btn3");
	var btn4=$(".btn4");
	var option=document.querySelectorAll('.common');
	function load_question()
	{
		state.innerText=("question"+(que_count+1)+"/"+questions.length);
	    q_txt.text("Q1. "+questions[que_count].que);      //btn1.text(questions[i].que);
        btn1.text(questions[que_count].a);
        btn2.text(questions[que_count].b);
        btn3.text(questions[que_count].c);
        btn4.text(questions[que_count].d);
	}
	
	load_question();
function nextQuestion()
{
	if (que_count<questions.length-1) 
	{
		for (var i = 0; i < option.length; i++) {
			option[i].style.background='';
			option[i].style.color='';
		}
		que_count++;
		state.innerText=("question "+(que_count+1)+"/"+questions.length); 
	    q_txt.text("Q"+(que_count+1)+'. '+questions[que_count].que);
	    btn1.text(questions[que_count].a);
        btn2.text(questions[que_count].b);
        btn3.text(questions[que_count].c);
        btn4.text(questions[que_count].d);
	}
	else
	{
        score_card();
	}
}
function cal_score(cur_opt){
	if(cur_opt.innerText===questions[que_count].ans&&score<questions.length) {
		score++;
		//alert(score);
		document.getElementById(cur_opt.id).style.background='#106040';
		document.getElementById(cur_opt.id).style.color='#fff';
	} 
	else
	{
		//alert(score);
		document.getElementById(cur_opt.id).style.background='#901020';
		document.getElementById(cur_opt.id).style.color='#fff';
	}
	setTimeout(nextQuestion,300);
}
function score_card()
{
	container.style.display='none';
	document.getElementsByClassName('score')[0].style.display='block';
    $('.stxt').text('You got '+score+'/'+questions.length);
	//alert(score);
}