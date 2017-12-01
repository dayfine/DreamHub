/* question template:
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

export default [
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
