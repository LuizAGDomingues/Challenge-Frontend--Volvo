import { IconButton } from 'vcc-ui'
import styles from '../../public/css/'

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
        variant="outline"
        onClick={onClickLeft}
        aria-label="esquerda"
        iconName="navigation-chevronback"
      />
      <IconButton
        variant="outline"
        onClick={onClickRight}
        aria-label="direita"
        iconName="navigation-chevronforward"
      />
    </div>
  )
}

export default PaginationDesktop
