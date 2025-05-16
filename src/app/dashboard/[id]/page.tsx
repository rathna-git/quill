export default function NotePage({ params } : { params: { id: string } }) {
    return <div>Note ID: {params.id}</div>
}