import users from '../data'

class UserController implements IController {
     read(filter: any): { email: string }[] {
        return users.filter(u => u.email != "avi@gmail.com")
    }

}

export default UserController