const express=require("express");
const router=express.Router();
const zod=require("zod");
const {User}=require("../db");
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");
const {authMiddleware}=require("../middleware");

const signUpBody=zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

router.post("/signup", async (req, res)=>{
    const {success}=signUpBody.safeParse(req.body);
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

const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

router.post("/signin", async (req, res)=>{
    const {success} = signInBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Invalid inputs"
        });
    }

    const ifUserExists=await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(!ifUserExists){
        return res.status(411).json({
            message: "Check username or password"
        });
    }

    const token=jwt.sign({
        userId: ifUserExists._id
    }, JWT_SECRET);

    return res.json({
        message: "Logged in successfully",
        token: token,
    });
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

router.put("/", authMiddleware, async (req, res)=>{
    
})

module.exports=router