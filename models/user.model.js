module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                userid: Number,
                email: String,
                first_name: String,
                last_name: String,
                username: String,
                contact: String,
                password: String,
                role: { type: String, default: 'user' }, /*types: admin ,user*/
                uuid: String,
                accesstoken: String,
                isLoggedIn: Boolean
            },
            { timestamps: true }
        )
    );
}
