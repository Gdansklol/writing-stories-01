# React Storybook 3.Writing stories
## Day-1 <Storybook: Playground for UI components>
>> with new Macbook pro 

## Getting react app with storybook
```bash
npx create-react-app .

npx sb init

```
storybook version 7.4 


### `npm run storybook`

Runs the stories UI in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

The page will reload when you make changes.


### `button component`

**create a `button component in the src/source folder`, create another foflder called components**

>this will be the place for all our components.\
>in the components folder, I am going to create another
 folder called Button.\
>within this folder we create the three files.
Button.js , Button.css and Button.stories.js

### `code`
```bash
Button.js

import React from 'react';
import './Button.css';


function Button (props) {
   const {variant='primary', children, ...rest} = props
    return (
       <button className={`button ${variant}`} {...rest}>
        {children}
       </button>
    )
}

export default Button;

```

```bash
Button.css

.button {
    color: white;
    padding : 1rem 1.2rem;
    text-align: center;
    text-decoration: underline;
    display: inline-block;
    font-size: 1.3rem;
    border-radius: 1rem;
    cursor:pointer
}

.primary {background-color: #008CBA;} /* Blue */
.secondary {background-color: #f7f3f3; color: blue;}
.success {background-color: #4CAF50; color: rgb(234, 234, 240);}
.danger {background-color: #f44336;}

```

```bash

Button.stories.js

import React from 'react'
import Button from './Button'

export default {
    title: 'Button',
    component: Button
}

export const Primary = () => <Button variant='primary'>Click</Button>
export const Secondary = () => <Button variant='secondary'>Happy Day</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Regnskur 1-10 mm</Button>


```

# 4.1- Story Hierarchy

in the components folder I have created another folder 
called Input.



---------------------------------------

## Learn More

You can learn more in the [Storybook docs](https://storybook.js.org/docs/react/get-started/why-storybook)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



*****

* Markdown : <http://markdowm.com/>

---------------------------------------



