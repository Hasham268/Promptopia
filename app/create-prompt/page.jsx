"use client"
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const page = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    })
    
    const {data: session} = useSession();
    const Router = useRouter();

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try{
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    userId: session?.user.id
                })

            })

            if (response.ok){
                Router.push('/');
            }

        }catch(e){
            console.log(e);
        }finally{
            setSubmitting(false);
        }
    }

  return (
    
    <Form
        type = "Create"
        post = {post}
        setPost = {setPost}
        submitting = {submitting}
        handleSubmit = {createPrompt}

    />
  )
}

export default page