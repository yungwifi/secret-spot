import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from 'react-materialize'

const ButtonStyle = styled.div`
display: flex;
justify-content: flex-end;
padding: 10px;`

const FormStyle = styled.div`
input{
    color: white;
    width: 30vw;
}
width: 40vw;
border: solid black 1px;
margin-top: 10px;
width: 40vw;
box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
display: flex;
justify-content: center;
background-color: #E1E8F8;`

const InnerFormStyle = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
label, input {
    color: #503D18;
}`

class SignUp extends Component {
    state = {
        user: {
            userName: '',
            password: '',
            profilePhoto: ''
        }
    }

    handleSignUp = () => {
        console.log("MAKING API CALL", this.state.user)
        axios.post('/api/users', { user: this.state.user })
            .then((res) => {
                console.log(res.data)
                const users = [...this.state.user]
                users.push(res.data)
                this.setState({ users })
            }).catch((error) => {
                console.error(error)
            })
    }

    handleChange = (e) => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.value)
        this.setState({ user })
    }

    render() {
        return (
            <div>
                <h3>Sign-Up</h3>
                <FormStyle >
                    <form onSubmit={this.handleSignUp}>

                        <InnerFormStyle >
                            <label htmlFor="userName">User Name</label>
                            <input onChange={this.handleChange} name="userName" type="text" value={this.state.user.userName} />
                        </InnerFormStyle>

                        <InnerFormStyle >
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleChange} name="password" type="text" value={this.state.user.password} />
                        </InnerFormStyle>
                        <InnerFormStyle >
                            <label htmlFor="profilePhoto">Profile Photo</label>
                            <input onChange={this.handleChange} name="profilePhoto" type="text" value={this.state.user.profilePhoto} />
                        </InnerFormStyle>
                        <ButtonStyle >
                            <div>
                                <Button className="indigo darken-1" type="submit">Sign Up </Button>
                            </div>
                        </ButtonStyle>
                    </form>
                </FormStyle>
            </div >
        )
    }
}

export default SignUp