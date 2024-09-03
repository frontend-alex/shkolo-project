import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CreatePostController = () => {

    const [ data, setData ] = useState({
        heading: '',
        content: '',
    })

    const [ path, setPath ] = useState<string>('')

    const { heading, content } = data

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    useEffect(() => {
        setPath(window.location.pathname)
    }, [])


    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(heading.length < 3 && content.length < 5) {
            return toast.error('Heading and the content should be above 3-5 characters!')
        }
    }
    

  return {data, onChange, path, onSubmit}
}

export default CreatePostController