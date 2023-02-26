import React, { useRef, useState, useEffect } from 'react';
import '../styles/chatPage.css'

const ChatPage = () => {

  const ws = new WebSocket("ws://localhost:3000/socket/Chat");

  console.log("웹소켓 연결 대기", ws.readyState)

  // 채팅 메시지를 저장하는 변수
  const [msg, setMsg] = useState("")

  // 타이핑 중인 메시지를 저장하는 함수(onChange)
  const sendText = (e) => {
    console.log(e.target.value)
    setMsg(e.target.value)
  }

  // 전송 버튼 클릭
  const sendBtn = () => {
    ws.onopen = () => {
      console.log(ws.readyState)
      // ws.send(msg)
    }
  }




  return (
    <div>

      <div className="chat-container">
        <aside>
          <header>
            <input type="text" placeholder="닉네임 검색" className="nickSearchInput"/>
          </header>
          <ul>
            <li>
              {/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>*/}
                <div>
                  <h2>상대방 닉네임</h2>
                  <h3>
                    가장 마지막에 입력 된 메시지
                  </h3>
                </div>
            </li>
          </ul>
        </aside>
        <main>
          <header>
            {/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>*/}
              <div>
                <h2>Chat with 상대방 닉네임</h2>
                <h3>채팅을 한 게시글</h3>
              </div>
              {/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""/>*/}
          </header>
          <ul id="chat">
            <li className="you">
              <div className="entete">
                <h2>상대방 닉네임</h2>
              </div>
              <div className="triangle"></div>
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
                <h3>10:12AM, Today</h3>
            </li>
            <li className="me">
              <div className="entete">
              </div>
              <div className="triangle"></div>
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
                <h3>10:12AM, Today</h3>
            </li>
          </ul>
          <footer>
            <textarea id="msg" onChange={sendText} placeholder="Type your message"></textarea>
                <button type="button" onClick={sendBtn}>SEND</button>
          </footer>
        </main>
      </div>

      </div>
  )
}

export default ChatPage