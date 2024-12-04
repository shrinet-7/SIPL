import React from 'react'
import Form from '../components/Form'
import Head from 'next/head'
import TransitionEffect from '../components/TransitionEffect'

const contact = () => {
  return (
    <>
      <Head>
        <title>SIPL | Contact Us</title>
        <meta name="description" content='any description' />
      </Head>

      <TransitionEffect />

      <article className='relative w-full flex flex-col items-center justify-center space-y-8 py-8 sm:py-0 '>
        <div className="flex flex-col items-center justify-center space-y-8 w-full sm:w-3/4">
          <h1 className='font-semibold text-center text-8xl capitalize mb-4 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl dark:text-light'>
            “Your Next Move Starts with a Conversation!”
          </h1>
          <p className='text-center font-light txet-sm xs:text-base dark:text-light'>
            “Hey there! We’re thrilled you’re here. Whether you have questions, need assistance, or just want to say hello, we’d love to hear from you!”          </p>
        </div>

        <Form />

      </article>
    </>

  )
}

export default contact
