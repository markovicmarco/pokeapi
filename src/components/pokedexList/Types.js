import React from 'react'

const Types = () => {
    return (
        <Segment textAlign='center'>
            <Header as='h2' content='Tipes'/> {pokemon
                .type
                .map(r => <Label
                    className='cap'
                    key={r.slot}
                    style={{
                    backgroundColor: ValidateColor(r.type.name),
                    color: 'white'
                }}>{r.type.name}</Label>)}
        </Segment>
    )
}

export default Types