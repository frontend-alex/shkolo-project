import React, { useEffect, useState } from 'react'

const CreatePostController = () => {

    const [ data, setData ] = useState({
        heading: '',
        content: '',
    })

    const [ path, setPath ] = useState<string>('')

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

  return {data, onChange, path}
}

export default CreatePostController