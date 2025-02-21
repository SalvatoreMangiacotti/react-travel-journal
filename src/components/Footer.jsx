export default function Footer(props) {

    console.log(props)

    return (

        <footer>

            <ul>

                {props.social.map((social, index) =>

                    <li key={index}>{social}</li>

                )}

            </ul>

        </footer>

    )

}