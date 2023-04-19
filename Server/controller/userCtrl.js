const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refreshtoken");
const validateMongoDbId = require("../utils/validateMongodbd");
const sendEmail = require("./mailCtrl");
const crypto = require("crypto");
const slugify = require("slugify");
const uniqid = require("uniqid");


//-------------Create a User--------------
const createUser = asyncHandler(async (req, res) => {
    /**
     * TODO:Get the email from req.body
     */
    const email = req.body.email;
    /**
     * TODO:With the help of email find the user exists or not
     */
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        /**
         * TODO:if user not found user create a new user
         */
        const newUser = await User.create(req.body);
        return res.json({
            newUser,
            success: 1,
            message: "Account Created successfully"
        });
    } else {
        /**
         * TODO:if user found then thow an error: User already exists
         */
        throw new Error("User Already Exists",
            message = "User Already Exists"
        );

    }
});

//-------------Create a Admin--------------//
const createAdmin = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const findAdmin = await User.findOne({ email: email });
    if (!findAdmin) {
        const role = req.body.role;
        const newAdmin = await User.create(req.body);
        res.json({
            newAdmin,
            success: 1,
            message: "Account Created successfully"
        })
    } else {
        throw new Error("User Already Exists",
            message = "User Already Exists"
        );
    }
});

//-------------Create a subAdmin--------------//
const createsubAdmin = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const findsubAdmin = await User.findOne({ email: email });
    if (!findsubAdmin) {
        const role = req.body.role;
        const newsubAdmin = await User.create(req.body);
        res.json({
            newsubAdmin,
            success: 1,
            message: "Account Created successfully"
        })
    } else {
        throw new Error(
            "User already Exists",
            message = "User Already Exists"
        );
    }
});

// Login a user
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            timezone: findUser?.timezone,
            mobile: findUser?.mobile,
            whatsappno: findUser.whatsappno,
            token: generateToken(findUser?._id),
            success: 1,
            message: "login successfully",
        });
    } else {
        throw new Error("Invalid Credentials",
            message = "Invalid Credentials"
        );
    }
});

//Login a admin
const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //checking for Admin already exists or not
    const findAdmin = await User.findOne({ email });
    if (findAdmin.role !== "admin") throw new Error("Not Authorised");
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findAdmin?._id);
        const updateuser = await User.findByIdAndUpdate(
            findAdmin.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            role: role?.admin,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            timezone: findUser?.timezone,
            mobile: findUser?.mobile,
            whatsappno: findUser.whatsappno,
            token: generateToken(findUser?._id),
            success: 1,
            message: " Admin login successfully",
        });
    } else {
        throw new Error("Invalid Credentials",
            success = 0,
            message = "Invalid Credentials"
        );
    }
});

//login a sub-admin
const loginsubAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //checking for SubAdmin already exists or not
    const findsubAdmin = await User.findOne({ email });
    if (findsubAdmin.role !== "subadmin") throw new Error("not Authorised");
    if (findsubAdmin && (await findsubAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findsubAdmin?._id);
        const updateuser = await User.findByIdAndUpdate(
            findsubAdmin.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            role: role?.subadmin,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            timezone: findUser?.timezone,
            mobile: findUser?.mobile,
            whatsappno: findUser.whatsappno,
            token: generateToken(findUser?._id),
            success: 1,
            message: " Wellcome Again in sub-Admin member",
        });
    } else {
        throw new Error("Invalid Credentials",
            success = 0,
            message = "You are not member of Sub-Admin"
        );
    }

});

//Geting a single User
const getauser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
            message: "This User You need",
        });
    } catch (error) {
        throw new Error(error);
    }
})

//Get all User
const getallUser = asyncHandler(async (req, res) => {

    try {
        const getallUser = await User.find()
        res.json(getallUser)
    } catch (error) {
        throw new Error(error);
    }
})

//handle refresh Token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error(" No Refresh token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("There is something wrong with refresh token");
        }
        const accessToken = generateToken(user?._id);
        return res.json({
            accessToken,
            success: 1,
            message: "Your accesstoken Active"
        });
    });
});


//Update User Password 
const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        retune.res.json(
            user,
            success = 0,
            message = "New Password is Created successfully"
        )

    }
});


//sending Reset Link for Password
const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found with this email");
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:8000/api/user/reset-password/${token}'>Click Here</>`;
        const data = {
            to: email,
            text: "Hey User",
            subject: "Forgot Password Link",
            htm: resetURL,
        };
        sendEmail(data);
        res.json(token);
    } catch (error) {
        throw new Error(error);
    }
});

//Block a user
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const blockusr = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
        res.json({
            blockusr,
            message: "Your account is Block,Due to doing unwant entery"
        });
    } catch (error) {
        throw new Error(error);
    }
});

//Unblock a User
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const unblockuser = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new: true,
            }
        );
        return res.json({
            unblockuser,
            message: "Your account is UnBlock Now"
        });
    } catch (error) {
        throw new Error(error);
    }
});

//Update a User data
const UpdatedUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const upadteUser = await User.findByIdAndUpdate(
            _id,
            {
                firstname: req?.body?.firstname,
                middlename: req?.body?.middlename,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                timezone: req?.body?.timezone,
                mobile: req?.body?.mobile,
                whatsappno: req?.body?.hatsappno,

            },
            {
                new: true,
            }
        );
        res.json(upadteUser)
    } catch (error) {
        throw new Error(error);
    }

})

//Reset Password
const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error(" Token Expired, Please try again later");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
});

//deleteing a User
const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
            success: 1,
            message: "User is Delete successfully by you"
        });
    } catch (error) {
        throw new Error(error);
    }
})

//logout User
const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Resfresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("resfreshToken", {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204); //forbidden
    };
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,

    });
    return res.sendStatus(
        204,
        message = "Your are Logout now"
    ); // forbidden
});

module.exports = { createUser, createAdmin, createsubAdmin, loginUserCtrl, loginAdmin, updatePassword, getauser, getallUser, UpdatedUser, handleRefreshToken, forgotPasswordToken, deleteaUser, resetPassword, logout, blockUser, unblockUser, loginsubAdmin };