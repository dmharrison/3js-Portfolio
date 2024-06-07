import React,{useState, useRef} from 'react'
import emailjs from '@emailjs/browser'



const Contact = () => {
  const formRef = useRef(null)
  const [form,setForm]=useState({name:"", email:"",message:""})
  const [isLoading, setIsLoading]=useState(false)
  
  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value })
  };

  const handleSubmit =(e)=> {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name: "Daniel",
        from_email: form.email,
        to_email: "dmharrison2014@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false);
      setForm({name:"",email:"",message:""});
    }).catch (()=>{
      setIsLoading(false);
      console.log(error);

    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div>
        <h1 className='head-text'>Let's Connect</h1>
        <form
        ref={formRef} 
        className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}
        >
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
            <input 
            type="email" 
            name="email" 
            className='input'
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
