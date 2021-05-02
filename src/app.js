
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
	client.on('message', (channel, tags, message, self) => {
		// Ignore echoed messages.
		if(self) return;
		
		if(p1Click === true)
		{
			client.say(channel, `@${tags.username}, OK`);
		}
		else if (p2Click === true)
		{
			client.say(channel, `@${tags.username}, Good`);
		}
		else if (p3Click === true)
		{
			client.say(channel, `@${tags.username}, Cool`);
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
            alert("Please type your Twitch name");
        }
        else{
            client.say(`#syo117`, `@${name}, Ok`);
        }
        
    }
	function sentMessageBotP2(){
		var name = document.getElementById('input-text-twitch').value;

		if(name === "")
        {
			alert("Please type your Twitch name");

		}
		else{
			client.say(`#syo117`, `@${name}, Good`);
		}
	}
	function sentMessageBotP3(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your Twitch name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, Cool`);
		}


    }
//}



		
