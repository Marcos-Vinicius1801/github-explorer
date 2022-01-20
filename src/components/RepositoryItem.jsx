export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Go to repository</a>
        </li>
    );
}