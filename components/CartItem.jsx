import React from 'react'
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
    return (
        <div className='flex py-5 gap-3 md:gap-5 border-b'>
            <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
                <img src="/product-1.webp" alt="Product Image" />

            </div>

            <div className='w-full flex flex-col'>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
                        Jordan Retro 6 G
                    </div>

                    <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>
                        Men&apos;s Golf Shoes
                    </div>


                    <div className='text-sm md:text-md font-medium text-black/[0.5] mt-2'>
                        MRP : ₹ 19 695.00
                    </div>

                </div>

                <div className='text-sm md:text-md font-medium text-black/[0.5] block '>
                    Men&apos;s Golf Shoes
                </div>

                <div className='flex items-center justify-between mt-4'>

                    <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>

                        <div className='flex itesm-center gap-1'>
                            <div className='font-semibold'>Size:</div>
                            <select className='hover:text-black'>
                                <option value=''>Select Size</option>
                                <option value='1'>UK 6</option>
                                <option value='2'>Uk 6.5</option>
                                <option value='3'>UK 7</option>
                                <option value='4'>Uk 7.5</option>
                                <option value='5'>UK 8</option>
                                <option value='6'>UK 8.5</option>
                                <option value='7'>UK 9</option>

                            </select>
                        </div>

                        <div className='flex itesm-center gap-1'>
                            <div className='font-semibold'>Quantity</div>
                            <select className='hover:text-black'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                    </div>


                    <RiDeleteBin6Line className='cursor-pointer hover:text-black text-[16px] md:[20px]' />


                </div>

            </div>

        </div>
    )
}

export default CartItem