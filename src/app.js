
//import {BOT_USERNAME, OAUTH_TOKEN, CHANNAL_NAME} from './constants';
//const tmi = require('tmi.js');


//function runbotTwtich(){
	const option = {
		options: { debug: true },
		connection: {
			reconnect: true,
			secure: true
		},
		identity: {
			username: 'syo117',
			password: 'oauth:ccakugx5o3krbn0f7i2bgj7ymk4laz'
		},
		channels: [ 'syo117' ]
	}
	
	const client = new tmi.Client(option);
	
	client.connect();
	
	let p1Click = false;
	let p2Click = false;
	let p3Click = false;
	let p4Click = false;
	let p5Click = false;
	let p6Click = false;
	let p7Click = false;
	let p8Click = false;
	let p9Click = false;
	let p10Click = false;

	client.on('message', (channel, tags, message, self) => {
		// Ignore echoed messages.
		if(self) return;
		
		if(p1Click === true)
		{
			//client.say(channel, `@${tags.username}, cool`);
			client.say(channel, `@${tags.username}, Help`);
		}
		else if (p2Click === true)
		{
			let rand = Math.floor(Math.random()*3);
			switch(rand)
			{
				case 0:
					client.say(channel, `@${tags.username}, Hello everyone!`);
					break;
				case 1:
					client.say(channel, `@${tags.username}, Nice to meet you!`);
					break;
				case 2:
					client.say(channel, `@${tags.username}, Let's play the game!`);
					break;
				default:
					client.say(channel, `@${tags.username}, Hello.`);
					break;
			}

			//client.say(channel, `@${tags.username}, Confuse`);
			//client.say(channel, `@${tags.username}, good`);
		}
		else if (p3Click === true)
		{
			client.say(channel, `@${tags.username}, Tease`);
			//client.say(channel, `@${tags.username}, ok`);
		}
		else if (p4Click === true)
		{
			client.say(channel, `@${tags.username}, Co-h`);
		}
		else if (p5Click === true)
		{
			client.say(channel, `@${tags.username}, Co-t`);
		}
		else if (p6Click === true)
		{
			client.say(channel, `@${tags.username}, :D`);
		}
		else if (p7Click === true)
		{
			client.say(channel, `@${tags.username}, :O`);
		}
		else if (p8Click === true)
		{
			client.say(channel, `@${tags.username}, ;P`);
		}
		else if (p9Click === true)
		{
			client.say(channel, `@${tags.username}, :|`);
		}
		else if (p10Click === true)
		{
			client.say(channel, `@${tags.username}, >(`);
		}
		//else if(message.toLowerCase() === '!hello') {
			// "@alca, heya!"

			//console.log(channel, tags, message, self);
			
			
		//}
	});

    function sentMessageBotP1(){
        var name = document.getElementById('input-text-twitch').value;
        if(name === "")
        {
            alert("Please type your full name");
        }
        else{
			//client.say(`#syo117`, `@${name}, cool`);
            client.say(`#syo117`, `@${name}, Help`);
        }
        
    }
	function sentMessageBotP2(){
		var name = document.getElementById('input-text-twitch').value;

		if(name === "")
        {
			alert("Please type your full name");

		}
		else{
			let rand = Math.floor(Math.random()*3);
			switch(rand)
			{
				case 0:
					client.say(`#syo117`, `@${name}, Hello everyone!`);
					break;
				case 1:
					client.say(`#syo117`, `@${name}, Nice to meet you!`);
					break;
				case 2:
					client.say(`#syo117`, `@${name}, Let's play the game!`);
					break;
				default:
					client.say(`#syo117`, `@${name}, Hello.`);
					break;
			}

			//client.say(`#syo117`, `@${name}, Confuse`);
			//client.say(`#syo117`, `@${name}, good`);
		}
	}
	function sentMessageBotP3(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, Tease`);
			//client.say(`#syo117`, `@${name}, ok`);
		}
    }

	function sentMessageBotP4(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, Co-h`);
		}
	}

	function sentMessageBotP5(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, Co-t`);
		}
	}

	function sentMessageBotP6(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, :D`);
		}
	}

	function sentMessageBotP7(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, :O`);
		}
	}
		
	function sentMessageBotP8(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, ;P`);
		}
	}

	function sentMessageBotP9(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, :|`);
		}
	}

	function sentMessageBotP10(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, >(`);
		}
	}

	function gradeChange() {
		var name = document.getElementById('input-text-twitch').value;
		var objS = document.getElementById("pid");
		var grade = objS.options[objS.selectedIndex].value;
		//alert(grade);
		if(grade === "1")
		{
			client.say(`#syo117`, `@${name}, Hello everyone!`);
		}
		else if(grade === "2")
		{
			client.say(`#syo117`, `@${name}, Hey, howdy, hi!`);
		}
		else if(grade === "3")
		{
			client.say(`#syo117`, `@${name}, Hiya!`);
		}
		else if(grade === "4")
		{
			client.say(`#syo117`, `@${name}, Yo, Greetings and salutations!`);
		}
		else if(grade === "5")
		{
			client.say(`#syo117`, `@${name}, Ahoy, matey!`);
		}

	}



	function sentMessageBotInput(){
		var name = document.getElementById('input-text-twitch').value;
		var input = document.getElementById('text').value;
		var btn = document.querySelector("button");
		var countTime = 30;
	
		if(name === "")
		{
			alert("Please type your full name");
		}
		else{
			client.say(`#syo117`, `@${name}, ${input}`);
			btn.disabled = true;
			var timeFlag = setInterval(function()
			{
				if(countTime > 0) 
				{
					btn.innerHTML = countTime + "s";
					countTime--;
				} 
				else 
				{
					clearInterval(timeFlag);
					btn.disabled = false;
					btn.innerHTML = "Send";
					countTime = 30;
				}
			},1000);
		}
	}

//}



		
