const Memory = ({storages, handleChange, validateStorage}) => {

  return (
    <div>
      <div className="text-base text-center">Select a memory capacity </div>
      <div className="w-full px-4 flex justify-center"> 
        {storages.map((storage) => (
          <div className="relative flex items-center m-1" key={storage.code}>
            <input 
              type="radio" 
              id={`memory-${storage.code}`}
              name="storageCode"
              className="peer absolute  invisible"
              value={storage.code}
              defaultChecked={storages.length === 1}
              onChange={handleChange}
            />
            <label 
              htmlFor={`memory-${storage.code}`}
              className="select-none rounded cursor-pointer border-2 p-2 font-bold transition-colors duration-200 ease-in-out peer-checked:border-gray-900 peer-checked:text-gray-900"
              >
                {storage.name}
              </label>
          </div>
        ))}
      </div>
      {!validateStorage && <div className="text-red-600 text-center">You must select a storage.</div>}
    </div>
  )
}

export default Memory