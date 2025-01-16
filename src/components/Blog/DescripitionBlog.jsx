import React from 'react'

function DescripitionBlog() {
    return (
        <>
            <div className='font-light text-text1 mt-2'>
                <div>Our business consulting programs helps to break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working and which ones aren’t you can make the changes needed to get the best results out of your business.</div>
                <div className='my-3'>
                    Over the last 35 Years we made an impact that is strong & we have long way to go.
                </div>
                <div>
                    These are the concepts that shape our distinctive culture & differentiate us from others. They ture the unique spirit of our Firm guide the behaviors that enable us to deliver  the promises we make to our clients and our people.
                </div>
            </div>

            <div className='mt-3'>
                <div className='px-4'>
                    <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Go trans Values</div>
                    <hr className="w-9 border-2 border-orange mb-6" />
                </div>
                <div className='px-4'>
                    <div className='font-light text-text1 mb-2'>At Logisco our culture comes to life through three core values:</div>
                    <div className='ml-7'>
                        {[
                            'We seize opportunities to innovate and grow',
                            'We are one firm with a shared sense of purpose',
                            'We care about each other and the world around us',
                        ].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <img src="/images/true.svg" alt="Icon" />
                                <div className="ml-1 text-green1 text-base font-light">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex my-5 '>
                <div className='h-80 w-full bg-gray1 lg:mr-3'></div>
                <div className='h-80 w-full bg-gray2 lg:ml-3'></div>
            </div>

            <div className='my-8'>
                <div className='font-light text-text1 mb-2'>We guide our clients through difficult issues, bringing our insight and judgment to each situa- tion. Our innovative approaches create original solutions to our clients most complex domes-tic & multi jurisdic tional deals and disputes.</div>
                <div className='font-light text-text1 mb-2 '>By thinking on behalf of our clients every day, we anticipate what they want, provide what they need 
                & build lasting relationships. These are the concept that shape our distinctive culture & differentiate  us from others.</div>
            </div>

            <div className='bg-gray1 w-full h-96 flex justify-center items-center'>
                <div>
                    <img src="/images/play Button.svg" alt="" />
                </div>
            </div>

            <div className='my-8'>
                <div className='font-light text-text1 mb-2'>By thinking on behalf of our clients every day, we anticipate what they want, provide what they need & build lasting relationships. These are the concept that shape our distinctive culture & differentiate  us from others.</div>
                <div className='font-light text-text1 mb-2 '>We guide our clients through difficult issues, bringing our insight and judgment to each situa- tion. Our innovative approaches create original solutions to our clients</div>
            </div>
        </>
    )
}

export default DescripitionBlog