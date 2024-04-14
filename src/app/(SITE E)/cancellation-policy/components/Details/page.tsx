'use client';
import React from 'react';
import Link from "next/link";

function Page() {
    return (
        <>
            <section id="terms-detail-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Side Sticky */}
                        <div
                            className="col lg:col-span-4 flex-initial lg:sticky top-[80px] h-full lg:h-[80vh] w-full overflow-hidden lg:overflow-auto">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Other Policies
                            </h4>
                            <hr/>
                            <ul className="space-y-3 pt-4 text-primary">
                                <li>
                                    <Link href='shipping-policy'>
                                        <h4 className="text-prgcolor hover:text-primary text-[14px]">
                                            Shipping Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='cancellation-policy'>
                                        <h4 className="text-primary text-[14px]">
                                            Cancellation Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='return-policy'>
                                        <h4 className="text-prgcolor hover:text-primary text-[14px]">
                                            Return Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='refund-policy'>
                                        <h4 className="text-prgcolor hover:text-primary text-[14px]">
                                            Refund Policy
                                        </h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-8 pt-0 right_side_content">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Cancellation Policy
                            </h4>
                            <div className="section border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#A4CEEC] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                1
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Overview
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        Welcome to Nosres.com (the “Site”). Nosres provides Services to you subject to
                                        the Terms and Conditions of Use (the “Terms of Use”) set forth in this agreement
                                        (the {`"`}Agreement{`"`}). This is a biding legal agreement between Nosres’s
                                        direct and
                                        indirect subsidiaries (hereinafter referred to as “Nosres” or the “Sites” or
                                        “Site” or “we” or “us”) and you, the users of the Website (hereinafter referred
                                        to collectively as “you” or “user”) on which Nosres grants you a personal,
                                        limited, non-exclusive and non-transferable privilege to access and use the
                                        Site. This privilege has the sole purpose of allowing you to use and enjoy the
                                        benefit of the Services as provided by Nosres, in the manner permitted by these
                                        Terms.
                                        <br/>
                                        <br/>

                                        BY ACCESSING THIS WEBSITE AND USING THE SERVICES, YOU ACCEPT AND AGREE TO BE
                                        BOUND BY THESE TERMS AND PROVISION OF THIS AGREEMENT. PLEASE READ THEM CAREFULLY
                                        BEFORE YOU PROCEED.
                                        <br/>
                                        <br/>

                                        Nosres reserves the right, at its sole discretion, to change or modify these
                                        Terms of Use, or discontinue or terminate the Site, at any time and without
                                        prior notice. It is your responsibility to look at these terms regularly.
                                        Changes and modifications will be effective upon the posting of the changes and
                                        modifications. Your continued access to and use of the Site and Services
                                        following the posting of changes will mean that you accept and agree to such
                                        changes and modifications.
                                        <br/>
                                        <br/>

                                        ANY PARTICIPATION IN THIS WEBSITE AND THE USE OF THE SERVICES WILL CONSTITUTE
                                        YOUR ACCEPTANCE OF AND AGREEMENT TO ALL OF THE TERMS AND CONDITIONS IN THESE
                                        TERMS OF USE AND YOU ARE INDICATING THAT YOU ARE AT LEAST 18 YEARS OLD. IF YOU
                                        OBJECT TO ANYTHING IN THESE TERMS OF USE, PLEASE DO NOT USE THIS SITE OR ANY
                                        SERVICES PROVIDED BY NOSRES.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;