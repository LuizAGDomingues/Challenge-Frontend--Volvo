import { IconButton } from 'vcc-ui'

interface PaginationDesktopProps {
  onClickLeft: () => void
  onClickRight: () => void
}

function PaginationDesktop({
  onClickLeft,
  onClickRight,
}: PaginationDesktopProps) {
  return (
    <div className="btn-wrapper">
      <button>
        <IconButton
          onClick={onClickLeft}
          aria-label="esquerda"
          iconName="navigation-close"
          disabled
        />
      </button>
      <button>
        <IconButton onClick={onClickLeft} aria-label="direita" iconName="navigation-close" disabled />
      </button>
    </div>
  )
}

export default PaginationDesktop
