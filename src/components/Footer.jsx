export default function Footer(props) {

    console.log(props)

    return (

        <footer>

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