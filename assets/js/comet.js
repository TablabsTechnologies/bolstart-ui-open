function cometChat(userUid) {
    CometChatWidget.init({
        "appID": "340656f35ffb3a9",
        "appRegion": "us",
        "authKey": "1a6ecc6e674777025192500c8e2ac21add157b5c"
    }).then(response => {
        // console.log("Initialization completed successfully");
        //You can now call login function.
        CometChatWidget.login({
            "uid": userUid
        }).then(response => {
            CometChatWidget.launch({
                "widgetID": "15a0eff2-e905-4090-a7a3-a22375523f85",
                "target": "#cometchat",
                "docked": "true",
                "alignment": "right", //left or right
                "roundedCorners": "true",
                "height": "20px",
                // "defaultID": 'superhero1', //default UID (user) or GUID (group) to show,
                "defaultType": 'user' //user or group
            });
        }, error => {
            // console.log("User login failed with error:", error);
            //Check the reason for error and take appropriate action.
        });
    }, error => {
        // console.log("Initialization failed with error:", error);
        //Check the reason for error and take appropriate action.
    });
    // });
}
function logOut() {

    CometChatWidget.logout().then(response => {
        this.cometChat("")
    });
}
