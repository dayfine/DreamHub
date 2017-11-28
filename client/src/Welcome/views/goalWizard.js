import React from 'react';
import styles from './styles';
import Divider from 'material-ui/Divider';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';

const { questionStyle, titleStyle, bodyStyle, inputStyle, buttonStyle, textareaStyle, sliderStyle, formStyle } = styles;

/* wiazard template:
    id: 0,
    title: '',
    description: '',
    hasInput: boolean,
    inputName: '',
    placeholderMessage: '',
    hasBoolean: boolean,
    booleanName: '' || null,
    hasSlider: boolean,
    sliderName: '' || null
*/

//Make human a variable for the current user
const goalWizard = [
  {
    id: 0,
    title: 'Welcome human, do you have a new goal?',
    description: 'The more specific the goal the more powerful the impact on your subconscious.',
    hasInput: true,
    inputName: 'myInput',
    placeholderMessage: 'Be as specific as possible.',
  },
  {
    id: 1,
    title: 'How will you keep track of your progress?',
    description: 'Having a way to measure your goals is the only way you\'ll know if you\'re heading in the right direction.',
    hasBoolean: true,
    booleanName: 'measurement',
  },
  {
    id: 2,
    title: 'How excited are you by this goal? Is it big? Does it scare you a little?',
    description: 'Don’t ask yourself, “Is it possible to reach this goal?” That’s the wrong question. The right questions are, “How can I achieve this goal?” and, “Am I willing to pay the price necessary to achieve this goal?” You can accomplish virtually anything if you’re willing to pay the price.',
    hasSlider: true,
    sliderName: 'howImportant'
  },
  {
    id: 3,
    title: 'What\'s a realistic deadline for this goal?',
    description: 'Don’t be afraid to set big goals, but always set realistic time frames for achieving them. There are no unrealistic goals, only unrealistic deadlines. Be patient.',
    hasInput: true,
    inputName: 'deadline',
    placeholderMessage: 'Set a realistic deadline',
  },
  {
    id: 4,
    title: 'Let\'s break down your goal into long-term and short-term goals'
  },
  {
    id: 5,
    title: 'Is there an emotional reason why you want to achieve your goal?',
    description: 'Articulating this can add extra motivaton. "1. If you have a strong enough why you can bear almost any how." - Nietzsche'
  },
  {
    id: 6,
    title: 'Does this goal conflict with another goal?',
    description: ''
  }, 
  {
    id: 7,
    title: 'Do you want to write affirmations?',
    description: 'Some people find this helpful. These will be posted on your home screen to keep them front and center. Continue to take action towards your destination even when you can’t see it yet! - Visualize them as already achieved'
  }
                
]

export const formDisplay = (object, state, onChange, handleSubmit, nextClick, backClick, skipClick) =>{
  return ( 
    <form style={formStyle} onSubmit={handleSubmit} key={object.id}>
      <h3 style={titleStyle}>{object.title}</h3>
      <Divider />
      <p style={bodyStyle}><em>{object.description}</em></p>
      {object.hasInput ? <Input style={inputStyle} name={object.inputName} placeholder={object.placeholderMessage} autoFocus/> : null}
      {object.hasBoolean ? 
        <div style={bodyStyle}>
          <input type='radio' name={object.booleanName} value=' Yes '/> Yes
          <input type='radio' name={object.booleanName} value=' No '/> No
        </div>
        : null
      }
      {object.hasSlider ? 
        <div>
          <input label="How important is this?" onChange={onChange} type="range" min="1" max="10" value={state.sliderNum} style={sliderStyle} /> 
          <p style={bodyStyle}>{state.sliderNum}</p>
        </div>
          : null}
       
       <Button size='small' color='primary' style={buttonStyle} onClick={backClick}>Back</Button>
       <Button size='small' color='accent' style={buttonStyle} onClick={skipClick}>Skip</Button>
       <Button size='small' color='primary' style={buttonStyle} onClick={nextClick}>Next ( {state.counter+1}/{goalWizard.length} )</Button>
    </form>
  )
  
}

export default goalWizard;