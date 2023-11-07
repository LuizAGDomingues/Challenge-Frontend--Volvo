import { IconButton } from 'vcc-ui'
import ChevronIcon from './icons/ChevronIcon'

function PaginationDesktop() {
  return (
    <div className="btn-wrapper">
      <button>
        <IconButton aria-label='esquerda' iconName='navigation-close' disabled />
      </button>
      <button>
        <IconButton aria-label='direita' iconName='navigation-close' disabled />
      </button>
    </div>
  )
}

export default PaginationDesktop
