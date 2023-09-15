import React from 'react'
import Button from './Button'

export default {
    title: 'Form/Button',
    component: Button
}

export const Primary = () => <Button variant='primary'>Click</Button>
export const Secondary = () => <Button variant='secondary'>Happy Day</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Regnskur 1-10 mm</Button>
