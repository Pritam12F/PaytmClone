const express=require("express");
const router=express.Router();
const zod=require("zod");
const {User}=require("../db");

const userSchema=zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

router.post("/signup", async (req, res)=>{
    const {success}=userSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    const tryFindUser = await User.findOne({
        username: req.body.username
    });

    if(tryFindUser){
        return res.status(411).json({
            message: "Email already taken"
        });
    }

    await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    res.json({
        message: "User created successfully",
    })
});

module.exports=router