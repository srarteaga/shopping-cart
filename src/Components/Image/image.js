
const Image = ({imgUrl, brand, model}) => {
  return (
    <>
      <img 
        className="max-h-48" 
        src={imgUrl}
        alt={`${brand} - ${model}`}
      />
    </>
  )
}

export default Image