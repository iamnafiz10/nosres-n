'use client';
import React  from 'react';
import Link from "next/link";

function Page() {
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
                            <ul className="space-y-6 pt-4 text-primary">
                                <li>
                                    <Link href="#" className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#A4CEEC] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                1
                                            </h1>
                                        </div>
                                        <h4 className="text-black">
                                            Overview
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#F1A28F] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                2
                                            </h1>
                                        </div>
                                        <h4 className="text-black">
                                            Nosres Services
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#E9C336] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                3
                                            </h1>
                                        </div>
                                        <h4 className="text-black">
                                            Nosres Account
                                        </h4>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[35px] h-[35px] bg-[#679AAE] rounded-full flex items-center justify-center">
                                            <h1 className="text-white text-[16px]">
                                                4
                                            </h1>
                                        </div>
                                        <h4 className="text-black">
                                            User Obligations
                                        </h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side Content */}
                        <div className="col lg:col-span-9 pt-8">
                            <div id="overview" className="border rounded p-8">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dicta earum neque.
                                    Assumenda atque eos minus molestias quam quia vero? Asperiores, iste molestias! A
                                    accusantium amet animi aperiam aut blanditiis consequatur esse facilis illum
                                    inventore itaque labore laboriosam laborum magni maiores necessitatibus odio placeat
                                    provident quaerat quas qui, quos recusandae tempora tempore tenetur totam ut velit
                                    veniam, voluptas voluptates. Ab architecto atque, consequuntur deserunt dicta dolore
                                    eius facere itaque iusto minima minus nobis nulla officia suscipit totam, ut velit.
                                    A ab accusantium amet asperiores autem culpa dolorem doloribus dolorum earum est
                                    expedita fugit iure labore, laudantium magni modi nam numquam obcaecati officiis,
                                    omnis pariatur provident quidem quo quos ratione reiciendis repudiandae sint
                                    suscipit totam velit! Cumque eos illum ipsam odit voluptates? Alias ea facilis
                                    nesciunt quia unde veritatis vitae! Consequatur doloribus eum fugiat in itaque
                                    laboriosam nihil nostrum, perferendis quibusdam quidem repellendus sed similique
                                    soluta tempora velit. Aspernatur doloribus est minus obcaecati quasi quod sapiente,
                                    sint! A ad aliquam consequatur corporis cumque debitis delectus deleniti dolor
                                    doloribus eligendi eum ex facilis fuga illo impedit incidunt laboriosam laborum
                                    magnam minus non numquam obcaecati omnis provident qui quia quo ratione sequi sint
                                    sunt tenetur, unde vel veritatis voluptate. Aperiam cum doloremque error eum
                                    explicabo, fuga impedit in ipsum iure modi nesciunt nobis pariatur perferendis,
                                    perspiciatis provident, quidem quisquam tempora ullam. Aspernatur culpa debitis illo
                                    iste minus porro quia reprehenderit. Accusantium alias, aliquid animi aperiam
                                    cupiditate dolorem doloribus error in ipsa itaque iusto, minus necessitatibus non
                                    officia perferendis quae quam quod unde velit vero. Placeat quam quibusdam voluptas?
                                    Ab adipisci aperiam at corporis, debitis deserunt dolorum enim esse et inventore
                                    laboriosam libero molestiae nisi praesentium quae veritatis vero voluptatem
                                    voluptates? Cumque dicta distinctio expedita explicabo labore provident quidem
                                    repellat saepe similique ut? Ad architecto assumenda consequatur cupiditate, debitis
                                    dignissimos distinctio eaque enim ex hic itaque maxime minima molestias nam natus
                                    necessitatibus officia praesentium, provident quis quisquam quod ratione sed sint
                                    tenetur velit voluptate voluptates voluptatum. Adipisci asperiores aspernatur
                                    commodi consequuntur delectus dicta dolore dolores eaque earum eius eligendi enim
                                    est facere hic ipsum iste iure laboriosam laborum laudantium maiores necessitatibus
                                    nesciunt odio odit officiis placeat, qui reprehenderit repudiandae rerum sint
                                    temporibus ut voluptas voluptates voluptatum. Aperiam aut blanditiis doloribus error
                                    eveniet incidunt, modi mollitia, nihil nostrum quisquam soluta voluptatem
                                    voluptates. Animi assumenda aut, consequuntur distinctio dolorum earum expedita
                                    facere fugiat harum ipsum iste laboriosam molestias necessitatibus nihil
                                    perspiciatis placeat provident quaerat quasi quidem quos repellat saepe sed sequi
                                    tempora tempore vero vitae voluptate? Alias aperiam delectus dignissimos distinctio
                                    dolorem est ex in inventore iste iure labore laborum magnam maxime minus
                                    necessitatibus, neque non odit quam, qui quibusdam quos ratione repellat sed sit
                                    sunt suscipit unde vitae! At eos nihil quam. Asperiores dicta fuga iure laudantium
                                    nesciunt nihil officia optio quia quos? A, adipisci alias amet, architecto
                                    aspernatur, beatae consequatur delectus ea earum explicabo fugiat illo incidunt
                                    inventore ipsa ipsam laudantium maxime minima nemo quasi qui quidem quis quos rerum
                                    sapiente totam vel vero. A beatae harum natus possimus qui suscipit voluptatem. Amet
                                    atque fugiat, hic impedit iusto maiores minus possimus quisquam recusandae
                                    reprehenderit? Ab, beatae cum, cupiditate distinctio dolorum excepturi explicabo
                                    ipsa magni, mollitia nesciunt officiis ut. Ab ad deleniti, dicta fugiat fugit minus
                                    optio porro possimus quasi quos reiciendis sint, veniam vitae. Dolorum earum
                                    exercitationem expedita labore magni perferendis quod voluptas? Accusamus aut
                                    dolorem ducimus explicabo, nulla obcaecati possimus quisquam tempora ullam unde!
                                    Animi at commodi cum deserunt dolores explicabo hic illum incidunt, iste itaque
                                    magni maiores maxime minima, nobis odit placeat porro quia quibusdam quis ratione
                                    repellendus sint tempore tenetur? Ab, accusamus ad atque commodi consectetur, culpa
                                    cupiditate debitis distinctio doloribus dolorum earum fuga fugit labore laborum
                                    libero nihil nostrum numquam perspiciatis praesentium quae quam quidem repellat
                                    repellendus repudiandae similique sint sit. Ab eligendi error exercitationem id quo
                                    sed sequi? Error exercitationem incidunt recusandae reiciendis voluptate? Aspernatur
                                    at atque autem deserunt eius eveniet fugiat inventore iure libero magni maxime,
                                    molestiae necessitatibus nisi numquam optio provident quaerat tempore temporibus
                                    veniam veritatis! Blanditiis, consectetur deleniti distinctio ea, earum eos facilis
                                    fugit ipsam ipsum iusto laboriosam minima molestiae omnis optio porro quia quisquam
                                    repellendus tenetur. Aperiam dolor fugit, ipsa ipsum itaque reiciendis repellendus
                                    voluptatibus! Aliquam animi commodi culpa delectus deleniti doloremque ducimus esse
                                    eveniet, exercitationem facilis ipsam laborum maxime, minima nemo nesciunt non
                                    officia placeat, quas qui quis quisquam repellendus sit totam. Architecto doloribus
                                    id mollitia provident voluptatem! Accusamus et fuga illo inventore numquam ratione
                                    reiciendis sed temporibus? Labore perspiciatis unde vitae? Cupiditate reprehenderit
                                    tempora tempore! Amet aperiam architecto, eligendi et incidunt mollitia veritatis?
                                    Blanditiis consequatur est, excepturi explicabo id inventore ipsa libero
                                    necessitatibus, omnis quibusdam quos, sequi tempore unde ut vitae. Accusantium
                                    explicabo magni officiis voluptatem voluptatibus. Ad alias amet assumenda aut
                                    commodi cumque deserunt dolore doloremque dolores eaque et exercitationem fugit hic,
                                    id illum impedit incidunt ipsam iste iusto, magnam maxime natus neque nihil pariatur
                                    perspiciatis provident quas quidem repudiandae voluptatem voluptatibus. Consequatur
                                    fugit illo in natus neque nostrum, nulla odit. Aliquid architecto at autem commodi
                                    consectetur consequuntur culpa dolor doloremque ea enim ipsam magnam nam optio
                                    placeat quam ratione rerum saepe, sed suscipit tenetur ut vel veritatis voluptas? Ab
                                    ad aliquid deserunt nam praesentium! Explicabo, fuga, perspiciatis. Ad aperiam
                                    cupiditate debitis doloribus, eligendi error eum fugit hic illo laborum, laudantium
                                    minus molestias nemo odit possimus, sed sunt? Adipisci autem consectetur deleniti,
                                    dolor eum, exercitationem iste magni officiis reprehenderit rerum soluta sunt, vero.
                                    Animi architecto blanditiis consequatur cum delectus deleniti dolorem dolores
                                    dolorum eligendi est eum ex, expedita hic id laboriosam maiores maxime molestiae nam
                                    nobis nulla numquam perferendis provident quaerat qui quidem quisquam quos
                                    recusandae repudiandae sapiente sed sequi tempora tempore ut. Accusamus alias,
                                    debitis eos expedita explicabo iure libero maiores maxime modi omnis optio quae quam
                                    ratione tempora tenetur, ut voluptatem. Asperiores aspernatur assumenda deleniti
                                    dolor dolore eveniet exercitationem fugit, illo incidunt nobis nulla quibusdam quis
                                    saepe sit tenetur unde velit. Aliquam commodi deserunt dignissimos est magni,
                                    maiores maxime molestias possimus quaerat quibusdam quod recusandae reiciendis
                                    reprehenderit saepe similique ullam voluptates. Assumenda doloribus esse est
                                    excepturi labore, omnis qui vero.
                                </p>
                            </div>

                            <div id="nosres-service" className="mt-12 border rounded p-8">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dicta earum neque.
                                    Assumenda atque eos minus molestias quam quia vero? Asperiores, iste molestias! A
                                    accusantium amet animi aperiam aut blanditiis consequatur esse facilis illum
                                    inventore itaque labore laboriosam laborum magni maiores necessitatibus odio placeat
                                    provident quaerat quas qui, quos recusandae tempora tempore tenetur totam ut velit
                                    veniam, voluptas voluptates. Ab architecto atque, consequuntur deserunt dicta dolore
                                    eius facere itaque iusto minima minus nobis nulla officia suscipit totam, ut velit.
                                    A ab accusantium amet asperiores autem culpa dolorem doloribus dolorum earum est
                                    expedita fugit iure labore, laudantium magni modi nam numquam obcaecati officiis,
                                    omnis pariatur provident quidem quo quos ratione reiciendis repudiandae sint
                                    suscipit totam velit! Cumque eos illum ipsam odit voluptates? Alias ea facilis
                                    nesciunt quia unde veritatis vitae! Consequatur doloribus eum fugiat in itaque
                                    laboriosam nihil nostrum, perferendis quibusdam quidem repellendus sed similique
                                    soluta tempora velit. Aspernatur doloribus est minus obcaecati quasi quod sapiente,
                                    sint! A ad aliquam consequatur corporis cumque debitis delectus deleniti dolor
                                    doloribus eligendi eum ex facilis fuga illo impedit incidunt laboriosam laborum
                                    magnam minus non numquam obcaecati omnis provident qui quia quo ratione sequi sint
                                    sunt tenetur, unde vel veritatis voluptate. Aperiam cum doloremque error eum
                                    explicabo, fuga impedit in ipsum iure modi nesciunt nobis pariatur perferendis,
                                    perspiciatis provident, quidem quisquam tempora ullam. Aspernatur culpa debitis illo
                                    iste minus porro quia reprehenderit. Accusantium alias, aliquid animi aperiam
                                    cupiditate dolorem doloribus error in ipsa itaque iusto, minus necessitatibus non
                                    officia perferendis quae quam quod unde velit vero. Placeat quam quibusdam voluptas?
                                    Ab adipisci aperiam at corporis, debitis deserunt dolorum enim esse et inventore
                                    laboriosam libero molestiae nisi praesentium quae veritatis vero voluptatem
                                    voluptates? Cumque dicta distinctio expedita explicabo labore provident quidem
                                    repellat saepe similique ut? Ad architecto assumenda consequatur cupiditate, debitis
                                    dignissimos distinctio eaque enim ex hic itaque maxime minima molestias nam natus
                                    necessitatibus officia praesentium, provident quis quisquam quod ratione sed sint
                                    tenetur velit voluptate voluptates voluptatum. Adipisci asperiores aspernatur
                                    commodi consequuntur delectus dicta dolore dolores eaque earum eius eligendi enim
                                    est facere hic ipsum iste iure laboriosam laborum laudantium maiores necessitatibus
                                    nesciunt odio odit officiis placeat, qui reprehenderit repudiandae rerum sint
                                    temporibus ut voluptas voluptates voluptatum. Aperiam aut blanditiis doloribus error
                                    eveniet incidunt, modi mollitia, nihil nostrum quisquam soluta voluptatem
                                    voluptates. Animi assumenda aut, consequuntur distinctio dolorum earum expedita
                                    facere fugiat harum ipsum iste laboriosam molestias necessitatibus nihil
                                    perspiciatis placeat provident quaerat quasi quidem quos repellat saepe sed sequi
                                    tempora tempore vero vitae voluptate? Alias aperiam delectus dignissimos distinctio
                                    dolorem est ex in inventore iste iure labore laborum magnam maxime minus
                                    necessitatibus, neque non odit quam, qui quibusdam quos ratione repellat sed sit
                                    sunt suscipit unde vitae! At eos nihil quam. Asperiores dicta fuga iure laudantium
                                    nesciunt nihil officia optio quia quos? A, adipisci alias amet, architecto
                                    aspernatur, beatae consequatur delectus ea earum explicabo fugiat illo incidunt
                                    inventore ipsa ipsam laudantium maxime minima nemo quasi qui quidem quis quos rerum
                                    sapiente totam vel vero. A beatae harum natus possimus qui suscipit voluptatem. Amet
                                    atque fugiat, hic impedit iusto maiores minus possimus quisquam recusandae
                                    reprehenderit? Ab, beatae cum, cupiditate distinctio dolorum excepturi explicabo
                                    ipsa magni, mollitia nesciunt officiis ut. Ab ad deleniti, dicta fugiat fugit minus
                                    optio porro possimus quasi quos reiciendis sint, veniam vitae. Dolorum earum
                                    exercitationem expedita labore magni perferendis quod voluptas? Accusamus aut
                                    dolorem ducimus explicabo, nulla obcaecati possimus quisquam tempora ullam unde!
                                    Animi at commodi cum deserunt dolores explicabo hic illum incidunt, iste itaque
                                    magni maiores maxime minima, nobis odit placeat porro quia quibusdam quis ratione
                                    repellendus sint tempore tenetur? Ab, accusamus ad atque commodi consectetur, culpa
                                    cupiditate debitis distinctio doloribus dolorum earum fuga fugit labore laborum
                                    libero nihil nostrum numquam perspiciatis praesentium quae quam quidem repellat
                                    repellendus repudiandae similique sint sit. Ab eligendi error exercitationem id quo
                                    sed sequi? Error exercitationem incidunt recusandae reiciendis voluptate? Aspernatur
                                    at atque autem deserunt eius eveniet fugiat inventore iure libero magni maxime,
                                    molestiae necessitatibus nisi numquam optio provident quaerat tempore temporibus
                                    veniam veritatis! Blanditiis, consectetur deleniti distinctio ea, earum eos facilis
                                    fugit ipsam ipsum iusto laboriosam minima molestiae omnis optio porro quia quisquam
                                    repellendus tenetur. Aperiam dolor fugit, ipsa ipsum itaque reiciendis repellendus
                                    voluptatibus! Aliquam animi commodi culpa delectus deleniti doloremque ducimus esse
                                    eveniet, exercitationem facilis ipsam laborum maxime, minima nemo nesciunt non
                                    officia placeat, quas qui quis quisquam repellendus sit totam. Architecto doloribus
                                    id mollitia provident voluptatem! Accusamus et fuga illo inventore numquam ratione
                                    reiciendis sed temporibus? Labore perspiciatis unde vitae? Cupiditate reprehenderit
                                    tempora tempore! Amet aperiam architecto, eligendi et incidunt mollitia veritatis?
                                    Blanditiis consequatur est, excepturi explicabo id inventore ipsa libero
                                    necessitatibus, omnis quibusdam quos, sequi tempore unde ut vitae. Accusantium
                                    explicabo magni officiis voluptatem voluptatibus. Ad alias amet assumenda aut
                                    commodi cumque deserunt dolore doloremque dolores eaque et exercitationem fugit hic,
                                    id illum impedit incidunt ipsam iste iusto, magnam maxime natus neque nihil pariatur
                                    perspiciatis provident quas quidem repudiandae voluptatem voluptatibus. Consequatur
                                    fugit illo in natus neque nostrum, nulla odit. Aliquid architecto at autem commodi
                                    consectetur consequuntur culpa dolor doloremque ea enim ipsam magnam nam optio
                                    placeat quam ratione rerum saepe, sed suscipit tenetur ut vel veritatis voluptas? Ab
                                    ad aliquid deserunt nam praesentium! Explicabo, fuga, perspiciatis. Ad aperiam
                                    cupiditate debitis doloribus, eligendi error eum fugit hic illo laborum, laudantium
                                    minus molestias nemo odit possimus, sed sunt? Adipisci autem consectetur deleniti,
                                    dolor eum, exercitationem iste magni officiis reprehenderit rerum soluta sunt, vero.
                                    Animi architecto blanditiis consequatur cum delectus deleniti dolorem dolores
                                    dolorum eligendi est eum ex, expedita hic id laboriosam maiores maxime molestiae nam
                                    nobis nulla numquam perferendis provident quaerat qui quidem quisquam quos
                                    recusandae repudiandae sapiente sed sequi tempora tempore ut. Accusamus alias,
                                    debitis eos expedita explicabo iure libero maiores maxime modi omnis optio quae quam
                                    ratione tempora tenetur, ut voluptatem. Asperiores aspernatur assumenda deleniti
                                    dolor dolore eveniet exercitationem fugit, illo incidunt nobis nulla quibusdam quis
                                    saepe sit tenetur unde velit. Aliquam commodi deserunt dignissimos est magni,
                                    maiores maxime molestias possimus quaerat quibusdam quod recusandae reiciendis
                                    reprehenderit saepe similique ullam voluptates. Assumenda doloribus esse est
                                    excepturi labore, omnis qui vero.
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