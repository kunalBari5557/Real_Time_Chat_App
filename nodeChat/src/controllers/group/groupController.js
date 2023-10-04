const Group = require('../../models/group.js');

module.exports.index = async(req, res) => {

    const groups = await Group.find();
    return res.status(200).json({
        "groups":groups
    })


}