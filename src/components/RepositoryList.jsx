import { RepositoryItem } from "./RepositoryItem"
const repo = {
    name: 'unform2',
    description: 'Forms in React components',
    link: 'https://github.com/Marcos-Vinicius1801'
}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem repository={repo} />
                <RepositoryItem repository={repo} />
                <RepositoryItem repository={repo} />
                <RepositoryItem repository={repo} />
            </ul>
        </section>
    )
}