import { MouseEvent } from 'react'
import { IconButton } from 'vcc-ui'

function PaginationDesktop() {
  return (
    <div className="btn-wrapper">
      <button>
        <IconButton
          aria-label="esquerda"
          iconName="navigation-close"
          disabled
        />
      </button>
      <button>
        <IconButton aria-label="direita" iconName="navigation-close" disabled onClick={function (event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
          throw new Error('Function not implemented.')
        } } />
      </button>
    </div>
  )
}

export default PaginationDesktop
