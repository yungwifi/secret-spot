import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.user.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.user.password} />
                    </div>
                    <div>
                        <label htmlFor="profilePhoto">Profile Photo</label>
                        <input onChange={this.handleChange} name="profilePhoto" type="text" value={this.state.user.profilePhoto} />
                    </div>

                    <button type="submit">Sign Up </button>
                </form>
            </div>
        )
    }
}

export default SignUp