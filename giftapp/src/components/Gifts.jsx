// eslint-disable-next-line react/prop-types
function ListOfGifts({ gifts }) {
    return (
        <ul className='flex flex-col justify-center items-center'>
            {
                // eslint-disable-next-line react/prop-types
                gifts.map(gift => (
                    <li key={gift.id}>
                        <h3>{gift.title}</h3>
                        <p>{gift.user}</p>
                        <img src={gift.gift} alt={gift.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoResult() {
    return (
        <p>😉 ¡Search what you want! 😉</p>
    )
}

// eslint-disable-next-line react/prop-types
export function Gifts({ gifts }) {
    // eslint-disable-next-line react/prop-types
    const hasGifts = gifts?.length > 0;
    return (
        hasGifts
            ? <ListOfGifts gifts={gifts} />
            : <NoResult />
    )
}