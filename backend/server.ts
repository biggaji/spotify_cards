// initialize and start the server
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});