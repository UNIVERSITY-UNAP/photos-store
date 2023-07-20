'use client'
import Cart from "@/components/cart/Cart";
import Chatbot from "@/components/chatbot/Chatbot";
import Dashboard from "@/components/dashboard/Dashboard";
import { ShoppingCart } from "@mui/icons-material";
import { Badge, Button, Drawer } from "@mui/material";
import { useState } from "react";

const PageTest = () => {
  const [chatOpen, setChatOpen] = useState(true)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setChatOpen(!chatOpen)
  }
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, inputValue])
      setInputValue("")
    }
  }
  const handleInputChange2 = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      {/* <Chatbot useChat={{chatOpen, toggleChat}} useMessages={{messages, handleSendMessage}} useInput={{inputValue, handleInputChange2}}/> */}
      <Dashboard />
    </>
  );

}
export default PageTest 