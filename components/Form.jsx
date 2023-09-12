import React from 'react'
import Link from 'next/link';

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world and let our imagination run wild with AI powered prompt
      </p>

      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea value={post.prompt} onChange={(e) => {setPost({...post, prompt: e.target.value})}} placeholder='Write your prompt here' required className='form_textarea'></textarea>
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag {' '}
            <span className='font-normal'>(#product, #web development, #idea)</span>
          </span>

          <input value={post.tag} onChange={(e) => {setPost({...post, tag: e.target.value})}} placeholder='#tags' required className='form_input'></input>
        </label>

        <div className='flex-end mx-3 mb-5 gap-4 '>
          <Link href="/" className='text-sm text-gray-500'>Cancel</Link>

          <button className="text-sm bg-primary-orange rounded-full text-white px-5 py-1.5" type='submit' disabled = {submitting} >
            {submitting ? `${type}...` : type}
          </button>

        </div>

      </form>
    </section>
  )
}

export default Form