import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from 'react-materialize'

const FormStyle = styled.div`
input{
    color: white;
    width: 30vw;
}
width: 40vw;`

const InnerFormStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;`

class SignUp extends Component {
    state = {
        user: {
            userName: '',
            password: '',
            profilePhoto: ''
        }
    }

    handleSignUp = (e) => {
        e.preventDefault()
        console.log("About to make API Call", this.state.user)
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
        console.log("Handle Change Event", e.target.value)
        this.setState({ user })
    }

    render() {
        return (
            <div>
                <h3>Sign-Up</h3>
                <FormStyle >
                    <form className="brown lighten-2" onSubmit={this.handleSignUp}>

                        <InnerFormStyle >
                            <label className="white-text" htmlFor="userName">User Name</label>
                            <input onChange={this.handleChange} name="userName" type="text" value={this.state.user.userName} />
                        </InnerFormStyle>

                        <InnerFormStyle >
                            <label className="white-text" htmlFor="password">Password</label>
                            <input onChange={this.handleChange} name="password" type="text" value={this.state.user.password} />
                        </InnerFormStyle>
                        <InnerFormStyle >
                            <label className="white-text" htmlFor="profilePhoto">Profile Photo</label>
                            <input onChange={this.handleChange} name="profilePhoto" type="text" value={this.state.user.profilePhoto} />
                        </InnerFormStyle>

                        <Button className="indigo darken-1" type="submit">Sign Up </Button>
                    </form>
                </FormStyle>
            </div>
        )
    }
}

export default SignUp