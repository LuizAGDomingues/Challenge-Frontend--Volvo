interface PaginationMobileProps {
  total: number
  onClick: (i: number) => void
}

function PaginationMobile({ total, onClick }: PaginationMobileProps) {
  return (
    <button className="btn-wrapper"></button>
  )
}

export default PaginationMobile
