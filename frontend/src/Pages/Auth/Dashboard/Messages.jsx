import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaSearch,
  FaPaperclip,
  FaPaperPlane,
  FaCircle,
} from "react-icons/fa";

import "./Messages.css";

const chats = [
  {
    id: 1,
    name: "Swift Logistics",
    lastMessage: "Truck has left Johannesburg.",
    online: true,
  },
  {
    id: 2,
    name: "Cargo Express",
    lastMessage: "We'll arrive at 09:00.",
    online: false,
  },
  {
    id: 3,
    name: "RoadLink Transport",
    lastMessage: "Delivery completed.",
    online: true,
  },
];

const Messages = () => {
  return (
    <DashboardLayout>

      <div className="messages-page">

        {/* LEFT SIDEBAR */}

        <div className="chat-sidebar">

          <h2>Messages</h2>

          <div className="chat-search">

            <FaSearch />

            <input
              placeholder="Search..."
            />

          </div>

          {chats.map((chat) => (

            <div className="chat-user" key={chat.id}>

              <div className="avatar">
                {chat.name.charAt(0)}
              </div>

              <div className="chat-details">

                <h4>{chat.name}</h4>

                <p>{chat.lastMessage}</p>

              </div>

              <FaCircle
                className={
                  chat.online
                    ? "online"
                    : "offline"
                }
              />

            </div>

          ))}

        </div>

        {/* CHAT WINDOW */}

        <div className="chat-window">

          <div className="chat-header">

            <div className="chat-title">

              <div className="avatar">
                S
              </div>

              <div>

                <h3>Swift Logistics</h3>

                <p>Online</p>

              </div>

            </div>

          </div>

          <div className="messages-container">

            <div className="message received">
              Good morning. We have collected your shipment.
              <span>08:30</span>
            </div>

            <div className="message sent">
              Great! Please keep me updated.
              <span>08:35</span>
            </div>

            <div className="message received">
              The truck has departed Johannesburg.
              <span>08:45</span>
            </div>

          </div>

          <div className="message-input">

            <button>

              <FaPaperclip />

            </button>

            <input
              placeholder="Type a message..."
            />

            <button className="send">

              <FaPaperPlane />

            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Messages;