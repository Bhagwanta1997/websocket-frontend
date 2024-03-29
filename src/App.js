import SockJS from 'sockjs-client';
import { over } from 'stompjs';

import './App.css';
import { useEffect } from 'react';

function App() {

  const connectWSS = () => {
		var sock = new SockJS('https://websocket-backend-24bs.onrender.com//ws-endpoint');
		console.log('sock: ', sock);
		let stompClient = over(sock);
		console.log('stompClient: ', stompClient);
		sock.onopen = function() {
		console.log('open');
		}
		stompClient.connect({}, function (frame) {
		console.log('Connected: ' + frame);
		stompClient.subscribe('/topic/notification', function (payload) {
			console.log(payload.body);
			//you can execute any function here
		});
		});
	}

	useEffect(() => {
		connectWSS();
	}, []);

  return (
    <div className="App">
      Welcome to Web Socket Application
    </div>
  );
}

export default App;
