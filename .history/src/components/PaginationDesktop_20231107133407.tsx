import { Flex, IconButton } from 'vcc-ui'

interface PaginationDesktopProps {
  onClickLeft: () => void
  onClickRight: () => void
}

function PaginationDesktop({
  onClickLeft,
  onClickRight,
}: PaginationDesktopProps) {
  return (
    <Flex
      extend={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 0,
      }}
    >
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
    </Flex>
  )
}

export default PaginationDesktop
