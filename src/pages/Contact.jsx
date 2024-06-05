import React,{useState} from 'react'

const Contact = () => {
  const [form,setForm]=useState({name:"", email:"",message:""})
  const handleChange=()=>{};

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div>
        <h1 className='head-text'>Let's Connect</h1>
        <form className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input type="text" name="name" className='input'
            placeholder='User'
            required
            value={form.name}
            onChange={handleChange} />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input type="email" name="Email" className='input'
            placeholder='user@email.com'
            required
            value={form.email}
            onChange={handleChange} />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea name="message"
            rows={4}
            className='textarea'
            placeholder='Let me know how I can help'
            required
            value={form.message}
            onChange={handleChange} />
          </label>
          <button 
          type='submit'
          className='btn'
          >Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
