import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepetim'>
                <Dropdown.Menu>
                    <Dropdown.Item>Laptop</Dropdown.Item>
                    <Dropdown.Item>Telefon</Dropdown.Item>
                    <Dropdown.Item>Kulaklık</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
