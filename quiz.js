var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Which politician started his career by serving as a member of the Rashtriya Rashtriya Swayamsevak Sangh (RSS), a right-wing Hindu nationalist organization?",
		"options" : [
			{"a": "Narendra Modi",
				"b": "P. Chidambaram",
				"c": "Sheila Dixit",
				"d": "Sushma Swaraj"
			}
			],
		"answer":"Narendra Modi",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Who served as the Prime Minister of India from 1996 to 1997?",
		"options" : [
			{
				"a": "HD Deve Gowda",
				"b": "Akhilesh Yadav",
				"c": "Sharad Pawar",
				"d": "Sushma Swaraj"
			}
			],
		"answer":"HD Deve Gowda",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Who is a prominent leader of the Bharatiya Janata Party (BJP) and a Union Cabinet Minister?",
		"options" : [
			{"a": "Smriti Irani",
				"b": "HD Deve Gowda",
				"c": "Akhilesh Yadav",
				"d": "Yogi Adityanath"}
			],
		"answer":"Smriti Irani",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Who recently joined the Bharatiya Janata Party (BJP) after leaving the Indian National         Congress (INC)?",
		"options" : [
			{"a": "Rai Karan",
			"b": "Jyotiraditya Scindia",
			"c": "Nitish Kumar",
			"d": "P. Chidambaram",
			}
			],
		"answer":"Jyotiraditya Scindia",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Which politician is known as the Iron Lady of Uttar Pradesh?",
		"options" : [
			{"a": "Mayawati",
            "b": "Mamata Banerjee",
            "c": "Sheila Dixit",
            "d": "Smriti Irani"
			}
			],
		"answer":"Mayawati",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Who was the longest serving Chief Minister of Gujarat?",
		"options" : [
			{"a": "Bhupendar Patel",
			"b":"Narendra Modi",
			"c":"Anandi Ben Patel",
			"d":"Vijay Rupani"
			}
			],
		"answer":"Narendra Modi",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Who actively worked towards uplifting marginalized sections of society and improving healthcare?",
		"options" : [
			{"a": "Sheila Dixit",
            "b": "Sushma Swaraj",
            "c": "Omar Abdullah",
            "d": "HD Kumaraswamy"
			}
			],
		"answer":"HD Kumaraswamy",
		"score":0,
		"status": ""
	},
    {
		"id" : 8,
		"question" : "Who amongst the following is the first female Chief Minister of Rajasthan??",
		"options" : [
			{"a": "Sheila Dixit",
            "b": "Sushma Swaraj",
            "c": "Vasundhara Raje",
            "d": "Mayawati"
			}
			],
		"answer":"Vasundhara Raje",
		"score":0,
		"status": ""
	},
    {
		"id" : 9,
		"question" : "What is Farooq Abdullah’s father’s name?",
		"options" : [
			{"a": "Omar Abdullah",
            "b": "Sheik Abdullah",
            "c": "Akbar Abdullah",
            "d": "Mohammad Abdullah"
			}
			],
		"answer":"Sheik Abdullah",
		"score":0,
		"status": ""
	},
    {
		"id" : 10,
		"question" : "Mamta Banerjee is associated with which political body?",
		"options" : [
			{"a": "BSP",
            "b": "BJP",
            "c": "Communist party of India",
            "d": "All India Trinamool Congress"
			}
			],
		"answer":"All India Trinamool Congress",
		"score":0,
		"status": ""
	}

	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



