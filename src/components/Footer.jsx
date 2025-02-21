import links from "../data/links"

import TravelLinks from "./TravelLinks"


export default function Footer(props) {

    const travelLinks = links.map((element) => {

        return (

            <TravelLinks

                key={element.id}

                {...element}

            />

        )

    }

    )

    return (

        <footer>

            <h2 className="footer_title">Fly around the world</h2>

            <ul className="travel_links">

                {travelLinks}

            </ul>

            <nav>

                <h2>Follow us on</h2>

                <ul className="social_links">

                    {props.social.map((social, index) =>

                        <li key={index}>{social}</li>

                    )}

                </ul>

            </nav>

        </footer>

    )

}