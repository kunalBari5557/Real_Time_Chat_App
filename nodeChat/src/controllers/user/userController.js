const Joi = require('joi');
const User = require('../../models/user.js');
const Group = require('../../models/group.js');

module.exports.add = async(req, res) => {

    let name = req.body.name;
    let groupId = req.body.groupId;

    const schema = Joi.object({
        name: Joi.string().required(),
        groupId: Joi.string().required(),

    });

    const result = schema.validate({
        name: name,
        groupId : groupId
    });
    if (result.error) {

        return res.status(400).json({
            'msg': result.error.details[0].message
        });

    } else {

        const groupIds = await Group.findOne({
            _id: groupId
        })

        if(groupIds){

            const user = await User.create({
                name: name,
                groupId : groupId
            }).then(function(resp) {
    
                return res.status(200).json({
                    msg:'User created successfully!',
                    resp:resp
                });
                
            }).catch(function(err) {
                return res.status(400).json({
                    msg: err,
                });
        
            });

        }else{
            return res.status(400).json({
                msg:'group not found!',
            });
        }
      
    }

}