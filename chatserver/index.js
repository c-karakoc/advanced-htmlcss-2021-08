import express from 'express';
import expressWs from 'express-ws';
const app = express();
expressWs(app);

const chatters = [];
app.ws('/chat', (ws, req) => {

	chatters.push(ws);
	console.log('Nieuwe chatter, totaal is nu', chatters.length);

	ws.on('message', (msg) => {
		chatters.forEach(c => c.send(msg));
	});
	ws.on('close', () => {
		chatters.splice(chatters.indexOf(ws), 1);
		console.log('Chatter ging weg, totaal is nu', chatters.length);
	});
});

app.listen(3000, () => console.log('Chatserver listening @ :3000'));
