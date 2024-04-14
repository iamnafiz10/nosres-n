'use client';
import React, {useEffect, useState, useRef} from 'react';
import Link from "next/link";

function Page() {
    const [activeTab, setActiveTab] = useState('tseller_tab_one'); // Initial active tab
    const sectionRefs = useRef({}); // Ref to store section elements

    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.values(sectionRefs.current);
            for (const section of sections) {
                if (!section) continue; // Skip null or undefined sections
                // @ts-ignore
                const {top, bottom} = section.getBoundingClientRect();
                if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
                    // @ts-ignore
                    setActiveTab(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const assignRef = (sectionId: string) => (el: any) => {
        if (el) {
            // @ts-ignore
            sectionRefs.current[sectionId] = el;
        }
    };

    const handleClick = (sectionId: React.SetStateAction<string>) => {
        setActiveTab(sectionId);
        // @ts-ignore
        const section = sectionRefs.current[sectionId];
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };
    return (
        <>
            <section id="terms-detail-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Side Sticky */}
                        <div
                            className="col lg:col-span-4 flex-initial lg:sticky top-[80px] h-full lg:h-[80vh] w-full overflow-hidden lg:overflow-auto">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Terms of Sale
                            </h4>
                            <hr/>
                            <ul className="space-y-4 pt-4 text-primary">
                                <li>
                                    <div onClick={() => handleClick('tseller_tab_one')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tseller_tab_one' ? 'text-primary' : ''}`}>
                                            Eligibility
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('tseller_tab_two')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'tseller_tab_two' ? 'text-primary' : ''}`}>
                                            Your Obligations as a Buyer
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-8 pt-8 right_side_content">
                            <div className="section border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        These Terms and Conditions contain the terms and conditions of your
                                        participation as a buyer via Nosres Services. These Terms (“Buyer Agreement”)
                                        govern your access to and use of the site and services for the purchase of
                                        products or services directly through the site or applications. These Terms
                                        represent your rights and obligations as a Buyer on Nosres
                                        <br/>
                                        <br/>

                                        THIS BUYER AGREEMENT IS ALSO PART OF OUR TERMS OF USE. BY ACCESSING THIS SITE
                                        AND MAKING A PURCHASE, YOU ARE ACCEPTING AND AGREEING TO BE BOUND BY THESE TERMS
                                        (“SELLER AGREEMENT”), OUR POLICIES AND THE TERMS OF USE. WE RECOMMEND THAT YOU
                                        REVIEW AND UNDERSTAND OUR POLICIES, INCLUDING THESE TERMS AND CONDITIONS, BEFORE
                                        YOU CREATE AN ACCOUNT AND START PURCHASING ANY PRODUCTS OR SERVICES ON NOSRES.
                                        IF YOU DO NOT AGREE WITH THE TERMS OF USE, OUR POLICIES AND THESE TERMS AND
                                        CONDITIONS OF THIS AGREEMENT, PLEASE DO NOT USE NOSRES PLATFORM TO PURCHASE ANY
                                        PRODUCTS AND ANY SERVICES.
                                        <br/>
                                        <br/>
                                        Nosres reserves the right, at its sole discretion, to change or modify any of
                                        the terms that contained in this agreement, at any time and without prior
                                        notice. It is your responsibility to look at this Buyer Agreement periodically
                                        for changes and modifications. Changes will be effective upon the posting of the
                                        changes and modifications. YOUR CONTINUED ACCESS TO AND USE OF THE SITE AND
                                        SERVICES FOLLOWING THE POSTING OF CHANGES WILL MEAN THAT YOU ACCEPT AND AGREE TO
                                        SUCH CHANGES AND MODIFICATIONS.
                                        <br/>
                                        <br/>

                                        In these Terms and Conditions “you” or “your” shall refer to you, as a buyer.
                                        “we”, “us”, “our”, or the “site” shall refer to Nosres.
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_one" ref={assignRef('tseller_tab_one')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                1.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Eligibility
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        To sell on Nosres you should be 18 years of age or older. If you are a minor,
                                        i.e. under the of full legal responsibility, you shall not register to become a
                                        Nosres seller. Additionally, only registered Users may buy on Nosres. To
                                        register you must provide your real name, address, phone number, e-mail address
                                        and a valid credit or debit card that is accepted by Nosres. We recommend that
                                        you review and understand our policies, including these Terms of Use, before you
                                        create an account and start buying an item on Nosres
                                    </h4>
                                </div>
                            </div>

                            <div id="tseller_tab_two" ref={assignRef('tseller_tab_two')}
                                 className="section mt-12 border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center justify-center">
                                            <h1 className="text-black font-semibold text-[16px]">
                                                2.
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor font-semibold text-[16px]">
                                            Your Obligations as a Buyer
                                        </h4>
                                    </div>

                                    <h4 className="text-[14px] text-prgcolor leading-[24px] mt-4">
                                        We are committed to creating a fair and wonderful buying experience for you in
                                        order to bring value to our marketplace. Therefore, you are agreeing that, when
                                        using our services, you will follow these rules:
                                        <br/>
                                        <br/>
                                        <ul className="obligations_list space-y-4 ml-6">
                                            <li>
                                                <h4>
                                                    You must provide us true and accurate information about you when
                                                    registering on Nosres and must update that information as
                                                    applicable.
                                                    Therefore, you agree to authorize Nosres to verify your information
                                                    from
                                                    time to time while using the services to prevent risk of fraud.
                                                </h4>
                                            </li>
                                            <li>
                                                <h4>Make certain that you read the listing description carefully before
                                                    you make a purchase.</h4>
                                            </li>
                                            <li>
                                                <h4>An item may be purchased using one of the following payment methods:
                                                    credit card, debit card, PayPal or Nosres Pay. You may not offer a
                                                    seller to pay, or make payment using any method other than through
                                                    the website. If you receive an offer from a seller to use an
                                                    alternative payment method, please report it immediately to us
                                                    (Please see the “How to Contact Nosres” section below)</h4>
                                            </li>
                                            <li>
                                                <h4>Moreover, you must not ask the seller to buy outside Nosres
                                                    platform. As a buyer, if you have been asked to buy an item outside
                                                    Nosres platform please report it immediately to us (Please see the
                                                    “How to Contact Nosres” section below).</h4>
                                            </li>
                                            <li>
                                                <h4>If you want to return an item, make sure that you review the
                                                    seller{`'`}s return policy before you initiate the return.</h4>
                                            </li>
                                            <li>
                                                <h4>You cannot return a different item from the one you purchase. For
                                                    example, you cannot return a used model of the same product or an
                                                    empty box.</h4>
                                            </li>
                                            <li>
                                                <h4>You must return the item in the condition that it was sent to you,
                                                    including its accessories.</h4>
                                            </li>
                                            <li>
                                                <h4>You will not leave, and will not assist, or encourage others to
                                                    leave a negative review to a seller if that seller keeps his/her
                                                    promise as it was mentioned in the original listing.</h4>
                                            </li>
                                            <li>
                                                <h4>Furthermore, you cannot leave a review or comment just to help
                                                    increase a seller{`'`}s image.</h4>
                                            </li>
                                        </ul>
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