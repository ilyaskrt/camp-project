import React ,{useState} from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    //giriş yapıldığında çıkıldığında farklı gösterimler için kullanıcaz

    function handleSignOut() {
        setIsAuthenticated(false)
        
    }
    function handleSignIn() {
        setIsAuthenticated(true)
        
    }
       return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} to="/" name='Anasayfa'/>
                    <Menu.Item name='Mesajlar'/>

                    <Menu.Menu position='right'>
                       <CartSummary/>
                       {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
