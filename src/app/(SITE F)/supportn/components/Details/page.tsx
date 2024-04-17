import React from 'react';
import dtOneImg from "@/../public/assets/images/sitef/1.svg";
import dtTwoImg from "@/../public/assets/images/sitef/2.svg";
import dtThreeImg from "@/../public/assets/images/sitef/3.svg";
import dtFourImg from "@/../public/assets/images/sitef/4.svg";
import dtFiveImg from "@/../public/assets/images/sitef/5.svg";
import dtSixImg from "@/../public/assets/images/sitef/6.svg";
import dtSevenImg from "@/../public/assets/images/sitef/7.svg";
import Image from "next/image";
import Link from "next/link";

function Page() {
    return (
        <>
            <section id="support-details-section">
                <div className="container py-16">
                    <div className="pb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtOneImg} className="w-20" alt="dtOneImg"/>
                                <h4 className="mt-3 text-[16px] font-semibold">
                                    Nosres Account
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtTwoImg} className="w-20" alt="dtTwoImg"/>
                                <h4 className="mt-3 text-[16px] font-semibold">
                                    Marketplace
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtThreeImg} className="w-20" alt="dtThreeImg"/>
                                <h4 className="mt-3 text-[16px] font-semibold">
                                    Pay
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtFourImg} className="w-20" alt="dtFourImg"/>
                                <h4 className="mt-3 text-[16px] font-semibold">
                                    Logistics
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtFiveImg} className="w-20" alt="dtFiveImg"/>
                                <h4 className="mt-3 text-[16px] font-semibold">
                                    Telecom
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtSixImg} className="w-20" alt="dtSixImg"/>
                                <h4 className="mt-3 text-[16px] font-semibold">
                                    Business
                                </h4>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="box cursor-pointer flex flex-col items-center justify-center rounded border border-primary py-6 px-4">
                                <Image src={dtSevenImg} className="w-20" alt="dtSevenImg"/>
                                <h4 className="mt-3 text-[16px] font-semibold">
                                    Careers
                                </h4>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <div className="pt-6">
                        <Link href='#' className="text-primary text-[14px] hover:underline">Give us feedback</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;