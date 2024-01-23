import type { Meta, StoryObj } from '@storybook/react'
import { ExperienceCard } from './ExperienceCard'
import duelbitsIcon from '@/assets/experience/duelbits.png'

const meta = {
  title: 'Pykex/ExperienceCard',
  component: ExperienceCard,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {},
} as Meta<typeof ExperienceCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: duelbitsIcon,
    company: 'Duelbits',
    position: 'Front-end Developer',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis in ipsum et tempus. Morbi commodo pretium finibus. Nunc sed ante vel elit tempor mollis.`,
  },
}
