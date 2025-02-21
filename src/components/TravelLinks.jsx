export default function TravelLinks(props) {

    return (

        <li>

            ✈️ <a href={props.url}>{props.url}</a>

            <p>{props.description}</p>

        </li>

    )

}