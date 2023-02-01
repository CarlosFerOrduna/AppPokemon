import {saveUserLS} from '../repository/UserRepository.js'
import {reloadLogin, reloadRegister} from '../events/user.js'

saveUserLS()
reloadLogin()
reloadRegister()