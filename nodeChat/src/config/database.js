const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/Chat";

// Define your Mongoose models
const Group = require("../models/group");
const User = require("../models/user");

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoose Connected");

    const groupData = ["IT", "Sales", "HR"];

    for (const groupName of groupData) {
      // Try to find a group with the same name
      const existingGroup = await Group.findOne({ name: groupName });

      if (!existingGroup) {
        // If the group with the same name doesn't exist, create and save it
        const group = new Group({ name: groupName });
        await group.save();
      } else {
      }
    }

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = {
  connectDatabase,
  Group,
  User,
};

