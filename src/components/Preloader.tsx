import { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations'

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (
    <div className="font-poppins preloader">
        <div className="image-container w-48 h-48 sm:w-96 sm:h-96 texts-container">
            <img className="logo" src="https://payaza.africa/_nuxt/new-payaza-logo.BpME1d4t.svg" alt="Payaza Logo"/>
            <div className="gradient-overlay"></div>
        </div>
    </div>
    )
}

export default Preloader