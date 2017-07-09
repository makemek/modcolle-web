'use strict'

import { maintenanceCheck } from './kc-maintenance'
import { initModal } from './modal'

initModal()
window.onload = () => maintenanceCheck()
