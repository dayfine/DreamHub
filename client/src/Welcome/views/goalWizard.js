import React from 'react';
import styles from './styles';
import Divider from 'material-ui/Divider';
import Input from 'material-ui/Input';


const { questionStyle, titleStyle, bodyStyle, inputStyle, buttonStyle, textareaStyle, sliderStyle } = styles;

//Make human a variable for the current user
const goalWizard = [
  {
    id: 0,
    title: 'Welcome human, do you have a new goal?',
    description: 'The more specific the goal the more powerful the impact on your subconscious.',
    hasInput: true,
    inputName: 'myInput',
    placeholderMessage: 'Be as specific as possible.',
    hasBoolean: false,
    booleanName: null
  },
  {
    id: 1,
    title: 'How will you keep track of your progress?',
    description: 'Having a way to measure your goals is the only way you\'ll know if you\'re heading in the right direction.',
    hasInput: false,
    inputName: null,
    placeholderMessage: null,
    hasBoolean: true,
    booleanName: 'measurement'
  },
  {
    id: 2,
    title: 'How excited are you by this goal? Is it big? Does it scare you a little?',
    description: 'Don’t ask yourself, “Is it possible to reach this goal?” That’s the wrong question. The right questions are, “How can I achieve this goal?” and, “Am I willing to pay the price necessary to achieve this goal?” You can accomplish virtually anything if you’re willing to pay the price.',
    hasInput: false,
    inputName: null,
    placeholderMessage: null,
    hasBoolean: true,
    booleanName: 'bigGoal'
  }
                
]

export const formDisplay = object =>{
  return ( 
    <div>
      <h3 style={titleStyle}>{object.title}</h3>
      <Divider />
      <p style={bodyStyle}><em>{object.description}</em></p>
      {object.hasInput ? <Input style={inputStyle} name={object.inputName} placeholder={object.placeholderMessage} autoFocus/> : null}
      {object.hasBoolean ? 
        <div>
          <input type='radio' name={object.booleanName} value='Yes'/> Yes
          <input type='radio' name={object.booleanName} value='No'/> No
        </div>
        : null}
    </div>
  )
  
}


//    <Divider />
//   {return {question.hasInput} ?  : <h1>Nothing</h1>}
//    <input label="How important is this?" onChange={(event)=> this.setState({sliderNum: event.target.value })} type="range" min="1" max="10" value={sliderNum} style={sliderStyle} />
//    <p style={bodyStyle}>{sliderNum}</p>
export default goalWizard;