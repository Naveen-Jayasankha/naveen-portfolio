import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <Link href="/">Naveen Jayasankha</Link>
            <Link href="/">Say hello</Link>
        </Layout>



    </footer>
  )
}

export default Footer