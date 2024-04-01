export default function Total({ parts }) {
    
    return (
        <p>Number of exercises {parts.map((part) => part.exercises).reduce((partialSum, a) => partialSum + a, 0)}</p>
    )
}