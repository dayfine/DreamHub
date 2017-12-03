export default [
  {
    title: 'Hello Dreamer!',
    description: 'Welcome come to DreamHub! Let\'s get started with our goalWizard.'
  },
  {
    title: 'What is this goal related to?',
    description: 'Does it fall under any of the category?',
    control: {
      type: 'category'
    }
  },
  {
    title: 'You want to travel! Where to?',
    description: 'Let\'s see what is it like out there',
    control: {
      type: 'travel'
    }
  },
  {
    title: 'Describe your goal and see what we get',
    description: 'The more specific the goal the better.',
    control: {
      type: 'autoComplete'
    }
  },
  {
    title: 'How will you keep track of your progress?',
    description: 'Having a way to measure your goals is the only way you\'ll know if you\'re heading in the right direction.',
    control: {
      type: 'text',
      name: 'measurement',
      placeholder: 'Try to quantify it'
    }
  },
  {
    title: 'How excited are you by this goal?',
    description: 'Are you willing to pay the price necessary to achieve it?',
    control: {
      type: 'range',
      name: 'importance',
      label: 'How important is this?',
      min: 1,
      max: 10
    }
  },
  {
    title: 'What\'s a realistic deadline for this goal?',
    description: 'Don’t be afraid to set big goals, but always set realistic time frames for achieving them.',
    control: {
      type: 'date',
      name: 'deadline',
      label: 'Set a realistic deadline'
    }
  },
  // {
  //   title: 'Let\'s break down your goal into long-term and short-term goals',
  //   description: 'So you can review your plans over time',
  //   controls: [
  //     {
  //       type: 'text',
  //       name: 'plan',
  //       label: 'Ultimate Goal',
  //       placeholder: 'What is your ultimate goal?'
  //     },
  //     {
  //       type: 'text',
  //       name: 'plan',
  //       label: '12 month goal',
  //       placeholder: 'What is your 12 month goal?'
  //     },
  //     {
  //       type: 'text',
  //       name: 'plan',
  //       label: 'Three month goal',
  //       placeholder: 'What is your three month goal?'
  //     },
  //     {
  //       type: 'text',
  //       name: 'plan',
  //       label: 'Weekly goal',
  //       placeholder: 'What is your weekly goal?'
  //     },
  //     {
  //       type: 'text',
  //       name: 'plan',
  //       label: 'Daily goal',
  //       placeholder: 'What is your daily goal?'
  //     }
  //   ]
  // },
  {
    title: 'What is the emotional reason behind the goal?',
    description: 'Articulating this can add extra motivaton. "If you have a strong enough why you can bear almost any how." - Nietzsche',
    control: {
      type: 'textarea',
      name: 'reasons',
      label: 'Try to articulate a little more for your own future refernence'
    }
  },
  {
    title: 'Does this goal conflict with another goal?',
    description: '',
    control: {
      type: 'radio',
      name: 'conflict',
      label: 'Oops'
    }
  },
  {
    title: 'Affirmations',
    description: 'Some people find this helpful. These will be posted on your home screen to keep them front and center. Continue to take action towards your destination even when you can’t see it yet! - Visualize them as already achieved',
    control: {
      type: 'text',
      name: 'affirmations'
    }
  },
  {
    title: 'Almost there!'
  }
]
