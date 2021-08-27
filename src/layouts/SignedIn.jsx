import React from 'react'
import { Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.instagram.com/p/CSrxo5AISIs/"/>
                <Dropdown pointing="top left" text="İlyas">
                    <Dropdown.Menu>
                        <Dropdown.Item text = "Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick ={props.signOut} text = "Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
