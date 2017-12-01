import React from 'react'
import styles from './styles'
import Divider from 'material-ui/Divider'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

const { questionStyle, titleStyle, bodyStyle, inputStyle, buttonStyle, textareaStyle, sliderStyle, formStyle, buttonFooter } = styles

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
    sliderName: '' || null,
    hasTimeline: boolean,
    hasTextarea: boolean,
    hasMultiInputs: boolean,
    hasMultiInputsName: ''
*/

// Make human a variable for the current user
const goalWizard = [
  {
    id: 0,
    title: 'Welcome human, do you have a new goal?',
    description: 'The more specific the goal the better.',
    hasInput: true,
    inputName: 'newGoal',
    placeholderMessage: 'Be as specific as possible.'
  },
  {
    id: 1,
    title: 'How will you keep track of your progress?',
    description: 'Having a way to measure your goals is the only way you\'ll know if you\'re heading in the right direction.',
    hasInput: true,
    inputName: 'measurement'
  },
  {
    id: 2,
    title: 'How excited are you by this goal? Is it worthwhile?',
    description: 'Are you willing to pay the price necessary to achieve it?',
    hasSlider: true,
    sliderName: 'howImportant'
  },
  {
    id: 3,
    title: 'What\'s a realistic deadline for this goal?',
    description: 'Don’t be afraid to set big goals, but always set realistic time frames for achieving them.',
    hasInput: true,
    inputName: 'deadline',
    placeholderMessage: 'Set a realistic deadline'
  },
  {
    id: 4,
    title: 'Let\'s break down your goal into long-term and short-term goals',
    description: '',
    hasTimeline: true
  },
  {
    id: 5,
    title: 'Is there an emotional reason why you want to achieve your goal?',
    description: 'Articulating this can add extra motivaton. "If you have a strong enough why you can bear almost any how." - Nietzsche',
    hasTextarea: true
  },
  {
    id: 6,
    title: 'Does this goal conflict with another goal?',
    description: '',
    hasBoolean: true,
    booleanName: 'goalConflict'
  },
  {
    id: 7,
    title: 'Affirmations',
    description: 'Some people find this helpful. These will be posted on your home screen to keep them front and center. Continue to take action towards your destination even when you can’t see it yet! - Visualize them as already achieved',
    hasMultiInputs: true,
    inputMultiInputsName: 'affirmations'
  }
]

export const formDisplay = (goalWiz, state, onChange, handleSubmit) => {
  return (
    <form style={formStyle} onSubmit={handleSubmit} key={goalWiz.id}>
      <h3 style={titleStyle}>{goalWiz.title}</h3>
      <Divider />
      <p style={bodyStyle}><em>{goalWiz.description}</em></p>

      {
        goalWiz.hasInput &&
        <Input id='inputId' style={Object.assign({}, inputStyle, {marginTop: '13vh'})}
          name='inputtext'
          placeholder={goalWiz.placeholderMessage}
          autoFocus />}

      {
        goalWiz.hasBoolean &&
        <div style={Object.assign({}, bodyStyle, {marginTop: '14vh'})}>
          <input type='radio' name={goalWiz.booleanName} value=' Yes ' /> Yes
          <input style={{marginLeft: '1vw'}} type='radio' name={goalWiz.booleanName} value=' No ' /> No
        </div>
      }

      {
        goalWiz.hasSlider &&
        <div>
          <input label='How important is this?'
            onChange={onChange}
            type='range' min='1' max='10'
            value={state.sliderNum}
            style={Object.assign({}, sliderStyle, {marginTop: '13vh'})} />
          <p style={bodyStyle}>{state.sliderNum}</p>
        </div>
      }

      {
       goalWiz.hasTimeline &&
       <div>
         <Input style={inputStyle} label='Ultimate Goal' placeholder='What is your ultimate goal?' type='text' />
         <Input style={inputStyle} label='12 month goal' placeholder='What is your 12 month goal?' type='text' />
         <Input style={inputStyle} label='Three month goal' placeholder='What is your three month goal?' type='text' />
         <Input style={inputStyle} label='Weekly goal' placeholder='What is your weekly goal?' type='text' />
         <Input style={inputStyle} label='Daily goal' placeholder='What are your daily goals?' type='text' />
       </div>
    }

      {
      goalWiz.hasTextarea &&
      <div>
        <TextField style={inputStyle} multiline rows='4' />
      </div>
    }

      {
      goalWiz.hasMultiInputs &&
      <div>
        <Input style={inputStyle} name={goalWiz.inputName} placeholder={goalWiz.placeholderMessage} autoFocus /> <Button style={{position: 'relative', top: '-4vh', left: '37.4vw', borderRadius: '4px', border: '1px solid #9191ff', outline: 'none'}} size='small' color='primary'>+</Button>
      </div>
    }

    </form>
  )
}

export default goalWizard
