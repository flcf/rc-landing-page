const Partners = ()=> {

    interface Partner {
        logo: string,
        href: string
    }

    const partners: Partner[] = [
        {
            logo: "/assets/ccg.png",
            href: "https://vancouverchinesegarden.com/"
        },
        {
            logo: "/assets/hn.png",
            href: "https://hungsnoodles.com/"
        },
        {
            logo: "/assets/sov.png",
            href: "https://www.streetsofvancity.com/"
        },
        {
            logo: "/assets/ms.png",
            href: ""
        },
        {
            logo: "/assets/tf.png",
            href: ""
        },
        {
            logo: "/assets/bb.png",
            href: ""
        },
        {
            logo: "/assets/tt.png",
            href: ""
        },
        {
            logo: "/assets/ip.png",
            href: ""
        }
    ]

    return(
        <section>
    <h3>Our Partners</h3>
    <div>
       {partners.map((partner, index)=> (
          <a key={index} className="hidden" href={partner.href}>
          <img src={partner.logo} alt="Partner icon." />
      </a>

       ))}
    </div>
</section>
    );
}

export default Partners;
