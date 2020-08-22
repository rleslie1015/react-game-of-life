import React, {  useMemo } from 'react';
import { Button } from '@material-ui/core';
import { useCountRenders } from './useCountRenders';

const Counter = React.memo(({ increment }) => {
    useCountRenders();

    return (  
        <div>
            <Button color='primary' variant='outlined' onClick={increment}> Increment</Button>
        </div>
    );
})
export default Counter;