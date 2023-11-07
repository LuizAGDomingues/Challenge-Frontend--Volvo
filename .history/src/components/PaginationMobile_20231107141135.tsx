interface PaginationMobileProps {
  total: number,
  onClick: (i: number) => void
}

function PaginationMobile({total, onClick}: PaginationMobileProps) {
  return <div>PaginationMobile</div>
}

export default PaginationMobile
