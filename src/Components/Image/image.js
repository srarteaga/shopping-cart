
const Image = ({imgUrl, brand, model}) => {
  return (
    <>
      <img 
        className="h-full" 
        src={imgUrl}
        alt={`${brand} - ${model}`}
      />
    </>
  )
}

export default Image