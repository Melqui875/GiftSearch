/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Gifts({ gifts }) {
    return (
        <>
            {gifts.map(gif => (
                <div key={gif.id} className="max-w-52">
                    <img className="rounded-xl" src={gif.images.original.url} />
                    <p>{gif.title}</p>
                </div>
            ))}
        </>
    )
}