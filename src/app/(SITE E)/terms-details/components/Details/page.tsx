'use client';
import React, {useEffect, useState} from 'react';
import Link from "next/link";

function Page() {
    const [activeTab, setActiveTab] = useState('overview'); // Initial active tab

    const handleScroll = (entries: any[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveTab(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            rootMargin: '-50px 0px -50% 0px', // Adjust this value if needed
            threshold: 0.5,
        });

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const scrollToSection = (sectionId: React.SetStateAction<string>) => {
        // @ts-ignore
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };

    const handleClick = (tabId: React.SetStateAction<string>) => {
        setActiveTab(tabId);
        scrollToSection(tabId);
    };
    return (
        <>
            <section id="terms-detail-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Side Sticky */}
                        <div
                            className="col lg:col-span-3 flex-initial lg:sticky top-[80px] h-full lg:h-[100vh] w-full overflow-auto lg:overflow-hidden">
                            <h4 className="text-[16px] font-semibold pb-2">
                                Terms of Use
                            </h4>
                            <hr/>
                            <ul className="space-y-5 pt-4 text-primary">
                                <li>
                                    <div onClick={() => handleClick('overview')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#A4CEEC] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                1
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'overview' ? 'text-primary' : ''}`}>
                                            Overview
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <div onClick={() => handleClick('nosres-services')}
                                         className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#F1A28F] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                2
                                            </h1>
                                        </div>
                                        <h4 className={`text-prgcolor hover:text-primary text-[14px] ${activeTab === 'nosres-services' ? 'text-primary' : ''}`}>
                                            Nosres Services
                                        </h4>
                                    </div>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#E9C336] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                3
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor hover:text-primary text-[14px]">
                                            Nosres Account
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[27px] h-[27px] bg-[#679AAE] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                4
                                            </h1>
                                        </div>
                                        <h4 className="text-prgcolor hover:text-primary text-[14px]">
                                            User Obligations
                                        </h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-9 pt-8">
                            <div id="overview" className="section border rounded p-8">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores ducimus
                                    et, provident quos tenetur? Aliquid animi autem, consequuntur cum dolore et expedita
                                    fugit in magnam molestiae nulla odio praesentium, quia repudiandae tenetur voluptas
                                    voluptatibus! Adipisci atque dicta, eius fugit labore magnam molestiae nisi
                                    obcaecati reprehenderit sed, sunt tempora ut voluptatibus. A aliquam aliquid animi
                                    aperiam, aut consectetur corporis dicta expedita facere facilis natus nostrum quas
                                    rem sint tenetur ut vel voluptatem. Ab commodi consectetur dolorum id ipsa
                                    laudantium nam necessitatibus nisi odio perferendis quaerat quidem, quisquam quos
                                    sapiente tempore. Ab commodi culpa debitis et laudantium numquam quasi saepe, soluta
                                    voluptatum! Architecto assumenda beatae blanditiis cupiditate deserunt dicta
                                    dignissimos fugit hic impedit, in laboriosam laborum maxime modi neque obcaecati
                                    odit, quia quidem quisquam quo ratione repellat rerum sed temporibus ullam ut vel
                                    voluptas. Dicta enim eum inventore quia soluta. Aliquam aut, commodi debitis
                                    distinctio dolore dolorem earum eos ex id itaque, magnam minima necessitatibus
                                    officia perferendis quidem rem repellat reprehenderit sed similique velit, voluptate
                                    voluptates voluptatibus. Ad asperiores blanditiis cumque deserunt fuga fugiat illo
                                    in, incidunt ipsam, iure maiores maxime nemo nulla omnis possimus quaerat ullam.
                                    Dolorum eos eveniet minus nihil nobis, quisquam quos. Esse odit perspiciatis
                                    provident soluta sunt?
                                </p>
                            </div>

                            <div id="nosres-services" className="section mt-12 border rounded p-8">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem cum deserunt,
                                    earum et explicabo harum inventore libero maxime nam neque quod reprehenderit rerum
                                    tenetur ullam ut vitae. Consequuntur ducimus facere necessitatibus omnis
                                    voluptatibus! Accusamus at inventore natus, nisi nobis obcaecati omnis perferendis
                                    quae saepe sunt. Aliquid assumenda aut delectus deserunt facilis illo illum
                                    incidunt, labore laudantium molestias necessitatibus nobis pariatur perferendis quos
                                    rem rerum totam voluptatem! Accusantium adipisci amet architecto assumenda culpa
                                    delectus deleniti dolore eos error fugiat harum hic ipsa laborum magni maxime nam
                                    natus odio praesentium quasi quibusdam, rem repudiandae soluta ut vero voluptate
                                    voluptatibus voluptatum. Cum id inventore officia praesentium reiciendis. Asperiores
                                    cum deleniti ea fuga, ipsum magni, maxime molestias nemo odit perferendis qui
                                    repudiandae. Autem enim facere velit. Molestiae odit quibusdam saepe tenetur totam
                                    veniam! Adipisci aliquam aliquid consequatur eaque fugiat hic illo labore odio
                                    pariatur praesentium qui quis ratione repudiandae, temporibus tenetur vero,
                                    voluptates! Accusamus beatae distinctio illo, magni nihil perferendis placeat
                                    praesentium repudiandae voluptate voluptatibus! Aliquam amet architecto asperiores
                                    consequatur dolor doloribus eaque esse, ex excepturi facilis fuga fugit illo
                                    inventore magnam minima molestias nam odit officia praesentium quasi quo reiciendis
                                    rem repellendus suscipit ullam velit voluptas voluptatibus. Aperiam iste perferendis
                                    temporibus vel?
                                </p>
                            </div>

                            <div id="nosres-account" className="section mt-12 border rounded p-8">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem cum deserunt,
                                    earum et explicabo harum inventore libero maxime nam neque quod reprehenderit rerum
                                    tenetur ullam ut vitae. Consequuntur ducimus facere necessitatibus omnis
                                    voluptatibus! Accusamus at inventore natus, nisi nobis obcaecati omnis perferendis
                                    quae saepe sunt. Aliquid assumenda aut delectus deserunt facilis illo illum
                                    incidunt, labore laudantium molestias necessitatibus nobis pariatur perferendis quos
                                    rem rerum totam voluptatem! Accusantium adipisci amet architecto assumenda culpa
                                    delectus deleniti dolore eos error fugiat harum hic ipsa laborum magni maxime nam
                                    natus odio praesentium quasi quibusdam, rem repudiandae soluta ut vero voluptate
                                    voluptatibus voluptatum. Cum id inventore officia praesentium reiciendis. Asperiores
                                    cum deleniti ea fuga, ipsum magni, maxime molestias nemo odit perferendis qui
                                    repudiandae. Autem enim facere velit. Molestiae odit quibusdam saepe tenetur totam
                                    veniam! Adipisci aliquam aliquid consequatur eaque fugiat hic illo labore odio
                                    pariatur praesentium qui quis ratione repudiandae, temporibus tenetur vero,
                                    voluptates! Accusamus beatae distinctio illo, magni nihil perferendis placeat
                                    praesentium repudiandae voluptate voluptatibus! Aliquam amet architecto asperiores
                                    consequatur dolor doloribus eaque esse, ex excepturi facilis fuga fugit illo
                                    inventore magnam minima molestias nam odit officia praesentium quasi quo reiciendis
                                    rem repellendus suscipit ullam velit voluptas voluptatibus. Aperiam iste perferendis
                                    temporibus vel?
                                </p>
                            </div>

                            <div id="user-obligations" className="section mt-12 border rounded p-8">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem cum deserunt,
                                    earum et explicabo harum inventore libero maxime nam neque quod reprehenderit rerum
                                    tenetur ullam ut vitae. Consequuntur ducimus facere necessitatibus omnis
                                    voluptatibus! Accusamus at inventore natus, nisi nobis obcaecati omnis perferendis
                                    quae saepe sunt. Aliquid assumenda aut delectus deserunt facilis illo illum
                                    incidunt, labore laudantium molestias necessitatibus nobis pariatur perferendis quos
                                    rem rerum totam voluptatem! Accusantium adipisci amet architecto assumenda culpa
                                    delectus deleniti dolore eos error fugiat harum hic ipsa laborum magni maxime nam
                                    natus odio praesentium quasi quibusdam, rem repudiandae soluta ut vero voluptate
                                    voluptatibus voluptatum. Cum id inventore officia praesentium reiciendis. Asperiores
                                    cum deleniti ea fuga, ipsum magni, maxime molestias nemo odit perferendis qui
                                    repudiandae. Autem enim facere velit. Molestiae odit quibusdam saepe tenetur totam
                                    veniam! Adipisci aliquam aliquid consequatur eaque fugiat hic illo labore odio
                                    pariatur praesentium qui quis ratione repudiandae, temporibus tenetur vero,
                                    voluptates! Accusamus beatae distinctio illo, magni nihil perferendis placeat
                                    praesentium repudiandae voluptate voluptatibus! Aliquam amet architecto asperiores
                                    consequatur dolor doloribus eaque esse, ex excepturi facilis fuga fugit illo
                                    inventore magnam minima molestias nam odit officia praesentium quasi quo reiciendis
                                    rem repellendus suscipit ullam velit voluptas voluptatibus. Aperiam iste perferendis
                                    temporibus vel?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;