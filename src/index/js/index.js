

import { maintenanceCheck } from './kc-maintenance'
import { initModal } from './modal'
import { loginByDmmAccount, loginByDmmSession } from './login'

initModal()
window.onload = () => maintenanceCheck()

// globally accessible
window.loginByDmmAccount = loginByDmmAccount
window.loginByDmmSession = loginByDmmSession
