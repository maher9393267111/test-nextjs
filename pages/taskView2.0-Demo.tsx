import { Fragment } from 'react';
import type { NextPage } from 'next';
// -------- custom component -------- //
import { About9 } from 'components/blocks/about';
import {  Footer15 } from 'components/blocks/footer';
import { FAQ1 } from 'components/blocks/faq';
import { Navbar4 } from 'components/blocks/navbar';
import { Process6 } from 'components/blocks/process';
import PageProgress from 'components/common/PageProgress';
import { Facts5 } from 'components/blocks/facts';
import { Hero23 } from 'components/blocks/hero';
import Carousel from 'components/reuseable/Carousel';
import { ProductCard } from 'components/reuseable/product-cards';
import products from 'data/product-list';
import { Contact9 } from 'components/blocks/contact';
import { Blog2, Blog5 } from 'components/blocks/blog';
import { Contact12 } from 'components/blocks/contact';


const TaskView2_0_Demo: NextPage = () => { 
    return (
        <Fragment>
        <PageProgress />

        {/* ========== header section ========== */}
        <header className="wrapper bg-gray">
            <Navbar4 onePageDemo />
            <Facts5 />
        </header>

        <main className="content-wrapper">

            {/* ========== hero section ========== */}
            <div className="boxedChild">
                <Hero23 />
            </div>

            {/* ========== our strategy and why choose us section ========== */}
            <section className="wrapper bg-light upper-start lower-start">
                <div className="container py-14 pt-md-17 pb-md-15">
                <About9 />
                <Process6 />
                </div>
            </section>

            {/* ========== FAQs ========== */}
            <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
                <FAQ1 />
            </div>

            {/* ========== liked products section ========== */}
            <section className="wrapper bg-gray">
                <div className="container py-14 py-md-16">
                    <h3 className="h2 mb-6 text-center">You Might Also Like</h3>

                    <Carousel
                        navigation={false}
                        breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
                    >
                    {products.slice(0, 5).map((item) => (
                        <ProductCard {...item} key={item.id} />
                    ))}
                    </Carousel>
                </div>
            </section>

            {/* ========== our community section ========== */}
            <Contact9 />

            {/* ========== Bloq-Posts ========== */}
            <div className='smallSpacer'/>
            <div className="boxedChild">
                <section>
                    <Blog2 />
                </section>
            </div>            

            {/* ========== Chat ========== */}
            <Contact12 />

            {/* ========== Bloq-Posts2 ========== */}
            <Blog5 />

        </main>

        {/* ========== Footer ========== */}
        <Footer15 />
    </Fragment>
    );
}
export default TaskView2_0_Demo;