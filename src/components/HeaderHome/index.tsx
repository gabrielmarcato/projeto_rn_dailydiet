import { Container, Logo, ProfilePhoto } from "./styles"

import LogoPng from '@assets/logo.png'
import ProfilePng from '@assets/profilePhoto.png'

export function HeaderHome() {
    return (
        <Container>
            <Logo source={LogoPng}/>
            <ProfilePhoto source={ProfilePng}/>
        </Container>
    )
}