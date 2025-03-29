import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
    };

    const isTabletorDesktop = useMediaQuery({query: '(min-width: 768px)'})

    return (
    <nav style={{backgroundColor: !isTabletorDesktop ? 'rgba(255, 255, 255, 0.4)' : "white", backdropFilter: 'blur(5px)' }} className=" backdrop-blur-[5px]  py-4 md:py-4 px-6 mx-10 md:mx-20 sticky top-2 rounded-[50px]">
        <div className='relative '>
            <div className="flex justify-between items-center">
            <img
            className="w-[97px] md:w-[170px]"
            src="https://payaza.africa/_nuxt/new-payaza-logo.BpME1d4t.svg"
            alt="Payaza Logo"
            />
            <ul className='hidden lg:flex gap-4 text-sm'>
                <li className='cursor-pointer'>Products Suite</li>
                <li className='cursor-pointer'>Resources</li>
                <li className='cursor-pointer'>Pricing</li>
                <li className='cursor-pointer'>Developers</li>
                <li className='cursor-pointer'>Support</li>
            </ul>
            <ul className='hidden lg:flex text-sm gap-4'>
                <li>
                    <button className='border rounded-full py-3 px-4 border-[#451166] text-[#451166]'>Sign Up</button>
                </li>
                <li>
                    <button className='border bg-[#451166] text-white rounded-full py-3 px-4 border-[#451166]'>Login</button>
                </li>
            </ul>
            {/* Hamburger Menu */}
            <div
                className="flex flex-col gap-1 cursor-pointer lg:hidden"
                onClick={handleMenuToggle}
            >
              {/* Top bar */}
                <motion.div
                className="w-6 h-[2px] bg-black"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                />
              {/* Middle bar */}
                <motion.div
                className="w-6 h-[2px] bg-black"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                />
              {/* Bottom bar */}
                <motion.div
                className="w-6 h-[2px] bg-black"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                />
            </div>
            {/* Animated Menu Items */}
            </div>
            <AnimatePresence>
                {isOpen && (
                <motion.div
                    className="absolute top-12 md:top-20 right-0 bg-white w-[300px] shadow-lg rounded-md py-4 px-6 flex flex-col gap-2"
                    initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {navlink.map((list, index) => (
                        <motion.a key={index} className="text-black hover:text-[#451166]" href={list.link} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                        {list.name}
                        </motion.a>
                    ))}
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    </nav>
    );
};

export default Navbar;

const navlink = [
    { name: 'Product Suite', link: '#' },
    { name: 'Resources', link: '#' },
    { name: 'Pricing', link: '#' },
    { name: 'Developers', link: '#' },
    { name: 'Support', link: '#' },
]
