import ProductdetailsCarousel from '@/components/ProductdetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';




const ProductDetails = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* left  start*/}
                <div
                    className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]"
                >

                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductdetailsCarousel />
                    </div>

                    {/* left  end*/}


                    {/* right  start*/}

                    <div className="flex-[1] py-3">

                        <div className="text-[34px] font-semibold mb-2">
                            Jordan Retro 6 G
                        </div>

                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoe
                        </div>

                        <div className='text-lg font-semibold'>
                            MRP : ₹ 19,675
                        </div>

                        <div className='text-md font-medium text-black/[0.5]'>
                            incl. of taxes
                        </div>

                        <div className='text-md front-medium text/[0.5] mb-20'>
                            {`(All includes all applicable duties)`}
                        </div>


                        {/* Product Size  */}
                        <div className='mb-10'>
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black/[0.5]'>
                                    Select Guide
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 
                                    font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium hover:border-black cursor-pointer'>
                                    UK 6.5
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium hover:border-black cursor-pointer'>
                                    UK 7
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium hover:border-black cursor-pointer'>
                                    UK 7.5
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium hover:border-black cursor-pointer'>
                                    UK 8
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium hover:border-black cursor-pointer'>
                                    UK 8.5
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium hover:border-black cursor-pointer'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium hover:border-black cursor-pointer'>
                                    UK 9.5
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 10
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 10.5
                                </div>
                                <div className='border rounded-md text-center py-3 
                                    font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 11
                                </div>
                            </div>


                            <div className='text-red-600 mt-1'>
                                Size selcetion is requried
                            </div>


                        </div>

                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"

                        >
                            Add to Cart
                        </button>

                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>

                        <div>
                            <div className='text-lg font-bold mb-5'>
                                Product Details
                            </div>

                            <div className='text-md mb-5'>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            </div>
                            <div className='text-md mb-5'>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            </div>

                        </div>

                    </div>

                    {/* right  end*/}
                </div>
                <RelatedProducts />
            </Wrapper>



        </div>
    )
}

export default ProductDetails;