"use client";
import React, {useEffect, useState} from 'react';
import Header from "@/app/(SITE B)/Header";
import {
    HiOutlineCircleStack,
} from "react-icons/hi2";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Page = () => {
    // For Page Loading
    const [loading, setLoading] = useState(true); // Set loading state
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB]">
                <Header/>
                {/* Dashboard Body */}
                <div className="pt-14 p-4 sm:ml-64 md:ml-80 bg-gray-50">
                    <div className="pt-8 pb-2 flex items-center gap-1">
                        <HiOutlineCircleStack
                            size={25}
                            className="text-gray-500 w-7"/>
                        <h6>Data & Privacy</h6>
                    </div>
                    <hr/>

                    {/* Data */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            <div className="head mb-2">
                                <h6>Data</h6>
                            </div>
                            <hr/>
                            <div className="mt-4 box">
                                <p>
                                    Turn important email notifications from Nosres on or off
                                </p>
                            </div>

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px]">
                                            Nosres Data Download
                                        </h6>
                                        <p>
                                            Download a copy of your Nosres data
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link href='#' className="text-primary text-[14px]">
                                            Request a copy of your data
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded border p-4 bg-white">
                                    <div className="flex items-center justify-between">
                                        <h6 className="text-[14px]">
                                            Data Personalization
                                        </h6>
                                        <div className="tow">
                                            <label className="inline-flex items-center me-5 cursor-pointer">
                                                <span className="me-3 text-[14px] text-[#828D9E]">OFF</span>
                                                <input type="checkbox" value="" className="sr-only peer"/>
                                                <div
                                                    className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                                <span
                                                    className="ms-3 text-[14px] text-[#828D9E]">ON</span>
                                            </label>
                                        </div>
                                    </div>
                                    <p className="mt-1">
                                        Allow Nosres to use your demographic information to personalize the content of
                                        ads.
                                    </p>
                                </div>
                            )}


                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px]">
                                            Search History
                                        </h6>
                                        <p>
                                            Clear the history of your searches on Nosres.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link href='#' className="text-primary text-[14px]">
                                            Clear searches
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    {/* Privacy */}
                    <div className="grid grid-cols-1 mb-4 info-wrapper">
                        <div className="mt-6 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                            <div className="head mb-2">
                                <h6>Privacy</h6>
                            </div>
                            <hr/>
                            <div className="mt-4 box">
                                <p>
                                    Decide whether you want to deactivate or delete your Nosres Account
                                </p>
                            </div>

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px]">
                                            Temporarily Deactivate Account
                                        </h6>
                                        <p>
                                            Request to temporarily deactivate your account.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link href='#' className="text-primary text-[14px]">
                                            Deactivate
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {loading ? (
                                <>
                                    <Skeleton height={60} count={1}/>
                                    <Skeleton height={10} count={1}/>
                                </>
                            ) : (
                                <div className="box mt-4 rounded flex items-start justify-between border p-4 bg-white">
                                    <div className="left">
                                        <h6 className="text-[14px]">
                                            Permanently Delete Account
                                        </h6>
                                        <p>
                                            Request to permanently delete your account.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link href='#' className="text-primary text-[14px]">
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;