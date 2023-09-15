import React from 'react'
import Input from './Input.js'

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size="small" placeholder="write e-mail adress..."/>
export const Medium = () => <Input size="medium" placeholder="write e-mail adress..."/>
export const Large = () => <Input size="large" placeholder="write e-mail adress..."/>

Small.storyName = 'Small Input'