'use client';
import React from 'react';
import Link from "next/link";
import shippingBottomImg from '@/../public/assets/images/sitee/shipping.png';
import Image from "next/image";

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
                                        <h4 className="text-primary text-[14px]">
                                            Shipping Policy
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='cancellation-policy'>
                                        <h4 className="text-prgcolor hover:text-primary text-[14px]">
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
                                Shipping Policy
                            </h4>
                            <div className="section border rounded p-8">
                                <div className="scroll_content_wrap">
                                    <h4 className="text-[14px] text-prgcolor leading-[24px] my-4">
                                        To provide an accurate cost of shipping product to our customers we make our
                                        shipping fee calculation based on the actual weight of the package or its
                                        calculated dimensional (DIM) weight. After comparison, the greater weight is
                                        used to calculate the total shipping fee. Therefore, you need to determine:
                                    </h4>
                                    <Image src={shippingBottomImg} alt="shippingBottomImg"/>
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