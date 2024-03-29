import React from 'react';
import '@/./app/globals.css';
import Image from "next/image";
import LogoImg from '@/../public/assets/images/logo.svg'

const Page = () => {
    return (
        <>
            <div className="container">
                <div className="loader-container mx-auto flex flex-col justify-center items-center">
                    <div className="flex items-start gap-2 mb-5">
                        <Image src={LogoImg} className="" alt="LogoImg"/>
                        <h4 className="text-[38px]">nosres</h4>
                    </div>
                    <div className="loader">
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;