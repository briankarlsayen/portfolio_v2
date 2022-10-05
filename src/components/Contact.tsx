const Contact = () => {
  return (
    <section id='contact' className='bg-slate-100'>
      <div className="min-h-screen max-w-2xl flex flex-col mx-auto justify-center">
        <h4 className="uppercase text-sm">Contact</h4> 
        <h2 className="text-3xl pb-6">Get in touch</h2>
        <p>If you want to connect with me, leave your email here</p>
        <p>and I will contact you ASAP.</p>
        <form className="flex gap-2 pt-6">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type='text' placeholder='email' />
          <button className='py-2 px-4 text-center bg-blue-300 rounded'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact