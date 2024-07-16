import React, { useState } from 'react';

function App() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // 폼 제출 이벤트 방지
    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, password })
      });

      // 응답을 JSON으로 파싱
      const result = await response.json();
  
      if (response.ok) {
        console.log('로그인 성공:', id, password);
        console.log(result);
        setMsg(result.message || 'Logged in successfully!');
        window.location.href = 'http://localhost:5000/login';
      } else {
        console.log('로그인 실패:', id, password);
        setMsg(result.message || '이메일 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.log('서버 오류:', id, password);
      console.error('로그인 요청 실패:', error);
      setMsg('서버 오류');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="links">
        <a className="active">Login</a>
      </div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">
          <i className="fas fa-user"></i>
        </label>
        <input type="text" name="username" placeholder="id" id="id" onChange={(e) => setId(e.target.value)} required />
        <label htmlFor="password">
          <i className="fas fa-lock"></i>
        </label>
        <input type="password" name="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} required />
        <div className="msg">{msg}</div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
