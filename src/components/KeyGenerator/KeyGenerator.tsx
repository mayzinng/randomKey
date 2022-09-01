import { Container } from "./styles";
import lockerImg from "../../assets/security.svg"
import { useEffect, useState } from "react";


export function KeyGenerator() {

    const [password, setIsPassword] = useState('')

    // useEffect(, [])

    const fetchApi = () => {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%";
      var passwordLength = 10;
      var password = "";

      for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      setIsPassword(password)
      console.log(setIsPassword(password))
    }


    return (
        <Container>
            <h3>RandomKEY</h3>
            <tr>
                <td>
                    <img src={lockerImg} alt="Cadeado"/>
                </td>
                
            </tr>
            <tr>
                <td>
                    <button type="submit" onClick={() => fetchApi()}>Gerar senha</button>
                </td>
            </tr>
            <tr>
                <td>
                    <p id="password">{password}</p>
                </td>
            </tr>

            
            
        </Container>
    );
}