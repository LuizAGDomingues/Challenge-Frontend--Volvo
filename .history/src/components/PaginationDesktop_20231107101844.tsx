import { IconButton } from 'vcc-ui'
import ChevronIcon from './icons/ChevronIcon'

function PaginationDesktop() {
  return (
    <div className="btn-wrapper">
      <button>
        <IconButton aria-label='Close' iconName='navigation-close' />
      </button>
      <button>
      </button>
    </div>
  )
}

export default PaginationDesktop
