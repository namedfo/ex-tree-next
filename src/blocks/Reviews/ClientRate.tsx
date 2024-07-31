'use client'
// import '../../assets/index.less'

import Rate from 'rc-rate'


export default function ClientRate(props: any) {

    console.log(props)
    return <Rate
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        style={props.style}
        character={props.character}
    />
}