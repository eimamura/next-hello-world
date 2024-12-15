import React from 'react'

async function page() {
    const data = await fetch('http://localhost:8000')
    const res = await data.json()
    console.log('aaa')
    console.log(res)
    return (
        <>
            <div>page</div>
            <span>
                {res.message}
            </span>
        </>
    )
}

export default page