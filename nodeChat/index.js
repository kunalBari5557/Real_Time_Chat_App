const express = require('express');
const webSocket = require('ws');
const bodyParser = require('body-parser');
const { connectDatabase } = require('./src/config/database');
const Group = require('./src/models/group');
const Messages = require('./src/models/messages');

const cors = require('cors');

const env = require('dotenv').config();
const app = express();

const server = require('http').createServer(app);

const wss = new webSocket.Server({
  server: server
});

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use(bodyParser.json({
  extended: false
}));

app.use('/user', require('./src/routes/userRoute'));
app.use('/group', require('./src/routes/groupRoute'));

wss.on('connection', (ws, req) => {

  ws.on('message', async (message) => {

    let obj = JSON.parse(message);
    let action = obj.action;
    let groupId = obj.groupId;
    let userId = obj.userId;

    if (action === "groupList") {

      const groups = await Group.find({
        _id: groupId
      })

      const lastCandidateMsgCount = await Messages.count({
        unread: 1,
        groupId: groupId,
        userId: userId

      });

      ws.send(JSON.stringify({
        "action": action,
        "groups": groups,
        "lastCandidateMsgCount": lastCandidateMsgCount
      }));

    } else if (action === "group_all_msg") {

      const messages = await Messages.find({
        'groupId': obj.groupId
      })

      const lastCandidateMsgCount = await Messages.count({
        unread: 1,
        groupId: groupId,
        userId: userId
      });

      const update = {
        unread: 0
      };

      // Use updateOne to update a single document that matches the filter
      const updatedMessage = await Messages.updateMany({ groupId: groupId,
        userId: userId}, update);


      wss.clients.forEach((client) => {

        client.send(JSON.stringify({ "action": action, "messages": messages, 'groupId': obj.groupId, lastCandidateMsgCount: lastCandidateMsgCount }));
      });

    } else if (action === "users_send_msg") {

      const message = await Messages.create({
        'userId': obj.userId,
        'groupId': obj.groupId,
        'unread': 1,
        'messages': obj.messages
      });

      const lastMsg = await Messages.findOne({
        attributes: ['messages', 'userId', 'groupId'],
        where: {
          groupId: obj.groupId,
          userId: obj.userId,
        },
        order: [
          ['id', 'DESC'],
        ],
      });

      ws.send(JSON.stringify({ "action": action, "lastMsg": lastMsg, }));

    }

  });

});

connectDatabase()
  .then(() => {
    // Start your Express server
    server.listen(process.env.APP_PORT, () => {
      console.log(`Server is running on port ${process.env.APP_PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
  });

