const places = [

    {

        id: 1,

        image: '../public/images/susann-schuster-E_kTDFQzEuw-unsplash.jpg',

        alt: 'susann-schuster - unsplash',

        region: 'Japan',

        place: 'Mount Fuji',

        date: '20 Apr, 2023',

        description: `
        Mount Fuji is Japan's highest mountain at 3,776 meters (12,389 feet). It's an iconic active volcano located southwest of Tokyo and is a popular climbing destination. Known for its symmetrical cone, it's a symbol of Japanese culture and art.
        `

    },
    {

        id: 2,

        image: '../public/images/jesse-hammer-5WriqtKHBCc-unsplash.jpg',

        alt: 'jesse-hammer - unsplash',

        region: 'Australia',

        place: 'Sydney Opera House',

        date: '23 May, 2024',

        description: `
        The Sydney Opera House is a world-renowned architectural marvel located on the harbor in Sydney, Australia. Completed in 1973, it features a distinctive sail-like design and hosts numerous performances, including opera, ballet, theatre, and concerts. The Opera House is a UNESCO World Heritage Site and an iconic symbol of modern Australia.
        `

    },
    {

        id: 3,

        image: '../public/images/heidi-kaden-kYxgm42SQso-unsplash.jpg',

        alt: 'heidi-kaden - unsplash',

        region: 'Greece',

        place: 'Santorini',

        date: '19 Aug, 2025',

        description: `
        Famous for its stunning white-washed buildings with blue domes, Santorini offers breathtaking views of the Aegean Sea, beautiful sunsets, and unique volcanic beaches. It's a perfect blend of natural beauty and charming architecture.
        `

    }

]

export default function Places() {

    return (

        <ul className="places_list">

            {
                places.map((element) => (

                    <li key={element.id}>

                        <figure>

                            <img src={element.image} alt={element.alt} />

                        </figure>

                        <div className="places-content">

                            <h4>✈️{element.region}</h4>

                            <h2>{element.place}</h2>

                            <span>{element.date}</span>

                            <p>{element.description}</p>

                        </div>

                    </li>

                ))
            }

        </ul>

    )

};