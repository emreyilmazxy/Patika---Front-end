import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>sayaç : {count}</p>
            <button onClick={() => setCount(count + 1)}>Arttır</button>
        </div>
    );
}

export default Counter;