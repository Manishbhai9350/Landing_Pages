

const LineThroughPrice = ({linePrice=0,price=0}) => {
  return (
    <div className='w-full py-2 flex justify-evenly items-center'>
        <h1 className="text-sm line-through text-[#111] opacity-70">{linePrice}₹</h1>
        <h1 className="text-md ">{price}₹</h1>
    </div>
  )
}

export default LineThroughPrice