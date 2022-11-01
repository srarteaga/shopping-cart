const Memory = ({colors, handleChange, validateColor}) => {

  return (
    <div>
      <div className="text-base text-center">Select a color </div>
      <div className="w-full lg:px-4 sm:flex sm:justify-center"> 
        {colors.map((color) => (
          <div className="relative sm:flex sm:items-center m-1" key={color.code}>
            <input 
              type="radio" 
              id={`color-${color.code}`}
              name="colorCode"
              className="peer absolute invisible"
              value={color.code}
              defaultChecked={colors.length === 1} 
              onChange={handleChange}
            />
            <label 
              htmlFor={`color-${color.code}`}
              className="flex items-center cursor-pointer select-none rounded border-2 p-2 text-sm text-center transition-colors duration-200 ease-in-out peer-checked:border-gray-900 peer-checked:text-gray-900"
              >
                <div 
                className="h-10 w-10 mr-2 rounded border-2 rounded ring-1 ring-inset ring-white/10"
                style={{backgroundColor : color.name.toLowerCase()}}
                >
                </div>
                {color.name}
              </label>
          </div>
        ))
        }
      </div>
      {!validateColor && <div className="text-red-600 text-center">You must select a color.</div>}
    </div>
  )
}

export default Memory