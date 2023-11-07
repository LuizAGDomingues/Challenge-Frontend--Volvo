interface PaginationMobileProps {
  total: number
  onClick: (i: number) => void
}

function PaginationMobile({ total, onClick }: PaginationMobileProps) {
  return (
    <div className="btn-wrapper">
      {Array.from(total)}
    </div>
  )
}

export default PaginationMobile
