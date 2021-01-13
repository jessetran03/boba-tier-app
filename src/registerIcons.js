import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCheck, faAngleDown, faAngleUp, faSpinner, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

export default function registerIcons() {
  library.add(
    faStar,
    farStar,
    faCheck,
    faAngleDown,
    faAngleUp,
    faSpinner,
    faBars,
    faUser,
  )
}
