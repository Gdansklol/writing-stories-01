# React Storybook 3.Writing stories
## Day-1 <Storybook: Playground for UI components>
> with new Macbook pro :heart_eyes:

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

---------------------------------------

## Learn More

You can learn more in the [Storybook docs](https://storybook.js.org/docs/react/get-started/why-storybook)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



*****

* Markdown : <https://www.markdownguide.org/basic-syntax/>

---------------------------------------

# Day-2 4.1- Story Hierarchy

>in the components folder I have created another folder 
called Input. 

>within this folder we create the three files.
Input.js , Input.css and Input.stories.js

```bash
Input.js

import React from 'react'
import './Input.css'


function Input (props) {
    const {size ="medium", ...rest} = props
    return (
        <input className={`input ${size}`} {...rest}/>
    )
}

export default Input;
```

```bash
Input.css

```bash
Input.stories.js

import React from 'react'
import Input from './Input.js'

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size="small" placeholder="write e-mail adress..."/>
export const Medium = () => <Input size="medium" placeholder="write e-mail adress..."/>
export const Large = () => <Input size="large" placeholder="write e-mail adress..."/>

```





>feeling a bit more confident about writing stories.

>a quick one about story hierarchy

right now you can see that we have separate entries for button and input in our site nav.

>typically in larger applications you might want to
group together certain components.

> for example you can have a group called form which will contain all the
form elements like inputs check boxes radio buttons and so on for the sake of understanding.

>to group together the button and the input components under a form group for that all we have to do is for the title property specify form forward slash input and `Form forward slash button` if you now take a look at the storybook.   

> ex)
export default {
    title: 'Form/Input',
    component: Input
}

> now you can see that we have one label called form in the side nav
> if i expand that we have input and button which you can further expand for the
individual stories.

>in a nested structure using forward slash as a separator in the title property of
the default export.

# 4.2 - Renaming & Sorting Stories in V6

> Storybook version 6 it is now possible to rename stories so in input.stories.js file
> add small dot story name is equal to Small input small is the story and to the story name
property. 

> ex)

```bash
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

```

> we assign the new name if we now take a look at the browser you can see that the story
has small input as its name so you now have the flexibility of
adding a bit more descriptive story name while not having to bother about the story export name
the last bit of information. 

> we would prefer if the stories were sorted
in some order for example i would prefer.

* if the stories were alphabetically sorted
+ so button and then input,
+ if you go to the sotrybook docs link: 
1. (https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy) 
2. and under writing stories click on naming components and hierarchy. 

- scroll down a bit and you're going to come across a section
on sorting stories here copy the options object and back in vs code.

>  in preview.js paste it after the actions property
now your stories will be sorted
alphabetically button and then input

> that is a quick update on
renaming and sorting stories
in version 6.

* ex)

```bash
 .storybook > preview.js

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      options: {
        storySort: (a, b) =>
          a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
      },
    },
  },
};

export default preview;
```

***

# Day-3 4.3- Story within Story




