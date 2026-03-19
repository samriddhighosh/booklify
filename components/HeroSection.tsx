import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const HeroSection = () => {
  return (
    <section className='wrapper pt-28 mb-10 md:mb-16'>
        <div className='library-hero-card'>
            <div className='library-hero-content'>
                <div className='library-hero-text'>
                    <h1 className='library-hero-title'>Your Library</h1>
                    <p className='library-hero-description'>
                        Convert your books into iteractive AI conversations. <br className='hidden md:block'/> Listen, learn, and discuss your favotite reads.
                    </p>
                    <Link href="/books/new" className='library-cta-primary mt-4'>
                        <span className='text-2xl mr-2'>+</span>
                        Add new book
                    </Link>
                </div>
                <div className='library-hero-illustration-desktop'>
                    <Image
                        src="/assets/hero-illustration.png"
                        alt="Vintage books and a globe"
                        width={400}
                        height={400}
                        className='object-contain'
                    />
                </div>
                <div className='library-hero-illustration'>
                    <Image
                        src="/assets/hero-illustration.png"
                        alt="Vintage books and a globe"
                        width={300}
                        height={300}
                        className='object-contain'
                    />
                </div>
                <div className='library-steps-card min-w-[260px] max-w-[280px] z-10 shadow-soft-md'>
                    <ul className='space-y-6'>
                        <li className='library-step-item'>
                            <div className='w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-200 flex items-center justify-center font-medium text-lg'>1</div>
                            <div className='flex flex-col'>
                                <h3 className='library-step-title text-lg font-bold'>Upload PDF</h3>
                                <p className='library-step-desription text-gray-500'>Add you book</p>
                            </div>
                        </li>    
                        <li className='library-step-item'>
                            <div className='w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-200 flex items-center justify-center font-medium text-lg'>
                                2</div>
                            <div className='flex flex-col'>
                                <h3 className='library-step-title text-lg font-bold'>AI processing</h3>
                                <p className='library-step-desription text-gray-500'>We analyze the content</p>
                            </div>
                        </li>    
                        <li className='library-step-item'>
                            <div className='w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-200 flex items-center justify-center font-medium text-lg'>1</div>
                            <div className='flex flex-col'>
                                <h3 className='library-step-title text-lg font-bold'>Voice Chat</h3>
                                <p className='library-step-desription text-gray-500'>Discuss with AI</p>
                            </div>
                        </li>    
                    </ul>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default HeroSection