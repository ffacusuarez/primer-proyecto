"use client"

export default function Button(props) {
    return(
        <>
            <button onclick={props.onClick} className={props.className} type={props.type}/>
        </>
    )
}