
'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  type: 'bot' | 'user';
  text: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch('/api/question');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.question) {
          setQuestion(data.question);
          setMessages([{ type: 'bot', text: data.question }]);
        } else {
          setMessages([{ type: 'bot', text: '오늘의 질문을 가져오는 데 실패했어요.' }]);
        }
      } catch (error) {
        setMessages([{ type: 'bot', text: '오류가 발생했어요. 잠시 후 다시 시도해주세요.' }]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '' || hasAnswered) return;

    const newUserMessage: Message = { type: 'user', text: inputValue };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setHasAnswered(true);

    try {
      await fetch('/api/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, answer: inputValue }),
      });
      
      setTimeout(() => {
        const botResponse: Message = { type: 'bot', text: '소중한 생각을 나눠주셔서 감사해요. 내일 또 만나요.' };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);

    } catch (error) {
      const errorResponse: Message = { type: 'bot', text: '답변을 저장하는 데 실패했어요. 인터넷 연결을 확인해주세요.' };
      setMessages(prev => [...prev, errorResponse]);
      setHasAnswered(false); // Allow user to try again
    }
  };

  return (
    <main>
      <div className="chat-container" ref={chatContainerRef}>
        {isLoading && <div className="message bot">질문을 가져오는 중...</div>}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form className="input-area" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={hasAnswered ? '내일 다시 만나요.' : '여기에 생각을 적어주세요...'}
          disabled={isLoading || hasAnswered}
        />
        <button type="submit" disabled={isLoading || hasAnswered || inputValue.trim() === ''}>
          ↑
        </button>
      </form>
    </main>
  );
}
