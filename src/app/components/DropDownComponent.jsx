
'use client'
import { Dropdown } from 'keep-react'

export default function DropdownComponent(props){
    return (
        <Dropdown>
            <Dropdown.List>
                {
                    props.options.map((e) => {
                        return (
                            <Dropdown.Item>
                                {e}
                            </Dropdown.Item>
                        )
                    })
                }
            </Dropdown.List>
        </Dropdown>
    )
}
