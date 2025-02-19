'use client'

import style from '@components/content-area.module.css';
import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { Client } from '@stomp/stompjs';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export default function ContentArea() {
	const [socketUrl, setSocketUrl] = useState('ws://localhost:8080/ws');
	const [socketClient, setSocketClient] = useState<Stomp.Client>();
	const [receivedMsg, setReceivedMsg] = useState(null);

	const [note, setNote] = useState<string>('');

	useEffect(() => {
		connect();
	}, []);

	const connect = () => {
		const socket = new WebSocket('http://localhost:8080/ws');
		const stompClient = Stomp.over(socket);

		stompClient.connect({}, onConnected, onError);
		setSocketClient(stompClient);
	}

	const onConnected = () => {
		console.log("Connected 1111111111");
		if (socketClient) {
			socketClient.subscribe('/topic/notes/1111', onMessageReceived);
		}
	}
	
	const onError = (error: any) => {
		console.log("Error: ", error);
	}

	const onMessageReceived = (frame: any) => {
		console.log("Message: ", frame);
		let body = JSON.parse(frame.body)
		setReceivedMsg(body.content);
	}


	const onNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value);
	}
	const onClickBtn = () => {
		const msg = {
			type: "UPDATE",
			noteIdd: "1111",
			content: note,
			timestamp: "2021-09-09T12:00:00"
		}

		if (socketClient) {
			socketClient.send("/app/notes/1111", {}, JSON.stringify(msg));
		}
	}

	return (
		<div>
			<p>Default: {receivedMsg == null ? "Hello" : receivedMsg} </p>

			<input
				type="text"
				value={note}
				onChange={onNoteChange}
			/>
			<button onClick={onClickBtn} >Send</button>
		</div>
	)
}