"use client";
import React, {useState} from 'react';
import {HiOutlineMenuAlt2, HiUserCircle} from 'react-icons/hi';
import Link from "next/link";
import LogoImg from '@/../public/assets/images/logo.svg';
import {GoQuestion} from 'react-icons/go';
import {Modal} from 'flowbite-react';
import {
    HiOutlineArrowRightOnRectangle,
    HiOutlineBell,
    HiOutlineCircleStack,
    HiOutlineCreditCard,
    HiOutlineHome,
    HiOutlineIdentification,
    HiOutlineQuestionMarkCircle,
    HiOutlineShieldCheck,
    HiOutlineCheckCircle,
    HiComputerDesktop,
    HiDeviceTablet
} from 'react-icons/hi2';
import {LuDot} from "react-icons/lu";
import {MdOutlineLaptopMac} from "react-icons/md";
import Image from "next/image";

const Page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsMenuOpen((prev: boolean) => !prev);
    };

    // 👇️ Toggle class on click Show And Hide Account (Icon)
    const [isAccountVisible, setAccountVisible] = useState<boolean>(false);
    const handleAccountClick = () => {
        const account: HTMLElement | null = document.getElementById('account_da_dropdown_menu');
        if (account) {
            if (isAccountVisible) {
                account.classList.remove('show-account-da-dropdown-menu');
            } else {
                account.classList.add('show-account-da-dropdown-menu');
            }
            setAccountVisible((prev: boolean) => !prev);
        }
    };

    const currentYear: number = new Date().getFullYear()

    // Name change popup
    const [openNameModal, setOpenPasswordModal] = useState<boolean>(false);

    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB]">
                <nav
                    className="fixed flex items-center h-[50px] top-0 z-50 w-full bg-white border-b border-gray-200">
                    <div className="px-3 w-full py-2 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button onClick={toggleSidebar} type="button"
                                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                    <span className="sr-only">Open sidebar</span>
                                    <HiOutlineMenuAlt2 className="w-6 h-6"/>
                                </button>
                                <Link href="/" className="flex ms-2 gap-2 md:me-24">
                                    <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                    <span
                                        className="font-[500] text-[18px] self-center whitespace-nowrap">Account</span>
                                </Link>
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <div className="flex items-center gap-4">
                                        <Link href='#' className="flex items-center gap-1">
                                            <GoQuestion/>
                                            <h4 className="text-[14px]">Help</h4>
                                        </Link>

                                        <div className="five">
                                            <div className="dropdown inline-block relative">
                                                <div onClick={handleAccountClick}
                                                     className="text-center mt-2 cursor-pointer text-gray-700 hover:text-primary transition relative">
                                                    <HiUserCircle className="text-primary" size={35}/>
                                                </div>

                                                <div id="account_da_dropdown_menu"
                                                     className="account-dropdown-menu absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                                    <div className="container">
                                                        <div className="px-3 py-3" role="none">
                                                            <Link href='/' className="flex box items-center gap-3">
                                                                <div className="one">
                                                                    <HiUserCircle className="w-10 h-10 text-primary"/>
                                                                </div>
                                                                <div className="two">
                                                                    <h4 className="text-[14px] font-[500]">John Doe</h4>
                                                                    <p>@janedoe</p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <hr/>
                                                        <ul className="py-2" role="none">
                                                            <li>
                                                                <Link href='/'
                                                                      className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                                    <HiOutlineQuestionMarkCircle size={25}/>
                                                                    <div className="text-[14px]"
                                                                         role="menuitem">Help & Support
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='/'
                                                                      className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                                    <HiOutlineArrowRightOnRectangle size={25}/>
                                                                    <div className="text-[14px]"
                                                                         role="menuitem">Sign Out
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Sidebar */}
                <aside id="logo-sidebar"
                       className={`fixed top-0 ${isMenuOpen ? 'left-0' : '-left-[1000px]'} sm:left-0 z-40 w-64 h-screen pt-0 transition-all duration-300 ease-in-out border-r border-gray-200 sm:translate-x-0`}
                       aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 pt-20 overflow-y-auto bg-white">
                        <ul className="space-y-1 font-medium">
                            <li>
                                <div
                                    className="flex items-center text-[14px] p-2 rounded-lg hover:bg-gray-100 group">
                                    <HiUserCircle size={30}
                                                  className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3 font-semibold">John Doe</span>
                                </div>
                            </li>

                            <hr/>
                            <li>
                                <Link href='/'
                                      className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineHome size={25}
                                                   className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link href='/'
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineIdentification size={25}
                                                             className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Personal Information</span>
                                </Link>
                            </li>

                            <li>
                                <Link href='/'
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineShieldCheck size={25}
                                                          className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3 font-semibold">Security</span>
                                </Link>
                            </li>

                            <li>
                                <Link href='/'
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineCreditCard size={20}
                                                         className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Billing</span>
                                </Link>
                            </li>

                            <li>
                                <Link href='/'
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineBell size={20}
                                                   className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Notification</span>
                                </Link>
                            </li>

                            <li>
                                <Link href='/'
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineCircleStack size={20}
                                                          className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Data & Privacy</span>
                                </Link>
                            </li>
                        </ul>

                        <div className="bottom-div absolute left-6 bottom-10">
                            <div className="flex space-x-2">
                                <Link href='/' className="text-[12px] hover:text-primary">Terms</Link>
                                <Link href='/' className="text-[12px] hover:text-primary">Privacy</Link>
                                <Link href='/' className="text-[12px] hover:text-primary">Support</Link>
                            </div>
                            <h6 className="mt-1 text-gray-500 text-[12px]">
                                © {currentYear} Nosres Inc. All rights reserved
                            </h6>
                        </div>
                    </div>
                </aside>

                {/* Dashboard Body */}
                <div className="p-4 sm:ml-64 md:ml-80 bg-gray-50">
                    <div className="pt-8 pb-2 flex items-center gap-1">
                        <HiOutlineShieldCheck
                            size={25}
                            className="text-gray-500 w-7"/>
                        <h6>Security</h6>
                    </div>
                    <hr/>
                    {/* Security */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div
                            className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            <div className="head mb-2">
                                <h6>Password</h6>
                            </div>
                            <hr/>
                            <div className="mt-4 box">
                                <p>
                                    Manage your password.
                                </p>
                            </div>

                            <div
                                className="box mt-6 rounded flex items-start justify-between bg-white">
                                <div className="left">
                                    <h6 className="text-[14px]">Last Changed</h6>
                                    <p className="mt-0">January 22, 2024</p>
                                </div>
                                <div onClick={() => setOpenPasswordModal(true)} className="right">
                                    <button className="text-primary text-[14px]">Change Password</button>
                                </div>
                            </div>
                            {/* Password change Pop-Up Start */}
                            <Modal size="lg" dismissible show={openNameModal}
                                   onClose={() => setOpenPasswordModal(false)}>
                                <Modal.Header>
                                    <h4 className="text-[16px]">
                                        Change Password
                                    </h4>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="modal_body box">
                                        <p className="pb-4">
                                            Your password must be at least eight characters long, including
                                            both upper and lowercase letters, as well as numbers. Please
                                            choose a strong password that you haven’t used on other websites
                                            and is not easily guessable by others.
                                        </p>
                                        <h4 className="text-[14px]">
                                            Current Password
                                        </h4>
                                        <input
                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                            type="text"
                                            placeholder="******"
                                        />

                                        <h4 className="text-[14px] mt-6">
                                            New Passord
                                        </h4>
                                        <input
                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                            type="text"
                                            placeholder="******"
                                        />

                                        <h4 className="text-[14px] mt-6">
                                            Confirm New Password
                                        </h4>
                                        <input
                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                            type="text"
                                            placeholder="******"
                                        />
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="flex w-full items-center justify-between">
                                        <button onClick={() => setOpenPasswordModal(false)}
                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                        </button>
                                        <button onClick={() => setOpenPasswordModal(false)}
                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                        </button>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                            {/* Password change Pop-Up End */}
                        </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div
                            className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            <div className="head mb-2">
                                <h6>Two-Factor Authentication</h6>
                            </div>
                            <hr/>
                            <div className="mt-4 box">
                                <p>
                                    Manage two-factor authentication to keep your account secure.
                                </p>
                            </div>

                            <div
                                className="box mt-6 rounded flex items-start justify-between bg-white">
                                <div className="left">
                                    <h6 className="text-[14px]">
                                        Manage Two-Factor Authentication.
                                    </h6>
                                </div>
                                <div className="right">
                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                         <span
                                             className="me-3 text-[14px] text-[#828D9E]">OFF</span>
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div
                                            className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                        <span
                                            className="ms-3 text-[14px] text-[#828D9E]">ON</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TConnected Devices */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div
                            className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            <div className="head mb-2">
                                <h6>Connected Devices</h6>
                            </div>
                            <hr/>
                            <div className="mt-4 box">
                                <p>
                                    You are signed in to your Nosres Account on these devices below.
                                </p>
                            </div>

                            <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                <div className="left">
                                    <h6 className="text-[14px] flex items-center gap-2">
                                        <HiComputerDesktop size={25}/>
                                        PC, Windows, Chrome
                                    </h6>
                                    <div className="ml-8 flex items-center mt-1 text-[12px] text-[#828D9E]">
                                        <h4>
                                            Just now
                                        </h4>
                                        <h4 className="flex items-center gap-0">
                                            <LuDot size={20}/>
                                            United States
                                        </h4>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="flex items-center gap-1 text-green-400 ">
                                        <HiOutlineCheckCircle size={15}/>
                                        <h4 className="text-[14px]">This device</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                <div className="left">
                                    <h6 className="text-[14px] flex items-center gap-2">
                                        <MdOutlineLaptopMac size={25}/>
                                        Mac, MacOS, Safari
                                    </h6>
                                    <div className="ml-8 flex items-center mt-1 text-[12px] text-[#828D9E]">
                                        <h4>
                                            11 days ago
                                        </h4>
                                        <h4 className="flex items-center gap-0">
                                            <LuDot size={20}/>
                                            United States
                                        </h4>
                                    </div>
                                </div>
                                <div className="right">
                                    <button type="button" className="text-[14px] text-primary">
                                        Sign Out
                                    </button>
                                </div>
                            </div>

                            <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                <div className="left">
                                    <h6 className="text-[14px] flex items-center gap-2">
                                        <HiDeviceTablet size={25}/>
                                        Samsung, Android App
                                    </h6>
                                    <div className="ml-8 flex items-center mt-1 text-[12px] text-[#828D9E]">
                                        <h4>
                                            1 minute ago
                                        </h4>
                                        <h4 className="flex items-center gap-0">
                                            <LuDot size={20}/>
                                            United States
                                        </h4>
                                    </div>
                                </div>
                                <div className="right">
                                    <button type="button" className="text-[14px] text-primary">
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;