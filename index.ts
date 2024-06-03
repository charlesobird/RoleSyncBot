import {config} from 'dotenv';
config({
    path: './.env'
});
const { BOT_TOKEN } = process.env;
import checkPermission from "./handlers/auth";
// pseudo for auth
/*
    if (command.AuthRequired) {
        const authorised = checkPermissions(userID)
        if (authorised) {
            command.execute()
        } else {
            display Ephemereal Rejection message
        }

    }
*/