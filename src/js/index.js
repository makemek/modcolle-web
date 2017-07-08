'use strict'

import { maintenanceCheck } from './kc-maintenance'
import './jitter-fix'

window.onload = () => maintenanceCheck()
