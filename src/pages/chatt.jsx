import React, { useEffect, useState } from 'react';
import { AssistantV2 } from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';
const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [inputText, setInputText] = useState('');

	useEffect(() => {
		// Initialize Watson Assistant
		const assistant = new AssistantV2({
			authenticator: new IamAuthenticator({ apikey: 'YOUR_APIKEY' }),
			serviceUrl: 'YOUR_SERVICE_URL',
			version: '2021-06-14',
		});

		// Start a chat session
		assistant
			.createSession({
				assistantId: 'YOUR_ASSISTANT_ID',
			})
			.then((response) => {
				// Save the session ID
				const sessionId = response.result.session_id;

				// Send initial message to Watson Assistant
				sendMessage('Hello', sessionId);
			})
			.catch((error) => {
				console.error('Failed to create session:', error);
			});
	}, []);

	const sendMessage = (text, sessionId) => {
		const message = {
			role: 'user',
			content: text,
		};

		// Send user message to Watson Assistant
		assistant
			.message({
				assistantId: 'YOUR_ASSISTANT_ID',
				sessionId: sessionId,
				input: {
					message_type: 'text',
					text: message.content,
				},
			})
			.then((response) => {
				// Process Watson Assistant response
				const watsonResponse = response.result.output.generic[0].text;

				// Add Watson Assistant's response to messages
				setMessages((prevMessages) => [
					...prevMessages,
					{ role: 'assistant', content: watsonResponse },
				]);
			})
			.catch((error) => {
				console.error('Failed to send message to Watson Assistant:', error);
			});
	};

	const handleInputChange = (e) => {
		setInputText(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (inputText.trim() !== '') {
			// Add user message to messages
			setMessages((prevMessages) => [
				...prevMessages,
				{ role: 'user', content: inputText },
			]);

			// Send user message to Watson Assistant
			sendMessage(inputText);

			// Clear input field
			setInputText('');
		}
	};

	return (
		<div>
			<div>
				{messages.map((message, index) => (
					<div key={index} className={message.role}>
						{message.content}
					</div>
				))}
			</div>
			<form onSubmit={handleFormSubmit}>
				<input type="text" value={inputText} onChange={handleInputChange} />
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Chat;
