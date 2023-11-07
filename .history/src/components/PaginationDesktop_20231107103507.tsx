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
      <IconButton
        variant='o'
        onClick={onClickLeft}
        aria-label="esquerda"
        iconName="navigation-chevronback"
      />
      <IconButton
        onClick={onClickRight}
        aria-label="direita"
        iconName="navigation-chevronforward"
      />
    </div>
  )
}

export default PaginationDesktop
