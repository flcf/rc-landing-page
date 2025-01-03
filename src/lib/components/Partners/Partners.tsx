
import React from 'react';

// Import assets if located in `src/`
import ccgLogo from '../../../static/assets/imgs/ccg.png';
import hnLogo from '../../../static/assets/imgs/hn.png';
import ipLogo from '../../../static/assets/imgs/ip.png';
import sovLogo from '../../../static/assets/imgs/sov.png';
import msLogo from '../../../static/assets/imgs/ms.png';
import tfLogo from '../../../static/assets/imgs/tf.png';
import bbLogo from '../../../static/assets/imgs/bb.png';
import ttLogo from '../../../static/assets/imgs/tt.png';



const Partners = () => {
    interface Partner {
        logo: string;
        href: string;
        alt: string; // Add descriptive text for accessibility
    }

    // Define partner data
    const partners: Partner[] = [
        {
            logo: ccgLogo, 
            href: "https://vancouverchinesegarden.com/",
            alt: "Vancouver Chinese Garden",
        },
        {
            logo: hnLogo, 
            href: "https://hungsnoodles.com/",
            alt: "Hung's Noodles",
        },
        {
            logo: sovLogo, 
            href: "https://www.streetsofvancity.com/",
            alt: "Streets of Vancouver",
        },
        {
            logo:msLogo,
            href: "",
            alt: "MS Logo",
        },
        {
            logo: tfLogo,
            href: "",
            alt: "TMoon Flower Logo",
        },
        {
            logo: bbLogo,
            href: "",
            alt: "Design Check-in Logo",
        },
        {
            logo: ttLogo,
            href: "",
            alt: "Tokyo Tonight Logo",
        },
        {
            logo: ipLogo, // Using imported assets
            href: "",
            alt: "Island Plate Logo",
        },
    ];

    return (
        <section className='px-[10vw] py-16 flex flex-col justify-center items-center gap-8 min-h-[25em]'>
            <h3 className='text-center font-medium font-aleo'>Our Partners</h3>
            <div className="flex justify-center items-center flex-wrap gap-[3em]">
                {partners.map((partner, index) => (
                    <a key={index} className="show" href={partner.href} target="_blank" rel="noopener noreferrer">
                        <img className="h-20" src={partner.logo} alt={partner.alt} />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Partners;