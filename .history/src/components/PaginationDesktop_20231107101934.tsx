import { IconButton } from 'vcc-ui'

function PaginationDesktop() {
  return (
    <div className="btn-wrapper">
      <button>
        <IconButton
        onClick={}
          aria-label="esquerda"
          iconName="navigation-close"
          disabled
        />
      </button>
      <button>
        <IconButton aria-label="direita" iconName="navigation-close" disabled />
      </button>
    </div>
  )
}

export default PaginationDesktop
