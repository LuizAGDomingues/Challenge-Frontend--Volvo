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
    <Flex
        extend={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0,
        }}
      >

      </Flex>
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
  )
}

export default PaginationDesktop
