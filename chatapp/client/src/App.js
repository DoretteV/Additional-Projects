import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { TextField } from "@mui/material";

function App() {
  const [socket, setSocket] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setSocket(io('http://localhost:4000'))
  }, []);

  function handleForm(e) {
    e.preventDefault();
    socket.emit("send-message", { message });
    setMessage("");
  }

  return (
    <div>
      <Box component="form" onSubmit={handleForm}>
        <TextField 
        size="small" 
        label="Write your message" 
        variant="standard"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="text" type="submit">Send</Button>
      </Box>
    </div>
  );
}


