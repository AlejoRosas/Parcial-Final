import React from 'react';
import styled from 'styled-components';
import {firebase} from '../config';
import {signInWithPopup, getAuth} from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/app';

const signIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    signInWithPopup(getAuth(), googleProvider).then((re)=>{
        console.log(re);
    }).catch((error)=>{console.log(error);});
} 
function Login() {

    return (
        <div>
            <Wrapper>
                <WrapperImg>
                    <img  src="https://i.postimg.cc/htZZsqcS/captura.jpg" alt="Imagen no encontrada"/>
                </WrapperImg>
                <BoxWrapper>
                    <BoxTittle>
                        <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png' alt="Imagen no encontrada"/>
                    </BoxTittle>
                    <Username>
                        <form>
                            <input type="text" placeholder="Phone number, username or email"/>
                        </form>
                    </Username>
                    <Password>
                        <form>
                            <input type="text" placeholder="Password"/>
                        </form>
                    </Password>
                    <WrapperGoogle>
                        <button onClick={signIn}>Iniciar Sesion con Google</button>
                    </WrapperGoogle>
                </BoxWrapper>
                {/* <TextWrapper>
                    <p>Meta     Informacion     Blog     Empleo     Ayuda     API     Privacidad     Condiciones     Cuentas destacadas     Hashtags     Ubicacion     Instagram Lite</p>
                    
                    <p>Belleza     Danza     Fitness     Comida y Bebida     Casa y Jardin     Música     Artes visuales</p>
                </TextWrapper> */}
            </Wrapper>
        </div>
    )
}

export default Login


const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content: center;
padding-top:10%;
background-color: #FAFAFA
`
const WrapperGoogle = styled.div`
    margin-top: 15px;
    margin-left: 10px;
    button {
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 12px;
        padding-right: 12px;
        font-size:15px;
        font-family: Arial, Helvetica, sans-serif; 
        color: white;
        background-color: #33a8cb;
        border-radius: 5px;
        border: none;
    }
`
const Username = styled.div`
    background-color: #efefef;
    display: flex;
    height: 28px;
    width: 190px;
    border-radius: 3px;
    border: solid grey;
    border-width: 0.1px;
    margin-top: 15px;
    margin-left: 10px;

    form{
        display: flex;
        flex: 1;
    }
    form > input {
        background-color: transparent; 
        border: none;
        width: 100%;
        margin-left: 0px;
        font-size: 12px;
    }
`
const Password = styled.div`
background-color: #efefef;
display: flex;
height: 28px;
width: 190px;
border-radius: 3px;
border: solid grey;
border-width: 0.1px;
margin-top: 15px;
margin-left: 10px;


form{
    display: flex;
    flex: 1;
}
form > input {
    background-color: transparent; 
    border: none;
    width: 100%;
    margin-left: 0px;
    font-size: 12px;
}
`

const BoxWrapper = styled.div`
    width: 270px;
    height: 270px;
    margin-top: 10px;
    margin-left: 20px;
    padding: 30px;
    border: solid silver; 
    border-width: 1px;
    background-color: white;
`
const BoxTittle = styled.div`
    display: flex;
    align-items: center;
    
    img {
        padding-left: 40px;
        width: 185px;
        height: 75px;
    }
`
const WrapperImg = styled.div`
    display: center;
    align-itmes: center;
    top: 0;
    img {
        width:395px;
        height: 601px; 
    }
`

// const TextWrapper = styled.div`
//     display: flex;
//     position: fixed;
//     bottom: 30px;
//     left: 20%;
//     width: 100%;
//     font-color: grey;
//     font-size: 5px

// `